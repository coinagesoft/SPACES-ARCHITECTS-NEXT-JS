import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/SETHIS-RESIDENCE/cover/COVER.webp");
const photo1 = assetImage("projects/SETHIS-RESIDENCE/3_4/1.webp");
const photo2 = assetImage("projects/SETHIS-RESIDENCE/3_4/2.webp");
// const photo3 = assetImage("projects/SETHIS-RESIDENCE/3_4/3.webp");
const photo4 = assetImage("projects/SETHIS-RESIDENCE/3_4/4.webp");
const photo5 = assetImage("projects/SETHIS-RESIDENCE/3_4/5.webp");
const photo6 = assetImage("projects/SETHIS-RESIDENCE/3_4/6.webp");
const photo7 = assetImage("projects/SETHIS-RESIDENCE/3_4/7.webp");
const photo8 = assetImage("projects/SETHIS-RESIDENCE/3_4/8.webp");
const photo9 = assetImage("projects/SETHIS-RESIDENCE/3_4/9.webp");
const photo10 = assetImage("projects/SETHIS-RESIDENCE/3_4/10.webp");
const photo11 = assetImage("projects/SETHIS-RESIDENCE/3_4/11.webp");
const photo12 = assetImage("projects/SETHIS-RESIDENCE/3_4/12.webp");
const heroPhoto = assetImage("projects/SETHIS-RESIDENCE/cover/HERO.webp");
const Orange = ({ children }) => <span style={{ color: "#C1591C" }}>{children}</span>;

export const metadata = { title: "Sethi's Residence — Spaces Architects@ka" };
export default function SethisResidencePage() {
  return (
    <ProjectDetailPage
      title="Sethi's Residence"
      location="Gurgaon, Haryana"
      hero={hero}
      photos={[
        photo1, photo2, photo4, photo5, photo6, photo7, photo8,
        photo9, photo10, photo11, photo12,
        heroPhoto,
      ]}
      details={{
        Project: "Sethi's Residence",
        Location: "Gurgaon, Haryana",
        Client: "Mr. Sethi",
        Status: "On-Going",
      }}
      description={[
        <>
          Located in a prime neighbourhood of Gurgaon, this residence <Orange>reinterprets neo-classical architecture through a distinctly artistic studio lens.</Orange> Evolved architectural language is paired back and layered with contemporary forms, rich materiality and expressive details to create interiors that feel both timeless and individual.
        </>,
        <>
          Classical wall panelling, crafted mouldings and herringbone flooring establish a refined architectural backdrop, while bold artwork, sculptural furniture and curated lighting introduce moments of contrast. Deep terracotta tones, muted blues, natural wood and stone create a palette that shifts subtly from room to room, giving each space its own character while maintaining a cohesive visual language.
        </>,
        <>
          At the heart of the design is a balance between contemporary elegance and modernity—<Orange>where classical proportions provide structure, and art, colour and bespoke detailing bring the home to life.</Orange>
        </>,
      ]}
    />
  );
}