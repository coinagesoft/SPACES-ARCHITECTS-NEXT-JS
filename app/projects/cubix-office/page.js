import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";
const hero = assetImage("projects/CUBIX-OFFICE/cover/COVER.webp");
const photo1 = assetImage("projects/CUBIX-OFFICE/3_4/1.webp");
const photo2 = assetImage("projects/CUBIX-OFFICE/3_4/2.webp");
const photo3 = assetImage("projects/CUBIX-OFFICE/3_4/3.webp");
const photo4 = assetImage("projects/CUBIX-OFFICE/3_4/4.webp");
const photo5 = assetImage("projects/CUBIX-OFFICE/3_4/5.webp");
const photo6 = assetImage("projects/CUBIX-OFFICE/3_4/6.webp");
const photo7 = assetImage("projects/CUBIX-OFFICE/3_4/7.webp");
const photo8 = assetImage("projects/CUBIX-OFFICE/3_4/8.webp");
const photo9 = assetImage("projects/CUBIX-OFFICE/3_4/9.webp");
const photo10 = assetImage("projects/CUBIX-OFFICE/3_4/10.webp");
const photo11 = assetImage("projects/CUBIX-OFFICE/3_4/11.webp");
const photo12 = assetImage("projects/CUBIX-OFFICE/3_4/12.webp");
const photo13 = assetImage("projects/CUBIX-OFFICE/3_4/Copy of 01 PLANS.webp");
const photo14 = assetImage("projects/CUBIX-OFFICE/3_4/Copy of 02 SECTION.webp");
const photo15 = assetImage("projects/CUBIX-OFFICE/3_4/Copy of 04 CONCEPT ILLUSTRATION.webp");
const photo16 = assetImage("projects/CUBIX-OFFICE/3_4/Copy of 4.webp");
const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Cubix Office — Spaces Architects@ka" };

export default function CubixOfficePage() {
  return (
    <ProjectDetailPage
      currentId="cubix-office"
      title="Cubix Office"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16,
      ]}
      details={{
        Project: "Cubix Office",
        Location: "New Delhi",
        "Built-up Area": "1,000 sq. ft.",
        Client: "Cubix Builders",
        Status: "Completed",
      }}
      awards={[
        "AD 50 – 50 Most Influential Names in Architecture & Design – 2015",
        "IIID Anchor Awards 2013 – Commercial Large (North & East Region) – Commendation",
        "The Merit List 2015-16 – Cubix Office – Jury Commendation",
        "IIA Awards 2016 – Best Interior – Non-Residential Project of the year",
        "World Architecture Community Awards 2020 34th cycle – Winner for Cubix Office",
      ]}
      publications={["e-Architect", "World Architecture Community", "Journal of the Indian Institute of Architects", "HDL / KNX"]}
      description={[
        <>
          The office for the real estate consultant has been <Orange>conceptualized as a modern white office with fluid forms</Orange>. The client&apos;s requirement was to have 2 managerial cabins with a conference space of 8 seaters with a reception and waiting. <Orange>The site being linear, 14&apos; wide with a depth of 80&apos;</Orange> was a challenge to create individual cabins which were to be placed one behind each linearly creating a corridor space connecting them, to avoid it the conference area was placed at the center of the space has been designed in the elliptical oval form to have free flow also the cabin behind was designed with an <Orange>angled glass partition</Orange> to connect corridor space with the interior space visually thus creating interesting movement spaces at the same time creating transition. The design concept was intended to try and experiment with fluid forms, also it was a challenge to create a white interior space, the design and concept were very raw for our style of working.
        </>,
      ]}
    />
  );
}