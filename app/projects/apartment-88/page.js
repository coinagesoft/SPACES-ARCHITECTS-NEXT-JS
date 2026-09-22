import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import MoreProjects from "@/components/MoreProjects";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from projects/ARAVALI-FARMHOUSE/cover
const heroImage = assetImage("projects/ARAVALI-FARMHOUSE/cover/COVER.webp");
// Project photographs from projects/ARAVALI-FARMHOUSE/3_4
const img1 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/1.webp");
const img2 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/2.webp");
const img3 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/3.webp");
const img4 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/4.webp");
const img5 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/5.webp");
const img6 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/6.webp");
const img7 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/7.webp");
const img8 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/8.webp");
const img9 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/9.webp");
const img10 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/10.webp");
const img11 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/11.webp");
const img12 = assetImage("projects/ARAVALI-FARMHOUSE/3_4/12.webp");

export const metadata = {
  title: "Aravali Farmhouse — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Aravali Farmhouse",
  Location: "Gurgaon",
  Client: "Mr. Jan",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "full", image: img1 },
  { type: "pair", images: [img2, img3] },
  { type: "full", image: img4 },
  { type: "pair", images: [img5, img6] },
  { type: "pair", images: [img7, img8] },
  { type: "full", image: img9 },
  { type: "pair", images: [img10, img11] },
  { type: "full", image: img12 },
];

export default function AravaliFarmhousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Aravali Farmhouse"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Aravali Farmhouse</h1>
              <p>Gurgaon</p>
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
              Set within a 2.1-acre corner site in the Aravalli Hills of Gurgaon, the farmhouse was conceived as a <span className={styles.highlight}>private retreat</span> for a Belgian diplomatic couple, with distinct accommodation for guests. Responding closely to the natural contours of the site, the building is organized across two levels, with the primary living spaces and master suite above and three guest bedrooms below.
            </p>

            <p>
              The architecture is defined by <span className={styles.highlight}>simple geometric forms</span>, each corresponding to a specific function and creating a seamless transition between private and semi-private spaces. The swimming pool forms the heart of the composition, visually and physically connected to the master bedroom, living, dining and kitchen. <span className={styles.highlight}>Curved and rectilinear volumes</span> frame the pool and landscape, while carefully choreographed arrival sequences reveal the building gradually along the contours of the site.
            </p>

            <p>
              The farmhouse is an outward-looking composition where <span className={styles.highlight}>architecture, landscape and geometry</span> come together to create an intimate yet expansive living experience.
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
                    alt="Aravali Farmhouse"
                    sizes="100vw"
                    className={styles.galleryImg}
                  />
                </div>
              );
            }

            if (block.type === "split" || block.type === "split-reverse") {
              const isReverse = block.type === "split-reverse";
              return (
                <div
                  key={i}
                  className={`${styles.gallerySplit} ${isReverse ? styles.gallerySplitReverse : ""}`}
                >
                  <div
                    className={styles.gallerySplitLarge}
                    style={{ "--ratio": ratio(block.large) }}
                  >
                    <Image
                      src={block.large}
                      alt="Aravali Farmhouse"
                      fill
                      sizes="(min-width: 768px) 48vw, 100vw"
                      className={styles.galleryImgFit}
                    />
                  </div>
                  <div className={styles.gallerySplitStack}>
                    {block.stack.map((src, j) => (
                      <div
                        key={j}
                        className={styles.gallerySplitStackItem}
                        style={{ "--ratio": ratio(src) }}
                      >
                        <Image
                          src={src}
                          alt="Aravali Farmhouse"
                          fill
                          sizes="(min-width: 768px) 48vw, 100vw"
                          className={styles.galleryImgFit}
                        />
                      </div>
                    ))}
                  </div>
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
                      alt="Aravali Farmhouse"
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

        <MoreProjects currentId="aravali-farmhouse" />
      </main>

      <Footer />
    </>
  );
}