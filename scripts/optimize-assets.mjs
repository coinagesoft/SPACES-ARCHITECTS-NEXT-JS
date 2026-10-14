/**
 * optimize-assets.mjs — shrinks oversized images so the site loads fast.
 *
 * WHY: most photos on the asset server are 5000–12000px wide (median ~17
 * megapixels, some 50–80MP). Next's image optimizer has to download and decode
 * every one of them before it can serve a small version, so the first visit to
 * a page is very slow. The site never shows more than ~1920px wide, so
 * anything bigger is wasted.
 *
 * TWO MODES
 *
 *  A) REMOTE (use this when you do NOT have all images locally)
 *       node scripts/optimize-assets.mjs --remote
 *     - reads config/asset-manifest.json to find every image whose longest
 *       side is bigger than --max (default 2400px)
 *     - downloads ONLY those from your asset server, shrinks them, and saves
 *       them into public/assets-optimized (same folder layout and file names)
 *     - images that are already small are not downloaded and need no upload
 *     - also include images that are not in the manifest (Testimonials, News
 *       and Event page, EXPRESSIONS...) by listing them in a text file, one
 *       path per line, relative to /assets/, and passing:
 *          --extra scripts/extra-images.txt
 *       e.g.   Testimonials/Ashraya residence.jpg
 *              News and Event page/02.Golden Haveli_theprint.webp
 *              EXPRESSIONS/LIGHTS/cover/1.webp
 *
 *  B) LOCAL (you have the full folder on disk)
 *       node scripts/optimize-assets.mjs
 *     - reads every image under public/assets and writes shrunk copies.
 *
 * OPTIONS
 *   --remote          download from the asset server instead of reading disk
 *   --base <url>      asset server  (default: NEXT_PUBLIC_ASSET_BASE_URL or
 *                     https://assets.spacesarchitects-ka.com)
 *   --extra <file>    extra relative paths to process (remote mode)
 *   --src <dir>       local input folder   (default: public/assets)
 *   --out <dir>       output folder        (default: public/assets-optimized)
 *   --max <px>        longest side in px   (default: 2400)
 *   --quality <1-100> webp/jpg quality     (default: 80)
 *   --no-manifest     do not touch config/asset-manifest.json
 *
 * File names, extensions and folders stay IDENTICAL, so no code changes are
 * needed after you upload the result. Aspect ratios are preserved.
 *
 * AFTER IT FINISHES
 *   1. Keep a backup of the original images on the server.
 *   2. Upload the contents of public/assets-optimized to the asset server,
 *      replacing the files under /assets/ (same names).
 *   3. Bump NEXT_PUBLIC_ASSET_VERSION (e.g. 1 -> 2) so browsers and the Next
 *      image cache fetch the new files.
 *   4. Commit the updated config/asset-manifest.json and redeploy.
 *
 * Safe to re-run: files already present in the output folder are skipped.
 * Do NOT run it on an already-uploaded optimized folder expecting more savings.
 */
import { readdir, stat, mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// ---------- options ----------
const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : fallback;
};
const REMOTE = args.includes("--remote");
const BASE = (opt("base", process.env.NEXT_PUBLIC_ASSET_BASE_URL || "https://assets.spacesarchitects-ka.com")).replace(/\/$/, "");
const SRC = path.resolve(projectRoot, opt("src", "public/assets"));
const OUT = path.resolve(projectRoot, opt("out", "public/assets-optimized"));
const EXTRA = opt("extra", null);
const MAX = parseInt(opt("max", "2400"), 10);
const QUALITY = parseInt(opt("quality", "80"), 10);
const WRITE_MANIFEST = !args.includes("--no-manifest");
const MANIFEST = path.join(projectRoot, "config", "asset-manifest.json");

const RASTER = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const CONCURRENCY = 2; // big photos use a lot of RAM while decoding

sharp.cache(false);

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
const exists = (p) => stat(p).catch(() => null);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function download(rel) {
  const url = `${BASE}/assets/${rel.split("/").map(encodeURIComponent).join("/")}`;
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
  throw new Error(`download failed (${lastErr?.message}) ${url}`);
}

// Shrinks one image buffer and writes it to OUT/<rel>. Returns { width, height, bytes }.
async function optimize(rel, buffer) {
  const ext = path.extname(rel).toLowerCase();
  const target = path.join(OUT, rel);
  await mkdir(path.dirname(target), { recursive: true });

  const meta = await sharp(buffer, { limitInputPixels: false }).metadata();
  const needsResize = Math.max(meta.width || 0, meta.height || 0) > MAX;

  let pipeline = sharp(buffer, { limitInputPixels: false }).rotate(); // bake EXIF orientation
  if (needsResize) {
    pipeline = pipeline.resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
  }
  if (ext === ".webp") pipeline = pipeline.webp({ quality: QUALITY, effort: 4 });
  else if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9 });
  else pipeline = pipeline.jpeg({ quality: Math.min(100, QUALITY + 2), mozjpeg: true });

  let out = await pipeline.toBuffer();
  // never make a file bigger when no resize was needed: keep the original bytes
  if (!needsResize && out.length >= buffer.length) out = buffer;

  await writeFile(target, out);
  const m = await sharp(out, { limitInputPixels: false }).metadata();
  return { width: m.width, height: m.height, bytes: out.length };
}

