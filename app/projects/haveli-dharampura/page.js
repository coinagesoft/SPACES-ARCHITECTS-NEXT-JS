import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
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
  Team: "Ar. Rafiq Aggarwal, Pawan Sharma",
};

const achievements = [
  "UNESCO Asia Pacific Award for Cultural Heritage Conservation 2017",
  "NDTV-Grohe Design & Architecture Awards 2017 — Heritage Architecture Jury Commendations",
];

const pressLogos = [
  "/images/projects/haveli-dharampura/logo-unesco.png",
  "/images/projects/haveli-dharampura/logo-architizer.png",
  "/images/projects/haveli-dharampura/logo-heritage.png",
  "/images/projects/haveli-dharampura/logo-archdaily.png",
  "/images/projects/haveli-dharampura/logo-ndtv.png",
];

// Gallery images in display order. "full" = full-width, "pair" = two side by side.
const gallery = [
  { type: "pair", images: ["gallery-01.jpg", "gallery-02.jpg"] },
  { type: "full", image: "gallery-03-bw.jpg" },
  { type: "pair", images: ["gallery-04.jpg", "gallery-05-section.jpg"] },
  { type: "full", image: "gallery-06-floor-pattern.jpg" },
  { type: "pair", images: ["gallery-07-stair.jpg", "gallery-08-bw.jpg"] },
  { type: "pair", images: ["gallery-09-ceiling.jpg", "gallery-10-dining.jpg"] },
  { type: "full", image: "gallery-11-dining-wide.jpg" },
  { type: "pair", images: ["gallery-12-exterior-dusk.jpg", "gallery-13-diagram.jpg"] },
  { type: "pair", images: ["gallery-14-entrance.jpg", "gallery-15-bw-courtyard.jpg"] },
  { type: "pair", images: ["gallery-16-hall.jpg", "gallery-17-balcony.jpg"] },
  { type: "full", image: "gallery-18-rooftop-pergola.jpg" },
  { type: "pair", images: ["gallery-19-bedroom.jpg", "gallery-20-arch-corridor.jpg"] },
].map((b) =>
  b.type === "full"
    ? { ...b, image: `/images/projects/haveli-dharampura/${b.image}` }
    : { ...b, images: b.images.map((i) => `/images/projects/haveli-dharampura/${i}`) }
);

export default function HaveliDharampuraPage() {
  return (
    <>
      <main>
        <SiteChrome />

        {/* Hero */}
        <section className={styles.hero}>
          <img
            src="/images/projects/haveli-dharampura/hero.jpg"
            alt="Haveli Dharampura"
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
              The project in Dharampura is the first of its kind in the walled
              city of Delhi, which aims at the{" "}
              <span className={styles.highlight}>
                restoration &amp; rehabilitation of a 100-year-old haveli
              </span>{" "}
              into a hospitality project with rooms, a spa, a museum, 2 shops
              &amp; a restaurant. We started this project looking at a broken
              structure that was declared an inhabitable space for living by
              the government of Delhi, without any plans or drawings. We had
              to develop a program even before starting the design, which
              involved the building survey, to prepare measured drawings &amp;
              structural repair &amp; strengthening of the building.
            </p>
            <p>
              The redesign process involved a very elementary{" "}
              <span className={styles.highlight}>
                two years of research on the whole urban fabric of Chandni
                Chowk
              </span>
              . We were bound to amalgamate traditional architecture with
              contemporary modern architecture to create an inviting space for
              both Indians &amp; foreigners. We visited almost all the old
              cities of India to understand the relevance of such a project
              &amp; to collect a large number of skilled labor who understand
              traditional architectural elements.{" "}
              <span className={styles.highlight}>
                Every room or space has its own theme
              </span>
              , which reflects various flavors of architecture &amp; lies
              rooted in Chandni Chowk. All furniture, lights &amp; artifacts
              were designed especially for each and every space according to
              its use.
            </p>

            <div className={styles.pressLogos}>
              {pressLogos.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className={`site-container ${styles.gallery}`}>
          {gallery.map((block, i) =>
            block.type === "full" ? (
              <div key={i} className={styles.galleryFull}>
                <img src={block.image} alt="" />
              </div>
            ) : (
              <div key={i} className={styles.galleryPair}>
                {block.images.map((src, j) => (
                  <img key={j} src={src} alt="" />
                ))}
              </div>
            )
          )}
        </section>

        {/* Elevation drawing */}
        <section className={`site-container ${styles.elevation}`}>
          <img
            src="/images/projects/haveli-dharampura/elevation-sketch.jpg"
            alt="Elevation drawing"
          />
        </section>

        {/* Feature image + press */}
        <section className={`site-container ${styles.pressSection}`}>
          <div className={styles.pressImage}>
            <img
              src="/images/projects/haveli-dharampura/feature-twilight.jpg"
              alt="Haveli Dharampura courtyard"
            />
          </div>
          <div className={styles.pressText}>
            <div>
              <img src="/images/projects/haveli-dharampura/logo-unesco.png" alt="UNESCO" />
              <p>
                UNESCO Bangkok announces the 2017 Asia-Pacific Awards for
                Cultural Heritage Conservation.
              </p>
            </div>
            <div>
              <img src="/images/projects/haveli-dharampura/logo-ndtv.png" alt="NDTV" />
              <p>
                UNESCO Bangkok announces the 2017 Asia-Pacific Awards for
                Cultural Heritage Conservation.
              </p>
            </div>
          </div>
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
