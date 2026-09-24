import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/HANSGROHE-SHOWROOM/cover/cover (1).webp");
const photo1 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/1.webp");
const photo2 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/2.webp");
const photo3 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/3.webp");
const photo4 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/4.webp");
const photo5 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/5.webp");
const photo6 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/6.webp");
const photo7 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/7.webp");
const photo8 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/8.webp");
const photo9 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/9.webp");
const photo10 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/10.webp");
const photo11 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/11.webp");
const photo12 = assetImage("projects/HANSGROHE-SHOWROOM/3_4/12.webp");
const heroPhoto = assetImage("projects/HANSGROHE-SHOWROOM/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Hansgrohe Showroom — Spaces Architects@ka" };
export default function HansgroheShowroomPage() {
  return (
    <ProjectDetailPage
      title="Hansgrohe Showroom"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10, photo11, photo12,
        heroPhoto,
      ]}
      details={{
        Project: "Hansgrohe Showroom",
        Location: "New Delhi",
        Client: "-",
        Status: "Completed",
      }}
      description={[
        <>
          A <Orange>contemporary bath-fixture showroom</Orange> designed as an immersive experience, where premium bathroom products are presented within a bold, nature-inspired interior. Dark surfaces, lush green installations, sculptural displays, textured screens and warm metallic accents create a dramatic setting that turns product browsing into a spatial experience.
        </>,
      ]}
    />
  );
}