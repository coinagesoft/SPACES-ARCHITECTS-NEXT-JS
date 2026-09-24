import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/HOUSE-ON-HILL/cover/COVER.webp");
const photo1 = assetImage("projects/HOUSE-ON-HILL/3_4/1.webp");
const photo2 = assetImage("projects/HOUSE-ON-HILL/3_4/2.webp");
const photo3 = assetImage("projects/HOUSE-ON-HILL/3_4/3.webp");
const photo4 = assetImage("projects/HOUSE-ON-HILL/3_4/4.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "House on Hill — Spaces Architects@ka" };

export default function HouseOnHillPage() {
  return (
    <ProjectDetailPage
      currentId="house-on-hill"
      title="House on Hill"
      hero={hero}
      photos={[photo1, photo2, photo3, photo4]}
      details={{
        Project: "House on Hill",
        Client: "Mr. Nayyar",
        Status: "Completed",
      }}
      description={[
        <>
          <Orange>House on Hill</Orange> is a holiday home for Mr. Nayyar, conceived as a retreat that responds sensitively to its sloping hillside site. The design works with the natural terrain rather than against it, allowing the house to <Orange>emerge from the contours through a series of stepped levels and landscaped terraces.</Orange>
        </>,
        <>
          The residence is organized around open, light-filled living spaces with expansive views of the surrounding hills. Large, glazed openings, generous balconies and deep overhangs create a strong connection between the interiors and the landscape, while the use of local stone anchors the house to its natural setting.
        </>,
        <>
          The stepped landscape extends the living experience outdoors, creating lawns, terraces and pathways at different levels. The architecture combines clean contemporary forms with warm timber, stone and glass, resulting in a relaxed and understated holiday home that <Orange>feels closely rooted to the hillside.</Orange>
        </>,
        <>
          House on Hill explores the idea of living with the terrain creating a retreat where architecture, landscape and the surrounding mountain views become a continuous experience.
        </>,
      ]}
    />
  );
}