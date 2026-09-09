import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/config/assets";
import styles from "./page.module.css";

export const metadata = {
  title: "Haveli Dharampura — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Haveli Dharampura",
  Location: "Old Delhi",
  Client: "Mr. Vijay Goel",
  Status: "Completed",
  Team: "Ar. Kapil Aggarwal, Pawan Sharma",
};

const achievements = [
  "UNESCO Asia Pacific for Cultural Heritage Conservation 2017",
  "NDTV-Grohe Design & Architecture Awards 2015 – Heritage Architecture (Jury Commendation)",
];

const pressLogos = assets.haveliDharampura.pressLogos;
const gallery = assets.haveliDharampura.gallery;
const recognitionImage = gallery[gallery.length - 1].image;
const recognitionItems = [
  { logo: pressLogos[0], text: "UNESCO Bangkok Announces 2017 Asia-Pacific Awards for Cultural Heritage Conservation" },
  { logo: pressLogos[4], text: "UNESCO Bangkok Announces 2017 Asia-Pacific Awards for Cultural Heritage Conservation" },
];
const moreProjects = assets.projects.filter((project) => project.id !== "haveli-dharampura").slice(0, 3);

// A static-imported image carries its real intrinsic width/height, so we
// can size gallery rows the way a proper "justified" photo grid does:
// every image in a row keeps its own aspect ratio, but each one's WIDTH
// is scaled so they all land at exactly the same height, filling the row
// edge-to-edge. flex-grow set to each image's own ratio (with flex-basis
// 0) is what does that division — no crop, no stretch, just correct
// per-image scaling, like the Canva page.
const ratio = (img) => img.width / img.height;

export default function HaveliDharampuraPage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        {/* Hero */}
        <section className={styles.hero}>
          <Image
            src={assets.haveliDharampura.hero}
            alt="Haveli Dharampura"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Haveli Dharampura</h1>
              <p>Delhi</p>
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
            <div>
              <h3>Achievements:</h3>
              <ul>
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.infoBody}>
            <p>
              THE PROJECT IN DHARAMPURA IS THE FIRST OF ITS KIND IN THE WALLED
              CITY OF DELHI WHICH AIMS IN THE{" "}
              <span className={styles.highlight}>
                RESTORATION &amp; REHABILITATION OF A 135-YEAR-OLD HAVELI
                (BUILT-IN 1880)
              </span>{" "}
              INTO A HOSPITALITY PROJECT WITH 14 ROOMS, A SPA, A MUSEUM, 2
              SHOPS &amp; A RESTAURANT. WE STARTED THIS PROJECT LOOKING AT A
              BROKEN STRUCTURE THAT WAS DECLARED AN INHABITABLE SPACE FOR
              LIVING BY THE GOVERNMENT OF DELHI. WITHOUT ANY PLANS OR
              DRAWINGS, WE HAD TO DEVELOP A PROGRAM EVEN BEFORE STARTING THE
              DESIGN WHICH INVOLVED THE BUILDING SURVEY, TO PREPARE MEASURED
              DRAWINGS &amp; STRUCTURAL REPAIR &amp; STRENGTHENING OF THE
              BUILDING.{" "}
              <span className={styles.highlight}>
                THE DESIGNING PROCESS INVOLVED A VERY ELABORATE 2 YEARS OF
                RESEARCH ON THE WHOLE URBAN FABRIC OF CHANDNI CHOWK.
              </span>{" "}
              THE RESULTING SPACE HAD ELEMENTS FROM HINDU, MUGHAL, JAIN &amp;
              RAJASTHAN&apos;S ARCHITECTURE. WE WERE BOUND TO AMALGAMATE
              TRADITIONAL ARCHITECTURE WITH CONTEMPORARY MODERN ARCHITECTURE
              TO CREATE AN INVITING SPACE FOR BOTH INDIANS &amp; FOREIGNERS.
              WE VISITED ALMOST ALL THE OLD CITIES OF INDIA TO UNDERSTAND THE
              RELEVANCE OF SUCH A PROJECT &amp; TO COLLECT A LARGE NUMBER OF
              SKILLED LABOR WHO UNDERSTAND TRADITIONAL ARCHITECTURAL
              ELEMENTS. WE REPLICATED ALMOST ALL THE ELEMENTS WHICH WERE USED
              EARLIER, SOME OF THEM IN A MODERN WAY.{" "}
              <span className={styles.highlight}>
                EVERY ROOM OR SPACE HAS ITS OWN THEME WHICH REFLECTS VARIOUS
                FLAVORS OF ARCHITECTURE &amp; LIVELIHOOD IN CHANDNI CHOWK.
              </span>{" "}
              ALL FURNITURE, LIGHTS &amp; ARTIFACTS WERE DESIGNED ESPECIALLY
              FOR EACH AND EVERY SPACE ACCORDING TO ITS USE &amp; THE THEME
              WAS TAKEN.
            </p>

            <div className={styles.pressLogos} aria-label="Press and award recognition">
              {pressLogos.map((mark) => (
                <span key={mark.name} className={styles.pressMark}>
                  <Image
                    src={mark.image}
                    alt={mark.name}
                    className={styles.pressMarkImg}
                  />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — mirrors the original Canva page's rhythm of full-bleed
            shots, side-by-side pairs, a tall-portrait-beside-a-stack split,
            and one wide panoramic band. */}
        <section className={`site-container ${styles.gallery}`}>
          {gallery.slice(0, -1).map((block, i) => {
            if (block.type === "full") {
              return (
                <div key={i} className={styles.galleryFull}>
                  <Image
                    src={block.image}
                    alt="Haveli Dharampura"
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
                    alt="Haveli Dharampura"
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
                      alt="Haveli Dharampura"
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
                          alt="Haveli Dharampura"
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
                      alt="Haveli Dharampura"
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

        {/* Recognition — the final courtyard image sits alongside the two
            publication/award callouts, matching the supplied reference. */}
        <section className={`site-container ${styles.recognition}`}>
          <div className={styles.recognitionImageWrap}>
            <Image
              src={recognitionImage}
              alt="Haveli Dharampura courtyard"
              sizes="(min-width: 768px) 62vw, 100vw"
              className={styles.recognitionImage}
            />
          </div>
          <div className={styles.recognitionList}>
            {recognitionItems.map(({ logo, text }) => (
              <article key={logo.name} className={styles.recognitionItem}>
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className={styles.recognitionLogo}
                />
                <p>{text}</p>
              </article>
            ))}
          </div>
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
