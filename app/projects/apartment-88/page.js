import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import MoreProjects from "@/components/MoreProjects";
import { assets } from "@/assets";
import buildProjectGallery from "../buildProjectGallery";
import styles from "../slender-house/page.module.css";

export const metadata = {
  title: "Apartment 88 — Spaces Architects@ka",
};

const details = {
  Project: "Apartment 88",
  Location: "New Delhi",
  Client: "Mr. Ajay Wadhwa",
  Status: "Completed",
};

const photos = assets.apartment88.gallery.filter(Boolean);
const gallery = buildProjectGallery(photos);
const ratio = (image) => (image && image.width && image.height ? image.width / image.height : 1);

export default function Apartment88Page() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={assets.apartment88.hero}
          alt="Apartment 88"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>Apartment 88</h1>
              <p>New Delhi</p>
            </div>
          </div>
        </ParallaxHeroImage>

        <section className={`site-container ${styles.infoSection}`}>
          <aside className={styles.infoSidebar}>
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
          </aside>

          <div className={styles.infoBody}>
            <p>
              Created for residents who are <span className={styles.highlight}>art enthusiasts and singers</span>, Apartment 88 moves
              beyond conventional minimalism to create a residence that is <span className={styles.highlight}>personal, artistic and
              immersive.</span> Working within the existing structure, each space was reimagined as part of a continuous journey,
              with everything from lighting to artwork <span className={styles.highlight}>individually customised</span> to reflect the
              residents&apos; personalities.
            </p>
            <p>
              A subtle <span className={styles.highlight}>grey palette</span> establishes a calm foundation, punctuated by vivid accents
              in furniture, artwork and artefacts. Natural light fills the living room, complemented by a <span className={styles.highlight}>warm
              wooden ceiling</span>, while a rich blue wall with yellow-grey furniture brings energy to the sitting area. Artwork
              becomes an integral part of the composition, transforming walls into curated visual moments.
            </p>
            <p>
              The corridor extends this artistic language through <span className={styles.highlight}>concrete brick tiles arranged in
              patterns</span>, creating continuity along the passage. A wall clock adds a <span className={styles.highlight}>playful sense of
              timelessness</span>, while a black-and-white sketch depicting urban life forms a striking backdrop to the dining area.
              Decorative pendant lights further enrich the spaces.
            </p>
            <p>
              The ceilings are treated with equal attention, with each bedroom receiving a distinct design. A particularly expressive
              circular ceiling artwork becomes an unusual focal point, while a passionate red bedroom wall introduces a <span className={styles.highlight}>playful,
              quirky character.</span> Apartment 88 ultimately brings together <span className={styles.highlight}>art, individuality and
              tranquillity</span>, transforming a familiar apartment typology into a home that feels deeply personal to its residents.
            </p>
          </div>
        </section>

        <section className={`site-container ${styles.gallery}`} aria-label="Apartment 88 gallery">
          {gallery.map((block, index) => {
            if (block.type === "masonry") {
              return (
                <div key={index} className={styles.galleryMasonry}>
                  {block.images.map((image) => (
                    <div key={image.src} className={styles.galleryMasonryItem}>
                      <Image src={image} alt="Apartment 88" sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImg} />
                    </div>
                  ))}
                </div>
              );
            }

            if (block.type === "full") {
              return (
                <div key={index} className={styles.galleryFull}>
                  <Image src={block.image} alt="Apartment 88" sizes="100vw" className={styles.galleryImg} />
                </div>
              );
            }

            if (block.type === "split") {
              const largeRatio = ratio(block.large);
              const stackRatios = block.stack.map(ratio);
              const stackCombinedRatio = 1 / stackRatios.reduce((sum, currentRatio) => sum + 1 / currentRatio, 0);

              return (
                <div key={index} className={styles.gallerySplit}>
                  <div className={styles.gallerySplitLarge} style={{ "--ratio": largeRatio }}>
                    <Image src={block.large} alt="Apartment 88" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                  </div>
                  <div className={styles.gallerySplitStack} style={{ "--ratio": stackCombinedRatio }}>
                    {block.stack.map((image, stackIndex) => (
                      <div key={image.src} className={styles.gallerySplitStackItem} style={{ "--ratio": stackRatios[stackIndex], "--height-weight": 1 / stackRatios[stackIndex] }}>
                        <Image src={image} alt="Apartment 88" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className={styles.galleryPair}>
                {block.images.map((image) => (
                  <div key={image.src} className={styles.galleryPairItem} style={{ "--ratio": ratio(image) }}>
                    <Image src={image} alt="Apartment 88" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                  </div>
                ))}
              </div>
            );
          })}
        </section>

        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <a href="https://www.instagram.com/spacesarchitects.ka/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">ig</a>
            <a href="https://x.com/SpacesArch_ka" aria-label="X" target="_blank" rel="noopener noreferrer">x</a>
            <a href="https://www.linkedin.com/company/spaces-architects-ka/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href="mailto:admin@spacesarchitects-ka.com" aria-label="Email">✉</a>
          </div>
        </section>

        <MoreProjects currentId="apartment-88" />
      </main>
      <Footer />
    </>
  );
}