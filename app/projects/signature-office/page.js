import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/SIGNATURE-OFFICE/cover/COVER.webp");
const photo1 = assetImage("projects/SIGNATURE-OFFICE/3_4/1.webp");
const photo2 = assetImage("projects/SIGNATURE-OFFICE/3_4/2.webp");
const photo3 = assetImage("projects/SIGNATURE-OFFICE/3_4/3.webp");
const photo4 = assetImage("projects/SIGNATURE-OFFICE/3_4/4.webp");
const photo5 = assetImage("projects/SIGNATURE-OFFICE/3_4/5.webp");
const photo6 = assetImage("projects/SIGNATURE-OFFICE/3_4/6.webp");
const coverPhoto2 = assetImage("projects/SIGNATURE-OFFICE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "The Signature Office — Spaces Architects@ka" };
export default function TheSignatureOfficePage() {
  return (
    <ProjectDetailPage
      title="The Signature Office"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        coverPhoto2,
      ]}
      details={{
        Project: "The Signature Office",
        Location: "Noida, Uttar Pradesh",
        Client: "Express Builders",
        Status: "Completed",
      }}
      description={[
        <>
          This office reimagines the workplace through a lively composition of <Orange>colour, geometry and movement</Orange>. Simple forms of <Orange>circles, lines, grids and blocks</Orange> become the defining architectural language, creating an environment that feels contemporary, energetic and distinctly crafted.
        </>,
        <>
          A neutral foundation of <Orange>light timber, warm flooring and white surfaces</Orange> allows saturated blue to take centre stage, flowing across walls, ceilings and joinery. <Orange>Green, pink and muted yellow accents</Orange> add moments of contrast, giving individual spaces their own identity.
        </>,
        <>
          <Orange>Circular motifs, sculptural lighting, geometric screens and timber detailing</Orange> create a playful dialogue between soft and rigid forms, while glass partitions maintain openness and visual continuity. The result is a workplace that is precise yet playful, functional yet expressive, with colour and form shaping the experience as much as the architecture itself.
        </>,
      ]}
    />
  );
}