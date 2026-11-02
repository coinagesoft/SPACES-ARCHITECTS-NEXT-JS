import ProjectDetailPage from "../ProjectDetailPage";
import { mobileCover } from "@/config/mobileCovers";
import { assetImage } from "@/config/assets";
import { projectMetadata } from "@/config/seo";

export const metadata = projectMetadata("concrete-house");

// Only one photograph exists for this project, so it doubles as the hero and the gallery image.
const hero = assetImage("projects/CONCRETE-HOUSE/1.webp");
const photo1 = assetImage("projects/CONCRETE-HOUSE/1.webp");



export default function ConcreteHousePage() {
  return (
    <ProjectDetailPage
      currentId="concrete-house"
      title="Concrete House"
      location="Kamla Nagar, Agra"
      hero={hero}
      mobileHero={mobileCover("concrete-house")}
      photos={[photo1]}
      details={{
        Project: "Concrete House",
        Location: "Kamla Nagar, Agra",
        "Plot Area": "3,000 sq. ft.",
        "Built-up Area": "8,000 sq. ft.",
        Client: "Mr. Abhishek",
        Status: "Ongoing",
      }}
    />
  );
}