async function runPool(items, worker) {
  let next = 0;
  let finished = 0;
  async function loop() {
    while (next < items.length) {
      const item = items[next++];
      await worker(item);
      finished++;
      if (finished % 10 === 0 || finished === items.length) {
        process.stdout.write(`\r  ${finished}/${items.length} done`);
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, loop));
  if (items.length) console.log("\n");
}

async function loadManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST, "utf8"));
  } catch {
    return {};
  }
}

async function main() {
  const existingManifest = await loadManifest();
  const newEntries = {};
  const stats = { before: 0, after: 0, optimized: 0, skipped: 0, failed: 0, ignoredSmall: 0 };

  // ---- build the work list: [{ rel, read: () => Promise<Buffer> }] ----
  let work = [];

  if (REMOTE) {
    const manifestKeys = Object.keys(existingManifest);
    if (manifestKeys.length === 0) {
      console.error("config/asset-manifest.json is empty or missing — remote mode needs it to know what to download.");
      process.exit(1);
    }
    const big = manifestKeys.filter((rel) => {
      if (!RASTER.has(path.extname(rel).toLowerCase())) return false;
      const d = existingManifest[rel];
      return Math.max(d.width, d.height) > MAX;
    });
    stats.ignoredSmall = manifestKeys.length - big.length;
    work = big.map((rel) => ({ rel }));

    if (EXTRA) {
      const lines = (await readFile(path.resolve(projectRoot, EXTRA), "utf8"))
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith("#"));
      for (const rel of lines) {
        if (RASTER.has(path.extname(rel).toLowerCase()) && !work.some((w) => w.rel === rel)) work.push({ rel });
      }
    }
    work.forEach((w) => (w.read = () => download(w.rel)));
    console.log(`Remote mode: ${BASE}`);
    console.log(`${work.length} images to download and shrink (${stats.ignoredSmall} manifest entries are already small and are left alone).`);
  } else {
    if (!(await exists(SRC))) {
      console.error(
        `Could not find ${SRC}\n` +
          `Either put your images there, point to them with --src "D:/path/to/assets",\n` +
          `or download them from the server with:  node scripts/optimize-assets.mjs --remote`
      );
      process.exit(1);
    }
    const files = (await walk(SRC)).filter((f) => RASTER.has(path.extname(f).toLowerCase()));
    work = files.map((f) => ({
      rel: path.relative(SRC, f).split(path.sep).join("/"),
      read: () => readFile(f),
    }));
    console.log(`Local mode: ${work.length} images found in ${path.relative(projectRoot, SRC)}`);
  }

  console.log(`Longest side <= ${MAX}px, quality ${QUALITY}  ->  ${path.relative(projectRoot, OUT)}\n`);

  await runPool(work, async ({ rel, read }) => {
    const target = path.join(OUT, rel);
    try {
      const done = await exists(target);
      if (done) {
        // resumable: already produced on an earlier run
        const m = await sharp(target, { limitInputPixels: false }).metadata();
        newEntries[rel] = { width: m.width, height: m.height };
        stats.skipped++;
        stats.after += done.size;
        return;
      }
      const buffer = await read();
      stats.before += buffer.length;
      const r = await optimize(rel, buffer);
      newEntries[rel] = { width: r.width, height: r.height };
      stats.after += r.bytes;
      stats.optimized++;
    } catch (err) {
      console.warn(`\n  ! ${rel}: ${err.message} (skipped — nothing written for this file)`);
      stats.failed++;
    }
  });

  if (WRITE_MANIFEST && Object.keys(newEntries).length) {
    const merged = { ...existingManifest, ...newEntries };
    const sorted = Object.fromEntries(Object.entries(merged).sort(([a], [b]) => a.localeCompare(b)));
    await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + "\n", "utf8");
    console.log(`Updated ${path.relative(projectRoot, MANIFEST)} (${Object.keys(newEntries).length} entries refreshed)`);
  }

  console.log(`Shrunk: ${stats.optimized}  |  skipped (already done): ${stats.skipped}  |  failed: ${stats.failed}`);
  if (stats.before) console.log(`Downloaded/read ${mb(stats.before)} MB  ->  saved ${mb(stats.after - 0)} MB (this run + skipped)`);
  console.log(`\nNext: upload the contents of "${path.relative(projectRoot, OUT)}" to the asset server, then bump NEXT_PUBLIC_ASSET_VERSION.`);
  if (stats.failed) console.log(`Re-run the same command to retry the ${stats.failed} failed file(s).`);
}

main();
