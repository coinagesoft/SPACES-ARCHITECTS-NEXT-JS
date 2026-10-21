/**
 * ============================================================
 *  MOBILE COVER IMAGES (phones, < 768px)
 * ============================================================
 * Maps a project's folder name (the URL slug, e.g. "amg-office")
 * to the file inside  assets/mobile_cover_images/  on the asset server.
 *
 *  - To change a project's mobile cover, edit its file name below.
 *  - A project that is not listed here (or is set to null) simply keeps
 *    using its normal cover image on phones.
 *
 * Usage in a project page:
 *   mobileHero={mobileCover("amg-office")}
 */
import { assetUrl } from "./assetUrl";

const FOLDER = "mobile_cover_images";

export const MOBILE_COVER_FILES = {
  "adharshila-vatika-kindergarten": "ADHARSHILA VATIKA KINDERGARTEN.webp",
  "alaya-residence": "ALAYA RESIDENCE, GURGAON.webp",
  "amg-office": "amg office.webp",
  "apartment-88": "apartment 88.webp",
  "aravali-farmhouse": "aravali farmhouse.webp",
  "architects-office": "architect office.webp",
  "art-house": "ART HOUSE.webp",
  "ashraya-residence": "ASHRAYA RESIDENT.webp",
  "astra-heights": "ASTRA HEIGHT.webp",
  "bandikui-railway-station": "BANDIKUI RAILWAY.webp",
  "bhimtal-resort": "BHIMTAL RESORT.webp",
  "house-of-blue-courtyard": "BLUE COURTYARD.webp",
  "the-color-box-office": "COLOUR BOX OFFICE.webp",
  "color-court": "COLOUR COURT.webp",
  "color-dialogue": "COLOUR DIALOUGE.webp",
  "concrete-house": "CONCRETE HOUSE.webp",
  "cubix-office": "CUBIX OFFICE.webp",
  "express-office": "EXPRESS OFFICE.webp",
  "floating-courtyard": "FLOATING COURTYARD HOUSE.webp",
  "fluidic-office": "FLUIDIC OFFICE.webp",
  "gandhi-darshan-park": "GANDHI DARSHAN PARK.webp",
  "glulam-showroom": "GLULAM SHOWROOM.webp",
  "golden-haveli": "GOLDEN HAVELI.webp",
  "grey-apartments": "GREY APARTMENTS.webp",
  "guptas-residence": "GUPTA_S RESIDENCE.webp",
  "hansgrohe-showroom": "HANSGROHE SHOWROOM.webp",
  "haveli-dharampura": "HAVELI DHARAMPURA.webp",
  "heritage-park": "HERITAGE PARK.webp",
  "house-around-a-tree": "HOUSE AROUND A TREE.webp",
  "house-in-harmony": "HOUSE IN HARMONY.webp",
  "house-of-curves": "HOUSE OF CURVES.webp",
  "house-of-dancing-screens": "HOUSE OF DANCING SCREENS.webp",
  "house-of-hues": "HOUSE OF HUES.webp",
  "house-of-sculpted-screens": "HOUSE OF SCULPTED SCREENS.webp",
  "house-of-stepped-garden": "HOUSE OF STEPPED GARDEN.webp",
  "house-on-hill": "HOUSE ON HILL.webp",
  "imelda-inc": "IMELDA.INC.webp",
  "intersext-showroom": "INTERSEKT SHOWROOM.webp",
  "j-house": "J HOUSE.webp",
  "jains-residence": "JAIN_S RESIDENCE.webp",
  "jaipur-residence": "JAIPUR RESIDENCE.webp",
  "jp-apartment": "JP APARTMENTS.webp",
  "kavyam": "KAVYAM.webp",
  "krishas-residence": "KRISHA_S RESIDENCE.webp",
  "lahori-gate-museum": "LAHORI GATE MUSEUM.webp",
  "legend-veneer-exhibition-delhi": "LEGEND VENEER EXHIBITION-DELHI.webp",
  "legend-veneer-exhibition-mumbai": "LEGEND VENEER EXHIBITION-MUMBAI.webp",
  "library-house": "LIBRARY HOUSE.webp",
  "marble-city-exhibition-stall": "MARBLE CITY EXHIBITION STALLS.webp",
  "marmo-home-office": "MARMO HOME OFFICE.webp",
  "nocc-office": "NOCC OFFICE.webp",
  "oval-the-stepwell": "OVAL-THE STEPWELL.webp",
  // NOTE: this file name was cut off in the file-manager screenshot — check it.
  "palette-apartment": "PALETTE AOARTMENTS(ASTRA HEIGHTS).webp",
  "heritage-park-extension": "PARK EXTENSION.webp",
  "pattern-play": "PATTERN PLAY.webp",
  "poetic-house": "POETIC HOUSE.webp",
  "rasa-farmhouse": "RASA FARMHOUSE.webp",
  "saativk-marble-showroom": "SAATVIK MARBLE SHOWROOM.webp",
  "sachdeva-residence": "SACHDEVA FARMHOUSE.webp",
  "sanctum-house": "SANCTUM HOUSE ALIGARH.webp",
  "the-screen-house": "SCREEN HOUSE.webp",
  "sethis-residence": "SETHI_S RESIDENCE.webp",
  "shri-vrinda-hotel": "SHRI VRINDA HOTEL.webp",
  "signature-office": "SIGNATURE OFFICE.webp",
  "slender-house": "SLENDER HOUSE.webp",
  "sobhti-residence": "SOBHTI RESIDENCE.webp",
  "solance-apartment": "SOLANCE APARTMENT.webp",
  "sonipat-havelli": "SONIPAT HAVELI.webp",
  "step-maze": "STEP MAZE HOUSE.webp",
  "stonex-india-building": "STONEX INDIA BUILDING.webp",
  "studio-element": "STUDIO ELEMENT.webp",
  "swatantra-residence": "SWATANTRA RESIDENCE.webp",
  "brick-house": "THE BRICK HOUSE.webp",
  "thecanvas": "THE CANVAS.webp",
  "the-garden-house": "THE GARDEN HOUSE.webp",
  "the-urban-nest": "THE URBAN NEST.webp",
  "tiles-and-kitchen-showroom": "TILES & KITCHEN SHOWROOM.webp",
  "toy-bank-museum": "TOYBANK MUSEUM.webp",
  "veya-apartment": "VEYA APARTMENT.webp",
};

// The pixel size is only used to reserve space (aspect ratio) before the image
// loads — the image itself is shown whole, never cropped. 3:4 portrait.
const WIDTH = 1080;
const HEIGHT = 1440;

export function mobileCover(slug) {
  const file = MOBILE_COVER_FILES[slug];
  if (!file) return undefined;
  return { src: assetUrl(`${FOLDER}/${file}`), width: WIDTH, height: HEIGHT };
}
