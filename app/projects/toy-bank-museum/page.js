import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/TOY-BANK-MUSEUM/cover/COVER.webp");
const photo1 = assetImage("projects/TOY-BANK-MUSEUM/3_4/1.webp");
const photo2 = assetImage("projects/TOY-BANK-MUSEUM/3_4/2.webp");
const photo3 = assetImage("projects/TOY-BANK-MUSEUM/3_4/3.webp");
const photo4 = assetImage("projects/TOY-BANK-MUSEUM/3_4/4.webp");
const photo5 = assetImage("projects/TOY-BANK-MUSEUM/3_4/5.webp");
const photo6 = assetImage("projects/TOY-BANK-MUSEUM/3_4/6.webp");
const photo7 = assetImage("projects/TOY-BANK-MUSEUM/3_4/7.webp");
const photo8 = assetImage("projects/TOY-BANK-MUSEUM/3_4/8.webp");
const photo9 = assetImage("projects/TOY-BANK-MUSEUM/3_4/9.webp");
const photo10 = assetImage("projects/TOY-BANK-MUSEUM/3_4/10.webp");
const heroPhoto = assetImage("projects/TOY-BANK-MUSEUM/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Toybank Museum — Spaces Architects@ka" };
export default function ToybankMuseumPage() {
  return (
    <ProjectDetailPage
      title="Toybank Museum"
      location="CP, New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10,
        heroPhoto,
      ]}
      details={{
        Project: "Toybank Museum",
        Location: "CP, New Delhi",
        Client: "Mr. Vijay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Toybank is <Orange>an interactive museum space</Orange> dedicated to toys, designed to inspire learning and play through dynamic zones like toy collection, storage, exhibition, and classrooms. Vertical cutouts connect multiple floors, creating <Orange>visual continuity and breakout spaces</Orange>. A multipurpose hall and cafeteria support flexible use, making the space adaptable, inclusive, and engaging for children and visitors alike.
        </>,
      ]}
    />
  );
}