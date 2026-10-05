import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "FAQ — Spaces Architects@ka",
  description:
    "Answers to common questions about Spaces Architects@ka — how we work, how to get in touch, fees, site visits, process and more.",
};

// ============================================================
//  FAQ — from FAQ1.docx
//  Each answer is a list of paragraphs. To edit a question, change
//  it in this list. To move a question to another section, change
//  the GROUPS list below.
// ============================================================
const faqs = [
  {
    q: "Who are we?",
    a: ["We are an architectural and interior firm based in New Delhi, founded by principal architect Kapil Aggarwal."],
  },
  {
    q: "Since when have we been practicing?",
    a: ["We have been practicing since 2000."],
  },
  {
    q: "What kinds of projects do we do, or do we specialize in any field?",
    a: [
      "We do projects ranging from product designing to residences, schools, retail, interiors, corporates, landscape and conservation. We have completed more than 500 projects to date.",
      "We do not specialize in any field but rather take each project on its merit and create it. We consider that no two projects are similar, and we follow a similar process to develop each project.",
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
      "We share addresses of sites which are under construction, but we discourage visits to projects that are occupied by clients, to respect their privacy. Most completed projects are documented and can be shared through links.",
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
    a: ["A brief project requirement, site dimensions, location and preferably a survey plan."],
  },
  {
    q: "Do you visit the site before taking up the project?",
    a: ["Yes, we do visit the site after the initial productive meeting."],
  },
  {
    q: "Do we charge for the meeting?",
    a: [
      "We do not charge for office meetings but do charge for outstation meetings according to travel and other expenses.",
    ],
  },
  {
    q: "How much time do you take to develop a concept?",
    a: [
      "We take very limited projects to maintain quality. It depends upon the project scale and requirements, but we usually take 3-4 weeks to create the initial concept.",
    ],
  },
  {
    q: "Do we give multiple options?",
    a: [
      "We create options as per the brief of client requirements but discourage the process where the client changes the brief after creating the initial option. A detailed project requirement has to be discussed before creating the project concept. We help clients in creating a brief by understanding their requirements.",
    ],
  },
  {
    q: "Do we charge before starting a project?",
    a: ["Yes, we charge 10% fees before starting a project."],
  },
  {
    q: "When do we get the services and fee statement from you?",
    a: [
      "We send the services and fee statement once we have had a detailed and productive discussion with the prospective client and choose to take it to the next level. It is very important to understand the proper brief of the project to create a statement.",
    ],
  },
  {
    q: "Do you take up construction projects?",
    a: [
      "We are, primarily, a design-based firm at core, but we take very selected projects for construction.",
    ],
  },
  {
    q: "Do you supervise your projects?",
    a: [
      "Yes, we do supervise our projects regularly. This supervision includes the principal architect and other team members. We do not encourage extensive supervision and encourage the client to appoint a PMC depending on the scale of the project.",
    ],
  },
  {
    q: "Do you do renovation work?",
    a: [
      "We do only projects which are designed from scratch. We do renovation and conservation projects only of heritage structures.",
    ],
  },
  {
    q: "Do you do elevation solely?",
    a: ["We do not take up a facade-only project; we believe in taking a project as a whole."],
  },
  {
    q: "Do you suggest vendors, contractors and suppliers?",
    a: [
      "Our firm's designers do not promote, endorse, or represent any brand, company, or product. To the best of our ability, our selection of services and products is purely based on technical merits, performance, service and cost.",
      "We do suggest vendors who have previously worked on our projects and are reliable, but we do not take any responsibility for their charges and work. We advise clients to choose vendors as per their convenience and budget and help them in the process.",
    ],
  },
  {
    q: "Do you select materials and charge for it?",
    a: [
      "We do not charge to select materials if the selection is done in NCR, but do charge travel and other expenses, as mutually agreed.",
    ],
  },
  {
    q: "What is your fee structure?",
    a: ["We charge as per the project and requirements."],
  },
  {
    q: "Do you follow vastu?",
    a: [
      "We follow basic vastu principles (which have scientific reasoning) but prefer a building to have natural daylight and proper ventilation. In our belief, there is no proper scientific documentation of vastu principles, and they differ from person to person, creating unnecessary fear among people. This ends up creating complexity in the project.",
    ],
  },
  {
    q: "What is the process of designing?",
    a: [
      "When a client contacts us, we make sure we send them a list of FAQ, website and other social media links.",
      "If the client is comfortable with the links provided and wants to take it further, we call for a meeting in our office with the principal architect for a detailed discussion regarding the project brief. If agreed mutually, we visit the site and ask for a detailed digital site survey. Accordingly, we create detailed project requirements and discuss all details.",
      "The next step is to create a core design concept plan with sketches or digital modelling, for better understanding of the project. On approval, in a couple of meetings, as per the changes, we take the project further, get it sanctioned and move forward in creating working drawings.",
    ],
  },
  {
    q: "Do you do liaisoning work?",
    a: [
      "We do not do liaisoning work but can recommend people who do, so that the client can negotiate and proceed as agreed.",
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
      "What kinds of projects do we do, or do we specialize in any field?",
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
      "Do you do liaisoning work?",
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