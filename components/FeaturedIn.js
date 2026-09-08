import Image from "next/image";
import { assets } from "@/config/assets";

export default function FeaturedIn() {
  return (
    <section className="site-container py-16 md:py-24">
      <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10 md:mb-11">
        Featured In
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10 gap-x-6 gap-y-7 md:gap-x-8 md:gap-y-9">
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
