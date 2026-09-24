import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/SOBHTI-RESIDENCE/cover/COVER.webp");
const photo1 = assetImage("projects/SOBHTI-RESIDENCE/3_4/1.webp");
const photo2 = assetImage("projects/SOBHTI-RESIDENCE/3_4/2.webp");
const photo3 = assetImage("projects/SOBHTI-RESIDENCE/3_4/3.webp");
const photo4 = assetImage("projects/SOBHTI-RESIDENCE/3_4/4.webp");
const photo5 = assetImage("projects/SOBHTI-RESIDENCE/3_4/5.webp");
const photo6 = assetImage("projects/SOBHTI-RESIDENCE/3_4/6.webp");
const photo7 = assetImage("projects/SOBHTI-RESIDENCE/3_4/7.webp");
const heroPhoto = assetImage("projects/SOBHTI-RESIDENCE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Sobti's Residence — Spaces Architects@ka" };
export default function SobtisResidencePage() {
  return (
    <ProjectDetailPage
      title="Sobti's Residence"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7,
        heroPhoto,
      ]}
      details={{
        Project: "Sobti's Residence",
        Location: "New Delhi",
        Client: "Mr. Kirit Sobti",
        Status: "Completed",
      }}
      description={[
        <>
          The residence duplex designed for young couples, their two kids and parents located on upper floor of a corner house. The concept was defined with maximizing the natural day light into the interior space with two bedrooms on the lower floor kept in front and drawing, lobby and dining as part of one space with an open kitchen. The meditation are designed with traditional Indian wooden columns is kept at central space of the house.
        </>,
        <>
          A water body created with ingrained fish design forms an interesting element in the interior. The bedroom for the parents is designed in a subtle beige tone whereas the son's room is designed in grey shade with interesting quotes written on the back wall over blackboard.
        </>,
        <>
          The wooden staircase along the double height window allowing quality daylight into the space. The upper floor has master bedroom in the front and a guest bedroom in the rear, a family lounge which is used as T.V. room is placed on an elevated platform with wooden flooring in contrast to cream stone used in the lobby creating a transition in space.
        </>,
      ]}
    />
  );
}