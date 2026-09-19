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

// Base URL of the media server that serves everything under /assets.
// Override with NEXT_PUBLIC_ASSET_BASE_URL in .env.local for local/staging us.
const ASSET_BASE_URL = (process.env.NEXT_PUBLIC_ASSET_BASE_URL || "https://assets.spacesarchitects-ka.com").replace(/\/$/, "");

export function assetUrl(relPath) {
    const encoded = relPath.split("/").map(encodeURIComponent).join("/");
    return `${ASSET_BASE_URL}/assets/${encoded}`;
}

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
const indexplusPanel = assetImage("Featured News/panellist-in-indexplus-design-debate.png");
const archelloFeature = assetImage("Featured News/featured-by-archello.png");
const designAsiaFeature = assetImage("Featured News/featured-by-DESIGN-ASIA-MAGAZINE.png");
const blogLegacyRestored = assetImage("blogs/A-Legacy-Restored.png");
const blogPauseInWalledCity = assetImage("blogs/A-Pause-in-the-Walled-City.png");
const blogHouseLandscape = assetImage("blogs/House-Becomes-a-Landscape.png");
const blogTimeHeldDetail = assetImage("blogs/Time-Held-in-Detail.png");
const blogArchitectureArt = assetImage("blogs/Architecture-as-Art.png");
const blogArchitectureMotion = assetImage("blogs/ Architecture-in-Motion.png");
const blog6x18 = assetImage("blogs/6x18.png");
const blogCourtyard = assetImage("blogs/The-Courtyard.png");
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
const galLegendVennerExhibitionMumbai = assetImage("projects/LEGEND VENNER EXHIBITION MUMBAI.jpg");
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
const galFuidicOffice = assetImage("projects/FUIDIC OFFICE.jpg");
const galGuptasResidence = assetImage("projects/GUPTAS RESIDENCE.jpg");
const galHouseAroundATree = assetImage("projects/HOUSE AROUND A TREE.png");
const galJainsResidence = assetImage("projects/JAINS RESIDENCE.jpg");
const galSaativkMarbleShowroom = assetImage("projects/SAATIVK MARBLE SHOWROOM.jpg");
const galTheCanvas = assetImage("projects/THECANVAS.jpg");
const galSethisResidence = assetImage("projects/SETHIS RESIDENCE.png");
const galSobhtiResidence = assetImage("projects/SOBHTI RESIDENCE.jpg");
const galHansgroheShowroom = assetImage("projects/HANSGROHE SHOWROOM.png");
// ---- Continuation of the Canva reference page — Toy Bank Museum
// through The Urban Nest. ----
const galToyBankMuseum = assetImage("projects/TOY BANK MUSEUM.jpg");
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
const haveli255 = assetImage("projects/haveli/255.jpg");
const haveliLogoUnesco = assetImage("projects/haveli/unesco.png");
const haveliLogoNdtv = assetImage("projects/haveli/NDTV.png");
const haveliLogoArchDaily = assetImage("projects/haveli/arch_daily.png");
const haveliLogoArchitizer = assetImage("projects/haveli/architizer.png");
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
const featuredInArchitizer = assetImage("Home Page logos/Architizer_Logo.png");
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
const featuredInArchDaily = assetImage("Home Page logos/ArchDaily.png");
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
    ],

    // ---- Featured News (home-page carousel) ----
    featuredNews: [
        { name: "Dezeen Exclusive Feature", source: "Dezeen", image: dezeenFeature },
        { name: "Architectural Digest India Feature", source: "AD", image: architecturalDigestFeature },
        { name: "Gandhi Darshan Park Inauguration", source: "Press", image: gandhiDarshanInauguration },
        { name: "Heritage Park Inauguration", source: "Press", image: heritageParkInauguration },
        { name: "Featured by Habitus Living titled 'A House That Follows the Sun in Kochi'", source: "Habitus Living", image: habitusLivingFeature },
        { name: "Featured by Rethinking the Future as one of the top architecture firms", source: "Rethinking the Future", image: rethinkingFeature },
        { name: "Golden Haveli Inauguration", source: "Press", image: goldenHaveliInauguration },
        { name: "Featured by Timeless Houses Magazine", source: "Timeless Houses", image: timelessHousesFeature },
        { name: "Featured by Financial Times as the 15 dreamiest homes on earth", source: "Financial Times", image: financialTimesFeature },
        { name: "Panellist in Indexplus design debate: Designing for Density", source: "Indexplus", image: indexplusPanel },
        { name: "Featured by Archello as one of the top 25 architecture firms", source: "Archello", image: archelloFeature },
        { name: "Featured by Design Asia Magazine as top 10 architectural firm", source: "Design Asia", image: designAsiaFeature },
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
        { name: "Architizer", image: featuredInArchitizer },
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
        { name: "ArchDaily", image: featuredInArchDaily },
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
        { file: "INTERSEXT SHOWROOM.png", name: "Intersext Showroom", image: galIntersextShowroom, orientation: "portrait" },
        { file: "LEGEND VENEER EXHIBITION - DELHI.jpg", name: "Legend Veneer Exhibition - Delhi", image: galLegendVeneerExhibition, orientation: "portrait" },
        { file: "ASTRA HEIGHTS.png", name: "Astra Heights", image: galAstraHeights, orientation: "portrait" },
        { file: "GOLDEN HAVELLI.jpg", name: "Golden Haveli", image: galGoldenHaveli, orientation: "landscape" },
        { file: "CUBIX OFFICE.jpg", name: "Cubix Office", image: galCubixOffice, orientation: "portrait" },
        { file: "IMELDA.png", name: "Imelda.Inc", image: galImeldaInc, orientation: "portrait" },
        { file: "SCREEN HOUSE.jpg", name: "Screen House", image: galScreenHouse, orientation: "portrait" },
        { file: "LAHORI GATE MUSEUM.png", name: "Lahori Gate Museum", image: galLahoriGateMuseum, orientation: "portrait" },
        { file: "THE BLUE COURTYARD.jpg", name: "The Blue Courtyard", image: galTheBlueCourtyard, orientation: "portrait" },
        { file: "TILES AND KITCHEN SHOWROOM.png", name: "Tiles and Kitchen Showroom", image: galTilesAndKitchenShowroom, orientation: "portrait" },
        { file: "STUDIO ELEMENT.png", name: "Studio Element", image: galStudioElement, orientation: "portrait" },
        // ---- Continuation of the Canva reference page — Alaya
        // Residence through House of Hues. ----
        { file: "ALAYA RESIDENCE.jpg", name: "Alaya Residence", image: galAlayaResidence, orientation: "portrait" },
        { file: "LEGEND VENNER EXHIBITION - MUMBAI.jpg", name: "Legend Venner Exhibition - Mumbai", image: galLegendVennerExhibitionMumbai, orientation: "portrait" },
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
        { file: "HERITAGE PARK EXTENSION.jpg", name: "Heritage Park Extension", image: galHeritageParkExtension, orientation: "landscape" },
        { file: "FUIDIC OFFICE.jpg", name: "Fuidic Office", image: galFuidicOffice, orientation: "portrait" },
        { file: "GUPTA#U2019S RESIDENCE.jpg", name: "Gupta's Residence", image: galGuptasResidence, orientation: "portrait" },
        { file: "HOUSE AROUND A TREE.png", name: "House Around a Tree", image: galHouseAroundATree, orientation: "landscape" },
        { file: "JAIN#U2019S RESIDENCE.jpg", name: "Jain's Residence", image: galJainsResidence, orientation: "landscape" },
        { file: "SAATIVK MARBLE SHOWROOM.jpg", name: "Saativk Marble Showroom", image: galSaativkMarbleShowroom, orientation: "portrait" },
        { file: "THECANVAS.jpg", name: "TheCanvas", image: galTheCanvas, orientation: "landscape" },
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
        { file: "GURDEEP JI KA GHAR.png", name: "Gurdeep ji Ka Ghar", image: galGurdeepJiKaGhar, orientation: "landscape" },
        { file: "RASA FARMHOUSE.jpg", name: "Rasa Farmhouse", image: galRasaFarmhouse, orientation: "landscape" },
        { file: "MARBLE CITY EXHIBITION STALL.jpg", name: "Marble City Exhibition Stall", image: galMarbleCityExhibitionStall, orientation: "portrait" },
        { file: "THE URBAN NEST.jpg", name: "The Urban Nest", image: galTheUrbanNest, orientation: "portrait" },
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
            title: "Six Years, One Haveli: The Restoration of Haveli Dharampura",
            image: blogLegacyRestored,
            excerpt: "Restoring a historic haveli is never simply a matter of repairing walls. It is an exercise in understanding memory, craftsmanship and time.",
            paragraphs: [
                "Restoring a historic haveli is never simply a matter of repairing walls. It is an exercise in understanding memory, craftsmanship and the way a building has changed through generations.",
                "Haveli Dharampura presented a particularly compelling challenge. The building carried the character of Old Delhi, but years of neglect had weakened many of its elements. The objective was not to create a new building that merely looked historic. It was to recover the architectural spirit of the existing haveli while allowing it to live again.",
                "The restoration process therefore began with observation. Proportions, courtyards, openings, ornament, materials and details had to be understood before decisions could be made. Wherever possible, the existing fabric became the starting point for intervention.",
                "Traditional craftsmanship played a central role. The project demonstrated that conservation is not only about preserving physical material; it is also about preserving knowledge—the ability to work with lime, stone, wood, traditional details and hand-crafted surfaces.",
                "The most rewarding aspect of such a project is the moment when a neglected structure begins to recover its presence. Architecture becomes a bridge between what a place was and what it can become.",
                "For me, Haveli Dharampura reinforced a simple belief: restoration should respect the past without turning architecture into a museum. A historic building deserves a future as much as it deserves a history.",
            ],
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
            title: "House of Stepped Gardens: When a House Becomes a Landscape",
            image: blogHouseLandscape,
            excerpt: "The starting point for the House of Stepped Gardens was a simple question: can a house be designed as an extension of the garden rather than as an object?",
            paragraphs: [
                "The starting point for the House of Stepped Gardens was a simple question: can a house be designed as an extension of the garden rather than as an object placed beside it?",
                "The idea of stepping allowed the architecture and landscape to become inseparable. Instead of treating the garden as leftover space around a building, the house was conceived through a sequence of terraces, levels and planted spaces.",
                "This creates a different experience of domestic life. Moving through the house is also a movement through landscape. Views change, light enters differently at different levels, and private and social spaces acquire their own relationship with greenery.",
                "The stepped form also gives the residence a vertical rhythm. Each level becomes an opportunity for a garden, a terrace or a moment of pause.",
                "For me, the project represents a broader approach to residential architecture: a home should not be defined only by rooms and functions. It should create a sequence of experiences.",
                "The garden is therefore not decoration. It is architecture.",
                "House of Stepped Gardens is an attempt to make landscape part of everyday living—to allow residents to experience nature not as something seen from a window, but as something continuously encountered as they move through their home.",
            ],
        },
        {
            id: "time-held-in-detail",
            title: "Golden Haveli: Restoring the Memory of Chandni Chowk",
            image: blogTimeHeldDetail,
            excerpt: "Historic buildings often carry stories that are invisible beneath layers of alteration, neglect and time. Restoring a haveli means trying to uncover those stories.",
            paragraphs: [
                "Historic buildings often carry stories that are invisible beneath layers of alteration, neglect and time. Restoring a haveli means trying to uncover those stories without freezing the building in the past.",
                "Golden Haveli became an exercise in this balance. Its architectural character needed to be understood before deciding what should be repaired, retained, reconstructed or introduced anew.",
                "The restoration process was therefore guided by respect for the existing building. Traditional proportions and details provided the language, while contemporary requirements determined how the building could function again.",
                "One of the most important lessons from heritage work is that authenticity is not achieved by making everything look old. Authenticity comes from understanding why a building was made the way it was and allowing that logic to inform its restoration.",
                "Craftsmanship becomes critical here. Hand-finished details, traditional materials and the accumulated imperfections of an old building contribute to its identity in ways that cannot be reproduced by standardised construction.",
                "Golden Haveli reinforced my belief that conservation is an act of continuity. We are not simply saving an object from the past. We are giving a piece of architectural memory another chapter.",
                "That is ultimately what makes restoration meaningful: the old building is allowed to remain itself while becoming relevant to a new generation.",
            ],
        },
        {
            id: "architecture-as-art",
            title: "Architecture as Art: When Buildings Become Canvases",
            image: blogArchitectureArt,
            excerpt: "I have always believed that architecture should do more than solve a functional problem. A successful building should create an emotional response.",
            paragraphs: [
                "I have always believed that architecture should do more than solve a functional problem. A successful building should create an emotional response.",
                "The relationship between architecture and art is therefore important to my practice. Art can introduce surprise, memory, colour, texture and emotion; architecture provides the spatial framework in which those experiences unfold.",
                "This does not mean that every building needs to contain an artwork. It means that architecture itself can be approached with the sensitivity of an artist.",
                "A wall can become a canvas. A staircase can become a sculptural movement. Light can become a material. A courtyard can become a composition.",
                "The strongest projects often emerge when these elements are not added at the end, but considered from the beginning.",
                "For me, this is particularly relevant in residential architecture. A home is deeply personal. It should reflect the people who inhabit it rather than simply reproduce a fashionable style.",
                "Architecture becomes more memorable when it has a point of view.",
                "The goal is therefore not to decorate a building, but to create spaces where art, material, light, landscape and human life reinforce one another.",
            ],
        },
        {
            id: "architecture-in-motion",
            title: "The House of Dancing Screens: Architecture in Motion",
            image: blogArchitectureMotion,
            excerpt: "Screens have always been an important part of Indian architecture. They filter light, create privacy and produce changing relationships between inside and outside.",
            paragraphs: [
                "Screens have always been an important part of Indian architecture. They filter light, create privacy and produce changing relationships between inside and outside.",
                "The House of Dancing Screens explores these ideas through a contemporary lens.",
                "The screen is not treated as a fixed decorative surface. It becomes an active architectural element. As daylight changes, shadows move across surfaces and the character of the spaces changes with them.",
                "This creates a sense of movement even though the building itself remains still.",
                "The project also explores the relationship between family life and adaptability. A house needs to accommodate different ages, routines and degrees of privacy. Screens can help create these layers without closing spaces completely.",
                "What interests me most about this approach is that it combines a traditional architectural idea with a contemporary way of living.",
                "Architecture does not need to choose between heritage and modernity. The more interesting question is how traditional principles can be reinterpreted for present-day life.",
                "In the House of Dancing Screens, light, shadow, privacy and movement become part of the architecture itself.",
            ],
        },
        {
            id: "6x18",
            title: "The Slender House: Making a Home on a Narrow Plot",
            image: blog6x18,
            excerpt: "A narrow site can appear to be a limitation, but constraints often produce some of the most interesting architectural ideas.",
            paragraphs: [
                "A narrow site can appear to be a limitation, but constraints often produce some of the most interesting architectural ideas.",
                "The Slender House began with the challenge of creating a generous family home within a very restricted width. The response was not to fight the proportions of the site, but to work with them.",
                "Vertical movement, carefully positioned openings and controlled views became important tools. The house had to feel connected without becoming visually exposed, and compact without feeling compressed.",
                "Light was equally important. On a narrow site, the architect has to think carefully about how daylight travels through the building. Openings, voids and spatial relationships can make a significant difference to the perceived scale of a home.",
                "The project reinforced an idea that often guides my residential work: good architecture is not dependent on the size of a plot.",
                "A well-resolved small or narrow site can produce a stronger architectural experience than a large site where every problem is solved simply by adding space.",
                "Constraints force decisions. And decisive architecture is often more memorable architecture.",
            ],
        },
        {
            id: "the-courtyard",
            title: "The Courtyard: Rediscovering the Lost Core of the Indian Home",
            image: blogCourtyard,
            excerpt: "The courtyard was once one of the defining elements of the Indian house. It brought light, air, vegetation and family life into the centre of the home.",
            paragraphs: [
                "The courtyard was once one of the defining elements of the Indian house. It brought light, air, vegetation and family life into the centre of the home.",
                "As urban living changed, the courtyard gradually disappeared from many contemporary houses. In its place came more enclosed rooms, mechanical conditioning and increasingly externalised notions of nature.",
                "Yet the courtyard remains remarkably relevant.",
                "It is not simply an open-to-sky space. It is a device for organising relationships. Rooms can face it, circulation can pass around it, family members can occupy it at different times, and the changing sky can become part of everyday life.",
                "The courtyard also creates a subtle connection between privacy and openness. It can be protected from the outside while remaining visually and physically connected to the interior.",
                "In contemporary Indian architecture, I believe the courtyard deserves to be reconsidered—not as a nostalgic reference, but as a climate-responsive and socially meaningful spatial idea.",
                "Many of the principles that made the traditional courtyard successful remain relevant today: shade, ventilation, filtered light, vegetation, privacy and community.",
                "Perhaps the courtyard is not a lost idea after all. Perhaps it is an idea waiting to be rediscovered.",
            ],
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
            { name: "Architizer", image: haveliLogoArchitizer },
            { name: "IIID", image: haveliLogoIIID },
            { name: "ArchDaily", image: haveliLogoArchDaily },
            { name: "NDTV-Grohe", image: haveliLogoNdtv },
        ],
        gallery: [
            { type: "pair", images: [haveli1, haveli2] },
            { type: "full", image: haveli3 },
            { type: "pair", images: [haveli4, haveli5] },
            { type: "full", image: haveli6 },
            { type: "split", large: haveli7, stack: [haveli8, haveli9] },
            { type: "full", image: haveli10 },
            { type: "pair", images: [haveli11, haveli12] },
            { type: "wide", image: haveli255 },
            { type: "split", large: haveli13, stack: [haveli14, haveli15] },
            { type: "split", large: haveli16, stack: [haveli17, haveli18] },
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
            slender15, slender16, slender17, slender18,
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