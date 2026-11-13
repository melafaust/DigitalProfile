export interface ExperienceEntry {
  role: string;
  subtitle: string;
  company: string;
  period: string;
  points: string[];
  /** Show only the first N bullets on the one-page resume (the site always shows all). */
  resumePoints?: number;
  /** Keep the entry in the data but leave it off the site, resume and chatbot. */
  hidden?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    role: "Mid Level Software Engineer",
    subtitle: "Packaged Application Development Analyst",
    company: "Accenture",
    period: "June 2024 - Present (Rendering)",
    points: [
      "Builds Power BI reporting for Accenture Global IT leadership from scratch and maintains it long-term, owning the semantic model, DAX measures and Power Query transformations; Microsoft Certified Power BI Data Analyst Associate (PL-300)",
      "Dashboards track GitHub Copilot adoption, Azure DevOps migration progress, SOX permission audits across release pipelines and repositories, and FY26 strategic priority KPIs",
      "Builds and enhances end-to-end ETL/ELT pipelines in Azure Data Factory, keeping enterprise data reliable, current and analytics-ready",
      "Built automation workflows that cut the team's manual workload by 92%",
      "Full-stack development on an Azure-powered agile team; recognized as SME for mentoring and onboarding teammates",
    ],
  },
  {
    role: "Full-Stack Developer & Systems Lead",
    subtitle: "Contract",
    company: "Residential Construction Supplier (US)",
    period: "Aug 2026 - Present",
    resumePoints: 3,
    points: [
      "Designed, built and deployed six internal web apps (Builder CRM, Selection & Pricing, Estimating, Meetings & Scorecards, Project Tracker, Launchpad) that moved the company off spreadsheets, SharePoint lists and a paid meeting tool, all running on its ERP data",
      "Selection & Pricing Platform replaced a multi-sheet Excel pricing workbook and matches its results exactly, with e-signed quotes and a nightly sync of the ERP product catalog into cost-based price tiers",
      "Microsoft Entra ID single sign-on across every app with group-based access checked on the server, self-hosted on an internal Linux server with Docker, Caddy, automated certificates, backups and scripted releases",
      "Builder CRM tracks contact frequency, the sales pipeline and ERP sales figures per builder account, with per-manager account access, a full audit trail and phone-system call links",
      "Estimating Platform replaced a SharePoint process with request intake, per-estimator queues, assignment notifications and sales-outcome tracking, including migrating historical requests and attachments",
      "Read-only ERP service accounts, nightly sync jobs and documentation of the ERP schema; automated tests and CI on every app, mobile-friendly pages that meet WCAG 2.2 AA",
    ],
  },
  {
    role: "Automation & AI Agents Lead",
    subtitle: "Freelance | Consultant",
    company: "EDUK8U",
    period: "May 2026 - November 2026",
    points: [
      "Acted as Tech Team Lead and project manager for the tech department, supervising fellow developers and interns, coordinating deliverables, and keeping projects on track",
      "Supported EDUK8U's digital transformation across its group of platforms including EDUK8U, Workready Asia, ICQA, and Attend Care",
      "Led AI automation and workflow optimization, designing and implementing AI agents and tools to eliminate manual processes and improve operational efficiency",
      "Reported and collaborated directly with the CEO and the Director on AI roadmap initiatives, including AI-powered learning simulators and case study platforms",
    ],
  },
  {
    role: "Software Engineer Consultant",
    hidden: true,
    subtitle: "Freelance | Consultant",
    company: "International College of Queensland Australia (ICQA)",
    period: "May 2026 - Present",
    points: [
      "Handles LMS platform development on eSkilled Moodle, building, enhancing and maintaining courses and features for learners and trainers",
      "Enhances and maintains ICQA's websites",
      "Built the ICQA Resource Engine, an AI document generator for training and assessment materials with in-code compliance checks",
    ],
  },
  {
    role: "Assistant Engineer",
    subtitle: "",
    company: "Yokogawa Philippines, Inc.",
    period: "November 2023 - April 2024",
    resumePoints: 2,
    points: [
      "Gained hands-on expertise in Distributed Control Systems (DCS) and industrial automation, bridging engineering principles with real-world operational demands",
      "Delivered reliable after-sales support and on-site troubleshooting for systems where downtime isn't an option",
      "Brought order to complex compliance workflows, ensuring Factory Acceptance Tests and system documentation met strict industry standards",
      "Owned installations end-to-end, from initial hardware setup through configuration, testing, and handover, with minimal oversight",
    ],
  },
];

/** What the site, resume and chatbot show. */
export const visibleExperiences = experiences.filter((e) => !e.hidden);
