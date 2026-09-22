import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/GUPTAS-RESIDENCE/3_4/10.webp");
const photo1 = assetImage("projects/GUPTAS-RESIDENCE/3_4/1.webp");
const photo2 = assetImage("projects/GUPTAS-RESIDENCE/3_4/2.webp");
const photo3 = assetImage("projects/GUPTAS-RESIDENCE/3_4/3.webp");
const photo4 = assetImage("projects/GUPTAS-RESIDENCE/3_4/4.webp");
const photo5 = assetImage("projects/GUPTAS-RESIDENCE/3_4/5.webp");
const photo6 = assetImage("projects/GUPTAS-RESIDENCE/3_4/6.webp");
const photo7 = assetImage("projects/GUPTAS-RESIDENCE/3_4/7.webp");
const photo8 = assetImage("projects/GUPTAS-RESIDENCE/3_4/8.webp");
const photo9 = assetImage("projects/GUPTAS-RESIDENCE/3_4/9.webp");
const photo11 = assetImage("projects/GUPTAS-RESIDENCE/3_4/11.webp");
const photo12 = assetImage("projects/GUPTAS-RESIDENCE/3_4/12.webp");
const coverPhoto1 = assetImage("projects/GUPTAS-RESIDENCE/cover/COVER (LANDSCAPE CUT).webp");
const coverPhoto2 = assetImage("projects/GUPTAS-RESIDENCE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Gupta's Residence — Spaces Architects@ka" };
export default function GuptasResidencePage() {
  return (
    <ProjectDetailPage
      title="Gupta's Residence"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        photo7, photo8, photo9, photo11, photo12,
        coverPhoto1, coverPhoto2,
      ]}
      details={{
        Project: "Gupta's Residence",
        Location: "New Delhi",
        Client: "Mr. Sanjay Gupta",
        Status: "Completed",
      }}
      description={[
        <>
          Designed for the family of three generations on a <Orange>2,500 sq. ft. plot</Orange>, the residence explores contemporary architecture through openness, light and a close relationship with nature. Visual connections between floors allow the family to remain connected while bringing abundant natural light deep into the home.
        </>,
        <>
          The elevation is composed as a <Orange>juxtaposition of blocks</Orange>, creating layered terraces that maximise light and air while responding to the advantages of the north-west-facing site. A restrained palette of white surfaces, beige Indian stone and warm timber is complemented by wooden-clad pergolas, louvers, doors and windows.
        </>,
        <>
          A <Orange>green wall frames</Orange> the master bedroom balcony, while the <Orange>cantilevered wooden terrace deck</Orange> and <Orange>motorised louvers</Orange> become defining architectural elements. Together, these gestures create a home that balances family connection, climate response and contemporary character.
        </>,
      ]}
    />
  );
}