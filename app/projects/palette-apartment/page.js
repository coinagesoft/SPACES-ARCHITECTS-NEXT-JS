import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import { assets } from "@/assets";
import styles from "./page.module.css";

export const metadata = {
  title: "Palette Apartment — Spaces Architects@ka",
};

const details = {
  Project: "Palette Apartment",
  Location: "Noida, Uttar Pradesh",
  Client: "Mr. Vinay Goel",
  Status: "Completed",
};

const photos = assets.paletteApartment.gallery;

// 8 photos in an alternating pair/full/split/pair rhythm — same idea as the
// Floating Courtyard and Slender House galleries: no two blocks of the same
// type sit next to each other. The "full" slot stretches to 100% page width,
// so it needs a landscape-oriented photo — photos[7], the last photo, is
// used there. The frame-wall photo (photos[2], the 3rd file) now closes out
// the gallery as the very last image, inside the bounded pair layout rather
// than the full-bleed slot.
const gallery = [
  { type: "pair", images: [photos[0], photos[1]] },
  { type: "full", image: photos[7] },
  { type: "split", large: photos[3], stack: [photos[4], photos[5]] },
  { type: "pair", images: [photos[6], photos[2]] },
];

const ratio = (image) => image.width / image.height;

export default function PaletteApartmentPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <section className={styles.hero}>
          <Image
            src={assets.paletteApartment.hero}
            alt="Palette Apartment"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Palette Apartment</h1>
              <p>Noida, Uttar Pradesh</p>
            </div>
          </div>
        </section>

        <section className={`site-container ${styles.infoSection}`}>
          <aside className={styles.infoSidebar}>
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
          </aside>

          <div className={styles.infoBody}>
            <p>
              Designing the interior of a{" "}
              <span className={styles.highlight}>semi-luxurious 3 BHK</span>{" "}
              for a family of four within a small budget was a challenging
              task. However, we were determined to give this space a big
              makeover to make the most of the small space, we designed all
              of the furniture with <span className={styles.highlight}>ergonomics</span>{" "}
              in mind, ensuring that it would be comfortable for the family
              to use.
              We used a variety of materials in the project, including{" "}
              <span className={styles.highlight}>
                Teak wood, laminate, stone, wallpaper, and fabric
              </span>
              .
            </p>

            <p>
              We took care to choose materials that would be durable and
              easy to maintain, as well as visually appealing. The result is
              a <span className={styles.highlight}>functional and stylish home</span>{" "}
              that the family can enjoy for years to come.
            </p>
          </div>
        </section>

        <section
          className={`site-container ${styles.gallery}`}
          aria-label="Palette Apartment gallery"
        >
          {gallery.map((block, index) => {
            if (block.type === "full") {
              return (
                <div key={index} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="Palette Apartment"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "split") {
              const largeRatio = ratio(block.large);
              const stackRatios = block.stack.map(ratio);

              const stackCombinedRatio =
                1 /
                stackRatios.reduce(
                  (sum, currentRatio) => sum + 1 / currentRatio,
                  0
                );

              return (
                <div key={index} className={styles.gallerySplit}>
                  <div
                    className={styles.gallerySplitLarge}
                    style={{ "--ratio": largeRatio }}
                  >
                    <Image
                      src={block.large}
                      alt="Palette Apartment"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImgFit}
                    />
                  </div>

                  <div
                    className={styles.gallerySplitStack}
                    style={{ "--ratio": stackCombinedRatio }}
                  >
                    {block.stack.map((image, stackIndex) => (
                      <div
                        key={image.src}
                        className={styles.gallerySplitStackItem}
                        style={{
                          "--ratio": stackRatios[stackIndex],
                          "--height-weight":
                            1 / stackRatios[stackIndex],
                        }}
                      >
                        <Image
                          src={image}
                          alt="Palette Apartment"
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

            return (
              <div key={index} className={styles.galleryPair}>
                {block.images.map((image) => (
                  <div
                    key={image.src}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(image) }}
                  >
                    <Image
                      src={image}
                      alt="Palette Apartment"
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

        <section className={styles.share}>
          <p>Share</p>

          <div className={styles.shareIcons}>
            <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
            <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a
              href="mailto:admin@spacesarchitects-ka.com"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </section>

        <MoreProjects currentId="palette-apartment" />
      </main>

      <Footer />
    </>
  );
}