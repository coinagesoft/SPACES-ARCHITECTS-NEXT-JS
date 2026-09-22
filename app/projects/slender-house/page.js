import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import MoreProjects from "@/components/MoreProjects";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import { assets } from "@/assets";
import buildProjectGallery from "../buildProjectGallery";
import styles from "./page.module.css";

export const metadata = {
  title: "6 X 18 Slender House — Spaces Architects@ka",
};

const details = {
  Project: "6 X 18 Slender House",
  "Completion Year": "2024",
  Area: "6550 sq. ft.",
  Location: "New Delhi",
  Client: "Mr. Malhotra",
  Status: "Completed",
};

const photos = assets.slenderHouse.gallery.filter(Boolean);
const gallery = buildProjectGallery(photos);
const ratio = (image) => (image && image.width && image.height ? image.width / image.height : 1);

export default function SlenderHousePage() {
  return (
    <>
      <main>
        <SiteChrome dark />

        <ParallaxHeroImage
          className={styles.hero}
          imageClassName={styles.heroImage}
          src={assets.slenderHouse.hero}
          alt="6 X 18 Slender House"
        >
          <div className={`site-container ${styles.heroTextWrap}`}>
            <div className={styles.heroText}>
              <h1>6 X 18 Slender House</h1>
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
              Conceived around the philosophy of <span className={styles.highlight}>“less is more,”</span>{" "}
              Slender House transforms a modest footprint into a vertically connected family home.
              Staggered cut-outs and strategically placed skylights punctuate the volume, bringing daylight,
              cross-ventilation and visual connections across its compact profile, even at the cost of usable floor area.
            </p>
            <p>
              These <span className={styles.highlight}>voids become more than environmental devices;</span> they create
              moments of interaction between generations, allowing shared views and changing patterns of light to
              connect the family across floors.
            </p>
            <p>
              <span className={styles.highlight}>Each level responds to a different family member:</span> formal living,
              dining and bar spaces occupy the ground floor; the first serves the father with a bedroom, kitchen and
              puja space; the individual bedrooms and quarters are shaped around their personalities; and the third
              becomes the couple’s private retreat with a bedroom, study and mandir. The terrace completes the home as
              a space for nature and togetherness.
            </p>
            <p>
              Through passive ventilation, natural daylight and carefully tailored spaces, Slender House demonstrates
              that a compact home can be both environmentally responsive and emotionally expansive{" "}
              <span className={styles.highlight}>where quality takes precedence over quantity.</span>
            </p>
          </div>
        </section>

        <section className={`site-container ${styles.gallery}`} aria-label="Slender House gallery">
          {gallery.map((block, index) => {
            if (block.type === "masonry") {
              return (
                <div key={index} className={styles.galleryMasonry}>
                  {block.images.map((image) => (
                    <div key={image.src} className={styles.galleryMasonryItem}>
                      <Image src={image} alt="6 X 18 Slender House" sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImg} />
                    </div>
                  ))}
                </div>
              );
            }

            if (block.type === "full") {
              return (
                <div key={index} className={styles.galleryFull}>
                  <Image src={block.image} alt="6 X 18 Slender House" sizes="100vw" className={styles.galleryImg} />
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
                    <Image src={block.large} alt="6 X 18 Slender House" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
                  </div>
                  <div className={styles.gallerySplitStack} style={{ "--ratio": stackCombinedRatio }}>
                    {block.stack.map((image, stackIndex) => (
                      <div
                        key={image.src}
                        className={styles.gallerySplitStackItem}
                        style={{ "--ratio": stackRatios[stackIndex], "--height-weight": 1 / stackRatios[stackIndex] }}
                      >
                        <Image src={image} alt="6 X 18 Slender House" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
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
                    <Image src={image} alt="6 X 18 Slender House" fill sizes="(min-width: 768px) 48vw, 92vw" className={styles.galleryImgFit} />
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

        <MoreProjects currentId="slender-house" />
      </main>
      <Footer />
    </>
  );
}