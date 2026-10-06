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
const sachdevaFarmhouse = assetImage("projects/SACHDEVA FARMHOUSE.png");
const screenHouse = assetImage("projects/SCREEN-HOUSE/3_4/1.webp");
const jHouse = assetImage("projects/J-HOUSE/cover/COVER.webp");
const houseOfDancingScreens = assetImage("projects/HOUSE-OF-DANCING-SCREENS/cover/COVER.webp");
const stepMazeHouse = assetImage("projects/STEP-MAZE/cover/COVER.webp");
const slenderHouse = assetImage("projects/Slender-House/photographs/1. Building elevation.webp");
const swatantraResidence = assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/1 Elevation (2).jpg");
const goldenHaveli = assetImage("projects/GOLDEN-HAVELL/3_4/new/1.webp");
const heritagePark = assetImage("projects/HERITAGE-PARK/photographs/edited 1.webp");
const haveliDharampura = assetImage("projects/haveli/haveli_1.jpg");
const timelessHouses = assetImage("Featured News/featured-by-timeless-houses-magazine .png");
const krishasResidence = assetImage("projects/KRISHAS-RESIDENCE/3_4/1.webp");
const imeldaInc = assetImage("projects/IMELDA-INC/3_4/1.webp");
const intersectTileShowroom = assetImage("projects/INTERSEXT-SHOWROOM/cover/COVER IMAGE.webp");
const articleAboutKapilSir = assetImage("Kapil.jpg");
const top100MindsBehindTheBestWorkplaces = articleAboutKapilSir;
const apartment88 = assetImage("projects/apartment88/3_4/1.webp");

// ---- New web cover photos ----
// Files live in  .../assets/WEB COVER PHOTOS  and keep their original names, e.g.
//   https://assets.spacesarchitects-ka.com/assets/WEB%20COVER%20PHOTOS/81.%20screenhouse_tumblr.webp
// webCover() encodes spaces etc. for the URL, so type the file name exactly as it
// appears in the folder (including the extension).
// Cards that use webCover() show the new cover; the rest still use the project image above.
const WEB_COVER_BASE = "https://assets.spacesarchitects-ka.com/assets/WEB%20COVER%20PHOTOS";
const webCover = (file) => `${WEB_COVER_BASE}/${encodeURIComponent(file)}`;

