import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata("faq");

// ============================================================
//  FAQ
//  Each answer is a list of paragraphs. To edit a question, change
//  it in this list. To move a question to another section, change
//  the GROUPS list below.
// ============================================================
const faqs = [
  {
    q: "Who are we?",
    a: [
      "We are an architectural and interior firm based in New Delhi, founded by principal architect Kapil Aggarwal.",
    ],
  },
  {
    q: "Since when have we been practicing?",
    a: ["We have been practicing since 2000."],
  },
  {
    q: "What kinds of projects do we do, or do we specialise in any field?",
    a: [
      "We do projects ranging from product designing to residences, school, retails, interior, corporates, landscape and conservation. We have completed more than 500 projects till date.",
      "Our practice is not confined to a single typology or discipline. Instead, we approach every project on its own merit, recognising that each comes with its own context, challenges and opportunities. While our design process remains rooted in a consistent philosophy, the response is always distinct to the project.",
    ],
  },
  {
    q: "Who designs the projects?",
    a: [
      "All the projects are designed conceptually and in depth by Kapil Aggarwal.",
      "This is also the reason why we are very selective about taking up projects. Each project requires an intensive thought process.",
    ],
  },
  {
    q: "Can we visit the site?",
    a: [
      "We share the addresses of sites that are under construction but discourage visits to projects that are occupied by clients, in order to respect their privacy. Most of our completed projects are documented and can be shared through links.",
    ],
  },
  {
    q: "How do we contact you?",
    a: [
      "You can contact us on the office landline mentioned on our website. You will be connected to a senior architect who will take a brief about the project and will arrange a meeting with the principal architect.",
    ],
  },
  {
    q: "What should we get for the meeting?",
    a: [
      "A brief project requirement, site dimension, location and preferably a survey plan.",
    ],
  },
  {
    q: "Do you visit the site before taking up the project?",
    a: ["Yes, we do visit the site after the initial productive meeting."],
  },
  {
    q: "Do we charge for the meeting?",
    a: [
      "We do not charge for meetings at our office but do charge for outstation meetings based on travel and other associated expenses.",
    ],
  },
  {
    q: "How much time do you take to develop a concept?",
    a: [
      "We take very limited projects to maintain quality. It depends upon the project scale and requirements but we usually take 3-4 weeks to create the initial concept.",
    ],
  },
  {
    q: "Do we give multiple options?",
    a: [
      "We create design options based on the client's brief and requirements but discourage changes to the brief after the initial options have been developed. Detailed project requirements must be discussed before developing the project concept. We help clients create a brief by understanding their requirements.",
    ],
  },
  {
    q: "Do we charge before starting a project?",
    a: ["Yes, we charge 10% fees before starting a project."],
  },
  {
    q: "When do we get the services and fee statement from you?",
    a: [
      "We send the service and fee statement to prospective clients once we have had a detailed and productive discussion and decide to proceed to the next stage. It is very important to understand the project brief clearly before preparing the statement.",
    ],
  },
  {
    q: "Do you take up construction projects?",
    a: [
      "We are, primarily, a design-based firm at core but we take very selected projects for construction.",
    ],
  },
  {
    q: "Do you supervise your projects?",
    a: [
      "Yes, we supervise our projects regularly. This supervision includes the principal architect and other team members. We do not encourage extensive supervision and recommend that clients appoint a PMC, depending on the scale of the project.",
    ],
  },
  {
    q: "Do you do renovation work?",
    a: [
      "We undertake only projects that are designed from scratch. We take up renovation and conservation projects only for heritage structures.",
    ],
  },
  {
    q: "Do you do elevation solely?",
    a: [
      "We do not take up a facade only project, we believe in taking a project as a whole.",
    ],
  },
  {
    q: "Do you suggest vendors, contractors and suppliers?",
    a: [
      "Our firm's designers do not promote, endorse or represent any brand, company or product. To the best of our ability, our selection of products and services is based purely on technical merit, performance, service and cost.",
      "We do suggest vendors who have previously worked on our projects and have proven to be reliable. However, we do not take responsibility for their charges or workmanship. We advise clients to choose vendors according to their convenience and budget, and assist them throughout the process.",
    ],
  },
  {
    q: "Do you select materials and charge for it?",
    a: [
      "We do not charge to select materials if the selection is done in NCR but do charge travel and other expenses, as per mutually agreed.",
    ],
  },
  {
    q: "What is your fee structure?",
    a: [
      "Every project is unique, and so is the scope of our engagement.",
      "Our professional fees are determined by the nature, scale and complexity of the project, along with the range of architectural and interior design services required.",
      "Depending on the project, our fees may be structured as a percentage of the project cost or as a mutually agreed fixed professional fee. Before commencing each engagement, we provide a clearly defined scope of services, deliverables and stage-wise fee schedule, ensuring clarity and transparency from the outset.",
      "We invite you to share your project brief with us for a personalised fee proposal.",
    ],
  },
  {
    q: "Do you follow vastu?",
    a: [
      "We follow basic vastu principles (which have scientific reasoning) but prefer a building to have natural daylight and proper ventilation in our belief, there is no proper scientific documentation of vastu principles, and they differ from person to person, creating unnecessary fear among people. This ends up creating complexity in the project.",
    ],
  },
  {
    q: "What is the process of designing?",
    a: [
      "When a client contacts us, we make sure to send them a list of FAQs, along with our website and other social media links.",
      "If the client is comfortable with the information provided and wishes to take the discussion further, we schedule a meeting at our office with the principal architect to discuss the project brief in detail. If both parties mutually agree to proceed, we arrange a site visit and request a detailed digital site survey.",
      "Based on this, we define the detailed project requirements and discuss all aspects of the project. The next step is to develop a core design concept, presented through plans, sketches or digital models, to help the client understand the proposed design.",
      "Following the client's approval, and incorporating any agreed changes through subsequent meetings, we formally take the project forward and proceed with the preparation of working drawings.",
    ],
  },
  {
    q: "Do you do liaising work?",
    a: [
      "We do not undertake liaison work but can recommend people who provide these services. Clients can negotiate and proceed with them as mutually agreed.",
    ],
  },
];

