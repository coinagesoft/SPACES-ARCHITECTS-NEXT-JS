import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const PROCESS_STEPS = [
    ["01", "Our Design Process", "We take pride in our design process, which starts with understanding our clients' vision for the space and the story behind it. We then work collaboratively, leveraging the diverse skillsets of our team to create designs that look good and function well.", "01-design-process"],
    ["02", "Studio Design", "Our studio reflects the way we work, with an open and inviting environment that promotes communication and the sharing of ideas. This enables our team of architects, designers, and engineers to work seamlessly together.", "02-studio-design"],
    ["03", "Design Storytelling", "Every space has a story to tell. We start by understanding our clients, their needs, and their vision, then create a design narrative that gives meaning and purpose to the space.", "03-design-storytelling"],
    ["04", "Symbiosis in Design", "We create designs that are beautiful, sustainable, and environmentally responsible. Our teams work collaboratively to incorporate sustainable technologies and practices into every project.", "04-symbiosis"],
    ["05", "Innovative Technology", "The latest technology enhances our design process, allowing us to create designs that are more accurate, efficient, and innovative. Virtual Reality enables clients to experience their space before it is built.", "05-technology"],
    ["06", "Sketching and Model Making", "Sketching helps us quickly visualize and iterate on ideas. Model making creates physical representations that help us understand spatial relationships and proportions.", "06-sketching"],
];

export const metadata = { title: "Process - Spaces Architects@ka" };

export default function ProcessPage() {
    return ( <
        main className = { styles.page } >
        <
        SiteChrome / >
        <
        section className = { styles.header } >
        <
        h1 className = { styles.pageTitle } > Process < /h1> <
        p className = { styles.intro } >
        Welcome to Spaces Architects @ka, where we believe in designing spaces that are aesthetically pleasing and sustainable.Our approach incorporates technology, storytelling, and symbiosis to create innovative designs that exceed our clients ' expectations. <
        /p> <
        /section> <
        section className = { styles.steps } > {
            PROCESS_STEPS.map(([number, title, description, fileName]) => ( <
                article className = { styles.step }
                key = { number } >
                <
                div className = { styles.videoCard } >
                <
                video className = { styles.video }
                src = { `/videos/process/${fileName}.mp4` }
                poster = { `/images/process/${fileName}.jpg` }
                controls preload = "metadata" /
                >
                <
                /div> <
                div className = { styles.stepContent } >
                <
                span className = { styles.stepNumber } > { number } < /span> <
                div >
                <
                h2 className = { styles.stepTitle } > { title } < /h2> <
                p className = { styles.stepDescription } > { description } < /p> <
                /div> <
                /div> <
                /article>
            ))
        } <
        /section> <
        section className = { styles.closing } >
        <
        p >
        Spaces Architects @ka is dedicated to designing sustainable and functional spaces that reflect our clients ' vision. Our unique approach combines storytelling, symbiosis, and technology with traditional design tools to create meaningful architecture. <
        /p> <
        /section> <
        Footer / >
        <
        /main>
    );
}