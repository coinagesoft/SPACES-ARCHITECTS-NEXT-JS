import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MagazineGallery from "@/components/MagazineGallery";
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
const MAG_BASE = "https://assets.spacesarchitects-ka.com/assets/magazine";
const magazines = [
  { title: "The Design Source", cover: `${MAG_BASE}/cover/1.webp`, content: `${MAG_BASE}/content/1.webp` },
  { title: "IIA Awards", cover: `${MAG_BASE}/cover/2.webp`, content: `${MAG_BASE}/content/2.webp` },
  { title: "Inside Outside", cover: `${MAG_BASE}/cover/3.webp`, content: `${MAG_BASE}/content/3.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/4.webp`, content: `${MAG_BASE}/content/4.webp` },
  { title: "India Today Home", cover: `${MAG_BASE}/cover/5.webp`, content: `${MAG_BASE}/content/5.webp` },
  { title: "Indian Architect & Builder", cover: `${MAG_BASE}/cover/6.webp`, content: `${MAG_BASE}/content/6.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/7.webp`, content: `${MAG_BASE}/content/7.webp` },
  { title: "MGS Architecture", cover: `${MAG_BASE}/cover/8.webp`, content: `${MAG_BASE}/content/8.webp` },
  { title: "Design Today", cover: `${MAG_BASE}/cover/9.webp`, content: `${MAG_BASE}/content/9.webp` },
  { title: "Inside Outside", cover: `${MAG_BASE}/cover/10.webp`, content: `${MAG_BASE}/content/10.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/11.webp`, content: `${MAG_BASE}/content/11.webp` },
  { title: "Inside Outside", cover: `${MAG_BASE}/cover/12.webp`, content: `${MAG_BASE}/content/12.webp` },
  { title: "Interiors India", cover: `${MAG_BASE}/cover/13.webp`, content: `${MAG_BASE}/content/13.webp` },
  { title: "Architecture + Design", cover: `${MAG_BASE}/cover/14.webp`, content: `${MAG_BASE}/content/14.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/15.webp`, content: `${MAG_BASE}/content/15.webp` },
  { title: "Interiors India", cover: `${MAG_BASE}/cover/16.webp`, content: `${MAG_BASE}/content/16.webp` },
  { title: "Society Interiors", cover: `${MAG_BASE}/cover/17.webp`, content: `${MAG_BASE}/content/17.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/18.webp`, content: `${MAG_BASE}/content/18.webp` },
  { title: "Show Flat", cover: `${MAG_BASE}/cover/19.webp`, content: `${MAG_BASE}/content/19.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/20.webp`, content: `${MAG_BASE}/content/20.webp` },
  { title: "Inside Outside", cover: `${MAG_BASE}/cover/21.webp`, content: `${MAG_BASE}/content/21.webp` },
  { title: "Interiors India", cover: `${MAG_BASE}/cover/22.webp`, content: `${MAG_BASE}/content/22.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/23.webp`, content: `${MAG_BASE}/content/23.webp` },
  { title: "Architecture Update", cover: `${MAG_BASE}/cover/24.webp`, content: `${MAG_BASE}/content/24.webp` },
  { title: "Architecture + Design", cover: `${MAG_BASE}/cover/25.webp`, content: `${MAG_BASE}/content/25.webp` },
  { title: "IFJ", cover: `${MAG_BASE}/cover/26.webp`, content: `${MAG_BASE}/content/26.webp` },
  { title: "India Mondo", cover: `${MAG_BASE}/cover/27.webp`, content: `${MAG_BASE}/content/27.webp` },
  { title: "Design Today", cover: `${MAG_BASE}/cover/28.webp`, content: `${MAG_BASE}/content/28.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/29.webp`, content: `${MAG_BASE}/content/29.webp` },
  { title: "Architecture + Design", cover: `${MAG_BASE}/cover/30.webp`, content: `${MAG_BASE}/content/30.webp` },
  { title: "Architecture + Design", cover: `${MAG_BASE}/cover/31.webp`, content: `${MAG_BASE}/content/31.webp` },
  { title: "Good Homes India", cover: `${MAG_BASE}/cover/32.webp`, content: `${MAG_BASE}/content/32.webp` },
  { title: "The Ideal Home and Garden", cover: `${MAG_BASE}/cover/33.webp`, content: `${MAG_BASE}/content/33.webp` },
  { title: "Inside Outside", cover: `${MAG_BASE}/cover/34.webp`, content: `${MAG_BASE}/content/34.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/35.webp`, content: `${MAG_BASE}/content/35.webp` },
  { title: "Surfaces Reporter", cover: `${MAG_BASE}/cover/36.webp`, content: `${MAG_BASE}/content/36.webp` },
  { title: "Insite", cover: `${MAG_BASE}/cover/37.webp`, content: `${MAG_BASE}/content/37.webp` },
  { title: "Architecture Update", cover: `${MAG_BASE}/cover/38.webp`, content: `${MAG_BASE}/content/38.webp` },
  { title: "Home Review", cover: `${MAG_BASE}/cover/39.webp`, content: `${MAG_BASE}/content/39.webp` },
  { title: "Insite", cover: `${MAG_BASE}/cover/40.webp`, content: `${MAG_BASE}/content/40.webp` },
  { title: "India Today Home", cover: `${MAG_BASE}/cover/41.webp`, content: `${MAG_BASE}/content/41.webp` },
  { title: "India Mondo", cover: `${MAG_BASE}/cover/42.webp`, content: `${MAG_BASE}/content/42.webp` },
  { title: "IFJ Plus", cover: `${MAG_BASE}/cover/43.webp`, content: `${MAG_BASE}/content/43.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/44.webp`, content: `${MAG_BASE}/content/44.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/45.webp`, content: `${MAG_BASE}/content/45.webp` },
  { title: "Home Review", cover: `${MAG_BASE}/cover/46.webp`, content: `${MAG_BASE}/content/46.webp` },
  { title: "Society Interiors", cover: `${MAG_BASE}/cover/47.webp`, content: `${MAG_BASE}/content/47.webp` },
  { title: "Interiors and Decor", cover: `${MAG_BASE}/cover/48.webp`, content: `${MAG_BASE}/content/48.webp` },
  { title: "Better Interiors", cover: `${MAG_BASE}/cover/49.webp`, content: `${MAG_BASE}/content/49.webp` },
  { title: "Step Maze House", cover: `${MAG_BASE}/cover/50.webp`, content: `${MAG_BASE}/content/50.webp` },
  { title: "MGS Architecture", cover: `${MAG_BASE}/cover/51.webp`, content: `${MAG_BASE}/content/51.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/52.webp`, content: `${MAG_BASE}/content/52.webp` },
  { title: "The Design Story", cover: `${MAG_BASE}/cover/53.webp`, content: `${MAG_BASE}/content/53.webp` },
  { title: "Architecture Update", cover: `${MAG_BASE}/cover/54.webp`, content: `${MAG_BASE}/content/54.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/55.webp`, content: `${MAG_BASE}/content/55.webp` },
  { title: "Inside Outside", cover: `${MAG_BASE}/cover/56.webp`, content: `${MAG_BASE}/content/56.webp` },
  { title: "Society Interiors", cover: `${MAG_BASE}/cover/57.webp`, content: `${MAG_BASE}/content/57.webp` },
  { title: "Architecture Update", cover: `${MAG_BASE}/cover/58.webp`, content: `${MAG_BASE}/content/58.webp` },
  { title: "The Design Story", cover: `${MAG_BASE}/cover/59.webp`, content: `${MAG_BASE}/content/59.webp` },
  { title: "Architectural Digest", cover: `${MAG_BASE}/cover/60.webp`, content: `${MAG_BASE}/content/60.webp` },
  { title: "World Architecture Festival", cover: `${MAG_BASE}/cover/61.webp`, content: `${MAG_BASE}/content/61.webp` },
  { title: "Design Detail", cover: `${MAG_BASE}/cover/62.webp`, content: `${MAG_BASE}/content/62.webp` },
  { title: "Insite", cover: `${MAG_BASE}/cover/63.webp`, content: `${MAG_BASE}/content/63.webp` },
  { title: "Design Detail", cover: `${MAG_BASE}/cover/64.webp`, content: `${MAG_BASE}/content/64.webp` },
  { title: "Surfaces Reporter", cover: `${MAG_BASE}/cover/65.webp`, content: `${MAG_BASE}/content/65.webp` },
  { title: "India Today Home", cover: `${MAG_BASE}/cover/66.webp`, content: `${MAG_BASE}/content/66.webp` },
  { title: "Architecture + Design", cover: `${MAG_BASE}/cover/67.webp`, content: `${MAG_BASE}/content/67.webp` },
  { title: "Home and Design Trends", cover: `${MAG_BASE}/cover/68.webp`, content: `${MAG_BASE}/content/68.webp` },
  { title: "Design Today", cover: `${MAG_BASE}/cover/69.webp`, content: `${MAG_BASE}/content/69.webp` },
  { title: "Home Review", cover: `${MAG_BASE}/cover/70.webp`, content: `${MAG_BASE}/content/70.webp` },
  { title: "Architecture + Design", cover: `${MAG_BASE}/cover/71.webp`, content: `${MAG_BASE}/content/71.webp` },
  { title: "Architectural Digest", cover: `${MAG_BASE}/cover/72.webp`, content: `${MAG_BASE}/content/72.webp` },
  { title: "Insite", cover: `${MAG_BASE}/cover/73.webp`, content: `${MAG_BASE}/content/73.webp` },
  { title: "Interiors India", cover: `${MAG_BASE}/cover/74.webp`, content: `${MAG_BASE}/content/74.webp` },
  { title: "Home Review", cover: `${MAG_BASE}/cover/75.webp`, content: `${MAG_BASE}/content/75.webp` },
  { title: "Design Today", cover: `${MAG_BASE}/cover/76.webp`, content: `${MAG_BASE}/content/76.webp` },
  { title: "Society Interiors", cover: `${MAG_BASE}/cover/77.webp`, content: `${MAG_BASE}/content/77.webp` },
  { title: "Design Today", cover: `${MAG_BASE}/cover/78.webp`, content: `${MAG_BASE}/content/78.webp` },
  { title: "MGS Architecture", cover: `${MAG_BASE}/cover/79.webp`, content: `${MAG_BASE}/content/79.webp` },
  { title: "Better Interiors", cover: `${MAG_BASE}/cover/80.webp`, content: `${MAG_BASE}/content/80.webp` },
  { title: "Surfaces Reporter", cover: `${MAG_BASE}/cover/81.webp`, content: `${MAG_BASE}/content/81.webp` },
  { title: "Forbes India", cover: `${MAG_BASE}/cover/82.webp`, content: `${MAG_BASE}/content/82.webp` },
  { title: "Surfaces Reporter", cover: `${MAG_BASE}/cover/83.webp`, content: `${MAG_BASE}/content/83.webp` },
  { title: "Insite", cover: `${MAG_BASE}/cover/84.webp`, content: `${MAG_BASE}/content/84.webp` },
  { title: "Interiors India", cover: `${MAG_BASE}/cover/85.webp`, content: `${MAG_BASE}/content/85.webp` },
  { title: "The Design Source", cover: `${MAG_BASE}/cover/86.webp`, content: `${MAG_BASE}/content/86.webp` },
];

export default function PublicationsPage() {
  return (
    <main>
      <SiteChrome />

      <section className={styles.blogListing} aria-label="Publications">
        <div className={styles.blogGrid}>
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

        <MagazineGallery magazines={magazines} />
      </section>

      <Footer />
    </main>
  );
}