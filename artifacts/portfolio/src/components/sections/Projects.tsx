import { motion } from "framer-motion";
import { Trophy, Code2, Cpu, MessageSquare, Database, RefreshCw, Bell, BarChart2 } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";

const melaTools = [
  {
    title: "SE Platform Insights Automation Suite",
    subtitle: "AI HUB",
    org: "Mela Automations",
    date: "Apr 2026",
    description:
      "Unified AI-powered desktop suite for automating Azure DevOps and Data Factory workflows. Features a conversational agent that orchestrates all tools, executes multi-step tasks, and summarizes results — all from a single chat interface.",
    tech: ["Azure OpenAI (gpt-4o-mini)", "Electron", "Node.js", "CDP", "Teams Webhooks"],
    points: [
      "Agentic AI chat assistant: understands complex, multi-step requests and autonomously invokes the right tools in sequence",
      "Function-calling with Azure OpenAI: natural language triggers for any automation, with preview and confirmation before execution",
      "24-hour chat and run history: auto-saved, session-based, and resumable from the sidebar",
      "Integrated tool cards: open any tool instantly or let the AI decide based on your message",
      "Theme toggle, model selector, and live run stats — all in one window"
    ],
    icon: <MessageSquare className="w-6 h-6" />,
    color: "green",
  },
  {
    title: "Param Collector (ADO Suite)",
    subtitle: "Automated ADF pipeline parameter extraction via Edge CDP",
    org: "Mela Automations",
    date: "Apr 2026",
    description:
      "Opens a secure Edge browser, injects a custom overlay, and extracts pipeline run parameters from Azure Data Factory using Chrome DevTools Protocol. Supports 14 pipeline types and multi-page scraping.",
    tech: ["Edge CDP", "Azure Data Factory", "Node.js", "Electron"],
    points: [
      "One-click collection of parameters for 14+ ADF pipeline types (Work Items, TestRuns, Git Commits, etc.)",
      "Overlay UI with checkboxes for selective or bulk collection; auto-scrolls through paginated results",
      "Retries failed reads up to 3×, exports results as .txt, and provides a collapsible debug log panel",
      "No credentials stored: uses live Edge session for secure authentication"
    ],
    icon: <Database className="w-6 h-6" />,
    color: "blue",
  },
  {
    title: "Reingestion Tool",
    subtitle: "Bulk API sender with live dashboard and retry logic",
    org: "Mela Automations",
    date: "Apr 2026",
    description:
      "Sends collected parameters to your API endpoint in parallel, with real-time dashboard stats, error handling, and Teams notification integration. Runs in a background Worker thread for maximum responsiveness.",
    tech: ["Node.js", "Web Workers", "REST API", "Teams Webhooks"],
    points: [
      "Live dashboard: tracks total requests, success/error counts, rows sent, and run duration",
      "Graceful cancellation and retry: each failed request retried up to 2× with delay, errors logged for selective rerun",
      "Teams summary card: posts run results to Teams with a one-click Rerun Failed button",
      "Runs in a background thread — UI never freezes, even for large batches"
    ],
    icon: <RefreshCw className="w-6 h-6" />,
    color: "orange",
  },
  {
    title: "Alerts Monitor",
    subtitle: "ADF failure detection and Teams alerting",
    org: "Mela Automations",
    date: "Apr 2026",
    description:
      "Queries Azure Data Factory for failed pipeline runs, groups and summarizes results, and posts rich Adaptive Cards to Microsoft Teams. Authenticates via live Edge session for security.",
    tech: ["Azure Data Factory", "Teams Webhooks", "Edge CDP"],
    points: [
      "Natural language triggers: ask the AI to check failures for any date or range — runs multiple queries in sequence if needed",
      "Failure report cards: show grouped failures, error codes, and action buttons (Send to Teams, Re-check, Log to Dashboard)",
      "Teams integration: posts Adaptive Cards with summary tables, error details, and one-click Rerun/Skip buttons (single-use tokens)",
      "No credentials stored: uses Edge session for secure ADF authentication"
    ],
    icon: <Bell className="w-6 h-6" />,
    color: "red",
  },
  {
    title: "Failure Dashboard",
    subtitle: "Interactive analytics for ADF failure trends",
    org: "Mela Automations",
    date: "Apr 2026",
    description:
      "In-app analytics panel that visualizes ADF failure data across multiple dates. Features upsert logic, entity name cleaning, and AI-generated trend analysis via Azure OpenAI.",
    tech: ["Azure OpenAI", "Chart.js", "LocalStorage", "Electron"],
    points: [
      "Stacked bar and horizontal charts: failures per date and per entity, with cleaned pipeline names",
      "AI analysis: every dashboard open triggers a new trend summary and actionable recommendation",
      "Upsert logic: logging the same date twice replaces the previous entry — no duplicates accumulate",
      "Data persists across sessions (localStorage); clear data with one click"
    ],
    icon: <BarChart2 className="w-6 h-6" />,
    color: "purple",
  },
];

