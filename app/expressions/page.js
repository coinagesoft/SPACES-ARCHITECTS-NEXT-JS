import Footer from "@/components/Footer";
import ExpressionsGallery from "@/components/ExpressionsGallery";
import { assetUrl } from "@/assets";

export const metadata = { title: "Expressions — Spaces Architects@ka" };

// ============================================================
//  EXPRESSIONS
//
//  Images live on the asset host under  assets/EXPRESSIONS/...
//     EXPRESSIONS/<CATEGORY>/cover/<n>.webp    -> tile in the grid
//     EXPRESSIONS/<CATEGORY>/details/<n>.webp  -> opens when the tile is clicked
//  Cover n and details n are always the same piece (1 cover = 1 detail).
//
//  To add pieces later: upload cover/<n>.webp + details/<n>.webp and
//  raise that category's `count` below.
// ============================================================

const FOLDER = "EXPRESSIONS";

const categories = [
  { value: "lights", label: "Lights", folder: "LIGHTS", count: 28 },
  { value: "artwork", label: "Artwork", folder: "ARTWORK", count: 15 },
  { value: "furniture", label: "Furniture", folder: "FURNITURE", count: 11 },
  { value: "sculpture", label: "Sculpture", folder: "SCULPTURE", count: 10 },
];

// Menu shown in the header (ALL first)
const menuItems = [{ value: "all", label: "All" }, ...categories.map(({ value, label }) => ({ value, label }))];

// ---------- build every piece ----------
function buildItems() {
  return categories.flatMap(({ value, label, folder, count }) =>
    Array.from({ length: count }, (_, i) => {
      const n = i + 1;
      return {
        id: `${value}-${n}`,
        category: value,
        n,
        alt: `${label} ${n}`,
        cover: assetUrl(`${FOLDER}/${folder}/cover/${n}.webp`),
        details: assetUrl(`${FOLDER}/${folder}/details/${n}.webp`),
      };
    })
  );
}

// ---------- random-looking but stable mix for "ALL" ----------
// A seeded shuffle gives the same order on the server and in the browser
// (a truly random order would cause a hydration mismatch). Change SEED to
// get a different mix. The mix also avoids showing the same category twice
// in a row whenever possible.
const SEED = 7;

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function mixItems(items) {
  const rand = mulberry32(SEED);
  const pools = {};
  items.forEach((item) => (pools[item.category] ||= []).push(item));

  // shuffle inside each category
  Object.values(pools).forEach((pool) => {
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  });

  // pick the next piece from a random category (weighted by how many are left),
  // skipping the category that was just used
  const result = [];
  let last = null;
  while (result.length < items.length) {
    const open = Object.keys(pools).filter((key) => pools[key].length);
    const choices = open.filter((key) => key !== last);
    const list = choices.length ? choices : open;
    const total = list.reduce((sum, key) => sum + pools[key].length, 0);
    let roll = rand() * total;
    let pick = list[list.length - 1];
    for (const key of list) {
      roll -= pools[key].length;
      if (roll < 0) {
        pick = key;
        break;
      }
    }
    result.push(pools[pick].pop());
    last = pick;
  }
  return result;
}

export default function ExpressionsPage() {
  const all = buildItems();
  const mixed = mixItems(all);

  return (
    <main>
      <ExpressionsGallery items={mixed} menuItems={menuItems} />
      <Footer />
    </main>
  );
}