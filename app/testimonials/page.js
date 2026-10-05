import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import TestimonialsGallery from "@/components/TestimonialsGallery";
import { assetUrl } from "@/assets";

export const metadata = { title: "Testimonials — Spaces Architects@ka" };

// ============================================================
//  TESTIMONIALS — images only
//
//  Upload the testimonial images to the asset host as
//     assets/testimonial/1.jpg, 2.jpg, 3.jpg ...
//  and list them below (same order = same order on the page).
//  `name` is only used as the image's alt text (for screen
//  readers / search) — it is not shown on the page.
//  To add one later: upload the next number and add a line.
// ============================================================
const FOLDER = "testimonial";

const testimonials = [
  { file: "1.jpg", name: "Ashraya Residence" },
  { file: "2.jpg", name: "House of Sculpted Screens" },
  { file: "3.jpg", name: "House of Stepped Gardens" },
  { file: "4.jpg", name: "Screen House" },
  { file: "5.jpg", name: "Swatantra Residence" },
].map(({ file, name }) => ({
  src: assetUrl(`${FOLDER}/${file}`),
  alt: `Client testimonial — ${name}`,
}));

export default function TestimonialsPage() {
  return (
    <main>
      <SiteChrome sticky />
      <TestimonialsGallery items={testimonials} />
      <Footer />
    </main>
  );
}