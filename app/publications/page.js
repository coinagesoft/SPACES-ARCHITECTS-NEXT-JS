import Image from "next/image";
import PublicationsChrome from "@/components/PublicationsChrome";
import Footer from "@/components/Footer";
import MagazineGallery from "@/components/MagazineGallery";
import BookGallery from "@/components/BookGallery";
import chromeStyles from "@/components/PublicationsChrome.module.css";
import { assetImage } from "@/assets";
import styles from "../blog/page.module.css";

export const metadata = { title: "Publications — Spaces Architects@ka" };

// ============================================================
//  PUBLICATIONS — built from the "Web Portals" sheet
//  (every row that is NOT yellow / blue / green — those rows
//   are on the News + Events page)
//
//  One image constant per title. Every card of the same project
//  shares that project's image. To swap an image, change the path
//  on that one line.
// ============================================================

// ---- Images ----
const architectsOffice = assetImage("projects/ARCHITECTS-OFFICE/3_4/1.webp");
const variousProjects = assetImage("About_hero.jpg");
const sachdevaFarmhouse = assetImage("projects/SACHDEVA FARMHOUSE.png");
const cubixOffice = assetImage("projects/CUBIX-OFFICE/3_4/1.webp");
const adharshilaVatikaKindergarten = assetImage("projects/ADHARSHILA VATIKA KINDERGARTEN.png");
const screenHouse = assetImage("projects/SCREEN-HOUSE/3_4/1.webp");
const jHouse = assetImage("projects/J-HOUSE/cover/COVER.webp");
const houseOfDancingScreens = assetImage("projects/HOUSE-OF-DANCING-SCREENS/cover/COVER.webp");
const stepMazeHouse = assetImage("projects/STEP-MAZE/cover/COVER.webp");
const slenderHouse = assetImage("projects/Slender-House/photographs/1. Building elevation.webp");
const libraryHouse = assetImage("projects/LIBRARY-HOUSE/cover/COVER.webp");
const artHouse = assetImage("projects/ART_HOUSE/3_4/1.webp");
const swatantraResidence = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (2).jpg");
const ashrayaResidence = assetImage("projects/ASHRAYA-RESIDENCE/3_4/1.webp");
const stonexIndia = assetImage("projects/STONEX-INDIA-BUILDING/cover/Cover Image.webp");
const goldenHaveli = assetImage("projects/GOLDEN-HAVELL/3_4/new/1.webp");
const heritagePark = assetImage("projects/HERITAGE-PARK/photographs/edited 1.webp");
const haveliDharampura = assetImage("projects/haveli/haveli_1.jpg");
const houseOfSteppedGardens = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/cover/hero image.webp");
const timelessHouses = assetImage("Featured News/featured-by-timeless-houses-magazine .png");
const exhibitionSpaceAtAcetech = assetImage("projects/LEGEND-VENNER-EXHIBITION-MUMBAI/3_4/1.webp");
const krishasResidence = assetImage("projects/KRISHAS-RESIDENCE/3_4/1.webp");
const imeldaInc = assetImage("projects/IMELDA-INC/3_4/1.webp");
const intersectTileShowroom = assetImage("projects/INTERSEXT-SHOWROOM/cover/COVER IMAGE.webp");
const articleAboutKapilSir = assetImage("Kapil.jpg");
const sobhtiResidence = assetImage("projects/SOBHTI RESIDENCE.jpg");
const top10ArchitectureFirms = assetImage("Featured News/featured-by-DESIGN-ASIA-MAGAZINE.png");
const bestArchitecturalFirmInDelhi = assetImage("Featured News/Featured-by-Rethinking.png");
const top100MindsBehindTheBestWorkplaces = articleAboutKapilSir;
const embracingTheIntangibles = articleAboutKapilSir;
const apartment88 = assetImage("projects/apartment88/3_4/1.webp");

