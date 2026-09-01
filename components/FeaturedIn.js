import { assets } from "@/config/assets";

export default function FeaturedIn() {
  return (
    <section className="site-container py-16 md:py-24">
      <h2 className="text-xl md:text-2xl tracking-widest2 uppercase mb-10">
        Featured In
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-10">
        {assets.featuredIn.map((logo) => (
          <div
            key={logo}
            className="flex items-center justify-center border border-line h-16 px-3 text-xs md:text-sm tracking-wide uppercase text-muted text-center"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
