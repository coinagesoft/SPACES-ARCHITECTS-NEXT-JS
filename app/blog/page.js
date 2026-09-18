import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";

export const metadata = { title: "Blog — Spaces Architects@ka" };

// Listing copy is intentionally separate from `asets.blog`: detail-page
// headings and article content continue to use the original editorial copy.
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
          {assets.blog.map((post) => {
            const card = listingCopy[post.id] || post;

            return (
              <article key={post.id} className={styles.blogCard}>
                <Link href={`/blog/${post.id}`} className={styles.cardLink}>
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
                  <span className={styles.readMore}>Read more</span>
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
