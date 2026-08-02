import { motion } from "framer-motion";
import { useState } from "react";
import { Trophy, Code2, Cpu, MessageSquare, Database, RefreshCw, Bell, BarChart2, LayoutDashboard, Layers, Bot, FileText, Kanban, Zap, Info, X } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";
import { allProjects } from "@/data/projects";

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
  const [pinned, setPinned] = useState(false);

  return (
    <AnimCard
      className={`group relative p-5 rounded-lg bg-gradient-to-br from-card/60 via-card/40 to-transparent border border-white/5 overflow-hidden transition-all duration-500 hover:bg-card/70 ${c.border}`}
    >
      <div className={`absolute top-0 right-0 p-10 -mt-6 -mr-6 rounded-full blur-[50px] opacity-55 dark:opacity-15 group-hover:opacity-75 dark:group-hover:opacity-30 transition-opacity ${c.bg}`} />
      <div className={`absolute bottom-0 left-0 p-8 -mb-6 -ml-6 rounded-full blur-[40px] opacity-30 dark:opacity-5 transition-opacity ${c.bg}`} />

      {/* Compact face */}
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
        <p className="text-muted-foreground text-xs mb-4 leading-relaxed line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
          {project.tech.map((t, tIdx) => (
            <span key={tIdx} className="text-xs px-1.5 py-0.5 bg-white/5 rounded border border-white/10 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPinned((p) => !p)}
          className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${c.text} opacity-80 hover:opacity-100 transition-opacity`}
        >
          <Info className="w-3.5 h-3.5" />
          {pinned ? "Hide details" : "View details"}
        </button>
      </div>

      {/* Hover / tap detail overlay */}
      <div
        className={`absolute inset-0 z-20 flex flex-col p-5 bg-card/98 backdrop-blur-sm overflow-y-auto transition-opacity duration-300 ${
          pinned ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-base font-bold text-foreground">{project.title}</h3>
            <h4 className={`text-xs ${c.text}`}>{project.subtitle}</h4>
          </div>
          <button
            type="button"
            onClick={() => setPinned(false)}
            className="p-1 rounded text-muted-foreground hover:text-foreground shrink-0"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{project.description}</p>
        {project.role && (
          <p className={`text-xs mb-3 leading-relaxed ${c.text}`}>
            <span className="font-semibold">Role: </span>
            <span className="text-muted-foreground">{project.role}</span>
          </p>
        )}
        <div className="space-y-1.5">
          {project.points.map((point, pIdx) => (
            <div key={pIdx} className="flex items-start gap-2 text-xs text-muted-foreground/90">
              <Trophy className={`w-3 h-3 shrink-0 mt-0.5 ${c.bullet}`} />
              <span>{point}</span>
            </div>
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
