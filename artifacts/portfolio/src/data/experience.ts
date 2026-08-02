export interface ExperienceEntry {
  role: string;
  subtitle: string;
  company: string;
  period: string;
  points: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Systems, Web & AI Enablement Consultant",
    subtitle: "Freelance · Tech Team Lead",
    company: "EDUK8U",
    period: "May 2026 - Present",
    points: [
      "Acts as Tech Team Lead and project manager for the tech department, supervising fellow developers and interns, coordinating deliverables, and ensuring projects move forward on track",
      "Supporting EDUK8U's digital transformation across its group of platforms including EDUK8U, Workready Asia, ICQA, and Attend Care",
      "Leading AI automation and workflow optimization, designing and implementing AI agents and tools to eliminate manual processes and improve operational efficiency",
      "Enhancing and maintaining the organization's Moodle LMS to improve the student and faculty digital experience",
      "Reporting and collaborating directly with the CEO and the Director on AI roadmap initiatives, including AI-powered learning simulators and case study platforms",
    ],
  },
  {
    role: "Mid Level Software Engineer",
    subtitle: "Packaged Application Development Analyst",
    company: "Accenture",
    period: "June 2024 - Present",
    points: [
      "Drives full-stack development on an Azure-powered agile team, consistently shipping solutions that make a real difference for enterprise clients across multiple regions",
      "Independently designed and deployed Power BI dashboards now used by international leadership to steer key business decisions, turning raw data into clarity",
      "Identified inefficiencies others overlooked and built automation workflows that cut manual workload by 92%, giving the team back time that actually matters",
      "Earned SME recognition not just for technical depth, but for a collaborative approach that keeps teammates unblocked, upskilled, and moving forward",
    ],
  },
  {
    role: "Assistant Engineer",
    subtitle: "",
    company: "Yokogawa Philippines, Inc.",
    period: "November 2023 - April 2024",
    points: [
      "Gained hands-on expertise in Distributed Control Systems (DCS) and industrial automation, bridging engineering principles with real-world operational demands",
      "Delivered reliable after-sales support and on-site troubleshooting for systems where downtime isn't an option",
      "Brought order to complex compliance workflows, ensuring Factory Acceptance Tests and system documentation met strict industry standards",
      "Owned installations end-to-end, from initial hardware setup through configuration, testing, and handover, with minimal oversight",
    ],
  },
];
