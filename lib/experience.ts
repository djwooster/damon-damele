export interface ExperienceItem {
  company: string;
  title: string;
  years: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Inbound Health",
    title: "Senior Director of Product Management",
    years: "Dec 2022 – Jan 2026",
    description:
      "Led product across three surfaces for a greenfield hospital-at-home care coordination platform. Defined strategy, owned the roadmap, and drove cross-functional execution from market validation through MVP — achieving a 40% reduction in liaison triage time and sustained patient satisfaction scores of 4/5 or better.",
  },
  {
    company: "Memorial Sloan Kettering Cancer Center",
    title: "Associate Director, Product – Digital Enabled Care",
    years: "2021 – 2022",
    description:
      "Led digital product strategy for MSK's Digital Enabled Care division. Joined as Senior Manager and was promoted to Associate Director within seven months, overseeing product initiatives across oncology care technology for one of the world's leading cancer centers.",
  },
  {
    company: "ObvioHealth",
    title: "Director of Product Management",
    years: "2020 – 2021",
    description:
      "Directed product management for a digital health platform specializing in decentralized clinical trials and remote patient engagement — helping pharma and biotech teams run studies without requiring patients to travel to a site.",
  },
  {
    company: "Mount Sinai Health System",
    title: "Senior Product Owner",
    years: "2018 – 2020",
    description:
      "Owned product development for digital health initiatives across one of New York City's largest and most respected health systems, working at the intersection of clinical operations and consumer-facing technology.",
  },
  {
    company: "John Muir Health",
    title: "Sr. Product Manager",
    years: "2012 – 2018",
    description:
      "Spent nearly six years building and shipping healthcare products for one of the Bay Area's leading regional health systems — developing a foundation in enterprise healthcare technology, clinical workflows, and stakeholder-driven product development.",
  },
];
