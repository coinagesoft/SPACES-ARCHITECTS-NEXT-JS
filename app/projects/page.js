"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import JustifiedGallery from "./JustifiedGallery"; // original hand-built grid ("All Projects")
import CategoryGallery from "./CategoryGallery"; // sorted layout for every other category
import ProjectsMegaMenu from "./ProjectsMegaMenu";
import { isValidCategory } from "./projectCategories";
import styles from "./page.module.css";

const SCROLL_KEY = "projects-scroll";

// useLayoutEffect runs before the browser paints (no flash of the page top).
// On the server it doesn't exist, so fall back to useEffect there.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const [restoring, setRestoring] = useState(false);
  const gallery = assets.projectGallery;

  const syncActiveCategory = useCallback(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("category");
    setActive(fromUrl && isValidCategory(fromUrl) ? fromUrl : "all");
  }, []);

  useEffect(() => {
    syncActiveCategory();

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    const onHistoryChange = () => syncActiveCategory();

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      onHistoryChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      onHistoryChange();
    };

    window.addEventListener("popstate", onHistoryChange);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", onHistoryChange);
    };
  }, [syncActiveCategory]);

  // Remember where the visitor was when they open a project...
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest && e.target.closest("a[href^='/projects/']");
      if (!link) return;
      sessionStorage.setItem(
        SCROLL_KEY,
        JSON.stringify({ y: window.scrollY, t: Date.now() })
      );
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // ...and put them back there when they return: instantly, before paint,
  // with the gallery hidden until the position is restored (no visible scrolling).
  useIsoLayoutEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(SCROLL_KEY));
    } catch (e) {}

    // ignore missing or stale (older than 10 minutes) positions
    if (!saved || Date.now() - saved.t > 10 * 60 * 1000) {
      sessionStorage.removeItem(SCROLL_KEY);
      return;
    }

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    setRestoring(true);

    let tries = 0;
    let timer;

    const finish = () => {
      // only clear the saved position once we are done (React Strict Mode
      // runs this effect twice in dev, so it must survive the first run)
      sessionStorage.removeItem(SCROLL_KEY);
      setRestoring(false);
    };

    const restore = () => {
      // "instant" overrides the site's `scroll-behavior: smooth`
      window.scrollTo({ top: saved.y, left: 0, behavior: "instant" });
      tries += 1;
      if (Math.abs(window.scrollY - saved.y) <= 4 || tries >= 40) {
        finish();
        return;
      }
      // page not tall enough yet (gallery still laying out): try again shortly
      timer = window.setTimeout(restore, 50);
    };
    restore();

    return () => {
      window.clearTimeout(timer);
      window.history.scrollRestoration = previous;
    };
  }, []);

  const handleCategoryChange = useCallback((key) => {
    setActive(key);

    const url = new URL(window.location.href);
    url.search = key === "all" ? "" : "?category=" + key;
    // keep Next.js's own history state instead of wiping it with null
    window.history.replaceState(window.history.state, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <ProjectsMegaMenu active={active} onChange={handleCategoryChange} />

      <section
        className={`site-container ${styles.gallery}`}
        style={{ visibility: restoring ? "hidden" : "visible" }}
      >
        {active === "all" ? (
          <JustifiedGallery items={gallery} />
        ) : (
          <CategoryGallery items={gallery} category={active} />
        )}
      </section>
      <Footer />
    </main>
  );
}