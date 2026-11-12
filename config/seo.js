import { site } from "./site";

const SITE_URL = "https://spacesarchitects-ka.com";
const SITE_NAME = "Spaces Architects@ka";

// Optional default preview image for WhatsApp / LinkedIn / X link previews.
// Use a JPG or PNG, at least 1200px wide, for example:
//   "https://assets.spacesarchitects-ka.com/assets/<folder>/<image>.jpg"
// Any entry below can also set its own `image: "..."` to override this.
const DEFAULT_OG_IMAGE = null;

/* ------------------------------------------------------------------
   1. SITE-WIDE DEFAULTS (used by app/layout.js)
      export const metadata = siteMetadata;
------------------------------------------------------------------ */
export const siteMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: site.tagline,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    title: SITE_NAME,
    description: site.tagline,
  },
};

/* ------------------------------------------------------------------
   SHARED BUILDER (do not edit)
   Every title in this file is already a complete title, so the
   layout's " | Spaces Architects@ka" suffix is skipped (title.absolute).
------------------------------------------------------------------ */
function buildMetadata({ title, description, keywords, path, type = "website", image }) {
  const url = `${SITE_URL}${path}`;
  const img = image || DEFAULT_OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      ...(img ? { images: [img] } : {}),
    },
  };
}

const humanize = (slug) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

/* ------------------------------------------------------------------
   2. CORE PAGES (home, projects, about, faq, contact...)
   Use in the page.js of each page:
     import { pageMetadata } from "@/config/seo";
     export const metadata = pageMetadata("about");
   Keys: home, projects, news-events, blog, about, process, expressions,
         publications, awards, contact, testimonials, teams, faq
   NOTE: "projects" is handled by projectsListingMetadata() in section 4,
         because /projects also serves the category pages.
------------------------------------------------------------------ */
const pageSeo = {
  "home": {
    path: "/",
    title: "Spaces Architects@ka | Architects in Delhi, NCR",
    description:
      "Award-winning architects in Delhi, Gurgaon & Noida. A South Delhi studio designing luxury homes, interiors, offices and landscape since 2000.",
    keywords: "architects in delhi, architects in gurgaon, architects in noida, spaces architects, office interior designers in delhi, architects in south delhi, landscape architects in delhi, best architects in delhi, luxury interior designers in delhi",
  },
  "projects": {
    path: "/projects",
    title: "Projects | Architecture & Interiors Across Delhi NCR",
    description:
      "Eighty completed projects by Spaces Architects@ka — luxury homes, farmhouses, offices, heritage restoration and public landscape across Delhi NCR.",
    keywords: "architects in delhi, architecture projects delhi, architects in gurgaon, architects in noida, interior design projects delhi",
  },
  "news-events": {
    path: "/news-events",
    title: "News & Events | Press Coverage & Inaugurations",
    description:
      "Coverage in the BBC, Financial Times, Guardian and CNN, plus the Presidential and Ministerial inaugurations of Gandhi Darshan and Golden Haveli.",
    keywords: "best architects in delhi, spaces architects news, architect press coverage india, top architects in delhi",
  },
  "blog": {
    path: "/blog",
    title: "Blogs | Journal | notes on Architecture , Heritage & Design",
    description:
      "Essays on haveli restoration, courtyards, screens, exposed concrete and designing for narrow sites — written from 25 years of practice in Delhi.",
    keywords: "architects in delhi, architecture blog india, haveli restoration, courtyard house design india, spaces architects",
  },
  "about": {
    path: "/about",
    title: "About Spaces Architects@ka | Delhi Architecture Studio",
    description:
      "Founded by Kapil Aggarwal in 2000. A New Delhi architecture studio with 59 awards, seven WAF finalist recognitions and 300+ media features.",
    keywords: "spaces architects, best architects in delhi, kapil aggarwal architect, architecture studio delhi, architects in south delhi",
  },
  "process": {
    path: "/process",
    title: "Our Design Process | Spaces Architects@ka, New Delhi",
    description:
      "Six stages from brief to build: design storytelling, sustainable symbiosis, VR walkthroughs, sketching and physical model making at our Delhi studio.",
    keywords: "architects in delhi, architect design process, spaces architects, architecture firm process delhi",
  },
  "expressions": {
    path: "/expressions",
    title: "Expressions | Bespoke Lighting, Furniture & Art",
    description:
      "Lighting, furniture, artwork and sculpture designed in-house for our interiors — over 70 bespoke pieces by Spaces Architects@ka, New Delhi.",
    keywords: "luxury interior designers in delhi, bespoke furniture design delhi, custom lighting design india, spaces architects",
  },
  "publications": {
    path: "/publications",
    title: "Publications | 208 Features in Indian & Global Media",
    description:
      "208 features across Dezeen, ArchDaily, Architectural Digest, the BBC and the Financial Times, plus 86 magazine covers and 34 books including Timeless Houses.",
    keywords: "best architects in delhi, architects featured in dezeen, top architects in delhi, archdaily india architect, spaces architects",
  },
  "awards": {
    path: "/awards",
    title: "Awards | 59 Architecture & Design Awards Since 2007",
    description:
      "59 awards since 2007 — UNESCO Asia-Pacific Heritage, AD50, Forbes Best Conservation, and World Architecture Festival and ArchDaily finalist listings.",
    keywords: "best architects in delhi, award winning architects india, top architects in delhi, spaces architects, unesco heritage award architect",
  },
  "contact": {
    path: "/contact",
    title: "Contact | Architects in South Delhi, South Extension II",
    description:
      "Spaces Architects@ka studio at A-21/A, South Extension II, New Delhi 110049. Call +91 11 4310 8540, WhatsApp +91 93110 13122 or enquire online.",
    keywords: "architects in south delhi, spaces architects, architects south extension, contact architect delhi, architects in delhi",
  },
  "testimonials": {
    path: "/testimonials",
    title: "Client Testimonials | Spaces Architects@ka, Delhi",
    description:
      "What clients say after living in the houses we designed — Ashraya Residence, House of Stepped Gardens, Screen House, Swatantra Residence and more.",
    keywords: "spaces architects reviews, architects in delhi, architect testimonials delhi, best architects in delhi",
  },
  "teams": {
    path: "/teams",
    title: "Our Team | 20 Architects & Designers in New Delhi",
    description:
      "The twenty people behind Spaces Architects@ka — architects, design apprentices, site engineers and an in-house artist, led from South Extension II.",
    keywords: "spaces architects, architects in new delhi, architects in south delhi, architecture studio team delhi",
  },
  "faq": {
    path: "/faq",
    title: "Architect FAQs | Fees, Process & Timelines in Delhi",
    description:
      "How we work, what architects charge in India, how long design takes and what to bring to a first meeting. Answers from a Delhi practice of 25 years.",
    keywords: "architect fees in india, architects in delhi, architect charges delhi, hiring an architect delhi, spaces architects",
  },
};

