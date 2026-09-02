import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ id, image, name, excerpt, size = "sm" }) {
    return ( <
        Link href = { `/projects/${id}` }
        className = "group block" >
        <
        article >
        <
        div className = "relative w-full aspect-square overflow-hidden bg-line" >
        <
        Image src = { image }
        alt = { name }
        fill sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className = "object-cover transition-transform duration-500 group-hover:scale-105" /
        >
        <
        /div>{" "} <
        h3 className = "mt-4 text-sm md:text-base tracking-wide" > { name } < /h3>{" "} {
            excerpt && ( <
                >
                <
                p className = "mt-2 text-xs text-faint leading-relaxed line-clamp-4" > { " " } { excerpt } { " " } <
                /p>{" "} <
                span className = "inline-block mt-2 text-xs uppercase tracking-widest2 text-accent cursor-pointer hover:underline" >
                Read more { " " } <
                /span>{" "} <
                />
            )
        } { " " } <
        /article>{" "} <
        /Link>
    );
}