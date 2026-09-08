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

import haveliDharampuraImage from "./assets/haveli dharmapura.webp";
import aboutHeroImage from "./assets/About_hero.jpg";
import kapilPhoto from "./assets/Kapil.jpg";
import featuredProject1 from "./assets/Featured Project/1.jpg";
import featuredProject2 from "./assets/Featured Project/2.jpg";
import featuredProject3 from "./assets/Featured Project/3.jpg";
import featuredProject4 from "./assets/Featured Project/4.jpg";
import featuredNews1 from "./assets/Featured News/1.png";
import featuredNews2 from "./assets/Featured News/2.png";
import featuredNews3 from "./assets/Featured News/3.png";
import featuredNews4 from "./assets/Featured News/4.png";
import projectImg1 from "./assets/projects/1.jpg";
import projectImg2 from "./assets/projects/2.jpg";
import projectImg3 from "./assets/projects/3.png";
import projectImg4 from "./assets/projects/4.jpg";
import projectImg5 from "./assets/projects/5.jpg";
import projectImg6 from "./assets/projects/6.jpg";
import projectImg7 from "./assets/projects/7.jpg";
import projectImg8 from "./assets/projects/8.jpg";
import projectImg9 from "./assets/projects/9.png";
import projectImg10 from "./assets/projects/10.png";
import projectImg11 from "./assets/projects/11.png";
import projectImg12 from "./assets/projects/12.png";
import projectImg13 from "./assets/projects/13.jpg";
import projectImg14 from "./assets/projects/14.jpg";
import projectImg15 from "./assets/projects/15.jpg";
import projectImg16 from "./assets/projects/16.jpg";
import projectImg17 from "./assets/projects/17.jpg";
import projectImg18 from "./assets/projects/18.png";
import projectImg19 from "./assets/projects/19.jpg";
import projectImg20 from "./assets/projects/20.jpg";
import projectImg21 from "./assets/projects/21.jpg";
import haveliGallery1 from "./assets/Final-1-6.webp";
import haveliGallery2 from "./assets/Final-2-6.webp";
import haveliGallery3 from "./assets/Final-3-6.webp";
import haveliGallery4 from "./assets/Final-4-6.webp";
import haveliGallery6 from "./assets/Final-6-3.webp";
import haveliGallery7 from "./assets/Final-7-2.webp";
import haveliGallery8 from "./assets/Final-8-1.webp";
import featuredIn1 from "./assets/Home Page/1.png";
import featuredIn2 from "./assets/Home Page/2.png";
import featuredIn3 from "./assets/Home Page/3.png";
import featuredIn4 from "./assets/Home Page/4.png";
import featuredIn5 from "./assets/Home Page/5.png";
import featuredIn6 from "./assets/Home Page/6.png";
import featuredIn7 from "./assets/Home Page/7.png";
import featuredIn8 from "./assets/Home Page/8.png";
import featuredIn9 from "./assets/Home Page/9.png";
import featuredIn10 from "./assets/Home Page/10.png";
import featuredIn11 from "./assets/Home Page/11.png";
import featuredIn12 from "./assets/Home Page/12.png";
import featuredIn13 from "./assets/Home Page/13.png";
import featuredIn14 from "./assets/Home Page/14.png";
import featuredIn15 from "./assets/Home Page/15.png";
import featuredIn16 from "./assets/Home Page/16.png";
import featuredIn17 from "./assets/Home Page/17.png";
import featuredIn18 from "./assets/Home Page/18.png";
import awardMark1 from "./assets/awards/1.png";
import awardMark2 from "./assets/awards/2.png";
import awardMark3 from "./assets/awards/3.png";
import awardMark4 from "./assets/awards/4.png";
import awardMark5 from "./assets/awards/5.png";
import awardMark6 from "./assets/awards/6.png";
import awardMark7 from "./assets/awards/7.png";
import awardMark8 from "./assets/awards/8.png";
import awardMark9 from "./assets/awards/9.png";
import awardMark10 from "./assets/awards/10.png";

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
        heroImage: aboutHeroImage,
        heroImages: [
            unsplash("photo-1497366216548-37526070297c", 1200, 700),
            unsplash("photo-1497366811353-6870744d04b2", 900, 700),
            unsplash("photo-1600607687920-4e2a09cf159d", 1000, 700),
        ],
        founderPhoto: kapilPhoto,
    },

    // ---- Featured Projects (home grid) ----
    featuredProjects: [{
            name: "Art House",
            image: featuredProject1,
        },
        {
            name: "House of Stepped Garden",
            image: featuredProject2,
        },
        {
            name: "Library House",
            image: featuredProject3,
        },
        {
            name: "Swatantra Residence",
            image: featuredProject4,
        },
    ],

    // ---- Featured News (home grid) ----
    featuredNews: [{
            name: "Dezeen Exclusive Feature",
            source: "Dezeen",
            image: featuredNews1,
        },
        {
            name: "Architectural Digest India Feature",
            source: "AD",
            image: featuredNews2,
        },
        {
            name: "Gandhi Darshan Park Inauguration",
            source: "Press",
            image: featuredNews3,
        },
        {
            name: "Golden Haveli Inauguration",
            source: "Press",
            image: featuredNews4,
        },
    ],

    // ---- Featured In (press logo strip) ----
    featuredIn: [
        { name: "Dezeen", image: featuredIn1 },
        { name: "RTF", image: featuredIn2 },
        { name: "Beautiful Homes", image: featuredIn3 },
        { name: "AΔ", image: featuredIn4 },
        { name: "ArchDaily", image: featuredIn5 },
        { name: "NDTV", image: featuredIn6 },
        { name: "India Today", image: featuredIn7 },
        { name: "The Print", image: featuredIn8 },
        { name: "HT", image: featuredIn9 },
        { name: "TOI", image: featuredIn10 },
        { name: "Architectural Digest", image: featuredIn11 },
        { name: "UIA", image: featuredIn12 },
        { name: "UNESCO", image: featuredIn13 },
        { name: "Architizer", image: featuredIn14 },
        { name: "Curly Tales", image: featuredIn15 },
        { name: "The Indian Express", image: featuredIn16 },
        { name: "Habitus Living", image: featuredIn17 },
        { name: "ABP Live", image: featuredIn18 },
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

    // ---- Projects gallery page ----
    // Numbered site photos (1.jpg … 21.jpg), in serial order.
    // orientation: "landscape" | "portrait" — set this to match each photo's
    // real shape. It doesn't affect whether gaps appear (the masonry CSS
    // handles that automatically) — it's just a hook you can style against
    // (see .portrait / .landscape in page.module.css) if you want, say,
    // portrait shots to sit narrower, or landscape ones wider.
    // span: "full" — optional. Set on any image to break it out to the full
    // gallery width for one turn (like the occasional full-bleed shot on the
    // Canva reference page). Leave it off for normal masonry images.
    projectGallery: [
        { file: "1.jpg", image: projectImg1, orientation: "landscape" },
        { file: "2.jpg", image: projectImg2, orientation: "portrait" },
        { file: "3.png", image: projectImg3, orientation: "portrait" },
        { file: "4.jpg", image: projectImg4, orientation: "landscape" },
        { file: "5.jpg", image: projectImg5, orientation: "landscape" },
        { file: "6.jpg", image: projectImg6, orientation: "landscape" },
        { file: "7.jpg", image: projectImg7, orientation: "portrait" },
        { file: "8.jpg", image: projectImg8, orientation: "landscape" },
        { file: "9.png", image: projectImg9, orientation: "portrait" },
        { file: "10.png", image: projectImg10, orientation: "landscape" },
        { file: "11.png", image: projectImg11, orientation: "portrait" },
        { file: "12.png", image: projectImg12, orientation: "landscape" },
        { file: "13.jpg", image: projectImg13, orientation: "portrait" },
        { file: "14.jpg", image: projectImg14, orientation: "landscape" },
        { file: "15.jpg", image: projectImg15, orientation: "landscape" },
        { file: "16.jpg", image: projectImg16, orientation: "portrait" },
        { file: "17.jpg", image: projectImg17, orientation: "landscape" },
        { file: "18.png", image: projectImg18, orientation: "portrait" },
        { file: "19.jpg", image: projectImg19, orientation: "landscape" },
        { file: "20.jpg", image: projectImg20, orientation: "landscape" },
        { file: "21.jpg", image: projectImg21, orientation: "portrait" },
    ],

    // ---- Projects / Blog grid page ----
    projects: [{
            id: "haveli-dharampura",
            image: haveliDharampuraImage,
            name: "Haveli Dharampura",
            excerpt: "Delhi — Heritage Restoration & Hospitality",
        },
        {
            id: "art-house",
            name: "Art House",
            excerpt: "A residence conceived around a sculptural steel staircase, where art, light and landscape shape every threshold.",
            image: unsplash("photo-1600585154526-990dced4db0d", 900, 900),
        },
        {
            id: "house-of-stepped-garden",
            name: "House of Stepped Garden",
            excerpt: "Terraced greenery cascades down the facade of this Kochi home, blurring the line between architecture and landscape.",
            image: unsplash("photo-1600596542815-ffad4c1539a9", 900, 900),
        },
        {
            id: "library-house",
            name: "Library House",
            excerpt: "Timber joinery and quiet reading nooks define a home built around the ritual of books and natural light.",
            image: unsplash("photo-1600210492486-724fe5c67fb0", 900, 900),
        },
        {
            id: "swatantra-residence",
            name: "Swatantra Residence",
            excerpt: "An interior of warm wood and soft daylight, designed as a series of intimate, memory-laden living moments.",
            image: unsplash("photo-1600607687920-4e2a09cf159d", 900, 900),
        },
        {
            id: "sectional-study",
            name: "Sectional Study",
            excerpt: "A hand-drawn section illustrates the vertical choreography of light, stair and courtyard across four levels.",
            image: unsplash("photo-1600210491892-03d54c0aaf87", 900, 900),
        },
        {
            id: "heritage-textile-room",
            name: "Heritage Textile Room",
            excerpt: "A restored interior where patterned textiles and vintage lighting speak to the building's layered history.",
            image: unsplash("photo-1616486338812-3dadae4b4ace", 900, 900),
        },
        {
            id: "courtyard-veranda",
            name: "Courtyard Veranda",
            excerpt: "A resident pauses at the veranda's edge, framed by timber louvres and a canopy of overhanging trees.",
            image: unsplash("photo-1600566752355-35792bedcfea", 900, 900),
        },
        {
            id: "marble-living-room",
            name: "Marble Living Room",
            excerpt: "Book-matched marble and a restrained material palette bring a quiet monumentality to the living space.",
            image: unsplash("photo-1615873968403-89e068629265", 900, 900),
        },
    ],

    // ---- Blog page (editorial / journal entries) ----
    blog: [{
            id: "emotional-architecture",
            title: "Designing for Emotion: Our Approach to Every Project",
            date: "Aug 2026",
            image: unsplash("photo-1600585154340-be6161a56a0c", 900, 700),
            excerpt: "Every project begins as a story — how we let context, light and material shape a distinct identity.",
        },
        {
            id: "heritage-restoration",
            title: "Bringing Haveli Dharampura Back to Life",
            date: "Jun 2026",
            image: unsplash("photo-1497366811353-6870744d04b2", 900, 700),
            excerpt: "Inside the UNESCO award-winning restoration that reconnected Old Delhi with its living traditions.",
        },
        {
            id: "material-palette",
            title: "Stone, Timber, Light: Building a Material Language",
            date: "Mar 2026",
            image: unsplash("photo-1600566753190-17f0baa2a6c3", 900, 700),
            excerpt: "How the studio selects and sequences materials to create warmth, texture and a sense of permanence.",
        },
    ],
    // ---- Haveli Dharampura project page: hero + full photo gallery ----
    haveliDharampura: {
        hero: haveliDharampuraImage,
        gallery: [
            { type: "pair", images: [haveliGallery1, haveliGallery2] },
            { type: "full", image: haveliGallery3 },
            { type: "pair", images: [haveliGallery4, haveliGallery6] },
            { type: "full", image: haveliGallery7 },
            { type: "full", image: haveliGallery8 },
        ],
    },
};

export default assets;