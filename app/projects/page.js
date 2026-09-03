"use client";

import { useState } from "react";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
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
  const projects = active === "all"
    ? assets.projects
    : assets.projects.filter((project) => project.category === active);

  return (
    <main>
      <SiteChrome />
      <div className={styles.filterBar}>
        <nav className={styles.filterNav} aria-label="Project categories">
          {CATEGORIES.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActive(category.value)}
              className={`${styles.filterTab} ${active === category.value ? styles.filterTabActive : ""}`}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>

      <section className={styles.gallery}>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className={styles.tile}>
            <img
              src={typeof project.image === "string" ? project.image : project.image.src}
              alt={project.name}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.overlayName}>{project.name}</span>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </main>
  );
}
