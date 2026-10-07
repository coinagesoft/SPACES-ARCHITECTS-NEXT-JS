import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/NOCC-OFFICE/cover/COVER IMAGE.webp");

const img1 = assetImage("projects/NOCC-OFFICE/3_4/1.webp");
const img1b = assetImage("projects/NOCC-OFFICE/3_4/1(1).webp");
const img2 = assetImage("projects/NOCC-OFFICE/3_4/2.webp");
const img2b = assetImage("projects/NOCC-OFFICE/3_4/2(1).webp");
const img3 = assetImage("projects/NOCC-OFFICE/3_4/3.webp");
const img3b = assetImage("projects/NOCC-OFFICE/3_4/3(1).webp");
const img4 = assetImage("projects/NOCC-OFFICE/3_4/4.webp");
const img5 = assetImage("projects/NOCC-OFFICE/3_4/5.webp");
const img6 = assetImage("projects/NOCC-OFFICE/3_4/6.webp");
const img7 = assetImage("projects/NOCC-OFFICE/3_4/7.webp");
const img8 = assetImage("projects/NOCC-OFFICE/3_4/8.webp");
const img9 = assetImage("projects/NOCC-OFFICE/3_4/9.webp");
const img10 = assetImage("projects/NOCC-OFFICE/3_4/10.webp");
const img11 = assetImage("projects/NOCC-OFFICE/3_4/11.webp");
const img12 = assetImage("projects/NOCC-OFFICE/3_4/12.webp");
const img14 = assetImage("projects/NOCC-OFFICE/3_4/14.webp");
const img15 = assetImage("projects/NOCC-OFFICE/3_4/15.webp");
const img16 = assetImage("projects/NOCC-OFFICE/3_4/16.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "NOCC Office — Spaces Architects@ka" };

export default function NoccOfficePage() {
  return (
    <ProjectDetailPage
      currentId="nocc-office"
      title="NOCC Office"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1,
        img4, img5,
        img2b, img6, img7,
        img8,
        img9, img10,
        img3, img11, img12,
        img14,
        img15, img16,
        img1b, img3b,
        img2,
      ]}
      details={{
        Project: "NOCC Office",
        Location: "New Delhi",
        "Built-up Area": "10,000 sq. ft.",
        Client: "NIIT Technologies",
        Status: "Completed",
      }}
      awards={[
        "IAD Awards 2009 | Best Interior Designer Merchandise – 3rd Position",
        "Archidesign Awards 2010 | National Level – Office Category",
        "Architects & Interiors India Awards 2010 | National Level – Office Category – Runner-up",
      ]}
      publications={[
        "Inside Outside | May 2010",
      ]}
      description={[
        <>
          The brief called for a <Orange>creative, open office</Orange> with large glass panels and a <Orange>youthful, vibrant ambience</Orange>. The concept evolved through abstract shapes, geometric forms, panels and pastel shades, creating a spatial experience revealed progressively along the corridor.
        </>,
        <>
          Multiple views were created beyond partitions to visually connect the spaces and reinforce the open-office character. A <Orange>green pastel egg-shaped meeting room</Orange> intersects a rectangular meeting room positioned at <Orange>45 degrees</Orange>, creating a dynamic geometric composition. The former contrasts with the latter’s <Orange>dark teak cladding</Orange>, while its front is finished in mirror-effect laminate with transparent circular glass elements, creating an <Orange>optical illusion</Orange> along the approach from the entrance.
        </>,
        <>
          The design was developed through <Orange>multiple stages of refinement</Orange>, with geometry, colour and material working together to define a youthful and interconnected workplace.
        </>,
      ]}
    />
  );
}