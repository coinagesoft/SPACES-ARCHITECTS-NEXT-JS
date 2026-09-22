import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import { assets } from "@/assets";
import styles from "./page.module.css";

export const metadata = {
  title: "Floating Courtyard — Spaces Architects@ka",
};

const details = {
  Project: "Floating Courtyard",
  Location: "Agra",
  Client: "Mr. Mohan Aggarwal",
  Status: "On-Going",
};

const photos = assets.floatingCourtyard.gallery;

// Same alternating rhythm as the Slender House gallery: an opening split
// (large image + a stacked pair), then full/pair blocks alternate so no two
// blocks of the same type sit next to each other — richer, more varied
// pacing than a single "type, type, type" run, and it avoids ending on two
// full-bleed images back to back.
const gallery = [
  { type: "split", large: photos[0], stack: [photos[1], photos[2]] },
  { type: "full", image: photos[3] },
  { type: "pair", images: [photos[4], photos[5]] },
  { type: "full", image: photos[6] },
  { type: "pair", images: [photos[7], photos[8]] },
  { type: "full", image: photos[9] },
];

const ratio = (image) => image.width / image.height;

export default function FloatingCourtyardPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <section className={styles.hero}>
          <Image
            src={assets.floatingCourtyard.hero}
            alt="Floating Courtyard"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Floating Courtyard</h1>
              <p>Agra</p>
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
              Floating Courtyard is a 700 sq. yard residence conceived as a
              contemporary, sustainable home where architecture and landscape
              are seamlessly integrated.
            

            
              Spread across the ground, first and second floors, the house is
              organized around a series of{" "}
              <span className={styles.highlight}>
                internal courtyards and green spaces positioned at different
                levels
              </span>
              , creating a layered relationship between built and open spaces.
            </p>

            <p>
              The courtyards act as the heart of the residence, bringing
              natural light, ventilation and greenery deep into the house while
              offering moments of{" "}
              <span className={styles.highlight}>
                pause and visual connection between floors
              </span>
              .
           

            
              Each level incorporates landscaped pockets and terraces, giving
              the impression of green spaces floating within the built form.
            </p>

            <p>
              Designed around the lifestyle and aspirations of the client, the
              residence balances privacy with openness through carefully framed
              views, terraces, planted edges and interconnected internal spaces.
            
              The architecture is expressed through clean geometric volumes,
              deep overhangs, warm wood accents and abundant planting, creating
              a residence that feels{" "}
              <span className={styles.highlight}>
                immersed in nature despite its urban setting
              </span>
              .
            </p>

            <p>
              Floating Courtyard explores how multiple layers of landscape can
              become an integral part of the architecture, transforming the
              house into a continuous dialogue between{" "}
              <span className={styles.highlight}>
                built form, light, air and greenery
              </span>
              .
            </p>
          </div>
        </section>

        <section
          className={`site-container ${styles.gallery}`}
          aria-label="Floating Courtyard gallery"
        >
          {gallery.map((block, index) => {
            if (block.type === "full") {
              return (
                <div key={index} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="Floating Courtyard"
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
                      alt="Floating Courtyard"
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
                          alt="Floating Courtyard"
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
                      alt="Floating Courtyard"
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

        <MoreProjects currentId="floating-courtyard" />
      </main>

      <Footer />
    </>
  );
}