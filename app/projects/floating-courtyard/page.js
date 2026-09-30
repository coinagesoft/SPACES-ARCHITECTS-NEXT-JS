import ProjectDetailPage from "../ProjectDetailPage";
import { assets } from "@/assets";

const hero = assets.floatingCourtyard.hero;
const photos = assets.floatingCourtyard.gallery;

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Floating Courtyard — Spaces Architects@ka" };

export default function FloatingCourtyardPage() {
  return (
    <ProjectDetailPage
      currentId="floating-courtyard"
      title="Floating Courtyard"
      location="Agra"
      hero={hero}
      photos={photos}
      details={{
        Project: "Floating Courtyard",
        Location: "Agra",
        Client: "Mr. Mohan Aggarwal",
        Status: "On-Going",
      }}
      description={[
        <>
          Floating Courtyard is a 700 sq. yard residence conceived as a contemporary, sustainable home where architecture and landscape are seamlessly integrated. Spread across the ground, first and second floors, the house is organized around a series of <Orange>internal courtyards and green spaces positioned at different levels</Orange>, creating a layered relationship between built and open spaces.
        </>,
        <>
          The courtyards act as the heart of the residence, bringing natural light, ventilation and greenery deep into the house while offering moments of <Orange>pause and visual connection between floors</Orange>. Each level incorporates landscaped pockets and terraces, giving the impression of green spaces floating within the built form.
        </>,
        <>
          Designed around the lifestyle and aspirations of the client, the residence balances privacy with openness through carefully framed views, terraces, planted edges and interconnected internal spaces. The architecture is expressed through clean geometric volumes, deep overhangs, warm wood accents and abundant planting, creating a residence that feels <Orange>immersed in nature despite its urban setting</Orange>.
        </>,
        <>
          Floating Courtyard explores how multiple layers of landscape can become an integral part of the architecture, transforming the house into a continuous dialogue between <Orange>built form, light, air and greenery</Orange>.
        </>,
      ]}
    />
  );
}