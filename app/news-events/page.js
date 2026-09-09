import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
import styles from "../blog/page.module.css";

export const metadata = { title: "News + Events — Spaces Architects@ka" };

export default function NewsEventsPage() {
  return (
    <main>
      <SiteChrome />

      <section className={styles.blogListing} aria-label="News and events">
        <div className={styles.blogGrid}>
          {assets.blog.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.imageWrap}>
                <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 274px, (min-width: 768px) 42vw, 100vw" className={styles.image} />
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <span className={styles.readMore}>Read more</span>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
