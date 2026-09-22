import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from COLOR-DIALOGUE/cover
const heroImage = assetImage("projects/COLOR-DIALOGUE/cover/COVER.webp");
// Project photographs from COLOR-DIALOGUE/3_4
const img1 = assetImage("projects/COLOR-DIALOGUE/3_4/1.webp");
const img2 = assetImage("projects/COLOR-DIALOGUE/3_4/2.webp");
const img3 = assetImage("projects/COLOR-DIALOGUE/3_4/3.webp");
const img4 = assetImage("projects/COLOR-DIALOGUE/3_4/4.webp");
const img5 = assetImage("projects/COLOR-DIALOGUE/3_4/5.webp");
const img6 = assetImage("projects/COLOR-DIALOGUE/3_4/6.webp");
const img7 = assetImage("projects/COLOR-DIALOGUE/3_4/7.webp");
const img8 = assetImage("projects/COLOR-DIALOGUE/3_4/8.webp");
const img9 = assetImage("projects/COLOR-DIALOGUE/3_4/9.webp");
export const metadata = {
  title: "Colour Dialogue — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Colour Dialogue",
  Location: "Noida, Uttar Pradesh",
  Client: "Mr. Vinay Goel",
  Status: "Completed",
};

const gallery = [
  { type: "pair", images: [img1, img5] },
  { type: "triple", images: [img2, img3, img4] },
  { type: "full", image: img8 },
  { type: "pair", images: [img6, img7] },
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

export default function ColorDialoguePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Colour Dialogue"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Colour Dialogue</h1>
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
              This 3BHK apartment{" "}
              <span className={styles.highlight}>
                brings together modernism, elegance, and minimalism
              </span>{" "}
              in a warm contemporary setting. A refined palette of natural wood,
              stone, soft fabrics, and brass accents creates a cohesive and
              timeless character throughout the home.
            </p>

            <p>
              <span className={styles.highlight}>
                Bold artwork, patterned wallpapers, sculptural furniture, and
                expressive colours introduce moments of visual interest against
                the restrained material palette.
              </span>{" "}
              The living and dining areas flow seamlessly into one another,
              creating an open and connected sense of space.
            </p>

            <p>
              Generous bedroom windows bring in abundant natural light and
              connect the interiors to the surrounding views. Through a balance
              of materiality, colour, texture, and carefully curated details,
              the home{" "}
              <span className={styles.highlight}>
                creates an inviting atmosphere that feels sophisticated,
                comfortable, and distinctly personal.
              </span>
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
                    alt="Colour Dialogue"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "triple") {
              return (
                <div key={i} className={styles.galleryTriple}>
                  {block.images.map((src, j) => (
                    <div key={j} className={styles.galleryTripleItem}>
                      <Image
                        src={src}
                        alt="Colour Dialogue"
                        fill
                        sizes="(min-width: 768px) 32vw, 100vw"
                        className={styles.galleryImgFit}
                      />
                    </div>
                  ))}
                </div>
              );
            }

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
                      alt="Colour Dialogue"
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
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

        <MoreProjects currentId="color-dialogue" />
      </main>

      <Footer />
    </>
  );
}