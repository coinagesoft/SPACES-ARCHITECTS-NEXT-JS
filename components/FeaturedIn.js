import { assets } from "@/assets";
import styles from "./FeaturedIn.module.css";

function LogoSet({ logos, hidden = false }) {
  return logos.map((logo) => (
    <div
      key={`${hidden ? "copy-" : ""}${logo.name}`}
      className={styles.logo}
      aria-hidden={hidden}
      // Inline styles are a deliberate safety net: they apply regardless of
      // whether the CSS Module stylesheet has loaded/matched correctly, so a
      // logo can never render at its oversized natural dimensions.
      style={{
        position: "relative",
        flex: "0 0 var(--logo-basis, 112px)",
        width: "var(--logo-basis, 112px)",
        maxWidth: "var(--logo-basis, 112px)",
        height: "var(--logo-height, 58px)",
        marginRight: "var(--logo-gap, 28px)",
        overflow: "hidden",
      }}
    >
      <img
        src={typeof logo.image === "string" ? logo.image : logo.image.src}
        alt={hidden ? "" : logo.name}
        className={styles.logoImage}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  ));
}

function MarqueeRow({ logos, direction }) {
  return (
    <div className={styles.marquee}>
      <div className={`${styles.track} ${direction === "right" ? styles.trackRight : styles.trackLeft}`}>
        <LogoSet logos={logos} />
        {/* An identical second set lets the animation loop without a jump. */}
        <LogoSet logos={logos} hidden />
      </div>
    </div>
  );
}

export default function FeaturedIn() {
  const splitAt = Math.ceil(assets.featuredIn.length / 2);
  const firstRow = assets.featuredIn.slice(0, splitAt);
  const secondRow = assets.featuredIn.slice(splitAt);

  return (
    <section className={`${styles.featuredIn} site-container`}>
      <h2 className={styles.heading}>
        Featured In
      </h2>
      <div className={styles.rows}>
        <MarqueeRow logos={firstRow} direction="left" />
        <MarqueeRow logos={secondRow} direction="right" />
      </div>
    </section>
  );
}