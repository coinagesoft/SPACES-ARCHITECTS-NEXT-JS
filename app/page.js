import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NewsCard from "@/components/NewsCard";
import FeaturedIn from "@/components/FeaturedIn";
import { assets } from "@/config/assets";
import { homeCopy } from "@/config/site";

export default function HomePage() {
  return (
    <main>
      <SiteChrome dark />

      {/* Hero */}
      <section className="relative w-full h-[85vh] min-h-[560px]">
        <Image
          src={assets.home.heroImage}
          alt={assets.home.heroTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-10 left-0 right-0 site-container">
          <h1 className="text-white text-3xl md:text-5xl tracking-widest2 uppercase">
            {assets.home.heroTitle}
          </h1>
          <p className="text-white text-lg md:text-2xl tracking-widest2 uppercase mt-1">
            {assets.home.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="site-container py-16 md:py-20 space-y-6 max-w-6xl">
        {homeCopy.intro.map((p, i) => (
          <p
            key={i}
            className="text-xs md:text-sm leading-7 tracking-wide text-muted"
          >
            {p}
          </p>
        ))}
      </section>

      {/* Featured Projects */}
      <section className="site-container pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {assets.featuredProjects.map((p) => (
            <ProjectCard key={p.name} image={p.image} name={p.name} />
          ))}
        </div>
      </section>

      {/* Featured News */}
      <section className="site-container pb-16 md:pb-24">
        <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">
          Featured News
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {assets.featuredNews.map((n) => (
            <NewsCard key={n.name} image={n.image} name={n.name} source={n.source} />
          ))}
        </div>
      </section>

      <FeaturedIn />

      <Footer />
    </main>
  );
}
