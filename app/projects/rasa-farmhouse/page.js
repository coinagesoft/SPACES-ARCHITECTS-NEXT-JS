import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/RASA-FARMHOUSE/cover/COVER.webp");
const photo1 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (1).webp");
const photo2 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (2).webp");
const photo3 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (3).webp");
const photo4 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (4).webp");
const photo5 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (5).webp");
const photo6 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (6).webp");
const photo7 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (7).webp");
const photo8 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (8).webp");
const photo9 = assetImage("projects/RASA-FARMHOUSE/photographs/Final (9).webp");
const Orange = ({ children }) => <span style={{ color: " #FEA50B" }}>{children}</span>;

export const metadata = { title: "Rasa Farmhouse — Spaces Architects@ka" };

export default function RasaFarmhousePage() {
  return (
    <ProjectDetailPage
      currentId="rasa-farmhouse"
      title="Rasa Farmhouse"
      location="New Delhi"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5,
        photo6, photo7, photo8, photo9,
      ]}
      details={{
        Project: "Rasa Farmhouse",
        Location: "New Delhi",
        Client: "—",
        Status: "—",
      }}
      description={[
        <>
          The farmhouse is located far from the hustle and bustle of the city of New Delhi. Surrounded by nature, the building form is inspired by it. According to the client's brief, a <Orange>modern and contemporary villa</Orange> was designed with a <Orange>minimal material palette</Orange> that gives a luxurious look and feel. At various spaces, different symbolism is used inspired by the <Orange>elements of nature – from fire to wind to water.</Orange> These symbols instill a sense of grandeur and tranquility within the user.
        </>,
        <>
          In the planning of the built, various <Orange>open spaces</Orange> are incorporated to let in the nature to the interiors. The full heighted glazing and wooden louvres let in ample of natural light while connecting all these spaces to the exterior visually. Various lounge and family areas, both internally and externally, are planned to give the family spaces to <Orange>socialize and bond together in serenity.</Orange>
        </>,
      ]}
    />
  );
}