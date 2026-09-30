import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/EXPRESS-OFFICE/cover/Cover Image.webp");

const photo1 = assetImage("projects/EXPRESS-OFFICE/3_4/1.webp");
const photo2 = assetImage("projects/EXPRESS-OFFICE/3_4/2.webp");
const photo3 = assetImage("projects/EXPRESS-OFFICE/3_4/3.webp");
const photo4 = assetImage("projects/EXPRESS-OFFICE/3_4/4.webp");
const photo5 = assetImage("projects/EXPRESS-OFFICE/3_4/5.webp");
const photo6 = assetImage("projects/EXPRESS-OFFICE/3_4/6.webp");
const photo7 = assetImage("projects/EXPRESS-OFFICE/3_4/7.webp");
const photo8 = assetImage("projects/EXPRESS-OFFICE/3_4/8.webp");
const photo9 = assetImage("projects/EXPRESS-OFFICE/3_4/9.webp");
const photo10 = assetImage("projects/EXPRESS-OFFICE/3_4/10.webp");
const photo11 = assetImage("projects/EXPRESS-OFFICE/3_4/11.webp");
const photo12 = assetImage("projects/EXPRESS-OFFICE/3_4/12.webp");
const photo13 = assetImage("projects/EXPRESS-OFFICE/3_4/13.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Express Office — Spaces Architects@ka" };

export default function ExpressOfficePage() {
  return (
    <ProjectDetailPage
      currentId="express-office"
      title="Express Office"
      location="Noida, Uttar Pradesh"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        photo3,
        photo2, photo9,
        photo5, photo4,
        photo10, photo11,
        photo6, photo7, photo8,
        photo1,
        photo12, photo13,
      ]}
      details={{
        Project: "Express Office",
        Location: "Noida, Uttar Pradesh",
        Client: "Express Builders",
        Status: "Completed",
      }}
      description={[
        <>
          The office is conceived as a <Orange>quiet expression of bespoke luxury</Orange>, where richness comes not from excess but from precision of form, material and detailing.
        </>,
        <>
          A restrained architectural envelope establishes a composed backdrop of warm timber, stone and textured wall surfaces, while layered ceilings and finely proportioned built-ins introduce depth without visual clutter.
        </>,
        <>
          The material palette moves deliberately between <Orange>tactile warmth and mineral calm</Orange>. Veined stone, walnut-toned timber, fluted woodwork and brushed brass accents create a dialogue of grain, reflection and texture, giving each surface a sense of crafted individuality.
        </>,
        <>
          Form is largely geometric and architectural, softened by rounded furniture, sculptural lighting and organic detailing. Bespoke joinery becomes a recurring design language, framing artwork, concealing storage and shaping workspaces.
        </>,
        <>
          The result is an office that feels less like a conventional workplace and more like a private contemporary interior: <Orange>cultivated, tactile and quietly luxurious</Orange>.
        </>,
      ]}
    />
  );
}