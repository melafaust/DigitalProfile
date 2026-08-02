import { motion } from "framer-motion";
import { Trophy, Code2, Cpu, MessageSquare, Database, RefreshCw, Bell, BarChart2, LayoutDashboard, Layers, Bot, FileText, Kanban, Zap } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";

const allProjects = [
  {
    title: "ICQA Resource Generator",
    subtitle: "AI-Powered Curriculum Authoring Tool",
    org: "EDUK8U",
    date: "Jun 2026",
    description: "Built an AI-assisted web application that generates complete, compliance-ready training and assessment resources for VET qualifications, turning a multi-day manual drafting process into a single AI-assisted generation run.",
    tech: ["React", "Vite", "Express", "Claude API", "docx", "GitHub Actions", "Vercel"],
    points: [
      "Generates full resource packages per unit (Learner Guides, Workbooks, Assessment Mapping, Observation Checklists, and more) with one click, covering 31 units across two qualifications",
      "Maps every generated task back to official Performance Criteria and Evidence requirements, surfacing compliance gaps before human review",
      "Automated monthly pipeline that checks training.gov.au for unit updates and flags outdated content with a full audit log",
    ],
    icon: "FileText",
    color: "blue",
  },
  {
    title: "Tech Project Tracker",
    subtitle: "Custom Project Management Platform",
    org: "EDUK8U",
    date: "Jun 2026",
    description: "Designed and built a monday.com-style project management platform from scratch for a small tech team, replacing paid SaaS tools like Jira and ClickUp at zero ongoing cost.",
    tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    points: [
      "Full board view with task history, workload dashboards, drag-and-drop project ordering, and real-time collaborative editing",
      "Self-built AES-256 encrypted credentials vault with isolated access policies, replacing the need for a third-party password manager",
      "Optimized with parallelized data fetching and region-matched hosting for low latency",
    ],
    icon: "Kanban",
    color: "green",
  },
  {
    title: "Dev Handover Board Automation",
    subtitle: "Google Apps Script Workflow Automation",
    org: "EDUK8U",
    date: "Jun 2026",
    description: "Built a fully automated pipeline connecting daily staff handover forms to Trello and Google Chat, eliminating manual end-of-shift reporting and follow-up for a remote dev team.",
    tech: ["Google Apps Script", "Trello REST API", "Google Chat Webhooks", "Google Sheets"],
    points: [
      "Auto-creates structured Trello cards from form submissions with smart status labeling based on blockers and open work",
      "Per-person shift scheduling that triggers reminders and missing report escalations tailored to individual staff schedules",
      "Redesigned sprawling fixed-time triggers into a single configurable schedule table, making staffing changes a one-line edit",
    ],
    icon: "Zap",
    color: "orange",
  },
  {
    subtitle: "AI HUB",
    org: "Mela Automations",
    date: "Apr 2026",
    description: "Unified AI-powered desktop suite for automating Azure DevOps and Data Factory workflows via a conversational agent that orchestrates multi-step tasks end-to-end.",
    tech: ["Azure OpenAI (gpt-4o-mini)", "Electron", "Node.js", "CDP", "Teams Webhooks"],
    points: [
      "Agentic AI chat assistant that autonomously invokes the right tools in sequence based on natural language",
      "Function-calling with Azure OpenAI: preview and confirm before execution",
      "24-hour auto-saved session history, model selector, and live run stats",
    ],
    icon: "MessageSquare",
    color: "green",
  },
  {
    title: "Param Collector (ADO Suite)",
    subtitle: "ADF pipeline parameter extraction via Edge CDP",
    org: "Mela Automations",
    date: "Apr 2026",
    description: "Opens a secure Edge browser, injects a custom overlay, and extracts pipeline run parameters from Azure Data Factory using Chrome DevTools Protocol.",
    tech: ["Edge CDP", "Azure Data Factory", "Node.js", "Electron"],
    points: [
      "Supports 14+ ADF pipeline types with overlay UI and bulk/selective collection",
      "Retries failed reads up to 3x, exports as .txt with a debug log panel",
      "No credentials stored, uses live Edge session for authentication",
    ],
    icon: "Database",
    color: "blue",
  },
  {
    title: "Reingestion Tool",
    subtitle: "Bulk API sender with live dashboard and retry logic",
    org: "Mela Automations",
    date: "Apr 2026",
    description: "Sends collected parameters to an API endpoint in parallel with real-time stats, error handling, and Teams notification integration.",
    tech: ["Node.js", "Web Workers", "REST API", "Teams Webhooks"],
    points: [
      "Live dashboard tracking requests, success/error counts, rows sent, and duration",
      "Each failed request retried up to 2x with delay; selective rerun for errors",
      "Posts Teams Adaptive Cards with a one-click Rerun Failed button",
    ],
    icon: "RefreshCw",
    color: "orange",
  },
  {
    title: "Alerts Monitor",
    subtitle: "ADF failure detection and Teams alerting",
    org: "Mela Automations",
    date: "Apr 2026",
    description: "Queries Azure Data Factory for failed pipeline runs, groups and summarizes results, and posts rich Adaptive Cards to Microsoft Teams.",
    tech: ["Azure Data Factory", "Teams Webhooks", "Edge CDP"],
    points: [
      "Natural language triggers for failure checks across any date or range",
      "Teams cards with summary tables, error details, and one-click Rerun/Skip buttons",
      "Secure Edge session authentication, no credentials stored",
    ],
    icon: "Bell",
    color: "red",
  },
  {
    title: "Failure Dashboard",
    subtitle: "Interactive analytics for ADF failure trends",
    org: "Mela Automations",
    date: "Apr 2026",
    description: "In-app analytics panel visualizing ADF failure data across dates with AI-generated trend analysis via Azure OpenAI.",
    tech: ["Azure OpenAI", "Chart.js", "LocalStorage", "Electron"],
    points: [
      "Stacked bar and horizontal charts: failures per date and entity",
      "AI trend analysis and recommendations triggered on every dashboard open",
      "Upsert logic prevents duplicate entries; data persists across sessions",
    ],
    icon: "BarChart2",
    color: "purple",
  },
  {
    title: "AutoRent Data Pipeline",
    subtitle: "End-to-end ETL with Medallion Architecture on Azure",
    org: "Avanade",
    date: "Aug 2024",
    description: "Designed and implemented a full data pipeline using Azure modern data stack, with medallion architecture and SCD2 for clean, historically accurate analytics data.",
    tech: ["Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake"],
    points: [
      "Bronze-silver-gold medallion pipeline for ingestion, transformation, and BI serving",
      "SCD Type 2 tracking for historical changes in customer and rental records",
      "Parameterized ADF pipelines with automated orchestration and error handling",
    ],
    icon: "Database",
    color: "blue",
  },
  {
    title: "Data Transformation and Visualization",
    subtitle: "Lakehouse analytics with Microsoft Fabric",
    org: "Avanade",
    date: "Aug 2024",
    description: "Leveraged Microsoft Fabric to transform and visualize raw datasets end-to-end, surfacing findings through Power BI dashboards connected directly to OneLake.",
    tech: ["Microsoft Fabric", "Lakehouse", "Notebook", "Power BI", "PySpark"],
    points: [
      "Ingested and cleaned datasets into Lakehouse using Fabric Notebooks and PySpark",
      "OneLake-connected Power BI reports for real-time exploration without data duplication",
      "Applied Fabric governance model for data lineage across all layers",
    ],
    icon: "Layers",
    color: "green",
  },
  {
    title: "AI Weather Forecasting Chatbot",
    subtitle: "ML-powered prediction deployed via Azure OpenAI",
    org: "Avanade",
    date: "Aug 2024",
    description: "Trained a weather forecasting model and integrated it into a live Azure OpenAI chatbot, letting users query predictions through natural language on a deployed web app.",
    tech: ["Azure OpenAI", "Azure Databricks", "scikit-learn", "matplotlib", "Azure Blob Storage", "Azure AI Search"],
    points: [
      "Regression model built with scikit-learn; matplotlib used for EDA and visualization",
      "Azure OpenAI chatbot responds to natural language weather queries using the trained model",
      "Deployed as a public web app via Azure OpenAI Chatbot Playground",
    ],
    icon: "Bot",
    color: "purple",
  },
  {
    title: "TagSight",
    subtitle: "Visual Tag-Based People Accounting for Emergency Evacuation",
    org: "Accenture",
    date: "Nov 2025",
    description: "Non-contact visual accounting system using ArUco markers and computer vision for real-time headcount during emergency evacuations.",
    tech: ["Computer Vision", "Raspberry Pi", "Gen AI", "Hardware"],
    points: [
      "Camera + Raspberry Pi device with real-time dashboard and Gen AI integration",
      "Champion: FY26 Accenture Sustainability Hackathon",
    ],
    icon: "Cpu",
    color: "primary",
  },
  {
    title: "Reverse Vending Machine",
    subtitle: "Recycling incentivized by internet connectivity",
    org: "Pangasinan State University",
    date: "Jun 2023",
    description: "Hardware solution that rewards users with internet access for every recycled bottle inserted, promoting sustainable behavior through technology.",
    tech: ["Hardware", "Networking", "IoT"],
    points: [
      "Grants internet connectivity per bottle inserted",
      "Best in Thesis award, PSU 2023",
    ],
    icon: "Code2",
    color: "secondary",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  Kanban: <Kanban className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
};

const colorMap: Record<string, { border: string; bg: string; icon: string; text: string; bullet: string }> = {
  green:     { border: "hover:border-green-400/50",    bg: "bg-green-400",    icon: "bg-green-400/10 text-green-400 border-green-400/20",     text: "text-green-400",    bullet: "text-green-400/70"    },
  blue:      { border: "hover:border-blue-400/50",     bg: "bg-blue-400",     icon: "bg-blue-400/10 text-blue-400 border-blue-400/20",         text: "text-blue-400",     bullet: "text-blue-400/70"     },
  orange:    { border: "hover:border-orange-400/50",   bg: "bg-orange-400",   icon: "bg-orange-400/10 text-orange-400 border-orange-400/20",   text: "text-orange-400",   bullet: "text-orange-400/70"   },
  red:       { border: "hover:border-red-400/50",      bg: "bg-red-400",      icon: "bg-red-400/10 text-red-400 border-red-400/20",             text: "text-red-400",      bullet: "text-red-400/70"      },
  purple:    { border: "hover:border-purple-400/50",   bg: "bg-purple-400",   icon: "bg-purple-400/10 text-purple-400 border-purple-400/20",   text: "text-purple-400",   bullet: "text-purple-400/70"   },
  primary:   { border: "hover:border-primary/50",      bg: "bg-primary",      icon: "bg-primary/10 text-primary border-primary/20",             text: "text-primary",      bullet: "text-primary/70"      },
  secondary: { border: "hover:border-secondary/50",    bg: "bg-secondary",    icon: "bg-secondary/10 text-secondary border-secondary/20",       text: "text-secondary",    bullet: "text-secondary/70"    },
};

function ProjectCard({ project }: { project: typeof allProjects[number] }) {
  const c = colorMap[project.color] ?? colorMap["primary"];
  return (
    <AnimCard className={`group relative p-5 rounded-lg bg-gradient-to-br from-card/60 via-card/40 to-transparent border border-white/5 overflow-hidden transition-all duration-500 hover:bg-card/70 ${c.border}`}>
      <div className={`absolute top-0 right-0 p-10 -mt-6 -mr-6 rounded-full blur-[50px] opacity-55 dark:opacity-15 group-hover:opacity-75 dark:group-hover:opacity-30 transition-opacity ${c.bg}`} />
      <div className={`absolute bottom-0 left-0 p-8 -mb-6 -ml-6 rounded-full blur-[40px] opacity-30 dark:opacity-5 transition-opacity ${c.bg}`} />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-lg border ${c.icon}`}>
            {iconMap[project.icon as string]}
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">{project.date}</div>
            <div className="text-xs text-muted-foreground/50">{project.org}</div>
          </div>
        </div>
        <h3 className="text-base font-bold mb-1 text-foreground">{project.title}</h3>
        <h4 className={`text-xs mb-3 ${c.text}`}>{project.subtitle}</h4>
        <p className="text-muted-foreground text-xs mb-4 leading-relaxed">{project.description}</p>
        <div className="space-y-1.5 mb-4">
          {project.points.map((point, pIdx) => (
            <div key={pIdx} className="flex items-start gap-2 text-xs text-muted-foreground/80">
              <Trophy className={`w-3 h-3 shrink-0 mt-0.5 ${c.bullet}`} />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {project.tech.map((t, tIdx) => (
            <span key={tIdx} className="text-xs px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </AnimCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-m-32 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">Projects</h2>
      </motion.div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {allProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </StaggerGrid>
    </section>
  );
}
