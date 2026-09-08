import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import FeaturedIn from "@/components/FeaturedIn";
import { assets } from "@/config/assets";
import { homeCopy } from "@/config/site";

export default function HomePage() {
  return (
    <main>
      <SiteChrome dark home />
      <HeroSlider projects={assets.projects.slice(0, 4)} />
      <section className="site-container py-16 md:py-20 space-y-6 max-w-6xl">
        {homeCopy.intro.map((paragraph, index) => (
          <p key={index} className="text-xs md:text-sm leading-7 tracking-wide text-muted">{paragraph}</p>
        ))}
      </section>
      <section className="site-container pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">Featured Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {assets.featuredProjects.map((project) => <ProjectCard key={project.name} {...project} />)}
        </div>
      </section>
      <section className="site-container pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">Featured News</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {assets.featuredNews.map((news) => <NewsCard key={news.name} {...news} />)}
        </div>
      </section>
      <FeaturedIn />
      <Footer />
    </main>
  );
}
