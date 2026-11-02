// One-off codemod: wires every page to the SEO text in config/seo.js.
// Run from the project root:   node scripts/fix-page-metadata.mjs
// Safe to run twice. It only touches app/**/page.js files.
import fs from "node:fs";
import path from "node:path";

const APP = path.join(process.cwd(), "app");

// top-level page folder -> key in pageSeo (config/seo.js)
const CORE = {
  about: "about", process: "process", expressions: "expressions",
  publications: "publications", awards: "awards", testimonials: "testimonials",
  teams: "teams", faq: "faq", "news-events": "news-events", blog: "blog",
};

function removeMetadataBlock(src) {
  const m = src.match(/export const metadata\s*=\s*\{/);
  if (!m) return src;
  let i = m.index + m[0].length, depth = 1, inStr = null;
  while (i < src.length && depth > 0) {
    const c = src[i];
    if (inStr) { if (c === "\\") i++; else if (c === inStr) inStr = null; }
    else if (c === '"' || c === "'" || c === "`") inStr = c;
    else if (c === "{") depth++;
    else if (c === "}") depth--;
    i++;
  }
  while (src[i] === ";" || src[i] === " ") i++;
  if (src[i] === "\n") i++;
  return src.slice(0, m.index) + src.slice(i);
}

function addImportAndExport(src, fn, call) {
  src = removeMetadataBlock(src);
  const imp = `import { ${fn} } from "@/config/seo";\n`;
  if (!src.includes(imp)) {
    const lines = src.split("\n");
    let last = -1;
    lines.forEach((l, idx) => { if (/^import .* from /.test(l)) last = idx; });
    lines.splice(last + 1, 0, imp.trimEnd(), "", `export const metadata = ${call};`);
    return lines.join("\n");
  }
  return src;
}

let changed = 0;
function write(file, next) {
  if (fs.readFileSync(file, "utf8") !== next) { fs.writeFileSync(file, next); changed++; console.log("patched", path.relative(process.cwd(), file)); }
}

// 1. project pages
const projDir = path.join(APP, "projects");
for (const slug of fs.readdirSync(projDir)) {
  const file = path.join(projDir, slug, "page.js");
  if (!fs.existsSync(file)) continue;
  write(file, addImportAndExport(fs.readFileSync(file, "utf8"), "projectMetadata", `projectMetadata("${slug}")`));
}

// 2. core pages
for (const [folder, key] of Object.entries(CORE)) {
  const file = path.join(APP, folder, "page.js");
  if (!fs.existsSync(file)) continue;
  write(file, addImportAndExport(fs.readFileSync(file, "utf8"), "pageMetadata", `pageMetadata("${key}")`));
}
console.log(changed ? `Done: ${changed} file(s) patched.` : "Nothing to change.");
