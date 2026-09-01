import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
import { aboutCopy } from "@/config/site";

export const metadata = { title: "Studio — Spaces Architects@ka" };

export default function AboutPage() {
  return (
    <main>
      <SiteChrome dark />

      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[480px]">
        <Image
          src={assets.about.heroImage}
          alt="Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute bottom-10 left-0 right-0 site-container">
          <h1 className="text-white text-4xl md:text-6xl tracking-widest2 uppercase">
            {aboutCopy.heroTitle}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="site-container py-16 md:py-20 max-w-6xl space-y-6">
        <p className="text-xs md:text-sm tracking-widest2 uppercase text-accent">
          {aboutCopy.kicker}
        </p>
        {aboutCopy.intro.map((p, i) => (
          <p key={i} className="text-xs md:text-sm leading-7 tracking-wide text-muted">
            {p}
          </p>
        ))}
        <p className="text-xs md:text-sm tracking-widest2 uppercase text-accent">
          {aboutCopy.quote}
        </p>
      </section>

      {/* Founder */}
      <section className="site-container pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <div className="relative w-full aspect-[3/4] max-w-md">
          <Image
            src={assets.about.founderPhoto}
            alt={aboutCopy.founder.name}
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-6">
            Founder: <span className="text-accent">{aboutCopy.founder.name}</span>
          </h2>
          <div className="space-y-5">
            {aboutCopy.founder.bio.map((p, i) => (
              <p key={i} className="text-xs md:text-sm leading-7 tracking-wide text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="contact" className="site-container pb-20 md:pb-28">
        <h2 className="text-xl md:text-2xl tracking-widest2 uppercase text-accent mb-10 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutCopy.team.map((member, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square bg-line mb-4" />
              <p className="text-sm tracking-wide">{member.name}</p>
              <p className="text-xs text-faint uppercase tracking-wide mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
