import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";
import {
  SiPython, SiGit, SiPostman, SiElectron, SiNodedotjs,
} from "@icons-pack/react-simple-icons";

/* ── Official Microsoft brand SVGs (not in simple-icons) ── */
const AzureDevOpsSvg = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <path fill="#0078D4" d="M0 18.293l4.164-5.391 11.07-7.586V1.246L25.02 7.516 6.388 10.73v12.847L0 18.293zM32 19.502l-11.602 11.25V25.87L6.99 21.93l5.81-4.18h7.35V10.59L32 6.058v13.444z"/>
  </svg>
);

const AzureDataFactorySvg = () => (
  <svg viewBox="0 0 18 18" className="w-5 h-5" fill="none">
    <defs>
      <linearGradient id="adf-a" x1="9" y1="15.83" x2="9" y2="9.17" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0078d4"/>
        <stop offset="1" stopColor="#5ea0ef"/>
      </linearGradient>
      <linearGradient id="adf-b" x1="3.5" y1="8" x2="3.5" y2="2" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#0078d4"/>
        <stop offset="1" stopColor="#5ea0ef"/>
      </linearGradient>
    </defs>
    <path d="M9 15.83V9.17L3.44 6v6.34z" fill="url(#adf-a)"/>
    <path d="M3.5 8V2L9 5.17 3.5 8z" fill="url(#adf-b)"/>
    <path d="M9 9.17l5.56-3.17L9 2.83 3.44 6z" fill="#50e6ff"/>
    <path d="M9 15.83l5.56-3.49V6L9 9.17z" fill="#c3f1ff"/>
  </svg>
);

const PowerBISvg = () => (
  <svg viewBox="0 0 18 18" className="w-5 h-5" fill="none">
    <rect x="1" y="9" width="3" height="8" rx="0.5" fill="#f2c811"/>
    <rect x="5.5" y="5" width="3" height="12" rx="0.5" fill="#f2c811"/>
    <rect x="10" y="1" width="3" height="16" rx="0.5" fill="#f2c811"/>
    <rect x="14.5" y="6" width="3" height="11" rx="0.5" fill="#f2c811" opacity="0.6"/>
  </svg>
);

interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
  category: string;
}

const CATEGORIES = ["All", "AI & ML", "Data & BI", "Cloud & Azure", "Dev & Tools", "Cybersecurity"];

