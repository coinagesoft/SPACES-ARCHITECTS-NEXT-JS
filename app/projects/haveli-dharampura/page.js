import Image from "next/image";
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

// Text-based press marks — no external logo files required.
const pressMarks = ["UNESCO", "Architizer", "IIID", "ArchDaily", "NDTV"];

const gallery = assets.haveliDharampura.gallery;

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
          <div className={styles.heroOverlay} />
          <div className={styles.heroText}>
            <h1>Haveli Dharampura</h1>
            <p>Delhi</p>
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

            <div className={styles.pressLogos}>
              {pressMarks.map((mark) => (
                <span key={mark} className={styles.pressMark}>
                  {mark}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className={`site-container ${styles.gallery}`}>
          {gallery.map((block, i) =>
            block.type === "full" ? (
              <div key={i} className={styles.galleryFull}>
                <Image
                  src={block.image}
                  alt="Haveli Dharampura"
                  fill
                  sizes="100vw"
                  className={styles.galleryImg}
                />
              </div>
            ) : (
              <div key={i} className={styles.galleryPair}>
                {block.images.map((src, j) => (
                  <div key={j} className={styles.galleryPairItem}>
                    <Image
                      src={src}
                      alt="Haveli Dharampura"
                      fill
                      sizes="(min-width: 768px) 48vw, 92vw"
                      className={styles.galleryImg}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </section>

        {/* Share */}
        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">x</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Email">@</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}