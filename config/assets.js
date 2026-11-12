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

import assetManifest from "./asset-manifest.json";

// assetUrl() lives in ./assetUrl.js so client components can use it without
// importing this whole file (and the asset manifest) into the browser bundle.
import { assetUrl } from "./assetUrl";
export { assetUrl };

// Returns an object shaped like next/image's StaticImageData ({ src, width,
// height }), so every <Image src={...}> and every `img.width / img.height`
// ratio() helper across the project pages keeps working unchanged — just
// backed by a remote URL instead of a bundled file.
export function assetImage(relPath) {
    const dims = assetManifest[relPath];
    if (!dims && process.env.NODE_ENV !== "production") {
        console.warn(
            `[assets] No dimensions in asset-manifest.json for "${relPath}". ` +
            `Run "node scripts/generate-asset-manifest.mjs" against your local public/assets folder and commit the result.`
        );
    }
    return {
        src: assetUrl(relPath),
        width: dims?.width ?? 1600,
        height: dims?.height ?? 1000,
    };
}

const haveliDharampuraImage = assetImage("haveli dharmapura.webp");
const aboutHeroImage = assetImage("About_hero.jpg");
const menuImage = assetImage("menu/menu.jpg");
const kapilPhoto = assetImage("Kapil.jpg");
const artHouse = assetImage("Featured Project/art-house.jpg");
const houseOfSteppedGarden = assetImage("Featured Project/house-of-stepped-garden.jpg");
const haveliDharampura = assetImage("Featured Project/HAVELLI-DHARAMPURA.png");
const heritagePark = assetImage("Featured Project/THE-HERITAGE-PARK.png");
const goldenHaveli = assetImage("Featured Project/GOLDEN-HAVELLI.png");
const libraryHouse = assetImage("Featured Project/library-house.png");
const swatantraResidence = assetImage("Featured Project/swatantra-residence.jpg");
const houseOfDancingScreen = assetImage("Featured Project/house-of-DANCING-SCREEN.png");
const artHouseHero = assetImage("projects/ART_HOUSE/cover/HERO.webp");
const houseOfSteppedGardenHero = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/cover/hero image.webp");
const libraryHouseHero = assetImage("projects/LIBRARY-HOUSE/cover/hero image.webp");
const swatantraCover = assetImage("projects/SWATANTRA-RESIDENCE/COVER IMAGE/cover.jpg");
const dezeenFeature = assetImage("Featured News/dezeen-exclusive-feature.png");
const architecturalDigestFeature = assetImage("Featured News/architectural-digest-india-feature.png");
const gandhiDarshanInauguration = assetImage("Featured News/gandhi-darshan-park-inaugration.png");
const heritageParkInauguration = assetImage("Featured News/heritage-park-inaugration.png");
const habitusLivingFeature = assetImage("Featured News/featured-by-Habitusliving-titled.png");
const rethinkingFeature = assetImage("Featured News/Featured-by-Rethinking.png");
const goldenHaveliInauguration = assetImage("Featured News/golden-haveli-inaugration.png");
const timelessHousesFeature = assetImage("Featured News/featured-by-timeless-houses-magazine .png");
const financialTimesFeature = assetImage("Featured News/featured-by-financial-times.png");
const indexplusPanel = assetImage("Featured News/WhatsApp Image.jpeg");
const archelloFeature = assetImage("Featured News/featured-by-archello.png");
const designAsiaFeature = assetImage("Featured News/wadeasia.webp");
const concreteHouseAgraFeature = assetImage("Featured News/concrete-house-agra.webp");
const modernHouseDancingScreensFeature = assetImage("Featured News/modern-house-dancing-screens.webp");
const designEssentiaFeature = assetImage("Featured News/design-essentia-india-april-june-2023.webp");
const slenderHouse6x18Feature = assetImage("Featured News/6x18-slender-house-spaces-architects.webp");
const urbanNestWafFeature = assetImage("Featured News/the-urban-nest-waf-highly-commended-2022.webp");
const blogLegacyRestored = assetImage("blogs/A-Legacy-Restored.png");
const blogPauseInWalledCity = assetImage("blogs/A-Pause-in-the-Walled-City.png");
const blogHouseLandscape = assetImage("blogs/House-Becomes-a-Landscape.png");
const blogTimeHeldDetail = assetImage("blogs/Time-Held-in-Detail.png");
const blogArchitectureArt = assetImage("blogs/Architecture-as-Art.png");
const blogArchitectureMotion = assetImage("blogs/ Architecture-in-Motion.png");
const blog6x18 = assetImage("blogs/6x18.png");
const blogCourtyard = assetImage("blogs/Courtyard.webp");
const projectImg1 = assetImage("projects/1.jpg");
// ---- Projects gallery page — the 7 named project photos, matching the
// original Canva reference page 1:1 (same photos, same order, same names). ----
const galSlenderHouse = assetImage("projects/SLENDER HOUSE.jpg");
const galHaveliDharampura = assetImage("projects/HAVELI DHARAMPURA.jpg");
const galFloatingCourtyardHouse = assetImage("projects/FLOATING COURTYARD HOUSE.png");
const galSwatantraResidence = assetImage("projects/SWATANTRA RESIDENCE.jpg");
const galApartment88 = assetImage("projects/APARTMENT 88.jpg");
const galPaletteApartment = assetImage("projects/PALETTE APARTMENT.jpg");
const galArtHouse = assetImage("projects/ART HOUSE.jpg");
const galStepMaze = assetImage("projects/STEP MAZE.jpg");
const galHeritagePark = assetImage("projects/HERITAGE PARK.png");
const galHouseOfSteppedGarden = assetImage("projects/HOUSE OF STEPPED GARDEN.jpg");
const galStonexIndiaBuilding = assetImage("projects/STONEX INDIA BUILDING.png");
const galHouseOfDancingScreens = assetImage("projects/HOUSE OF DANCING SCREENS.png");
const galLibraryHouse = assetImage("projects/LIBRARY HOUSE.jpg");
const galHouseOfSculptedScreens = assetImage("projects/HOUSE OF SCULPTED SCREENS.jpg");
const galExpressOffice = assetImage("projects/EXPRESS OFFICE.jpg");
const galGandhiDarshanPark = assetImage("projects/GANDHI DARSHAN PARK.jpg");
const galColorBoxOffice = assetImage("projects/COLOR BOX OFFICE.jpg");
const galAshrayaResidence = assetImage("projects/ASHRAYA RESIDENCE.png");
const galVeyaApartment = assetImage("projects/VEYA APARTMENT.jpg");
const galJaipurResidence = assetImage("projects/JAIPUR RESIDENCE.jpg");
const galArchitectsOffice = assetImage("projects/ARCHITECTS OFFICE.png");
const galColorDialogue = assetImage("projects/COLOR DIALOGUE.jpg");
const galJHouse = assetImage("projects/J HOUSE.jpg");
// ---- Continuation of the Canva reference page, picking up right after
// J House (same photos, same order, same names). ----
const galIntersextShowroom = assetImage("projects/INTERSEXT SHOWROOM.png");
const galLegendVeneerExhibition = assetImage("projects/LEGEND VENEER EXHIBITION - DELHI.jpg");
const galAstraHeights = assetImage("projects/ASTRA HEIGHTS.png");
const galGoldenHaveli = assetImage("projects/GOLDEN HAVELLI.jpg");
const galCubixOffice = assetImage("projects/CUBIX OFFICE.jpg");
const galImeldaInc = assetImage("projects/IMELDA.png");
const galScreenHouse = assetImage("projects/SCREEN HOUSE.jpg");
const galLahoriGateMuseum = assetImage("projects/LAHORI GATE MUSEUM.png");
const galTheBlueCourtyard = assetImage("projects/THE BLUE COURTYARD.jpg");
const galTilesAndKitchenShowroom = assetImage("projects/TILES AND KITCHEN SHOWROOM.png");
const galStudioElement = assetImage("projects/STUDIO ELEMENT.png");
// ---- Continuation of the Canva reference page — Alaya Residence
// through House of Hues. ----
const galAlayaResidence = assetImage("projects/ALAYA RESIDENCE.jpg");
const galLegendVeneerExhibitionMumbai = assetImage("projects/LEGEND VENNER EXHIBITION MUMBAI.jpg");
const galLegendVennerExhibitionMumbai = galLegendVeneerExhibitionMumbai;
const galKrishasResidence = assetImage("projects/KRISHAS RESIDENCE.jpg");
const galColorCourt = assetImage("projects/COLOR COURT.png");
const galHouseOfCurves = assetImage("projects/HOUSE OF CURVES.jpg");
const galSachdevaFarmhouse = assetImage("projects/SACHDEVA FARMHOUSE.png");
const galGlulamShowroom = assetImage("projects/GLULAM SHOWROOM.png");
const galKavyam = assetImage("projects/KAVYAM.jpg");
const galJpApartment = assetImage("projects/JP APARTMENT.jpg");
const galPatternPlay = assetImage("projects/PATTERN PLAY.jpg");
const galNoccOffice = assetImage("projects/NOCC OFFICE.png");
const galTheStepwell = assetImage("projects/THE STEPWELL.jpg");
const galAravaliFarmhouse = assetImage("projects/ARAVALI FARMHOUSE.jpg");
const galHouseOfHues = assetImage("projects/HOUSE OF HUES.jpg");
// ---- Continuation of the Canva reference page — AMG Office through
// Hansgrohe Showroom. ----
const galAmgOffice = assetImage("projects/AMG OFFICE.jpg");
const galSignatureOffice = assetImage("projects/SIGNATURE OFFICE.jpg");
const galAdharshilaVatikaKindergarten = assetImage("projects/ADHARSHILA VATIKA KINDERGARTEN.png");
const galSonipatHavelli = assetImage("projects/SONIPAT HAVELLI.png");
const galGreyApartments = assetImage("projects/GREY APARTMENTS.jpg");
const galPoeticHouse = assetImage("projects/POETIC HOUSE.png");
const galBhimtalResort = assetImage("projects/BHIMTAL RESORT.png");
const galBrickHouse = assetImage("projects/BRICK HOUSE.png");
const galBandikuiRailwayStation = assetImage("projects/BANDIKUI RAILWAY STATION.png");
const galHeritageParkExtension = assetImage("projects/HERITAGE PARK EXTENSION.jpg");
const galFluidicOffice = assetImage("projects/FUIDIC OFFICE.jpg");
const galFuidicOffice = galFluidicOffice;
const galGuptasResidence = assetImage("projects/GUPTAS RESIDENCE.jpg");
const galHouseAroundATree = assetImage("projects/HOUSE AROUND A TREE.png");
const galJainsResidence = assetImage("projects/JAINS RESIDENCE.jpg");
const galSaatvikMarbleShowroom = assetImage("projects/SAATIVK MARBLE SHOWROOM.jpg");
const galTheCanvas = assetImage("projects/THECANVAS.jpg");
const galSethisResidence = assetImage("projects/SETHIS-RESIDENCE/cover/HERO.png");
const galSobhtiResidence = assetImage("projects/SOBHTI RESIDENCE.jpg");
const galHansgroheShowroom = assetImage("projects/HANSGROHE SHOWROOM.png");
// ---- Continuation of the Canva reference page — Toy Bank Museum
// through The Urban Nest. ----
const galToyBankMuseum = assetImage("projects/ToyBank.webp");
const galConcreteHouse = assetImage("projects/CONCRETE HOUSE.png");
const galHouseOnHill = assetImage("projects/HOUSE ON HILL.png");
const galHouseInHarmony = assetImage("projects/HOUSE IN HARMONY.jpg");
const galMarmoHomeOffice = assetImage("projects/MARMO HOME OFFICE.jpg");
const galSolanceApartment = assetImage("projects/SOLANCE APARTMENT.jpg");
const galSanctumHouse = assetImage("projects/SANCTUM HOUSE.jpg");
const galShriVrindaHotel = assetImage("projects/SHRI VRINDA HOTEL.png");
const galDispensarySonipat = assetImage("projects/DISPENSARY SONIPAT.png");
const galGurdeepJiKaGhar = assetImage("projects/GURDEEP JI KA GHAR.png");
const galRasaFarmhouse = assetImage("projects/RASA FARMHOUSE.jpg");
const galMarbleCityExhibitionStall = assetImage("projects/MARBLE CITY EXHIBITION STALL.jpg");
const galTheUrbanNest = assetImage("projects/THE URBAN NEST.jpg");
// Handwritten "Creating SPACES which becomes part of people's life" signature
// graphic — sits beside The Urban Nest at the very end of the gallery, same
// as on the Canva reference page.
const galProjectFont = assetImage("projects/project font.png");
// ---- Haveli Dharampura — real project photography + press marks ----
// (These match the original Canva site's photo order 1:1 — do not reorder.)
const haveliHero = assetImage("projects/haveli/haveli_hero.jpg");
const haveli1 = assetImage("projects/haveli/haveli_1.jpg");
const haveli2 = assetImage("projects/haveli/haveli_2.jpg");
const haveli3 = assetImage("projects/haveli/haveli_3.jpg");
const haveli4 = assetImage("projects/haveli/haveli_4.jpg");
const haveli5 = assetImage("projects/haveli/haveli_5.jpg");
const haveli6 = assetImage("projects/haveli/haveli_6.jpg");
const haveli7 = assetImage("projects/haveli/haveli_7.jpg");
const haveli8 = assetImage("projects/haveli/haveli_8.jpg");
const haveli9 = assetImage("projects/haveli/haveli_9.jpg");
const haveli10 = assetImage("projects/haveli/haveli_10.jpg");
const haveli11 = assetImage("projects/haveli/haveli_11.jpg");
const haveli12 = assetImage("projects/haveli/haveli_12.jpg");
const haveli13 = assetImage("projects/haveli/haveli_13.jpg");
const haveli14 = assetImage("projects/haveli/haveli_14.jpg");
const haveli15 = assetImage("projects/haveli/haveli_15.jpg");
const haveli16 = assetImage("projects/haveli/haveli_16.jpg");
const haveli17 = assetImage("projects/haveli/haveli_17.jpg");
const haveli18 = assetImage("projects/haveli/haveli_18.jpg");
const haveli19 = assetImage("projects/haveli/haveli_19.jpg");
const haveli20 = assetImage("projects/haveli/haveli_20.jpg");
const haveli21 = assetImage("projects/haveli/haveli_21.jpg");
const haveli22 = assetImage("projects/haveli/haveli_22.jpg");
const haveli23 = assetImage("projects/haveli/haveli_23.jpg");
const haveli24 = assetImage("projects/haveli/haveli_24.jpg");
const haveli25 = assetImage("projects/haveli/haveli_25.jpg");
const haveli26 = assetImage("projects/haveli/haveli_26.jpg");
const haveli27 = assetImage("projects/haveli/haveli_27.jpg");
// Replacement images for former haveli_3, haveli_8, haveli_14 and haveli_17.
const haveliNew1 = assetImage("projects/haveli/new1.webp");
const haveliNew2 = assetImage("projects/haveli/new2.webp");
const haveliNew3 = assetImage("projects/haveli/new3.webp");
const haveliNew4 = assetImage("projects/haveli/new4.webp");
const haveli255 = assetImage("projects/haveli/255.jpg");
const haveliLogoUnesco = assetImage("projects/haveli/unesco.png");
const haveliLogoNdtv = assetImage("projects/haveli/NDTV.png");
const haveliLogoIIID = assetImage("projects/haveli/institute_of_indian.png");
const haveli77 = assetImage("projects/haveli/77.jpg");
const haveli144 = assetImage("projects/haveli/144.jpg");
const haveli200 = assetImage("projects/haveli/200.jpg");
const haveliLast = assetImage("projects/haveli/last.jpg");
const haveliLast2 = assetImage("projects/haveli/last2.jpg");
const haveliLast8 = assetImage("projects/haveli/last8.jpg");
const haveliLast22 = assetImage("projects/haveli/last22.jpg");
const haveliLast23 = assetImage("projects/haveli/last23.jpg");
const floatingCourtyardCover = assetImage("projects/floating-courtyard/cover/COVER.webp");
const floatingCourtyard1 = assetImage("projects/floating-courtyard/3_4/1.webp");
const floatingCourtyard2 = assetImage("projects/floating-courtyard/3_4/2.webp");
const floatingCourtyard3 = assetImage("projects/floating-courtyard/3_4/3.webp");
const floatingCourtyard4 = assetImage("projects/floating-courtyard/3_4/4.webp");
const floatingCourtyard5 = assetImage("projects/floating-courtyard/3_4/5.webp");
const floatingCourtyard6 = assetImage("projects/floating-courtyard/3_4/6.webp");
const floatingCourtyard7 = assetImage("projects/floating-courtyard/3_4/7.webp");
const floatingCourtyard8 = assetImage("projects/floating-courtyard/3_4/8.webp");
const floatingCourtyard9 = assetImage("projects/floating-courtyard/3_4/9.webp");
const floatingCourtyard10 = assetImage("projects/floating-courtyard/3_4/10.webp");
// ---- Palette Apartment — supplied cover and project photography ----
const paletteApartmentCover = assetImage("projects/PALETTE APARTMENT/cover/COVER.webp");
const paletteApartment1 = assetImage("projects/PALETTE APARTMENT/photographs/1.webp");
const paletteApartment2 = assetImage("projects/PALETTE APARTMENT/photographs/2.webp");
const paletteApartment3 = assetImage("projects/PALETTE APARTMENT/photographs/3.webp");
const paletteApartment4 = assetImage("projects/PALETTE APARTMENT/photographs/4.webp");
const paletteApartment5 = assetImage("projects/PALETTE APARTMENT/photographs/5.webp");
const paletteApartment6 = assetImage("projects/PALETTE APARTMENT/photographs/6.webp");
const paletteApartment7 = assetImage("projects/PALETTE APARTMENT/photographs/7.webp");
const paletteApartment8 = assetImage("projects/PALETTE APARTMENT/photographs/8.webp");
// ---- The Step Maze House — supplied cover and project photography ----
const stepMazeCover = assetImage("projects/STEP-MAZE/cover/COVER.webp");
const stepMaze1 = assetImage("projects/STEP-MAZE/photographs/1.Front Elevation.webp");
const stepMaze2 = assetImage("projects/STEP-MAZE/photographs/2. Front Elevation.webp");
const stepMaze3 = assetImage("projects/STEP-MAZE/photographs/3. Front Elevation.webp");
const stepMaze4 = assetImage("projects/STEP-MAZE/photographs/4.Side Elevation.webp");
const stepMaze5 = assetImage("projects/STEP-MAZE/photographs/5.1Interaction with street.webp");
const stepMazeSectionalDiagram = assetImage("projects/STEP-MAZE/photographs/6. SECTIONAL DIAGRAM.webp");
const stepMazeStaircaseLobby = assetImage("projects/STEP-MAZE/photographs/6.Staircase Lobby.webp");
const stepMazeAxono = assetImage("projects/STEP-MAZE/photographs/7. STEP MAZE AXONO.webp");
const stepMazeStaircaseSkylight1 = assetImage("projects/STEP-MAZE/photographs/7.Staircase illuminated by a skylight.webp");
const stepMazeStaircaseSkylight2 = assetImage("projects/STEP-MAZE/photographs/8.Staircase illuminated by a skylight.webp");
const stepMazeGroundFloorEntrance = assetImage("projects/STEP-MAZE/photographs/9. Ground Floor Entrance.webp");
const stepMazeDining = assetImage("projects/STEP-MAZE/photographs/10. Dining.webp");
const stepMazeConnectingFloors = assetImage("projects/STEP-MAZE/photographs/11.Connecting Floors.webp");
const stepMazeInformalSitting = assetImage("projects/STEP-MAZE/photographs/12. Informal sitting + stairs.webp");
const stepMazeSideElevationView = assetImage("projects/STEP-MAZE/photographs/13. Side Elevation View.webp");
const stepMazeSkylight = assetImage("projects/STEP-MAZE/photographs/16. Skylight.webp");
const stepMazeCornerElevation = assetImage("projects/STEP-MAZE/photographs/17. Corner Elevation.webp");
const stepMazeExteriorFacade = assetImage("projects/STEP-MAZE/photographs/18. Exterior facade view.webp");
// ---- Slender House — supplied cover and project photography ----
const slenderHero = assetImage("projects/Slender-House/cover/COVER.webp");
const slender1 = assetImage("projects/Slender-House/photographs/1. Building elevation.webp");
const slender2 = assetImage("projects/Slender-House/photographs/2. Central Cut-out (Inter-connectivity).webp");
const slender3 = assetImage("projects/Slender-House/photographs/3. Building Elevation.webp");
const slender4 = assetImage("projects/Slender-House/photographs/4. Elevation .webp");
const slender5 = assetImage("projects/Slender-House/photographs/5. Entrance (Ground Floor).webp");
const slender6 = assetImage("projects/Slender-House/photographs/6. Formal Living.webp");
const slender7 = assetImage("projects/Slender-House/photographs/7. Dining and Bar .webp");
const slender8 = assetImage("projects/Slender-House/photographs/8. Central Cut-out.webp");
const slender9 = assetImage("projects/Slender-House/photographs/9. Staircase View.webp");
const slender10 = assetImage("projects/Slender-House/photographs/10. Bridge and Informal Dining (First Floor).webp");
const slender11 = assetImage("projects/Slender-House/photographs/11. Central Cut-out(First Floor).webp");
const slender12 = assetImage("projects/Slender-House/photographs/12. Father_s Room (First Floor).webp");
const slender15 = assetImage("projects/Slender-House/photographs/15. Entrance (Second Floor).webp");
const slender16 = assetImage("projects/Slender-House/photographs/16. Skylight (Second Floor).webp");
const slender17 = assetImage("projects/Slender-House/photographs/17. Master Bedroom (Second Floor).webp");
const slender18 = assetImage("projects/Slender-House/photographs/18. Study (Second Floor).webp");
const slender19 = assetImage("projects/Slender-House/photographs/model.webp");
// ---- Swatantra Residence — supplied cover and project photography ----
const swatantraHero = assetImage("projects/SWATANTRA-RESIDENCE/COVER IMAGE/hero.jpg");
const swatantra1 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (2).jpg");
const swatantra2 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (4).jpg");
const swatantra3 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (5).JPG");
const swatantra4 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (6).jpg");
const swatantra5 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1.1 Outdoor.jpg");
const swatantra6 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1.jpg");
const swatantra7 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/10. Triple Height Courtyard.jpg");
const swatantra8 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/14. Terrace Loungemini_BHA_1596.jpg");
const swatantra9 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/15 Terrace.jpg");
const swatantra10 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/3. Stilt Entrance.jpg");
const swatantra11 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/3.jpg");
const swatantra12 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/4. Staircase (1).JPG");
const swatantra13 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/4. Staircase (3).jpg");
const swatantra14 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/5. Ground Living Room (3).JPG");
const swatantra15 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/5. Ground Living Room (4).JPG");
const swatantra16 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/5. Ground Living Room (5).jpg");
const swatantra17 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/5. Ground Living Room (6).jpg");
const swatantra18 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/5. Ground Living Room (7).jpg");
const swatantra19 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/6. Ground_Family Lounge.jpg");
const swatantra20 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/7. Ground_Living Room Balcony (3).JPG");
const swatantra21 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/8. Bedrooms (1).jpg");
const swatantra22 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/8. Bedrooms (3).JPG");
const swatantra23 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/9. First_Courtyards (4).jpg");
const swatantra24 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/9. First_Courtyards (5).JPG");
const swatantra25 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/CENTRAL CUTOUT.jpg");
const swatantra26 = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/Copy of 05 SECTION.jpg");
// ---- Apartment 88 - supplied cover and project photography ----
const apartment88Hero = assetImage("projects/apartment88/cover/COVER.webp");
const apartment881 = assetImage("projects/apartment88/3_4/1.webp");
const apartment882 = assetImage("projects/apartment88/3_4/2.webp");
const apartment883 = assetImage("projects/apartment88/3_4/3.webp");
const apartment884 = assetImage("projects/apartment88/3_4/4.webp");
const apartment885 = assetImage("projects/apartment88/3_4/5.webp");
const apartment886 = assetImage("projects/apartment88/3_4/6.webp");
const apartment887 = assetImage("projects/apartment88/3_4/7.webp");
const apartment888 = assetImage("projects/apartment88/3_4/8.webp");
const apartment889 = assetImage("projects/apartment88/3_4/9.webp");
const apartment8810 = assetImage("projects/apartment88/3_4/10.webp");
const apartment8811 = assetImage("projects/apartment88/3_4/11.webp");
const apartment8812 = assetImage("projects/apartment88/3_4/12.webp");
const apartment8813 = assetImage("projects/apartment88/3_4/13.webp");
const apartment8814 = assetImage("projects/apartment88/3_4/14.webp");
const apartment8815 = assetImage("projects/apartment88/3_4/15.webp");
// ---- Home page Featured In logos ----
const featuredInMgs = assetImage("Home Page logos/mgs.jpg");
const featuredInSurface = assetImage("Home Page logos/surface.png");
const featuredInNdtv = assetImage("Home Page logos/NDTV.webp");
const featuredInDeccanHerald = assetImage("Home Page logos/deccanherald.png");
const featuredInArchitecturalDigest = assetImage("Home Page logos/ad.png");
const featuredInHindustanTimes = assetImage("Home Page logos/Hindustan_Times_logo.svg.webp");
const featuredInSouthChinaMorningPost = assetImage("Home Page logos/southchina.png");
const featuredInRethinkingTheFuture = assetImage("Home Page logos/Rethinking-the-future.png");
const featuredInDivisare = assetImage("Home Page logos/divisare.png");
const featuredInWow = assetImage("Home Page logos/wow.jpg");
const featuredInTilesOfIndia = assetImage("Home Page logos/tilesofindia.png");
const featuredInBuildofy = assetImage("Home Page logos/Buildofy.jpg");
const featuredInAbpLive = assetImage("Home Page logos/ABP-LIVE.webp");
const featuredInNewIndianExpress = assetImage("Home Page logos/newindianexpress.png");
const featuredInHindustan = assetImage("Home Page logos/HD.jpeg");
const featuredInVogue = assetImage("Home Page logos/vogue.png");
// const featuredInArchitizer = assetImage("Home Page logos/Architizer_Logo.png");
const featuredInNewYorkTimes = assetImage("Home Page logos/new-york-times-logo.svg");
const featuredInTimesOfIndia = assetImage("Home Page logos/TOI.png");
const featuredInIndiaToday = assetImage("Home Page logos/indiatoday.png");
const featuredInWorldArchitecture = assetImage("Home Page logos/worldarchitecture.png");
const featuredInWfm = assetImage("Home Page logos/wfm.png");
const featuredInEconomicTimes = assetImage("Home Page logos/The_Economic_Times.jpg");
const featuredInTimeOfIndia = assetImage("Home Page logos/timeofindia.png");
const featuredInSydneyMorningHerald = assetImage("Home Page logos/sidneymorning.png");
const featuredInIndianExpress = assetImage("Home Page logos/indianexpress.jpg");
const featuredInPioneer = assetImage("Home Page logos/thepioneer.png");
const featuredInTelegraph = assetImage("Home Page logos/The-telegraph-logo.png");
const featuredInHindu = assetImage("Home Page logos/thehindu.png");
const featuredInDezeen = assetImage("Home Page logos/dezeen-magazine.jpg");
const featuredInArchitecturalDigestMagazine = assetImage("Home Page logos/architectural-digest.png");
const featuredInStir = assetImage("Home Page logos/stir.png");
const featuredInFinancialTimes = assetImage("Home Page logos/financialtimes.jpg");
const featuredInTraveller = assetImage("Home Page logos/traveller.png");
const featuredInWac = assetImage("Home Page logos/WAC.svg");
const featuredInElleDecor = assetImage("Home Page logos/elledecore.png");
const featuredInCurlyTales = assetImage("Home Page logos/curlytales.jpeg");
const featuredInIiid = assetImage("Home Page logos/iiid.jpg");
const featuredInMint = assetImage("Home Page logos/mint.webp");
const featuredInAsianPaints = assetImage("Home Page logos/asianpaints.png");
const featuredInLoopDesignAwards = assetImage("Home Page logos/loopdesignaward.png");
const featuredInThePrint = assetImage("Home Page logos/theprint.png");
const featuredInWorldArchitectureNews = assetImage("Home Page logos/worldarchitecturenews.png");
const featuredInBbc = assetImage("Home Page logos/BBC.png");
const featuredInUnesco = assetImage("Home Page logos/UNISCO.webp");
const featuredInGoodHomes = assetImage("Home Page logos/goodhomes.jpg");
const featuredInIndiart = assetImage("Home Page logos/indiart.png");
const featuredInArchitectsAndInteriorsIndia = assetImage("Home Page logos/architects and interiors india.png");
const featuredInIndianInstituteOfArchitects = assetImage("Home Page logos/Indian_Institute_of_Architects_Logo.png");
// const featuredInArchDaily = assetImage("Home Page logos/ArchDaily.png");
const featuredInClogo = assetImage("Home Page logos/clogo.png");
const awardMark1 = assetImage("awards/1.png");
const awardMark2 = assetImage("awards/2.png");
const awardMark3 = assetImage("awards/3.png");
const awardMark4 = assetImage("awards/4.png");
const awardMark5 = assetImage("awards/5.png");
const awardMark6 = assetImage("awards/6.png");
const awardMark7 = assetImage("awards/7.png");
const awardMark8 = assetImage("awards/8.png");
const awardMark9 = assetImage("awards/9.png");
const awardMark10 = assetImage("awards/10.png");
const awardsFeature1 = assetImage("awards/feature1.jpg");
const awardsFeature2 = assetImage("awards/feature2.jpg");
const processDesign = assetUrl("process/Design-Process.mp4");
const processStudio = assetUrl("process/Designing-In-Studio.mp4");
const processStorytelling = assetUrl("process/Storytelling.mp4");
const processSymbiosis = assetUrl("process/Symbiosis.mp4");
const processTechnology = assetUrl("process/Innovative-Technology.mp4");
const processModelMaking = assetUrl("process/Model-Making.mp4");
const unsplash = (id, w = 1600, h = 1000) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const intersektCover = assetImage("projects/INTERSEXT-SHOWROOM/cover/COVER IMAGE.webp");
const ashrayaCover = assetImage("projects/ASHRAYA-RESIDENCE/cover/COVER.webp");

