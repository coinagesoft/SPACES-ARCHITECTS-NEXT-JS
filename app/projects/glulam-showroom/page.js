import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from GLULAM-SHOWROOM/cover
const heroImage = assetImage("projects/GLULAM-SHOWROOM/cover/Cover Image.webp");
// Project photographs from GLULAM-SHOWROOM/3_4
const img1 = assetImage("projects/GLULAM-SHOWROOM/3_4/1.webp");
const img2 = assetImage("projects/GLULAM-SHOWROOM/3_4/2.webp");
const img3 = assetImage("projects/GLULAM-SHOWROOM/3_4/3.webp");
const img4 = assetImage("projects/GLULAM-SHOWROOM/3_4/4.webp");
const img5 = assetImage("projects/GLULAM-SHOWROOM/3_4/5.webp");
const img6 = assetImage("projects/GLULAM-SHOWROOM/3_4/6.webp");
const img7 = assetImage("projects/GLULAM-SHOWROOM/3_4/7.webp");
const img8 = assetImage("projects/GLULAM-SHOWROOM/3_4/8.webp");
const img9 = assetImage("projects/GLULAM-SHOWROOM/3_4/9.webp");
const img10 = assetImage("projects/GLULAM-SHOWROOM/3_4/10.webp");
const img11 = assetImage("projects/GLULAM-SHOWROOM/3_4/11.webp");
const img12 = assetImage("projects/GLULAM-SHOWROOM/3_4/12.webp");
const img13 = assetImage("projects/GLULAM-SHOWROOM/3_4/13.webp");
const img14 = assetImage("projects/GLULAM-SHOWROOM/3_4/14.webp");
export const metadata = {
  title: "Glulam Showroom — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Glulam Showroom",
  Location: "New Delhi",
  Client: "Mr. Hardeep Gill",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img3, stack: [img1, img2] },
  { type: "pair", images: [img5, img8] },
  { type: "full", image: img4 },
  { type: "pair", images: [img6, img7] },
  { type: "pair", images: [img9, img11] },
  { type: "full", image: img10 },
  { type: "pair", images: [img13, img14] },
  { type: "full", image: img12 },
];

export default function GlulamShowroomPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Glulam Showroom"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Glulam Showroom</h1>
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
              A{" "}
              <span className={styles.highlight}>2,500 sq. ft. showroom</span>{" "}
              and experience centre was designed to introduce the Indian market to the quality of imported, primarily{" "}
              <span className={styles.highlight}>Canadian timber</span>{" "}
              and the technology behind its production. Central to the experience is{" "}
              <span className={styles.highlight}>Glulam Technology</span>
              , which bonds individual high-strength, kiln-dried timber sections into precise, durable components. The space was conceived not simply to display the products, but to{" "}
              <span className={styles.highlight}>educate visitors</span>{" "}
              about their material quality, performance and possibilities.
            </p>

            <p>
              To place the wood itself at the centre of attention, the interiors adopt a deliberately{" "}
              <span className={styles.highlight}>restrained palette of wood and concrete</span>
              . Doors and windows line the building&rsquo;s perimeter, creating a continuous material display, while a central meeting room anchors the plan. A waiting area, conference room and display bedroom complete the programme, with the bedroom featuring custom wooden flooring, a{" "}
              <span className={styles.highlight}>slimline sliding door</span>
              , ceiling artwork and a world map tracing the countries from which the products are sourced.
            </p>

            <p>
              A small outdoor green area extends the experience, demonstrating the material&rsquo;s performance in external conditions. The result is a tactile showroom where technology, craftsmanship and material become the architecture itself.
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
                    alt="Glulam Showroom"
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
                      alt="Glulam Showroom"
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
                          alt="Glulam Showroom"
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
                      alt="Glulam Showroom"
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

        <MoreProjects currentId="glulam-showroom" />
      </main>

      <Footer />
    </>
  );
}