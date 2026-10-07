import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/ARCHITECTS-OFFICE/cover/COVER IMAGE.webp");

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

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Architect's Office — Spaces Architects@ka" };

export default function ArchitectsOfficePage() {
  return (
    <ProjectDetailPage
      currentId="architects-office"
      title="Architect's Office"
      location="South Extension, New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img5,
        img4, img2,
        img3, img6,
        img14, img9,
        img7,
        img10, img11,
        img12, img13,
        img8, img15,
      ]}
      details={{
        Project: "Architect's Office",
        Location: "South Extension, New Delhi",
        "Built-up Area": "1,500 sq. ft.",
        Status: "Completed",
      }}
      awards={[
        "World Inside Festival 2014 | Shortlisted – Office Category",
        "World Interiors News Awards 2014 | Shortlisted / Longlisted – Office Category",
        "IIA Awards 2015 | Shortlisted – Interior Projects Category",
        "World Architecture Community Awards | 35th Cycle | Winner – Interior Design Realised",
      ]}
      publications={[
        "ArchDaily",
        "Arch2O",
        "Contemporist",
        "Asian Paints Beautiful Homes",
        "Architizer",
      ]}
      description={[
        <>
          The studio was designed to create a culture and an environment where people can <Orange>work, play and interact</Orange>. It was envisioned as a space that brings happiness to everyday working and makes people feel connected to their surroundings. We believe that the environment plays an important role in <Orange>motivating and inspiring people</Orange>. This holds true for every creative individual, whether a writer, painter or dancer, as the surroundings, natural or man-made, often become an important part of their creative process.
        </>,
        <>
          The project reflects Ar. Kapil Aggarwal&apos;s journey and creative evolution over the years. As he explains, the design of the studio was shaped by <Orange>three key considerations</Orange>. The first was <Orange>personal</Orange>, with the office becoming a reflection of his experiences and practices over time. The second was the <Orange>experience</Orange> of those visiting the studio, allowing them to discover the space without any preconceived notions and experience the firm&apos;s design philosophy firsthand. Most importantly, the studio was designed around the people who work there, with a strong emphasis on creating a place where they could feel <Orange>comfortable, inspired and at ease</Orange>.
        </>,
        <>
          Surrounded by <Orange>grey textured walls, yellow tag boards, white oak finishes, changing ceiling forms and fluid furniture</Orange>, the young architects find a setting that allows them to enjoy the process while pursuing their passion for reinventing architecture.
        </>,
      ]}
    />
  );
}