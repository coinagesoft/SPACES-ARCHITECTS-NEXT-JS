import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/POETIC-HOUSE/cover/cover.webp");
const photo1 = assetImage("projects/POETIC-HOUSE/3_4/1.webp");
const photo2 = assetImage("projects/POETIC-HOUSE/3_4/2.webp");
const photo3 = assetImage("projects/POETIC-HOUSE/3_4/3.webp");
const photo4 = assetImage("projects/POETIC-HOUSE/3_4/4.webp");
const photo5 = assetImage("projects/POETIC-HOUSE/3_4/5.webp");
const photo6 = assetImage("projects/POETIC-HOUSE/3_4/6.webp");
const photo7 = assetImage("projects/POETIC-HOUSE/3_4/7.webp");
const photo8 = assetImage("projects/POETIC-HOUSE/3_4/8.webp");
const photo9 = assetImage("projects/POETIC-HOUSE/3_4/9.webp");
const photo10 = assetImage("projects/POETIC-HOUSE/3_4/10.webp");
const photo11 = assetImage("projects/POETIC-HOUSE/3_4/11.webp");
const photo12 = assetImage("projects/POETIC-HOUSE/3_4/12.webp");
const coverPhoto2 = assetImage("projects/POETIC-HOUSE/cover/hero image.webp");

export const metadata = { title: "The Poetic House — Spaces Architects@ka" };
export default function ThePoeticHousePage() {
  return (
    <ProjectDetailPage
      title="The Poetic House"
      location="Noida, Uttar Pradesh"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6,
        photo7, photo8, photo9, photo10, photo11, photo12,
        coverPhoto2,
      ]}
      details={{
        Project: "The Poetic House",
        Location: "Noida, Uttar Pradesh",
        Client: "Mr. Bansal",
        Status: "Ongoing",
      }}
    />
  );
}