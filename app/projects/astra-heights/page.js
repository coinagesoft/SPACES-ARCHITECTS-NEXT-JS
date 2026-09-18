import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/ASTRA-HEIGHTS/cover/HERO OP2.webp");
const photo1 = assetImage("projects/ASTRA-HEIGHTS/3_4/1.webp");
const photo2 = assetImage("projects/ASTRA-HEIGHTS/3_4/2.webp");
const photo3 = assetImage("projects/ASTRA-HEIGHTS/3_4/3.webp");
const photo4 = assetImage("projects/ASTRA-HEIGHTS/3_4/4.webp");
const photo5 = assetImage("projects/ASTRA-HEIGHTS/3_4/5.webp");
const photo6 = assetImage("projects/ASTRA-HEIGHTS/3_4/6.webp");
const photo7 = assetImage("projects/ASTRA-HEIGHTS/3_4/7.webp");
const photo8 = assetImage("projects/ASTRA-HEIGHTS/3_4/8.webp");
const photo9 = assetImage("projects/ASTRA-HEIGHTS/3_4/9.webp");
export const metadata = { title: "Astra Heights — Spaces Architects@ka" };
export default function AstraHeightsPage() {
  return <ProjectDetailPage title="Astra Heights" hero={hero} photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]} details={{ Project: "Astra Heights" }} description={["Project details for Astra Heights will be added when the project brief is available."]} />;
}
