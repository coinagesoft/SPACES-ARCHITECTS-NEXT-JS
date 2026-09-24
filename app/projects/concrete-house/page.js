import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

// Only one photograph exists for this project, so it doubles as the hero and the gallery image.
const hero = assetImage("projects/CONCRETE-HOUSE/1.webp");
const photo1 = assetImage("projects/CONCRETE-HOUSE/1.webp");

export const metadata = { title: "Concrete House — Spaces Architects@ka" };

export default function ConcreteHousePage() {
  return (
    <ProjectDetailPage
      currentId="concrete-house"
      title="Concrete House"
      location="Kamla Nagar, Agra"
      hero={hero}
      photos={[photo1]}
      details={{
        Project: "Concrete House",
        Location: "Kamla Nagar, Agra",
        Client: "Mr. Abhishek",
        Status: "Ongoing",
      }}
    />
  );
}