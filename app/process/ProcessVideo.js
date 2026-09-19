"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ProcessVideo({ video }) {
    const [showControls, setShowControls] = useState(false);

    return (
        <div
            className={styles.videoFrame}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                className={styles.video}
                src={video}
                controls={showControls}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
        </div>
    );
}