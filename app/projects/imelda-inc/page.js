import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/IMELDA-INC/cover/Hero Image.webp");
const photo1 = assetImage("projects/IMELDA-INC/3_4/1.webp");
const photo2 = assetImage("projects/IMELDA-INC/3_4/2.webp");
const photo3 = assetImage("projects/IMELDA-INC/3_4/3.webp");
const photo4 = assetImage("projects/IMELDA-INC/3_4/4.webp");
const photo5 = assetImage("projects/IMELDA-INC/3_4/5.webp");
const photo6 = assetImage("projects/IMELDA-INC/3_4/6.webp");
const photo7 = assetImage("projects/IMELDA-INC/3_4/7.webp");
const photo8 = assetImage("projects/IMELDA-INC/3_4/8.webp");
const photo9 = assetImage("projects/IMELDA-INC/3_4/9.webp");
const photo10 = assetImage("projects/IMELDA-INC/3_4/10.webp");
const photo11 = assetImage("projects/IMELDA-INC/3_4/11.webp");
const photo12 = assetImage("projects/IMELDA-INC/3_4/12.webp");
const photo13 = assetImage("projects/IMELDA-INC/3_4/13.webp");
export const metadata = { title: "Imelda Inc. — Spaces Architects@ka" };
export default function ImeldaIncPage() {
  return <ProjectDetailPage title="Imelda Inc." location="New Delhi" hero={hero} photos={[photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13]} details={{ Project: "Imelda Inc.", Location: "New Delhi", Client: "Mr. Priyank & Mr. Piyush", Status: "Completed" }} description={["Conceived as a physical expression of the brand, this office translates the client’s denim business into a theme-driven workplace and experience centre, bringing manufacturing and showroom functions together under one roof.", "The concept draws from denim’s journey from raw material to finished product. Threads, scissors and denim fabric are abstracted into architectural and interior interventions, with every element custom-designed to strengthen the narrative.", "The workplace becomes an immersive experience for visitors and employees alike, allowing them to engage with the craft, creativity and identity behind the business."]} />;
}
