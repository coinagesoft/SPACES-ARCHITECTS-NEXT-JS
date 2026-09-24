"use client";

import { useEffect, useMemo, useRef } from "react";
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

const homeHeroProjects = [
  {
    id: "haveli-dharampura",
    name: "Haveli Dharampura",
    image: assetImage("projects/haveli/haveli_27.jpg"),
  },
  {
    id: "art-house",
    name: "Art House",
    image: assetImage("projects/ART_HOUSE/3_4/26.webp"),
  },
  {
    id: "house-of-stepped-garden",
    name: "House of Stepped Garden",
    image: assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(11).webp"),
  },
  {
    id: "library-house",
    name: "Library House",
    image: assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3042.webp"),
  },
  {
    id: "golden-haveli",
    name: "Golden Haveli",
    image: assetImage("projects/GOLDEN-HAVELL/3_4/new/17.webp"),
  },
  {
    id: "heritage-park",
    name: "Heritage Park",
    image: assetImage("projects/HERITAGE-PARK/cover/Cover Image.webp"),
  },
  {
    id: "swatantra-residence",
    name: "Swatantra Residence",
    image: assetImage("projects/SWATANTRA-RESIDENCE/PHOTOGRAPH/5. Ground Living Room (5).jpg"),
  },
  {
    id: "house-of-dancing-screens",
    name: "House of Dancing Screens",
    image: assetImage("projects/HOUSE-OF-DANCING-SCREENS/photographs/BHA_1648.webp"),
  },
  {
    id: "step-maze",
    name: "Step Maze",
    image: assetImage("projects/STEP-MAZE/photographs/6.Staircase Lobby.webp"),
  },
  {
    id: "slender-house",
    name: "Slender House",
    image: assetImage("projects/Slender-House/photographs/15. Entrance (Second Floor).webp"),
  },
  {
    id: "Intersekt-showroom",
    name: "Intersekt Showroom",
    image: assetImage("projects/INTERSEXT-SHOWROOM/photographs/4 Facade with its context 2.webp"),
  },
];

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

  const sections = useMemo(
    () => [introRef, projectsRef, newsRef, featuredInRef, footerRef],
    []
  );

  const stepRef = useRef(0); // 0 = top/hero, 1..sections.length = which section we've snapped to
  const isLockedRef = useRef(false); // true while a snap animation is in flight
  const unlockedRef = useRef(false); // true once user has scrolled past the last section

  useEffect(() => {
    // Only enable section-wise scroll-jacking on desktop view (>= 768px).
    // On mobile view (< 768px), keep normal native browser scrolling without hijacking.
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const scrollToStep = (step) => {
      isLockedRef.current = true;
      if (step === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = sections[step - 1]?.current;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      window.setTimeout(() => {
        isLockedRef.current = false;
      }, SNAP_LOCK_MS);
    };

    const handleDelta = (delta, e) => {
      if (!mediaQuery.matches) return; // Keep normal scrolling on mobile view
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
      } else {
        if (stepRef.current > 0) {
          e.preventDefault();
          stepRef.current -= 1;
          scrollToStep(stepRef.current);
        }
      }
    };

    const handleWheel = (e) => {
      if (!mediaQuery.matches) return;
      handleDelta(e.deltaY, e);
    };

    const attachWheel = () => {
      window.addEventListener("wheel", handleWheel, { passive: false });
    };

    const detachWheel = () => {
      window.removeEventListener("wheel", handleWheel);
    };

    if (mediaQuery.matches) {
      attachWheel();
    }

    const handleMediaChange = (e) => {
      detachWheel();
      if (e.matches) {
        attachWheel();
      } else {
        isLockedRef.current = false;
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      detachWheel();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [sections]);

  return (
    <main>
      <SiteChrome dark home />
      <HeroSlider projects={homeHeroProjects} />
      <section ref={introRef} className="site-container py-8 md:py-12">
        <div className="space-y-7">
          {homeCopy.intro.map((paragraph, index) => (
            <p key={index} className="text-[11px] uppercase leading-[1.65] tracking-[0.14em] text-[#7d7d7d] md:text-[12px]">
              {renderIntroParagraph(paragraph)}
            </p>
          ))}
        </div>
      </section>
      <section ref={projectsRef} className="site-container pb-14 md:pb-20">
        <h2 className="mb-4 text-[20px] font-normal uppercase tracking-[0.16em] text-ink md:mb-4 md:text-[28px]">
          Featured Projects
        </h2>
        <FeaturedCarousel items={assets.featuredProjects} type="project" />
      </section>
      <section ref={newsRef} className="site-container pb-8 md:pb-12">
        <h2 className="mb-4 text-[24px] font-normal uppercase tracking-[0.16em] text-ink md:mb-4 md:text-[28px]">
          Featured News
        </h2>
        <FeaturedCarousel items={assets.featuredNews} type="news" />
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