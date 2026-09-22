import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from HOUSE-OF-HUES/cover
const heroImage = assetImage("projects/HOUSE-OF-HUES/cover/COVER.webp");
// Project photographs from HOUSE-OF-HUES/3_4
const img1 = assetImage("projects/HOUSE-OF-HUES/3_4/1.webp");
const img2 = assetImage("projects/HOUSE-OF-HUES/3_4/2.webp");
const img3 = assetImage("projects/HOUSE-OF-HUES/3_4/3.webp");
const img4 = assetImage("projects/HOUSE-OF-HUES/3_4/4.webp");
const img5 = assetImage("projects/HOUSE-OF-HUES/3_4/5.webp");
const img6 = assetImage("projects/HOUSE-OF-HUES/3_4/6.webp");
const img7 = assetImage("projects/HOUSE-OF-HUES/3_4/7.webp");
const img8 = assetImage("projects/HOUSE-OF-HUES/3_4/8.webp");
const img9 = assetImage("projects/HOUSE-OF-HUES/3_4/9.webp");
const img10 = assetImage("projects/HOUSE-OF-HUES/3_4/10.webp");
const img11 = assetImage("projects/HOUSE-OF-HUES/3_4/11.webp");
const img12 = assetImage("projects/HOUSE-OF-HUES/3_4/12.webp");
const img13 = assetImage("projects/HOUSE-OF-HUES/3_4/13.webp");
const img14 = assetImage("projects/HOUSE-OF-HUES/3_4/14.webp");
const img15 = assetImage("projects/HOUSE-OF-HUES/3_4/15.webp");
const img16 = assetImage("projects/HOUSE-OF-HUES/3_4/16.webp");
const img17 = assetImage("projects/HOUSE-OF-HUES/3_4/17.webp");
const img18 = assetImage("projects/HOUSE-OF-HUES/3_4/18.webp");
const img19 = assetImage("projects/HOUSE-OF-HUES/3_4/19.webp");
const img20 = assetImage("projects/HOUSE-OF-HUES/3_4/20.webp");
const img21 = assetImage("projects/HOUSE-OF-HUES/3_4/21.webp");
const img22 = assetImage("projects/HOUSE-OF-HUES/3_4/22.webp");
const img23 = assetImage("projects/HOUSE-OF-HUES/3_4/23.webp");
const img24 = assetImage("projects/HOUSE-OF-HUES/3_4/24.webp");
const img25 = assetImage("projects/HOUSE-OF-HUES/3_4/25.webp");
export const metadata = {
  title: "House of Hues — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "House of Hues",
  Location: "New Delhi",
  Client: "Mr. Vipul Jain",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img1, stack: [img4, img5] },
  { type: "pair", images: [img2, img3] },
  { type: "split-reverse", large: img6, stack: [img7, img12] },
  { type: "pair", images: [img8, img9] },
  { type: "split", large: img10, stack: [img13, img15] },
  { type: "pair", images: [img11, img14] },
  { type: "split-reverse", large: img16, stack: [img18, img19] },
  { type: "pair", images: [img17, img21] },
  { type: "split", large: img22, stack: [img20, img24] },
  { type: "pair", images: [img23, img25] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "house-of-hues").slice(0, 3);

export default function HouseOfHuesPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="House of Hues"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>House of Hues</h1>
              <p>New Delhi</p>
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
              Pattern Play is a{" "}
              <span className={styles.highlight}>3 BHK apartment</span>{" "}
              that explores pattern, colour, texture and material as a cohesive design language.{" "}
              <span className={styles.highlight}>Bold geometric upholstery, graphic rugs, patterned cabinetry and expressive artwork</span>{" "}
              bring rhythm and personality to the interiors, while recurring colours create continuity across spaces.
            </p>

            <p>
              A warm palette of{" "}
              <span className={styles.highlight}>natural wood, marble, textured walls, brass, metal and layered fabrics</span>{" "}
              balances the stronger patterns. Fluted timber and linear wall details introduce subtle repetition, while curved furniture and architectural elements soften the geometry.
            </p>

            <p>
              Each room carries its own character from the vibrant turquoise and mustard accents in the living areas to the deeper blue of the bedroom yet remains connected through a consistent material and colour palette.
            </p>

            <p>
              The result is a playful, layered home where{" "}
              <span className={styles.highlight}>pattern is not merely decorative, but becomes an integral part of the interior architecture.</span>
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
                    alt="House of Hues"
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
                      alt="House of Hues"
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
                          alt="House of Hues"
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
                      alt="House of Hues"
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