import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import FeaturedIn from "@/components/FeaturedIn";
import { assets } from "@/assets";
import { assetImage } from "@/config/assets";
import { homeCopy } from "@/config/site";

// Full phrases that should be highlighted, exactly as they appear in the copy.
// Order matters if one phrase could be a substring of another (longest first).
const HIGHLIGHT_PHRASES = [
  "emotional journey, beginning with the character of a place and the aspirations",
  "ArchDaily, Architectural Digest, UNESCO, World Architecture Community",
];

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Build a single regex with all phrases as capture groups so split() keeps them in the result.
const HIGHLIGHT_REGEX = new RegExp(
  `(${HIGHLIGHT_PHRASES.map(escapeRegExp).join("|")})`,
  "gi"
);

function renderIntroParagraph(paragraph) {
  const segments = paragraph.split(HIGHLIGHT_REGEX);

  return segments.map((segment, index) => {
    const isHighlighted = HIGHLIGHT_PHRASES.some(
      (phrase) => phrase.toLowerCase() === segment.toLowerCase()
    );

    return isHighlighted ? (
      <span key={`${segment}-${index}`} className="text-[#fea50b]">
        {segment}
      </span>
    ) : (
      <span key={`${segment}-${index}`}>{segment}</span>
    );
  });
}

const homeHeroProjects = [
  {
    id: "haveli-dharampura",
    name: "Haveli Dharampura",
    image: assetImage("home page slider/PC/1. HAVELI DHARAMPURA.webp"),
    mobileImage: assetImage("home page slider/MOBILE/1. HAVELI DHARAMPURA.webp"),
  },
  {
    id: "art-house",
    name: "Art House",
    image: assetImage("home page slider/PC/2. ART HOUSE.webp"),
    mobileImage: assetImage("home page slider/MOBILE/2. ART HOUSE.webp"),
  },
  {
    id: "house-of-stepped-garden",
    name: "House of Stepped Garden",
    image: assetImage("home page slider/PC/3. HOUSE OF STEPPED GARDEN.webp"),
    mobileImage: assetImage("home page slider/MOBILE/House of stepped garden.webp"),
  },
  {
    id: "house-of-dancing-screens",
    name: "House of Dancing Screens",
    image: assetImage("home page slider/PC/4. HOUSE OF DANCING SCREENS.webp"),
    mobileImage: assetImage("home page slider/MOBILE/4. HOUSE OF DANCING SCREENS.webp"),
  },
  {
    id: "intersext-showroom",
    name: "Intersekt Showroom",
    image: assetImage("home page slider/PC/5. INTERSEKT SHOWROOM.webp"),
    mobileImage: assetImage("home page slider/MOBILE/5. INTERSEKT SHOWROOM.webp"),
  },
  {
    id: "golden-haveli",
    name: "Golden Haveli",
    image: assetImage("home page slider/PC/6. GOLDEN HAVELI.webp"),
    mobileImage: assetImage("home page slider/MOBILE/6.GOLDEN HAVELI.webp"),
  },
  // {
  //   id: "house-of-stepped-garden",
  //   name: "House of Stepped Garden",
  //   image: assetImage("home page slider/PC/7. HOUSE OF STEPPED GARDEN.webp"),
  //   mobileImage: assetImage("home page slider/MOBILE/HOUSE OF STEPPED GARDEN.webp"),
  // },
  // {
  //   id: "art-house",
  //   name: "Art House",
  //   image: assetImage("home page slider/PC/8. ARTHOUSE 2.webp"),
  //   mobileImage: assetImage("home page slider/MOBILE/ART HOUSE.webp"),
  // },
  {
    id: "swatantra-residence",
    name: "Swatantra Residence",
    image: assetImage("home page slider/PC/9. SWATANTRA REDISENCE.webp"),
    mobileImage: assetImage("home page slider/MOBILE/SWATANTRA RESIDENCE.webp"),
  },
  {
    id: "heritage-park",
    name: "Heritage Park",
    image: assetImage("home page slider/PC/10. HERITAGE PARK.webp"),
    mobileImage: assetImage("home page slider/MOBILE/HERITAGE PARK.webp"),
  },
  {
    id: "library-house",
    name: "Library House",
    image: assetImage("home page slider/PC/11. LIBRARY HOUSE.webp"),
    mobileImage: assetImage("home page slider/MOBILE/7. LIBRARY HOUSE.webp"),
  },
  // {
  //   id: "house-of-stepped-garden",
  //   name: "House of Stepped Garden",
  //   image: assetImage("home page slider/PC/12. HOUSE OF STEPPED GARDEN.webp"),
  //   mobileImage: assetImage("home page slider/MOBILE/HOUSE OF STEPPED GARDEN.webp"),
  // },
  {
    id: "slender-house",
    name: "Slender House",
    image: assetImage("home page slider/PC/13. SLENDER HOUSE.webp"),
    mobileImage: assetImage("home page slider/MOBILE/SLENDER HOUSE.webp"),
  },
  {
    id: "step-maze",
    name: "Step Maze House",
    image: assetImage("home page slider/PC/14. STEPMAZE HOUSE.webp"),
    mobileImage: assetImage("home page slider/MOBILE/STEP MAZE HOUSE.webp"),
  },
];

export default function HomePage() {
  return (
    <main>
      <SiteChrome dark home />
      <HeroSlider projects={homeHeroProjects} />
      <section className="site-container py-8 md:py-12">
  <div className="mb-6 flex justify-center">
    <h2 className="text-center text-[14px] font-medium tracking-[0.16em] text-[#6b6b6b] md:text-[16px]">
      Architecture that is Experienced, Felt and Remembered
    </h2>
  </div>

  <div className="space-y-3">
    {homeCopy.intro.map((paragraph, index) => (
      <p
        key={index}
        className="text-[11px] leading-[1.65] tracking-[0.14em] text-[#6b6b6b] md:text-[14px]"
      >
        {renderIntroParagraph(paragraph)}
      </p>
    ))}
  </div>
</section>
      <section className="site-container pb-14 md:pb-20">
        <h2 className="mb-4 text-[20px] font-normal uppercase tracking-[0.16em] text-[#6B6B6B] md:mb-4 md:text-[28px]">
          Featured Projects
        </h2>
        <FeaturedCarousel items={assets.featuredProjects} type="project" />
      </section>
      <section className="site-container pb-8 md:pb-12">
        <h2 className="mb-4 text-[24px] font-normal uppercase tracking-[0.16em] text-[#6B6B6B] md:mb-4 md:text-[28px]">
          Featured News
        </h2>
        <FeaturedCarousel items={assets.featuredNews} type="news" />
      </section>
      <div>
        <FeaturedIn />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}