export function pageMetadata(key) {
  const p = pageSeo[key];
  if (!p) return {};
  return buildMetadata({ ...p, type: "website" });
}

/* ------------------------------------------------------------------
   3. PROJECT PAGES (80)
   Key = folder name in app/projects/.
   Use in app/projects/<slug>/page.js:
     import { projectMetadata } from "@/config/seo";
     export const metadata = projectMetadata("<slug>");
------------------------------------------------------------------ */
const projectSeo = {
  "haveli-dharampura": {
    title: "Haveli Dharampura | Heritage Restoration in Old Delhi",
    description:
      "Restoration of an 1880s haveli in Chandni Chowk into a 14-room hotel, spa and museum. Winner, UNESCO Asia-Pacific Heritage Award 2017.",
    keywords: "haveli dharampura, heritage restoration delhi, conservation architects india, architects in delhi, spaces architects",
  },
  "art-house": {
    title: "Art House | Private Residence in New Delhi",
    description:
      "An 11,000 sq ft Delhi home whose climate-responsive facade of fins, deep overhangs and perforated screens tempers the heat and filters daylight.",
    keywords: "art house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "house-of-stepped-garden": {
    title: "House of Stepped Garden | Private Residence in Kochi",
    description:
      "A 36,500 sq ft Kochi home driven by section — cascading split levels follow the contoured site while stepped gardens blur house and landscape.",
    keywords: "house of stepped garden, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "heritage-park": {
    title: "Heritage Park | Landscape in Old Delhi",
    description:
      "A 1.83-acre public landscape in Chandni Chowk for the MCD, blending Mughal and Hindu influences in Delhi stone and red sandstone.",
    keywords: "heritage park, landscape architects in delhi, landscape design delhi ncr, public park design india, spaces architects",
  },
  "golden-haveli": {
    title: "Golden Haveli | Heritage Restoration in Old Delhi",
    description:
      "A 1906 Mughal-influenced haveli in Chandni Chowk restored as a heritage hotel, its sky-open courtyard reconnecting guests to Old Delhi. 6,000 sq ft.",
    keywords: "golden haveli, heritage restoration delhi, conservation architects india, architects in delhi, spaces architects",
  },
  "library-house": {
    title: "Library House | Private Residence in Gurgaon",
    description:
      "An 8,000 sq ft Gurgaon home for three generations, built around a triple-height courtyard and a cantilevered library full of light and greenery.",
    keywords: "library house, architects in gurgaon, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "swatantra-residence": {
    title: "Swatantra Residence | Private Residence in Agra",
    description:
      "An 11,000 sq ft multigenerational home in Agra where a triple-height courtyard links the levels and jaalis frame glimpses of interior life.",
    keywords: "swatantra residence, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "house-of-dancing-screens": {
    title: "House of Dancing Screens | Private Residence in Ambala",
    description:
      "A 12,000 sq ft Ambala home completed in 2024, its pivoting screens responding to wind, light and privacy to give the facade a shifting rhythm.",
    keywords: "house of dancing screens, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "slender-house": {
    title: "Slender House | Private Residence in Model Town, New Delhi",
    description:
      "A 6,550 sq ft home on a 6 x 18 metre plot in Model Town, Delhi. Staggered cut-outs and skylights bring light and cross-ventilation to a narrow site.",
    keywords: "slender house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "step-maze": {
    title: "Step Maze | Private Residence in Model Town, New Delhi",
    description:
      "An 8,600 sq ft corner-plot home in Model Town whose staggered staircase core turns movement into discovery, drawing in light while screens keep privacy.",
    keywords: "step maze, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "intersext-showroom": {
    title: "Intersekt Showroom | Showroom in Okhla, New Delhi",
    description:
      "A former Okhla warehouse reimagined as a 30,000 sq ft museum-like tile showroom, presenting tile as a sustainable alternative to natural stone.",
    keywords: "intersext showroom, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "ashraya-residence": {
    title: "Ashraya Residence | Private Residence in New Delhi",
    description:
      "A 12,000 sq ft Delhi home that answers sun path and airflow rather than filling its plot, using a rear setback and crossing axes for light and air.",
    keywords: "ashraya residence, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "lahori-gate-museum": {
    title: "Lahori Gate Museum | Cultural in Old Delhi",
    description:
      "A century-old Chandni Chowk building restored for the MCD as a walkthrough museum of Old Delhi culture, with recreated havelis and themed galleries.",
    keywords: "lahori gate museum, museum architects india, cultural architecture india, architects in delhi, spaces architects",
  },
  "sonipat-havelli": {
    title: "Sonipat Haveli | Heritage Restoration in Sonipat",
    description:
      "A 300-year-old Haryana haveli conserved as a lodge and village museum. Thick walls and courtyards provide natural climate control across 2,000 sq ft.",
    keywords: "sonipat havelli, heritage restoration delhi, conservation architects india, architects in delhi, spaces architects",
  },
  "floating-courtyard": {
    title: "Floating Courtyard | Private Residence in Agra",
    description:
      "A 16,000 sq ft Agra home where layered courtyards and green pockets across every level weave landscape into the architecture.",
    keywords: "floating courtyard, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "palette-apartment": {
    title: "Palette Apartment | Apartment Interiors in Noida",
    description:
      "A compact 1,500 sq ft 3 BHK in Noida reworked for a family of four with ergonomic custom furniture and durable materials on a modest budget.",
    keywords: "palette apartment, architects in noida, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "apartment-88": {
    title: "Apartment 88 | Apartment Interiors in New Delhi",
    description:
      "A 4,500 sq ft Delhi apartment for art-loving singers, where lighting, artwork and every bedroom ceiling form one continuous, immersive journey.",
    keywords: "apartment 88, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "stonex-india-building": {
    title: "Stonex India Building | Showroom in New Delhi",
    description:
      "A Delhi building where architecture is the brand identity, layered stone and slim tiles forming abstract patterns that reference a vintage Ferrari emblem.",
    keywords: "stonex india building, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "house-of-sculpted-screens": {
    title: "House of Sculpted Screens | Private Residence",
    description:
      "A Janakpuri home whose curved timber fins and sculpted arches give privacy and shade while drawing the landscape into the architecture.",
    keywords: "house of sculpted screens, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "express-office": {
    title: "Express Office | Office Interiors in Noida",
    description:
      "A 4,500 sq ft office in Noida for Express Builders — understated luxury in warm timber, stone and layered ceilings, with well-proportioned built-ins.",
    keywords: "express office, architects in noida, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "gandhi-darshan-park": {
    title: "Gandhi Darshan Park | Landscape in Raj Ghat, New Delhi",
    description:
      "A reflective public landscape extending Gandhi Smriti at Raj Ghat, inaugurated by President Droupadi Murmu. Landscape architecture by Spaces Architects@ka.",
    keywords: "gandhi darshan park, landscape architects in delhi, landscape design delhi ncr, public park design india, spaces architects",
  },
  "the-color-box-office": {
    title: "The Color Box Office | Office Interiors in Gurgaon",
    description:
      "A compact Gurgaon office from 2020 using colour, warm OSB panels and an expressive ceiling to create an energetic, collaborative workplace.",
    keywords: "the color box office, architects in gurgaon, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "veya-apartment": {
    title: "Veya Apartment | Apartment Interiors in Noida",
    description:
      "A 1,500 sq ft Noida apartment in warm timber, fluted wall panels and custom cabinetry, its layered textures giving a quiet, timeless luxury.",
    keywords: "veya apartment, architects in noida, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "jaipur-residence": {
    title: "Jaipur Residence | Private Residence in Jaipur",
    description:
      "An 11,500 sq ft Jaipur home fusing carved jaalis and arches with contemporary form, warm lower floors contrasting a bold black-and-white upper level.",
    keywords: "jaipur residence, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "architects-office": {
    title: "Architects Office | Office Interiors, South Extension",
    description:
      "The 1,500 sq ft Spaces Architects@ka studio in South Extension — textured grey walls, yellow tag boards, white oak and shifting ceiling planes.",
    keywords: "architects office, architects in south delhi, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "color-dialogue": {
    title: "Color Dialogue | Interior Design in Noida",
    description:
      "A 1,500 sq ft Noida home in natural wood, stone and brass with bold art and sculptural furniture, opening living and dining into one connected space.",
    keywords: "color dialogue, architects in noida, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "j-house": {
    title: "J House | Private Residence in New Delhi",
    description:
      "A 6,000 sq ft Delhi home of open, connected spaces and carved-out terraces, with louvers and screens keeping a tight urban plot private.",
    keywords: "j house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "legend-veneer-exhibition-delhi": {
    title: "Legend Veneer Exhibition Delhi | Showroom in New Delhi",
    description:
      "An exhibition stall in Delhi treating wood as both material and architecture, with a charcoal backdrop, timber panels and suspended wooden fins.",
    keywords: "legend veneer exhibition delhi, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "astra-heights": {
    title: "Astra Heights | Apartment Interiors in Noida",
    description:
      "A calm 1,500 sq ft Noida apartment pairing warm timber and soft neutrals with restrained accents, letting art and natural texture carry the room.",
    keywords: "astra heights, architects in noida, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "cubix-office": {
    title: "Cubix Office | Office Interiors in New Delhi",
    description:
      "A 1,000 sq ft white office for Cubix Builders where an oval conference core and angled glass partitions turn a narrow site into connected space.",
    keywords: "cubix office, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "imelda-inc": {
    title: "Imelda Inc | Office Interiors in New Delhi",
    description:
      "A Delhi office that turns the denim-making process into architecture, abstracting threads, scissors and fabric motifs into the workplace itself.",
    keywords: "imelda inc, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "the-screen-house": {
    title: "The Screen House | Private Residence in New Delhi",
    description:
      "A 7,000 sq ft Delhi family home using screens, louvers and double-height voids to draw light and air into a site hemmed in by neighbours.",
    keywords: "the screen house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "house-of-blue-courtyard": {
    title: "Blue Courtyard House | Private Residence",
    description:
      "An 18,000 sq ft Vasant Kunj home anchored by a private courtyard, glazing blurring the edge between courtyard, sky and living spaces.",
    keywords: "blue courtyard house, house of blue courtyard, the blue courtyard, architects in south delhi, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "tiles-and-kitchen-showroom": {
    title: "Tiles and Kitchen Showroom | Showroom in New Delhi",
    description:
      "A Delhi tile and kitchen showroom with Alpine-inspired tapered ceiling forms, shifting light temperatures defining each zone and a blue accent for drama.",
    keywords: "tiles and kitchen showroom, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "studio-element": {
    title: "Studio Element | Office Interiors in New Delhi",
    description:
      "An 1,800 sq ft Delhi office for Pramod Builders in exposed AAC blocks, birch ply and steel bar, built to show openness and clean construction.",
    keywords: "studio element, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "alaya-residence": {
    title: "Alaya Residence | Private Residence in Gurugram",
    description:
      "A 12,000 sq ft inward-looking Gurugram home built around a planted central void and a solitary tree that brings light deep into the house.",
    keywords: "alaya residence, architects in gurgaon, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "legend-veneer-exhibition-mumbai": {
    title: "Legend Veneer Exhibition Mumbai | Showroom in Mumbai",
    description:
      "A 2,000 sq ft Mumbai stall turning veneer into a journey, from sculptural installations to hands-on demonstrations of the material’s versatility.",
    keywords: "legend veneer exhibition mumbai, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "krishas-residence": {
    title: "Krishas Residence | Interior Design, South Extension",
    description:
      "A 45-year-old South Extension home redesigned in 35 days, colour shaping each room’s mood while balancing old and new, light and shadow.",
    keywords: "krishas residence, architects in south delhi, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "color-court": {
    title: "Color Court | Interior Design in Noida",
    description:
      "A 6,000 sq ft indoor sports complex in Noida from 2019, where bold colour, playful graphics and contrasting materials invite movement and interaction.",
    keywords: "color court, architects in noida, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "house-of-curves": {
    title: "House of Curves | Private Residence in Agra",
    description:
      "An 18,000 sq ft Agra home blending rigid modern geometry with soft curves and greenery, its rounded interiors a calm retreat from a stark exterior.",
    keywords: "house of curves, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "sachdeva-residence": {
    title: "Sachdeva Residence | Farmhouse in New Delhi",
    description:
      "A 2.5-acre, 25,000 sq ft Delhi farmhouse arranged around a pool and green courtyard, its entrance choreographed to unfold gradually.",
    keywords: "sachdeva residence, architects in gurgaon, farmhouse architects delhi ncr, architects in delhi, spaces architects",
  },
  "glulam-showroom": {
    title: "Glulam Showroom | Showroom in New Delhi",
    description:
      "A 2,500 sq ft Delhi showroom where a restrained wood and concrete palette lets imported timber and glulam technology become the architecture.",
    keywords: "glulam showroom, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "kavyam": {
    title: "Kavyam | Interior Design in New Delhi | Spaces Architects@ka",
    description:
      "A Delhi home blending Indian heritage with contemporary materials, its multi-height atriums connecting floors and drawing daylight deep inside.",
    keywords: "kavyam, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "jp-apartment": {
    title: "JP Apartment | Apartment Interiors in Noida",
    description:
      "A 2,000 sq ft minimalist Noida apartment where simplicity reads as warmth — a restrained palette with playful accents, timber, daylight and greenery.",
    keywords: "jp apartment, architects in noida, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "pattern-play": {
    title: "Pattern Play | Interior Design in New Delhi",
    description:
      "A 2,100 sq ft Delhi home where pattern, colour, texture and material form one language, bold motifs becoming part of the architecture itself.",
    keywords: "pattern play, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "nocc-office": {
    title: "NOCC Office | Office Interiors in New Delhi",
    description:
      "A 10,000 sq ft open office for NIIT Technologies where geometric forms, pastel tones and glass panels unfold along a corridor of layered views.",
    keywords: "nocc office, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "oval-the-stepwell": {
    title: "Oval — The Stepwell | Landscape in Rajasthan",
    description:
      "A conceptual cultural destination for the Ministry of Culture reinterpreting the Rajasthani stepwell in sandstone, water and concrete across stepped levels.",
    keywords: "oval the stepwell, landscape architects in delhi, landscape design delhi ncr, public park design india, spaces architects",
  },
  "aravali-farmhouse": {
    title: "Aravali Farmhouse | Farmhouse in Gurgaon",
    description:
      "A two-acre retreat in the Aravalli Hills of Gurgaon for a Belgian diplomatic couple, 6,000 sq ft across two levels following the site contours.",
    keywords: "aravali farmhouse, architects in gurgaon, farmhouse architects delhi ncr, architects in delhi, spaces architects",
  },
  "house-of-hues": {
    title: "House of Hues | Interior Design in New Delhi",
    description:
      "An 8,000 sq ft Delhi home in muted terracotta, timber, concrete and ivory, where arches and filtered daylight give the interior a warm rhythm.",
    keywords: "house of hues, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "amg-office": {
    title: "AMG Office | Office Interiors in Greater Kailash, New Delhi",
    description:
      "A 1,500 sq ft basement office in Greater Kailash where abstract vertical artworks and a flowing ceiling make a windowless floor feel open and creative.",
    keywords: "amg office, architects in south delhi, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "signature-office": {
    title: "Signature Office | Office Interiors in Noida",
    description:
      "A 2,000 sq ft Noida office for Express Builders built on circles, lines and grids, with saturated blue set against neutral timber and white.",
    keywords: "signature office, architects in noida, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "adharshila-vatika-kindergarten": {
    title: "Adharshila Vatika Kindergarten | Institutional in New Delhi",
    description:
      "A 15,000 sq ft hexagonal kindergarten in Delhi wrapping a secure courtyard play area, using primary shapes and bold colour. Covered by BBC World.",
    keywords: "adharshila vatika kindergarten, institutional architects india, school architects india, architects in delhi, spaces architects",
  },
  "grey-apartments": {
    title: "Grey Apartments | Apartment Interiors in Gurugram",
    description:
      "A 2,000 sq ft Gurugram apartment opened up by removing isolating walls, its grey interiors energised with yellow and blue for a family that entertains.",
    keywords: "grey apartments, architects in gurgaon, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "poetic-house": {
    title: "Poetic House | Private Residence in Noida",
    description:
      "A 6,000 sq ft Noida residence bringing the garden into daily life through planted terraces, curved forms and staggered openings for light and airflow.",
    keywords: "poetic house, architects in noida, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "bhimtal-resort": {
    title: "Bhimtal Resort | Hospitality in Bhimtal",
    description:
      "A hillside resort in Bhimtal, Uttarakhand, its hill-like forms and cool blue palette grounded by stone lower floors and linked by trails across two blocks.",
    keywords: "bhimtal resort, hotel architects india, hospitality architects delhi, architects in delhi, spaces architects",
  },
  "brick-house": {
    title: "Brick House | Private Residence in New Delhi",
    description:
      "A Delhi family house organised vertically around a triple-height living space linking three floors, with warm materials and a terrace garden.",
    keywords: "brick house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "bandikui-railway-station": {
    title: "Bandikui Railway Station | Institutional in Bandikui",
    description:
      "A station for the Government of Rajasthan whose facade echoes the Abhaneri stepwell in grey and red sandstone, with wrought iron recalling colonial trade.",
    keywords: "bandikui railway station, institutional architects india, school architects india, architects in delhi, spaces architects",
  },
  "heritage-park-extension": {
    title: "Heritage Park Extension | Landscape in Old Delhi",
    description:
      "A 2.87-acre extension of Park No. 7 in Chandni Chowk with Mughal-inspired gardens, water features and a Meena Bazaar linking park to street.",
    keywords: "heritage park extension, landscape architects in delhi, landscape design delhi ncr, public park design india, spaces architects",
  },
  "fluidic-office": {
    title: "Fluidic Office | Office Interiors in Noida",
    description:
      "A 5,000 sq ft Noida workplace for Express Builders in fluid abstract forms, with bespoke furniture, lighting and warm teak and stone accents.",
    keywords: "fluidic office, architects in noida, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "guptas-residence": {
    title: "Guptas Residence | Private Residence in New Delhi",
    description:
      "An 8,000 sq ft Delhi home in layered stepped blocks and terraces, connecting three generations to nature on a north-west facing site.",
    keywords: "guptas residence, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "house-around-a-tree": {
    title: "House Around a Tree | Private Residence, Vasant Vihar",
    description:
      "A 45,000 sq ft Vasant Vihar home organised around an existing tree in its courtyard, linking interiors to landscaped outdoor space.",
    keywords: "house around a tree, architects in south delhi, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "saativk-marble-showroom": {
    title: "Saativk Marble Showroom | Showroom in Noida",
    description:
      "A 10,000 sq ft immersive marble gallery in Noida where charcoal, white and warm neutrals frame the stone and let the material lead.",
    keywords: "saativk marble showroom, architects in noida, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "jains-residence": {
    title: "Jains Residence | Private Residence, Rajinder Nagar",
    description:
      "A Rajinder Nagar home where grandeur is treated as lived experience rather than excess, expansive volumes interspersed with quieter pockets of stillness.",
    keywords: "jains residence, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "thecanvas": {
    title: "The Canvas | Interior Design in New Delhi",
    description:
      "A 6,000 sq ft Delhi apartment treated as a curated gallery, architecture and art in constant dialogue against a warm, restrained material backdrop.",
    keywords: "thecanvas, luxury interior designers in delhi, interior designers in south delhi, interior architects delhi, spaces architects",
  },
  "sethis-residence": {
    title: "Sethis Residence | Private Residence in Gurgaon",
    description:
      "An 8,000 sq ft Gurgaon home reinterpreting neo-classical architecture through an artistic lens, blending classical proportion with contemporary form.",
    keywords: "sethis residence, architects in gurgaon, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "sobhti-residence": {
    title: "Sobhti Residence | Private Residence in New Delhi",
    description:
      "A 4,500 sq ft Delhi duplex built to maximise daylight, with open living zones, a central meditation space framed in wooden columns and a daylit stair.",
    keywords: "sobhti residence, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "hansgrohe-showroom": {
    title: "Hansgrohe Showroom | Showroom in New Delhi",
    description:
      "A 2,500 sq ft nature-inspired bath-fixture showroom in Delhi, blending dark finishes, greenery, sculptural form and warm metallic highlights.",
    keywords: "hansgrohe showroom, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "toy-bank-museum": {
    title: "Toy Bank Museum | Cultural in ITO, New Delhi",
    description:
      "A 40,000 sq ft learning-and-play toy museum at ITO, Delhi, its vertical cutouts visually linking floors around flexible spaces for children.",
    keywords: "toy bank museum, museum architects india, cultural architecture india, architects in delhi, spaces architects",
  },
  "concrete-house": {
    title: "Concrete House | Private Residence in Agra",
    description:
      "An 8,000 sq ft home in Kamla Nagar, Agra, on a 3,000 sq ft plot — a concrete-led house currently under construction by Spaces Architects@ka.",
    keywords: "concrete house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "house-on-hill": {
    title: "House on Hill | Private Residence in Uttarakhand",
    description:
      "A 5,000 sq ft hillside home on one acre, stepping down the slope through terraced levels that open living spaces to the surrounding mountain views.",
    keywords: "house on hill, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "house-in-harmony": {
    title: "House in Harmony | Private Residence in New Delhi",
    description:
      "A 4,500 sq ft Delhi sanctuary across a third floor and terrace, blending natural materials and calm proportions around a Zen meditation space.",
    keywords: "house in harmony, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "marmo-home-office": {
    title: "Marmo Home Office | Office Interiors in New Delhi",
    description:
      "A 5,000 sq ft Delhi home office behind a layered weathered-stone facade of slim tiles on steel, with a minimal white, grey and wenge interior.",
    keywords: "marmo home office, office interior designers in delhi, corporate interior design delhi, workplace design india, spaces architects",
  },
  "solance-apartment": {
    title: "Solance Apartment | Apartment Interiors in Noida",
    description:
      "A 2,000 sq ft Noida apartment achieving a luxurious feel on a limited budget through textured glass, brass and rich wood with warm lighting.",
    keywords: "solance apartment, architects in noida, luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, spaces architects",
  },
  "sanctum-house": {
    title: "Sanctum House | Private Residence in Aligarh",
    description:
      "A 10,000 sq ft private urban retreat in Aligarh using layered volumes, deep overhangs and a patterned screen to filter light and views.",
    keywords: "sanctum house, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "shri-vrinda-hotel": {
    title: "Shri Vrinda Hotel | Hospitality in Vrindavan",
    description:
      "A 10,000 sq ft neo-classical hotel in Vrindavan evoking a forest through greenery and water, with arches, GRC screens and fine moulding.",
    keywords: "shri vrinda hotel, hotel architects india, hospitality architects delhi, architects in delhi, spaces architects",
  },
  "dispensary-sonipat": {
    title: "Dispensary Sonipat | Institutional in Sonipat",
    description:
      "A 3,500 sq ft village dispensary in Sonipat conceived as social infrastructure, borrowing local colour, detail and proportion to feel welcoming.",
    keywords: "dispensary sonipat, institutional architects india, school architects india, architects in delhi, spaces architects",
  },
  "the-garden-house": {
    title: "The Garden House | Private Residence in Noida",
    description:
      "A 14,000 sq ft Noida family home blurring building and garden, with curved earthy forms and greenery woven across terraces and balconies.",
    keywords: "the garden house, architects in noida, architects in delhi, residential architects delhi, luxury home architects delhi, spaces architects",
  },
  "rasa-farmhouse": {
    title: "Rasa Farmhouse | Farmhouse in New Delhi",
    description:
      "A one-acre, 20,000 sq ft modern villa in Delhi with a minimal material palette, open spaces and glazing linking the interiors to the landscape.",
    keywords: "rasa farmhouse, architects in gurgaon, farmhouse architects delhi ncr, architects in delhi, spaces architects",
  },
  "marble-city-exhibition-stall": {
    title: "Marble City Exhibition Stall | Showroom in New Delhi",
    description:
      "A 1,500 sq ft Delhi exhibition stall where a white outer block shields a dark interior, its open front letting stone and tile take centre stage.",
    keywords: "marble city exhibition stall, commercial architects delhi, showroom design delhi, office interior designers in delhi, spaces architects",
  },
  "the-urban-nest": {
    title: "The Urban Nest | Institutional in New Delhi",
    description:
      "A 1.25 lakh sq ft student housing concept in New Delhi, giving every floor a different layout to support wellbeing, interaction and personal growth.",
    keywords: "the urban nest, institutional architects india, school architects india, architects in delhi, spaces architects",
  },
};

