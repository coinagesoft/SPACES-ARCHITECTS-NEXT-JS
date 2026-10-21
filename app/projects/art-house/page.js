import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/ART_HOUSE/cover/HERO.webp");

// Gallery images from ART_HOUSE/3_4, kept in the order they were curated in the old page,
// with the two previously unused images (33, 34) at the end.
const photoNumbers = [
  16, 18, 19, 20, 8, 21, 23, 28, 9, 10, 22, 26, 27, 15, 29, 30, 32,
  1, 17, 14, 2, 13, 11, 12, 7, 6, 31, 25, 24, 4, 5, 3, 33, 34,
];
const photos = photoNumbers.map((n) => assetImage("projects/ART_HOUSE/3_4/" + n + ".webp"));

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Art House — Spaces Architects@ka" };

export default function ArtHousePage() {
  return (
    <ProjectDetailPage
      currentId="art-house"
      title="Art House"
      location="New Delhi"
      hero={hero}
      photos={photos}
      details={{
        Project: "Art House",
        Location: "New Delhi",
        "Plot Area": "2,150 sq. ft.",
        "Built-up Area": "11,000 sq. ft.",
        Client: "Mr. Dinesh Ahuja",
        Status: "Completed",
        Team: "Ar. Kapil Aggarwal, Pawan Sharma",
      }}
      publications={[
        "Dezeen",
        "ArchDaily",
        "TrendHunter",
        "ArchDaily España",
        "ArchDaily Brasil",
        "Interni Deco",
        "e-architect",
        "ArchDaily China",
        "HomeWorldDesign",
        "ARTFEED",
        "Amazing Architecture",
      ]}
      description={[
        <>
          Set in the urban context of Delhi, the facade design reflects a modern and climate-responsive approach tailored to the city's intense seasonal variations. It features a thoughtful interplay of <Orange>vertical fins, deep overhangs & perforated metal screens</Orange> that not only enhance the visual language but also mitigate heat gain—critical in Delhi's hot climate. Materials such as exposed concrete, weather-resistant metal cladding & high-performance glazing are used strategically to balance durability with aesthetics.
        </>,
        <>
          The facade's large recessed openings maximize natural light while minimizing glare and thermal load, creating a comfortable indoor environment. Vertical elements add rhythm and articulation, breaking down the scale of the structure and lending it a refined, contemporary identity. <Orange>At night, integrated lighting softly outlines the architectural features, making the building stand out in the dense urban fabric.</Orange> This facade exemplifies a blend of modern design sensibilities and environmental responsiveness, well-suited for Delhi's evolving architectural landscape.
        </>,
        <>
          The interior design showcases a refined blend of <Orange>contemporary elegance & functional minimalism</Orange>, characterized by clean lines, layered lighting and a harmonious material palette. Key features include open-plan layouts, modular furniture and integrated storage that enhances spatial fluidity. Vertical slatted panels, fluted wall treatments and built-in joinery introduce rhythm and texture, while recessed and cove lighting define zones and add depth. Glass partitions maintain transparency and openness, often paired with soft furnishings to balance acoustics and comfort. Predominant materials include wood veneers, laminates, polished stone, frosted or clear glass and matte finishes, complemented by brass or black metal accents. <Orange>Biophilic elements like indoor plants contribute to a calming ambiance.</Orange>
        </>,
      ]}
    />
  );
}