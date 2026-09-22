import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/FUIDIC-OFFICE/cover/HERO IMAGE.webp");
const photo1 = assetImage("projects/FUIDIC-OFFICE/3_4/1.webp");
const photo2 = assetImage("projects/FUIDIC-OFFICE/3_4/2.webp");
const photo3 = assetImage("projects/FUIDIC-OFFICE/3_4/3.webp");
const photo4 = assetImage("projects/FUIDIC-OFFICE/3_4/4.webp");
const photo5 = assetImage("projects/FUIDIC-OFFICE/3_4/5.webp");
const photo6 = assetImage("projects/FUIDIC-OFFICE/3_4/6.webp");
const photo7 = assetImage("projects/FUIDIC-OFFICE/3_4/7.webp");
const photo8 = assetImage("projects/FUIDIC-OFFICE/3_4/8.webp");
const photo9 = assetImage("projects/FUIDIC-OFFICE/3_4/9.webp");
const photo10 = assetImage("projects/FUIDIC-OFFICE/3_4/10.webp");
const photo11 = assetImage("projects/FUIDIC-OFFICE/3_4/11.webp");
const photo12 = assetImage("projects/FUIDIC-OFFICE/3_4/12.webp");
const coverPhoto1 = assetImage("projects/FUIDIC-OFFICE/cover/Cover Image.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Fluidic Office — Spaces Architects@ka" };
export default function FluidicOfficePage() {
  return (
    <ProjectDetailPage
      title="Fluidic Office"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        photo7, photo8, photo9, photo10, photo11, photo12,
        coverPhoto1,
      ]}
      details={{
        Project: "Fluidic Office",
        Location: "Noida, Uttar Pradesh",
        Client: "Express Builders",
        Status: "Completed",
      }}
      description={[
        <>
          The brief for this <Orange>three-floor office</Orange> was approached as an opportunity to challenge the conventional builder&rsquo;s office through <Orange>abstract, fluid interiors</Orange> designed to create a lasting impression on its clients. Every partition and false ceiling was carefully detailed and constructed, making <Orange>precision</Orange> an integral part of the design language.
        </>,
        <>
          A restrained palette of <Orange>teak veneer, white Duco and travertine stone</Orange> establishes warmth against the sculptural forms. Extending the concept beyond the architecture, the furniture, lighting and artefacts were all custom designed to belong to the same abstract vocabulary, creating a cohesive interior where <Orange>form, detail and craftsmanship</Orange> converge.
        </>,
      ]}
    />
  );
}