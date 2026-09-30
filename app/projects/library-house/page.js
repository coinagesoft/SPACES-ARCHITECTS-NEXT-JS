import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/LIBRARY-HOUSE/cover/COVER.webp");

const photo1 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2853.webp");
const photo2 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2862.webp");
const photo3 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2907.webp");
const photo4 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2918.webp");
const photo5 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2936.webp");
const photo6 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2943.webp");
const photo7 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2960.webp");
const photo8 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2966.webp");
const photo9 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_2988.webp");
const photo10 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3021.webp");
const photo11 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3042.webp");
const photo12 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3059.webp");
const photo13 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3087.webp");
const photo14 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3096.webp");
const photo15 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3138.webp");
const photo16 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3179.webp");
const photo17 = assetImage("projects/LIBRARY-HOUSE/photographs/BHA_3260.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Library House — Spaces Architects@ka" };

export default function LibraryHousePage() {
  return (
    <ProjectDetailPage
      currentId="library-house"
      title="Library House"
      location="New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        photo2, photo1,
        photo3,
        photo6, photo7, photo8,
        photo9,
        photo5, photo4,
        photo10, photo11,
        photo12, photo14,
        photo17, photo15, photo16,
        photo13,
      ]}
      details={{
        Project: "Library House",
        Location: "New Delhi",
        Client: "Mrs. Rashmi",
        Status: "Completed",
      }}
      description={[
        <>
          Set within a dense residential neighbourhood of Gurugram, The Library House is a <Orange>home for three generations</Orange>, conceived around light, greenery and quiet moments of togetherness. The south-facing residence draws in daylight, while a grove of six mature trees along the western edge shades balconies and terraces and keeps the home closely connected to nature.
        </>,
        <>
          At its heart, a <Orange>triple-height courtyard</Orange> forms the luminous core of the house, visually connecting the family across all three levels. Overlooking it is the defining <Orange>cantilevered library</Orange>—a sculptural volume conceived as a symbol of knowledge, contemplation and connection.
        </>,
        <>
          The ground floor brings together communal living and dining spaces, an open prayer hall and the grandmother&apos;s room. The upper levels accommodate the family&apos;s private spaces, with balconies extending towards the shaded green edge. A <Orange>restrained palette of stone, wood and white plaster, complemented by skylights, large openings and planted terraces</Orange>, reinforces the home&apos;s quiet character.
        </>,
        <>
          The Library House becomes a serene framework for family, knowledge and nature, where light and landscape weave through everyday life.
        </>,
      ]}
    />
  );
}