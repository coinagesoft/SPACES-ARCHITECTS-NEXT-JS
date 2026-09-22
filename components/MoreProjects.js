// components/MoreProjects.jsx
"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets";
import styles from "./MoreProjects.module.css";

/**
 * "More" project grid — randomly picks `count` other projects,
 * excluding the one currently being viewed.
 *
 * Usage inside a project page:
 *   <MoreProjects currentId="haveli-dharampura" />
 */
export default function MoreProjects({ currentId, count = 3 }) {
  const moreProjects = useMemo(() => {
    const pool = assets.projects.filter((p) => p.id !== currentId);

    // Fisher–Yates shuffle
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }, [currentId, count]);

  if (moreProjects.length === 0) return null;

  return (
    <section className={`site-container ${styles.moreSection}`}>
      <p className={styles.moreHeading}>More</p>
      <div className={styles.moreGrid}>
        {moreProjects.map((project) => (
  <Link
    key={project.id}
    href={`/projects/${project.id}`}
    className={styles.moreCard}
    aria-label={project.name}
  >
    <Image
      src={project.image}
      alt={project.name}
      fill
      sizes="(min-width: 768px) 29vw, 90vw"
      className={styles.moreImage}
    />
    <span className={styles.moreOverlay}>
      <span className={styles.moreName}>{project.name}</span>
    </span>
  </Link>
))}
      </div>
    </section>
  );
}