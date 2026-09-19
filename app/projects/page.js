"use client";

import { useCallback, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import JustifiedGallery from "./JustifiedGallery"; // original hand-built grid ("All Projects")
import CategoryGallery from "./CategoryGallery"; // sorted layout for every other category
import ProjectsMegaMenu from "./ProjectsMegaMenu";
import { isValidCategory } from "./projectCategories";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
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

  const handleCategoryChange = useCallback((key) => {
    setActive(key);

    const url = new URL(window.location.href);
    url.search = key === "all" ? "" : `?category=${key}`;
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <ProjectsMegaMenu active={active} onChange={handleCategoryChange} />

      <section className={`site-container ${styles.gallery}`}>
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