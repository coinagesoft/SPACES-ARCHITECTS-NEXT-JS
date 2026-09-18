import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ image, name, href = "/news-events", landscape = false }) {
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
      <p className="mt-3 text-[14px] leading-4 uppercase tracking-[0.14em] text-ink/80 transition-colors duration-300 group-hover:text-ink md:text-[14px]">{name}</p>
    </article>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
