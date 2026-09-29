import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/SANCTUM-HOUSE/cover/COVER.webp");
// const photo1 = assetImage("projects/SANCTUM-HOUSE/3_4/1.webp");
// const photo2 = assetImage("projects/SANCTUM-HOUSE/3_4/2.webp");
const photo3 = assetImage("projects/SANCTUM-HOUSE/3_4/3.webp");
const photo4 = assetImage("projects/SANCTUM-HOUSE/3_4/4.webp");
const photo5 = assetImage("projects/SANCTUM-HOUSE/3_4/5.webp");
const photo6 = assetImage("projects/SANCTUM-HOUSE/3_4/6.webp");
const photo7 = assetImage("projects/SANCTUM-HOUSE/3_4/7.webp");
const photo8 = assetImage("projects/SANCTUM-HOUSE/3_4/8.webp");
const photo9 = assetImage("projects/SANCTUM-HOUSE/3_4/9.webp");
const photo10 = assetImage("projects/SANCTUM-HOUSE/3_4/10.webp");
const photo11 = assetImage("projects/SANCTUM-HOUSE/3_4/11.webp");
const photo12 = assetImage("projects/SANCTUM-HOUSE/3_4/12.webp");
const photo13 = assetImage("projects/SANCTUM-HOUSE/3_4/13.webp");
const heroPhoto = assetImage("projects/SANCTUM-HOUSE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "Sanctum House — Spaces Architects@ka" };

export default function SanctumHousePage() {
  return (
    <ProjectDetailPage
      currentId="sanctum-house"
      title="Sanctum House"
      location="Aligarh, Uttar Pradesh"
      hero={hero}
      photos={[
 photo3, photo4, photo5, photo6, photo7,
        photo8, photo9, photo10, photo11, photo12, photo13,
       
      ]}
      details={{
        Project: "The Sanctum House",
        Location: "Aligarh, Uttar Pradesh",
        Client: "Mr. Mudit Goel",
        Status: "Ongoing",
      }}
      description={[
        <>
          Sanctum House is conceived as a private urban retreat, shaped through <Orange>layered volumes, filtered views and controlled openness.</Orange> Deep overhangs, recessed openings and projecting masses create a façade defined by shadow, depth and strong horizontal lines.
        </>,
        <>
          A <Orange>patterned screen</Orange> forms a key architectural element, filtering light and views while creating a porous threshold between the street and the home. <Orange>Natural stone, warm timber, textured plaster and earthy screens</Orange> establish a restrained yet tactile material palette, softened by abundant planting across balconies, terraces and the roof.
        </>,
        <>
          The design balances <Orange>solid and void, privacy and openness,</Orange> allowing the house to remain connected to its surroundings while retaining a protected character. True to its name, Sanctum House is envisioned as a quiet sanctuary within the city, where architecture, landscape and filtered light create a sense of retreat.
        </>,
      ]}
    />
  );
}