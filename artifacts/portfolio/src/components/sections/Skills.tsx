import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";
import {
  SiPython, SiGit, SiPostman, SiElectron, SiNodedotjs,
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiVercel,
  SiApachespark, SiDatabricks, SiOllama, SiScikitlearn, SiPandas,
  SiGoogleappsscript, SiMoodle, SiOpencv,
} from "@icons-pack/react-simple-icons";
import { skills as skillsData, CATEGORIES } from "@/data/skills";

/* ── Official Microsoft brand SVGs (not in simple-icons) ── */
const AzureLogoSvg = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
    <path fill="#0078D4" d="M0 18.293l4.164-5.391 11.07-7.586V1.246L25.02 7.516 6.388 10.73v12.847L0 18.293zM32 19.502l-11.602 11.25V25.87L6.99 21.93l5.81-4.18h7.35V10.59L32 6.058v13.444z"/>
  </svg>
);

const AzureDevOpsSvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path fill="#0078D4" d="M23.988 5.85v13.263l-5.577 4.573-8.128-2.982v2.965L4.005 18.06l14.577.928V6.404zM8.34 15.157l7.868 1.014V3.826L8.28 5.475v9.682z"/>
    <path fill="#0078D4" d="M0 6.792l1.917-2.615 12.63-5.049v3.104L4.752 6.372l4.7-.06v10.09L2.55 14.9z" opacity="0.6"/>
  </svg>
);

const MicrosoftFabricSvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path fill="#1a8cff" d="M12.5 1L2 6.8v6.6l10.5 5.8 4.4-2.44V9.9z"/>
    <path fill="#37bdff" d="M12.5 1v8.9l6.9 3.86V6.8z" opacity="0.9"/>
    <path fill="#3ce0ba" d="M2 13.4l10.5 5.8v4.79L2 18.2z"/>
    <path fill="#78dcff" d="M12.5 19.2l4.4-2.44 5.1 2.85-9.5 5.38z"/>
  </svg>
);

const AzureAISearchSvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <defs>
      <linearGradient id="aisearch-a" x1="2" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#50e6ff"/>
        <stop offset="1" stopColor="#0078d4"/>
      </linearGradient>
    </defs>
    <circle cx="10.5" cy="10.5" r="7" stroke="url(#aisearch-a)" strokeWidth="2"/>
    <path d="M15.8 15.8L21 21" stroke="#0078D4" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="10.5" cy="10.5" r="2.6" fill="#50E6FF"/>
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

/* Icons are presentational-only and stay local to the site; content (name/category/color)
   is the shared source of truth in src/data/skills.ts, also read by the resume generator. */
