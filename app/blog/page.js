import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { blogPosts } from "@/config/blogs";
import styles from "./page.module.css";

export const metadata = { title: "Blog — Spaces Architects@ka" };

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
    title: "House Becomes a Landscape",
    excerpt: "The starting point for the House of Stepped Gardens was a simple question: can a house be designed as an extension of the garden rather than as an object?",
  },
  "time-held-in-detail": {
    title: "Time, Held in Detail",
    excerpt: "Historic buildings often carry stories that are invisible beneath layers of alteration, neglect and time. Restoring a haveli means trying to uncover those stories.",
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
    title: "6x18",
    excerpt: "A narrow site can appear to be a limitation, but constraints often produce some of the most interesting architectural ideas.",
  },
  "the-courtyard": {
    title: "The Courtyard:",
    excerpt: "The courtyard was once one of the defining elements of the Indian house. It brought light, air, vegetation and family life into the centre of the home.",
  },
};

export default function BlogPage() {
  return (
    <main>
      <SiteChrome />

      <section className={styles.blogListing}>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => {
            const card = listingCopy[post.id] || post.listing || post;

            return (
              <article key={post.id} className={styles.blogCard}>
                <Link href={`/blog/${post.id}`} className={`${styles.cardLink} ${styles.postLink}`}>
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