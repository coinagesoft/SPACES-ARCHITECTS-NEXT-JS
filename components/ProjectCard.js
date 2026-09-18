import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ id, href, image, name, excerpt, landscape = false }) {
  const content = (
    <article className="group cursor-pointer">
      <div className={`relative w-full ${landscape ? "aspect-[4/3]" : "aspect-square"} overflow-hidden bg-line`}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-[14px] uppercase tracking-[0.14em] text-ink/80 transition-colors duration-300 group-hover:text-ink md:text-[14px]">{name}</h3>
      {excerpt && (
        <>
          <p className="mt-2 text-xs text-faint leading-relaxed line-clamp-4">{excerpt}</p>
          <span className="inline-block mt-2 text-[10px] uppercase tracking-[0.14em] text-accent">Read more</span>
        </>
      )}
    </article>
  );

  const linkHref = href || (id ? (id.startsWith("/") ? id : `/projects/${id}`) : null);

  return linkHref ? <Link href={linkHref} className="group block">{content}</Link> : content;
}
