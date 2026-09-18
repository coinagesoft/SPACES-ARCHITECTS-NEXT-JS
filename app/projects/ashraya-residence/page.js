import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage, assetUrl } from "@/config/assets";

// Hero image from ASHRAYA-RESIDENCE/cover
const heroImage = assetImage("projects/ASHRAYA-RESIDENCE/cover/COVER.webp");
// Project photographs from ASHRAYA-RESIDENCE/3_4
const img1 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/1.webp");
const img2 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/2.webp");
const img3 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/3.webp");
const img4 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/4.webp");
const img5 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/5.webp");
const img6 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/6.webp");
const img7 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/7.webp");
const img8 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/8.webp");
const img9 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/9.webp");
const img10 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/10.webp");
const img11 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/11.webp");
const img12 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/12.webp");
const img13 = assetImage("projects/ASHRAYA-RESIDENCE/3_4/13.webp");
export const metadata = {
  title: "Ashraya Residence — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Ashraya Residence",
  Location: "New Delhi",
  Client: "Mr. Kalra",
  Status: "Completed",
};

const gallery = [
  { type: "pair", images: [img1, img5] },
  { type: "full", image: img4 },
  { type: "triple", images: [img2, img3, img7] },
  { type: "pair", images: [img6, img9] },
  { type: "triple", images: [img8, img10, img12] },
  { type: "pair", images: [img11, img13] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "ashraya-residence").slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function AshrayaResidencePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="Ashraya Residence"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Ashraya Residence</h1>
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
              Set on a <span className={styles.highlight}>600-square-yard</span> plot, this
              single-family residence is shaped by the client&apos;s deep affinity for Indian art,
              reflected in its planning, architecture and{" "}
              <span className={styles.highlight}>material palette.</span> Rather than maximising the
              footprint, the design responds to the sun path, placing the built mass strategically
              within the site.
            </p>

            <p>
              A <span className={styles.highlight}>10-foot-wide rear setback</span> is retained as a
              breathing edge, drawing natural light and air into the house. The planning unfolds along{" "}
              <span className={styles.highlight}>two intersecting axes:</span> the horizontal axis
              establishes <span className={styles.highlight}>cross-ventilation and movement</span>,
              while the vertical axis connects the different levels and spaces into a{" "}
              <span className={styles.highlight}>cohesive whole.</span>
            </p>

            <p>
              With <span className={styles.highlight}>four bedrooms and a guest room</span>{" "}
              accommodated within the brief, the residence balances functional requirements with{" "}
              <span className={styles.highlight}>climate-responsive planning</span>, allowing light,
              air and Indian spatial sensibilities to shape the home.
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
                    alt="Ashraya Residence"
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
                        alt="Ashraya Residence"
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
                  <div key={j} className={styles.galleryPairItem}>
                    <Image
                      src={src}
                      alt="Ashraya Residence"
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
