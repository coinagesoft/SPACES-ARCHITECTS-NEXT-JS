"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ParallaxHeroImage.module.css";

export default function ParallaxHeroImage({ src, mobileSrc, alt, className, imageClassName, children }) {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId;

    const updatePosition = () => {
      frameId = undefined;
      if (reducedMotion.matches || !heroRef.current || !mediaRef.current) return;

      // Phones with a dedicated cover image show it whole (no parallax crop).
      if (mobileSrc && window.matchMedia("(max-width: 767px)").matches) {
        mediaRef.current.style.transform = "";
        return;
      }

      const bounds = heroRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      // A 240px travel range makes the image motion apparent while the hero
      // is in view (about 12px for every 100px of page scroll).
      const offset = (0.5 - progress) * 240;
      mediaRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updatePosition);
    };

    const resetForReducedMotion = () => {
      if (reducedMotion.matches && mediaRef.current) mediaRef.current.style.transform = "";
      requestUpdate();
    };

    updatePosition();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", resetForReducedMotion);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", resetForReducedMotion);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [mobileSrc]);

  return (
    <section
      ref={heroRef}
      className={`${className || ""} ${mobileSrc ? styles.hasMobileCover : ""}`}
    >
      <div ref={mediaRef} className={styles.media}>
        <div className={styles.zoom}>
          {mobileSrc ? (
            <>
              {/* Desktop / tablet cover (hidden on phones). Not `priority`, so
                  phones don't preload an image they never show. */}
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className={`${imageClassName || ""} ${styles.desktopOnly}`}
              />
              {/* Phone cover (hidden from 768px up). Rendered at its natural
                  aspect ratio so nothing is cropped. */}
              <Image
                src={mobileSrc}
                alt={alt}
                sizes="100vw"
                priority
                className={styles.mobileOnly}
              />
            </>
          ) : (
            <Image src={src} alt={alt} fill priority sizes="100vw" className={imageClassName} />
          )}
        </div>
      </div>
      {children}
    </section>
  );
}
