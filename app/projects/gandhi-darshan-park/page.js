import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from GANDHI-DARSHAN-PARK/cover
const heroImage = assetImage("projects/GANDHI-DARSHAN-PARK/cover/Cover Image.webp");
// Project photographs from GANDHI-DARSHAN-PARK/3_4
const img1 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/1.webp");
const img2 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/2.webp");
const img3 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/3.webp");
const img4 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/4.webp");
const img5 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/5.webp");
const img6 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/6.webp");
const img7 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/7.webp");
const img8 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/8.webp");
export const metadata = {
  title: "Gandhi Darshan Park — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Gandhi Darshan Park",
  Location: "Raj Ghat, New Delhi",
  Client: "Mr. Vijay Goel",
  Status: "Completed",
};

const gallery = [
  { type: "pair", images: [img1, img2] },
  { type: "full", image: img3 },
  { type: "pair", images: [img4, img5] },
  { type: "full", image: img6 },
  { type: "pair", images: [img7, img8] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "gandhi-darshan-park").slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function ArtHousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Gandhi Darshan Park"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Gandhi Darshan Park</h1>
              <p>Delhi</p>
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
      An extension of Gandhi Smriti near Rajghat, Gandhi Darshan Park
      translates Mahatma{" "}
      <span className={styles.highlight}>
        Gandhi&apos;s principles of simplicity, non-violence and harmony
        with nature
      </span>{" "}
      into a contemplative{" "}
      <span className={styles.highlight}>public landscape</span>. Conceived
      as a place to pause, reflect and connect with his philosophy, the
      park uses landscape and symbolism to make his legacy accessible
      across generations.
    </p>

    <p>
      A red sandstone pathway guides visitors through the park, passing
      symbolic installations including the{" "}
      <span className={styles.highlight}>Charkha</span> and the{" "}
      <span className={styles.highlight}>three monkeys</span>. At its
      centre, the{" "}
      <span className={styles.highlight}>Vasudhaiva Kutumbakam</span>{" "}
      Wheel forms a quiet focal point for peace and contemplation,
      surrounded by gardens, greenery and shaded seating.
    </p>

    <p>
      The park brings together{" "}
      <span className={styles.highlight}>
        spaces for all generations: children&apos;s play areas, open-air
        theatres for cultural programmes and tranquil seating for the
        elderly
      </span>
      . Through this blend of nature, symbolism and activity, Gandhi
      Darshan creates a contemporary setting where Gandhian thought becomes
      an experience rather than a lesson, connecting the philosophy of the
      past with present and future generations.
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
                    alt="Gandhi Darshan Park"
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
                    alt="Gandhi Darshan Park"
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
                      alt="Gandhi Darshan Park"
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
                          alt="Gandhi Darshan Park"
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
                      alt="Gandhi Darshan Park"
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