const iconMap: Record<string, React.ReactNode> = {
  "Generative AI": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFB300" strokeWidth="2" />
      <path d="M8 12a4 4 0 018 0" stroke="#FFB300" strokeWidth="2" />
      <path d="M12 8v8" stroke="#FFB300" strokeWidth="2" />
    </svg>
  ),
  "AI Agents": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M9 12h6M12 9v6" stroke="#8B5CF6" strokeWidth="2" />
    </svg>
  ),
  "Artificial Intelligence": (
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
  "Prompt Engineering": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="#6366F1" strokeWidth="2" />
      <path d="M7 11h10M7 15h6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  "Natural Language Processing": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="4" y="8" width="16" height="8" rx="4" stroke="#A855F7" strokeWidth="2" />
      <circle cx="8" cy="12" r="2" fill="#A855F7" />
      <circle cx="16" cy="12" r="2" fill="#A855F7" />
    </svg>
  ),
  "Computer Vision": <SiOpencv style={{ width: 20, height: 20, color: "#5C3EE8" }} />,
  "Responsible AI": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#10B981" strokeWidth="2" />
      <path d="M8 16c1.333-2 4.667-2 6 0" stroke="#10B981" strokeWidth="2" />
    </svg>
  ),
  "Azure OpenAI": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#0078D4" strokeWidth="1.8" />
      <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#0078D4" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill="#0078D4" />
    </svg>
  ),
  "Machine Learning": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="5" cy="12" r="2" stroke="#F7931E" strokeWidth="1.8" />
      <circle cx="19" cy="12" r="2" stroke="#F7931E" strokeWidth="1.8" />
      <circle cx="12" cy="5" r="2" stroke="#F7931E" strokeWidth="1.8" />
      <circle cx="12" cy="19" r="2" stroke="#F7931E" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" fill="#F7931E" />
      <path d="M7 12h3M14 12h3M12 7v3M12 14v3" stroke="#F7931E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Ollama: <SiOllama style={{ width: 20, height: 20, color: "#ffffff" }} />,
  "scikit-learn": <SiScikitlearn style={{ width: 20, height: 20, color: "#F7931E" }} />,
  "Power BI": <PowerBISvg />,
  "Data Analytics & Visualization": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <polyline points="3,18 8,10 12,14 17,5 21,9" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="10" r="1.5" fill="#00B4D8" />
      <circle cx="12" cy="14" r="1.5" fill="#00B4D8" />
      <circle cx="17" cy="5" r="1.5" fill="#00B4D8" />
    </svg>
  ),
  "Azure Data Factory": <AzureDataFactorySvg />,
  "Microsoft Fabric": <MicrosoftFabricSvg />,
  "Azure Databricks": <SiDatabricks style={{ width: 20, height: 20, color: "#FF3621" }} />,
  "Microsoft Azure": <AzureLogoSvg />,
  "Azure AI Search": <AzureAISearchSvg />,
  Python: <SiPython style={{ width: 20, height: 20, color: "#3776AB" }} />,
  SQL: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#CC2927" strokeWidth="1.8" />
      <path d="M7 9h3m-1.5-1v4M13 11h2.5a1 1 0 010 2H13v-2zm0 0V9h2" stroke="#CC2927" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  PySpark: <SiApachespark style={{ width: 20, height: 20, color: "#E25A1C" }} />,
  "Delta Lake": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M12 4L21 19H3L12 4z" stroke="#00ADD4" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 14h8" stroke="#00ADD4" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  DAX: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="#F2C811" strokeWidth="1.8" />
      <path d="M7 12h4M15 9l-3 6M15 15l-3-6" stroke="#F2C811" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  pandas: <SiPandas style={{ width: 20, height: 20, color: "#E70488" }} />,
  matplotlib: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <polyline points="3,18 7,10 11,14 15,6 19,10 21,8" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="#38BDF8" strokeWidth="1.4" />
    </svg>
  ),
  DevOps: <AzureDevOpsSvg />,
  "Git/GitHub": <SiGit style={{ width: 20, height: 20, color: "#F05032" }} />,
  Postman: <SiPostman style={{ width: 20, height: 20, color: "#FF6C37" }} />,
  "Agile/Scrum Methodologies": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FF7043" strokeWidth="2" />
      <path d="M8 16c1.333-2 4.667-2 6 0" stroke="#FF7043" strokeWidth="2" />
      <path d="M12 8v4l3 3" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Cybersecurity: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <rect x="4" y="8" width="16" height="10" rx="2" stroke="#EF4444" strokeWidth="2" />
      <circle cx="12" cy="13" r="3" stroke="#EF4444" strokeWidth="2" />
    </svg>
  ),
  Electron: <SiElectron style={{ width: 20, height: 20, color: "#47848F" }} />,
  "Node.js": <SiNodedotjs style={{ width: 20, height: 20, color: "#339933" }} />,
  React: <SiReact style={{ width: 20, height: 20, color: "#61DAFB" }} />,
  "Next.js": <SiNextdotjs style={{ width: 20, height: 20, color: "#ffffff" }} />,
  TypeScript: <SiTypescript style={{ width: 20, height: 20, color: "#3178C6" }} />,
  "Tailwind CSS": <SiTailwindcss style={{ width: 20, height: 20, color: "#06B6D4" }} />,
  Supabase: <SiSupabase style={{ width: 20, height: 20, color: "#3ECF8E" }} />,
  Vercel: <SiVercel style={{ width: 20, height: 20, color: "#ffffff" }} />,
  "Google Apps Script": <SiGoogleappsscript style={{ width: 20, height: 20, color: "#4285F4" }} />,
  "Moodle LMS": <SiMoodle style={{ width: 20, height: 20, color: "#F98012" }} />,
};

const skills: Skill[] = skillsData.map((s) => ({ ...s, icon: iconMap[s.name] }));

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
        className="mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
          Technical Skills
        </h2>
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
            className={`relative px-3 py-1 rounded-full text-xs transition-all duration-200 border ${
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
              <div className={`flex flex-col items-center gap-2 p-3 rounded-lg bg-card/40 border transition-all duration-300 group cursor-default h-full hover:bg-card/70 ${
                  skill.category === "AI & ML"
                    ? "border-purple-500/20 hover:border-purple-400/40"
                    : "border-white/5 hover:border-white/20"
                }`}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${skill.color}18`, boxShadow: `0 0 0 1px ${skill.color}30` }}
                >
                  {skill.icon}
                </div>
                <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
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
