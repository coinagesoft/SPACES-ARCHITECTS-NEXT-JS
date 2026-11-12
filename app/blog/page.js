import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { blogPosts } from "@/config/blogs";
import styles from "./page.module.css";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata("blog");

// Listing copy for the 8 original posts is kept separate from the article
// text (detail pages use the longer editorial titles). The 5 newer posts
// carry their own `listing` copy in config/blogs.js.
const listingCopy = {
  "a-legacy-restored": {
    title: "A Legacy Restored",
    excerpt: "Restoring a historic haveli is never simply a matter of repairing walls. It is an exercise in understanding memory, craftsmanship, and time.",
  },
  "a-pause-in-the-walled-city": {
    title: "A Pause in the Walled City",
    excerpt: "In the dense fabric of Old Delhi, open space is precious. A small public landscape can therefore have an impact far beyond its physical size.",
  },
    "house-becomes-a-landscape": {
    title: "House of Stepped Gardens",
    excerpt: "What if a house was not designed as a building within a garden, but as a garden that one could inhabit?",
  },
    "time-held-in-detail": {
    title: "Golden Haveli",
    excerpt: "The art of conservation lies not in recreating the past, but in allowing its stories to live on.",
  },
  "architecture-as-art": {
    title: "Architecture as Art:",
    excerpt: "I have always believed that architecture should do more than solve a functional problem. A successful building should create an emotional response.",
  },
  "architecture-in-motion": {
    title: "Architecture in Motion",
    excerpt: "Screens have always been an important part of Indian architecture. They filter light, create privacy and produce changing relationships between inside and outside.",
  },
  "6x18": {
    title: "The Slender House",
    excerpt: "When space is limited, imagination must expand. The Slender House explores how a narrow plot can become a generous and meaningful home.",
  },
   "the-courtyard": {
    title: "The Courtyard",
    excerpt: "Reimagining an age-old architectural element as a contemporary response to climate, community and the changing rhythms of domestic life.",
  },
};

const MONTHS = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

// Converts many date formats into a timestamp. Returns -Infinity if the
// date is missing or can't be understood (those posts go to the end).
// Handles: ISO (2025-03-12), 12/03/2025 (DD/MM/YYYY), 12-03-2025,
// "12 March 2025", "12th March 2025", "March 12, 2025", "March 2025", Date objects.
const toTime = (value) => {
  if (!value) return -Infinity;
  if (value instanceof Date) {
    const t = value.getTime();
    return Number.isNaN(t) ? -Infinity : t;
  }

  const str = String(value).trim();

  // ISO: 2025-03-12 or 2025-03-12T10:00:00Z
  if (/^\d{4}-\d{1,2}-\d{1,2}/.test(str)) {
    const t = Date.parse(str);
    if (!Number.isNaN(t)) return t;
  }

  // Numeric DD/MM/YYYY, DD-MM-YYYY, DD.MM.YYYY
  const numeric = str.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);
  if (numeric) {
    const [, d, m, y] = numeric;
    return Date.UTC(Number(y), Number(m) - 1, Number(d));
  }

  // Text months: strip ordinal suffixes (12th -> 12) then match
  const clean = str.replace(/(\d+)(st|nd|rd|th)/gi, "$1");
  const text = clean.match(
    /(?:(\d{1,2})[\s,]+)?([A-Za-z]{3,9})\.?[\s,]+(?:(\d{1,2})[\s,]+)?(\d{4})/
  );
  if (text) {
    const month = MONTHS[text[2].slice(0, 3).toLowerCase()];
    if (month !== undefined) {
      const day = Number(text[1] || text[3] || 1);
      return Date.UTC(Number(text[4]), month, day);
    }
  }

  // Last resort
  const fallback = Date.parse(clean);
  return Number.isNaN(fallback) ? -Infinity : fallback;
};

// Newest first. Posts with a missing or unparseable date go to the end,
// keeping their original relative order.
const sortedPosts = blogPosts
  .map((post, index) => ({ post, index, time: toTime(post.date) }))
  .sort((a, b) => {
    if (a.time === b.time) return a.index - b.index;
    return b.time > a.time ? 1 : -1;
  })
  .map(({ post }) => post);

export default function BlogPage() {
  return (
    <main>
      <SiteChrome />

      <section className={styles.blogListing}>
        <div className={styles.blogGrid}>
          {sortedPosts.map((post) => {
            const card = listingCopy[post.id] || post.listing || post;

            return (
              <article key={post.id} className={styles.blogCard}>
                <Link href={`/blog/${post.id}`} prefetch={true} className={`${styles.cardLink} ${styles.postLink}`}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={post.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 274px, (min-width: 768px) 42vw, 100vw"
                      className={styles.image}
                    />
                  </div>
                  <h2 className={styles.title}>{card.title}</h2>
                  <p className={styles.excerpt}>{card.excerpt}</p>
                  <div className={styles.postFooter}>
                    <span className={styles.postReadMore}>Read more</span>
                    {post.date && <time className={styles.date}>{post.date}</time>}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}