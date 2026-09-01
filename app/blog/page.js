import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";

export const metadata = { title: "Blog — Spaces Architects@ka" };

export default function BlogPage() {
  return (
    <main>
      <SiteChrome />

      <div className="pt-28 md:pt-32" />

      <section className="site-container pb-20 md:pb-28">
        <h1 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {assets.blog.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-line">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs tracking-widest2 uppercase text-accent">
                {post.date}
              </p>
              <h2 className="mt-2 text-base md:text-lg tracking-wide leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-xs text-faint leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block mt-3 text-xs uppercase tracking-widest2 text-accent hover:underline">
                Read more
              </span>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
