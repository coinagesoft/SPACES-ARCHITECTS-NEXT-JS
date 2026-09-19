// ---------------------------------------------------------------------
// Single source of truth for the Projects header menu AND the category
// filtering on the Projects page. Mirrors the Drive folder structure:
//
//   1. OFFICES  2. APARTMENTS  3. COMMERCIAL (Architectural / Interior)
//   4. ADAPTIVE REUSE  5. LANDSCAPE  6. RESIDENTIAL  7. INSTITUTIONAL
//   8. CULTURAL  9. HOSPITALITY
//
// Category keys look like "architecture/residential". A parent key
// ("architecture", "interior") matches every project under it.
// ---------------------------------------------------------------------

// Where the "Expressions" link in the header goes. Change if your route differs.
export const EXPRESSIONS_HREF = "/publications";

// ---------------------------------------------------------------------
// Header menu
//  - `children`  → filter categories (click = sort the projects page)
//  - `links`     → direct project links (click = open the project page)
// ---------------------------------------------------------------------
export const MENU = [
  { label: "All Projects", key: "all" },
  {
    label: "Architecture",
    key: "architecture",
    children: [
      { label: "Residential", key: "architecture/residential" },
      { label: "Adaptive Reuse", key: "architecture/adaptive-reuse" },
      { label: "Institutional", key: "architecture/institutional" },
      { label: "Hospitality", key: "architecture/hospitality" },
      { label: "Cultural", key: "architecture/cultural" },
      { label: "Commercial", key: "architecture/commercial" },
      { label: "Landscape", key: "architecture/landscape" },
    ],
  },
  {
    label: "Interior",
    key: "interior",
    children: [
      { label: "Apartments", key: "interior/apartments" },
      { label: "Offices", key: "interior/offices" },
      { label: "Commercial", key: "interior/commercial" },
    ],
  },
  {
    // Clicking the label filters to adaptive-reuse projects; the list below
    // it goes straight to each project's detail page.
    label: "Adaptive Reuse",
    key: "adaptive-reuse",
    links: [
      { label: "Haveli Dharampura", href: "/projects/haveli-dharampura" },
      { label: "Golden Haveli", href: "/projects/golden-haveli" },
      { label: "Lahori Gate Museum", href: "/projects/lahori-gate-museum" },
      { label: "Sonipat Haveli", href: "/projects/sonipat-havelli" },
    ],
  },
  { label: "Expressions", href: EXPRESSIONS_HREF },
];

// The top-level "Adaptive Reuse" filter is the same set as
// Architecture → Adaptive Reuse.
const KEY_ALIASES = {
  "adaptive-reuse": "architecture/adaptive-reuse",
};

// ---------------------------------------------------------------------
// Which project belongs to which category. Names are the gallery item
// names (assets.projectGallery[].name). A project can sit in more than
// one category. Matching ignores case, spaces and punctuation, so
// "Architect's Office" / "Architects Office" both work.
// ---------------------------------------------------------------------
const CATEGORY_PROJECTS = {
  // 6. RESIDENTIAL
  "architecture/residential": [
    "Alaya Residence",
    "Aravali Farmhouse",
    "Art House",
    "Ashraya Residence",
    "Bhimtal Resort",
    "The Blue Courtyard",
    "Concrete House",
    "Floating Courtyard House",
    "Gupta's Residence",
    "House Around a Tree",
    "House of Curves",
    "House of Dancing Screens",
    "House of Hues",
    "House of Sculpted Screens",
    "House of Stepped Garden",
    "House on Hill",
    "J House",
    "Jain's Residence",
    "Jaipur Residence",
    "Kavyam",
    "Library House",
    "Poetic House",
    "Rasa Farmhouse",
    "Sachdeva Farmhouse",
    "Sanctum House",
    "Screen House",
    "Sethi's Residence",
    "Slender House",
    "Sobhti Residence",
    "Step Maze",
    "Swatantra Residence",
    "Brick House",
    "The Garden House",
    "The Urban Nest",
    "Gurdeep ji Ka Ghar", // not in a Drive folder — filed here as a house
  ],

  // 4. ADAPTIVE REUSE
  "architecture/adaptive-reuse": [
    "Golden Haveli",
    "Haveli Dharampura",
    "Lahori Gate Museum",
    "Sonipat Havelli",
    "Sonipat Haveli",
  ],

  // 7. INSTITUTIONAL
  "architecture/institutional": [
    "Adharshila Vatika Kindergarten",
    "Toy Bank Museum",
  ],

  // 9. HOSPITALITY
  "architecture/hospitality": ["Bhimtal Resort", "Shri Vrinda Hotel"],

  // 8. CULTURAL
  "architecture/cultural": [
    "Bandikui Railway Station",
    "Dispensary Sonipat",
    "The Stepwell",
    "Heritage Park Extension",
  ],

  // 3. COMMERCIAL → ARCHITECTURAL
  "architecture/commercial": ["Intersext Showroom", "Stonex India Building"],

  // 5. LANDSCAPE
  "architecture/landscape": ["Gandhi Darshan Park", "Heritage Park"],

  // 2. APARTMENTS
  "interior/apartments": [
    "Apartment 88",
    "Astra Heights",
    "Color Dialogue",
    "Colour Dialogue",
    "Grey Apartments",
    "House in Harmony",
    "JP Apartment",
    "Krisha's Residence",
    "Palette Apartment",
    "Pattern Play",
    "Solance Apartment",
    "The Canvas",
    "Veya Apartment",
  ],

  // 1. OFFICES
  "interior/offices": [
    "AMG Office",
    "Architect's Office",
    "Color Box Office",
    "The Colour Box Office",
    "Cubix Office",
    "Express Office",
    "Fuidic Office",
    "Imelda.Inc",
    "Marmo Home Office",
    "NOCC Office",
    "Signature Office",
    "Studio Element",
  ],

  // 3. COMMERCIAL → INTERIOR
  "interior/commercial": [
    "Color Court",
    "Glulam Showroom",
    "Hansgrohe Showroom",
    "Legend Veneer Exhibition - Delhi",
    "Legend Venner Exhibition - Mumbai",
    "Marble City Exhibition Stall",
    "Saatvik Marble Showroom",
    "Tiles and Kitchen Showroom",
    "Tiles & Kitchen Showroom",
  ],
};

const norm = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");

// normalised project name → [category keys]
const PROJECT_CATEGORIES = new Map();
Object.entries(CATEGORY_PROJECTS).forEach(([key, names]) => {
  names.forEach((name) => {
    const id = norm(name);
    const list = PROJECT_CATEGORIES.get(id) || [];
    if (!list.includes(key)) list.push(key);
    PROJECT_CATEGORIES.set(id, list);
  });
});

// Every key the menu can produce (used to validate ?category= in the URL).
const VALID_KEYS = new Set(["all"]);
MENU.forEach((item) => {
  if (item.key) VALID_KEYS.add(item.key);
  (item.children || []).forEach((child) => VALID_KEYS.add(child.key));
});

export function isValidCategory(key) {
  return VALID_KEYS.has(key);
}

// Does the project called `name` belong under category `key`?
export function projectMatchesCategory(name, key) {
  if (!key || key === "all") return true;
  const target = KEY_ALIASES[key] || key;
  const categories = PROJECT_CATEGORIES.get(norm(name)) || [];
  return categories.some((c) => c === target || c.startsWith(`${target}/`));
}