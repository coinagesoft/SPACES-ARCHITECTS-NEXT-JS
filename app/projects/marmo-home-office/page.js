import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/MARMO-HOME-OFFICE/cover/COVER.webp");
// const photo1 = assetImage("projects/MARMO-HOME-OFFICE/3_4/1.webp");
const photo2 = assetImage("projects/MARMO-HOME-OFFICE/3_4/2.webp");
const photo3 = assetImage("projects/MARMO-HOME-OFFICE/3_4/3.webp");
const photo4 = assetImage("projects/MARMO-HOME-OFFICE/3_4/4.webp");
const photo5 = assetImage("projects/MARMO-HOME-OFFICE/3_4/5.webp");
const photo6 = assetImage("projects/MARMO-HOME-OFFICE/3_4/6.webp");
const photo7 = assetImage("projects/MARMO-HOME-OFFICE/3_4/7.webp");
const photo8 = assetImage("projects/MARMO-HOME-OFFICE/3_4/8.webp");
const heroPhoto = assetImage("projects/MARMO-HOME-OFFICE/cover/HERO.webp");

export const metadata = { title: "Marmo Home Office — Spaces Architects@ka" };

export default function MarmoHomeOfficePage() {
  return (
    <ProjectDetailPage
      currentId="marmo-home-office"
      title="Marmo Home Office"
      location="New Delhi"
      hero={hero}
      photos={[
         photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        
      ]}
      details={{
        Project: "Marmo Home Office",
        Location: "New Delhi",
        Client: "Mr. Raman Arora",
        Status: "Completed",
      }}
      description={[
        "The brief was to design a tiles showroom and office. Of the two existing identical buildings at the site that had been used as warehouses for the past 15 years, one had to be converted to a showroom cum office. The scope was identified as facade design, landscape and interiors.",
        "For the facade, the concept was to depict natural weathering of stones creating multiple lines and layers. Juxtaposed blocks are created using MS framework with self-foundation and tied to the existing building. These were cladded with large sized (8 feet x 4 feet) slim tiles. A much abstract form was created in the corner of the building near the entry where the tiles are put to extreme testing with multiple sharp angles and joints.",
        "The office is an example of contemporary office with minimal colour palette in the interiors. The theme revolves around white, grey texture and wenge wood. The cabins and workstations have been placed in the periphery to maximise entry of daylight and the conference room and the meeting rooms are kept in the center. The Director Cabins are placed such that it overlooks an interesting green terrace area.",
      ]}
    />
  );
}