import ProjectDetailPage from "../ProjectDetailPage";
import { assetImage } from "@/config/assets";

const hero = assetImage("projects/GOLDEN-HAVELL/cover/Hero Image.webp");
const construction1 = assetImage("projects/GOLDEN-HAVELL/3_4/construction/1.webp");
const construction2 = assetImage("projects/GOLDEN-HAVELL/3_4/construction/2.webp");
const new1 = assetImage("projects/GOLDEN-HAVELL/3_4/new/1.webp");
const new2 = assetImage("projects/GOLDEN-HAVELL/3_4/new/2.webp");
const new3 = assetImage("projects/GOLDEN-HAVELL/3_4/new/3.webp");
const new4 = assetImage("projects/GOLDEN-HAVELL/3_4/new/4.webp");
const new5 = assetImage("projects/GOLDEN-HAVELL/3_4/new/5.webp");
const new6 = assetImage("projects/GOLDEN-HAVELL/3_4/new/6.webp");
const new7 = assetImage("projects/GOLDEN-HAVELL/3_4/new/7.webp");
const new8 = assetImage("projects/GOLDEN-HAVELL/3_4/new/8.webp");
const new9 = assetImage("projects/GOLDEN-HAVELL/3_4/new/9.webp");
const new10 = assetImage("projects/GOLDEN-HAVELL/3_4/new/10.webp");
const new11 = assetImage("projects/GOLDEN-HAVELL/3_4/new/11.webp");
const new12 = assetImage("projects/GOLDEN-HAVELL/3_4/new/12.webp");
const new13 = assetImage("projects/GOLDEN-HAVELL/3_4/new/13.webp");
const new14 = assetImage("projects/GOLDEN-HAVELL/3_4/new/14.webp");
const new15 = assetImage("projects/GOLDEN-HAVELL/3_4/new/15.webp");
const new16 = assetImage("projects/GOLDEN-HAVELL/3_4/new/16.webp");
const new17 = assetImage("projects/GOLDEN-HAVELL/3_4/new/17.webp");
const new18 = assetImage("projects/GOLDEN-HAVELL/3_4/new/18.webp");
const new19 = assetImage("projects/GOLDEN-HAVELL/3_4/new/19.webp");
const new20 = assetImage("projects/GOLDEN-HAVELL/3_4/new/20.webp");
const new21 = assetImage("projects/GOLDEN-HAVELL/3_4/new/21.webp");
const new22 = assetImage("projects/GOLDEN-HAVELL/3_4/new/22.webp");
const new23 = assetImage("projects/GOLDEN-HAVELL/3_4/new/23.webp");
const new24 = assetImage("projects/GOLDEN-HAVELL/3_4/new/24.webp");
const old1 = assetImage("projects/GOLDEN-HAVELL/old/1.webp");
const old2 = assetImage("projects/GOLDEN-HAVELL/old/2.webp");
const old3 = assetImage("projects/GOLDEN-HAVELL/old/3.webp");

const Orange = ({ children }) => <span style={{ color: "#FEA50B" }}>{children}</span>;

export const metadata = { title: "Golden Haveli — Spaces Architects@ka" };

export default function GoldenHaveliPage() {
  return (
    <ProjectDetailPage
      currentId="golden-haveli"
      title="Golden Haveli"
      location="Old Delhi"
      hero={hero}
      photos={[
        construction1, construction2,
        new1, new2, new3, new4, new5, new6, new7, new8, new9, new10,
        new11, new12, new13, new14, new15, new16, new17, new18, new19, new20,
        new21, new22, new23, new24,
        old1, old2, old3,
      ]}
      details={{
        Project: "Golden Haveli",
        Location: "Old Delhi",
        "Plot Area": "1,600 sq. ft.",
        "Built-up Area": "6,000 sq. ft.",
        Client: "Mr. Vijay Goel",
        Status: "Completed",
      }}
      publications={[
        "Archello",
        "Hindustan Times",
        "Times of India",
        "Design Magazine",
        "Architects and Interiors India",
      ]}
      description={[
        // Tagline shown as a pull-quote (inline styles keep the shared page styles untouched)
        <span
          key="tagline"
          style={{
            display: "block",
            borderLeft: "2px solid #FEA50B",
            padding: "6px 0 6px 28px",
            margin: "0 0 20px",
            textAlign: "left",
          }}
        >
          <span
            style={{
              display: "block",
              color: "#FEA50B",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: "0.1em",
            }}
          >
            &ldquo;Promoting our culture &amp; heritage, generating tourism and expanding employment go hand in hand&rdquo;
          </span>
          <span
            style={{
              display: "block",
              marginTop: "16px",
              color: "#7d7d7d",
              fontSize: "13px",
              letterSpacing: "0.18em",
            }}
          >
            ~ External Affairs Minister S Jaishankar
          </span>
        </span>,
        <>
          At the heart of Chandni Chowk, Golden Haveli is a restoration of a <Orange>1906 residential-cum-commercial haveli</Orange>, once a <Orange>host to Mahatma Gandhi</Orange>, and a revival of the cultural memory of Old Delhi. After decades of deterioration, the century-old structure was transformed into a <Orange>heritage hotel</Orange>, preserving its architectural character while making its history accessible to a new generation.
        </>,
        <>
          The three-storey haveli retains its <Orange>Mughal architectural language</Orange>, with intricate sandstone carving, façade jaalis, cusped arches, stained glass, floral motifs and stone columns arranged around a central courtyard. The restoration relied on <Orange>original materials and traditional craftsmanship</Orange>, carefully retaining the building&apos;s historic details and spatial character.
        </>,
        <>
          The courtyard was reimagined as an open-to-sky social heart, reconnecting the haveli with the energy of Chandni Chowk. Individually themed rooms across the ground and first floors draw from traditional hues, while the second-floor lounge offers a quieter retreat. Above, the terrace opens to sweeping views of Chandni Chowk&apos;s alleys and Jama Masjid, transforming an introverted heritage home into a <Orange>place of contemplation</Orange>.
        </>,
        <>
          The restoration extended beyond the haveli to its surrounding alleys, where local artisans revived Mughal-inspired murals, colours and motifs, revitalising the larger urban fabric. Golden Haveli thus becomes more than a restored building—it is a <Orange>living fragment of Old Delhi&apos;s history</Orange>, where architecture, craftsmanship and cultural memory continue to coexist.
        </>,
      ]}
    />
  );
}