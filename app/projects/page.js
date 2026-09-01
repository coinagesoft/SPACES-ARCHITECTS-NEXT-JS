import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { assets } from "@/config/assets";

export const metadata = { title: "Projects — Spaces Architects@ka" };

export default function ProjectsPage() {
  return (
    <main>
      <SiteChrome />

      <div className="pt-28 md:pt-32" />

      <section className="site-container pb-20 md:pb-28">
        <h1 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">
          Projects
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {assets.projects.map((p) => (
            <ProjectCard
              key={p.id}
              image={p.image}
              name={p.name}
              excerpt={p.excerpt}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
