import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";
const hero = assetImage("projects/BRICK-HOUSE/cover/COVER.webp");
const photo1 = assetImage("projects/BRICK-HOUSE/3_4/1.webp");
const photo2 = assetImage("projects/BRICK-HOUSE/3_4/2.webp");
const photo3 = assetImage("projects/BRICK-HOUSE/3_4/3.webp");
const photo4 = assetImage("projects/BRICK-HOUSE/3_4/4.webp");
const photo5 = assetImage("projects/BRICK-HOUSE/3_4/5.webp");
const photo6 = assetImage("projects/BRICK-HOUSE/3_4/6.webp");
const photo7 = assetImage("projects/BRICK-HOUSE/3_4/7.webp");
const photo8 = assetImage("projects/BRICK-HOUSE/3_4/8.webp");
const photo9 = assetImage("projects/BRICK-HOUSE/3_4/9.webp");
const photo10 = assetImage("projects/BRICK-HOUSE/3_4/10.webp");
const photo11 = assetImage("projects/BRICK-HOUSE/3_4/11.webp");
const photo12 = assetImage("projects/BRICK-HOUSE/3_4/12.webp");
const photo13 = assetImage("projects/BRICK-HOUSE/3_4/13.webp");
const photo14 = assetImage("projects/BRICK-HOUSE/3_4/14.webp");
const coverPhoto2 = assetImage("projects/BRICK-HOUSE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "The Brick House — Spaces Architects@ka" };
export default function TheBrickHousePage() {
  return (
    <ProjectDetailPage
      currentId="brick-house"
      title="The Brick House"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7,
        photo8, photo9, photo10, photo11, photo12, photo13, photo14,
        coverPhoto2,
      ]}
      details={{
        Project: "The Brick House",
        Location: "New Delhi",
        Client: "Mr. Pradeep Goel",
        Status: "On-Going",
      }}
      description={[
        <>
          Designed as a contemporary family residence, the house brings together bold architectural forms, warm materials, and an abundance of greenery. The defining feature is a <Orange>triple-height living space</Orange>, visually and spatially connecting three floors while creating a dramatic sense of volume and openness.
        </>,
        <>
          The interiors continue this vertical connection through layered living spaces, a sculptural staircase, and carefully framed views. Warm wood, textured stone, terracotta tones, and soft neutral finishes create a refined yet inviting atmosphere. Large openings and carefully placed greenery blur the boundary between indoors and outdoors.
        </>,
        <>
          At the upper level, an <Orange>expansive terrace garden</Orange> becomes an extension of the living spaces, offering a private retreat with landscaped areas, seating, and an open connection to the sky. The façade combines curved brick volumes, dark textured surfaces, and vertical timber elements, giving the residence a strong yet welcoming identity.
        </>,
        <>
          Overall, the design is conceived as a <Orange>vertical home where architecture, light, greenery, and family life come together across every level.</Orange>
        </>,
      ]}
    />
  );
}