// Sections shown on the page (the questions are matched by their text above)
const GROUPS = [
  {
    id: "about-us",
    title: "About Us",
    questions: [
      "Who are we?",
      "Since when have we been practicing?",
      "What kinds of projects do we do, or do we specialise in any field?",
      "Who designs the projects?",
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      "How do we contact you?",
      "What should we get for the meeting?",
      "Do we charge for the meeting?",
      "Do you visit the site before taking up the project?",
      "Can we visit the site?",
    ],
  },
  {
    id: "design-process",
    title: "Design Process",
    questions: [
      "What is the process of designing?",
      "How much time do you take to develop a concept?",
      "Do we give multiple options?",
      "Do you follow vastu?",
    ],
  },
  {
    id: "fees",
    title: "Fees & Services",
    questions: [
      "What is your fee structure?",
      "Do we charge before starting a project?",
      "When do we get the services and fee statement from you?",
      "Do you select materials and charge for it?",
    ],
  },
  {
    id: "execution",
    title: "Execution",
    questions: [
      "Do you take up construction projects?",
      "Do you supervise your projects?",
      "Do you do renovation work?",
      "Do you do elevation solely?",
      "Do you suggest vendors, contractors and suppliers?",
      "Do you do liaising work?",
    ],
  },
].map((group) => ({
  ...group,
  items: group.questions.map((q) => faqs.find((f) => f.q === q)).filter(Boolean),
}));

// Structured data so search engines can show these as FAQ results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a.join(" ") },
  })),
};

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <SiteChrome sticky />

      <section className={styles.wrap} aria-label="Frequently asked questions">
        {/* left: title + section links */}
        <aside className={styles.side}>
          <h1 className={styles.pageTitle}>FAQ</h1>
          <nav className={styles.sections} aria-label="FAQ sections">
            {GROUPS.map((group) => (
              <a key={group.id} href={`#${group.id}`} className={styles.sectionLink}>
                {group.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* right: questions */}
        <div className={styles.content}>
          {GROUPS.map((group) => (
            <section key={group.id} id={group.id} className={styles.group}>
              <h2 className={styles.groupTitle}>{group.title}</h2>

              {group.items.map(({ q, a }) => (
                <details key={q} className={styles.item}>
                  <summary className={styles.question}>
                    <span className={styles.qText}>{q}</span>
                    <span className={styles.icon} aria-hidden="true" />
                  </summary>
                  <div className={styles.answer}>
                    {a.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </section>
          ))}
        </div>
      </section>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
