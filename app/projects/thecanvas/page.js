import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/THECANVAS/cover/COVER(LANDSCAPE.webp");
const photo1 = assetImage("projects/THECANVAS/3_4/1.webp");
const photo2 = assetImage("projects/THECANVAS/3_4/2.webp");
const photo3 = assetImage("projects/THECANVAS/3_4/3.webp");
const photo4 = assetImage("projects/THECANVAS/3_4/4.webp");
const photo5 = assetImage("projects/THECANVAS/3_4/5.webp");
const photo6 = assetImage("projects/THECANVAS/3_4/6.webp");
const photo7 = assetImage("projects/THECANVAS/3_4/7.webp");
const photo8 = assetImage("projects/THECANVAS/3_4/8.webp");
const photo9 = assetImage("projects/THECANVAS/3_4/9.webp");
const photo10 = assetImage("projects/THECANVAS/3_4/10.webp");
const photo11 = assetImage("projects/THECANVAS/3_4/11.webp");
const heroPhoto = assetImage("projects/THECANVAS/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "The Canvas — Spaces Architects@ka" };
export default function TheCanvasPage() {
  return (
    <ProjectDetailPage
      title="The Canvas"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10, photo11,
        heroPhoto,
      ]}
      details={{
        Project: "The Canvas",
        Location: "New Delhi",
        Client: "Mr. Pranav Goel",
        Status: "On-Going",
      }}
      description={[
        <>
          An art-driven apartment conceived as a <Orange>curated gallery of contemporary living,</Orange> where architecture and art exist in constant dialogue. Across the basement, stilt, and ground floors, the residence brings together a rich collection of <Orange>artworks, canvases, sculptural pieces, and statement installations,</Orange> giving each space a distinct visual identity.
        </>,
        <>
          Warm wood, refined stone, layered textures, and a restrained palette create a sophisticated backdrop, allowing the artwork to take centre stage. From bold abstract canvases and handcrafted mosaics to sculptural lighting and carefully composed art walls, the home feels <Orange>personal, expressive, and collected over time.</Orange>
        </>,
        <>
          The design celebrates the idea of living surrounded by art transforming everyday spaces <Orange>into intimate galleries while retaining warmth, comfort, and functionality.</Orange>
        </>,
      ]}
    />
  );
}