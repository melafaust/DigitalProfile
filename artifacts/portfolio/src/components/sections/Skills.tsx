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

/* Official OpenAI logomark (Azure OpenAI service) */
const OpenAISvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#0078D4" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.0379-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

/* Official matplotlib logomark (polar plot) */
const MatplotlibSvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <circle cx="12" cy="12" r="10.2" fill="#fff"/>
    <circle cx="12" cy="12" r="10.2" fill="none" stroke="#B0BEC5" strokeWidth="1"/>
    <circle cx="12" cy="12" r="6.8" fill="none" stroke="#CFD8DC" strokeWidth=".8"/>
    <circle cx="12" cy="12" r="3.4" fill="none" stroke="#CFD8DC" strokeWidth=".8"/>
    <g stroke="#CFD8DC" strokeWidth=".8">
      <path d="M12 1.8v20.4M1.8 12h20.4M4.8 4.8l14.4 14.4M19.2 4.8L4.8 19.2"/>
    </g>
    <path d="M12 12L12 2.2A9.8 9.8 0 0 1 20.4 6.9Z" fill="#F5C518"/>
    <path d="M12 12l8.4-5.1a9.8 9.8 0 0 1 .6 8.9Z" fill="#4CAF50"/>
    <path d="M12 12l9 3.8a9.8 9.8 0 0 1-6.3 5.6Z" fill="#00BCD4"/>
    <path d="M12 12l2.7 9.4a9.8 9.8 0 0 1-8.6-1.6Z" fill="#3F51B5"/>
    <path d="M12 12L6.1 19.8A9.8 9.8 0 0 1 2.6 8.2Z" fill="#9C27B0"/>
    <path d="M12 12L2.6 8.2A9.8 9.8 0 0 1 12 2.2Z" fill="#E91E63"/>
    <circle cx="12" cy="12" r="1.5" fill="#37474F"/>
  </svg>
);

/* Official Power Query mark */
const PowerQuerySvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="2.5" y="3" width="12.5" height="12.5" rx="1.4" fill="#2E8B57"/>
    <path d="M2.5 7.2h12.5M6.7 7.2v8.3" stroke="#fff" strokeWidth="1.1"/>
    <circle cx="16.4" cy="16.4" r="4.6" fill="none" stroke="#1F6E43" strokeWidth="2"/>
    <path d="M19.8 19.8L22.5 22.5" stroke="#1F6E43" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

/* Data modeling (concept - schema relationships) */
const DataModelSvg = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="2" y="2.5" width="8" height="6" rx="1" stroke="#F2C811" strokeWidth="1.6"/>
    <rect x="14" y="15.5" width="8" height="6" rx="1" stroke="#F2C811" strokeWidth="1.6"/>
    <rect x="14" y="2.5" width="8" height="6" rx="1" stroke="#F2C811" strokeWidth="1.6" opacity=".55"/>
    <path d="M10 5.5h4M6 8.5v10h8" stroke="#F2C811" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
  "Azure OpenAI": <OpenAISvg />,
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
  matplotlib: <MatplotlibSvg />,
  "CI/CD & DevOps": <AzureDevOpsSvg />,
  "ETL/ELT (Azure Data Factory)": <AzureDataFactorySvg />,
  "Power Query": <PowerQuerySvg />,
  "Data Modeling": <DataModelSvg />,
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
