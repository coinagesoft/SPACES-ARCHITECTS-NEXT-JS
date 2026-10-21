// components/MoreProjects.js
// Server component (no client JS). Picks `count` other projects, excluding the
// one being viewed. The pick is derived from the page id, so it is stable
// (no hydration mismatch) but still differs from page to page.
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets";
import styles from "./MoreProjects.module.css";

function hash(str) {
  let h = 0;
  for (const ch of String(str ?? "")) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/**
 * Usage inside a project page:
 *   <MoreProjects currentId="haveli-dharampura" />
 */
export default function MoreProjects({ currentId, count = 3 }) {
  const pool = assets.projects.filter((p) => p.id !== currentId);
  if (pool.length === 0) return null;

  const start = hash(currentId) % pool.length;
  const moreProjects = Array.from(
    { length: Math.min(count, pool.length) },
    (_, i) => pool[(start + i) % pool.length]
  );

  return (
    <section className={`site-container ${styles.moreSection}`}>
      <p className={styles.moreHeading}>More</p>
      <div className={styles.moreGrid}>
        {moreProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            prefetch={true}
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