// ---- Cards (same order as the sheet) ----
// Each card has a "// #NN" marker. NN = the row number in the sheet = the number
// at the start of its WEB COVER PHOTOS file name (e.g. "#66" -> "66. thescreenhouse_homeadore.webp").
// Cards with no webCover() file (images from /projects) still keep their number.
// title  = Project column
// source = Web Portal column
// href   = Link column (opens in a new tab)
const publicationCards = [
  // #1
  { title: "ARCHITECT'S OFFICE", source: "Archute", image: architectsOffice, href: "http://www.archute.com/2015/03/23/architects-office-spaces-architectska-convert-a-basement-space-in-new-dehli-into-a-one-of-a-kind-office/" },
  // #2
  { title: "Various Projects", source: "Archello", image: webCover("02. various project archello.webp"), href: "http://www.archello.com/en/company/spaces-architects-ka" },
  // #3
  { title: "Sachdeva Farmhouse", source: "Archdaily", image: webCover("03.Sachdeva Farmhouse_archdaily.webp"), href: "http://www.archdaily.com/589310/sachdeva-farmhouse-spaces-architects-at-ka/" },
  // #4
  { title: "ARCHITECT'S OFFICE", source: "Archdaily", image: webCover("04.ARCHITECT_S OFFICE_archdaily.webp"), href: "http://www.archdaily.com/589264/architect-s-office-spaces-architects-at-ka/" },
  // #5
  { title: "ARCHITECT'S OFFICE", source: "Architizer", image: webCover("05.ARCHITECT_S OFFICE_architizer.webp"), href: "http://architizer.com/projects/spaces-architectska-office/" },
  // #6
  { title: "ARCHITECT'S OFFICE", source: "Arch20", image: webCover("06.ARCHITECT_S OFFICE_arch20.webp"), href: "http://www.arch2o.com/architect-s-studio-kapil-aggarwal-spaces-architects/" },
  // #7
  { title: "Cubix Office", source: "E-Architect", image: webCover("07.Cubix Officee-architect.webp"), href: "http://www.e-architect.co.uk/india/cubix-office-interior-in-new-delhi" },
  // #8
  { title: "Sachdeva Farmhouse", source: "E-Architect", image: webCover("08.Sachdeva Farmhouse_e-architect.webp"), href: "http://www.e-architect.co.uk/india/jaunapur-farmhouse-in-new-delhi" },
  // #9
  { title: "ARCHITECT'S OFFICE", source: "Contemporist", image: webCover("09.ARCHITECT_S OFFICE_Contemporist.webp"), href: "http://www.contemporist.com/2014/05/20/architects-studio-by-spaces-architects/" },
  // #10
  { title: "ARCHITECT'S OFFICE", source: "How Architect Works (HAW) Magazine", image: architectsOffice, href: "http://www.howarchitectworks.com/spaces-architectska-studio-new-delhi/" },
  // #11
  { title: "Adharshila Vatika Kindergarten", source: "BBC", image: webCover("11.Adharshila Vatika Kindergarten_bbc.webp"), href: "http://www.bbc.com/news/business-14975270" },
  // #12
  { title: "Screen House", source: "BUILDOFY", image: webCover("12.Screen House_buildofy.webp"), href: "https://www.buildofy.com/projects/screen-house-new-delhi-spaces-architects-ka" },
  // #13
  { title: "J House", source: "BUILDOFY", image: webCover("13.J House_buildofy.webp"), href: "https://www.buildofy.com/projects/j-house-new-delhi-spaces-ka" },
  // #14
  { title: "The House of Dancing Screens", source: "BUILDOFY", image: webCover("14.The House of Dancing Screens_buildofy.webp"), href: "https://www.buildofy.com/projects/the-house-of-dancing-screens-ambala-haryana" },
  // #15
  { title: "Step Maze House", source: "BUILDOFY", image: webCover("15.Step Maze House_buildofy.webp"), href: "https://www.buildofy.com/projects/step-maze-house-model-town-new-delhi" },
  // #16
  { title: "Slender House", source: "BUILDOFY", image: webCover("16.Slender House_buildofy.webp"), href: "https://www.buildofy.com/projects/slender-house-new-delhi" },
  // #17
  { title: "Library House", source: "BUILDOFY", image: webCover("17.Library House_buildofy.webp"), href: "https://www.buildofy.com/projects/library-house-gurugram-haryana" },
  // #18
  { title: "Slender House", source: "archdaily", image: webCover("18.Slender House_archdaily.webp"), href: "https://www.archdaily.com/1014110/6-x-18-slender-house-spaces-architects-at-ka" },
  // #19
  { title: "The Art House", source: "archdaily", image: webCover("19.The Art House_archdaily.webp"), href: "https://www.archdaily.com/1092365/the-art-house-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #20
  { title: "The House of Dancing Screens", source: "archdaily", image: webCover("20.The House of Dancing Screens_archdaily.webp"), href: "https://www.archdaily.com/1020102/the-house-of-dancing-screens-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #21
  { title: "Swatantra Residence", source: "archdaily", image: webCover("21.Swatantra Residence_archdaily.webp"), href: "https://www.archdaily.com/997398/swantantra-residence-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #22
  { title: "The Screen House", source: "archdaily", image: webCover("22.The Screen House_archdaily.webp"), href: "https://www.archdaily.com/935817/the-screen-house-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #23
  { title: "J House", source: "archdaily", image: webCover("23.J House_archdaily.webp"), href: "https://www.archdaily.com/892565/j-house-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #24
  { title: "Sachdeva Farmhouse", source: "archdaily", image: sachdevaFarmhouse, href: "https://www.archdaily.com/589310/sachdeva-farmhouse-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #25
  { title: "Architect’s Office", source: "archdaily", image: architectsOffice, href: "https://www.archdaily.com/589264/architect-s-office-spaces-architects-at-ka?ad_medium=office_landing&ad_name=article" },
  // #26
  { title: "Slender House", source: "Amazing Architecture", image: webCover("26.slender house_Amazing Architecture.webp"), href: "https://amazingarchitecture.com/houses/6-x-18-slender-house-new-delhi-india-by-spaces-architects-at-ka" },
  // #27
  { title: "Slender House", source: "World Architecture Community", image: webCover("27.slender house_World Architecture Community.webp"), href: "https://worldarchitecture.org/architecture-projects/pzhcn/6x18-slender-house-project-pages.html" },
  // #28
  { title: "Slender House", source: "archipanic", image: webCover("28.slender house_archipanic.webp"), href: "https://www.archipanic.com/portfolio/slender-house/" },
  // #29
  { title: "Slender House", source: "archinect", image: webCover("29.slender houser_archinect.webp"), href: "https://archinect.com/firms/project/150422366/6-x18-slender-house/150422367" },
  // #30
  { title: "Slender House", source: "thearchitectsdiary", image: webCover("30.slenderhouse_thearchitectsdiary.webp"), href: "https://thearchitectsdiary.com/tag/6-x-18-slender-house/" },
  // #31
  { title: "Slender House", source: "re-thinkingthefuture", image: webCover("31.slenderhouse_re-thinkingthefuture.webp"), href: "https://www.re-thinkingthefuture.com/residential/10248-6-x-18-slender-house-by-spaces-architectska/" },
  // #32
  { title: "Slender House", source: "mossandfog", image: webCover("32.slenderhouse_mossandfog.webp"), href: "https://mossandfog.com/elegant-slender-house-in-delhi-is-modern-and-playful/" },
  // #33
  { title: "Slender House", source: "ideal.house", image: webCover("33.slenderhouse_ideal.house.webp"), href: "https://ideal.house/community/news/6-x-18-slender-house-spaces-architectska" },
  // #34
  { title: "Swatantra Residence", source: "archello", image: webCover("34.swatantra residense_archello.webp"), href: "https://archello.com/news/swatantra-residence-by-spaces-architectska-boasts-an-architectural-composition-of-concrete-and-art" },
  // #35
  { title: "Swatantra Residence", source: "plainmagazine", image: webCover("35.Swatantra Residence_plainmagazine.webp"), href: "https://plainmagazine.com/spaces-architects-ka-swatantra-residence-india/" },
  // #36
  { title: "Swatantra Residence", source: "divisare", image: webCover("36.Swatantra Residence_divisare.webp"), href: "https://divisare.com/authors/2144789333-spaces-architects-ka" },
  // #37
  { title: "Swatantra Residence", source: "Amazing Architecture", image: webCover("37.Swatantra Residence_Amazing Architecture.webp"), href: "https://amazingarchitecture.com/houses/swatantra-residence-in-kamla-nagar-agra-india-by-spaces-architects-at-ka" },
  // #38
  { title: "Swatantra Residence", source: "magzter", image: webCover("38.Swatantra Residence_magzter.webp"), href: "https://www.magzter.com/stories/architecture/Design-Essentia-Magazine/SWATANTRA-RESIDENCE?srsltid=AfmBOooejLo9Lkv110mDef7EbxxAvtkHORg44ELlpQG6EAPMBbM84kOD" },
  // #39
  { title: "The House of Dancing Screens", source: "Amazing Architecture", image: webCover("39.Thehouseofdancingscreens_Amazing Architecture.webp"), href: "https://amazingarchitecture.com/houses/the-house-of-dancing-screens-model-town-india-by-spaces-architects-at-ka" },
  // #40
  { title: "The House of Dancing Screens", source: "thearchitectsdiary", image: webCover("40.The House of Dancing Screens_thearchitectsdiary.webp"), href: "https://thearchitectsdiary.com/the-facade-of-this-house-are-elements-that-redefine-the-space-spaces-architects-ka/" },
  // #41
  { title: "The House of Dancing Screens", source: "interiorexteriorgroup", image: webCover("41.The House of Dancing Screens_interiorexteriorgroup.webp"), href: "https://www.interiorexteriorgroup.com/2026/04/the-house-of-dancing-screens.html" },
  // #42
  { title: "The House of Dancing Screens", source: "archello", image: webCover("42.The House of Dancing Screens_archello.webp"), href: "https://archello.com/project/the-house-of-dancing-screens" },
  // #43
  { title: "Step Maze House", source: "Amazing Architecture", image: webCover("43.Step Maze House_Amazing Architecture.webp"), href: "https://amazingarchitecture.com/houses/the-step-maze-house-new-delhi-india-by-spaces-architects-at-ka" },
  // #44
  { title: "The Library House", source: "archello", image: webCover("44.thelibraryhouse_archello.webp"), href: "https://archello.com/project/the-library-house" },
  // #45
  { title: "6 x 18 Slender House", source: "archello", image: webCover("45.6 x 18 Slender House_archello.webp"), href: "https://archello.com/project/6-x-18-slender-house-4" },
  // #46
  { title: "Ashraya Residence", source: "archello", image: webCover("46.Ashraya Residence_archello.webp"), href: "https://archello.com/project/ashraya-residence-2" },
  // #47
  { title: "Stonex India", source: "archello", image: webCover("47.Stonex India_archello.webp"), href: "https://archello.com/project/stonex-india" },
  // #48
  { title: "Golden Haveli", source: "archello", image: webCover("48.Golden Haveli_archello.webp"), href: "https://archello.com/project/golden-haveli" },
  // #49
  { title: "THE HERITAGE PARK", source: "archello", image: webCover("49.THE HERITAGE PARK_archello.webp"), href: "https://archello.com/project/the-heritage-park" },
  // #50
  { title: "Haveli Dharampura", source: "divisare", image: webCover("50.Haveli Dharampura_divisare.webp"), href: "https://divisare.com/projects/323239-spaces-architects-ka-bharat-aggarwal-haveli-dharampura" },
  // #51
  { title: "Golden Haveli", source: "re-thinkingthefuture", image: webCover("51.Golden Haveli_rethinkingthefuture.webp"), href: "https://www.re-thinkingthefuture.com/residential/12333-golden-haveli-by-spacesarchitectka/" },
  // #52
  { title: "Haveli Dharampura", source: "thedesignstory", image: webCover("52.Haveli Dharampura_thedesignstory.webp"), href: "https://www.thedesignstory.com/blog/people/embracing-the-intangibles-in-architecture-with-spaces-architectska-storyofdesign" },
  // #53
  { title: "heritage park", source: "thedesignstory", image: heritagePark, href: "https://www.thedesignstory.com/blog/people/embracing-the-intangibles-in-architecture-with-spaces-architectska-storyofdesign" },
  // #54
  { title: "Haveli Dharampura", source: "inhabitat", image: webCover("54.Haveli Dharampura_inhaitat.webp"), href: "https://inhabitat.com/beautifully-restored-135-year-old-building-revives-one-of-delhis-oldest-markets/haveli-dharampura-by-spaces-architectska-4/" },
  // #55
  { title: "Golden Haveli", source: "architectandinteriorsindia", image: webCover("55.Golden Haveli_architectsandinteriorsindia.webp"), href: "https://www.architectandinteriorsindia.com/news/take-in-chandni-chowk-views-from-the-golden-haveli-with-eam-s-jaishankar" },
  // #56
  { title: "Golden Haveli", source: "d5mag", image: webCover("56.Golden Haveli_d5mag.webp"), href: "https://d5mag.com/experience-old-delhis-golden-haveli-a-regal-retreat-that-hosted-gandhi/" },
  // #57
  { title: "House of Stepped Gardens", source: "habitusliving", image: webCover("57.House of Stepped Gardens_habitusliving.webp"), href: "https://www.habitusliving.com/projects/house-of-stepped-gardens-spaces-architects" },
  // #58
  { title: "House of Stepped Gardens", source: "architecturaldigest", image: webCover("58.House of Stepped Gardens_architecturaldigest.webp"), href: "https://www.architecturaldigest.in/story/this-34500-square-foot-kochi-home-is-full-of-stepped-gardens-terraces-and-courtyards-spaces-architects-ka/" },
  // #59
  { title: "Slender House", source: "VOLUME ZERO", image: webCover("59.Slender House_volumezero.webp"), href: "https://volzero.com/articles/view/6-x-18-slender-house-by-spaces-architectska" },
  // #60
  { title: "The Art House", source: "archdaily", image: webCover("60.thearthouse_archdaily.webp"), href: "https://www.archdaily.com/1092365/the-art-house-spaces-architects-at-ka" },
  // #61
  { title: "The Art House", source: "dezeen", image: webCover("61.thearthouse_dezeen.webp"), href: "https://www.dezeen.com/2026/05/29/art-house-new-delhi-residence-intense-customisation/" },
  // #62
  { title: "Swatantra Residence", source: "VOLUME ZERO", image: webCover("62. Swatantra Residence_volumezero.webp"), href: "https://volzero.com/articles/view/swatantra-residence-by-spaces-architectska" },
  // #63
  { title: "Step Maze House", source: "societyinteriorsdesign", image: webCover("63.stepmazehouse_societyinteriordesign.webp"), href: "https://societyinteriorsdesign.com/sm-house-by-spacesarchitectska-reimagines-a-challenging-trapezium-shaped-corner-plot-as-a-light-filled-family-sanctuary/" },
  // #64
  { title: "Step Maze House", source: "archilovers", image: webCover("64. stepmazehouse_archilovers.webp"), href: "https://www.archilovers.com/projects/346757/sm-house.html" },
  // #65
  { title: "Slender House", source: "BUILDOFY", image: slenderHouse, href: "https://www.buildofy.com/projects/slender-house-new-delhi" },
  // #66
  { title: "The Screen House", source: "homeadore", image: webCover("66. thescreenhouse_homeadore.webp"), href: "https://homeadore.com/2020/04/23/the-screen-house-by-spaces-architects/" },
  // #67
  { title: "The House of Dancing Screens", source: "Amazing Architecture", image: houseOfDancingScreens, href: "https://youtu.be/A6N7UdAfJ_Y?si=eA7KizSAe18TooQz" },
  // #68
  { title: "Screen House", source: "BUILDOFY", image: webCover("68. screenhouse_buildofy.webp"), href: "https://youtu.be/pBamZ2He6jg?si=pprgzJJByBclYk26" },
  // #69
  { title: "Swatantra Residence", source: "ArchitectureMind", image: webCover("69.Swatantra Residence_ArchitectureMind.webp"), href: "https://youtu.be/b9urP5vcYuM?si=UePGXv1KXJlWls7x" },
  // #70
  { title: "The House of Dancing Screens", source: "TERRA DESIGN", image: webCover("70. The House of Dancing Screens_terradesign.webp"), href: "https://youtu.be/D3AAvfFWXuY?si=Bo2kz8uoRU3Zyzuy" },
  // #71
  { title: "The House of Dancing Screens", source: "BUILDOFY", image: houseOfDancingScreens, href: "https://youtu.be/k2KdRRUAmtw?si=C1NLuNXrq1YH7uPp" },
  // #72
  { title: "TIMELESS HOUSES", source: "STIRWORLD", image: webCover("72. timelesshouses_stirworld.webp"), href: "https://www.stirworld.com/think-books-and-movies-book-release-timeless-houses-promoting-diversity-in-architecture" },
  // #73
  { title: "ARCHITECT'S OFFICE", source: "CONTEMPORIST", image: architectsOffice, href: "https://www.contemporist.com/architects-studio-by-spaces-architects/" },
  // #74
  { title: "TIMELESS HOUSES", source: "ARCHITECTURE LIVE", image: webCover("74. timelesshouses_architecturallive.webp"), href: "https://architecture.live/book-timeless-houses-kapil-aggarwal-lalwani-books-international/" },
  // #75
  { title: "Haveli Dharampura", source: "STYLE MAGAZINE", image: webCover("75.Haveli Dharampura_stylemagazine.webp"), href: "https://www.scmp.com/magazines/style/travel-food/article/3010133/welcome-havelie-dharampura-rare-oasis-amid-chaos-old" },
  // #76
  { title: "Haveli Dharampura", source: "Inhabitat", image: haveliDharampura, href: "https://inhabitat.com/beautifully-restored-135-year-old-building-revives-one-of-delhis-oldest-markets/" },
  // #77
  { title: "Adharshila Vatika Kindergarten", source: "OECD 50", image: webCover("77. Adharshila Vatika Kindergarten_oecd50.webp"), href: "http://www.architectureofearlychildhood.com/2011/10/oecd-provides-plenty-of-resources-and.html" },
  // #78
  { title: "Golden Haveli", source: "The Hotelier India", image: webCover("78. goldenhaveli_The Hotelier India.webp"), href: "https://www.hotelierindia.com/design/an-ode-to-the-rich-culture-of-chandni-chowk" },
  // #79
  { title: "Haveli Dharampura", source: "The Tiles of India", image: webCover("79.Haveli Dharampura_thetilesofindia.webp"), href: "https://www.thetilesofindia.com/global-architects/a-restoration-project-by-architect-kapil-aggarwal/" },
  // #80
  { title: "Screen House", source: "Homeadore", image: screenHouse, href: "https://homeadore.com/2020/04/23/the-screen-house-by-spaces-architects/" },
  // #81
  { title: "Screen House", source: "Tumblr", image: webCover("81. screenhouse_tumblr.webp"), href: "https://amazingarchitecturewebsite.tumblr.com/post/613482954478452736/the-screen-house-in-new-delhi-india-designed-by" },
  // #82
  { title: "ARCHITECT'S OFFICE", source: "Asian Paints", image: webCover("82. ARCHITECT_S OFFICE_asianpaints.webp"), href: "https://www.beautifulhomes.asianpaints.com/magazine/spaces/studios/in-the-studio-of-spaces-architects-ka.html" },
  // #83
  { title: "Haveli Dharampura", source: "Divisare", image: haveliDharampura, href: "https://divisare.com/projects/323239-spaces-architects-ka-bharat-aggarwal-haveli-dharampura" },
  // #84
  { title: "Exhibition Space at acetech", source: "ARCHITECTURE LIVE", image: webCover("84. Exhibition Space at acetech_architecturelive.webp"), href: "https://architecture.live/author/spaces-architects/" },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  // #85
  { title: "KRISHA'S RESIDENCE", source: "", image: krishasResidence, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  // #86
  { title: "J House", source: "", image: jHouse, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  // #87
  { title: "Imelda.inc", source: "", image: imeldaInc, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  // #88
  { title: "Intersect tile showroom", source: "", image: intersectTileShowroom, href: null },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  // #89
  { title: "Book-Timeless Houses", source: "", image: timelessHouses, href: null },
  // #90
  { title: "Article about Kapil Sir", source: "AsiaBizToday", image: webCover("90. Article about Kapil Sir_asiabiztoday.webp"), href: "https://www.asiabiztoday.com/tag/spaces-architectska/" },
  // #91
  { title: "Golden Haveli", source: "Architect and Interiors India", image: goldenHaveli, href: "https://www.architectandinteriorsindia.com/projects/step-back-in-time-to-relive-golden-havelis-splendor-in-chandni-chowk" },
  // #92
  { title: "Imelda.inc", source: "The Architect's diary", image: webCover("92. Imelda.inc_thearchitectsdiary.webp"), href: "https://thearchitectsdiary.com/contemporary-office-aura-wholeness-expresses-spaces-architectska/" },
  // #93
  { title: "ARCHITECT'S OFFICE", source: "Arch20", image: architectsOffice, href: "https://www.arch2o.com/architect-s-studio-kapil-aggarwal-spaces-architects/" },
  // #94
  { title: "Sobhti Residence", source: "Houzz", image: webCover("94. Sobhti Residence_houzz.webp"), href: "https://www.houzz.in/magazine/delhi-houzz-this-multigenerational-bungalow-is-a-zen-urban-oasis-stsetivw-vs~118475307" },
  // #95
  { title: "Exhibition Space at acetech", source: "The Architect's diary", image: webCover("95. Exhibition Space at acetech_The Architect_s diary.webp"), href: "https://thearchitectsdiary.com/legend-ply-veneers-exhibition-space-acetech-designed-by-spaces-architectska/" },
  // #96
  { title: "Top 10 Architecture Firms", source: "Design Asia Magazine", image: webCover("96. Top 10 Architecture Firms_designasiamagazine.webp"), href: "https://designasiamagazine.com/top-10-architecture-firms-in-delhi/" },
  // #97
  { title: "Best Architectural firm in Delhi", source: "re-thinkingthefuture", image: webCover("97. Best Architectural firm in Delhi_rethinkingthefuture.webp"), href: "https://www.re-thinkingthefuture.com/article/best-architects-in-delhi-ncr/" },
  // #98
  { title: "Top 100- Minds behind the best workplaces in India 2018", source: "Commercial design India", image: top100MindsBehindTheBestWorkplaces, href: "https://www.commercialdesignindia.com/lists/2965-kapil-aggarwal" },
  // #99
  { title: "Embracing the intangibles in Architecture", source: "The Design Story", image: webCover("99.Embracing the intangibles in Architecture_thedesignstory.webp"), href: "https://www.thedesignstory.com/blog/people/embracing-the-intangibles-in-architecture-with-spaces-architectska-storyofdesign" },
  // #100
  { title: "J House", source: "ARCHITECTURE LIVE", image: webCover("100. J House_architecturelive.webp"), href: "https://architecture.live/j-house-new-delhi-by-spaces-kapil-aggarwal/" },
  // #101
  { title: "Article about Kapil Sir", source: "WFM Media", image: webCover("101. Article about Kapil Sir_wfmmedia.webp"), href: "https://wfmmedia.com/writer/ar-kapil-aggarwal/" },
  // #102
  { title: "Swatantra Residence", source: "Divisare", image: swatantraResidence, href: "https://divisare.com/authors/2144789333-spaces-architects-ka" },
  // No portal and no link in the sheet — shown as a plain (non-clickable) card.
  // #103
  { title: "Haveli Dharampura", source: "", image: haveliDharampura, href: null },
  // #104
  { title: "SM House", source: "Archilovers", image: stepMazeHouse, href: "https://www.archilovers.com/projects/346757/sm-house.html" },
  // #105
  { title: "Article about Kapil Sir", source: "MGS Architecture", image: webCover("105. Article about Kapil Sir_MGS Architecture.webp"), href: "https://www.mgsarchitecture.in/architecture-design/architects-interior-designers/spaces-architects-ka-exploring-spaces.html" },
  // #106
  { title: "Slender House", source: "Architects Diary", image: slenderHouse, href: "https://thearchitectsdiary.com/tag/kapil-aggarwal/" },
  // #107
  { title: "House of Dancing Screens", source: "Archilovers", image: houseOfDancingScreens, href: "https://www.archilovers.com/projects/329835/the-house-of-dancing-screens.html" },
  // #108
  { title: "Golden Haveli", source: "Design Magazine", image: goldenHaveli, href: "https://d5mag.com/experience-old-delhis-golden-haveli-a-regal-retreat-that-hosted-gandhi/" },
  // #109
  { title: "Haveli Dharampura", source: "Travel and Leisure Asia", image: webCover("109. Haveli Dharampura_travelandleisureasia.webp"), href: "https://www.travelandleisureasia.com/in/hotels/india-hotels/check-in-haveli-dharampura-chandni-chowk-old-delhi/amp/" },
  // Sheet row 149 had "+A2:D149" pasted into the domain; removed it (goodhomes.co.in).
  // #110
  { title: "Apartment 88", source: "Good Homes India", image: webCover("110. Apartment 88_goodhomesindia.webp"), href: "https://www.goodhomes.co.in/home-decor/home-tours/the-emergence-of-a-brand-new-trend-unfolds-with-this-artistic-home-7940.amp" },
];

// ---- Magazines (click a cover to view the content image(s)) ----
// Files live in  .../assets/MAGAZINE_new/COVER  and  .../assets/MAGAZINE_new/internal
// File names are the ORIGINAL names, e.g.
//   https://assets.spacesarchitects-ka.com/assets/MAGAZINE_new/internal/84.webp
//   https://assets.spacesarchitects-ka.com/assets/MAGAZINE_new/COVER/1.%20THE%20DESIGN%20SOURCE.webp
// The helpers encode spaces / & / + etc. for the URL, so type the file name
// exactly as it appears in the folder (including the extension).
// content = one image (string) OR several (array, stacked top-to-bottom in the viewer).
// Leave content out for a plain, non-clickable cover.
const MAG_BASE = "https://assets.spacesarchitects-ka.com/assets/MAGAZINE_new";
const magCover = (file) => `${MAG_BASE}/COVER/${encodeURIComponent(file)}`;
const magPage = (file) => `${MAG_BASE}/internal/${encodeURIComponent(file)}`;
const magazines = [
  { title: "The Design Source", cover: magCover("1. THE DESIGN SOURCE.webp"), content: magPage("1. THE DESIGN SOURCE.webp") },
  { title: "IIA Awards 2016", cover: magCover("2. IIA AWARDS 2016.webp"), content: magPage("2. IIA AWARDS 2016.webp") },
  { title: "Inside Outside", cover: magCover("3. INSIDE OUT_.webp"), content: magPage("3. INSIDE OUT_.webp") },
  { title: "Home and Design Trends", cover: magCover("4. HOME TRENDS.webp"), content: magPage("4. HOME TRENDS.webp") },
  { title: "India Today Home", cover: magCover("5. INDIA TODAY HOME.webp"), content: magPage("5. INDIA TODAY HOME.webp") },
  { title: "Indian Architect & Builder", cover: magCover("6.webp"), content: magPage("6.webp") },
  { title: "Home and Design Trends", cover: magCover("7. HOME & DESIGN TRENDS.webp"), content: magPage("7. HOME & DESIGN TRENDS.webp") },
  { title: "MGS Architecture", cover: magCover("8.webp"), content: magPage("8.webp") },
  { title: "Design Today", cover: magCover("9. DESIGN TODAY.webp"), content: magPage("9. DESIGN TODAY.webp") },
  { title: "Inside Outside", cover: magCover("10. INSIDE OUTSIDE.webp"), content: magPage("10. INSIDE OUTSIDE.webp") },
  { title: "The Design Source", cover: magCover("11.DESIGN SOURCE.webp") },  // no content image yet
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
  { title: "Interiors India", cover: magCover("22.webp") },  // no content image yet
  { title: "Home and Design Trends", cover: magCover("23. HOME TRENDS.webp"), content: magPage("23. HOME TRENDS.webp") },
  { title: "Architecture Update", cover: magCover("24. ARCHITECTURE UPDATE_.webp"), content: magPage("24. ARCHITECTURE UPDATE_.webp") },
  { title: "Architecture + Design", cover: magCover("25.webp") },  // no content image yet
  { title: "IFJ", cover: magCover("26.webp"), content: magPage("26.webp") },
  { title: "India Mondo Arc", cover: magCover("27. INDIA MONDO ARC.webp") },  // no content image yet
  { title: "Design Today", cover: magCover("28.DESIGN TODAY.webp"), content: magPage("28.DESIGN TODAY.webp") },
  { title: "The Design Source", cover: magCover("29. DESIGN SOURCE.webp"), content: magPage("29. DESIGN SOURCE.webp") },
  { title: "Architecture + Design", cover: magCover("30. ARCHITECTURE+DESIGN.webp"), content: magPage("30. ARCHITECTURE+DESIGN.webp") },
  { title: "Architecture + Design", cover: magCover("31.ARCHITECTURE +DESIGN.webp"), content: magPage("31.ARCHITECTURE +DESIGN.webp") },
  { title: "Good Homes", cover: magCover("32. GOOD HOMES.webp"), content: magPage("32. GOOD HOMES.webp") },
  { title: "Ideal Home", cover: magCover("33. IDEAL HOME.webp"), content: magPage("33. IDEAL HOME.webp") },
  { title: "Inside Outside", cover: magCover("34. INSIDE OUTSIDE.webp"), content: magPage("34. INSIDE OUTSIDE.webp") },
  { title: "The Design Source", cover: magCover("35. THE DESIGN SOURCE.webp"), content: magPage("35. THE DESIGN SOURCE.webp") },
  { title: "Surfaces Reporter", cover: magCover("36. SURFACE REPORTERS.webp"), content: magPage("36. SURFACE REPORTERS.webp") },
  { title: "IIID Insite", cover: magCover("37. IIID INSITE.webp"), content: magPage("37. IIID INSITE.webp") },
  { title: "Architecture Update", cover: magCover("38. ARCHITECTURE UPDATE.webp"), content: magPage("38. ARCHITECTURE UPDATE.webp") },
  { title: "Home Review", cover: magCover("39. HOME REVIEW.webp"), content: magPage("39. HOME REVIEW.webp") },
  { title: "Insite", cover: magCover("40. INSITE.webp"), content: magPage("40. INSITE.webp") },
  { title: "India Today Home", cover: magCover("41. INDIA TODAY HOME.webp"), content: magPage("41. INDIA TODAY HOME.webp") },
  { title: "Mondo Arc", cover: magCover("42. MONDO ARC.webp"), content: magPage("42. MONDO ARC.webp") },
  { title: "IFJ", cover: magCover("43.webp"), content: magPage("43.webp") },
  { title: "The Design Source", cover: magCover("44. THE DESIGN SOURCE.webp"), content: magPage("44. THE DESIGN SOURCE.webp") },
  { title: "The Design Source", cover: magCover("45. DESIGN SOURCE.webp"), content: magPage("45. DESIGN SOURCE.webp") },
  { title: "Home Review", cover: magCover("46. HOME REVIEW.webp"), content: magPage("46. HOME REVIEW.webp") },
  { title: "Society Interiors", cover: magCover("47. SOCIETY INTERIORS.webp"), content: magPage("47. SOCIETY INTERIORS.webp") },
  { title: "Interiors and Decor", cover: magCover("48.INTERIORS AND DECOR.webp"), content: magPage("48.INTERIORS AND DECOR.webp") },
  { title: "Better Interiors", cover: magCover("49.BETTER INTERIORS.webp"), content: magPage("49.BETTER INTERIORS.webp") },
  { title: "Buildofy", cover: magCover("50. BUILDOFY.webp"), content: magPage("50. BUILDOFY.webp") },
  { title: "MGS Architecture", cover: magCover("51.MGS ARCHITECTURE.webp"), content: magPage("51.MGS ARCHITECTURE.webp") },
  { title: "Home and Design Trends", cover: magCover("52.HOME TRENDS.webp"), content: magPage("52.HOME TRENDS.webp") },
  { title: "The Design Source", cover: magCover("53.webp") },  // no content image yet
  { title: "Architecture Update", cover: magCover("54.webp") },  // no content image yet
  { title: "Home and Design Trends", cover: magCover("55. HOME TRENDS.webp"), content: magPage("55. HOME TRENDS.webp") },
  { title: "Inside Outside", cover: magCover("56.INSIDE OUTSIDE.webp"), content: magPage("56.INSIDE OUTSIDE.webp") },
  { title: "Society Interiors", cover: magCover("57.SOCIETY INTERIORS.webp"), content: magPage("57.SOCIETY INTERIORS.webp") },
  { title: "Architecture Update", cover: magCover("58.ARCHITECTURE UPDATE.webp"), content: magPage("58.ARCHITECTURE UPDATE.webp") },
  { title: "The Design Source", cover: magCover("59.THE DESIGN SOURCE.webp"), content: magPage("59.THE DESIGN SOURCE.webp") },
  { title: "Architectural Digest", cover: magCover("60.webp"), content: magPage("60.webp") },
  { title: "World Architecture Festival", cover: magCover("61.webp"), content: magPage("61.webp") },
  { title: "Design Detail", cover: magCover("62.DESIGN DETAIL.webp"), content: [magPage("62.DESIGN DETAIL.webp"), magPage("62(2).webp")] },
  { title: "Insite", cover: magCover("63.webp"), content: magPage("63.webp") },
  { title: "Design Detail", cover: magCover("64.webp") },  // no content image yet
  { title: "Surfaces Reporter", cover: magCover("65. SURFACE REPORTER.webp"), content: magPage("65. SURFACE REPORTER.webp") },
  { title: "India Today Home", cover: magCover("66.INDIA TODAY HOME.webp"), content: magPage("66.INDIA TODAY HOME.webp") },
  { title: "Architecture + Design", cover: magCover("67. ARCHITECTURE + DESIGN.webp"), content: magPage("67. ARCHITECTURE + DESIGN.webp") },
  { title: "Home and Design Trends", cover: magCover("68. HOME TRENDS.webp"), content: magPage("68. HOME TRENDS_.webp") },
  { title: "Design Today", cover: magCover("69.webp") },  // no content image yet
  { title: "Home Review", cover: magCover("70.HOME REVIEW.webp"), content: magPage("70.HOME REVIEW.webp") },
  { title: "Architecture+design", cover: magCover("71.ARCHITECTURE+DESIGN.webp"), content: magPage("71.ARCHITECTURE+DESIGN.webp") },
  { title: "Architectural Digest", cover: magCover("72.webp"), content: magPage("72.webp") },
  { title: "Insite", cover: magCover("73.webp"), content: magPage("73.webp") },
  { title: "CW Insite", cover: magCover("74.CW INSITE.webp"), content: magPage("74.CW INSITE.webp") },
  { title: "Home Review", cover: magCover("75.HOME REVIEW.webp"), content: magPage("75.HOME REVIEW.webp") },
  { title: "Design Today", cover: magCover("76.DESIGN TODAY.webp"), content: magPage("76.DESIGN TODAY.webp") },
  { title: "Society Interiors", cover: magCover("77.SOCIETY INTERIORS.webp"), content: magPage("77.SOCIETY INTERIORS.webp") },
  { title: "Design Today", cover: magCover("78.DESIGN TODAY.webp"), content: magPage("78.DESIGN TODAY.webp") },
  { title: "MGS Architecture", cover: magCover("79.webp"), content: magPage("79.webp") },
  { title: "Better Interiors", cover: magCover("80.BETTER INTERIORS.webp"), content: magPage("80.BETTER INTERIORS.webp") },
  { title: "Surfaces Reporter", cover: magCover("81.SURFACES REPORTER.webp"), content: magPage("81.SURFACES REPORTER.webp") },
  { title: "Forbes India", cover: magCover("82.FORBES INDIA.webp"), content: [magPage("82.FORBES INDIA.webp"), magPage("82(1).webp")] },
  { title: "Surfaces Reporter", cover: magCover("83.SURFACES REPORTER.webp"), content: magPage("83.SURFACES REPORTER.webp") },
  { title: "Insite", cover: magCover("84.webp"), content: magPage("84.webp") },
  { title: "CW Interiors", cover: magCover("85.CW INTERIORS.webp"), content: magPage("85.CW INTERIORS.webp") },
  { title: "The Design Source", cover: magCover("86.THE DESIGN SOURCE.webp"), content: magPage("86.THE DESIGN SOURCE.webp") },
];

// ---- Books (click a cover to view the content image(s)) ----
// File names on the asset host are the ORIGINAL names, e.g.
//   https://assets.spacesarchitects-ka.com/assets/BOOK_new/cover/18.webp
//   https://assets.spacesarchitects-ka.com/assets/BOOK_new/content/1.%20FOAID%202023.webp
// The helpers below encode spaces / & / + etc. for the URL, so just type the
// file name exactly as it appears in the folder (including the extension).
const BOOK_BASE = "https://assets.spacesarchitects-ka.com/assets/BOOK_new";
const bookCover = (file) => `${BOOK_BASE}/cover/${encodeURIComponent(file)}`;
const bookPage = (file) => `${BOOK_BASE}/content/${encodeURIComponent(file)}`;
const books = [
  { title: "FOAID 2023", cover: bookCover("1. FOAID 2023.webp"), content: bookPage("1. FOAID 2023.webp") },
  { title: "FOAID 2024", cover: bookCover("2. FOAID 2024.webp"), content: bookPage("2. FOAID 2024.webp") },
  { title: "Hettich", cover: bookCover("3. HETTICH.webp"), content: [bookPage("3. HETTICH.webp"), bookPage("3. HETTICH img2.webp"), bookPage("3. HETTICH img3.webp")] },
  { title: "Eden for Boys & Girls", cover: bookCover("4. EDEN FOR BOYS & GIRLS.webp"), content: bookPage("4. EDEN FOR BOYS & GIRLS.webp") },
  { title: "Big Design for Small Workspaces", cover: bookCover("5. BIG DESIGN FOR SMALL WORKSPACES.webp"), content: bookPage("5. BIG DESIGN FOR SMALL WORKSPACES.webp") },
  { title: "A&D", cover: bookCover("6.webp"), content: bookPage("6.webp") },
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
  { title: "A+C", cover: bookCover("18.webp"), content: [bookPage("18.webp"), bookPage("18(2).webp")] },
  { title: "Custom Office", cover: bookCover("19.CUSTOM OFFICE.webp"), content: bookPage("19. CUSTOM OFFICE.webp") },
  { title: "FOAID 2018", cover: bookCover("20. FOAID 2018.webp"), content: bookPage("20. FOAID 2018.webp") },
  { title: "S1 Residences", cover: bookCover("21. S1 RESIDENCES.webp"), content: bookPage("21. S1 RESIDENCES.webp") },
  { title: "Fifty Five", cover: bookCover("22. FIFTY FIVE.webp") },  // no content image yet
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
        {/* Web cards use the original blog-card size (square image box, cover-cropped). */}
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