import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
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
export const metadata = { title: "Cubix Office — Spaces Architects@ka" };
export default function CubixOfficePage() {
  return <ProjectDetailPage title="Cubix Office" location="New Delhi" hero={hero} photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16]} details={{ Project: "Cubix Office", Location: "New Delhi", Client: "Cubix Builders", Status: "Completed" }} description={["The office for a real-estate consultant is conceived as a modern white office with fluid forms. The linear 14-foot-wide, 80-foot-deep site required two managerial cabins, an eight-seat conference space, reception and waiting areas.", "The conference area was placed centrally and shaped as an elliptical oval form to create free flow. An angled glass partition connects the corridor and cabin visually, creating movement and transition through the interior.", "The project experiments with fluid forms and a white interior language, resulting in a restrained workplace defined by visual connectivity and spatial continuity."]} />;
}
