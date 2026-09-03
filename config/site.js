/**
 * SITE CONTENT & NAVIGATION
 * -------------------------
 * Copy, nav links, footer columns and contact details, kept in one
 * place so text edits don't require touching component code.
 */

export const site = {
  name: "SPACES ARCHITECTS",
  handle: "@ka",
  tagline: "Architecture with a sense of place, purpose and soul",

  contact: {
    phones: ["+91 11 4310 8540", "+91 11 3568 3993"],
    email: "admin@spacesarchitects-ka.com",
    address: "A-21/A, Basement, South Extension II, New Delhi, Delhi 110049",
  },

  social: [
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:admin@spacesarchitects-ka.com" },
  ],

  // Two-column primary navigation shown in the full-screen menu overlay
  menu: [
    [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "News + Events", href: "/blog" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
    [
      { label: "Process", href: "/about" },
      { label: "Art", href: "/projects" },
      { label: "Contact", href: "/about#contact" },
      { label: "Awards", href: "/awards" },
      { label: "Publication", href: "/blog" },
    ],
  ],

  // Four-column footer navigation
  footerColumns: [
    {
      title: "Architecture",
      links: ["All", "Hospitality", "Institutional", "Corporate", "Culture", "Mixed-use", "Homes"],
    },
    {
      title: "Interiors",
      links: ["All", "Leisure", "Homes", "Hotels", "F&B", "Brand Experiences", "Retail"],
    },
    {
      title: "News and Views",
      links: ["All", "Featured In", "Awards", "Events", "Blog"],
    },
    {
      title: "About",
      links: ["Spaces Architects@ka", "Team", "Clients", "Values", "Careers", "Contact"],
    },
  ],

  footerNote: "Built with Next.js",
};

export const homeCopy = {
  intro: [
    "SPACES ARCHITECTS@KA IS AN ARCHITECTURE AND DESIGN PRACTICE DRIVEN BY A BELIEF THAT THE MOST MEMORABLE SPACES ARE NOT SIMPLY BUILT THEY ARE EXPERIENCED, FELT AND REMEMBERED. THE STUDIO APPROACHES EVERY PROJECT AS AN EMOTIONAL JOURNEY, BEGINNING WITH THE CHARACTER OF A PLACE AND THE ASPIRATIONS OF THE PEOPLE WHO WILL INHABIT IT, AND EVOLVING THROUGH LIGHT, LANDSCAPE, MATERIAL, CRAFT AND MOVEMENT INTO SPACES WITH A DISTINCT IDENTITY.",
    "FROM CONTEMPORARY RESIDENCES AND WORKPLACES TO HOSPITALITY, INSTITUTIONS AND SENSITIVE HERITAGE PROJECTS, THE PRACTICE EXPLORES THE DIALOGUE BETWEEN TRADITION AND MODERNITY, FUNCTIONALITY AND EMOTION, PERMANENCE AND CHANGE. ITS WORK SEEKS TO CREATE MOMENTS OF DISCOVERY: THE FIRST GLIMPSE OF A COURTYARD, THE WARMTH OF NATURAL LIGHT ACROSS STONE, THE QUIETNESS OF A PRIVATE CORNER, OR THE MEMORY CREATED AROUND A SHARED SPACE.",
    "THIS PHILOSOPHY HAS TRANSLATED INTO A DIVERSE PORTFOLIO RECOGNISED BY LEADING ARCHITECTURE AND DESIGN PLATFORMS, WITH PROJECTS FEATURED BY ARCHDAILY, ARCHITECTURAL DIGEST, UNESCO, WORLD ARCHITECTURE COMMUNITY AND OTHERS.",
    "AT SPACES ARCHITECTS@KA, ARCHITECTURE IS ULTIMATELY ABOUT PEOPLE THEIR MEMORIES, RITUALS, ASPIRATIONS AND EVERYDAY EXPERIENCES. EACH PROJECT IS CONCEIVED AS A STORY, CAREFULLY SHAPED FROM ITS CONTEXT AND CRAFTED TO BECOME MORE MEANINGFUL WITH TIME. THE RESULT IS ARCHITECTURE THAT IS NOT MERELY SEEN, BUT DEEPLY FELT.",
  ],
};

export const aboutCopy = {
  heroTitle: "STUDIO",
  kicker: "WE DESIGN SPACES, WE CREATE STORIES. WE BUILT EXPERIENCE.",
  intro: [
    "THE STUDIO FOUNDED BY KAPIL AGGARWAL IN 2000 BELIEVES ARCHITECTURE IS NOT ABOUT BUILDING BUT CREATING A SOUL AND EXPERIENCE THAT REMAIN WITH YOU.",
    "AT SPACES ARCHITECTS, EVERY PROJECT BEGINS WITH CURIOSITY A DESIRE TO UNDERSTAND PEOPLE, ITS PLACE AND STORY WAITING TO UNFOLD. WE BELIEVE GREAT ARCHITECTURE EMERGES WHEN IMAGINATION MEETS CONTEXT, WHEN LIGHT, MATERIAL, LANDSCAPE, ART AND STRUCTURE COME TOGETHER WITH PURPOSE.",
    "OUR STUDIO APPROACHES EACH COMMISSION AS AN UNIQUE NARRATIVE RATHER THAN PREDETERMINED STYLE. WE QUESTION THE OBVIOUS, EXPLORE THE UNEXPECTED AND ALLOW IDEAS TO EVOLVE THROUGH SKETCHES, MODELS AND MATERIAL, CONVERSATION AND COLLABORATION. THE RESULT IS ARCHITECTURE THAT IS EXPRESSIVE YET GROUNDED, CONTEMPORARY YET CONNECTED TO ITS CONTEXT.",
    "WE DON'T SEEK TO CREATE A SIGNATURE STYLE. WE SEEK TO GIVE EVERY PLACE ITS OWN IDENTITY.",
  ],
  quote: 'SPACESARCHITECTS@KA "ARCHITECTURE WITH A SENSE OF PLACE, PURPOSE AND SOUL"',
  founder: {
    name: "Ar. Kapil Aggarwal",
    role: "Founder",
    bio: [
      "Ar. Kapil Aggarwal, founder and principal architect of Spaces Architects@ka, is an architect, artist and storyteller whose practice is rooted in the belief that architecture should create an emotional connection between people, place and memory. After graduating from MIT, Manipal, in 1996, he founded the studio in 2000, bringing together his interests in fine art, design, materiality and architecture.",
      "His work spans residences, institutions, workplaces, hospitality, interiors, landscapes and heritage, with a distinctive approach that allows every project to develop its own identity rather than follow a predetermined style. His contribution to the architectural and cultural fabric of Old Delhi and Shahjahanabad, particularly through the restoration of Haveli Dharampura, reflects his belief that heritage should not merely be preserved but brought back to life.",
      "The project received the UNESCO Asia-Pacific Heritage Award for Cultural Heritage Conservation and brought renewed attention to the living traditions of the Walled City. His work has also received international recognition, including coverage by BBC World for Adharshila Vatika and Stylist Magazine, which featured his own studio among the world's coolest offices.",
      "With 50+ national and international awards, seven World Architecture Festival finalist recognitions and 300+ media features, Kapil continues to explore architecture as a medium for creating meaningful experiences. He is also the author of the national bestseller Timeless Houses.",
      "For him, architecture is ultimately about creating spaces with a sense of place, purpose, memory and soul.",
    ],
  },
  team: [
    { name: "Kapil Aggarwal", role: "Founder & Principal Architect" },
    { name: "Studio Team", role: "Architecture & Interiors" },
    { name: "Studio Team", role: "Design & Visualisation" },
    { name: "Studio Team", role: "Project Management" },
  ],
};