const standaloneProjects = [
  {
    title: "TagSight",
    subtitle: "Visual Tag-Based People Accounting System for Emergency Evacuation",
    org: "Accenture",
    date: "Nov 2025",
    description: "A non-contact, visual tag-based accounting system using ArUco markers and computer vision for emergency scenarios.",
    tech: ["Computer Vision", "Raspberry Pi", "Gen AI", "Hardware"],
    points: [
      "Built a device with camera and Raspberry Pi connected to a backend displaying real-time data in a Dashboard with Gen AI",
      "Won as Champion at FY26 Sustainability Hackathon"
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: "primary",
  },
  {
    title: "Reverse Vending Machine",
    subtitle: "In Exchange for Internet Connectivity",
    org: "Pangasinan State University",
    date: "Jun 2023",
    description: "An innovative hardware solution that promotes recycling by providing internet connectivity as an incentive.",
    tech: ["Hardware", "Networking", "IoT"],
    points: [
      "Machine that provides internet connectivity for every bottle inserted",
      "Awarded as Best in Thesis"
    ],
    icon: <Code2 className="w-6 h-6" />,
    color: "secondary",
  },
];

const toolColorMap: Record<string, string> = {
  green:  { border: "hover:border-green-400/50",  bg: "bg-green-400",  icon: "bg-green-400/10 text-green-400 border-green-400/20",  text: "text-green-400",  bullet: "text-green-400/70"  },
  blue:   { border: "hover:border-blue-400/50",   bg: "bg-blue-400",   icon: "bg-blue-400/10 text-blue-400 border-blue-400/20",     text: "text-blue-400",   bullet: "text-blue-400/70"   },
  orange: { border: "hover:border-orange-400/50", bg: "bg-orange-400", icon: "bg-orange-400/10 text-orange-400 border-orange-400/20",text: "text-orange-400", bullet: "text-orange-400/70" },
  red:    { border: "hover:border-red-400/50",    bg: "bg-red-400",    icon: "bg-red-400/10 text-red-400 border-red-400/20",         text: "text-red-400",    bullet: "text-red-400/70"    },
  purple: { border: "hover:border-purple-400/50", bg: "bg-purple-400", icon: "bg-purple-400/10 text-purple-400 border-purple-400/20",text: "text-purple-400", bullet: "text-purple-400/70" },
  primary:{ border: "hover:border-primary/50",    bg: "bg-primary",    icon: "bg-primary/10 text-primary border-primary/20",         text: "text-primary",    bullet: "text-primary/70"    },
  secondary:{border:"hover:border-secondary/50",  bg: "bg-secondary",  icon: "bg-secondary/10 text-secondary border-secondary/20",   text: "text-secondary",  bullet: "text-secondary/70"  },
} as any;

export default function Projects() {
  const allProjects = [...melaTools, ...standaloneProjects];
  return (
    <section id="projects" className="relative scroll-m-32 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Projects
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {allProjects.map((project, idx) => {
          const c = toolColorMap[project.color];
          return (
            <AnimCard
              key={idx}
              className={`group relative p-8 rounded-lg bg-card/40 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-card/60 ${c.border}`}
            >
              <div className={`absolute top-0 right-0 p-12 -mt-8 -mr-8 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity ${c.bg}`} />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg border ${c.icon}`}>
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-muted-foreground">{project.date}</div>
                    <div className="text-xs font-mono text-muted-foreground/60">{project.org}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                <h4 className={`text-sm font-mono mb-4 ${c.text}`}>{project.subtitle}</h4>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="space-y-2 mb-6">
                  {project.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                      <Trophy className={`w-4 h-4 shrink-0 mt-0.5 ${c.bullet}`} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/10 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimCard>
          );
        })}
      </StaggerGrid>
    </section>
  );
}
