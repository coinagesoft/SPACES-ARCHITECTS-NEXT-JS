import Image from "next/image";

export default function NewsCard({ image, name }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative w-full aspect-square overflow-hidden bg-line">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-3 text-[14px] leading-4 uppercase tracking-[0.14em] text-ink/80 md:text-[14px]">{name}</p>
    </article>
  );
}
