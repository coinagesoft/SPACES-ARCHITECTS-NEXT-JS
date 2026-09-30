import ProjectDetailPage, { Highlight } from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

// Hero image from ARCHITECTS-OFFICE/cover
const heroImage = assetImage("projects/ARCHITECTS-OFFICE/cover/COVER IMAGE.webp");
// Project photographs from ARCHITECTS-OFFICE/3_4
const img1 = assetImage("projects/ARCHITECTS-OFFICE/3_4/1.webp");
const img2 = assetImage("projects/ARCHITECTS-OFFICE/3_4/2.webp");
const img3 = assetImage("projects/ARCHITECTS-OFFICE/3_4/3.webp");
const img4 = assetImage("projects/ARCHITECTS-OFFICE/3_4/4.webp");
const img5 = assetImage("projects/ARCHITECTS-OFFICE/3_4/5.webp");
const img6 = assetImage("projects/ARCHITECTS-OFFICE/3_4/6.webp");
const img7 = assetImage("projects/ARCHITECTS-OFFICE/3_4/7.webp");
const img8 = assetImage("projects/ARCHITECTS-OFFICE/3_4/8.webp");
const img9 = assetImage("projects/ARCHITECTS-OFFICE/3_4/9.webp");
const img10 = assetImage("projects/ARCHITECTS-OFFICE/3_4/10.webp");
const img11 = assetImage("projects/ARCHITECTS-OFFICE/3_4/11.webp");
const img12 = assetImage("projects/ARCHITECTS-OFFICE/3_4/12.webp");
const img13 = assetImage("projects/ARCHITECTS-OFFICE/3_4/13.webp");
const img14 = assetImage("projects/ARCHITECTS-OFFICE/3_4/14.webp");
const img15 = assetImage("projects/ARCHITECTS-OFFICE/3_4/15.webp");

// All content for this project lives right here — edit freely.

const awards = [
  "World Inside Festival 2014 – Shortlisted in Office Category",
  "World Interior News Awards 2014 – Shortlisted",
  "IIA Awards 2015 – Shortlisted in Interior projects category",
  "World Architecture Community Awards 2020 35th cycle – Winner for Spaces Architects@KA Studio Publications",
  "Custom Made Office –II",
];

const gallery = [
  { type: "pair", images: [img1, img5] },
  
  { type: "pair", images: [img4, img2] },
  { type: "pair", images: [img3, img6] },
  
  { type: "pair", images: [img14, img9] },
  { type: "full", image: img7 },
  { type: "pair", images: [img10, img11] },
  { type: "pair", images: [img12, img13] },
  { type: "pair", images: [img8, img15] },
];

export const metadata = {
  title: "Architect's Office — Spaces Architects@ka",
};

const details = {
  Project: "Architect's Office",
  Location: "South Extension, New Delhi",
  Status: "Completed",
};

export default function ArchitectsOfficePage() {
  return (
    <ProjectDetailPage
      currentId="architects-office"
      title="Architect's Office"
      location="South Extension, New Delhi"
      hero={heroImage}
      gallery={gallery}
      details={details}
      description={[
        <>
          The studio was designed to create a culture and an environment where people can{" "}
          <Highlight>work, play and interact</Highlight>. It was envisioned
          as a space that brings happiness to everyday working and makes people feel connected to
          their surroundings. We believe that the environment plays an important role in{" "}
          <Highlight>motivating and inspiring people</Highlight>. This holds
          true for every creative individual, whether a writer, painter or dancer, as the
          surroundings, natural or man-made, often become an important part of their creative
          process.
        </>,
        <>
          The project reflects Ar. Kapil Aggarwal&apos;s journey and creative evolution over the
          years. As he explains, the design of the studio was shaped by{" "}
          <Highlight>three key considerations</Highlight>. The first was{" "}
          <Highlight>personal</Highlight>, with the office becoming a
          reflection of his experiences and practices over time. The second was the{" "}
          <Highlight>experience</Highlight> of those visiting the studio,
          allowing them to discover the space without any preconceived notions and experience
          the firm&apos;s design philosophy firsthand. Most importantly, the studio was designed
          around the people who work there, with a strong emphasis on creating a place where
          they could feel{" "}
          <Highlight>comfortable, inspired and at ease</Highlight>.
        </>,
        <>
          Surrounded by{" "}
          <Highlight>
            grey textured walls, yellow tag boards, white oak finishes, changing ceiling forms
            and fluid furniture
          </Highlight>
          , the young architects find a setting that allows them to enjoy the process while
          pursuing their passion for reinventing architecture.
        </>,
      ]}
    />
  );
}