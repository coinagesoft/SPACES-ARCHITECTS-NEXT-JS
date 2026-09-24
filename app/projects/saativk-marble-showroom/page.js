import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/cover/HERO.webp");
const photo1 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/1.webp");
const photo2 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/2.webp");
const photo3 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/3.webp");
const photo4 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/4.webp");
const photo5 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/5.webp");
const photo6 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/6.webp");
const photo7 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/7.webp");
const photo8 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/8.webp");
const photo9 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/9.webp");
const photo10 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/10.webp");
const photo11 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/11.webp");
const photo12 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/12.webp");
const photo13 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/13.webp");
const photo14 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/14.webp");
const photo15 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/3_4/15.webp");
const coverPhoto1 = assetImage("projects/SAATIVK-MARBLE-SHOWROOM/cover/COVER.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Satvik Marble Showroom — Spaces Architects@ka" };
export default function SatvikMarbleShowroomPage() {
  return (
    <ProjectDetailPage
      title="Satvik Marble Showroom"
      location=""
      hero={coverPhoto1}
      photos={[
         photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10, photo11, photo12, photo13, photo14, photo15,
        ,
      ]}
      details={{
        Project: "Satvik Showroom",
        Location: "",
        Client: "",
        Status: "Completed",
      }}
      description={[
        <>
          <Orange>Satvik Marble Showroom</Orange> is designed as an immersive material gallery that celebrates the natural beauty, texture and individuality of marble. The interiors use a sophisticated palette of <Orange>charcoal grey, whites and warm neutrals,</Orange> creating a restrained backdrop that allows the stone to take centre stage.
        </>,
        <>
          Large-format marble slabs, suspended displays and sculptural presentation tables are arranged as a curated journey through the showroom. Dramatic circular lighting, textured surfaces and a distinctive curved feature wall add a contemporary character while enhancing the visual impact of the stone.
        </>,
        <>
          The design transforms a conventional showroom into a <Orange>luxurious material experience,</Orange> where marble is not merely displayed but becomes an integral part of the architecture and spatial identity.
        </>,
      ]}
    />
  );
}