// ---- Cards (same order as the sheet) ----
// title  = Project column
// source = Web Portal column
// href   = Link column (opens in a new tab)
const publicationCards = [
  { title: "ARCHITECT'S OFFICE", source: "Archute", image: architectsOffice, href: "http://www.archute.com/2015/03/23/architects-office-spaces-architectska-convert-a-basement-space-in-new-dehli-into-a-one-of-a-kind-office/" },
  { title: "Various Projects", source: "Archello", image: variousProjects, href: "http://www.archello.com/en/company/spaces-architects-ka" },
  { title: "Sachdeva Farmhouse", source: "Archdaily", image: sachdevaFarmhouse, href: "http://www.archdaily.com/589310/sachdeva-farmhouse-spaces-architects-at-ka/" },
  { title: "ARCHITECT'S OFFICE", source: "Archdaily", image: architectsOffice, href: "http://www.archdaily.com/589264/architect-s-office-spaces-architects-at-ka/" },
  { title: "ARCHITECT'S OFFICE", source: "Architizer", image: architectsOffice, href: "http://architizer.com/projects/spaces-architectska-office/" },
  { title: "ARCHITECT'S OFFICE", source: "Arch20", image: architectsOffice, href: "http://www.arch2o.com/architect-s-studio-kapil-aggarwal-spaces-architects/" },
  { title: "Cubix Office", source: "E-Architect", image: cubixOffice, href: "http://www.e-architect.co.uk/india/cubix-office-interior-in-new-delhi" },
  { title: "Sachdeva Farmhouse", source: "E-Architect", image: sachdevaFarmhouse, href: "http://www.e-architect.co.uk/india/jaunapur-farmhouse-in-new-delhi" },
  { title: "ARCHITECT'S OFFICE", source: "Contemporist", image: architectsOffice, href: "http://www.contemporist.com/2014/05/20/architects-studio-by-spaces-architects/" },
  { title: "ARCHITECT'S OFFICE", source: "How Architect Works (HAW) Magazine", image: architectsOffice, href: "http://www.howarchitectworks.com/spaces-architectska-studio-new-delhi/" },
  { title: "Adharshila Vatika Kindergarten", source: "BBC", image: adharshilaVatikaKindergarten, href: "http://www.bbc.com/news/business-14975270" },
  { title: "Screen House", source: "BUILDOFY", image: screenHouse, href: "https://www.buildofy.com/projects/screen-house-new-delhi-spaces-architects-ka" },
  { title: "J House", source: "BUILDOFY", image: jHouse, href: "https://www.buildofy.com/projects/j-house-new-delhi-spaces-ka" },
  { title: "The House of Dancing Screens", source: "BUILDOFY", image: houseOfDancingScreens, href: "https://www.buildofy.com/projects/the-house-of-dancing-screens-ambala-haryana" },
  { title: "Step Maze House", source: "BUILDOFY", image: stepMazeHouse, href: "https://www.buildofy.com/projects/step-maze-house-model-town-new-delhi" },
  { title: "Slender House", source: "BUILDOFY", image: slenderHouse, href: "https://www.buildofy.com/projects/slender-house-new-delhi" },
  { title: "Library House", source: "BUILDOFY", image: libraryHouse, href: "https://www.buildofy.com/projects/library-house-gurugram-haryana" },
  { title: "Slender House", source: "archdaily", image: slenderHouse, href: "https://www.archdaily.com/1014110/6-x-18-slender-house-spaces-architects-at-ka" },
  { title: "The Art House", source: "archdaily", image: artHouse, href: "https://www.archdaily.com/1092365/the-art-house-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "The House of Dancing Screens", source: "archdaily", image: houseOfDancingScreens, href: "https://www.archdaily.com/1020102/the-house-of-dancing-screens-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "Swatantra Residence", source: "archdaily", image: swatantraResidence, href: "https://www.archdaily.com/997398/swantantra-residence-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "The Screen House", source: "archdaily", image: screenHouse, href: "https://www.archdaily.com/935817/the-screen-house-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "J House", source: "archdaily", image: jHouse, href: "https://www.archdaily.com/892565/j-house-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "Sachdeva Farmhouse", source: "archdaily", image: sachdevaFarmhouse, href: "https://www.archdaily.com/589310/sachdeva-farmhouse-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "Architect’s Office", source: "archdaily", image: architectsOffice, href: "https://www.archdaily.com/589264/architect-s-office-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  { title: "Slender House", source: "Amazing Architecture", image: slenderHouse, href: "https://amazingarchitecture.com/houses/6-x-18-slender-house-new-delhi-india-by-spaces-architects-at-ka" },
  { title: "Slender House", source: "World Architecture Community", image: slenderHouse, href: "https://worldarchitecture.org/architecture-projects/pzhcn/6x18-slender-house-project-pages.html" },
  { title: "Slender House", source: "archipanic", image: slenderHouse, href: "https://www.archipanic.com/portfolio/slender-house/" },
  { title: "Slender House", source: "archinect", image: slenderHouse, href: "https://archinect.com/firms/project/150422366/6-x18-slender-house/150422367" },
  { title: "Slender House", source: "thearchitectsdiary", image: slenderHouse, href: "https://thearchitectsdiary.com/tag/6-x-18-slender-house/" },
  { title: "Slender House", source: "re-thinkingthefuture", image: slenderHouse, href: "https://www.re-thinkingthefuture.com/residential/10248-6-x-18-slender-house-by-spaces-architectska/" },
  { title: "Slender House", source: "mossandfog", image: slenderHouse, href: "https://mossandfog.com/elegant-slender-house-in-delhi-is-modern-and-playful/" },
  { title: "Slender House", source: "ideal.house", image: slenderHouse, href: "https://ideal.house/community/news/6-x-18-slender-house-spaces-architectska" },
  { title: "Swatantra Residence", source: "archello", image: swatantraResidence, href: "https://archello.com/news/swatantra-residence-by-spaces-architectska-boasts-an-architectural-composition-of-concrete-and-art" },
  { title: "Swatantra Residence", source: "plainmagazine", image: swatantraResidence, href: "https://plainmagazine.com/spaces-architects-ka-swatantra-residence-india/" },
  { title: "Swatantra Residence", source: "divisare", image: swatantraResidence, href: "https://divisare.com/authors/2144789333-spaces-architects-ka" },
  { title: "Swatantra Residence", source: "Amazing Architecture", image: swatantraResidence, href: "https://amazingarchitecture.com/houses/swatantra-residence-in-kamla-nagar-agra-india-by-spaces-architects-at-ka" },
  { title: "Swatantra Residence", source: "magzter", image: swatantraResidence, href: "https://www.magzter.com/stories/architecture/Design-Essentia-Magazine/SWATANTRA-RESIDENCE?srsltid=AfmBOooejLo9Lkv110mDef7EbxxAvtkHORg44ELlpQG6EAPMBbM84kOD" },
  { title: "The House of Dancing Screens", source: "Amazing Architecture", image: houseOfDancingScreens, href: "https://amazingarchitecture.com/houses/the-house-of-dancing-screens-model-town-india-by-spaces-architects-at-ka" },
  { title: "The House of Dancing Screens", source: "thearchitectsdiary", image: houseOfDancingScreens, href: "https://thearchitectsdiary.com/the-facade-of-this-house-are-elements-that-redefine-the-space-spaces-architects-ka/" },
  { title: "The House of Dancing Screens", source: "interiorexteriorgroup", image: houseOfDancingScreens, href: "https://www.interiorexteriorgroup.com/2026/04/the-house-of-dancing-screens.html" },
  { title: "The House of Dancing Screens", source: "archello", image: houseOfDancingScreens, href: "https://archello.com/project/the-house-of-dancing-screens" },
  { title: "Step Maze House", source: "Amazing Architecture", image: stepMazeHouse, href: "https://amazingarchitecture.com/houses/the-step-maze-house-new-delhi-india-by-spaces-architects-at-ka" },
  { title: "The Library House", source: "archello", image: libraryHouse, href: "https://archello.com/project/the-library-house" },
  { title: "6 x 18 Slender House", source: "archello", image: slenderHouse, href: "https://archello.com/project/6-x-18-slender-house-4" },
  { title: "Ashraya Residence", source: "archello", image: ashrayaResidence, href: "https://archello.com/project/ashraya-residence-2" },
  { title: "Stonex India", source: "archello", image: stonexIndia, href: "https://archello.com/project/stonex-india" },
  { title: "Golden Haveli", source: "archello", image: goldenHaveli, href: "https://archello.com/project/golden-haveli" },
  { title: "THE HERITAGE PARK", source: "archello", image: heritagePark, href: "https://archello.com/project/the-heritage-park" },
  { title: "Haveli Dharampura", source: "divisare", image: haveliDharampura, href: "https://divisare.com/projects/323239-spaces-architects-ka-bharat-aggarwal-haveli-dharampura" },
  { title: "Golden Haveli", source: "re-thinkingthefuture", image: goldenHaveli, href: "https://www.re-thinkingthefuture.com/residential/12333-golden-haveli-by-spacesarchitectka/" },
  { title: "Haveli Dharampura", source: "thedesignstory", image: haveliDharampura, href: "https://www.thedesignstory.com/blog/people/embracing-the-intangibles-in-architecture-with-spaces-architectska-storyofdesign" },
  { title: "heritage park", source: "thedesignstory", image: heritagePark, href: "https://www.thedesignstory.com/blog/people/embracing-the-intangibles-in-architecture-with-spaces-architectska-storyofdesign" },
  { title: "Haveli Dharampura", source: "inhabitat", image: haveliDharampura, href: "https://inhabitat.com/beautifully-restored-135-year-old-building-revives-one-of-delhis-oldest-markets/haveli-dharampura-by-spaces-architectska-4/" },
  { title: "Golden Haveli", source: "architectandinteriorsindia", image: goldenHaveli, href: "https://www.architectandinteriorsindia.com/news/take-in-chandni-chowk-views-from-the-golden-haveli-with-eam-s-jaishankar" },
  { title: "Golden Haveli", source: "d5mag", image: goldenHaveli, href: "https://d5mag.com/experience-old-delhis-golden-haveli-a-regal-retreat-that-hosted-gandhi/" },
  { title: "House of Stepped Gardens", source: "habitusliving", image: houseOfSteppedGardens, href: "https://www.habitusliving.com/projects/house-of-stepped-gardens-spaces-architects" },
  { title: "House of Stepped Gardens", source: "architecturaldigest", image: houseOfSteppedGardens, href: "https://www.architecturaldigest.in/story/this-34500-square-foot-kochi-home-is-full-of-stepped-gardens-terraces-and-courtyards-spaces-architects-ka/" },
  { title: "Slender House", source: "VOLUME ZERO", image: slenderHouse, href: "https://volzero.com/articles/view/6-x-18-slender-house-by-spaces-architectska" },
  { title: "The Art House", source: "archdaily", image: artHouse, href: "https://www.archdaily.com/1092365/the-art-house-spaces-architects-at-ka" },
  { title: "The Art House", source: "dezeen", image: artHouse, href: "https://www.dezeen.com/2026/05/29/art-house-new-delhi-residence-intense-customisation/" },
  { title: "Swatantra Residence", source: "VOLUME ZERO", image: swatantraResidence, href: "https://volzero.com/articles/view/swatantra-residence-by-spaces-architectska" },
  { title: "Step Maze House", source: "societyinteriorsdesign", image: stepMazeHouse, href: "https://societyinteriorsdesign.com/sm-house-by-spacesarchitectska-reimagines-a-challenging-trapezium-shaped-corner-plot-as-a-light-filled-family-sanctuary/" },
  { title: "Slender House", source: "archello", image: slenderHouse, href: "https://archello.com/story/137016/attachments/drawings/6" },
  { title: "Slender House", source: "archinect", image: slenderHouse, href: "https://archinect.com/firms/project/150422366/6-x18-slender-house/150422367" },
  { title: "Step Maze House", source: "archilovers", image: stepMazeHouse, href: "https://www.archilovers.com/projects/346757/sm-house.html" },
  { title: "Slender House", source: "BUILDOFY", image: slenderHouse, href: "https://www.buildofy.com/projects/slender-house-new-delhi" },
  { title: "The Screen House", source: "homeadore", image: screenHouse, href: "https://homeadore.com/2020/04/23/the-screen-house-by-spaces-architects/" },
  { title: "The House of Dancing Screens", source: "Amazing Architecture", image: houseOfDancingScreens, href: "https://youtu.be/A6N7UdAfJ_Y?si=eA7KizSAe18TooQz" },
  { title: "Screen House", source: "BUILDOFY", image: screenHouse, href: "https://youtu.be/pBamZ2He6jg?si=pprgzJJByBclYk26" },
  { title: "Swatantra Residence", source: "ArchitectureMind", image: swatantraResidence, href: "https://youtu.be/b9urP5vcYuM?si=UePGXv1KXJlWls7x" },
  { title: "The House of Dancing Screens", source: "TERRA DESIGN", image: houseOfDancingScreens, href: "https://youtu.be/D3AAvfFWXuY?si=Bo2kz8uoRU3Zyzuy" },
  { title: "The House of Dancing Screens", source: "BUILDOFY", image: houseOfDancingScreens, href: "https://youtu.be/k2KdRRUAmtw?si=C1NLuNXrq1YH7uPp" },
  { title: "TIMELESS HOUSES", source: "STIRWORLD", image: timelessHouses, href: "https://www.stirworld.com/think-books-and-movies-book-release-timeless-houses-promoting-diversity-in-architecture" },
  { title: "ARCHITECT'S OFFICE", source: "CONTEMPORIST", image: architectsOffice, href: "https://www.contemporist.com/architects-studio-by-spaces-architects/" },
  { title: "TIMELESS HOUSES", source: "ARCHITECTURE LIVE", image: timelessHouses, href: "https://architecture.live/book-timeless-houses-kapil-aggarwal-lalwani-books-international/" },
  { title: "Haveli Dharampura", source: "STYLE MAGAZINE", image: haveliDharampura, href: "https://www.scmp.com/magazines/style/travel-food/article/3010133/welcome-havelie-dharampura-rare-oasis-amid-chaos-old" },
  { title: "Haveli Dharampura", source: "Inhabitat", image: haveliDharampura, href: "https://inhabitat.com/beautifully-restored-135-year-old-building-revives-one-of-delhis-oldest-markets/" },
  { title: "Adharshila Vatika Kindergarten", source: "OECD 50", image: adharshilaVatikaKindergarten, href: "http://www.architectureofearlychildhood.com/2011/10/oecd-provides-plenty-of-resources-and.html" },
  { title: "Golden Haveli", source: "The Hotelier India", image: goldenHaveli, href: "https://www.hotelierindia.com/design/an-ode-to-the-rich-culture-of-chandni-chowk" },
  { title: "Haveli Dharampura", source: "The Tiles of India", image: haveliDharampura, href: "https://www.thetilesofindia.com/global-architects/a-restoration-project-by-architect-kapil-aggarwal/" },
  { title: "Screen House", source: "Homeadore", image: screenHouse, href: "https://homeadore.com/2020/04/23/the-screen-house-by-spaces-architects/" },
  { title: "Screen House", source: "Tumblr", image: screenHouse, href: "https://amazingarchitecturewebsite.tumblr.com/post/613482954478452736/the-screen-house-in-new-delhi-india-designed-by" },
  { title: "ARCHITECT'S OFFICE", source: "Asian Paints", image: architectsOffice, href: "https://www.beautifulhomes.asianpaints.com/magazine/spaces/studios/in-the-studio-of-spaces-architects-ka.html" },
  { title: "Haveli Dharampura", source: "Divisare", image: haveliDharampura, href: "https://divisare.com/projects/323239-spaces-architects-ka-bharat-aggarwal-haveli-dharampura" },
  { title: "Exhibition Space at acetech", source: "ARCHITECTURE LIVE", image: exhibitionSpaceAtAcetech, href: "https://architecture.live/author/spaces-architects/" },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  { title: "KRISHA'S RESIDENCE", source: "", image: krishasResidence, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  { title: "J House", source: "", image: jHouse, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  { title: "Imelda.inc", source: "", image: imeldaInc, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  { title: "Intersect tile showroom", source: "", image: intersectTileShowroom, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  { title: "Book-Timeless Houses", source: "", image: timelessHouses, href: null },
  { title: "Article about Kapil Sir", source: "AsiaBizToday", image: articleAboutKapilSir, href: "https://www.asiabiztoday.com/tag/spaces-architectska/" },
  { title: "Golden Haveli", source: "Architect and Interiors India", image: goldenHaveli, href: "https://www.architectandinteriorsindia.com/projects/step-back-in-time-to-relive-golden-havelis-splendor-in-chandni-chowk" },
  { title: "Imelda.inc", source: "The Architect's diary", image: imeldaInc, href: "https://thearchitectsdiary.com/contemporary-office-aura-wholeness-expresses-spaces-architectska/" },
  { title: "ARCHITECT'S OFFICE", source: "Arch20", image: architectsOffice, href: "https://www.arch2o.com/architect-s-studio-kapil-aggarwal-spaces-architects/" },
  { title: "Sobhti Residence", source: "Houzz", image: sobhtiResidence, href: "https://www.houzz.in/magazine/delhi-houzz-this-multigenerational-bungalow-is-a-zen-urban-oasis-stsetivw-vs~118475307" },
  { title: "Exhibition Space at acetech", source: "The Architect's diary", image: exhibitionSpaceAtAcetech, href: "https://thearchitectsdiary.com/legend-ply-veneers-exhibition-space-acetech-designed-by-spaces-architectska/" },
  { title: "Top 10 Architecture Firms", source: "Design Asia Magazine", image: top10ArchitectureFirms, href: "https://designasiamagazine.com/top-10-architecture-firms-in-delhi/" },
  { title: "Best Architectural firm in Delhi", source: "re-thinkingthefuture", image: bestArchitecturalFirmInDelhi, href: "https://www.re-thinkingthefuture.com/article/best-architects-in-delhi-ncr/" },
  { title: "Top 100- Minds behind the best workplaces in India 2018", source: "Commercial design India", image: top100MindsBehindTheBestWorkplaces, href: "https://www.commercialdesignindia.com/lists/2965-kapil-aggarwal" },
  { title: "Embracing the intangibles in Architecture", source: "The Design Story", image: embracingTheIntangibles, href: "https://www.thedesignstory.com/blog/people/embracing-the-intangibles-in-architecture-with-spaces-architectska-storyofdesign" },
  { title: "J House", source: "ARCHITECTURE LIVE", image: jHouse, href: "https://architecture.live/j-house-new-delhi-by-spaces-kapil-aggarwal/" },
  { title: "Article about Kapil Sir", source: "WFM Media", image: articleAboutKapilSir, href: "https://wfmmedia.com/writer/ar-kapil-aggarwal/" },
  { title: "Swatantra Residence", source: "Divisare", image: swatantraResidence, href: "https://divisare.com/authors/2144789333-spaces-architects-ka" },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  { title: "Haveli Dharampura", source: "", image: haveliDharampura, href: null },
  { title: "SM House", source: "Archilovers", image: stepMazeHouse, href: "https://www.archilovers.com/projects/346757/sm-house.html" },
  { title: "Article about Kapil Sir", source: "MGS Architecture", image: articleAboutKapilSir, href: "https://www.mgsarchitecture.in/architecture-design/architects-interior-designers/spaces-architects-ka-exploring-spaces.html" },
  { title: "Slender House", source: "Architects Diary", image: slenderHouse, href: "https://thearchitectsdiary.com/tag/kapil-aggarwal/" },
  { title: "House of Dancing Screens", source: "Archilovers", image: houseOfDancingScreens, href: "https://www.archilovers.com/projects/329835/the-house-of-dancing-screens.html" },
  { title: "Golden Haveli", source: "Design Magazine", image: goldenHaveli, href: "https://d5mag.com/experience-old-delhis-golden-haveli-a-regal-retreat-that-hosted-gandhi/" },
  { title: "Haveli Dharampura", source: "Travel and Leisure Asia", image: haveliDharampura, href: "https://www.travelandleisureasia.com/in/hotels/india-hotels/check-in-haveli-dharampura-chandni-chowk-old-delhi/amp/" },
  // Sheet row 149 had "+A2:D149" pasted into the domain; removed it (goodhomes.co.in).
  { title: "Apartment 88", source: "Good Homes India", image: apartment88, href: "https://www.goodhomes.co.in/home-decor/home-tours/the-emergence-of-a-brand-new-trend-unfolds-with-this-artistic-home-7940.amp" },
];

// ---- Magazines (click a cover to view the content image) ----
// Files live in  .../assets/MAGAZINE/COVER  and  .../assets/MAGAZINE/internal
// File names are the ORIGINAL names, e.g.
//   https://assets.spacesarchitects-ka.com/assets/MAGAZINE/COVER/1.%20THE%20DESIGN%20SOURCE.webp
// The helpers encode spaces / & / + etc. for the URL, so type the file name
// exactly as it appears in the folder (including the extension).
// Only magazines whose cover AND internal files have a name are listed.
const MAG_BASE = "https://assets.spacesarchitects-ka.com/assets/MAGAZINE";
const magCover = (file) => `${MAG_BASE}/COVER/${encodeURIComponent(file)}`;
const magPage = (file) => `${MAG_BASE}/internal/${encodeURIComponent(file)}`;
const magazines = [
  { title: "The Design Source", cover: magCover("1. THE DESIGN SOURCE.webp"), content: magPage("1. THE DESIGN SOURCE.webp") },
  { title: "IIA Awards 2016", cover: magCover("2. IIA AWARDS 2016.webp"), content: magPage("2. IIA AWARDS 2016.webp") },
  { title: "Inside Outside", cover: magCover("3. INSIDE OUT_.webp"), content: magPage("3. INSIDE OUT_.webp") },
  { title: "Home and Design Trends", cover: magCover("4. HOME TRENDS.webp"), content: magPage("4. HOME TRENDS.webp") },
  { title: "India Today Home", cover: magCover("5. INDIA TODAY HOME.webp"), content: magPage("5. INDIA TODAY HOME.webp") },
  { title: "Indian Architect & Builder", cover: magCover("6. I A&B"), content: magPage("6. I A&B") },
  { title: "Home and Design Trends", cover: magCover("7. HOME & DESIGN TRENDS.webp"), content: magPage("7. HOME & DESIGN TRENDS.webp") },
  { title: "MGS Architecture", cover: magCover("8. MGS_"), content: magPage("8. MGS_") },
  { title: "Design Today", cover: magCover("9. DESIGN TODAY.webp"), content: magPage("9. DESIGN TODAY.webp") },
  { title: "Inside Outside", cover: magCover("10. INSIDE OUTSIDE.webp"), content: magPage("10. INSIDE OUTSIDE.webp") },
  { title: "Inside Outside", cover: magCover("12.INSIDE OUTSIDE.webp"), content: magPage("12.INSIDE OUTSIDE.webp") },
  { title: "CW Interiors", cover: magCover("13. CW INTERIORS.webp"), content: magPage("13. CW INTERIORS.webp") },
  { title: "Architecture + Design", cover: magCover("14. ARCHITECTURE + DESIGN.webp"), content: magPage("14. ARCHITECTURE + DESIGN.webp") },
  { title: "Home and Design Trends", cover: magCover("15. HOME TRENDS.webp"), content: magPage("15. HOME TRENDS.webp") },
  { title: "CW Interiors", cover: magCover("16.CW INTERIORS.webp"), content: magPage("16.CW INTERIORS.webp") },
  { title: "Society Interiors", cover: magCover("17. SOCIETY INTERIORS.webp"), content: magPage("17. SOCIETY INTERIORS.webp") },
  { title: "Home and Design Trends", cover: magCover("18.HOME TRENDS.webp"), content: magPage("18.HOME TRENDS.webp") },
  { title: "Design Matrix", cover: magCover("19. DESIGN MATRIX.webp"), content: magPage("19. DESIGN MATRIX.webp") },
  { title: "The Design Source", cover: magCover("20.THE DESIGN SOURCE.webp"), content: magPage("20.THE DESIGN SOURCE.webp") },
  { title: "Inside Outside", cover: magCover("21. INSIDE OUTSIDE.webp"), content: magPage("21. INSIDE OUTSIDE.webp") },
  { title: "Home and Design Trends", cover: magCover("23. HOME TRENDS.webp"), content: magPage("23. HOME TRENDS.webp") },
  { title: "Architecture Update", cover: magCover("24. ARCHITECTURE UPDATE_.webp"), content: magPage("24. ARCHITECTURE UPDATE_.webp") },
  { title: "IFJ", cover: magCover("26. IFJ"), content: magPage("26. IFJ") },
  { title: "Design Today", cover: magCover("28.DESIGN TODAY.webp"), content: magPage("28.DESIGN TODAY.webp") },
  { title: "The Design Source", cover: magCover("29. DESIGN SOURCE.webp"), content: magPage("29. DESIGN SOURCE.webp") },
  { title: "Interiors and Decor", cover: magCover("48.INTERIORS AND DECOR.webp"), content: magPage("48.INTERIORS AND DECOR.webp") },
  { title: "Better Interiors", cover: magCover("49.BETTER INTERIORS.webp"), content: magPage("49.BETTER INTERIORS.webp") },
  { title: "Buildofy", cover: magCover("50. BUILDOFY.webp"), content: magPage("50. BUILDOFY.webp") },
  { title: "MGS Architecture", cover: magCover("51.MGS ARCHITECTURE.webp"), content: magPage("51.MGS ARCHITECTURE.webp") },
  { title: "Home and Design Trends", cover: magCover("52.HOME TRENDS.webp"), content: magPage("52.HOME TRENDS.webp") },
  { title: "Home and Design Trends", cover: magCover("55. HOME TRENDS.webp"), content: magPage("55. HOME TRENDS.webp") },
  { title: "Inside Outside", cover: magCover("56.INSIDE OUTSIDE.webp"), content: magPage("56.INSIDE OUTSIDE.webp") },
  { title: "Society Interiors", cover: magCover("57.SOCIETY INTERIORS.webp"), content: magPage("57.SOCIETY INTERIORS.webp") },
  { title: "Architecture Update", cover: magCover("58.ARCHITECTURE UPDATE.webp"), content: magPage("58.ARCHITECTURE UPDATE.webp") },
  { title: "The Design Source", cover: magCover("59.THE DESIGN SOURCE.webp"), content: magPage("59.THE DESIGN SOURCE.webp") },
  { title: "World Architecture Festival", cover: magCover("61.WAF_"), content: magPage("61. WAF") },
  { title: "Design Detail", cover: magCover("62.DESIGN DETAIL.webp"), content: magPage("62.DESIGN DETAIL.webp") },
  { title: "Insite", cover: magCover("63.INSITE"), content: magPage("63.INSITE") },
  { title: "Surfaces Reporter", cover: magCover("65. SURFACE REPORTER.webp"), content: magPage("65. SURFACE REPORTER.webp") },
  { title: "India Today Home", cover: magCover("66.INDIA TODAY HOME.webp"), content: magPage("66.INDIA TODAY HOME.webp") },
  { title: "Architecture + Design", cover: magCover("67. ARCHITECTURE + DESIGN.webp"), content: magPage("67. ARCHITECTURE + DESIGN.webp") },
  { title: "Home and Design Trends", cover: magCover("68. HOME TRENDS.webp"), content: magPage("68. HOME TRENDS_.webp") },
  { title: "Home Review", cover: magCover("70.HOME REVIEW.webp"), content: magPage("70.HOME REVIEW.webp") },
  { title: "Architecture+design", cover: magCover("71.ARCHITECTURE+DESIGN.webp"), content: magPage("71.ARCHITECTURE+DESIGN.webp") },
  { title: "Insite", cover: magCover("73.INSITE"), content: magPage("73.INSITE") },
  { title: "CW Insite", cover: magCover("74.CW INSITE.webp"), content: magPage("74.CW INSITE.webp") },
  { title: "Home Review", cover: magCover("75.HOME REVIEW.webp"), content: magPage("75.HOME REVIEW.webp") },
  { title: "Design Today", cover: magCover("76.DESIGN TODAY.webp"), content: magPage("76.DESIGN TODAY.webp") },
  { title: "Society Interiors", cover: magCover("77.SOCIETY INTERIORS.webp"), content: magPage("77.SOCIETY INTERIORS.webp") },
  { title: "Design Today", cover: magCover("78.DESIGN TODAY.webp"), content: magPage("78.DESIGN TODAY.webp") },
  { title: "MGS Architecture", cover: magCover("79.MGS_"), content: magPage("79.MGS_") },
  { title: "Better Interiors", cover: magCover("80.BETTER INTERIORS.webp"), content: magPage("80.BETTER INTERIORS.webp") },
  { title: "Surfaces Reporter", cover: magCover("81.SURFACES REPORTER.webp"), content: magPage("81.SURFACES REPORTER.webp") },
  { title: "Forbes India", cover: magCover("82.FORBES INDIA.webp"), content: magPage("82.FORBES INDIA.webp") },
  { title: "Surfaces Reporter", cover: magCover("83.SURFACES REPORTER.webp"), content: magPage("83.SURFACES REPORTER.webp") },
  { title: "Insite", cover: magCover("84.INSITE"), content: magPage("84.INSITE") },
  { title: "CW Interiors", cover: magCover("85.CW INTERIORS.webp"), content: magPage("85.CW INTERIORS.webp") },
  { title: "The Design Source", cover: magCover("86.THE DESIGN SOURCE.webp"), content: magPage("86.THE DESIGN SOURCE.webp") },
];

// ---- Books (click a cover to view the content image(s)) ----
// File names on the asset host are the ORIGINAL names, e.g.
//   https://assets.spacesarchitects-ka.com/assets/BOOK/cover/34%20IAG.webp
// The helpers below encode spaces / & / + etc. for the URL, so just type the
// file name exactly as it appears in the folder (including the extension).
const BOOK_BASE = "https://assets.spacesarchitects-ka.com/assets/BOOK";
const bookCover = (file) => `${BOOK_BASE}/cover/${encodeURIComponent(file)}`;
const bookPage = (file) => `${BOOK_BASE}/content/${encodeURIComponent(file)}`;
// Note: "6. A&D" and "18. A+C" have no file extension in the folder
// (they are PNGs). If they don't show, rename them on the host to
// "6. A&D.png" / "18. A+C.png" and add ".png" to those names below.
const books = [
  { title: "FOAID 2023", cover: bookCover("1. FOAID 2023.webp"), content: bookPage("1. FOAID 2023.webp") },
  { title: "FOAID 2024", cover: bookCover("2. FOAID 2024.webp"), content: bookPage("2. FOAID 2024.webp") },
  { title: "Hettich", cover: bookCover("3. HETTICH.webp"), content: [bookPage("3. HETTICH.webp"), bookPage("3. HETTICH img2.webp"), bookPage("3. HETTICH img3.webp")] },
  { title: "Eden for Boys & Girls", cover: bookCover("4. EDEN FOR BOYS & GIRLS.webp"), content: bookPage("4. EDEN FOR BOYS & GIRLS.webp") },
  { title: "Big Design for Small Workspaces", cover: bookCover("5. BIG DESIGN FOR SMALL WORKSPACES.webp"), content: bookPage("5. BIG DESIGN FOR SMALL WORKSPACES.webp") },
  { title: "A&D", cover: bookCover("6. A&D"), content: bookPage("6. A&D") },
  { title: "Design Vision (The Language of Office Design II)", cover: bookCover("7. DESIGN VISION (the language of office design II).webp"), content: [bookPage("7. DESIGN VISION (the language of office design II).webp"), bookPage("7(1).webp")] },
  { title: "Interior Architecture Group", cover: bookCover("8. INTERIOR ARCHITECTURE GROUP.webp"), content: [bookPage("8. INTERIOR ARCHITECTURE GROUP.webp"), bookPage("8(2).webp")] },
  { title: "Schools by Sibylle Kramer", cover: bookCover("9. SCHOOLS by sibylle kramer.webp"), content: bookPage("9. SCHOOLS by sibylle kramer.webp") },
  { title: "IIID 2013", cover: bookCover("10. IIID 2013.webp"), content: bookPage("10. IIID 2013.webp") },
  { title: "IIID 2017", cover: bookCover("11. IIID 2017.webp"), content: bookPage("11. IIID 2017.webp") },
  { title: "S1 Residences", cover: bookCover("12. S1 RESIDENCES.webp"), content: bookPage("12. S1 RESIDENCES.webp") },
  { title: "FOAID 2022", cover: bookCover("13. FOAID 2022.webp"), content: bookPage("13. FOAID 2022.webp") },
  { title: "Inspired", cover: bookCover("14. INSPIRED.webp"), content: [bookPage("14. INSPIRED.webp"), bookPage("14(2).webp")] },
  { title: "IIA Awards", cover: bookCover("15. IIA AWARDS.webp"), content: bookPage("15. IIA AWARDS.webp") },
  { title: "FOAID 2016", cover: bookCover("16. FOAID 2016.webp"), content: bookPage("16. FOAID 2016.webp") },
  { title: "Kindergarten Architecture", cover: bookCover("17. KINDERGARDEN ARCHITECTURE.webp"), content: bookPage("17. KINDERGARDEN ARCHITECTURE.webp") },
  { title: "A+C", cover: bookCover("18. A+C"), content: [bookPage("18. A+C"), bookPage("18(2).webp")] },
  { title: "Custom Office", cover: bookCover("19.CUSTOM OFFICE.webp"), content: bookPage("19. CUSTOM OFFICE.webp") },
  { title: "FOAID 2018", cover: bookCover("20. FOAID 2018.webp"), content: bookPage("20. FOAID 2018.webp") },
  { title: "S1 Residences", cover: bookCover("21. S1 RESIDENCES.webp"), content: bookPage("21. S1 RESIDENCES.webp") },
  { title: "Fifty Five", cover: bookCover("22. FIFTY FIVE.webp") },
  { title: "IIID 2016", cover: bookCover("23.IIID 2016.webp"), content: bookPage("23. IIID 2016.webp") },
  { title: "IIID 2020", cover: bookCover("24. IIID 2020.webp"), content: bookPage("24. IIID 2020.webp") },
  { title: "IIA 2018", cover: bookCover("25. IIA 2018.webp"), content: [bookPage("25. IIA 2018.webp"), bookPage("25(1).webp")] },
  { title: "50 Luxury Apartments", cover: bookCover("26. 50 LUXURY APARTMENTS.webp"), content: bookPage("26. 50 LUXURY APARTMENTS.webp") },
  { title: "Atlas of World Architecture", cover: bookCover("27. ATLAS OF WORLD ARCHITECTURE.webp"), content: bookPage("27. ATLAS OF WORLD ARCHITECTURE.webp") },
  { title: "The Modern Home", cover: bookCover("28. THE MODERN HOME.webp"), content: bookPage("28. THE MODERN HOME.webp") },
  { title: "Global Best Interior", cover: bookCover("29. GLOBAL BEST INTERIOR_.webp"), content: bookPage("29. GLOBAL BEST INTERIOR_.webp") },
  { title: "Stylish Offices", cover: bookCover("30. STYLISH OFFICES.webp"), content: bookPage("30. STYLISH OFFICES.webp") },
  { title: "Deko (South Korea)", cover: bookCover("31. DEKO (South korea).webp"), content: bookPage("31. DEKO (South korea).webp") },
  { title: "Creative & Modern Office", cover: bookCover("32. CREATIVE &  MODERN OFFICE.webp"), content: [bookPage("32. CREATIVE &  MODERN OFFICE.webp"), bookPage("32(2).webp")] },
  { title: "50 Beautiful Houses", cover: bookCover("33. 50 BEAUTIFUL HOUSES.webp"), content: bookPage("33. 50 BEAUTIFUL HOUSES.webp") },
  { title: "IAG", cover: bookCover("34 IAG.webp"), content: bookPage("34 IAG.webp") },
];

// Upper-menu items (value = the section id below; "all" = top of the page)
const menuItems = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "magazines", label: "Magazine" },
  { value: "books", label: "Books" },
];

export default function PublicationsPage() {
  return (
    <main>
      <PublicationsChrome items={menuItems} />

      <section id="all" className={styles.blogListing} aria-label="Publications">
        <div id="web" className={`${styles.blogGrid} ${chromeStyles.anchor}`}>
          {publicationCards.map((card, index) => {
            const content = (
              <>
                <div className={styles.imageWrap}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 274px, (min-width: 768px) 42vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <h2 className={styles.title}>{card.title}</h2>
                {card.source && <p className={styles.excerpt}>{card.source}</p>}
                {card.href && <span className={styles.readMore}>Read more</span>}
              </>
            );

            return (
              <article key={`${card.title}-${index}`} className={styles.blogCard}>
                {card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={card.source ? `${card.title} — ${card.source}` : card.title}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={styles.cardLink}>{content}</div>
                )}
              </article>
            );
          })}
        </div>

        <div id="magazines" className={chromeStyles.anchor}>
          <MagazineGallery magazines={magazines} />
        </div>

        <div id="books" className={chromeStyles.anchor}>
          <BookGallery books={books} />
        </div>
      </section>

      <Footer />
    </main>
  );
}