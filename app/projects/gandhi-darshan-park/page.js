import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/GANDHI-DARSHAN-PARK/cover/Cover Image.webp");

const img1 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/1.webp");
const img2 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/2.webp");
const img3 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/3.webp");
const img4 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/4.webp");
const img5 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/5.webp");
const img6 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/6.webp");
const img7 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/7.webp");
const img8 = assetImage("projects/GANDHI-DARSHAN-PARK/3_4/8.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Gandhi Darshan Park — Spaces Architects@ka" };

export default function GandhiDarshanParkPage() {
  return (
    <ProjectDetailPage
      currentId="gandhi-darshan-park"
      title="Gandhi Darshan Park"
      location="Delhi"
      hero={hero}
      // Same order as the old gallery array
      photos={[
        img1, img2,
        img3,
        img4, img5,
        img6,
        img7, img8,
      ]}
      details={{
        Project: "Gandhi Darshan Park",
        Location: "Raj Ghat, New Delhi",
        Client: "Mr. Vijay Goel",
        Status: "Completed",
      }}
      description={[
        <>
          An extension of Gandhi Smriti near Rajghat, Gandhi Darshan Park translates Mahatma <Orange>Gandhi&apos;s principles of simplicity, non-violence and harmony with nature</Orange> into a contemplative <Orange>public landscape</Orange>. Conceived as a place to pause, reflect and connect with his philosophy, the park uses landscape and symbolism to make his legacy accessible across generations.
        </>,
        <>
          A red sandstone pathway guides visitors through the park, passing symbolic installations including the <Orange>Charkha</Orange> and the <Orange>three monkeys</Orange>. At its centre, the <Orange>Vasudhaiva Kutumbakam</Orange> Wheel forms a quiet focal point for peace and contemplation, surrounded by gardens, greenery and shaded seating.
        </>,
        <>
          The park brings together <Orange>spaces for all generations: children&apos;s play areas, open-air theatres for cultural programmes and tranquil seating for the elderly</Orange>. Through this blend of nature, symbolism and activity, Gandhi Darshan creates a contemporary setting where Gandhian thought becomes an experience rather than a lesson, connecting the philosophy of the past with present and future generations.
        </>,
      ]}
    />
  );
}