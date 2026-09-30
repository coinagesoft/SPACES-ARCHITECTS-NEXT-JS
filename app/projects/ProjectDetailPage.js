import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import MoreProjects from "@/components/MoreProjects";
import styles from "./slender-house/page.module.css";
import buildProjectGallery from "./buildProjectGallery";
import ShareIcons from "@/components/ShareIcons";

const ratio = (image) => (image?.width && image?.height ? image.width / image.height : 1);

// Group images into rows of 2. A leftover single image gets its own row.
function chunkRows(images) {
  const rows = [];
  for (let i = 0; i < images.length; i += 2) {
    rows.push(images.slice(i, i + 2));
  }
  return rows;
}

// Two equal-width columns, so the vertical white line is in the same place on every row.
// Both images in a row share one aspect ratio, so the horizontal white line is continuous too.
function AlignedMasonry({ images, title }) {
  return (
    <>
      {chunkRows(images).map((rowImages, rowIndex) => {
        const isSingle = rowImages.length === 1;
        // Geometric mean of the row's ratios keeps the crop on each image as small as possible
        const rowRatio = Math.pow(
          rowImages.reduce((p, img) => p * ratio(img), 1),
          1 / rowImages.length
        );

        return (
          <div
            key={rowIndex}
            className={styles.galleryPair}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} // gap comes from galleryPair
          >
            {rowImages.map((image) => (
              <div
                key={image.src}
                style={{
                  position: "relative",
                  aspectRatio: rowRatio,
                  minWidth: 0,
                  gridColumn: isSingle ? "1 / -1" : "auto",
                }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 48vw, 92vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default function ProjectDetailPage({
  currentId,
  title,
  location,
  hero,
  photos = [],
  details, 
  heroVideo,
  awards = [],
  description = [],
}) {
  const gallery = buildProjectGallery(photos.filter(Boolean));
  const heroText = (
  <div className={`site-container ${styles.heroTextWrap}`}>
    <div className={styles.heroText}>
      <h1>{title}</h1>
      {location && <p>{location}</p>}
    </div>
  </div>
);
  

  return (
    <>
      <main>
        <SiteChrome dark />

       {heroVideo ? (
  <section className={styles.hero}>
    <video
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
    {heroText}
  </section>
) : (
  <ParallaxHeroImage
    className={styles.hero}
    imageClassName={styles.heroImage}
    src={hero}
    alt={title}
  >
    {heroText}
  </ParallaxHeroImage>
)}

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
  {awards.length > 0 && (
    <div>
      <h3>Awards:</h3>
      <ul>
        {awards.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  )}
</aside>
          <div className={styles.infoBody}>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {gallery.length > 0 && (
          <section className={`site-container ${styles.gallery}`} aria-label={`${title} gallery`}>
            {gallery.map((row, index) => {
              if (row.type === "masonry") {
                return <AlignedMasonry key={index} images={row.images} title={title} />;
              }

              if (row.type === "full") {
                return (
                  <div key={row.image.src || index} className={styles.galleryFull}>
                    <Image src={row.image} alt={title} sizes="100vw" className={styles.galleryImg} />
                  </div>
                );
              }

              if (row.type === "split") {
                const largeRatio = ratio(row.large);
                const stackRatios = row.stack.map(ratio);
                const stackCombinedRatio =
                  1 / stackRatios.reduce((sum, r) => sum + 1 / r, 0);

                return (
                  <div key={index} className={styles.gallerySplit}>
                    <div className={styles.gallerySplitLarge} style={{ "--ratio": largeRatio }}>
                      <Image
                        src={row.large}
                        alt={title}
                        fill
                        sizes="(min-width: 768px) 48vw, 92vw"
                        className={styles.galleryImgFit}
                      />
                    </div>
                    <div className={styles.gallerySplitStack} style={{ "--ratio": stackCombinedRatio }}>
                      {row.stack.map((image, stackIndex) => (
                        <div
                          key={image.src}
                          className={styles.gallerySplitStackItem}
                          style={{
                            "--ratio": stackRatios[stackIndex],
                            "--height-weight": 1 / stackRatios[stackIndex],
                          }}
                        >
                          <Image
                            src={image}
                            alt={title}
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

              return (
                <div key={index} className={styles.galleryPair}>
                  {(row.images || []).map((image) => (
                    <div
                      key={image.src}
                      className={styles.galleryPairItem}
                      style={{ "--ratio": ratio(image) }}
                    >
                      <Image
                        src={image}
                        alt={title}
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
        )}

        <section className={styles.share}>
          <p>Share</p>
          <div className={styles.shareIcons}>
            <ShareIcons />
          </div>
        </section>

        <MoreProjects currentId={currentId} />
      </main>
      <Footer />
    </>
  );
}