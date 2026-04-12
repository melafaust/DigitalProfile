import { motion } from "framer-motion";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";
import {
  SiPython, SiMysql, SiGit, SiCplusplus, SiPostman, SiGithubactions, SiElectron, SiNodedotjs,
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

const PowerAppsSvg = () => (
  <svg viewBox="0 0 18 18" className="w-5 h-5" fill="none">
    <path fill="#742774" d="M9 1L1 5.5v7L9 17l8-4.5v-7z"/>
    <path fill="#fff" opacity="0.9" d="M9 3.5L3 7v4l6 3.5 6-3.5V7z"/>
    <circle cx="9" cy="9" r="2" fill="#742774"/>
  </svg>
);

const PowerAutomateSvg = () => (
  <svg viewBox="0 0 18 18" className="w-5 h-5" fill="none">
    <path fill="#0066FF" d="M9 1C4.582 1 1 4.582 1 9s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" opacity="0.15"/>
    <path fill="#0066FF" d="M10.5 2.5l-5.5 7h4.5l-1.5 6 6-8H9.5l1-5z" strokeLinecap="round"/>
  </svg>
);

interface Skill {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "Azure DevOps (CI/CD, Pipelines)",
    color: "#0078D4",
    icon: <AzureDevOpsSvg />,
  },
  {
    name: "Azure Data Factory (ETL, Orchestration)",
    color: "#0078D4",
    icon: <AzureDataFactorySvg />,
  },
  {
    name: "Power BI (Dashboards, DAX)",
    color: "#F2C811",
    icon: <PowerBISvg />,
  },
  {
    name: "Data Analytics & Visualization",
    color: "#00B4D8",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <polyline points="3,18 8,10 12,14 17,5 21,9" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="10" r="1.5" fill="#00B4D8"/>
        <circle cx="12" cy="14" r="1.5" fill="#00B4D8"/>
        <circle cx="17" cy="5" r="1.5" fill="#00B4D8"/>
      </svg>
    ),
  },
  {
    name: "Data Engineering",
    color: "#06D6A0",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3" stroke="#06D6A0" strokeWidth="1.8"/>
        <path d="M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7" stroke="#06D6A0" strokeWidth="1.8"/>
        <path d="M4 12v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#06D6A0" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    name: "T-SQL",
    color: "#CC2927",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#CC2927" strokeWidth="1.8"/>
        <path d="M7 9h3m-1.5-1v4M13 11h2.5a1 1 0 010 2H13v-2zm0 0V9h2" stroke="#CC2927" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    color: "#4479A1",
    icon: <SiMysql style={{ width: 20, height: 20, color: "#4479A1" }} />,
  },
  {
    name: "Power Apps",
    color: "#742774",
    icon: <PowerAppsSvg />,
  },
  {
    name: "Power Automate",
    color: "#0066FF",
    icon: <PowerAutomateSvg />,
  },
  {
    name: "Automation",
    color: "#FF6B35",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="3.5" stroke="#FF6B35" strokeWidth="1.8"/>
        <path stroke="#FF6B35" strokeWidth="1.8" strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3M5.636 5.636l2.121 2.121M16.243 16.243l2.121 2.121M5.636 18.364l2.121-2.121M16.243 7.757l2.121-2.121"/>
      </svg>
    ),
  },
  {
    name: "Artificial Intelligence",
    color: "#A855F7",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path stroke="#A855F7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v2a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-2a3 3 0 013-3h1V6a4 4 0 014-4z"/>
        <circle cx="9" cy="10" r="1" fill="#A855F7"/>
        <circle cx="15" cy="10" r="1" fill="#A855F7"/>
        <path stroke="#A855F7" strokeWidth="1.4" strokeLinecap="round" d="M9 14s.833 1.5 3 1.5 3-1.5 3-1.5"/>
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: <SiPython style={{ width: 20, height: 20, color: "#3776AB" }} />,
  },
  {
    name: "C++",
    color: "#00589D",
    icon: <SiCplusplus style={{ width: 20, height: 20, color: "#00589D" }} />,
  },
  {
    name: "API Testing",
    color: "#FF6C37",
    icon: <SiPostman style={{ width: 20, height: 20, color: "#FF6C37" }} />,
  },
  {
    name: "CI/CD",
    color: "#2088FF",
    icon: <SiGithubactions style={{ width: 20, height: 20, color: "#2088FF" }} />,
  },
  {
    name: "Git",
    color: "#F05032",
    icon: <SiGit style={{ width: 20, height: 20, color: "#F05032" }} />,
  },
  {
    name: "Agile",
    color: "#EC4899",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" d="M12 4C7.582 4 4 7.582 4 12"/>
        <path stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" d="M12 20c4.418 0 8-3.582 8-8"/>
        <path fill="#EC4899" d="M4 12l-3-2.25v4.5L4 12zM20 12l3 2.25v-4.5L20 12z"/>
        <circle cx="12" cy="12" r="2.5" fill="#EC4899" opacity="0.35"/>
      </svg>
    ),
  },
  {
    name: "Electron",
    color: "#47848F",
    icon: <SiElectron style={{ width: 20, height: 20, color: "#47848F" }} />,
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: <SiNodedotjs style={{ width: 20, height: 20, color: "#339933" }} />,
  },
  {
    name: "LLM / Groq",
    color: "#F55036",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="3" fill="#F55036" opacity="0.25"/>
        <circle cx="12" cy="12" r="1.5" fill="#F55036"/>
        <path stroke="#F55036" strokeWidth="1.6" strokeLinecap="round"
          d="M12 3C7.029 3 3 7.029 3 12s4.029 9 9 9 9-4.029 9-9"/>
        <path stroke="#F55036" strokeWidth="1.6" strokeLinecap="round"
          d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5"/>
        <path fill="#F55036" d="M21 12l-2.5-1.5v3L21 12z"/>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Technical Skills
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
      </motion.div>

      <StaggerGrid className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3">
        {skills.map((skill) => (
          <AnimCard key={skill.name}>
            <div
              className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/40 border border-white/5 hover:border-white/20 hover:bg-card/70 transition-all duration-300 group cursor-default h-full"
            >
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
          </AnimCard>
        ))}
      </StaggerGrid>
    </section>
  );
}
