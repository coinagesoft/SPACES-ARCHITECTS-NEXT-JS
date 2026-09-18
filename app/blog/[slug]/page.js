import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import { assets } from "@/assets";
import styles from "./page.module.css";

export function generateStaticParams() {
  return assets.blog.map(({ id }) => ({ slug: id }));
}

export function generateMetadata({ params }) {
  const post = assets.blog.find(({ id }) => id === params.slug);
  return { title: post ? `${post.title} — Spaces Architects@ka` : "Blog — Spaces Architects@ka" };
}

export default function BlogDetailPage({ params }) {
  const post = assets.blog.find(({ id }) => id === params.slug);

  if (!post) notFound();

  return (
    <main>
      <section className={styles.hero}>
        <Image
          src={post.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <SiteChrome dark />
      </section>

      <article className={styles.article}>
        <div className={styles.articleInner}>
          <p className={styles.kicker}>Journal / Spaces Architects@ka</p>
          <h1>{post.title}</h1>
          <div className={styles.rule} />
          <div className={styles.body}>
            {post.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
