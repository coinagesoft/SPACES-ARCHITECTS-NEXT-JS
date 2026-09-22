import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
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
  Client: "Mr. Pramod",
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
              <span className={styles.highlight}>House of Hues</span> is a
              contemporary residence conceived as a study in colour, texture
              and natural light. Rather than treating colour as an applied
              layer, the design integrates it into the architecture through
              a restrained palette of terracotta, warm wood, concrete, ivory
              and deep, muted tones.
            </p>

            <p>
              The house balances a strong architectural expression with a
              calm, tactile interior.{" "}
              <span className={styles.highlight}>
                Exposed concrete surfaces and earthy terracotta planes
                establish a grounded material language, while timber
                elements soften the composition
              </span>
              . Arched openings and carefully framed apertures introduce a
              recurring geometric motif, creating moments where sunlight,
              shadow and colour become part of the architecture.
            </p>

            <p>
              Inside, the palette shifts subtly from room to room. Neutral
              bedrooms are layered with textured fabrics and warm finishes,
              while deeper blue and earthy accents bring character to the
              living spaces. Bespoke furniture, patterned textiles and
              curated artwork add richness without overpowering the
              architectural framework.
            </p>

            <p>
              Landscape and daylight are integral to the experience. Green
              pockets, planted courtyards and large openings bring nature
              deep into the house, while filtered sunlight creates
              constantly changing patterns across the walls and floors. The
              result is a home that feels expressive yet composed where{" "}
              <span className={styles.highlight}>
                colour, material and light work together to create a
                distinctly contemporary Indian residence
              </span>
              .
            </p>

            <p>
              It is ultimately an exploration of how a restrained
              architectural palette can still produce a{" "}
              <span className={styles.highlight}>
                home rich in warmth, personality and visual rhythm
              </span>
              .
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
            <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
            <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <MoreProjects currentId="house-of-hues" />
      </main>

      <Footer />
    </>
  );
}