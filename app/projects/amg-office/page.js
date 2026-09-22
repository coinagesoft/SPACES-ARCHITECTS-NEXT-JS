import Image from "next/image";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import styles from "./page.module.css";
import { assetImage } from "@/config/assets";

// Hero image from projects/AMG-OFFICE/cover
const heroImage = assetImage("projects/AMG-OFFICE/cover/COVER IMAGE.webp");
// Project photographs from projects/AMG-OFFICE/3_4
const recLift = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE RECEPTION FROM THE LIFT LOBBY_3x4.webp");
const recDesk = assetImage("projects/AMG-OFFICE/3_4/RECEPTION DESK AND THE WALLPAPER_3x4.webp");
const mirrorBench = assetImage("projects/AMG-OFFICE/3_4/REFLECTION OF THE WAITING BENCH AND STAIRCASE IN THE MIRROR WALL_3x4.webp");
const stairMirror = assetImage("projects/AMG-OFFICE/3_4/VIEW OF STAIRWAY AND MIRROR WALL FROM THE WAITING BENCH_3x4.webp");
const artStair = assetImage("projects/AMG-OFFICE/3_4/VERTICAL ART FORM ALONG THE STAIRCASE_3x4.webp");
const stairDesk = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE STAIRCASE FROM RECEPTION DESK_3x4.webp");
const stairConf = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE STAIRCASE AND VERTICAL ART WORK FROM THE CONFERENCE ROOM_3x4.webp");
const confLobby = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE CONFERENCE ROOM FROM THE RECEPTION LOBBY_3x4.webp");
const confBench = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE CONFERENCE ROOM AND BENCH FROM THE RECEPTION DESK_3x4.webp");
const conf = assetImage("projects/AMG-OFFICE/3_4/CONFERENCE ROOM_3x4.webp");
const officeConf = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE OFFICE FROM THE CONFERENCE ROOM_3x4.webp");
const cabinDesk = assetImage("projects/AMG-OFFICE/3_4/VIEW OF MAIN CABIN FROM RECEPTION DESK_3x4.webp");
const cabinSide = assetImage("projects/AMG-OFFICE/3_4/VIEW OF MAIN CABIN FROM SIDE_3x4.webp");
const plans = assetImage("projects/AMG-OFFICE/3_4/PLANS_3x4.webp");
const section = assetImage("projects/AMG-OFFICE/3_4/SECTION_3x4.webp");

export const metadata = {
  title: "AMG Office — Spaces Architects@ka",
};

// All content for this project lives right here — edit freely.
const details = {
  Project: "AMG Office",
  Location: "New Delhi",
  Client: "Mr. Mohit Gupta",
  Status: "Completed",
};

const ratio = (img) => img.width / img.height;

const gallery = [
  { type: "pair", images: [recLift, recDesk] },
  { type: "pair", images: [mirrorBench, stairMirror] },
  { type: "pair", images: [artStair, stairDesk] },
  { type: "pair", images: [stairConf, confLobby] },
  { type: "pair", images: [confBench, conf] },
  { type: "triple", images: [officeConf, cabinDesk, cabinSide] },
  { type: "pair", images: [plans, section] },
];

const moreProjects = assets.projects.filter((project) => project.id !== "amg-office").slice(0, 3);

export default function AmgOfficePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={heroImage}
          alt="AMG Office"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>AMG Office</h1>
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
              The office is sited in the basement with a net covered area of <span className={styles.highlight}>1000 sq. ft.</span> The design process revolved around making the project a treat for the design seekers. The office is adorned with <span className={styles.highlight}>abstract vertical rustic artworks</span> that fuse with the ever-changing flow of ceiling. The world of real estate is no more a clichéd give and take platform. With the design being in easy reach, no one wants to live a mundane life; which lacks excitement and creativity. In a collaborative venture with the client, Spaces Architects@KA decided to fulfil the forth mentioned <span className={styles.highlight}>desire and appetite for design</span> in his real estate office AMG, Greater Kailash.
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
                    alt="AMG Office"
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
                      alt="AMG Office"
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
                          alt="AMG Office"
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

            if (block.type === "triple") {
              return (
                <div key={i} className={styles.galleryTriple}>
                  {block.images.map((src, j) => (
                    <div
                      key={j}
                      className={styles.galleryTripleItem}
                      style={{ "--ratio": ratio(src) }}
                    >
                      <Image
                        src={src}
                        alt="AMG Office"
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
                      alt="AMG Office"
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
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={styles.moreCard}
                aria-label={project.name}
              >
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
