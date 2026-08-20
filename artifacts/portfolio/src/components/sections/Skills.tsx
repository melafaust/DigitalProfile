import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skills, CATEGORIES, type SkillEntry } from "@/data/skills";

/* Real official logo files served from /public/logos.
   Sources: devicon (full-colour originals), simple-icons,
   microsoft/PowerBI-Icons (official), and the Azure icon set.
   Skills with no entry here are concepts rather than products
   (e.g. Prompt Engineering) and fall back to a brand-coloured dot. */
const logoMap: Record<string, string> = {
  "Computer Vision": "opencv",
  "Azure OpenAI": "azure",
  Ollama: "ollama",
  "scikit-learn": "scikitlearn",
  "Power BI": "powerbi",
  "Azure Data Factory": "datafactory",
  "ETL/ELT (Azure Data Factory)": "datafactory",
  "Azure Databricks": "databricks",
  "Microsoft Azure": "azure",
  "Microsoft Fabric": "azure",
  "Azure AI Search": "aisearch",
  Python: "python",
  SQL: "sqlserver",
  PySpark: "apachespark",
  pandas: "pandas",
  matplotlib: "matplotlib",
  "CI/CD & DevOps": "azuredevops",
  "Git/GitHub": "github",
  Postman: "postman",
  Electron: "electron",
  "Node.js": "nodedotjs",
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  Supabase: "supabase",
  Vercel: "vercel",
  "Google Apps Script": "googleappsscript",
  "Moodle LMS": "moodle",
};

/* Solid-black marks that would vanish against the dark theme */
const INVERT_ON_DARK = new Set(["github", "nextdotjs", "vercel", "ollama"]);

function SkillChip({ skill }: { skill: SkillEntry }) {
  const logo = logoMap[skill.name];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.18 }}
      className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-2.5 py-1.5 hover:border-primary/40 transition-colors"
    >
      {logo ? (
        <img
          src={`/logos/${logo}.svg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`w-4 h-4 shrink-0 object-contain ${
            INVERT_ON_DARK.has(logo) ? "dark:invert" : ""
          }`}
        />
      ) : (
        <span
          className="w-2 h-2 shrink-0 rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      )}
      <span className="text-xs text-foreground/85 whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");

  /* In the "All" view show one labelled block per category so related
     tools sit together; a specific filter renders a single flat row. */
  const groups =
    active === "All"
      ? CATEGORIES.filter((c) => c !== "All")
          .map((c) => ({ label: c, items: skills.filter((s) => s.category === c) }))
          .filter((g) => g.items.length > 0)
      : [{ label: null, items: skills.filter((s) => s.category === active) }];

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
        className="flex flex-wrap gap-2 mb-6"
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

      {/* Grouped, compact logo chips */}
      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.label ?? "flat"}>
            {group.label && (
              <h3 className="mb-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
                {group.label}
              </h3>
            )}
            <motion.div layout className="flex flex-wrap gap-2">
              <AnimatePresence mode="popLayout">
                {group.items.map((skill) => (
                  <SkillChip key={`${skill.name}-${skill.category}`} skill={skill} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
