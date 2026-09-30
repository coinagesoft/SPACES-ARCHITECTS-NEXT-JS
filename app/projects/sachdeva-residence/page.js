import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/SACHDEVA-FARMHOUSE/cover/COVER.webp");

const img1 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/1.webp");
const img2 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/2.webp");
const img3 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/3.webp");
const img4 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/4.webp");
const img5 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/5.webp");
const img6 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/6.webp");
const img7 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/7.webp");
const img8 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/8.webp");
const img9 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/9.webp");
const img10 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/10.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Sachdeva Farmhouse — Spaces Architects@ka" };

export default function SachdevaFarmhousePage() {
  return (
    <ProjectDetailPage
      currentId="sachdeva-farmhouse"
      title="Sachdeva Farmhouse"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img5, img1, img2,
        img6, img7,
        img3,
        img4, img8,
        img9, img10,
      ]}
      details={{
        Project: "Sachdeva Residence",
        Location: "New Delhi",
        Client: "Mr. Himanshu Sachdeva",
        Status: "Completed",
      }}
      description={[
        <>
          Set within a <Orange>3-acre</Orange> landscape, the farmhouse draws from tropical architecture to create a <Orange>sequence of interconnected spaces</Orange> gathered around a central courtyard and pool. The layout places bedrooms and living spaces around this green heart, while the gym, spa and home theatre complete the enclosure, creating varied architectural compositions from every side.
        </>,
        <>
          The journey into the house is deliberately choreographed. A <Orange>cantilevered zinc-clad entrance</Orange> block establishes a distinctive arrival, opening into a double-height lobby framed by natural light, garden views and a sculptural staircase. <Orange>Rough Indian stone, backlit glass and timber</Orange> introduce texture and drama, while carefully designed transitions create a sense of anticipation as one moves through the house.
        </>,
        <>
          The pool court becomes the <Orange>experiential centre</Orange>, transforming with the changing daylight. Lowered wellness spaces lead upward to a terrace garden and party space, extending the journey between levels and landscape.
        </>,
        <>
          Developed through <Orange>extensive scale-model studies, material exploration and detailed junctions</Orange>, the farmhouse is an exercise in form, movement and atmosphere—where architecture is experienced as a gradual unfolding rather than a single composition.
        </>,
      ]}
    />
  );
}