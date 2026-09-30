import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/AMG-OFFICE/cover/COVER IMAGE.webp");

const recLift = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE RECEPTION FROM THE LIFT LOBBY_3x4.webp");
const recDesk = assetImage("projects/AMG-OFFICE/3_4/RECEPTION DESK AND THE WALLPAPER_3x4.webp");
const mirrorBench = assetImage("projects/AMG-OFFICE/3_4/REFLECTION OF THE WAITING BENCH AND STAIRCASE IN THE MIRROR WALL_3x4.webp");
const stairMirror = assetImage("projects/AMG-OFFICE/3_4/VIEW OF STAIRWAY AND MIRROR WALL FROM THE WAITING BENCH_3x4.webp");
const artStair = assetImage("projects/AMG-OFFICE/3_4/VERTICAL ART FORM ALONG THE STAIRCASE_3x4.webp");
const stairDesk = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE STAIRCASE FROM RECEPTION DESK_3x4.webp");
const stairConf = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE STAIRCASE AND VERTICAL ART WORK FROM THE CONFERENCE ROOM_3x4.webp");
const confLobby = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE CONFERENCE ROOM FROM THE RECEPTION LOBBY_3x4.webp");
const confBench = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE CONFERENCE ROOM AND BENCH FROM THE RECEPTION DESK_3x4.webp");
const conf = assetImage("projects/AMG-OFFICE/3_4/CONFERENCE ROOM_3x4.webp");
const officeConf = assetImage("projects/AMG-OFFICE/3_4/VIEW OF THE OFFICE FROM THE CONFERENCE ROOM_3x4.webp");
const cabinDesk = assetImage("projects/AMG-OFFICE/3_4/VIEW OF MAIN CABIN FROM RECEPTION DESK_3x4.webp");
const cabinSide = assetImage("projects/AMG-OFFICE/3_4/VIEW OF MAIN CABIN FROM SIDE_3x4.webp");
const plans = assetImage("projects/AMG-OFFICE/3_4/PLANS_3x4.webp");
const section = assetImage("projects/AMG-OFFICE/3_4/SECTION_3x4.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "AMG Office — Spaces Architects@ka" };

export default function AmgOfficePage() {
  return (
    <ProjectDetailPage
      title="AMG Office"
      location="New Delhi"
      hero={hero}
      photos={[
        recLift, recDesk,
        mirrorBench, stairMirror,
        artStair, stairDesk,
        stairConf, confLobby,
        confBench, conf,
        officeConf, cabinDesk, cabinSide,
        plans, section,
      ]}
      details={{
        Project: "AMG Office",
        Location: "New Delhi",
        Client: "Mr. Mohit Gupta",
        Status: "Completed",
      }}
      description={[
        <>
          The office is sited in the basement with a net covered area of <Orange>1000 sq. ft.</Orange> The design process revolved around making the project a treat for the design seekers. The office is adorned with <Orange>abstract vertical rustic artworks</Orange> that fuse with the ever-changing flow of ceiling. The world of real estate is no more a clichéd give and take platform. With the design being in easy reach, no one wants to live a mundane life; which lacks excitement and creativity. In a collaborative venture with the client, Spaces Architects@KA decided to fulfil the forth mentioned <Orange>desire and appetite for design</Orange> in his real estate office AMG, Greater Kailash.
        </>,
      ]}
    />
  );
}