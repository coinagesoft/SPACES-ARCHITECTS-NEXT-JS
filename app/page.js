import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import FeaturedIn from "@/components/FeaturedIn";
import { assets } from "@/config/assets";
import { homeCopy } from "@/config/site";

// Full phrases that should be highlighted, exactly as they appear in the copy.
// Order matters if one phrase could be a substring of another (longest first).
const HIGHLIGHT_PHRASES = [
  "EMOTIONAL JOURNEY, BEGINNING WITH THE CHARACTER OF A PLACE AND THE ASPIRATIONS",
  "ARCHDAILY, ARCHITECTURAL DIGEST, UNESCO, WORLD ARCHITECTURE COMMUNITY",
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

export default function HomePage() {
  return (
    <main>
      <SiteChrome dark home />
      <HeroSlider projects={assets.projects.slice(0, 4)} />
      <section className="site-container py-16 md:py-20">
        <div className="space-y-7">
          {homeCopy.intro.map((paragraph, index) => (
            <p key={index} className="text-[11px] uppercase leading-[1.65] tracking-[0.14em] text-[#7d7d7d] md:text-[12px]">
              {renderIntroParagraph(paragraph)}
            </p>
          ))}
        </div>
      </section>
      <section className="site-container pb-16 md:pb-24">
        <h2 className="mb-8 text-[20px] font-medium uppercase tracking-[0.16em] text-ink md:mb-10 md:text-[24px]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
          {assets.featuredProjects.map((project) => <ProjectCard key={project.name} {...project} />)}
        </div>
      </section>
      <section className="site-container pb-16 md:pb-24">
        <h2 className="mb-8 text-[20px] font-medium uppercase tracking-[0.16em] text-ink md:mb-10 md:text-[24px]">
          Featured News
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
          {assets.featuredNews.map((news) => <NewsCard key={news.name} {...news} />)}
        </div>
      </section>
      <FeaturedIn />
      <Footer />
    </main>
  );
}