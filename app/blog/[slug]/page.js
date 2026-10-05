import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import SiteChrome from "@/components/SiteChrome";
import { blogPosts, getBlogPost } from "@/config/blogs";
import styles from "./page.module.css";

export function generateStaticParams() {
  return blogPosts.map(({ id }) => ({ slug: id }));
}

// "#Architecture #LuxuryHomes" -> ["Architecture", "LuxuryHomes"]
function getTags(post) {
  const block = post?.blocks.find((b) => b.type === "tags");
  return block ? block.text.split(/\s+/).map((t) => t.replace(/^#/, "")).filter(Boolean) : [];
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Blog — Spaces Architects@ka" };
  const tags = getTags(post);
  return {
    title: `${post.title} — Spaces Architects@ka`,
    ...(tags.length ? { keywords: tags } : {}),
  };
}

function renderBlock(block, index) {
  switch (block.type) {
    case "h":
      return <h2 key={index} className={styles.subheading}>{block.text}</h2>;
    case "sub":
      return <p key={index} className={styles.subtitle}>{block.text}</p>;
    case "ul":
      return (
        <ul key={index} className={styles.list}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote key={index} className={styles.quote}>{block.text}</blockquote>;
    case "tags":
      // Hashtags stay in the page (for search) but are not shown to visitors
      return <p key={index} className={styles.tagsHidden} aria-hidden="true">{block.text}</p>;
    default:
      return <p key={index}>{block.text}</p>;
  }
}

export default function BlogDetailPage({ params }) {
  const post = getBlogPost(params.slug);

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
          <div className={styles.body}>{post.blocks.map(renderBlock)}</div>
        </div>
      </article>

      <Footer />
    </main>
  );
}