export const assets = {
    // ---- Brand ----
    logoText: "SPACES ARCHITECTS",
    logoSuffix: "@ka",

    // ---- Home page ----
    home: {
        heroImage: houseOfSteppedGardenHero,
        heroTitle: "HOUSE OF STEPPED GARDEN",
        heroSubtitle: "KOCHI",
        menuThumb: menuImage,
    },

    // ---- About / Studio page ----
    about: {
        heroImage: aboutHeroImage,
        heroImages: [
            unsplash("photo-1497366216548-37526070297c", 1200, 700),
            unsplash("photo-1497366811353-6870744d04b2", 900, 700),
            unsplash("photo-1600607687920-4e2a09cf159d", 1000, 700),
        ],
        founderPhoto: kapilPhoto,
    },

    // ---- Process page videos ----
    process: {
        design: processDesign,
        studio: processStudio,
        storytelling: processStorytelling,
        symbiosis: processSymbiosis,
        technology: processTechnology,
        modelMaking: processModelMaking,
    },

    // ---- Featured Projects (home-page carousel) ----
    featuredProjects: [
        { id: "art-house", href: "/projects/art-house", name: "Art House", image: artHouse },
        { id: "house-of-stepped-garden", href: "/projects/house-of-stepped-garden", name: "House of Stepped Garden", image: houseOfSteppedGarden },
        { id: "haveli-dharampura", href: "/projects/haveli-dharampura", name: "Haveli Dharampura", image: haveliDharampura },
        { id: "heritage-park", href: "/projects/heritage-park", name: "The Heritage Park", image: heritagePark },
        { id: "golden-haveli", href: "/projects/golden-haveli", name: "Golden Haveli", image: goldenHaveli },
        { id: "library-house", href: "/projects/library-house", name: "Library House", image: libraryHouse },
        { id: "swatantra-residence", href: "/projects/swatantra-residence", name: "Swatantra Residence", image: swatantraResidence },
        { id: "house-of-dancing-screens", href: "/projects/house-of-dancing-screens", name: "House of Dancing Screen", image: houseOfDancingScreen },
        { id: "slender-house", href: "/projects/slender-house", name: "Slender House", image: slenderHero },
        { id: "step-maze", href: "/projects/step-maze", name: "Step Maze", image: stepMazeCover },
        { id: "intersext-showroom", href: "/projects/intersext-showroom", name: "Intersekt", image: intersektCover },
        { id: "ashraya-residence", href: "/projects/ashraya-residence", name: "Ashraya Residence", image: ashrayaCover },
    ],

    // ---- Featured News (home-page carousel) ----
      featuredNews: [
        { name: "Dezeen Exclusive Feature", source: "Dezeen", image: dezeenFeature, href: "https://www.dezeen.com/2026/05/29/art-house-new-delhi-residence-intense-customisation/" },
        { name: "Architectural Digest India Feature", source: "AD", image: architecturalDigestFeature, href: "https://www.architecturaldigest.in/story/this-34500-square-foot-kochi-home-is-full-of-stepped-gardens-terraces-and-courtyards-spaces-architects-ka/" },
        { name: "Gandhi Darshan Park Inauguration", source: "Press", image: gandhiDarshanInauguration, href: "https://www.hindustantimes.com/photos/news/president-murmu-unveils-12-feet-high-statue-of-mahatma-gandhi-at-gandhi-vatika-101693818208295.html" },
        { name: "Heritage Park Inauguration", source: "Press", image: heritageParkInauguration, href: "https://www.aninews.in/news/national/general-news/president-kovind-inaugurates-charti-lal-goel-heritage-park-in-old-delhi20220320233252/" },
        { name: "Featured by Habitus Living", source: "Habitus Living", image: habitusLivingFeature, href: "https://www.habitusliving.com/projects/house-of-stepped-gardens-spaces-architects" },
        { name: "As one of top 10 firms in Delhi", source: "Rethinking the Future", image: rethinkingFeature, href: "https://www.re-thinkingthefuture.com/article/best-architects-in-delhi-ncr/" },
        { name: "Golden Haveli Inauguration", source: "Press", image: goldenHaveliInauguration, href: "https://www.architectandinteriorsindia.com/news/take-in-chandni-chowk-views-from-the-golden-haveli-with-eam-s-jaishankar" },
        { name: "Timeless Houses authored by Kapil Aggarwal", source: "Timeless Houses", image: timelessHousesFeature, fit: "contain", position: "center", href: "https://www.stirworld.com/think-books-and-movies-book-release-timeless-houses-promoting-diversity-in-architecture" },
        { name: "Featured by Financial Times as the 15 dreamiest homes on earth", source: "Financial Times", image: financialTimesFeature, href: "https://www.ft.com/content/3bc01f86-ad16-4901-8782-42a91f9a72ea" },
        { name: "Panellist in Indexplus design debate: Designing for Density", source: "Indexplus", image: indexplusPanel },
        { name: "Featured by Archello as one of the top 25 architecture firms", source: "Archello", image: archelloFeature },
        { name: "Featured In AD France ", source: "AD Magazine France", image: concreteHouseAgraFeature, href: "https://www.admagazine.fr/article/maison-architecte-beton-taj-mahal" },
        { name: "Modern House with Dancing Screens", source: "ArchDaily", image: modernHouseDancingScreensFeature, href: "https://www.archdaily.com/1020102/the-house-of-dancing-screens-spaces-architects-at-ka" },
        { name: "Design Essentia India – April–June 2023", source: "Design Essentia", image: designEssentiaFeature, href: "https://designessentiamagazine.com/de-apr-jun-2023-edition/" },
        { name: "6X18 Slender House – Spaces Architects", source: "Instagram", image: slenderHouse6x18Feature, href: "https://www.instagram.com/reel/DAYmKZgPxCf/" },
        { name: "The Urban Nest – WAF Highly Commended 2022", source: "World Architecture Festival", image: urbanNestWafFeature },
        // { name: "Featured by Design Asia Magazine as top 10 architectural firm", source: "Design Asia", image: designAsiaFeature, href: "https://designasiamagazine.com/top-10-architecture-firms-in-delhi/" },
    ],

    // ---- Featured In (press logo strip) ----
    featuredIn: [
        { name: "MGS Architecture", image: featuredInMgs },
        { name: "Surface", image: featuredInSurface },
        { name: "NDTV", image: featuredInNdtv },
        { name: "Deccan Herald", image: featuredInDeccanHerald },
        { name: "Architectural Digest", image: featuredInArchitecturalDigest },
        { name: "Hindustan Times", image: featuredInHindustanTimes },
        { name: "South China Morning Post", image: featuredInSouthChinaMorningPost },
        { name: "Rethinking The Future", image: featuredInRethinkingTheFuture },
        { name: "Divisare", image: featuredInDivisare },
        { name: "WOW", image: featuredInWow },
        { name: "Tiles of India", image: featuredInTilesOfIndia },
        { name: "Buildofy", image: featuredInBuildofy },
        { name: "ABP Live", image: featuredInAbpLive },
        { name: "The New Indian Express", image: featuredInNewIndianExpress },
        { name: "Hindustan", image: featuredInHindustan },
        { name: "Vogue", image: featuredInVogue },
        // { name: "Architizer", image: featuredInArchitizer },
        { name: "The New York Times", image: featuredInNewYorkTimes },
        { name: "The Times of India", image: featuredInTimesOfIndia },
        { name: "India Today", image: featuredInIndiaToday },
        { name: "World Architecture", image: featuredInWorldArchitecture },
        { name: "WFM", image: featuredInWfm },
        { name: "The Economic Times", image: featuredInEconomicTimes },
        { name: "Time of India", image: featuredInTimeOfIndia },
        { name: "The Sydney Morning Herald", image: featuredInSydneyMorningHerald },
        { name: "The Indian Express", image: featuredInIndianExpress },
        { name: "The Pioneer", image: featuredInPioneer },
        { name: "The Telegraph", image: featuredInTelegraph },
        { name: "The Hindu", image: featuredInHindu },
        { name: "Dezeen", image: featuredInDezeen },
        { name: "Architectural Digest Magazine", image: featuredInArchitecturalDigestMagazine },
        { name: "STIR", image: featuredInStir },
        { name: "Financial Times", image: featuredInFinancialTimes },
        { name: "Traveller", image: featuredInTraveller },
        { name: "World Architecture Community", image: featuredInWac },
        { name: "ELLE DECOR", image: featuredInElleDecor },
        { name: "Curly Tales", image: featuredInCurlyTales },
        { name: "IIID", image: featuredInIiid },
        { name: "Mint", image: featuredInMint },
        { name: "Asian Paints", image: featuredInAsianPaints },
        { name: "Loop Design Awards", image: featuredInLoopDesignAwards },
        { name: "ThePrint", image: featuredInThePrint },
        { name: "World Architecture News", image: featuredInWorldArchitectureNews },
        { name: "BBC", image: featuredInBbc },
        { name: "UNESCO", image: featuredInUnesco },
        { name: "GoodHomes", image: featuredInGoodHomes },
        { name: "Indiart", image: featuredInIndiart },
        { name: "Architects and Interiors India", image: featuredInArchitectsAndInteriorsIndia },
        { name: "Indian Institute of Architects", image: featuredInIndianInstituteOfArchitects },
        // { name: "ArchDaily", image: featuredInArchDaily },
        { name: "C Logo", image: featuredInClogo },
    ],

    // ---- Awards page logos (kept in the artwork's supplied order) ----
    awardMarks: [
        { name: "ArchDaily", image: awardMark1 },
        { name: "RTF", image: awardMark2 },
        { name: "UNESCO", image: awardMark3 },
        { name: "NDTV", image: awardMark4 },
        { name: "World Architecture Community", image: awardMark5 },
        { name: "Loop Design Awards", image: awardMark6 },
        { name: "IIA", image: awardMark7 },
        { name: "World Festival of Interiors", image: awardMark8 },
        { name: "IIID", image: awardMark9 },
        { name: "Architectural Digest", image: awardMark10 },
    ],
    awardsFeatures: [awardsFeature1, awardsFeature2],

    // ---- Projects gallery page ----
    // The 7 named project photos, in the exact order/grouping of the
    // original Canva reference page:
    //   Row 1 (2-up):  Slender House (portrait) | Haveli Dharampura (landscape)
    //   Row 2 (3-up):  Floating Courtyard House (portrait) | Swatantra Residence | Apartment 88
    //   Row 3 (2-up):  Palette Apartment (portrait) | Art House
    // orientation is set from each photo's real aspect ratio and is only a
    // fallback — JustifiedGallery reads the actual image width/height first.
    projectGallery: [
        { file: "SLENDER HOUSE.jpg", name: "Slender House", image: galSlenderHouse, orientation: "portrait" },
        { file: "HAVELI DHARAMPURA.jpg", name: "Haveli Dharampura", image: galHaveliDharampura, orientation: "landscape" },
        { file: "FLOATING COURTYARD HOUSE.png", name: "Floating Courtyard House", image: galFloatingCourtyardHouse, orientation: "portrait" },
        { file: "SWATANTRA RESIDENCE.jpg", name: "Swatantra Residence", image: galSwatantraResidence, orientation: "portrait" },
        { file: "APARTMENT 88.jpg", name: "Apartment 88", image: galApartment88, orientation: "portrait" },
        { file: "PALETTE APARTMENT.jpg", name: "Palette Apartment", image: galPaletteApartment, orientation: "portrait" },
        { file: "ART HOUSE.jpg", name: "Art House", image: galArtHouse, orientation: "landscape" },
        { file: "STEP MAZE.jpg", name: "Step Maze", image: galStepMaze, orientation: "portrait" },
        { file: "HERITAGE PARK.png", name: "Heritage Park", image: galHeritagePark, orientation: "landscape" },
        // ---- Continues after the masonry block as a classic justified-row
        // section (each row's images share one height, width ∝ aspect
        // ratio, no fixed columns) — matches how the reference page lays
        // these particular rows out. ----
        { file: "HOUSE OF STEPPED GARDEN.jpg", name: "House of Stepped Garden", image: galHouseOfSteppedGarden, orientation: "landscape" },
        { file: "STONEX INDIA BUILDING.png", name: "Stonex India Building", image: galStonexIndiaBuilding, orientation: "portrait" },
        { file: "HOUSE OF DANCING SCREENS.png", name: "House of Dancing Screens", image: galHouseOfDancingScreens, orientation: "portrait" },
        { file: "LIBRARY HOUSE.jpg", name: "Library House", image: galLibraryHouse, orientation: "landscape" },
        { file: "HOUSE OF SCULPTED SCREENS.jpg", name: "House of Sculpted Screens", image: galHouseOfSculptedScreens, orientation: "portrait" },
        { file: "EXPRESS OFFICE.jpg", name: "Express Office", image: galExpressOffice, orientation: "portrait" },
        { file: "GANDHI DARSHAN PARK.jpg", name: "Gandhi Darshan Park", image: galGandhiDarshanPark, orientation: "portrait" },
        { file: "COLOR BOX OFFICE.jpg", name: "Color Box Office", image: galColorBoxOffice, orientation: "portrait" },
        { file: "ASHRAYA RESIDENCE.png", name: "Ashraya Residence", image: galAshrayaResidence, orientation: "landscape" },
        { file: "VEYA APARTMENT.jpg", name: "Veya Apartment", image: galVeyaApartment, orientation: "portrait" },
        { file: "JAIPUR RESIDENCE.jpg", name: "Jaipur Residence", image: galJaipurResidence, orientation: "portrait" },
        { file: "ARCHITECT#U2019S OFFICE.png", name: "Architect's Office", image: galArchitectsOffice, orientation: "portrait" },
        { file: "COLOR DIALOGUE.jpg", name: "Color Dialogue", image: galColorDialogue, orientation: "portrait" },
        { file: "J HOUSE.jpg", name: "J House", image: galJHouse, orientation: "landscape" },
        // ---- Continuation of the Canva reference page, picking up right
        // after J House (same photos, same order, same names). ----
        { file: "INTERSEKT SHOWROOM.png", name: "Intersekt Showroom", image: galIntersextShowroom, orientation: "portrait" },
        { file: "LEGEND VENEER EXHIBITION - DELHI.jpg", name: "Legend Veneer Exhibition - Delhi", image: galLegendVeneerExhibition, orientation: "portrait" },
        { file: "ASTRA HEIGHTS.png", name: "Astra Heights", image: galAstraHeights, orientation: "portrait" },
        { file: "GOLDEN HAVELLI.jpg", name: "Golden Haveli", image: galGoldenHaveli, orientation: "landscape" },
        { file: "CUBIX OFFICE.jpg", name: "Cubix Office", image: galCubixOffice, orientation: "portrait" },
        { file: "IMELDA.png", name: "Imelda.Inc", image: galImeldaInc, orientation: "portrait" },
        { file: "SCREEN HOUSE.jpg", name: "Screen House", image: galScreenHouse, orientation: "portrait" },
        { file: "LAHORI GATE MUSEUM.png", name: "Lahori Gate Museum", image: galLahoriGateMuseum, orientation: "portrait" },
        { file: "THE BLUE COURTYARD.jpg", name: "Blue Courtyard House", image: galTheBlueCourtyard, orientation: "portrait" },
        { file: "TILES AND KITCHEN SHOWROOM.png", name: "Tiles and Kitchen Showroom", image: galTilesAndKitchenShowroom, orientation: "portrait" },
        { file: "STUDIO ELEMENT.png", name: "Studio Element", image: galStudioElement, orientation: "portrait" },
        // ---- Continuation of the Canva reference page — Alaya
        // Residence through House of Hues. ----
        { file: "ALAYA RESIDENCE.jpg", name: "Alaya Residence", image: galAlayaResidence, orientation: "portrait" },
        { file: "LEGEND VENEER EXHIBITION - MUMBAI.jpg", name: "Legend Veneer Exhibition - Mumbai", image: galLegendVeneerExhibitionMumbai, orientation: "portrait" },
        { file: "KRISHA'S RESIDENCE.jpg", name: "Krisha's Residence", image: galKrishasResidence, orientation: "portrait" },
        { file: "COLOR COURT.png", name: "Color Court", image: galColorCourt, orientation: "portrait" },
        { file: "HOUSE OF CURVES.jpg", name: "House of Curves", image: galHouseOfCurves, orientation: "portrait" },
        { file: "SACHDEVA FARMHOUSE.png", name: "Sachdeva Farmhouse", image: galSachdevaFarmhouse, orientation: "landscape" },
        { file: "GLULAM SHOWROOM.png", name: "Glulam Showroom", image: galGlulamShowroom, orientation: "landscape" },
        { file: "KAVYAM.jpg", name: "Kavyam", image: galKavyam, orientation: "landscape" },
        { file: "JP APARTMENT.jpg", name: "JP Apartment", image: galJpApartment, orientation: "portrait" },
        { file: "PATTERN PLAY.jpg", name: "Pattern Play", image: galPatternPlay, orientation: "portrait" },
        { file: "NOCC OFFICE.png", name: "NOCC Office", image: galNoccOffice, orientation: "landscape" },
        { file: "THE STEPWELL.jpg", name: "The Stepwell", image: galTheStepwell, orientation: "landscape" },
        { file: "ARAVALI FARMHOUSE.jpg", name: "Aravali Farmhouse", image: galAravaliFarmhouse, orientation: "portrait" },
        { file: "HOUSE OF HUES.jpg", name: "House of Hues", image: galHouseOfHues, orientation: "portrait" },
        // ---- Continuation of the Canva reference page — AMG Office
        // through Hansgrohe Showroom. ----
        { file: "AMG OFFICE.jpg", name: "AMG Office", image: galAmgOffice, orientation: "portrait" },
        { file: "SIGNATURE OFFICE.jpg", name: "Signature Office", image: galSignatureOffice, orientation: "landscape" },
        { file: "ADHARSHILA VATIKA KINDERGARTEN.png", name: "Adharshila Vatika Kindergarten", image: galAdharshilaVatikaKindergarten, orientation: "landscape" },
        { file: "SONIPAT HAVELLI.png", name: "Sonipat Havelli", image: galSonipatHavelli, orientation: "portrait" },
        { file: "GREY APARTMENTS.jpg", name: "Grey Apartments", image: galGreyApartments, orientation: "portrait" },
        { file: "POETIC HOUSE.png", name: "Poetic House", image: galPoeticHouse, orientation: "landscape" },
        { file: "BHIMTAL RESORT.png", name: "Bhimtal Resort", image: galBhimtalResort, orientation: "landscape" },
        { file: "BRICK HOUSE.png", name: "Brick House", image: galBrickHouse, orientation: "portrait" },
        { file: "BANDIKUI RAILWAY STATION.png", name: "Bandikui Railway Station", image: galBandikuiRailwayStation, orientation: "landscape" },
        { file: "HERITAGE PARK EXTENSION.jpg", name: "Extension of Heritage Park", image: galHeritageParkExtension, orientation: "landscape" },
        { file: "FLUIDIC OFFICE.jpg", name: "Fluidic Office", image: galFluidicOffice, orientation: "portrait" },
        { file: "GUPTA#U2019S RESIDENCE.jpg", name: "Gupta's Residence", image: galGuptasResidence, orientation: "portrait" },
        { file: "HOUSE AROUND A TREE.png", name: "House Around a Tree", image: galHouseAroundATree, orientation: "landscape" },
        { file: "JAIN#U2019S RESIDENCE.jpg", name: "Jain's Residence", image: galJainsResidence, orientation: "landscape" },
        { file: "SAATVIK MARBLE SHOWROOM.jpg", name: "Saatvik Marble Showroom", image: galSaatvikMarbleShowroom, orientation: "portrait" },
        { file: "THECANVAS.jpg", name: "The Canvas", image: galTheCanvas, orientation: "landscape" },
        { file: "SETHI#U2019S RESIDENCE.png", name: "Sethi's Residence", image: galSethisResidence, orientation: "portrait" },
        { file: "SOBHTI RESIDENCE.jpg", name: "Sobhti Residence", image: galSobhtiResidence, orientation: "landscape" },
        { file: "HANSGROHE SHOWROOM.png", name: "Hansgrohe Showroom", image: galHansgroheShowroom, orientation: "landscape" },
        // ---- Continuation of the Canva reference page — Toy Bank
        // Museum through The Urban Nest. ----
        { file: "TOY BANK MUSEUM.jpg", name: "Toy Bank Museum", image: galToyBankMuseum, orientation: "landscape" },
        { file: "CONCRETE HOUSE.png", name: "Concrete House", image: galConcreteHouse, orientation: "portrait" },
        { file: "HOUSE ON HILL.png", name: "House on Hill", image: galHouseOnHill, orientation: "landscape" },
        { file: "HOUSE IN HARMONY.jpg", name: "House in Harmony", image: galHouseInHarmony, orientation: "portrait" },
        { file: "MARMO HOME OFFICE.jpg", name: "Marmo Home Office", image: galMarmoHomeOffice, orientation: "portrait" },
        { file: "SOLANCE APARTMENT.jpg", name: "Solance Apartment", image: galSolanceApartment, orientation: "portrait" },
        { file: "SANCTUM HOUSE.jpg", name: "Sanctum House", image: galSanctumHouse, orientation: "landscape" },
        { file: "SHRI VRINDA HOTEL.png", name: "Shri Vrinda Hotel", image: galShriVrindaHotel, orientation: "portrait" },
        { file: "DISPENSARY SONIPAT.png", name: "Dispensary Sonipat", image: galDispensarySonipat, orientation: "portrait" },
        { file: "GURDEEP JI KA GHAR.png", name: "The Garden House", image: galGurdeepJiKaGhar, orientation: "landscape" },
        { file: "RASA FARMHOUSE.jpg", name: "Rasa Farmhouse", image: galRasaFarmhouse, orientation: "landscape" },
        { file: "MARBLE CITY EXHIBITION STALL.jpg", name: "Marble City Exhibition Stall", image: galMarbleCityExhibitionStall, orientation: "portrait" },
        { file: "THE URBAN NEST.jpg", name: "The Urban Nest", image: galTheUrbanNest, orientation: "portrait" },
        { file: "project font.png", name: "Project Font", image: galProjectFont, orientation: "landscape" },
    ],

    // ---- Projects / Blog grid page ----
    projects: [{
        id: "haveli-dharampura",
        image: haveliHero,
        name: "Haveli Dharampura",
        excerpt: "Delhi — Heritage Restoration & Hospitality",
    },
    {
        id: "art-house",
        name: "Art House",
        excerpt: "A residence conceived around a sculptural steel staircase, where art, light and landscape shape every threshold.",
        image: artHouseHero,
    },
    {
        id: "house-of-stepped-garden",
        name: "House of Stepped Garden",
        excerpt: "Terraced greenery cascades down the facade of this Kochi home, blurring the line between architecture and landscape.",
        image: houseOfSteppedGardenHero,
    },
    {
        id: "library-house",
        name: "Library House",
        excerpt: "Timber joinery and quiet reading nooks define a home built around the ritual of books and natural light.",
        image: libraryHouseHero,
    },
    {
        id: "swatantra-residence",
        name: "Swatantra Residence",
        excerpt: "An interior of warm wood and soft daylight, designed as a series of intimate, memory-laden living moments.",
        image: swatantraCover,
    },
    {
        id: "heritage-park",
        name: "The Heritage Park",
        excerpt: "A public realm project giving Old Delhi back its open space, weaving heritage and community.",
        image: heritagePark,
    },
    {
        id: "golden-haveli",
        name: "Golden Haveli",
        excerpt: "Restoring the memory of Chandni Chowk with hand-finished details and traditional proportions.",
        image: goldenHaveli,
    },
    {
        id: "apartment-88",
        name: "Apartment 88",
        excerpt: "A refined residential interior balancing warmth, texture and contemporary craftsmanship.",
        image: apartment88Hero,
    },
    {
        id: "house-of-dancing-screens",
        name: "House of Dancing Screens",
        excerpt: "Dynamic perforated screens modulate daylight and privacy across a sculpted residential facade.",
        image: houseOfDancingScreen,
    },
    ],

    // ---- Blog page (editorial / journal entries) ----
    blog: [
            {
            id: "a-legacy-restored",
            title: "Haveli Dharampura: The Art of Restoring Architectural Heritage",
            image: blogLegacyRestored,
            excerpt: "A reflection on memory, craftsmanship and giving historic architecture a future.",
            lead: [
                { type: "sub", text: "A reflection on memory, craftsmanship and giving historic architecture a future" },
                { type: "sub", text: "Kapil Aggarwal | Principal Architect" },
                { type: "quote", text:"A historic building deserves a future as much as it deserves a history." },
                { type: "p", text: "Restoring a historic building is never merely an exercise in repairing walls or bringing an old structure back to life. It is an exploration of memory, craftsmanship, cultural identity and the passage of time. Every historic building carries stories within its walls—of generations, traditions, changing lifestyles and the communities that have shaped it." },
                { type: "p", text: "Haveli Dharampura, nestled within the historic fabric of Old Delhi, presented an opportunity to engage with this relationship between architecture and memory." },
                { type: "p", text: "The haveli retained the distinctive character of Old Delhi, yet years of neglect had taken their toll on its structure and architectural elements. The challenge was not to create something that simply looked historic, but to rediscover the architectural spirit of the original building and allow it to become relevant once again." },
            ],
            sections: [
                {
                    heading: "Understanding Before Intervening",
                    paragraphs: [
                        "Our approach to the restoration began with observation rather than intervention.",
                        "We studied the proportions, spatial relationships, courtyards, openings, ornamentation, materials and architectural details that defined the haveli. Understanding how these elements worked together was essential before making any decisions.",
                        "The intention was to preserve the existing architectural language wherever possible, allowing the original fabric to guide the restoration process. Rather than imposing a contemporary architectural expression, the project sought to uncover and reinforce the qualities that already existed within the building.",
                    ],
                },
                {
                    heading: "The Language of Traditional Craftsmanship",
                    paragraphs: [
                        "One of the most important aspects of restoring historic architecture is recognising that materials and craftsmanship are inseparable from the building's identity.",
                        "At Haveli Dharampura, traditional materials and construction techniques played a central role. Lime, stone, wood, handcrafted surfaces and intricate architectural details were approached with an understanding of their historical significance.",
                        "Conservation, in this sense, extends beyond preserving physical structures. It also involves preserving knowledge—the skills of artisans, the understanding of traditional materials and the techniques that have been passed down through generations.",
                        "The craftsmanship embedded in historic architecture is not merely decorative. It represents a cultural language that deserves continuity.",
                    ],
                },
                {
                    heading: "Architecture as a Bridge Between Past and Future",
                    paragraphs: [
                        "The most rewarding aspect of a restoration project is witnessing a neglected structure gradually recover its presence.",
                        "A building that once stood as a fragment of a forgotten past begins to participate in the life of the city again. Its courtyards, spaces and architectural details regain meaning, allowing people to experience a piece of history rather than simply observe it.",
                        "For us, the objective was to respect the historical identity of Haveli Dharampura while allowing the building to embrace a new chapter. This balance between conservation and contemporary relevance is perhaps the most delicate aspect of architectural restoration.",
                    ],
                },
                {
                    heading: "Preserving History Without Freezing Time",
                    paragraphs: [
                        "I have always believed that restoration should not turn architecture into a museum. Historic buildings deserve to evolve, provided that the interventions respect their original character and cultural significance.",
                        "The success of conservation lies in knowing what must remain untouched, what can be repaired and where sensitive intervention can help a building find a new purpose.",
                        "Haveli Dharampura reinforced a simple but enduring belief: architecture is as much about memory as it is about creation.",
                        "Architecture is not always about creating something new.",
                        "Sometimes, it is about giving the past a future.",
                        "At SpacesArchitects@ka, this project remains an important reminder that architecture is not always about making something new. Sometimes, its greatest contribution lies in rediscovering what already exists and allowing it to live again.",
                    ],
                },
            ],
            signoff: {
                name: "Kapil Aggarwal",
                tagline: "Principal Architect, SpacesArchitects@ka",
            },
        },
        {
            id: "a-pause-in-the-walled-city",
            title: "Giving Old Delhi Back Its Open Space: Charti Lal Goel Heritage Park",
            image: blogPauseInWalledCity,
            excerpt: "In the dense fabric of Old Delhi, open space is precious. A small public landscape can therefore have an impact far beyond its physical size.",
            paragraphs: [
                "In the dense fabric of Old Delhi, open space is precious. A small public landscape can therefore have an impact far beyond its physical size.",
                "Charti Lal Goel Heritage Park was conceived as an intervention that could reconnect people with a sense of openness within the historic city. The challenge was not simply to landscape a site, but to create a civic space that could belong naturally to its surroundings.",
                "The project brought together heritage, public life and landscape. Rather than competing with the historic character of the Walled City, the design sought to make the setting more legible and inviting.",
                "Good public architecture does not always announce itself through a monumental object. Sometimes its success lies in creating a place where people naturally pause, meet, walk, sit and observe.",
                "The project also reminded us that heritage conservation should extend beyond individual buildings. The spaces between buildings—the lanes, chowks, parks and thresholds—are equally important to the identity of an old city.",
                "Charti Lal Goel Heritage Park therefore became more than a landscape project. It became an exercise in giving the historic city a little breathing room.",
                "The larger lesson is one I continue to carry into my work: architecture can protect memory while simultaneously improving everyday life.",
            ],
        },
               {
            id: "house-becomes-a-landscape",
            title: "House of Stepped Gardens: When Architecture Becomes Landscape",
            image: blogHouseLandscape,
            excerpt: "What if a house was not designed as a building within a garden, but as a garden that one could inhabit?",
            lead: [
                { type: "sub", text: "What if a house was not designed as a building within a garden, but as a garden that one could inhabit?" },
                { type: "p", text: "Most houses are imagined as objects placed upon a piece of land. The landscape is then designed around them, often becoming a beautiful backdrop to architecture." },
                { type: "p", text: "But what happens when we reverse this relationship?" },
                { type: "p", text: "At House of Stepped Gardens, we began with a different proposition: what if architecture could grow out of the landscape, becoming an extension of the natural terrain rather than an object imposed upon it? This simple question became the starting point for the design." },
            ],
            sections: [
                {
                    heading: "An Architecture That Grows With the Land",
                    paragraphs: [
                        "Set within a contoured site, the 30,000 sq. ft. residence explores the relationship between built form, topography and nature. Instead of creating a singular architectural mass, the house unfolds through a series of stepped volumes, cascading terraces, courtyards and planted spaces.",
                        "The idea of stepping became the central design language. Each level responds to the terrain, allowing the architecture to settle into the landscape while creating opportunities for gardens at multiple heights.",
                        "The result is a home where architecture and landscape are not two separate disciplines. They become parts of the same composition.",
                    ],
                },
                {
                    heading: "A Journey Through Gardens, Light and Space",
                    paragraphs: [
                        "At House of Stepped Gardens, moving through the house is also a journey through nature.",
                        "The experience of domestic life is shaped by changing perspectives, shifting levels and moments of visual connection with greenery. Courtyards bring daylight deep into the interiors, while terraces create transitions between private living spaces and the outdoors.",
                        "Every level offers a different relationship with nature. Some spaces open towards expansive views, while others create intimate connections with enclosed gardens.",
                        "The architecture reveals itself gradually. Spaces are discovered rather than simply encountered.",
                        "Here, circulation is not merely about moving from one room to another. It becomes an experience of light, landscape and changing spatial relationships.",
                    ],
                },
                {
                    heading: "The Beauty of the In-Between",
                    paragraphs: [
                        "We often believe that architecture is defined by its enclosed spaces: the living room, the bedroom, the dining area or the staircase.",
                        "But some of the most memorable experiences happen in between these spaces.",
                        "A shaded terrace. A garden overlooking another level. A courtyard that brings the sky into the heart of the house. A quiet corner where architecture gives way to nature.",
                        "These transitional spaces form the emotional character of House of Stepped Gardens.",
                        "They allow the house to breathe, creating a dialogue between the built and the unbuilt, the private and the open, the intimate and the expansive.",
                    ],
                },
                {
                    heading: "Designing With Nature, Not Against It",
                    paragraphs: [
                        "The project also explores how a large residence can respond more sensitively to its environment. Passive orientation, shaded openings, cross-ventilation, rainwater harvesting and solar energy are integrated into the architectural approach.",
                        "The courtyards and planted terraces are not simply aesthetic additions. They contribute to the environmental performance of the residence while enriching the everyday experience of its occupants.",
                        "Sustainability here is approached as an integral part of design thinking, rather than an additional layer applied after the architecture is complete.",
                    ],
                },
                {
                    heading: "Beyond Rooms: Creating Experiences",
                    paragraphs: [
                        "For us, residential architecture should be about much more than organising functions within a built envelope.",
                        "A home should create experiences, evoke emotions and establish a lasting relationship with its surroundings.",
                        "It should offer moments of openness as well as retreat, opportunities for gathering as well as solitude. It should change with the movement of the sun, the seasons and the rhythms of everyday life.",
                        "The stepped configuration of this residence allows every level to become an opportunity for a garden, a terrace or a moment of pause.",
                        "The architecture is therefore experienced not just horizontally, through rooms and corridors, but vertically, through an evolving landscape.",
                    ],
                },
                {
                    heading: "When the Garden Becomes Architecture",
                    paragraphs: [
                        "House of Stepped Gardens represents an important idea in our approach to residential design: nature should not be treated as decoration surrounding a building.",
                        "It should be part of the architecture itself.",
                        "The terraces become gardens. The courtyards become sources of light and air. The circulation becomes a landscape experience. The building gradually dissolves into a series of spaces where the boundaries between indoors and outdoors become less distinct.",
                        "Perhaps the most meaningful measure of a home is not how much space it occupies, but how deeply it connects its inhabitants to the world outside.",
                    ],
                },
            ],
            closing: [
                { type: "quote", text: "At House of Stepped Gardens, we did not set out to design a house beside a garden. We set out to create a landscape that could be lived in." },
            ],
            signoff: {
                name: "Kapil Aggarwal",
                tagline: "Principal Architect, SpacesArchitects@ka",
            },
        },
                {
            id: "time-held-in-detail",
            title: "Golden Haveli: Restoring the Memory of Chandni Chowk",
            image: blogTimeHeldDetail,
            excerpt: "The art of conservation lies not in recreating the past, but in allowing its stories to live on.",
            lead: [
                { type: "sub", text: "The art of conservation lies not in recreating the past, but in allowing its stories to live on." },
                { type: "sub", text: "By Kapil Aggarwal | Principal Architect, SpacesArchitects@ka" },
                { type: "p", text: "In the historic heart of Old Delhi, where narrow streets carry centuries of commerce, culture and everyday life, the havelis of Chandni Chowk stand as reminders of a remarkably layered architectural heritage. Behind their weathered facades and intricately crafted entrances lie stories of families, craftsmanship, changing lifestyles and a city that has continuously reinvented itself." },
                { type: "p", text: "Golden Haveli was an opportunity to engage with this history—not simply as an exercise in architectural restoration, but as an exploration of memory, identity and continuity." },
            ],
            sections: [
                {
                    heading: "Reading the Building Before Restoring It",
                    paragraphs: [
                        "Historic buildings often carry stories that remain invisible beneath layers of alteration, neglect and time. Restoring a haveli requires looking beyond its present physical condition to understand the architectural intelligence embedded within it.",
                        "At Golden Haveli, the first step was to understand the building before deciding what should be repaired, retained, reconstructed or introduced anew. Every surviving element offered a clue. The proportions of an opening, the depth of a courtyard, the relationship between rooms and the craftsmanship of traditional details revealed something about the original architectural language.",
                        "The process was therefore as much about observation and interpretation as it was about construction.",
                    ],
                },
                {
                    heading: "Finding a Balance Between Old and New",
                    paragraphs: [
                        "One of the central challenges of heritage conservation is negotiating the relationship between historical authenticity and contemporary functionality. A historic building cannot simply be preserved as a frozen artefact. It must be capable of accommodating the needs of the present while retaining the qualities that make it meaningful.",
                        "At Golden Haveli, the restoration approach was guided by respect for the existing architecture. Traditional proportions, spatial relationships and architectural details provided the language, while contemporary requirements informed how the building could function again. The intention was not to introduce a new architectural identity, but to allow the existing one to emerge with greater clarity.",
                    ],
                },
                {
                    heading: "Authenticity Lies in Imperfection",
                    paragraphs: [
                        "One of the most important lessons from heritage work is that authenticity is not achieved by making everything look old. Authenticity comes from understanding why a building was made the way it was, recognising the intelligence of its original construction and allowing that logic to inform its restoration.",
                        "The slight irregularities of handmade surfaces, the character of traditional materials and the accumulated imperfections of an ageing building contribute to its identity in ways that standardised construction cannot reproduce.",
                        "Craftsmanship becomes critical here. Traditional techniques, hand-finished details and sensitivity towards existing materials are not decorative gestures; they are essential to preserving the building's architectural integrity.",
                    ],
                },
                {
                    heading: "The Courtyard: The Soul of the Haveli",
                    paragraphs: [
                        "The traditional haveli was never merely a collection of rooms. Its architecture was organised around a deeper understanding of climate, privacy, family life and social interaction.",
                        "The courtyard was central to this idea. It acted as a climatic moderator, a source of natural light and ventilation, and an important social space connecting different parts of the house.",
                        "These spatial relationships are worth preserving because they represent an architectural intelligence developed over generations. In restoring historic buildings, it is important to recognise that sustainability is not always about introducing new technology. Sometimes it is about recovering the passive environmental strategies that traditional architecture already understood.",
                    ],
                },
                {
                    heading: "Craftsmanship as Cultural Continuity",
                    paragraphs: [
                        "The restoration of a heritage structure is also a restoration of the relationship between architecture and craftsmanship. Traditional buildings were shaped by the knowledge of artisans who understood materials through years of practice. Their work was never entirely mechanical. It involved judgement, precision and an intimate understanding of construction.",
                        "Retaining this spirit of craftsmanship is essential. The objective should not be to imitate historical details superficially, but to understand the methods and material behaviour that gave them their character. Each intervention must be considered carefully so that new work complements the old without competing with it.",
                    ],
                },
                {
                    heading: "Conservation as an Act of Continuity",
                    paragraphs: [
                        "Golden Haveli reinforced a belief that has continued to shape my approach towards architecture: conservation is fundamentally an act of continuity.",
                        "We are not simply saving an object from the past. We are preserving a fragment of collective memory and making it relevant to another generation. The greatest challenge is knowing when to intervene and when to step back. Sometimes the most meaningful architectural decision is not to add something new, but to reveal something that was always there.",
                    ],
                },
                {
                    heading: "Giving History a Future",
                    paragraphs: [
                        "Chandni Chowk is constantly evolving. Its streets, buildings and communities reflect the changing rhythms of one of India's most historic urban environments. Within this context, the restoration of a haveli becomes part of a larger conversation about the future of historic cities.",
                        "Heritage should not be understood as an obstacle to progress. It can be an active part of contemporary urban life, provided that development is approached with sensitivity, understanding and respect.",
                        "For us at SpacesArchitects@ka, Golden Haveli represents this philosophy. Architecture has the ability to create new experiences, but it also carries the responsibility of protecting memories. The most meaningful restoration is one in which the past is neither erased nor artificially recreated, but allowed to coexist naturally with the present.",
                    ],
                },
            ],
            closing: [
                { type: "quote", text: "A building's true heritage is not merely what has survived through time, but what it continues to mean to the people who experience it." },
                { type: "sub", text: "Kapil Aggarwal is the Principal Architect at SpacesArchitects@ka, a multidisciplinary architecture and design practice based in India, working across architecture, interiors, landscape and heritage conservation." },
            ],
        },
               {
            id: "architecture-as-art",
            title: "When Buildings Become Canvases: The Art of Turning Architecture into an Experience",
            image: blogArchitectureArt,
            excerpt: "Architecture, at its most meaningful, is not simply about constructing buildings. It is about creating experiences, evoking emotions and giving physical form to ideas that might otherwise remain abstract.",
            lead: [
                { type: "sub", text: "The Art of Turning Architecture into an Experience" },
                { type: "sub", text: "By Kapil Aggarwal | Principal Architect, SpacesArchitects@ka" },
                { type: "p", text: "Architecture, at its most meaningful, is not simply about constructing buildings. It is about creating experiences, evoking emotions and giving physical form to ideas that might otherwise remain abstract. I have always believed that a building should do more than serve its purpose. It should make us pause, look again, feel something and, perhaps, remember it long after we have left." },
                { type: "p", text: "For me, the most fascinating intersection in architecture lies somewhere between art and space. Art has the ability to challenge perception, introduce unexpected moments and create an emotional connection. Architecture, in turn, gives these expressions a physical presence. When the two come together naturally, a building begins to transcend its functional boundaries and becomes something much more personal." },
                { type: "quote", text: "The canvas does not always need to be a painting. Sometimes, it is the building itself." },
            ],
            sections: [
                {
                    heading: "Beyond Decoration: Designing with an Artistic Sensibility",
                    paragraphs: [
                        "Some of the most memorable architectural spaces are those where nothing feels unnecessarily added. Their strength comes from the relationship between elements — the mass and void, solid and transparent, light and shadow, material and form.",
                        "A sculptural staircase should feel as though it belongs to the architecture, not as though it has been inserted into it. An artwork should have a meaningful relationship with its surroundings. A dramatic stone surface should reveal its natural character rather than merely function as an expensive finish.",
                        "This requires thinking about art from the very beginning of the design process. The proportions of a wall, the geometry of a ceiling, the positioning of an opening, the direction of natural light and even the way someone approaches a space can all contribute to an artistic experience.",
                        "The intention is to create a seamless dialogue between architecture, interiors and art — one in which each element strengthens the other.",
                    ],
                },
                {
                    heading: "The Architecture of Emotion",
                    paragraphs: [
                        "I find this approach particularly important in residential architecture. A home is perhaps the most intimate expression of architecture because it is inhabited, experienced and emotionally connected to the lives of the people within it.",
                        "Unlike a gallery or museum, a home is not designed merely to be observed. It is designed to be lived in.",
                        "It must accommodate everyday rituals while offering moments of discovery. It should reflect the personality of its inhabitants without becoming a predictable reproduction of a fashionable aesthetic.",
                        "A carefully framed view, a naturally illuminated corridor, an unexpected double-height volume or a quiet courtyard can sometimes create a stronger emotional impression than an elaborate decorative gesture.",
                        "The real artistry lies in knowing where to make a statement and where to exercise restraint.",
                    ],
                },
                {
                    heading: "Materials as an Artistic Language",
                    paragraphs: [
                        "Materials have their own vocabulary. Stone carries the memory of geological time. Concrete expresses weight, permanence and rawness. Timber introduces warmth and tactility. Metal can bring precision, reflection and a sense of refinement.",
                        "When these materials are composed thoughtfully, they create a visual and sensory language that is unique to each project.",
                        "I am particularly interested in how contrasting materials can coexist without competing — how a raw concrete surface can sit beside warm timber, how a sculptural stone element can become the focal point of an otherwise restrained interior, or how a reflective surface can alter our perception of space.",
                        "The objective is not to accumulate beautiful materials, but to give each one a purpose within the larger architectural composition.",
                    ],
                },
                {
                    heading: "Creating Spaces That Leave an Impression",
                    paragraphs: [
                        "Architecture is often judged through photographs, drawings and published images. Yet its true success lies in what cannot always be captured in a photograph: the experience of moving through it, the quality of daylight, the feeling of scale, the relationship with nature and the emotions it evokes.",
                        "A successful building should offer more than a striking first impression. It should reveal itself gradually, through changing perspectives and unexpected spatial encounters.",
                        "Perhaps that is where architecture and art are closest. Neither should reveal everything at once. Both invite interpretation, curiosity and personal connection.",
                    ],
                },
                {
                    heading: "A Personal Design Philosophy",
                    paragraphs: [
                        "At SpacesArchitects@ka, I see architecture as an opportunity to create something that is both intellectually considered and emotionally engaging.",
                        "I am drawn to spaces where form, material, landscape, light and art are not treated as separate design decisions, but as parts of a single composition.",
                        "The ambition is not to make every building monumental or every space dramatic. It is to discover the distinctive character of each project and express it with clarity, sensitivity and imagination.",
                        "Ultimately, I believe that the most memorable architecture is not necessarily the architecture that speaks the loudest. It is the architecture that makes us feel something.",
                        "Because when architecture begins to think like art, a building stops being merely a structure. It becomes an experience, an expression and, in its own way, a living canvas.",
                    ],
                },
            ],
            signoff: {
                name: "SpacesArchitects@ka",
                tagline: "",
            },
        },
               {
            id: "architecture-in-motion",
            title: "The House of Dancing Screens: When Architecture Comes Alive Through Light and Shadow",
            image: blogArchitectureMotion,
            excerpt: "Exploring the timeless Indian architectural screen through movement, light, privacy and the evolving rhythms of contemporary living.",
            lead: [
                { type: "sub", text: "Exploring the timeless Indian architectural screen through movement, light, privacy and the evolving rhythms of contemporary living." },
            ],
            sections: [
                {
                    heading: "Introduction",
                    paragraphs: [
                        "Screens have long occupied a fascinating place in Indian architecture. From the intricately carved stone jaalis of traditional havelis to the delicate latticework of historic palaces, they have served purposes far beyond decoration. They filter sunlight, encourage ventilation, establish privacy and create a delicate relationship between the interior and the world outside.",
                        "Yet perhaps their most remarkable quality lies in their ability to transform the experience of space without completely enclosing it.",
                        "The House of Dancing Screens, designed by SpacesArchitects@ka, revisits this enduring architectural element through a contemporary lens, exploring how something deeply rooted in tradition can become an instrument for a new way of living.",
                    ],
                },
                {
                    heading: "Architecture That Responds to Time",
                    paragraphs: [
                        "At the heart of the project is the idea that architecture need not remain visually static. While a building may be physically still, its atmosphere is constantly evolving.",
                        "The screens become active participants in this transformation. As daylight travels across the building, patterns of light and shadow shift, overlap and dissolve. Morning light creates one spatial expression, while the changing intensity of the afternoon sun produces another. By evening, the relationship between illumination, transparency and enclosure takes on an entirely different character.",
                        "The architecture is therefore experienced not as a fixed composition, but as a sequence of changing moments. The screens introduce a subtle sense of movement into the building, allowing light to become a material in its own right.",
                    ],
                },
                {
                    heading: "The Art of Concealment and Revelation",
                    paragraphs: [
                        "Indian architecture has historically understood privacy as something more nuanced than simply separating one space from another.",
                        "Traditional jaalis, courtyards and layered thresholds created intermediate conditions between openness and enclosure. They allowed spaces to remain connected while maintaining a sense of separation.",
                        "The House of Dancing Screens reinterprets this principle for contemporary domestic life. Rather than relying on solid walls and rigid divisions, the screens create layers of visual permeability. They allow glimpses, soften boundaries and establish degrees of privacy. Spaces remain connected, yet retain their individual identities.",
                        "This interplay between concealment and revelation creates an architecture that is simultaneously open and intimate.",
                    ],
                },
                {
                    heading: "A House That Adapts to the Rhythms of Family Life",
                    paragraphs: [
                        "A contemporary home is more than a collection of rooms. It is an evolving environment that must accommodate different generations, routines, activities and expectations of privacy.",
                        "Family life is dynamic. Moments of togetherness coexist with the need for solitude, while shared spaces must remain flexible enough to support changing patterns of occupation.",
                        "The screens become an architectural tool for negotiating these relationships. They allow visual connections without demanding complete openness. They create separation without isolation and offer flexibility without compromising the continuity of the overall spatial experience.",
                        "In this sense, the project explores adaptability not through complicated mechanisms, but through the thoughtful manipulation of architectural boundaries.",
                    ],
                },
                {
                    heading: "Reinterpreting Tradition Without Repeating It",
                    paragraphs: [
                        "One of the most interesting challenges in contemporary Indian architecture is finding a meaningful relationship between heritage and modernity.",
                        "Tradition should not necessarily be understood as a visual vocabulary to be replicated. Its deeper value lies in the intelligence of the principles that shaped it.",
                        "The traditional Indian screen was a response to climate, culture, privacy and the quality of light. Its relevance was never merely ornamental.",
                        "By bringing this element into a contemporary architectural language, the House of Dancing Screens seeks to preserve its underlying intelligence while allowing its expression to evolve. The result is not an imitation of historic architecture, but a reinterpretation of an idea that continues to hold relevance.",
                    ],
                },
                {
                    heading: "When Light Becomes an Architectural Material",
                    paragraphs: [
                        "Architecture is often discussed through its physical components: walls, floors, roofs, materials and structure. Yet some of its most memorable qualities are created by elements that cannot be touched.",
                        "Light, shadow, transparency and movement shape how a space is perceived. They influence its mood, reveal its textures and give depth to otherwise ordinary surfaces. In the House of Dancing Screens, these intangible qualities are not incidental effects; they are central to the architectural experience.",
                        "The screens mediate between the intensity of the outside world and the quieter atmosphere of the interior. They soften daylight, create visual rhythm and allow the building to change character over the course of the day.",
                    ],
                },
                {
                    heading: "A Living Dialogue Between Past and Present",
                    paragraphs: [
                        "The House of Dancing Screens is ultimately an exploration of continuity. It draws from an architectural tradition that understood the value of filtered light, breathable boundaries and layered privacy, while responding to the expectations of contemporary family life.",
                        "It suggests that innovation does not always require abandoning familiar ideas. Sometimes, it begins by looking again at what already exists and discovering new possibilities within it.",
                        "Here, the screen is no longer simply a partition or a decorative façade. It becomes an instrument of atmosphere, a mediator of relationships and a device through which the passage of time can be experienced.",
                        "Through the interplay of light, shadow, privacy and movement, the house becomes an architecture that is never quite the same twice—still in form, yet constantly dancing with the changing world around it.",
                    ],
                },
            ],
            signoff: {
                name: "SpacesArchitects@ka",
                tagline: "Architecture • Interiors • Landscape",
            },
        },
          {
    id: "6x18",
    title: "The Slender House: Redefining the Possibilities of a Narrow Plot",
    image: blog6x18,
    excerpt: "When space is limited, imagination must expand. The Slender House explores how thoughtful planning, vertical movement and the careful orchestration of light can transform a narrow plot into a generous and meaningful home.",
    intro: "When space is limited, imagination must expand. The Slender House explores how thoughtful planning, vertical movement and the careful orchestration of light can transform a narrow plot into a generous and meaningful home.",
    sections: [
        {
            heading: "Turning Constraints into Architectural Possibilities",
            paragraphs: [
                "In architecture, limitations are often the starting point of the most compelling ideas. A narrow plot may initially appear restrictive, challenging conventional expectations of space, openness and domestic comfort. Yet it is precisely within these constraints that architecture finds opportunities to become more inventive.",
                "The Slender House emerged from this premise: how does one create a generous, comfortable family home when the available width is severely limited? Rather than resisting the proportions of the site, the design embraces them. The architecture evolves as a considered response to its dimensions, transforming a physical limitation into the defining character of the residence.",
            ],
        },
        {
            heading: "Thinking Vertically, Experiencing Spatially",
            paragraphs: [
                "On a narrow site, conventional horizontal planning can quickly become restrictive. The design therefore explores vertical movement as an essential architectural strategy.",
                "Spaces unfold across different levels, creating a sequence of interconnected experiences rather than a series of isolated rooms. Carefully positioned openings, voids and visual connections allow the house to feel continuous while maintaining the privacy required for family life.",
                "The intention is to create a sense of spatial generosity without relying on physical width. The experience of space is expanded through perception, movement and carefully framed views.",
            ],
        },
        {
            heading: "The Architecture of Light and Openness",
            paragraphs: [
                "Light becomes one of the most important architectural materials in a compact residence.",
                "On a narrow plot, daylight cannot be treated as an afterthought. Its movement through the building must be carefully anticipated and orchestrated. Openings, voids and spatial relationships are therefore conceived as integral elements of the architecture.",
                "These interventions allow natural light to penetrate deeper into the interiors, creating changing patterns of illumination throughout the day. They also establish visual depth, making spaces feel larger and more connected than their actual dimensions might suggest.",
                "The result is a home that feels open without being exposed, intimate without being confined.",
            ],
        },
        {
            heading: "Creating Generosity Within Limited Dimensions",
            paragraphs: [
                "The challenge of designing a narrow house extends beyond fitting rooms into a restricted footprint. It is about creating a genuine sense of comfort, identity and belonging.",
                "Every spatial decision becomes important. Circulation, room proportions, visual connections and the relationship between private and shared spaces must work together as part of a larger architectural composition.",
                "Instead of simply maximising the built-up area, the project seeks to maximise the quality of everyday experiences. It demonstrates that a carefully designed compact home can offer a richness of spatial experience not necessarily associated with larger residences.",
            ],
        },
        {
            heading: "Architecture Beyond the Size of a Plot",
            paragraphs: [
                "The Slender House reinforces a belief that continues to inform our approach to residential architecture: the quality of a home is not determined by the size of its site, but by the intelligence of the ideas that shape it.",
                "A large plot offers possibilities, but a restricted site demands precision, imagination and discipline. It encourages architects to question conventional planning strategies and discover alternative ways of organising space.",
                "For us, the most rewarding aspect of this project lies in how its constraints became its strongest design instrument. The narrow proportions did not diminish the ambition of the house; they gave it clarity, character and a distinctive spatial identity.",
            ],
        },
        {
            heading: "A Different Measure of Spaciousness",
            paragraphs: [
                "Ultimately, The Slender House is an exploration of how architecture can reshape perception. It suggests that spaciousness is not simply a matter of dimensions, but a consequence of light, proportion, movement and connection.",
                "By working with the site rather than against it, the project turns limitation into opportunity—and a narrow plot into a home with a generous architectural experience.",
            ],
        },
    ],
    signoff: {
        name: "SpacesArchitects@ka",
        tagline: "Architecture shaped by context, clarity and imagination.",
    },
},
               {
            id: "the-courtyard",
            title: "The Courtyard: Rediscovering the Lost Core of the Indian Home",
            image: blogCourtyard,
            excerpt: "Reimagining an age-old architectural element as a contemporary response to climate, community and the changing rhythms of domestic life.",
            lead: [
                { type: "sub", text: "Reimagining an age-old architectural element as a contemporary response to climate, community and the changing rhythms of domestic life." },
                { type: "p", text: "There was a time when the courtyard was the heart of the Indian home. More than an architectural feature, it was a living, breathing space around which everyday life unfolded. It welcomed the morning sun, invited the monsoon breeze, held the fragrance of plants and flowers, and brought families together beneath an ever-changing sky." },
                { type: "p", text: "In traditional Indian architecture, the courtyard was never merely an empty space. It was the soul of the house." },
                { type: "p", text: "From the intimate aangan of traditional North Indian homes to the grand central courtyards of havelis in Rajasthan, this architectural element established a profound relationship between nature, built form and human life. It allowed architecture to breathe while creating a natural centre for social interaction." },
            ],
            sections: [
                {
                    heading: "The Disappearing Heart of the Home",
                    paragraphs: [
                        "As cities expanded and lifestyles evolved, the courtyard gradually began to disappear from contemporary residential architecture. Increasing land pressures, compact urban plots and changing aspirations encouraged more enclosed planning. Air-conditioning replaced natural ventilation, windows became increasingly dependent on mechanical systems, and the connection between the indoors and outdoors became more fragmented.",
                        "In the pursuit of efficiency and maximum usable floor area, we gradually surrendered something far more valuable: the experience of living with nature.",
                        "Yet, the courtyard remains remarkably relevant. In fact, its importance may be greater today than ever before.",
                    ],
                },
                {
                    heading: "Beyond an Open Space: An Organising Principle",
                    paragraphs: [
                        "A courtyard is not simply an opening in the roof or a landscaped void within a building. It is an architectural device that gives structure, hierarchy and meaning to the spaces surrounding it.",
                        "Rooms can open towards it, circulation can flow around it, and transitional spaces can borrow light and views from its presence. It creates a natural focal point without demanding visual dominance.",
                        "More importantly, it allows different generations and family members to remain connected while enjoying their individual spaces. One may experience the courtyard from a bedroom, another from a passage, and someone else from a shaded verandah. Each encounter is different, yet all remain part of a shared spatial experience.",
                        "The courtyard quietly becomes the social and emotional centre of the home.",
                    ],
                },
                {
                    heading: "A Dialogue Between Nature and Architecture",
                    paragraphs: [
                        "Perhaps the greatest strength of the courtyard lies in its ability to bring nature into the heart of the built environment.",
                        "Natural daylight penetrates deep into the interiors, while carefully designed openings encourage cross-ventilation and air movement. Vegetation introduces softness, seasonal change and a sense of calm. The movement of sunlight across walls and floors creates an ever-changing architectural composition throughout the day.",
                        "In India's diverse climatic conditions, a thoughtfully designed courtyard can also contribute to passive cooling, daylight optimisation and environmental comfort.",
                        "Its proportions, orientation, planting, water elements and surrounding shaded spaces can be carefully calibrated to respond to the local climate.",
                        "In this sense, the courtyard is not simply an aesthetic gesture. It is an environmentally intelligent architectural strategy.",
                    ],
                },
                {
                    heading: "The Balance Between Privacy and Openness",
                    paragraphs: [
                        "One of the most compelling qualities of the courtyard is its ability to reconcile two seemingly opposing ideas: privacy and openness.",
                        "Unlike an exposed garden or an external terrace, a courtyard can remain protected from the outside world while maintaining a strong visual and physical relationship with nature.",
                        "It creates an inward-looking environment, particularly relevant to contemporary Indian homes where privacy remains an important consideration. The house can open generously towards its own internal landscape without compromising its relationship with the surrounding neighbourhood.",
                        "This controlled openness creates a sense of retreat within the home.",
                    ],
                },
                {
                    heading: "Reinterpreting the Courtyard for Contemporary Living",
                    paragraphs: [
                        "The courtyard need not be a literal reproduction of traditional architecture. Its contemporary interpretation can take many forms: a double-height landscaped void, a sculptural garden, a shaded internal court, a water court or even a carefully positioned light well.",
                        "What matters is not its scale or formal expression, but the role it plays in shaping the experience of the house.",
                        "At SpacesArchitects@ka, we believe that architecture becomes meaningful when it responds to the way people live, feel and connect with their surroundings. The courtyard offers an opportunity to create homes that are not only visually compelling but also environmentally responsive and emotionally enriching.",
                        "It allows architecture to move beyond the boundaries of walls and roofs, creating spaces where light, air, landscape and everyday life become inseparable.",
                    ],
                },
                {
                    heading: "Rediscovering What We Never Should Have Lost",
                    paragraphs: [
                        "As contemporary residential architecture increasingly explores sustainability, wellness and a deeper connection with nature, perhaps the most meaningful ideas are not always new.",
                        "Sometimes, they are rooted in architectural traditions that understood the relationship between climate, culture and human habitation long before these became contemporary design priorities.",
                        "The courtyard is one such idea.",
                        "It is not a nostalgic reference to the past, but a timeless architectural principle with the potential to redefine the future of Indian homes.",
                        "Perhaps it is time to bring the courtyard back—not as an addition to the house, but as its very heart.",
                    ],
                },
            ],
            signoff: {
                name: "SpacesArchitects@ka",
                tagline: "Architecture, Landscape & Design",
            },
        },
    ],
    // ---- Haveli Dharampura project page: hero + full photo gallery ----
    // Gallery block order/shape mirrors the original Canva page section-by-
    // section: alternating full-bleed landscape shots, side-by-side pairs,
    // a "tall portrait beside two stacked shots" split, and one wide
    // panoramic band near the end.
    haveliDharampura: {
        hero: haveliHero,
        pressLogos: [
            { name: "UNESCO", image: haveliLogoUnesco },
            { name: "IIID", image: haveliLogoIIID },
            { name: "NDTV-Grohe", image: haveliLogoNdtv },
            { name: "Divisare", image: featuredInDivisare },
            { name: "Architects and Interiors India", image: featuredInArchitectsAndInteriorsIndia },
            { name: "The Telegraph", image: featuredInTelegraph },
        ],
        gallery: [
            { type: "pair", images: [haveli1, haveli2] },
            { type: "full", image: haveliNew1 },
            { type: "pair", images: [haveli4, haveli5] },
            { type: "full", image: haveli6 },
            { type: "split", large: haveli7, stack: [haveliNew2, haveli9] },
            { type: "full", image: haveli10 },
            { type: "pair", images: [haveli11, haveli12] },
            { type: "wide", image: haveli255 },
            { type: "split", large: haveli13, stack: [haveliNew3, haveli15] },
            { type: "split", large: haveli16, stack: [haveliNew4, haveli18] },
            { type: "split", large: haveli19, stack: [haveli20, haveli21] },
            // Full-width landscape
            {
                type: "wide",
                image: haveli255,
            },

            // Two-column row
            {
                type: "pair",
                images: [haveli77, haveli144],
            },

            // Two-column row
            {
                type: "pair",
                images: [haveli200, haveliLast],
            },

            // Full-width landscape break
            {
                type: "wide",
                image: haveliLast2,
            },

            // Tall image + stack
            {
                type: "split",
                large: haveliLast8,
                stack: [haveliLast22, haveliLast23],
            },
            { type: "full", image: haveli22 },
            { type: "full", image: haveli23 },
            { type: "pair", images: [haveli24, haveli25] },
            { type: "wide", image: haveli26 },
            { type: "full", image: haveli27 },
        ],
    },
    slenderHouse: {
        hero: slenderHero,
        gallery: [
            slender1, slender2, slender3, slender4, slender5, slender6,
            slender7, slender8, slender9, slender10, slender11, slender12,
            slender15, slender16, slender17, slender18, slender19,
        ],
    },
    swatantraResidence: {
        hero: swatantraHero,
        gallery: [
            swatantra1, swatantra2, swatantra3, swatantra4, swatantra5,
            swatantra6, swatantra7, swatantra8, swatantra9, swatantra10,
            swatantra11, swatantra12, swatantra13, swatantra14, swatantra15,
            swatantra16, swatantra17, swatantra18, swatantra19, swatantra20,
            swatantra21, swatantra22, swatantra23, swatantra24, swatantra25,
            swatantra26,
        ],
    },
    apartment88: {
        hero: apartment88Hero,
        gallery: [
            apartment881, apartment882, apartment883, apartment884, apartment885,
            apartment886, apartment887, apartment888, apartment889, apartment8810,
            apartment8811, apartment8812, apartment8813, apartment8814, apartment8815,
        ],
    },
    floatingCourtyard: {
        hero: floatingCourtyardCover,

        gallery: [
            floatingCourtyard1,
            floatingCourtyard2,
            floatingCourtyard3,
            floatingCourtyard4,
            floatingCourtyard5,
            floatingCourtyard6,
            floatingCourtyard7,
            floatingCourtyard8,
            floatingCourtyard9,
            floatingCourtyard10,
        ],
    },
    paletteApartment: {
        hero: paletteApartmentCover,

        gallery: [
            paletteApartment1,
            paletteApartment2,
            paletteApartment3,
            paletteApartment4,
            paletteApartment5,
            paletteApartment6,
            paletteApartment7,
            paletteApartment8,
        ],
    },
    stepMazeHouse: {
        hero: stepMazeCover,

        // Kept in the same order the photos are numbered in the supplied
        // folder; the page.js gallery picks specific indices out of this
        // array to build the pair/full/split layout.
        gallery: [
            stepMaze2,
            stepMaze3,
            stepMaze1,
            stepMazeStaircaseLobby,
            stepMaze4,
            stepMaze5,
              stepMazeAxono,
            
            
          
            stepMazeStaircaseSkylight1,
            stepMazeStaircaseSkylight2,
            stepMazeSectionalDiagram,
            stepMazeDining,
            stepMazeGroundFloorEntrance,
            
            stepMazeConnectingFloors,
            stepMazeInformalSitting,
            stepMazeSideElevationView,
            stepMazeSkylight,
            stepMazeCornerElevation,
            stepMazeExteriorFacade,
        ],
    },
};

export default assets;