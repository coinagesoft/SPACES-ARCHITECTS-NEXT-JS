import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/COLOR-BOX-OFFICE/cover/COVER.webp");

const img1 = assetImage("projects/COLOR-BOX-OFFICE/3_4/1.webp");
const img2 = assetImage("projects/COLOR-BOX-OFFICE/3_4/2.webp");
const img3 = assetImage("projects/COLOR-BOX-OFFICE/3_4/3.webp");
const img4 = assetImage("projects/COLOR-BOX-OFFICE/3_4/4.webp");
const img5 = assetImage("projects/COLOR-BOX-OFFICE/3_4/5.webp");
const img6 = assetImage("projects/COLOR-BOX-OFFICE/3_4/6.webp");
const img7 = assetImage("projects/COLOR-BOX-OFFICE/3_4/7.webp");
const img8 = assetImage("projects/COLOR-BOX-OFFICE/3_4/8.webp");
const img9 = assetImage("projects/COLOR-BOX-OFFICE/3_4/9.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "The Colour Box Office — Spaces Architects@ka" };

export default function TheColorBoxOfficePage() {
  return (
    <ProjectDetailPage
      currentId="the-color-box-office"
      title="The Colour Box Office"
      location="Gurgaon"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img2,
        img3,
        img4, img5,
        img6,
        img7, img8,
        img9,
      ]}
      details={{
        Project: "The Colour Box Office",
        Location: "Gurgaon",
        Client: "Mr. Vishal",
        Status: "Completed (2020)",
        Area: "2000 Sq.ft",
      }}
      description={[
        <>
          Conceived as a contemporary workplace that balances productivity, creativity and informality, this office transforms a compact commercial interior into a bright, collaborative environment. The design uses colour and material as spatial tools, creating a workplace that feels energetic without becoming visually overwhelming.
        </>,
        <>
          A restrained base of <Orange>white surfaces, exposed textures and neutral flooring</Orange> is layered with <Orange>warm OSB panels, teal-green frames, and carefully placed accents of mustard yellow, coral, red and green.</Orange> The raw, tactile quality of the OSB forms a recurring material language across walls, workstations and partitions, bringing warmth and a sense of craft to an otherwise functional office setting.
        </>,
        <>
          The planning revolves around open workstations, transparent meeting rooms and flexible collaborative zones, allowing <Orange>visual continuity</Orange> and natural light to move through the space. Glass partitions framed in teal provide separation while maintaining openness, while integrated planters introduce greenery and soften the workspace.
        </>,
        <>
          The ceiling becomes an expressive fifth elevation, combining <Orange>exposed services with suspended geometric acoustic elements in layered colours.</Orange> This creates a playful visual identity while addressing the practical requirements of acoustics, lighting and services.
        </>,
        <>
          Overall, the interior adopts a <Orange>young, graphic and experimental character,</Orange> where industrial elements are softened by greenery, natural textures and a vibrant colour palette. The result is a workplace designed not simply as an office, but as an environment that encourages <Orange>interaction, movement and creative exchange.</Orange>
        </>,
      ]}
    />
  );
}