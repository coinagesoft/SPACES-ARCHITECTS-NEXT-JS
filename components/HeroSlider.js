"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Renders one slide as <picture>: phones get the dedicated mobile photo and
// desktops get the desktop photo, decided by the browser from the media query.
// Previously the server HTML always preloaded the desktop image and the mobile
// image was only swapped in after hydration, so phones downloaded both.
function SlideImage({ project, isActive, eager }) {
    const common = {
        alt: project.name,
        fill: true,
        sizes: "100vw",
        priority: eager,
        className: `object-cover transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`,
    };

    const desktop = getImageProps({ ...common, src: project.image });
    const mobile = project.mobileImage
        ? getImageProps({ ...common, src: project.mobileImage })
        : null;

    return (
        <picture>
            {mobile && (
                <source media="(max-width: 767px)" srcSet={mobile.props.srcSet} sizes="100vw" />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img {...desktop.props} />
        </picture>
    );
}

export default function HeroSlider({ projects }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");

        const updateIsMobile = () => setIsMobile(mediaQuery.matches);
        updateIsMobile();

        mediaQuery.addEventListener?.("change", updateIsMobile);
        return () => mediaQuery.removeEventListener?.("change", updateIsMobile);
    }, []);

    // Mobile shows only the slides that have a dedicated mobileImage.
    // Desktop keeps the full list. If no slide has a mobileImage, mobile uses the full list too.
    const mobileSlides = projects.filter((project) => project.mobileImage);
    const slides =
        isMobile && mobileSlides.length > 0 ? mobileSlides : projects;

    useEffect(() => {
        setActiveIndex(0);
    }, [isMobile]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(
                (currentIndex) => (currentIndex + 1) % slides.length
            );
        }, 6000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const activeProject = slides[activeIndex] ?? slides[0];

    return (
        <section
            className="relative block w-full h-screen min-h-screen overflow-hidden"
            // Mobile only: fill exactly the visible screen (address bar shown or hidden).
            style={isMobile ? { height: "100dvh", minHeight: "100dvh" } : undefined}
        >
            {slides.map((project, index) => {
                // Only mount the slide on screen, the one fading out and the next one
                // (so it is already loaded when it fades in). Mounting all slides made
                // the browser download every full-screen image on page load.
                const total = slides.length;
                const prevIndex = (activeIndex - 1 + total) % total;
                const nextIndex = (activeIndex + 1) % total;
                if (index !== activeIndex && index !== prevIndex && index !== nextIndex) return null;

                return (
                    <SlideImage
                        key={`${project.id}-${index}`}
                        project={project}
                        isActive={index === activeIndex}
                        eager={index === 0 || index === activeIndex}
                    />
                );
            })}

            {/* Dark overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/20" />

            {/* Whole slide is clickable and opens the active project */}
            <Link
                href={`/projects/${activeProject.id}`}
                prefetch={true}
                aria-label={activeProject.name}
                className="absolute inset-0 z-10"
            />

            {/* Hero title */}
            <div className="pointer-events-none absolute bottom-10 left-0 right-0 z-20 site-container">
                <Link
                    href={`/projects/${activeProject.id}`}
                    prefetch={true}
                    className="pointer-events-auto inline-block transition-opacity duration-200 hover:opacity-80"
                >
                    <h1
                        key={`${activeProject.id}-${activeIndex}`}
                        className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-widest2 uppercase animate-[hero-title-in_700ms_ease-in-out]"
                    >
                        {activeProject.name}
                    </h1>
                </Link>
            </div>

        </section>
    );
}