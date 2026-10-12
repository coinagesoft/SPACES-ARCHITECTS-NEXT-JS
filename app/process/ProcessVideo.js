"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export default function ProcessVideo({ video }) {
    const [showControls, setShowControls] = useState(false);
    const videoRef = useRef(null);

    // Only load metadata up front, and play/pause as the video scrolls in/out of view.
    // (Before, all six videos downloaded and played at once.)
    useEffect(() => {
        const el = videoRef.current;
        if (!el || typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.play().catch(() => {});
                } else {
                    el.pause();
                }
            },
            { threshold: 0.25 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={styles.videoFrame}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                className={styles.video}
                src={video}
                controls={showControls}
                loop
                muted
                playsInline
                preload="metadata"
            />
        </div>
    );
}