import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from VEYA-APARTMENT/cover
const heroImage = assetImage("projects/VEYA-APARTMENT/cover/COVER.webp");
// Project photographs from VEYA-APARTMENT/photographs
const img1 = assetImage("projects/VEYA-APARTMENT/photographs/1.webp");
const img2 = assetImage("projects/VEYA-APARTMENT/photographs/2.webp");
const img3 = assetImage("projects/VEYA-APARTMENT/photographs/3.webp");
const img4 = assetImage("projects/VEYA-APARTMENT/photographs/4.webp");
const img5 = assetImage("projects/VEYA-APARTMENT/photographs/5.webp");
const img6 = assetImage("projects/VEYA-APARTMENT/photographs/6.webp");
const img7 = assetImage("projects/VEYA-APARTMENT/photographs/7.webp");
const img8 = assetImage("projects/VEYA-APARTMENT/photographs/8.webp");
const img9 = assetImage("projects/VEYA-APARTMENT/photographs/9.webp");
export const metadata = {
  title: "Veya Apartment — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Veya Apartment",
  Location: "Noida, Uttar Pradesh",
  Client: "Mr. Vinay Goel",
  Status: "Completed",
};

const gallery = [
  { type: "pair", images: [img2, img3] },
  { type: "full", image: img1 },
  { type: "pair", images: [img4, img6] },
  { type: "full", image: img7 },
  { type: "pair", images: [img5, img8] },
  { type: "full", image: img9 },
];

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function VeyaApartmentPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Veya Apartment"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Veya Apartment</h1>
              <p>Noida, Uttar Pradesh</p>
            </div>
          </div>
        </ParallaxHeroImage>

        {/* Details + description */}
        <section className={`site-container ${styles.infoSection}`}>
          <div className={styles.infoSidebar}>
            <div>
              <h3>Project Details</h3>
              <dl>
                {Object.entries(details).map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}:</dt> <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className={styles.infoBody}>
            <p>
              Infused with understated luxury and a refined modern aesthetic, this apartment
              interior reimagines urban living through the warm elegance of wood and a meticulously
              detailed design language. Rich timber finishes ranging from{" "}
              <span className={styles.highlight}>fluted wall panels</span> to{" "}
              <span className={styles.highlight}>custom-crafted cabinetry</span> form the soul of the
              space, lending it a sense of timeless sophistication. Paired with{" "}
              <span className={styles.highlight}>
                plush materials, sleek surfaces, and ambient lighting
              </span>
              , the home exudes a quiet opulence without excess.
            </p>

            <p>
              Every space within the apartment has been tailored to evoke{" "}
              <span className={styles.highlight}>comfort, style, and exclusivity</span>. The living
              and dining areas are open yet intimate, enhanced by layered textures and curated art
              pieces that elevate the visual narrative. Bedrooms feature{" "}
              <span className={styles.highlight}>
                bespoke furniture, warm flooring, and expansive wardrobes
              </span>
              , while the bathrooms are treated as private retreats, finished with{" "}
              <span className={styles.highlight}>
                marble, metal accents, and designer fittings
              </span>
              . Luxury here is defined by the details: precision in craftsmanship, a harmonious
              palette, and the seamless integration of technology and convenience. Framed by large
              windows that draw in natural light, the apartment feels expansive and indulgent an
              elegant sanctuary that reflects a modern lifestyle infused with character and grace.
            </p>
          </div>
        </section>
        {/* Gallery */}
        <section className={`site-container ${styles.gallery}`}>
          {gallery.map((block, i) => {
            if (block.type === "full") {
              return (
                <div key={i} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="Veya Apartment"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "wide") {
              return (
                <div key={i} className={styles.galleryWide}>
                  <Image
                    src={block.image}
                    alt="Veya Apartment"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "split") {
              const largeRatio = ratio(block.large);
              const stackRatios = block.stack.map(ratio);
              // Treat the 2-item stack as one combined "virtual image" so
              // it can be measured against `large` on equal footing — its
              // combined ratio is what a single image spanning the same
              // width and total (natural) stacked height would have.
              const stackCombinedRatio =
                1 / stackRatios.reduce((sum, r) => sum + 1 / r, 0);

              return (
                <div key={i} className={styles.gallerySplit}>
                  <div className={styles.gallerySplitLarge} style={{ "--ratio": largeRatio }}>
                    <Image
                      src={block.large}
                      alt="Veya Apartment"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                  <div
                    className={styles.gallerySplitStack}
                    style={{ "--ratio": stackCombinedRatio }}
                  >
                    {block.stack.map((src, j) => (
                      <div
                        key={j}
                        className={styles.gallerySplitStackItem}
                        style={{
                          "--ratio": stackRatios[j],
                          "--height-weight": 1 / stackRatios[j],
                        }}
                      >
                        <Image
                          src={src}
                          alt="Veya Apartment"
                          fill
                          sizes="(min-width: 768px) 48vw, 92vw"
                          className={styles.galleryImgFit}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // "pair" — two images side by side. Each image's width is
            // proportional to its own aspect ratio, so both land at the
            // exact same height, full row width, no crop, no stretch.
            return (
              <div key={i} className={styles.galleryPair}>
                {(block.images || block.image || []).map((src, j) => (
                  <div
                    key={j}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(src) }}
                  >
                    <Image
                      src={src}
                      alt="Veya Apartment"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </section>

        {/* Share */}
        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
            <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <MoreProjects currentId="veya-apartment" />
      </main>

      <Footer />
    </>
  );
}