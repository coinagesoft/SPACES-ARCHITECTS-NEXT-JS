import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/SCREEN-HOUSE/cover/COVER.webp");

const img1 = assetImage("projects/SCREEN-HOUSE/3_4/1.webp");
const img2 = assetImage("projects/SCREEN-HOUSE/3_4/2.webp");
const img3 = assetImage("projects/SCREEN-HOUSE/3_4/3.webp");
const img4 = assetImage("projects/SCREEN-HOUSE/3_4/4.webp");
const img5 = assetImage("projects/SCREEN-HOUSE/3_4/5.webp");
const img6 = assetImage("projects/SCREEN-HOUSE/3_4/6.webp");
const img7 = assetImage("projects/SCREEN-HOUSE/3_4/7.webp");
const img8 = assetImage("projects/SCREEN-HOUSE/3_4/8.webp");
const img9 = assetImage("projects/SCREEN-HOUSE/3_4/9.webp");
const img10 = assetImage("projects/SCREEN-HOUSE/3_4/10.webp");
const img11 = assetImage("projects/SCREEN-HOUSE/3_4/11.webp");
const img12 = assetImage("projects/SCREEN-HOUSE/3_4/12.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "The Screen House — Spaces Architects@ka" };

export default function TheScreenHousePage() {
  return (
    <ProjectDetailPage
      currentId="the-screen-house"
      title="The Screen House"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img4, img5,
        img2, img3,
        img8,
        img7, img6, img11,
        img9, img10,
        img12,
      ]}
      details={{
        Project: "The Screen House",
        Location: "New Delhi",
        Client: "Mr. Shashi Dawar",
        Status: "Completed",
      }}
      description={[
        <>
          Designed for a <Orange>family of six</Orange>, including two children, this contemporary residence balances a simple architectural expression with an <Orange>open, interconnected way of living</Orange>. Distributed across four levels, the middle floors accommodate the family’s private spaces, while the stilt and upper levels are dedicated to recreation.
        </>,
        <>
          Surrounded by buildings on three sides, the house adopts an outward-looking yet private planning strategy, using louvers, screens and carefully positioned openings to draw in daylight and air while maintaining <Orange>visual connections</Orange>. Double-height spaces act as <Orange>vertical connectors</Orange>, allowing light to travel deep into the home and linking the family’s living spaces across floors.
        </>,
        <>
          The interiors follow a <Orange>restrained monochrome palette</Orange>, enlivened by colourful artwork and furniture, while greenery is woven through both interior and exterior spaces. Bedrooms, kitchens and family lounges are arranged around these connected volumes, while the upper levels open into a bar, terrace garden and swimming pool, extending everyday living into the outdoors.
        </>,
        <>
          The result is a minimal yet vibrant family home, where <Orange>openness, privacy, recreation</Orange> and nature are carefully brought together.
        </>,
      ]}
    />
  );
}