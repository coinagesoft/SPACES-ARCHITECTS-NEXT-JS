import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/SACHDEVA-FARMHOUSE/cover/COVER.webp");

const img4 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/4.webp");
const img6 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/6.webp");
const img7 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/7.webp");
const img8 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/8.webp");
const img9 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/9.webp");
const entrance02 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of ENTRANCE 02.webp");
const entrance03 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of ENTRANCE 03.webp");
const corridor04 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of CORRIDOR VIEW 04.webp");
const waterbody05 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of WATERBODY 05.webp");
const viewFromSide08 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of VIEW FROM SIDE 08.webp");
const viewOutsideHomeTheatre09 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of VIEW FROM OUTSIDE HOME THEATRE 09.webp");
const eveningGym11 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of EVENING VIEW FROM GYM 11.webp");
const eveningHomeTheatre12 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of EVENING VIEW FROM HOME THEATRE 12.webp");
const eveningOutsideHomeTheatre13 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of EVENING VIEW OUTSIDE HOME THEATRE 13.webp");
const viewOutsideGym14 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of VIEW OUTSIDE GYM 14.webp");
const staircase15 = assetImage("projects/SACHDEVA-FARMHOUSE/3_4/Copy of STAIRCASE 15.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Sachdeva Farmhouse — Spaces Architects@ka" };

export default function SachdevaFarmhousePage() {
  return (
    <ProjectDetailPage
      currentId="sachdeva-farmhouse"
      title="Sachdeva Farmhouse"
      location="New Delhi"
      hero={hero}
      // Portraits pair up two-by-two (same ratio per pair); landscapes run
      // full-width, then pair up by matching ratio, as in the Screen House layout.
      photos={[
        img6, img7,
        img4,
        entrance02, staircase15,
        entrance03,
        corridor04, viewFromSide08,
        waterbody05,
        img8, img9,
        eveningGym11, eveningHomeTheatre12,
        eveningOutsideHomeTheatre13, viewOutsideHomeTheatre09,
        viewOutsideGym14,
      ]}
      details={{
        Project: "Sachdeva Residence",
        Location: "New Delhi",
        "Plot Area": "2.5 acres",
        "Built-up Area": "25,000 sq. ft.",
        Client: "Mr. Himanshu Sachdeva",
        Status: "Completed",
      }}
      awards={[
        "World Architecture Community Awards | 18th Cycle | Winner",
        "IIID Anchor Awards 2013 | Single Dwelling – North, East & Central Region",
      ]}
      publications={[
        "Architecture + Design",
        "ArchDaily",
        "ArchDaily Brasil",
        "MGS Architecture",
      ]}
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