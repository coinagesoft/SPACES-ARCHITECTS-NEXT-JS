/**
 * Legacy WordPress -> Next.js redirect map.
 *
 * ONLY put URLs here that are genuinely the same content on the new site.
 * Everything else must 410, not 301. A 301 from a spam URL passes the
 * spam association forward; a 410 tells Google to drop it.
 *
 * Keys are the old pathname WITHOUT a trailing slash, lowercased.
 * Values are the new pathname.
 *
 * !! CONFIRM the lines marked VERIFY against the live /projects list before
 *    shipping. A 301 to a 404 is worse than a clean 410 — Google keeps the
 *    redirect in its graph and retries it. If no real equivalent exists,
 *    DELETE the line: it will then fall through to a 410, which is correct.
 */
export const LEGACY_REDIRECTS = {
  // --- Projects: old /portfolio-item/<slug> -> new /projects/<slug> ---
  '/portfolio-item/haveli-dharampura': '/projects/haveli-dharampura',
  '/portfolio-item/golden-haveli': '/projects/golden-haveli',
  '/portfolio-item/heritage-park': '/projects/heritage-park',
  '/portfolio-item/slender-house': '/projects/slender-house',
  '/portfolio-item/swatantra-residence': '/projects/swatantra-residence',
  '/portfolio-item/house-of-dancing-screens': '/projects/house-of-dancing-screens',
  '/portfolio-item/apartment-88': '/projects/apartment-88',
  '/portfolio-item/architects-office': '/projects/architects-office',
  '/portfolio-item/art-house': '/projects/art-house',
  '/portfolio-item/jaipur-residence': '/projects/jaipur-residence',
  '/portfolio-item/alaya-residence': '/projects/alaya-residence',
  '/portfolio-item/ashraya-residence-2': '/projects/ashraya-residence',
  '/portfolio-item/ashraya-residence': '/projects/ashraya-residence',
  '/portfolio-item/step-maze-house': '/projects/step-maze',
  '/portfolio-item/screen-house': '/projects/the-screen-house',
  '/portfolio-item/urban-nest': '/projects/the-urban-nest',

  // VERIFY these against your /projects slugs — delete any that don't match
  '/portfolio-item/intersekt-showroom': '/projects/intersext-showroom', // VERIFY (slug looks like a typo for "intersekt")
  '/portfolio-item/sachdeva-farmhouse': '/projects/sachdeva-residence', // VERIFY
  '/portfolio-item/marble-city-experience-centre': '/projects/marble-city-exhibition-stall', // VERIFY
  '/portfolio-item/yadav-residence': '/projects', // VERIFY — no equivalent found, consider deleting
  '/portfolio-item/stonelam': '/projects', // VERIFY — no equivalent found, consider deleting

  // --- Old taxonomy -> new filtered list ---
  '/portfolio-category/residential': '/projects?category=architecture/residential',
  '/portfolio-category/hospitality': '/projects?category=architecture/hospitality',
  '/portfolio-category/landscape': '/projects?category=architecture/landscape',
  '/portfolio-category/interior': '/projects?category=interior/apartments',
  '/portfolio-category/commercial': '/projects?category=architecture/commercial',
  '/portfolio-category/cultural': '/projects?category=architecture/cultural',
  '/portfolio-category/institutional': '/projects?category=architecture/institutional',

  // --- Standalone legacy pages ---
  '/team': '/teams',
  '/gandhi-darshan': '/projects/gandhi-darshan-park',
  '/6x18-slender-house': '/blog/6x18',
  '/haveli-dharampura-inhabitat': '/projects/haveli-dharampura',
  '/news-events/golden-haveli-inaugration': '/news-events',
  '/news-events/archello-architecture-firm': '/news-events',

  // VERIFY these three
  '/architects-residence-2': '/projects/architects-office', // VERIFY
  '/cubix-mondo': '/projects/cubix-office', // VERIFY
  '/tiles-kitchen-showroom-ad': '/projects/tiles-and-kitchen-showroom', // VERIFY
};