const skills: Skill[] = [
  {
    name: "Generative AI",
    category: "AI & ML",
    color: "#FFB300",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FFB300" strokeWidth="2" />
        <path d="M8 12a4 4 0 018 0" stroke="#FFB300" strokeWidth="2" />
        <path d="M12 8v8" stroke="#FFB300" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "AI Agents",
    category: "AI & ML",
    color: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#8B5CF6" strokeWidth="2" />
        <path d="M9 12h6M12 9v6" stroke="#8B5CF6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Artificial Intelligence",
    category: "AI & ML",
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path
          stroke="#A855F7"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v2a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-2a3 3 0 013-3h1V6a4 4 0 014-4z"
        />
        <circle cx="9" cy="10" r="1" fill="#A855F7" />
        <circle cx="15" cy="10" r="1" fill="#A855F7" />
        <path stroke="#A855F7" strokeWidth="1.4" strokeLinecap="round" d="M9 14s.833 1.5 3 1.5 3-1.5 3-1.5" />
      </svg>
    ),
  },
  {
    name: "Prompt Engineering",
    category: "AI & ML",
    color: "#6366F1",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="3" y="7" width="18" height="10" rx="2" stroke="#6366F1" strokeWidth="2" />
        <path d="M7 11h10M7 15h6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Natural Language Processing",
    category: "AI & ML",
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="8" width="16" height="8" rx="4" stroke="#A855F7" strokeWidth="2" />
        <circle cx="8" cy="12" r="2" fill="#A855F7" />
        <circle cx="16" cy="12" r="2" fill="#A855F7" />
      </svg>
    ),
  },
  {
    name: "Computer Vision",
    category: "AI & ML",
    color: "#00C853",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#00C853" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="#00C853" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Responsible AI",
    category: "AI & ML",
    color: "#10B981",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#10B981" strokeWidth="2" />
        <path d="M8 16c1.333-2 4.667-2 6 0" stroke="#10B981" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Power BI",
    category: "Data & BI",
    color: "#F2C811",
    icon: <PowerBISvg />,
  },
  {
    name: "Data Analytics & Visualization",
    category: "Data & BI",
    color: "#00B4D8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <polyline points="3,18 8,10 12,14 17,5 21,9" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="10" r="1.5" fill="#00B4D8" />
        <circle cx="12" cy="14" r="1.5" fill="#00B4D8" />
        <circle cx="17" cy="5" r="1.5" fill="#00B4D8" />
      </svg>
    ),
  },
  {
    name: "Azure Data Factory",
    category: "Cloud & Azure",
    color: "#0078D4",
    icon: <AzureDataFactorySvg />,
  },
  {
    name: "Microsoft Fabric",
    category: "Cloud & Azure",
    color: "#7FBA00",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#7FBA00" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Azure Databricks",
    category: "Cloud & Azure",
    color: "#FF6F00",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="10" width="16" height="4" rx="2" stroke="#FF6F00" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="#FF6F00" />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    category: "Cloud & Azure",
    color: "#0078D4",
    icon: <AzureDevOpsSvg />,
  },
  {
    name: "Python",
    category: "Dev & Tools",
    color: "#3776AB",
    icon: <SiPython style={{ width: 20, height: 20, color: "#3776AB" }} />,
  },
  {
    name: "SQL",
    category: "Data & BI",
    color: "#CC2927",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#CC2927" strokeWidth="1.8" />
        <path d="M7 9h3m-1.5-1v4M13 11h2.5a1 1 0 010 2H13v-2zm0 0V9h2" stroke="#CC2927" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Automation",
    category: "Dev & Tools",
    color: "#FF6B35",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="3.5" stroke="#FF6B35" strokeWidth="1.8" />
        <path
          stroke="#FF6B35"
          strokeWidth="1.8"
          strokeLinecap="round"
          d="M12 2v3M12 19v3M2 12h3M19 12h3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M5.636 18.364l2.121-2.121M16.243 7.757l2.121-2.121"
        />
      </svg>
    ),
  },
  {
    name: "DevOps",
    category: "Dev & Tools",
    color: "#2563EB",
    icon: <AzureDevOpsSvg />,
  },
  {
    name: "Git/GitHub",
    category: "Dev & Tools",
    color: "#F05032",
    icon: <SiGit style={{ width: 20, height: 20, color: "#F05032" }} />,
  },
  {
    name: "Postman",
    category: "Dev & Tools",
    color: "#FF6C37",
    icon: <SiPostman style={{ width: 20, height: 20, color: "#FF6C37" }} />,
  },
  {
    name: "Agile/Scrum Methodologies",
    category: "Dev & Tools",
    color: "#FF7043",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#FF7043" strokeWidth="2" />
        <path d="M8 16c1.333-2 4.667-2 6 0" stroke="#FF7043" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Cybersecurity",
    category: "Cybersecurity",
    color: "#EF4444",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="4" y="8" width="16" height="10" rx="2" stroke="#EF4444" strokeWidth="2" />
        <circle cx="12" cy="13" r="3" stroke="#EF4444" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Electron",
    category: "Dev & Tools",
    color: "#47848F",
    icon: <SiElectron style={{ width: 20, height: 20, color: "#47848F" }} />,
  },
  {
    name: "Node.js",
    category: "Dev & Tools",
    color: "#339933",
    icon: <SiNodedotjs style={{ width: 20, height: 20, color: "#339933" }} />,
  },
];

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Technical Skills
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
      </motion.div>

      {/* Filter pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 border ${
              active === cat
                ? "text-primary border-primary/40 bg-primary/10"
                : "text-muted-foreground border-white/10 hover:text-foreground hover:border-white/20 bg-transparent"
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="skill-filter-pill"
                className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">{cat}</span>
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/40 border border-white/5 hover:border-white/20 hover:bg-card/70 transition-all duration-300 group cursor-default h-full">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${skill.color}18`, boxShadow: `0 0 0 1px ${skill.color}30` }}
                >
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
