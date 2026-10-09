import ProjectDetailPage from "../ProjectDetailPage";
import { assets } from "@/assets";
import { assetImage } from "@/config/assets";

const hero = assets.stepMazeHouse.hero;
const g = assets.stepMazeHouse.gallery;

// New model images — defined here in the project page only
const model1n = assetImage("projects/STEP-MAZE/photographs/1n.webp");
const model2n = assetImage("projects/STEP-MAZE/photographs/2n.webp");
const model3n = assetImage("projects/STEP-MAZE/photographs/3n.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "The Step Maze House — Spaces Architects@ka" };

export default function StepMazeHousePage() {
  return (
    <ProjectDetailPage
      currentId="step-maze"
      title="The Step Maze House"
      location="Model Town, New Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        g[0],
        g[1], g[2],
        g[3],
        g[4], g[12],
        g[7], g[5], g[6],
        g[8], g[9],
        g[14],
        g[10], g[11],
        g[16],
        g[13], g[15],
        g[17],
        model1n, model3n, model2n,
      ]}
      details={{
        Project: "The Step Maze House",
        Location: "Model Town, New Delhi",
        "Plot Area": "2,400 sq. ft.",
        "Built-up Area": "8,600 sq. ft.",
        Client: "Mr. Malhotra",
        Status: "Completed",
      }}
      publications={[
        "Amazing Architecture",
        "e-architect",
        "Buildofy",
      ]}
      description={[
        <>
          Set on a <Orange>trapezium-shaped corner plot in Delhi</Orange>, Step Maze is a residence for a family of five and their dog, shaped by its dual street frontage. The planning uses the two open sides to draw in natural light, breeze and views, while louvers and brick jaalis provide privacy and shade without closing the house off from its surroundings.
        </>,
        <>
          The home&rsquo;s defining feature is its <Orange>staggered vertical staircase core</Orange>, where circulation becomes an architectural experience. From the <Orange>skylit central stair</Orange> and informal stair-sitting to the garden transition and hidden staircase behind the glass pergola, the journey through the house continuously changes in scale, direction and perspective.
        </>,
        <>
          Across its levels, formal and informal living spaces, bedrooms, prayer areas and gardens are arranged around this <Orange>dynamic vertical journey.</Orange> Open terraces, balconies and planted spaces extend the interiors outdoors, while varied volumes allow hot air to escape and improve natural ventilation.
        </>,
        <>
          The result is a <Orange>home that balances privacy with openness and functionality with playfulness</Orange>—where movement, light, landscape and changing perspectives give everyday living a sense of discovery.
        </>,
      ]}
    />
  );
}