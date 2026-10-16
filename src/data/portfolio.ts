export interface Project {
  slug: string;
  title: string;
  year?: string;
  subtitle: string;
  summary: string;
  fullDescription: string[];
  role: string[];
  deliverables: string[];
  techOrTools: string[];
  externalUrl?: string;
  image: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  readTime: string;
  excerpt: string;
  linkText: string;
  image: string;
  externalUrl?: string;
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  badge?: string;
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  details: string[];
}

export interface CertificationCategory {
  category: string;
  items: string[];
}

export const HERO_DATA = {
  name: "Henrik Nyhus",
  roleHeadline: "Digital Designer",
  statement: "I design, write, prototype, test and create solutions for people and businesses.",
  location: "Oslo, Norway",
  currentRole: "Senior Product Designer at VG / Schibsted Media",
  bio: "Digital Designer based in Oslo. With extensive experience across leading brands, I gather insights, facilitate workshops, prototype solutions, and engineer production-ready websites.",
  avatar: "/images/avatar/henrik.png",
  status: "Available for selected advisory, workshops & design projects",
};

export const CLIENT_LOGOS = [
  { name: "Equinor", src: "/images/logos/carousel/client-logo-01.svg" },
  { name: "Client 02", src: "/images/logos/carousel/client-logo-02.svg" },
  { name: "Finn.no", src: "/images/logos/carousel/client-logo-03.svg" },
  { name: "If Forsikring", src: "/images/logos/carousel/client-logo-04.svg" },
  { name: "Yara", src: "/images/logos/carousel/client-logo-05.svg" },
  { name: "Forbrukerrådet", src: "/images/logos/carousel/client-logo-06.svg" },
  { name: "London Pub", src: "/images/logos/carousel/client-logo-07.svg" },
  { name: "Veidekke", src: "/images/logos/carousel/client-logo-08.svg" },
  { name: "Client 09", src: "/images/logos/carousel/client-logo-09.svg" },
  { name: "Client 10", src: "/images/logos/carousel/client-logo-10.svg" },
  { name: "Sentralregisteret", src: "/images/logos/carousel/client-logo-11.svg" },
  { name: "Client 12", src: "/images/logos/carousel/client-logo-12.svg" },
  { name: "Statens vegvesen", src: "/images/logos/carousel/client-logo-13.svg" },
  { name: "Client 14", src: "/images/logos/carousel/client-logo-14.svg" },
  { name: "Client 15", src: "/images/logos/carousel/client-logo-15.svg" },
  { name: "Thales", src: "/images/logos/carousel/client-logo-16.svg" },
];

