import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/ALAYA-RESIDENCE/cover/COVER.webp");
const photo1 = assetImage("projects/ALAYA-RESIDENCE/3_4/1_300dpi.webp");
const photo2 = assetImage("projects/ALAYA-RESIDENCE/3_4/2_300dpi.webp");
const photo3 = assetImage("projects/ALAYA-RESIDENCE/3_4/3_300dpi.webp");
const photo4 = assetImage("projects/ALAYA-RESIDENCE/3_4/4_300dpi.webp");
const photo5 = assetImage("projects/ALAYA-RESIDENCE/3_4/5_300dpi.webp");
const photo6 = assetImage("projects/ALAYA-RESIDENCE/3_4/6_300dpi.webp");
const photo7 = assetImage("projects/ALAYA-RESIDENCE/3_4/7_300dpi.webp");
const photo8 = assetImage("projects/ALAYA-RESIDENCE/3_4/8_300dpi.webp");
const photo9 = assetImage("projects/ALAYA-RESIDENCE/3_4/9_300dpi.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Alaya Residence — Spaces Architects@ka" };
export default function AlayaResidencePage() {
  return (
    <ProjectDetailPage
     currentId="alaya-residence"
      title="Alaya Residence"
      location="Gurugram, Haryana"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]}
      details={{
        Project: "Alaya Residence",
        Location: "Gurugram, Haryana",
        Client: "Mr. Manish Madan",
        Status: "Completed",
      }}
      description={[
        <>
          Alaya is conceived as an <Orange>inward-looking urban dwelling</Orange>, shaped around the idea of a home as a place of pause, connection and retreat. At its heart, a <Orange>planted central void with a solitary tree</Orange> anchors the residence, drawing natural light deep into the house while visually connecting its multiple levels.
        </>,
        <>
          The house unfolds through <Orange>interconnected volumes, voids and sculptural staircases</Orange>, turning circulation into an architectural experience. Bridges, transparent partitions and framed openings maintain visual connections with the courtyard, allowing spaces to reveal themselves gradually while creating openness within a compact urban setting.
        </>,
        <>
          A dialogue between <Orange>earth and lightness</Orange> defines the material palette. Rough natural stone forms a tactile architectural spine, contrasted by crisp white planes and softened by warm timber across ceilings, screens and staircases. Glass dissolves boundaries between interior and landscape, allowing light and vegetation to permeate the spaces.
        </>,
        <>
          The exterior continues this language through clean <Orange>horizontal volumes, deep overhangs, planted terraces and patterned screens</Orange>. Perforated elements provide privacy while filtering light, while integrated greenery softens the residence against its urban setting.
        </>,
        <>
          Throughout the house, light becomes a material, animating stone, timber and polished surfaces through the day. Together with the central tree, stone wall and sculptural staircases, these moments define the character of Alaya—a dwelling where <Orange>nature, movement, light and stillness</Orange> converge within the city.
        </>,
      ]}
    />
  );
}