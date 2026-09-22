import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
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
              <strong>House of Sculpted Screens</strong> is a contemporary
              Delhi residence shaped by fluid forms, sculpted arches and
              custom-crafted timber screens. The façade replaces rigid
              geometry with organic curves, creating deep openings, planted
              balconies and shaded pockets that bring landscape into the
              architecture.
            </p>

            <p>
              A defining feature is the{" "}
              <strong>undulating timber screen</strong>, designed as a
              series of curved vertical fins that provide privacy and solar
              control while becoming a sculptural element of the façade. The
              contrast between pale textured surfaces, warm timber and lush
              greenery creates a tactile, contemporary character.
            </p>

            <p>
              And perhaps the most personal expression of the project came
              from the client himself. After the completion of the house,
              he asked the architect for a signature and chose to have it
              inscribed on the façade. More than an architectural detail, it
              became a deeply meaningful gesture of trust, an
              acknowledgement that the home represents not only a physical
              space, but also a shared creative journey.
            </p>

            <p>
              <strong>
                The house explores how form, craft, light and landscape can
                come together to create an architecture that feels both
                expressive and deeply personal.
              </strong>
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
            <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
            <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <MoreProjects currentId="house-of-sculpted-screens" />
      </main>

      <Footer />
    </>
  );
}