export function projectMetadata(slug) {
  const custom = projectSeo[slug] || {};
  return buildMetadata({
    title: custom.title || `${humanize(slug)} | ${SITE_NAME}`,
    description:
      custom.description ||
      `${humanize(slug)}, an architecture project by Spaces Architects. Explore photographs, design details and the story behind the project.`,
    keywords: custom.keywords,
    image: custom.image,
    path: `/projects/${slug}`,
    type: "article",
  });
}

/* ------------------------------------------------------------------
   4. PROJECT CATEGORY PAGES (10) and the /projects listing
   Key = the value after ?category= in the URL.
   /projects serves both the main listing and the category views, so use
   generateMetadata in app/projects/page.js:

     import { projectsListingMetadata } from "@/config/seo";
     export function generateMetadata({ searchParams }) {
       return projectsListingMetadata(searchParams);
     }

   (Do not also export `metadata` from that file.)
------------------------------------------------------------------ */
const categorySeo = {
  "architecture/residential": {
    title: "Residential Architecture | Houses & Farmhouses in Delhi NCR",
    description:
      "Private homes, villas and farmhouses designed across Delhi, Gurgaon and Noida by Spaces Architects@ka — an AD50 practice working since 2000.",
    keywords: "architects in delhi, residential architects delhi, architects in gurgaon, luxury home architects delhi",
  },
  "architecture/adaptive-reuse": {
    title: "Adaptive Reuse & Heritage Restoration Projects in Delhi",
    description:
      "Haveli Dharampura, Golden Haveli, Lahori Gate Museum and Sonipat Haveli — conservation and adaptive reuse work by a UNESCO award-winning Delhi practice.",
    keywords: "architects in delhi, heritage restoration delhi, adaptive reuse india, conservation architects india",
  },
  "architecture/institutional": {
    title: "Institutional Architecture | Schools & Public Buildings",
    description:
      "Adharshila Vatika Kindergarten, Bandikui Railway Station and Dispensary Sonipat — institutional work by Spaces Architects@ka, featured by the BBC.",
    keywords: "architects in delhi, institutional architects india, school architects india, best architects in delhi",
  },
  "architecture/hospitality": {
    title: "Hospitality Architecture | Hotels & Resorts in India",
    description:
      "Haveli Dharampura, Golden Haveli, Shri Vrinda Hotel and Bhimtal Resort — hotel and resort architecture by a UNESCO award-winning Delhi practice.",
    keywords: "architects in delhi, hotel architects india, resort architects india, hospitality architects delhi",
  },
  "architecture/cultural": {
    title: "Cultural Architecture | Museums & Public Projects",
    description:
      "Lahori Gate Museum, Toy Bank Museum and Gandhi Darshan at Raj Ghat — cultural and civic projects by Spaces Architects@ka, New Delhi.",
    keywords: "architects in delhi, museum architects india, cultural architecture india, best architects in delhi",
  },
  "architecture/commercial": {
    title: "Commercial Architecture | Showrooms & Offices in Delhi",
    description:
      "Stonex India, Intersekt, Hansgrohe and Saativk Marble — showroom and commercial architecture across Delhi NCR by Spaces Architects@ka.",
    keywords: "architects in delhi, commercial architects delhi, showroom design delhi, retail architects india",
  },
  "architecture/landscape": {
    title: "Landscape Architecture | Parks & Public Space in Delhi",
    description:
      "Heritage Park in the walled city, Gandhi Darshan at Raj Ghat and Oval The Stepwell — landscape architecture in Delhi by an award-winning practice.",
    keywords: "landscape architects in delhi, landscape design delhi ncr, public park design india, architects in delhi",
  },
  "interior/apartments": {
    title: "Apartment Interiors | Luxury Interior Design in Delhi",
    description:
      "Apartment 88, Palette, Veya, JP and Solance — luxury apartment interiors across Delhi NCR by an AD50 practice led by Kapil Aggarwal.",
    keywords: "luxury interior designers in delhi, apartment interior designers delhi, interior designers in south delhi, architects in delhi",
  },
  "interior/offices": {
    title: "Office Interiors | Workplace Design in Delhi & Noida",
    description:
      "Express Office in Noida, Cubix, NOCC, AMG, Signature and Fluidic — office interiors across Delhi NCR by Spaces Architects@ka.",
    keywords: "office interior designers in delhi, corporate interior design delhi, workplace design india, architects in noida",
  },
  "interior/commercial": {
    title: "Commercial Interiors | Showroom & Retail Design Delhi",
    description:
      "Tiles and Kitchen Showroom, Glulam, Hansgrohe and Legend Veneer — retail and commercial interiors across Delhi and Mumbai.",
    keywords: "office interior designers in delhi, retail interior design delhi, showroom interior designers india",
  },
};

