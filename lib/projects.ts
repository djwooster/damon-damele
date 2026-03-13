export interface ActIteration {
  title: string;
  description: string;
  image?: string;
  imageLabel?: string;
}

export interface ProjectAct {
  number: string;
  name: string;
  surface: string;
  outcome: string;
  decision: string;
  researchInsights?: string[];
  iterations?: ActIteration[];
  solutionText?: string;
  images?: string[];
}

export interface ProjectContext {
  role: string;
  timeline: string;
  team: string;
  scope: string;
}

export interface BusinessGoal {
  number: string;
  title: string;
  description: string;
}

export interface ProcessPhase {
  number: string;
  name: string;
  question: string;
  methods: string[];
}

export interface ResearchQuote {
  quote: string;
  author: string;
  insights: Array<{ title: string; description: string }>;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  client: string;
  tags: string[];
  tldr?: string;
  overview?: string;
  context?: ProjectContext;
  problem?: string;
  businessGoals?: BusinessGoal[];
  processPhases?: ProcessPhase[];
  researchQuote?: ResearchQuote;
  acts?: ProjectAct[];
  systemsNote?: string;
  outcome?: string;
  thumbnail?: string;
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: "inbound-health",
    title: "Hospital at Home",
    year: "2022–2026",
    client: "Inbound Health",
    tags: [
      "Product Strategy",
      "0→1 Product",
      "Cross-functional Leadership",
      "Roadmap Planning",
      "User Discovery",
      "Healthcare Tech",
    ],
    tldr: "At Inbound Health I led product for a greenfield care coordination platform serving three distinct user groups: care liaisons, biometric nurses, and patients. I defined the product strategy, managed the roadmap across three surfaces, and drove cross-functional execution from discovery through ship — resulting in a 40% reduction in liaison triage time and sustained patient satisfaction scores of 4/5 or better throughout the care episode.",
    overview:
      "Director of Product on a greenfield care coordination platform. Three user groups, three product surfaces — a Salesforce liaison app, a Salesforce nurse dashboard, and a custom iOS patient app — built from zero with no prior product framework, roadmap, or patterns to build from.",
    context: {
      role: "Senior Director of Product Management",
      timeline: "Dec 2022 – Jan 2026",
      team: "2 PMs · 1 eng lead · 3 frontend engineers · 1 product designer",
      scope: "All three product surfaces · Product strategy · Discovery & roadmap",
    },
    problem:
      "Three user groups with completely different needs, a greenfield codebase, and no prior product framework. Care liaisons had no way to prioritize hundreds of ineligible patients. Biometric nurses were rebuilding documentation from scratch every shift. Patients with limited tech literacy were being asked to self-manage clinical data. No roadmap, no established process, no playbook.",
    businessGoals: [
      {
        number: "01",
        title: "Increase Hospital Capacity",
        description:
          "Reduce inpatient stays by 10% by enabling eligible patients to continue recovery at home, freeing up hospital beds for higher-acuity cases.",
      },
      {
        number: "02",
        title: "Improve Operational Efficiency",
        description:
          "Streamline remote patient monitoring for nurses and care teams, reducing time spent on administrative workload and manual check-ins by 30%.",
      },
      {
        number: "03",
        title: "Enhance Patient Outcomes and Satisfaction",
        description:
          "Support faster recovery and maintain patient satisfaction scores of 4 out of 5 or better through continuous biometric tracking and personalized care in the comfort of home.",
      },
    ],
    processPhases: [
      {
        number: "01",
        name: "Early Market Validation",
        question: "Why does this product need to exist?",
        methods: [
          "Stakeholder interviews",
          "User interviews",
          "Competitor analysis",
        ],
      },
      {
        number: "02",
        name: "Proof of Concept",
        question: "Is this a problem we can actually solve?",
        methods: ["Prototype testing", "Concept validation", "Feasibility review"],
      },
      {
        number: "03",
        name: "Build & Iterate",
        question: "How should we actually build the solution?",
        methods: ["Roadmap sequencing", "Sprint planning", "Usability testing"],
      },
      {
        number: "04",
        name: "Minimum Viable Product",
        question: "Is our solution something people actually want?",
        methods: ["User interviews", "Surveys", "In-app feedback"],
      },
    ],
    researchQuote: {
      quote:
        "I'm not very tech-savvy, so at first I was nervous about using the iPad — but once I saw how easy it was to check my readings and send them to the nurse, it actually made me feel more in control of my recovery.",
      author: "Gil, former patient",
      insights: [
        {
          title: "Patients need reassurance, not features",
          description:
            "Anxiety about new technology was the primary adoption barrier — not clinical hesitation. The product decision was to build trust first, functionality second.",
        },
        {
          title: "Enrollment drop-off was a positioning problem",
          description:
            "Patients declining to enroll weren't resisting the care model — they didn't understand the value. That reframing changed the entire onboarding strategy.",
        },
      ],
    },
    acts: [
      {
        number: "01",
        name: "Liaison",
        surface: "Salesforce App · Care Liaison",
        outcome: "40% reduction in triage time.",
        decision:
          "Rather than building a filtering layer on top of the existing workflow, I pushed for upstream AI/ML pre-filtering informed by direct EMR field validation. That call compressed triage time by 40% and established the data model the rest of the platform was built on. The product decision wasn't the interface — it was where in the funnel to intervene.",
        researchInsights: [
          "EMR field validation revealed which patient signals actually predicted program fit — directly informing the AI/ML filtering inputs and the triage prioritization logic.",
          "Liaisons were spending the majority of their time on patients who would never qualify — the highest-ROI product bet was upstream filtering, not interface polish.",
          "Enrollment drop-off traced to distrust and unclear value, not clinical hesitation — which reframed the iOS onboarding problem entirely.",
        ],
        images: ["/research-1.png"],
      },
      {
        number: "02",
        name: "Biometric Nurse",
        surface: "Salesforce Dashboard · Biometric Nurse",
        outcome: "Less time on paperwork. More time on patients.",
        decision:
          "Building within Salesforce's component system meant tight constraints on what was possible. I aligned the team on an AI-generated shift summary as the highest-ROI feature — a single read-before-you-enter view that surfaced the right clinical context at the start of each shift, replacing the multi-record piecing-together that nurses were doing manually.",
        images: ["/ai-highlighted.png"],
      },
      {
        number: "03",
        name: "Patient",
        surface: "Custom iOS App · Patient",
        outcome:
          "Patient satisfaction held at 4/5 or better through the full care episode.",
        decision:
          "Eligible patients were declining to enroll — not from clinical hesitation, but because they didn't trust the product or understand its value. I repositioned the onboarding strategy around that trust gap, addressing the specific barriers causing drop-off before a single vital was ever submitted.",
        iterations: [
          {
            title: "Navigation",
            description:
              "An early hypothesis favored bottom navigation for screen real estate. Testing showed 3 of 4 users failed to navigate correctly — a signal that the navigation model didn't match patient expectations. The roadmap call was to pivot to a persistent left rail before investing further in the bottom-nav pattern.",
            image: "/nav-bottom-wireframe-1.png",
            imageLabel: "Bottom Nav — Tested",
          },
          {
            title: "Care Episode Overview",
            description:
              "One concept proposed an all-in-one home screen to reduce navigation entirely. Patients preferred simplicity and predictability — a clear home, not a dashboard. That finding shaped the final information architecture.",
            image: "/episode-overview.png",
            imageLabel: "All-in-one Home — Tested",
          },
        ],
        solutionText:
          "Testing made the path clear: patients needed familiar navigation, focused daily tasks, and a persistent sense of their care team's presence. The final product replaced the bottom nav with a persistent left rail, stripped the home screen to only what mattered that day, and put the nurse connection one tap away at all times.",
        images: [
          "/inbound-project-mockup-new.png",
          "/calendar-new.png",
          "/vitals-details-new2.png",
          "/video-visit-new.png",
        ],
      },
    ],
    systemsNote:
      "Maintaining product coherence across three surfaces — two Salesforce apps with distinct UI constraints and a fully custom iOS app — required explicit decisions about where to standardize and where to let each surface diverge. That tension shaped how we structured the roadmap and how the team collaborated across tracks.",
    outcome:
      "Forecasted to reduce unnecessary inpatient stays by 50 patients per month per hospital, saving $900K–$1.8M annually. Patient satisfaction held at 4/5 or better throughout the care episode. Cross-functional handoff quality improved measurably after the platform shipped — sprint reviews shifted from design debates to acceptance criteria check-ins.",
    thumbnail: "/ipad-image-1.jpg",
    heroImage: "/inbound-project-mockup-new.png",
  },
];