export const SERVICES: Service[] = [
  {
    id: "insights",
    number: "01",
    title: "Insights & Strategy",
    description: "Before designing, we need to understand your core challenge. This is crucial in order to build something that solves real problems. I gather insights, analyze, synthesize and visually map out opportunities so your team knows precisely where to focus.",
    deliverables: ["User interviews & surveys", "Journey mapping & synthesis", "Opportunity identification", "Competitive audits"],
    image: "/images/services/insights.png",
  },
  {
    id: "product-development",
    number: "02",
    title: "Product Development",
    description: "The boundary between design and code is gone. I take projects from exploratory interface design to fully engineered and responsive solutions.",
    deliverables: [
      "High-fidelity UI/UX design systems",
      "Production website & web application builds",
      "Figma, Webflow, Framer & Next.js",
      "Cross-device responsive execution & SEO",
    ],
    image: "/images/services/design.png",
  },
  {
    id: "workshops",
    number: "03",
    title: "Workshop Facilitation",
    description: "I run structured workshops to align multidisciplinary teams, frame challenges, and rapidly generate high-impact ideas. My sessions are intensive, outcome-focused, highly collaborative—and most importantly, fun.",
    deliverables: ["Design Sprints & Ideation", "Strategy alignment", "Problem framing sessions", "Interactive Miro frameworks"],
    image: "/images/services/workshops.png",
  },
  {
    id: "testing",
    number: "04",
    title: "User Testing & Validation",
    description: "I validate solutions with actual end-users for rapid, unbiased feedback loops. Insights are instantly synthesized into design refinements, protecting your team against costly assumptions.",
    deliverables: ["Usability testing protocols", "Moderated & unmoderated sessions", "Synthesized feedback reports", "Rapid iteration cycles"],
    image: "/images/services/testing.png",
  },
  {
    id: "courses",
    number: "05",
    title: "Courses & Training",
    description: "I offer courses across many different topics such as workshop facilitation, rapid prototyping, insights gathering, user testing, and product design. Combining practical theory with hands-on exercises so teams learn by doing.",
    deliverables: ["Custom team training", "Facilitation coaching", "Figma & Prototyping masterclasses", "Hands-on playbooks"],
    image: "/images/services/courses.png",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "factlines",
    title: "Factlines.com",
    year: "2024",
    subtitle: "Webflow Development & Continuous Digital Growth",
    summary: "Factlines is a Norwegian technology company helping businesses manage sustainability compliance and supply chains through digital tools. Brought on to continuously evolve their company website, improve conversion, and scale their marketing campaigns.",
    fullDescription: [
      "Factlines is a Norwegian technology company helping businesses manage sustainability compliance and suppliers through digital tools. They brought me on to support the continuous development of their company website in Webflow where they display and communicate their products as well as generate qualified enterprise leads.",
      "My work focused on streamlining and simplifying their existing website structure, improving page speed and maintainability, and designing and implementing new interactive feature sections to support ongoing campaigns and product updates."
    ],
    role: ["Webflow Development", "Information Architecture", "Design System Extensions", "Performance Optimization"],
    deliverables: ["Streamlined CMS schema", "Responsive landing pages", "Lead-generation conversion funnels", "Interactive product showcases"],
    techOrTools: ["Webflow", "Custom JavaScript", "Figma", "SEO Tuning"],
    externalUrl: "https://factlines.com",
    image: "/images/projects/factlines.png",
    featured: true,
  },
  {
    slug: "protector-insurance",
    title: "Protector Insurance",
    year: "2024",
    subtitle: "Brand Identity Refresh & Presentation Architecture",
    summary: "Protector Insurance is a leading Nordic insurance company. Engaged to refresh their visual identity and create modern, flexible presentation systems across internal and external international touchpoints.",
    fullDescription: [
      "Protector Insurance is a leading Nordic insurance company providing insurance products to medium and large size companies across Scandinavia and the UK.",
      "They approached me to refresh their visual identity and create a modern, flexible presentation template system for internal leadership and external client delivery.",
      "The updated identity builds with respect upon their established brand heritage while infusing clarity, typographic discipline, and consistency. The project is fully delivered and in daily active use across markets."
    ],
    role: ["Brand Identity Refresh", "Template Architecture", "Typography & Layout System"],
    deliverables: ["Brand identity guidelines", "Modular corporate presentation system", "Iconography & asset kit"],
    techOrTools: ["Figma", "Visual Design", "Brand Guidelines"],
    image: "/images/projects/protector.png",
    featured: true,
  },
  {
    slug: "eft-therapy",
    title: "Norwegian Center for EFT",
    year: "2024",
    subtitle: "Brand Identity & Modern Digital Platform in Framer",
    summary: "Professional association for therapists working in Emotion-Focused Therapy. Rebuilt their visual identity and designed and developed their full website with hands-on training for self-sufficient maintenance.",
    fullDescription: [
      "The Norwegian Center for Emotion-Focused Therapy is a professional association representing accredited therapists working in emotion-focused psychological therapy.",
      "They approached me to revitalize their visual presence and craft an empathetic, accessible digital home. I designed the complete experience and developed the website in Framer.",
      "To ensure long-term independence, I also conducted hands-on training sessions with their internal team so they can publish updates, events, and therapist listings effortlessly."
    ],
    role: ["Brand Design", "UX/UI Design", "Framer Engineering", "Client Training"],
    deliverables: ["Complete responsive website", "Therapist directory & event system", "Brand visual styleguide", "Team onboarding session"],
    techOrTools: ["Framer", "Responsive Design", "Content Architecture"],
    image: "/images/projects/eft.png",
    featured: true,
  },
  {
    slug: "london-pub",
    title: "London Pub & Club",
    year: "2024",
    subtitle: "Iconic Cultural Venue Rebranding & Responsive Web",
    summary: "Established in 1979 as Norway's most iconic LGBTQ+ venue. Modernized their brand identity, created the identity for 'London Club', and designed a high-energy responsive website.",
    fullDescription: [
      "Established in 1979, London Pub has earned its legendary reputation as the most popular LGBTQ+ venue in Norway.",
      "They approached me to refresh their brand identity and engineer a new responsive website that reflects their rich heritage and electric nightlife atmosphere.",
      "Additionally, I created the bespoke logo and sub-brand concept for 'London Club'. The website is live, with expanded photo and video social assets continuously rolling out."
    ],
    role: ["Brand Refresh", "Sub-brand Identity", "Web Design & Development"],
    deliverables: ["Brand system & typography", "London Club logo", "Responsive website", "Social media templates"],
    techOrTools: ["Figma", "Webflow", "Motion Graphics"],
    image: "/images/projects/londonpub.png",
    featured: true,
  },
  {
    slug: "sentralregisteret",
    title: "Sentralregisteret",
    year: "2023",
    subtitle: "Digitizing Construction Competence Certification",
    summary: "Norway's leading registry for construction expertise. Transformed manual processes and physical plastic cards into an intuitive, secure digital certification platform.",
    fullDescription: [
      "Sentralregisteret is Norway's leading register for machine operators and expertise certification across the construction sector.",
      "Historically reliant on physical plastic cards and manual paper verification, the organization faced friction with operator identification, immediate status validation, and credential credibility on job sites.",
      "I was brought in to conduct field research, facilitate design sprints with key industry stakeholders, prototype digital certificate wallets, and rigorously test user flows with site managers and operators."
    ],
    role: ["Design Sprint Facilitation", "UX Insights & Research", "Interactive Prototyping", "User Testing"],
    deliverables: ["Discovery insights synthesis", "Design sprint outcomes", "Validated click-through prototypes", "Specification for engineering"],
    techOrTools: ["Figma", "Miro", "Design Sprints", "Usability Testing"],
    image: "/images/projects/sentralregisteret.png",
    featured: true,
  },
  {
    slug: "thales",
    title: "Thales Group",
    year: "2023",
    subtitle: "Interactive Product Showcase & Capabilities Portal",
    summary: "French global defense and technology powerhouse. Created an engaging interactive showcase to communicate complex aerospace and security solutions seamlessly.",
    fullDescription: [
      "Thales Group is a global leader in aerospace, defense, transport, and digital security solutions operating in dozens of countries worldwide.",
      "The challenge was finding an innovative, approachable way to showcase multi-faceted mission-critical systems and communicate complex technical capabilities clearly to procurement officers and technical decision makers.",
      "Together with their teams, we designed an engaging interactive digital showcase complete with video integration, structured specifications, and intuitive exploration modes."
    ],
    role: ["UX/UI Design", "Interactive Storytelling", "Prototyping"],
    deliverables: ["Interactive product exploration portal", "Video & multimedia integration", "Component layout kit"],
    techOrTools: ["Figma", "Interactive Prototyping", "Information Design"],
    image: "/images/projects/thales.png",
    featured: true,
  },
  {
    slug: "berlin-seminar",
    title: "Berlin Seminar",
    year: "2023",
    subtitle: "Conference Identity & Streamlined Webflow Experience",
    summary: "Prestigious political and social science seminar. Co-created the UX and developed the Webflow platform for program scheduling, speaker showcases, and ticket registration.",
    fullDescription: [
      "The Berlin Seminar brings together politicians, leading journalists, and social scientists for in-depth deliberations on European politics and civil society.",
      "The seminar required a fresh web presence to introduce their updated visual identity, outline detailed schedules, highlight international speakers, and guide attendees through an effortless registration workflow.",
      "I co-created the user experience with their visual designer and engineered the entire website production in Webflow."
    ],
    role: ["UX Design", "Webflow Development", "Registration Flow Architecture"],
    deliverables: ["Responsive Webflow website", "Speaker & schedule directory", "Conversion-optimized registration"],
    techOrTools: ["Webflow", "Figma", "CMS Architecture"],
    image: "/images/projects/berlinseminar.png",
    featured: true,
  },
  {
    slug: "trykkeriet-scene",
    title: "Trykkeriet Scene",
    year: "2023",
    subtitle: "Cultural Venue Platform, Event Schedule & Inquiries",
    summary: "Vibrant theater and event stage in Trondheim. Designed and built the digital presence to showcase comedy, live performance, club nights, and private event venue bookings.",
    fullDescription: [
      "Trykkeriet Scene is a multidisciplinary cultural venue in Trondheim featuring everything from improv theater and live music to late-night clubbing and private event bookings.",
      "They reached out to create a vibrant digital home that reflects the energy of the space, clearly communicates their upcoming programming, and provides a smooth booking inquiry system for weddings and corporate gatherings.",
      "I led end-to-end UX/UI design and developed the site to make ongoing event management fast and frictionless for their staff."
    ],
    role: ["Full Design & Development", "Information Architecture", "Booking Inquiries"],
    deliverables: ["Full responsive website", "Event listing showcase", "Venue hire inquiry funnel"],
    techOrTools: ["Webflow", "Figma", "CMS Integration"],
    image: "/images/projects/trykkeriet.png",
    featured: true,
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "facilitate-better-online-hybrid-meetings",
    title: "How to Facilitate Better Online and Hybrid Meetings",
    readTime: "5 min read",
    excerpt: "In this article I explore effective strategies for facilitating engaging and productive online sessions, offering tips for enhancing communication, psychological safety, and participation.",
    linkText: "Read article",
    image: "/images/articles/meetings.png",
  },
  {
    slug: "simple-guide-to-journaling",
    title: "A Simple Guide to Journaling",
    readTime: "4 min read",
    excerpt: "Explore the power of journaling to clarify thinking, improve day-to-day focus, reduce cognitive load, and foster long-term personal and professional well-being.",
    linkText: "Read article",
    image: "/images/articles/journaling.png",
  },
  {
    slug: "energizers-tailored-for-virtual-sessions",
    title: "Energizers Tailored for Virtual Sessions",
    readTime: "6 min read",
    excerpt: "Discover high-engagement energizers specifically tailored for virtual and hybrid workshops—keeping participants active, alert, and deeply connected through a screen.",
    linkText: "Read article",
    image: "/images/articles/energizers.png",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "VG / Schibsted Media",
    period: "2024 — Present",
    role: "Senior Product Designer",
    description: "Driving product and design initiatives across VG, VGTV, and Schibsted's media brands. Focused on evolving video journalism and modern digital formats into an accessible, high-engagement, and seamlessly integrated component of the modern news experience.",
  },
  {
    company: "Freelance / Design by Henrik",
    period: "2020 — Present",
    role: "Digital Designer & Consultant",
    description: "Partnering directly with founders, enterprises, and cultural institutions to deliver brand identity, UX research, interactive prototypes, and production websites.",
  },
  {
    company: "SATS",
    period: "2020 — Present",
    role: "Fitness Instructor",
    description: "Certified group fitness instructor delivering high-energy cardio, strength, and mobility classes. Fostering community, motivation, and disciplined movement.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "City University of New York — Zicklin School of Business",
    period: "2013 — 2016",
    degree: "Bachelor of Business Administration (BBA)",
    details: ["Major: Information Technology", "Minor: Psychology"],
  },
];

export const CERTIFICATIONS: CertificationCategory[] = [
  {
    category: "Design & Technology",
    items: [
      "Webflow Expert (Layout 1+2 & Webflow CMS)",
      "Professional SCRUM Master (PSM I)",
      "Salesforce Certified Administrator",
      "Salesforce Certified App Builder",
      "Salesforce Sales Cloud Consultant",
    ],
  },
  {
    category: "Health & Fitness",
    items: [
      "SATS Certified Cardio Training",
      "SATS Certified Strength Training",
      "SAFE Education Personal Training",
    ],
  },
];

export const CONTACT_INFO = {
  email: "henrik.b.nyhus@gmail.com",
  phone: "+47 47 85 70 13",
  phoneRaw: "+4747857013",
  location: "Oslo, Norway",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/henrik-nyhus" },
    { label: "Instagram", href: "https://www.instagram.com/designbyhenrik" },
    { label: "Miroverse", href: "https://miro.com/miroverse/profile/henrik/?backToUrl=https%3A%2F%2Fmiro.com%2Ftemplates%2F?social=copy-link" },
  ],
};
