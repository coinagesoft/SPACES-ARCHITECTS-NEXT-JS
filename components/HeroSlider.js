"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlider({ projects }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(
                (currentIndex) => (currentIndex + 1) % projects.length
            );
        }, 6000);

        return () => clearInterval(timer);
    }, [projects.length]);

    const activeProject = projects[activeIndex];

    return (
        <section className="relative w-full h-screen min-h-screen overflow-hidden">
            {projects.map((project, index) => (
                <Image
                    key={project.id}
                    src={project.image}
                    alt={project.name}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={`object-cover transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Hero title */}
            <div className="absolute bottom-10 left-0 right-0 site-container">
                <h1
                    key={activeProject.id}
                    className="text-white text-xl md:text-2xl lg:text-3xl font-light tracking-widest2 uppercase animate-[hero-title-in_700ms_ease-in-out]"
                >
                    {activeProject.name}
                </h1>
            </div>

            {/* Slider indicators */}
            <div className="absolute bottom-10 right-6 md:right-10 flex gap-2">
                {projects.map((project, index) => (
                    <button
                        key={project.id}
                        type="button"
                        aria-label={`Show ${project.name}`}
                        aria-current={
                            index === activeIndex ? "true" : undefined
                        }
                        onClick={() => setActiveIndex(index)}
                        className={`h-1 transition-all duration-300 ${index === activeIndex
                                ? "w-8 bg-white"
                                : "w-4 bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}