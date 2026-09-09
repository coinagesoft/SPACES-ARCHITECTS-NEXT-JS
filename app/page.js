"use client";

import { useEffect, useRef } from "react";
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

// How long (ms) to ignore further scroll input while a snap animation is running.
// Bump this up if your sections are tall and the smooth-scroll takes longer to finish.
const SNAP_LOCK_MS = 900;

// Minimum wheel/touch delta before we treat it as an intentional scroll gesture.
const SCROLL_THRESHOLD = 8;

export default function HomePage() {
  // Order the scroll-jack will step through, one section per scroll:
  //   1st scroll -> introRef (paragraph section)
  //   2nd scroll -> projectsRef (Featured Projects)
  //   3rd scroll -> newsRef (Featured News)
  //   4th scroll -> featuredInRef (Featured In)
  //   5th scroll -> footerRef (Footer)
  // NOTE: your original request skipped a "4th" stop and jumped straight from
  // Featured Projects (2nd) to Featured In (3rd) to Footer (5th). That leaves
  // Featured News with no assigned step, so I've placed it at step 3 and
  // shifted Featured In/Footer to 4/5 instead, giving every section on the
  // page a stop. If you actually want Featured News skipped entirely (scroll
  // straight past it, no snap), just remove `newsRef` from the `sections`
  // array below and delete its ref from the JSX.
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const newsRef = useRef(null);
  const featuredInRef = useRef(null);
  const footerRef = useRef(null);

  const sections = [introRef, projectsRef, newsRef, featuredInRef, footerRef];

  const stepRef = useRef(0); // 0 = top/hero, 1..sections.length = which section we've snapped to
  const isLockedRef = useRef(false); // true while a snap animation is in flight
  const unlockedRef = useRef(false); // true once user has scrolled past the last section
  const touchStartYRef = useRef(0);

  useEffect(() => {
    const scrollToStep = (step) => {
      isLockedRef.current = true;
      if (step === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = sections[step - 1].current;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.setTimeout(() => {
        isLockedRef.current = false;
      }, SNAP_LOCK_MS);
    };

    const handleDelta = (delta, e) => {
      if (unlockedRef.current) return; // past the last section, let native scrolling take over
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;
      if (isLockedRef.current) {
        e.preventDefault();
        return;
      }

      const goingDown = delta > 0;

      if (goingDown) {
        if (stepRef.current < sections.length) {
          e.preventDefault();
          stepRef.current += 1;
          scrollToStep(stepRef.current);
          if (stepRef.current === sections.length) {
            // Reached the footer stop — release control so the user can keep
            // scrolling normally past the end of the page.
            unlockedRef.current = true;
          }
        }
        // if already at the last defined step, fall through and let it unlock
        // naturally on the next gesture via unlockedRef above.
      } else {
        if (stepRef.current > 0) {
          e.preventDefault();
          stepRef.current -= 1;
          scrollToStep(stepRef.current);
        }
      }
    };

    const handleWheel = (e) => handleDelta(e.deltaY, e);

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const delta = touchStartYRef.current - currentY; // swipe up => positive => scroll down
      handleDelta(delta, e);
      if (Math.abs(delta) >= SCROLL_THRESHOLD) {
        touchStartYRef.current = currentY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [sections]);

  return (
    <main>
      <SiteChrome dark home />
      <HeroSlider projects={assets.projects.slice(0, 4)} />
      <section ref={introRef} className="site-container py-8 md:py-12">
        <div className="space-y-7">
          {homeCopy.intro.map((paragraph, index) => (
            <p key={index} className="text-[11px] uppercase leading-[1.65] tracking-[0.14em] text-[#7d7d7d] md:text-[12px]">
              {renderIntroParagraph(paragraph)}
            </p>
          ))}
        </div>
      </section>
      <section ref={projectsRef} className="site-container pb-8 md:pb-12">
        <h2 className="mb-4 text-[20px] font-normal uppercase tracking-[0.16em] text-ink md:mb-4 md:text-[28px]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-14">
          {assets.featuredProjects.map((project) => <ProjectCard key={project.name} {...project} />)}
        </div>
      </section>
      <section ref={newsRef} className="site-container pb-8 md:pb-12">
        <h2 className="mb-4 text-[24px] font-normal uppercase tracking-[0.16em] text-ink md:mb-4 md:text-[28px]">
          Featured News
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-14">
          {assets.featuredNews.map((news) => <NewsCard key={news.name} {...news} />)}
        </div>
      </section>
      <div ref={featuredInRef}>
        <FeaturedIn />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
}