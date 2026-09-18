import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero — this project's cover is a video, not a still image.
const coverVideo = assetUrl("projects/HOUSE-OF-STEPPED-GARDEN/cover/COVER.mp4");
// Project photographs from HOUSE-OF-STEPPED-GARDEN/photographs
const photo1 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/1.webp");
const photo2 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/1(2).webp");
const photo3 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (2).webp");
const photo4 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (3).webp");
const photo5 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (4).webp");
const photo6 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (5).webp");
const photo7 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (6).webp");
const photo8 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (7).webp");
const photo9 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (9).webp");
const photo10 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (10).webp");
const photo11 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (12).webp");
const photo12 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/2 (13).webp");
const photo13 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/3 (2).webp");
const photo14 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/3 (3).webp");
const photo15 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/3 (4).webp");
const photo16 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/4 (1).webp");
const photo17 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/4 (3).webp");
const photo18 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/4 (4).webp");
const photo19 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (2).webp");
const photo20 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (3).webp");
const photo21 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (4).webp");
const photo22 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (5).webp");
const photo23 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5 (6).webp");
const photo24 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(8).webp");
const photo25 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(9).webp");
const photo26 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/5(11).webp");
const photo27 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (4).webp");
const photo28 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (5).webp");
const photo29 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (7).webp");
const photo30 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/6 (8).webp");
// Diagrams + aerial shot
const dataGraphic = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/data graphic.webp");
const finalSectionCopy = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/final section copy.webp");
const dji0083 = assetImage("projects/HOUSE-OF-STEPPED-GARDEN/photographs/DJI_0083 .webp");
export const metadata = {
  title: "The House of Stepped Gardens — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "The House of Stepped Gardens",
  Location: "Kochi, Kerala",
  Client: "Mr. Lynus Kalister",
  Status: "Completed",
};

// Same alternating rhythm as the other project galleries: full-bleed shots,
// side-by-side pairs, a large-image-beside-a-stack split, the two diagrams
// (sustainability graphic + section drawing) dropped in as full-bleed
// callouts, and the drone shot closing things out as a wide panoramic band.
const gallery = [
  { type: "full", image: photo1 },
  { type: "pair", images: [photo2, photo3] },
  { type: "wide", image: dji0083 },
  { type: "pair", images: [photo4, photo5] },
  { type: "split", large: photo6, stack: [photo9, photo8] },
  { type: "full", image: photo7 },
  { type: "pair", images: [photo10, photo11] },
  { type: "pair", images: [photo12, photo13] },
  { type: "full", image: dataGraphic },
  { type: "split", large: photo14, stack: [photo15, photo16] },
  { type: "full", image: photo21 },
  { type: "pair", images: [photo18, photo17] },
  { type: "pair", images: [photo22, photo23] },
  { type: "pair", images: [photo29, photo30] },
  { type: "full", image: finalSectionCopy },
  { type: "pair", images: [photo19, photo20] },
  { type: "pair", images: [photo27, photo28] },
  { type: "split", large: photo24, stack: [photo25, photo26] },
];

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function HouseOfSteppedGardenPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        {/* Hero — video cover instead of a still image */}
        <section className={styles.hero}>
          <video
            className={styles.heroVideo}
            src={coverVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>The House of Stepped Gardens</h1>
              <p>Kochi</p>
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
              In The House of Stepped Gardens, section becomes the primary
              generator of architecture. Set on a heavily contoured site in
              Kochi, the{" "}
              <span className={styles.highlight}>
                3,200 sq. m. residence
              </span>{" "}
              follows the natural terrain rather than flattening it,
              unfolding through cascading split levels that replace rigid
              partitions with gradual transitions.
            </p>

            <p>
              Its monumental scale is broken into human-scaled volumes,
              organised around a dynamic vertical spine that responds to the
              site&apos;s contours and connects the house internally. Changes
              in level establish privacy and visual continuity: open social
              spaces occupy the lower levels, while terraces, courts and
              double-height spaces form intermediate thresholds before giving
              way to more intimate upper levels.
            </p>

            <p>
              Designed for Kochi&apos;s hot-humid climate, the architecture
              dissolves the boundary between house and landscape. Open-to-sky
              voids, stepped gardens and shaded courtyards draw daylight and
              cross-ventilation deep into the residence while introducing
              seasonal change and greenery throughout.
            </p>

            <p>
              Sustainability is integral to the architecture, with a{" "}
              <span className={styles.highlight}>
                60 KVA solar array enabling net-zero energy
              </span>
              , alongside rainwater harvesting for irrigation and reuse.
              Layered greenery provides{" "}
              <span className={styles.highlight}>
                thermal comfort and creates a self-shading microclimate
              </span>
              .
            </p>

            <p>
              The house ultimately becomes a living topography, where
              contour, climate and movement converge, allowing architecture
              to yield gracefully to the landscape.
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
                    alt="The House of Stepped Gardens"
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
                    alt="The House of Stepped Gardens"
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
                      alt="The House of Stepped Gardens"
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
                          alt="The House of Stepped Gardens"
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
                      alt="The House of Stepped Gardens"
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
      </main>

      <Footer />
    </>
  );
}