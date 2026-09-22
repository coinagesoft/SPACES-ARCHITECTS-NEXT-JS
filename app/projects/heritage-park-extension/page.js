import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/HERITAGE-PARK-EXTENSION/cover/HERO (2).webp");
const photo1 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/1.webp");
const photo1a = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/1(1).webp");
const photo2 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/2.webp");
const photo2a = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/2(1).webp");
const photo3 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/3.webp");
const photo3a = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/3(1).webp");
const photo4 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/4.webp");
const photo5 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/5.webp");
const photo6 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/6.webp");
const photo7 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/7.webp");
const photo8 = assetImage("projects/HERITAGE-PARK-EXTENSION/3_4/8.webp");
const coverPhoto1 = assetImage("projects/HERITAGE-PARK-EXTENSION/cover/COVER.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Extension of Heritage Park — Spaces Architects@ka" };
export default function ExtensionOfHeritageParkPage() {
  return (
    <ProjectDetailPage
      title="Extension of Heritage Park"
      location="Chandni Chowk, Old Delhi"
      hero={hero}
      photos={[
        photo1, photo1a, photo2, photo2a, photo3, photo3a,
        photo4, photo5, photo6, photo7, photo8,
        coverPhoto1,
      ]}
      details={{
        Project: "Extension of Heritage Park",
        Location: "Chandni Chowk, Old Delhi",
        Client: "MCD",
        Status: "Ongoing",
      }}
      description={[
        <>
          The Heritage Park Extension builds upon the existing public realm of <Orange>Park No. 7 in Chandni Chowk</Orange>, extending its landscape and recreational character into a larger civic destination. Conceived as a seamless continuation of the heritage precinct, the intervention brings together <Orange>landscape, leisure, food and commerce</Orange> within a connected public realm.
        </>,
        <>
          The extension is organised as a sequence of <Orange>formal gardens, shaded pedestrian paths, water elements and open gathering spaces</Orange>, drawing from the geometric vocabulary of historic Mughal and Old Delhi landscapes. <Orange>Patterned paving planted courts and carefully framed vistas create moments of pause</Orange> while maintaining a continuous pedestrian experience.
        </>,
        <>
          At the eastern edge, the development introduces <Orange>a Meena Bazaar and Food Court,</Orange> creating an active interface between the park and the surrounding streets of Chandni Chowk. The market supports local commerce and crafts, while the food court brings together local food and informal gathering, extending the everyday cultural life of the neighbourhood into the park.
        </>,
        <>
          More than a landscape intervention, the project aims to <Orange>enhance the overall experience and quality of life within the public realm.</Orange> By introducing opportunities to gather, walk, eat, shop and interact within a carefully designed heritage setting, the extension strengthens the connection between the historic city and its contemporary public life.
        </>,
      ]}
    />
  );
}