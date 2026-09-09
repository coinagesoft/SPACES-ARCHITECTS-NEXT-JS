"use client";

import { useState } from "react";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
import JustifiedGallery from "./JustifiedGallery";
import styles from "./page.module.css";

export const CATEGORIES = [
  { label: "All Projects", value: "all" },
  { label: "Architecture", value: "architecture" },
  { label: "Interior", value: "interior" },
  { label: "Adaptive Reuse", value: "adaptive-reuse" },
  { label: "Landscape", value: "landscape" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const gallery = assets.projectGallery;

  return (
    <main>
      <SiteChrome
        projectCategories={CATEGORIES}
        activeProjectCategory={active}
        onProjectCategoryChange={setActive}
      />

      <section className={`site-container ${styles.gallery}`}>
        <JustifiedGallery items={gallery} targetRowHeight={320} gap={24} />
      </section>
      <Footer />
    </main>
  );
}
