import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage, assetUrl } from "@/config/assets";
const hero = assetImage("projects/BHIMTAL-RESORT/cover/COVER.webp");
const photo1 = assetImage("projects/BHIMTAL-RESORT/3_4/1.webp");
const photo2 = assetImage("projects/BHIMTAL-RESORT/3_4/2.webp");
const photo3 = assetImage("projects/BHIMTAL-RESORT/3_4/3.webp");
const photo4 = assetImage("projects/BHIMTAL-RESORT/3_4/4.webp");
const photo5 = assetImage("projects/BHIMTAL-RESORT/3_4/5.webp");
const photo6 = assetImage("projects/BHIMTAL-RESORT/3_4/6.webp");
const photo7 = assetImage("projects/BHIMTAL-RESORT/3_4/7.webp");
const coverPhoto2 = assetImage("projects/BHIMTAL-RESORT/cover/HERO.webp");

export const metadata = { title: "Bhimtal Resort — Spaces Architects@ka" };
export default function BhimtalResortPage() {
  return (
    <ProjectDetailPage
      title="Bhimtal Resort"
      location="Bhimtal, Uttarakhand"
      hero={hero}
      photos={[
        photo1, photo2, photo3, photo4, photo5, photo6, photo7,
        coverPhoto2,
      ]}
      details={{
        Project: "Bhimtal Resort",
        Location: "Bhimtal, Uttarakhand",
        Client: "Mr. Himanshu Sachdeva",
        Status: "Completed",
      }}
      description={[
        <>
          The Bhimtal Resort stands on a hilltop overlooking the lush green valleys of Bhimtal, a town situated right in the heart of nature. The design gets its inspiration from nature itself, from the form imitating the smaller hills and a cool-toned blue color palette, that is easily found in nature itself yet stands out from the usual built form.
        </>,
        <>
          This color palette is well complemented by the natural material palette of stones on the lower floors. The whole resort is distributed in two blocks, well-connected by pathways or trails of nature that go around the flora of the site. The interior planning ensures the best views for each guest with spacious rooms and modern comfort. Experience for each visitor is guided by the design to enjoy nature while appreciating the built form as well; the balance of built and unbuilt is identified and maintained.
        </>,
      ]}
    />
  );
}