export function categoryMetadata(category) {
  const c = categorySeo[category];
  if (!c) return pageMetadata("projects");
  return buildMetadata({
    ...c,
    path: `/projects?category=${category}`,
    type: "website",
  });
}

export function projectsListingMetadata(searchParams) {
  const raw = searchParams && searchParams.category;
  const category = Array.isArray(raw) ? raw[0] : raw;
  return category ? categoryMetadata(category) : pageMetadata("projects");
}

/* ------------------------------------------------------------------
   5. BLOG POSTS (13)
   Key = slug in app/blog/[slug]/.
   Use in app/blog/[slug]/page.js:
     import { blogMetadata } from "@/config/seo";
     export function generateMetadata({ params }) {
       return blogMetadata(params.slug);
     }
------------------------------------------------------------------ */
const blogSeo = {
  "a-legacy-restored": {
    title: "Restoring a Haveli: Memory, Craft and Time",
    description:
      "Restoring a historic haveli is not wall repair — it is memory, craftsmanship and time. Notes from the UNESCO award-winning Haveli Dharampura project.",
    keywords: "haveli restoration delhi, heritage restoration india, architects in delhi, conservation architects india",
  },
  "a-pause-in-the-walled-city": {
    title: "A Pause in the Walled City | Public Space in Old Delhi",
    description:
      "In the density of Old Delhi, a small public open space can matter far beyond its size. On designing Heritage Park in the walled city.",
    keywords: "landscape architects in delhi, public space design india, old delhi architecture, architects in delhi",
  },
  "house-becomes-a-landscape": {
    title: "When a House Becomes a Landscape | Spaces Architects@ka",
    description:
      "Can a house be designed as an extension of its garden? The House of Stepped Gardens as a starting point for thinking about homes and landscape together.",
    keywords: "landscape architects in delhi, courtyard house design india, luxury home architects india, architects in delhi",
  },
  "time-held-in-detail": {
    title: "Time, Held in Detail | What Haveli Restoration Uncovers",
    description:
      "Historic buildings hold stories buried under alteration and neglect. What the restoration process uncovers, and why the detail is where the time is held.",
    keywords: "haveli restoration delhi, heritage conservation india, architects in delhi, restoration architects india",
  },
  "architecture-as-art": {
    title: "Architecture as Art | Beyond Solving the Brief",
    description:
      "Architecture that only solves a functional problem stops short. On designing for emotional response as well as for use.",
    keywords: "architects in delhi, best architects in delhi, architecture philosophy india, spaces architects",
  },
  "architecture-in-motion": {
    title: "Architecture in Motion | Screens in Indian Design",
    description:
      "Screens filter light, give privacy and change the relationship between inside and outside. On the jaali in contemporary Indian architecture.",
    keywords: "architects in delhi, jaali screen design india, indian architecture design, luxury home architects delhi",
  },
  "6x18": {
    title: "6x18 | Designing a House on a Six-Metre Site",
    description:
      "Narrow sites look like a limitation until the constraint becomes the idea. How a 6 x 18 metre plot in Model Town produced Slender House.",
    keywords: "architects in delhi, narrow plot house design india, small site architecture, architects in south delhi",
  },
  "the-courtyard": {
    title: "The Courtyard | The Heart of the Indian House",
    description:
      "The courtyard once brought light, air, greenery and family life into the Indian house. Why it still belongs in contemporary homes.",
    keywords: "courtyard house design india, architects in delhi, luxury home architects delhi, indian architecture",
  },
  "what-clients-rarely-see": {
    title: "What Clients Rarely See | The Work Before Construction",
    description:
      "Clients notice the facade and the materials. They rarely see the months of survey, drawing and decision-making that happen before anything is built.",
    keywords: "architects in delhi, architect design process, hiring an architect delhi, architect fees in india",
  },
  "future-of-exposed-concrete": {
    title: "The Future of Exposed Concrete in Indian Homes",
    description:
      "Exposed concrete is expressive, and when it is detailed precisely it carries a quiet confidence. On working with board-formed concrete in Delhi.",
    keywords: "architects in delhi, exposed concrete architecture india, concrete house design, best architects in delhi",
  },
  "heritage-conservation-in-india": {
    title: "Heritage Conservation in India | Why It Matters",
    description:
      "Cities celebrate new construction while overlooking the existing places that define them. The case for conservation, from a UNESCO award-winning practice.",
    keywords: "heritage conservation india, conservation architects india, architects in delhi, haveli restoration delhi",
  },
  "what-i-have-learned": {
    title: "What I Have Learned After 200 Homes | Spaces Architects@ka",
    description:
      "After designing more than two hundred homes, Kapil Aggarwal on why architecture is finally about designing better lives, not better buildings.",
    keywords: "kapil aggarwal architect, best architects in delhi, architects in delhi, spaces architects",
  },
  "timeless-rather-than-trendy": {
    title: "Timeless Rather Than Trendy | Designing Homes That Last",
    description:
      "The homes that still inspire decades later are rarely the ones that chased a trend. On designing for longevity rather than for the moment.",
    keywords: "luxury interior designers in delhi, architects in delhi, timeless home design india, best architects in delhi",
  },
};

export function blogMetadata(slug) {
  const b = blogSeo[slug] || {};
  return buildMetadata({
    title: b.title || `${humanize(slug)} | ${SITE_NAME}`,
    description:
      b.description ||
      `${humanize(slug)} - a journal entry from Spaces Architects on architecture, heritage and design.`,
    keywords: b.keywords,
    image: b.image,
    path: `/blog/${slug}`,
    type: "article",
  });
}