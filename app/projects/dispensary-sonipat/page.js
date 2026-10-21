import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/DISPENSARY-SONIPAT/3_4/11.webp");
const photo1 = assetImage("projects/DISPENSARY-SONIPAT/3_4/1.webp");
const photo2 = assetImage("projects/DISPENSARY-SONIPAT/3_4/2.webp");
const photo3 = assetImage("projects/DISPENSARY-SONIPAT/3_4/3.webp");
const photo4 = assetImage("projects/DISPENSARY-SONIPAT/3_4/4.webp");
const photo5 = assetImage("projects/DISPENSARY-SONIPAT/3_4/5.webp");
const photo6 = assetImage("projects/DISPENSARY-SONIPAT/3_4/6.webp");
const photo7 = assetImage("projects/DISPENSARY-SONIPAT/3_4/7.webp");
const photo8 = assetImage("projects/DISPENSARY-SONIPAT/3_4/8.webp");
const photo9 = assetImage("projects/DISPENSARY-SONIPAT/3_4/9.webp");
const photo10 = assetImage("projects/DISPENSARY-SONIPAT/3_4/10.webp");
const photo11 = assetImage("projects/DISPENSARY-SONIPAT/3_4/11.webp");
// const photo11 = assetImage("projects/DISPENSARY-SONIPAT/3_4/11.webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "Dispensary Sonipat — Spaces Architects@ka" };

export default function DispensarySonipatPage() {
  return (
    <ProjectDetailPage
      currentId="dispensary-sonipat"
      title="Dispensary Sonipat"
      location="Sonipat, Haryana"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        photo7, photo8, photo9, photo10, photo11,
      ]}
      details={{
        Project: "Dispensary",
        Location: "Sonipat",
        "Plot Area": "1,400 sq. ft.",
        "Built-up Area": "3,500 sq. ft.",
        Client: "Mr. Vijay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Located in a village in Sonipat district, Haryana, the dispensary is envisioned as a social infrastructure project rooted in the idea of <Orange>healthcare as a community need.</Orange> The project provides the village with an accessible and dignified space for primary healthcare, bringing essential medical services closer to the people who need them.
        </>,
        <>
          Rather than being conceived as an institutional building, the dispensary draws from the <Orange>architectural character of its local setting,</Orange> using familiar colours, details and proportions to create a building that feels welcoming and connected to the community. The project is ultimately an exercise in <Orange>designing with purpose using architecture as a means of giving back to society and strengthening everyday life in the village.</Orange>
        </>,
      ]}
    />
  );
}