import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/SONIPAT-HAVELLI/cover/Cover Image.webp");
const photo1 = assetImage("projects/SONIPAT-HAVELLI/3_4/1.webp");
const photo2 = assetImage("projects/SONIPAT-HAVELLI/3_4/2.webp");
const photo3 = assetImage("projects/SONIPAT-HAVELLI/3_4/3.webp");
const photo4 = assetImage("projects/SONIPAT-HAVELLI/3_4/4.webp");
const photo5 = assetImage("projects/SONIPAT-HAVELLI/3_4/5.webp");
const photo6 = assetImage("projects/SONIPAT-HAVELLI/3_4/6.webp");
const photo7 = assetImage("projects/SONIPAT-HAVELLI/3_4/7.webp");
const photo8 = assetImage("projects/SONIPAT-HAVELLI/3_4/8.webp");
const photo9 = assetImage("projects/SONIPAT-HAVELLI/3_4/9.webp");
const photo10 = assetImage("projects/SONIPAT-HAVELLI/3_4/10.webp");
const photo11 = assetImage("projects/SONIPAT-HAVELLI/3_4/11.webp");
const photo12 = assetImage("projects/SONIPAT-HAVELLI/3_4/12.webp");
const photo13 = assetImage("projects/SONIPAT-HAVELLI/3_4/13.webp");
const photo14 = assetImage("projects/SONIPAT-HAVELLI/3_4/14.webp");
const coverPhoto2 = assetImage("projects/SONIPAT-HAVELLI/cover/Hero Image.webp");

export const metadata = { title: "Sonipat Haveli — Spaces Architects@ka" };
export default function SonipatHaveliPage() {
  return (
    <ProjectDetailPage
      currentId="sonipat-haveli"
      title="Sonipat Haveli"
      location="Sonipat, Haryana"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7,
        photo8, photo9, photo10, photo11, photo12, photo13, photo14,
        coverPhoto2,
      ]}
      details={{
        Project: "Sonipat Haveli",
        Location: "Sonipat, Haryana",
        Client: "Mr. Vijay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          Haveli is a{" "}
          <span style={{ color: "#fea50b" }}>
            300-year-old heritage haveli
          </span>{" "}
          in Sonipat, Haryana, carefully conserved and adapted for
          contemporary use as{" "}
          <span style={{ color: "#fea50b" }}>a lodge and village museum</span>
          . The restoration retains its traditional Lakhori brick
          construction, lime mortar, stone columns, carved arches, timber
          beams and decorative balconies.
        </>,
        <>
          Designed as a self-contained rural dwelling, the haveli
          demonstrates the{" "}
          <span style={{ color: "#fea50b" }}>
            climate-responsive wisdom of traditional Indian architecture
          </span>
          , with thick walls providing natural insulation and courtyards
          bringing light and ventilation into the home. Its interiors
          preserve the materiality and atmosphere of rural Haryana through
          exposed brick, timber, traditional crafts and vernacular objects.
        </>,
        <>
          Today, the restored haveli serves as a living record of{" "}
          <span style={{ color: "#fea50b" }}>
            Haryana&apos;s rural heritage and everyday village life
          </span>
          , allowing its architecture, craftsmanship and cultural memory to
          continue in use rather than remain frozen as a monument.
        </>,
      ]}
    />
  );
}