import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from STONEX-INDIA-BUILDING/cover
const heroImage = assetImage("projects/STONEX-INDIA-BUILDING/cover/Cover Image.webp");
// Project photographs from STONEX-INDIA-BUILDING/photographs
const entrance = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Entrance.webp");
const bha2732 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2732.webp");
const bha2774 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2774.webp");
const bha2806 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2806.webp");
const bha2812 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/BHA_2812-Recovered.webp");
const stonex = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Stonex.webp");
const sketch = assetImage("projects/STONEX-INDIA-BUILDING/photographs/sketch.webp");
const skinSection = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Skin Section.webp");
const panorama1 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Panorama-1.webp");
const panorama2 = assetImage("projects/STONEX-INDIA-BUILDING/photographs/Panorama-2.webp");
export const metadata = {
  title: "Stonex India Building — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Stonex India Building",
  Location: "New Delhi",
  Client: "Mr. R. C. Goel",
  Status: "Completed",
};

// Same alternating rhythm as the other project galleries: an opening
// full-bleed shot, side-by-side pairs, a large-image-beside-a-stack split,
// the sketch + skin-section drawings dropped in as full-bleed diagram
// callouts, and the two panoramas closing things out as wide bands.
const gallery = [
  { type: "pair", images: [bha2732, bha2774] },
    { type: "full", image: entrance },

    { type: "pair", images: [bha2806, sketch] },

  { type: "split", large: skinSection, stack: [bha2812, stonex] },
//   { type: "full", image: sketch },

  { type: "pair", images: [panorama2, panorama1] },
  
];

const moreProjects = assets.projects
  .filter((project) => project.id !== "stonex-india-building")
  .slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function StonexIndiaBuildingPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        {/* Hero */}
        <section className={styles.hero}>
          <Image
            src={heroImage}
            alt="Stonex India Building"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Stonex India Building</h1>
              <p>New Delhi</p>
            </div>
          </div>
        </section>

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
              Located along the busy stone market road, the Stonex India
              Building was conceived as a{" "}
              <span className={styles.highlight}>brand landmark</span>—an
              identity expressed through architecture rather than signage.
              The façade deliberately avoids directly displaying the
              product, instead transforming stone and slim tiles into an{" "}
              <span className={styles.highlight}>architectural artwork</span>{" "}
              that stands apart from its surroundings.
            </p>

            <p>
              Three tile types are composed in{" "}
              <span className={styles.highlight}>abstract patterns</span> and
              layered across multiple levels, creating a textured canvas
              that subtly incorporates the{" "}
              <span className={styles.highlight}>
                client&apos;s vintage Ferrari brand icon.
              </span>{" "}
              The result is a dialogue between material, geometry and brand
              identity, with stone and slim tile working as a unified
              architectural language.
            </p>

            <p>
              The façade continually transforms with changing light. Morning
              and midday shadows animate its tiled surface, while the
              evening sun reveals a softer character. After dusk,
              integrated{" "}
              <span className={styles.highlight}>
                lighting exposes the concealed levels and creates a floating
                effect
              </span>
              , allowing the building to take on an entirely{" "}
              <span className={styles.highlight}>new identity at night.</span>
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
                    alt="Stonex India Building"
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
                    alt="Stonex India Building"
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
                      alt="Stonex India Building"
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
                          alt="Stonex India Building"
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
                {block.images.map((src, j) => (
                  <div
                    key={j}
                    className={styles.galleryPairItem}
                    style={{ "--ratio": ratio(src) }}
                  >
                    <Image
                      src={src}
                      alt="Stonex India Building"
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
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <section className={`site-container ${styles.moreSection}`}>
          <p className={styles.moreHeading}>More</p>
          <div className={styles.moreGrid}>
            {moreProjects.map((project) => (
              <Link key={project.id} href="/projects" className={styles.moreCard} aria-label={project.name}>
                <Image src={project.image} alt={project.name} fill sizes="(min-width: 768px) 29vw, 90vw" className={styles.moreImage} />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}