import Image from "next/image";
import { assets } from "@/config/assets";

export default function FeaturedIn() {
  return (
    <section className="site-container py-16 md:py-24">
      <h2 className="mb-8 text-[20px] font-medium uppercase tracking-[0.16em] text-ink md:mb-10 md:text-[24px]">
        Featured In
      </h2>
      <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10 md:gap-x-7 md:gap-y-9">
        {assets.featuredIn.map((logo) => (
          <div key={logo.name} className="relative h-14 md:h-16">
            <Image
              src={logo.image}
              alt={logo.name}
              fill
              sizes="(min-width: 1280px) 10vw, (min-width: 1024px) 11vw, (min-width: 768px) 16vw, (min-width: 640px) 22vw, 42vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
