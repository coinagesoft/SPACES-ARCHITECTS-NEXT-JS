import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from KAVYAM/cover
const heroImage = assetImage("projects/KAVYAM/cover/cover.webp");
// Project photographs from KAVYAM/3_4
const img1 = assetImage("projects/KAVYAM/3_4/1.webp");
const img2 = assetImage("projects/KAVYAM/3_4/2.webp");
const img3 = assetImage("projects/KAVYAM/3_4/3.webp");
const img4 = assetImage("projects/KAVYAM/3_4/4.webp");
const img5 = assetImage("projects/KAVYAM/3_4/5.webp");
const img6 = assetImage("projects/KAVYAM/3_4/6.webp");
const img7 = assetImage("projects/KAVYAM/3_4/7.webp");
const img8 = assetImage("projects/KAVYAM/3_4/8.webp");
const img9 = assetImage("projects/KAVYAM/3_4/9.webp");
const img10 = assetImage("projects/KAVYAM/3_4/10.webp");
const img11 = assetImage("projects/KAVYAM/3_4/11.webp");
const img12 = assetImage("projects/KAVYAM/3_4/12.webp");
const img13 = assetImage("projects/KAVYAM/3_4/13.webp");
const img14 = assetImage("projects/KAVYAM/3_4/14.webp");
const img15 = assetImage("projects/KAVYAM/3_4/15.webp");
const img16 = assetImage("projects/KAVYAM/3_4/16.webp");
const img17 = assetImage("projects/KAVYAM/3_4/17.webp");
const img18 = assetImage("projects/KAVYAM/3_4/18.webp");
const img19 = assetImage("projects/KAVYAM/3_4/19.webp");
const img20 = assetImage("projects/KAVYAM/3_4/20.webp");
const img21 = assetImage("projects/KAVYAM/3_4/21.webp");
const img22 = assetImage("projects/KAVYAM/3_4/22.webp");
export const metadata = {
  title: "Kavyam — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Kavyam",
  Location: "New Delhi",
  Client: "Mr. D.K. Sharma",
  Status: "Completed",
  Awards: "IIID Design Excellence Awards 2017 – Runner up in Residential Single Dwelling Category",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "split", large: img1, stack: [img6, img7] },
  { type: "pair", images: [img2, img3] },
  { type: "full", image: img8 },
  { type: "split-reverse", large: img4, stack: [img13, img14] },
  { type: "pair", images: [img5, img9] },
  { type: "full", image: img15 },
  { type: "split", large: img10, stack: [img16, img17] },
  { type: "pair", images: [img11, img12] },
  { type: "split-reverse", large: img18, stack: [img20, img22] },
  { type: "pair", images: [img19, img21] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "kavyam").slice(0, 3);

export default function KavyamPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Kavyam"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Kavyam</h1>
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
              Conceived as a fusion of Indian and modern architecture, this single-family residence brings traditional elements into{" "}
              <span className={styles.highlight}>dialogue with contemporary materials and detailing</span>
              . The façade combines a{" "}
              <span className={styles.highlight}>brick jaali with MS louvers, Epay wood and tensile roofing</span>
              , creating a layered expression of heritage and modernity.
            </p>

            <p>
              Inside, custom-designed wallpapers, furniture and artefacts extend the concept into a cohesive interior language. Large double- and triple-height atriums form the spatial core, establishing{" "}
              <span className={styles.highlight}>visual connections across floors</span>
              , while carefully positioned openings draw abundant natural light and ventilation throughout the home.
            </p>

            <p>
              The result is a residence where{" "}
              <span className={styles.highlight}>Indian architectural character meets contemporary openness</span>
              , creating a distinctive yet cohesive family home.
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
                    alt="Kavyam"
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
                      alt="Kavyam"
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
                          alt="Kavyam"
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
                      alt="Kavyam"
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