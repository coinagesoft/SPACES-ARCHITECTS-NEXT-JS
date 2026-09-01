import Image from "next/image";

export default function NewsCard({ image, name, source }) {
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
        <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 text-[10px] tracking-widest2 uppercase">
          {source}
        </span>
      </div>
      <p className="mt-4 text-xs uppercase tracking-wide text-faint">{name}</p>
    </article>
  );
}
