import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/ASTRA-HEIGHTS/cover/HERO OP2.webp");
const photo1 = assetImage("projects/ASTRA-HEIGHTS/3_4/1.webp");
const photo2 = assetImage("projects/ASTRA-HEIGHTS/3_4/2.webp");
const photo3 = assetImage("projects/ASTRA-HEIGHTS/3_4/3.webp");
const photo4 = assetImage("projects/ASTRA-HEIGHTS/3_4/4.webp");
const photo5 = assetImage("projects/ASTRA-HEIGHTS/3_4/5.webp");
const photo6 = assetImage("projects/ASTRA-HEIGHTS/3_4/6.webp");
const photo7 = assetImage("projects/ASTRA-HEIGHTS/3_4/7.webp");
const photo8 = assetImage("projects/ASTRA-HEIGHTS/3_4/8.webp");
const photo9 = assetImage("projects/ASTRA-HEIGHTS/3_4/9.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Astra Heights — Spaces Architects@ka" };
export default function AstraHeightsPage() {
  return (
    <ProjectDetailPage
      title="Astra Height"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]}
      details={{
        Project: "Astra Height",
        Location: "Noida, Uttar Pradesh",
        Client: "Mr. Vinay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Designed as a calm, contemporary retreat, this apartment brings together warm timber, soft neutrals and carefully placed accents of colour to create an interior that feels refined yet deeply lived-in. The palette is intentionally restrained, allowing natural textures, artwork and furniture to bring character into each space.
        </>,
        <>
          Timber-clad walls establish a <Orange>sense of warmth throughout the living and dining areas</Orange>, balanced by softly upholstered furniture in earthy tones. The living room is composed as an intimate setting for conversation, with sculptural black seating, layered coffee tables and a textured rug adding depth against the muted backdrop. In the dining area, a generous stone-topped table becomes the centre of the home, surrounded by warm leather chairs and framed by a custom timber wall.
        </>,
        <>
          Art plays an important role in <Orange>personalising the apartment.</Orange> From expressive abstract compositions to sculptural pieces and textile-based artworks, each element introduces colour, form and individuality without overwhelming the architecture. Carefully selected lighting further shapes the interiors, with sculptural pendants acting as quiet focal points rather than merely functional fixtures.
        </>,
        <>
          The bedrooms continue the same language through <Orange>tactile fabrics, timber textures and muted earthy hues, creating a softer and more intimate atmosphere.</Orange> Across the apartment, the design balances contemporary detailing with warmth and familiarity, creating a home that feels collected, personal and timeless rather than overly designed.
        </>,
      ]}
    />
  );
}