/**
 * Generates config/asset-manifest.json — a { "relative/path.jpg": { width, height } }
 * map for every image under public/assets.
 *
 * Why this exists: config/assets.js now points at images hosted on a remote
 * media server (ASSET_BASE_URL) instead of importing them as local files.
 * next/image and every ratio()/width/height calculation across the project
 * pages still need to know each image's real pixel dimensions up front, so
 * this script reads them once from the actual files and writes them to a
 * small JSON file that gets committed to the repo (the images themselves
 * don't need to be).
 *
 * Usage:
 *   1. Make sure the real photography is present locally under public/assets
 *      (this is the one time you need the files on disk, even though they
 *      won't be bundled or deployed with the app).
 *   2. npm install --save-dev image-size
 *   3. node scripts/generate-asset-manifest.mjs
 *   4. Commit the updated config/asset-manifest.json
 *
 * Re-run it any time you add, replace, or resize an image on the media
 * server so the dimensions stay in sync.
 */
import { readdir, stat, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { imageSize } from "image-size";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const assetsDir = path.join(projectRoot, "public", "assets");
const outFile = path.join(projectRoot, "config", "asset-manifest.json");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const exists = await stat(assetsDir).catch(() => null);
  if (!exists) {
    console.error(
      `Could not find ${assetsDir}.\n` +
        `Place the real image files under public/assets before running this script.`
    );
    process.exit(1);
  }

  const allFiles = await walk(assetsDir);
  const imageFiles = allFiles.filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));

  const manifest = {};
  let ok = 0;
  let failed = 0;

  for (const file of imageFiles) {
    const relPath = path.relative(assetsDir, file).split(path.sep).join("/");
    try {
      const { width, height } = imageSize(file);
      manifest[relPath] = { width, height };
      ok++;
    } catch (err) {
      console.warn(`Could not read dimensions for ${relPath}: ${err.message}`);
      failed++;
    }
  }

  await writeFile(outFile, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log(`Wrote ${ok} entries to ${path.relative(projectRoot, outFile)} (${failed} failed).`);
}

main();
