import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image — per instruction, using photographs/1.webp as the cover
// (there's no separate /cover folder for this project yet).
const heroImage = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/1.webp");
// All photographs currently in the folder, 1.webp through the last
// WhatsApp image, used in the gallery below.
const photo1 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/1.webp");
const photo2 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/2.webp");
const chatgptImage = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/ChatGPT Image Aug 27, 2026, 01_54_15 PM.webp");
const poeticHouse = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/poetic house _page-0001.webp");
const whatsapp1 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/WhatsApp Image 2026-08-27 at 12.58.08.webp");
const whatsapp2 = assetImage("projects/HOUSE-OF-SCULPTED-SCREENS/photographs/WhatsApp Image 2026-08-27 at 13.01.12.webp");
export const metadata = {
  title: "House of Sculpted Screens — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "House of Sculpted Screens",
  Location: "Janakpuri, New Delhi",
  Client: "Mr. Namit Ajmani",
  Status: "Completed",
};

// All six photos currently in the folder, worked into a full/pair/pair/full
// rhythm matching the other project galleries.
const gallery = [
    { type: "pair", images: [photo1, whatsapp2] },

  { type: "pair", images: [poeticHouse, chatgptImage] },
  { type: "pair", images: [photo2, whatsapp1] },
//   { type: "full", image: whatsapp2 },
];

const moreProjects = assets.projects
  .filter((project) => project.id !== "house-of-sculpted-screens")
  .slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function HouseOfSculptedScreensPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        {/* Hero */}
        <section className={styles.hero}>
          <Image
            src={heroImage}
            alt="House of Sculpted Screens"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>House of Sculpted Screens</h1>
              <p>New Delhi</p>
            </div>
          </div>
        </section>

        {/* Details — no description copy has been provided for this
            project yet, so the info section currently shows just the
            sidebar. Drop paragraphs into infoBody the same way the other
            project pages do once copy is ready. */}
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

          <div className={styles.infoBody} />
        </section>

        {/* Gallery */}
        <section className={`site-container ${styles.gallery}`}>
          {gallery.map((block, i) => {
            if (block.type === "full") {
              return (
                <div key={i} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="House of Sculpted Screens"
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
                    alt="House of Sculpted Screens"
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
                      alt="House of Sculpted Screens"
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
                          alt="House of Sculpted Screens"
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
                      alt="House of Sculpted Screens"
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