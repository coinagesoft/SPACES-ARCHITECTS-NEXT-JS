/**
 * ============================================================
 *  SITE ASSETS — SINGLE SOURCE OF TRUTH
 * ============================================================
 * Every image used anywhere on the site is referenced from this
 * one file. Swap a URL/path here and it updates everywhere that
 * image is used.
 *
 * Two ways to point to your own images:
 *   a) Drop files into /public/images/... and reference them as
 *      "/images/your-file.jpg"
 *   b) Keep using remote URLs (make sure the domain is added to
 *      images.remotePatterns in next.config.mjs)
 *
 * Placeholder photography below is from Unsplash/Picsum purely
 * so the project runs out of the box — replace with real project
 * photography before shipping.
 * ============================================================
 */

const unsplash = (id, w = 1600, h = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const assets = {
  // ---- Brand ----
  logoText: "SPACES ARCHITECTS",
  logoSuffix: "@ka",

  // ---- Home page ----
  home: {
    heroImage: unsplash("photo-1600585154340-be6161a56a0c", 1920, 1080),
    heroTitle: "HOUSE OF STEPPED GARDEN",
    heroSubtitle: "KOCHI",
    menuThumb: unsplash("photo-1600607687939-ce8a6c25118c", 900, 900),
  },

  // ---- About / Studio page ----
  about: {
    heroImage: unsplash("photo-1497366216548-37526070297c", 1920, 900),
    founderPhoto: unsplash("photo-1560250097-0b93528c311a", 900, 1100),
  },

  // ---- Featured Projects (home grid) ----
  featuredProjects: [
    { name: "Art House", image: unsplash("photo-1600585154526-990dced4db0d", 700, 700) },
    { name: "House of Stepped Garden", image: unsplash("photo-1600596542815-ffad4c1539a9", 700, 700) },
    { name: "Library House", image: unsplash("photo-1600210492486-724fe5c67fb0", 700, 700) },
    { name: "Swatantra Residence", image: unsplash("photo-1600607687920-4e2a09cf159d", 700, 700) },
  ],

  // ---- Featured News (home grid) ----
  featuredNews: [
    { name: "Dezeen Exclusive Feature", source: "Dezeen", image: unsplash("photo-1524758631624-e2822e304c36", 700, 700) },
    { name: "Architectural Digest India Feature", source: "AD", image: unsplash("photo-1600566753086-00f18fb6b3ea", 700, 700) },
    { name: "Gandhi Darshan Park Inauguration", source: "Press", image: unsplash("photo-1529156069898-49953e39b3ac", 700, 700) },
    { name: "Golden Haveli Inauguration", source: "Press", image: unsplash("photo-1517457373958-b7bdd4587205", 700, 700) },
  ],

  // ---- Featured In (press logo strip) — text-based marks, no external logo files needed ----
  featuredIn: [
    "Dezeen", "RTF", "Beautiful Homes", "AΔ", "ArchDaily", "NDTV",
    "India Today", "The Print", "HT", "TOI", "AD", "UIA",
    "UNESCO", "Architizer", "Curly Tales", "The Indian Express",
    "Habitus Living", "ABP Live",
  ],

  // ---- Projects / Blog grid page ----
  projects: [
    {
      id: "art-house",
      name: "Art House",
      excerpt:
        "A residence conceived around a sculptural steel staircase, where art, light and landscape shape every threshold.",
      image: unsplash("photo-1600585154526-990dced4db0d", 900, 900),
    },
    {
      id: "house-of-stepped-garden",
      name: "House of Stepped Garden",
      excerpt:
        "Terraced greenery cascades down the facade of this Kochi home, blurring the line between architecture and landscape.",
      image: unsplash("photo-1600596542815-ffad4c1539a9", 900, 900),
    },
    {
      id: "library-house",
      name: "Library House",
      excerpt:
        "Timber joinery and quiet reading nooks define a home built around the ritual of books and natural light.",
      image: unsplash("photo-1600210492486-724fe5c67fb0", 900, 900),
    },
    {
      id: "swatantra-residence",
      name: "Swatantra Residence",
      excerpt:
        "An interior of warm wood and soft daylight, designed as a series of intimate, memory-laden living moments.",
      image: unsplash("photo-1600607687920-4e2a09cf159d", 900, 900),
    },
    {
      id: "sectional-study",
      name: "Sectional Study",
      excerpt:
        "A hand-drawn section illustrates the vertical choreography of light, stair and courtyard across four levels.",
      image: unsplash("photo-1600210491892-03d54c0aaf87", 900, 900),
    },
    {
      id: "heritage-textile-room",
      name: "Heritage Textile Room",
      excerpt:
        "A restored interior where patterned textiles and vintage lighting speak to the building's layered history.",
      image: unsplash("photo-1616486338812-3dadae4b4ace", 900, 900),
    },
    {
      id: "courtyard-veranda",
      name: "Courtyard Veranda",
      excerpt:
        "A resident pauses at the veranda's edge, framed by timber louvres and a canopy of overhanging trees.",
      image: unsplash("photo-1600566752355-35792bedcfea", 900, 900),
    },
    {
      id: "marble-living-room",
      name: "Marble Living Room",
      excerpt:
        "Book-matched marble and a restrained material palette bring a quiet monumentality to the living space.",
      image: unsplash("photo-1615873968403-89e068629265", 900, 900),
    },
  ],

  // ---- Blog page (editorial / journal entries) ----
  blog: [
    {
      id: "emotional-architecture",
      title: "Designing for Emotion: Our Approach to Every Project",
      date: "Aug 2026",
      image: unsplash("photo-1600585154340-be6161a56a0c", 900, 700),
      excerpt:
        "Every project begins as a story — how we let context, light and material shape a distinct identity.",
    },
    {
      id: "heritage-restoration",
      title: "Bringing Haveli Dharampura Back to Life",
      date: "Jun 2026",
      image: unsplash("photo-1497366811353-6870744d04b2", 900, 700),
      excerpt:
        "Inside the UNESCO award-winning restoration that reconnected Old Delhi with its living traditions.",
    },
    {
      id: "material-palette",
      title: "Stone, Timber, Light: Building a Material Language",
      date: "Mar 2026",
      image: unsplash("photo-1600566753190-17f0baa2a6c3", 900, 700),
      excerpt:
        "How the studio selects and sequences materials to create warmth, texture and a sense of permanence.",
    },
  ],
};

export default assets;
