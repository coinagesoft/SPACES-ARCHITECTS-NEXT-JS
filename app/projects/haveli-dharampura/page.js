import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assets } from "@/assets";
import styles from "./page.module.css";
import MoreProjects from "@/components/MoreProjects";
import ShareIcons from "@/components/ShareIcons";

export const metadata = {
  title: "Haveli Dharampura — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "Haveli Dharampura",
  Location: "Old Delhi",
  "Plot Area": "5,400 sq. ft.",
  "Built-up Area": "11,000 sq. ft.",
  Client: "Mr. Vijay Goel",
  Status: "Completed",
  Team: "Ar. Kapil Aggarwal, Pawan Sharma",
};

const achievements = [
  "2017 UNESCO Asia-Pacific Award for Cultural Heritage Conservation",
  "2nd World Annual International Travel Awards – Best Heritage Property in Delhi",
  "NDTV-Grohe Design & Architecture Awards 2015 – Heritage Architecture (Jury Commendation)",
];

const publications = [
  "Divisare",
  "The Merit List",
  "Style",
  "Architects and Interiors India",
  "The Design Theory",
  "In Habitat",
  "The Telegraph",
];

const pressLogos = assets.haveliDharampura.pressLogos;
const gallery = assets.haveliDharampura.gallery;
const recognitionImage = gallery[gallery.length - 1].image;
const recognitionItems = [
  { logo: pressLogos[0], text: "UNESCO Bangkok Announces 2017 Asia-Pacific Awards for Cultural Heritage Conservation" },
  { logo: pressLogos[4], text: "UNESCO Bangkok Announces 2017 Asia-Pacific Awards for Cultural Heritage Conservation" },
];
// const moreProjects = assets.projects.filter((project) => project.id !== "haveli-dharampura").slice(0, 3);

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
            <div>
              <h3>Publications:</h3>
              <ul>
                {publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.infoBody}>
            <p>
              The project in Dharampura is the first of its kind in the Walled
              City of Delhi which aims in the{" "}
              <span className={styles.highlight}>
                restoration &amp; rehabilitation of a 135-year-old haveli
                (built-in 1880)
              </span>{" "}
              into a hospitality project with 14 rooms, a spa, a museum, 2
              shops &amp; a restaurant. We started this project looking at a
              broken structure that was declared an inhabitable space for
              living by the Government of Delhi. Without any plans or
              drawings, we had to develop a program even before starting the
              design which involved the building survey, to prepare measured
              drawings &amp; structural repair &amp; strengthening of the
              building.{" "}
              <span className={styles.highlight}>
                The designing process involved a very elaborate 2 years of
                research on the whole urban fabric of Chandni Chowk.
              </span>{" "}
              The resulting space had elements from Hindu, Mughal, Jain &amp;
              Rajasthan&apos;s architecture. We were bound to amalgamate
              traditional architecture with contemporary modern architecture
              to create an inviting space for both Indians &amp; foreigners.
              We visited almost all the old cities of India to understand the
              relevance of such a project &amp; to collect a large number of
              skilled labor who understand traditional architectural
              elements. We replicated almost all the elements which were used
              earlier, some of them in a modern way.{" "}
              <span className={styles.highlight}>
                Every room or space has its own theme which reflects various
                flavors of architecture &amp; livelihood in Chandni Chowk.
              </span>{" "}
              All furniture, lights &amp; artifacts were designed especially
              for each and every space according to its use &amp; the theme
              was taken.
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
            <ShareIcons />
          </div>
        </section>

        <MoreProjects currentId="haveli-dharampura" />
      </main>

      <Footer />
    </>
  );
}