export interface SkillEntry {
  name: string;
  category: string;
  color: string;
  /** Include this skill in the curated grid on the generated one-page resume. */
  resume?: boolean;
}

export const CATEGORIES = ["All", "AI & ML", "Data & BI", "Cloud & Azure", "Dev & Tools", "Cybersecurity"];

export const skills: SkillEntry[] = [
  { name: "Generative AI", category: "AI & ML", color: "#FFB300", resume: true },
  { name: "Artificial Intelligence", category: "AI & ML", color: "#A855F7" },
  { name: "Machine Learning", category: "AI & ML", color: "#F7931E" },
  { name: "AI Agents", category: "AI & ML", color: "#8B5CF6", resume: true },
  { name: "Prompt Engineering", category: "AI & ML", color: "#6366F1", resume: true },
  { name: "Natural Language Processing", category: "AI & ML", color: "#A855F7" },
  { name: "Computer Vision", category: "AI & ML", color: "#5C3EE8" },
  { name: "Responsible AI", category: "AI & ML", color: "#10B981" },
  { name: "Azure OpenAI", category: "AI & ML", color: "#0078D4", resume: true },
  { name: "Ollama", category: "AI & ML", color: "#ffffff" },
  { name: "scikit-learn", category: "AI & ML", color: "#F7931E" },
  { name: "Power BI", category: "Data & BI", color: "#F2C811", resume: true },
  { name: "DAX", category: "Data & BI", color: "#F2C811", resume: true },
  { name: "Power Query", category: "Data & BI", color: "#F2C811", resume: true },
  { name: "Data Modeling", category: "Data & BI", color: "#F2C811", resume: true },
  { name: "Data Analytics & Visualization", category: "Data & BI", color: "#00B4D8", resume: true },
  { name: "SQL", category: "Data & BI", color: "#CC2927", resume: true },
  { name: "ETL/ELT (Azure Data Factory)", category: "Data & BI", color: "#0078D4", resume: true },
  { name: "PySpark", category: "Data & BI", color: "#E25A1C", resume: true },
  { name: "Delta Lake", category: "Data & BI", color: "#00ADD4" },
  { name: "pandas", category: "Data & BI", color: "#E70488" },
  { name: "matplotlib", category: "Data & BI", color: "#11557C" },
  { name: "Microsoft Azure", category: "Cloud & Azure", color: "#0078D4" },
  { name: "Azure Data Factory", category: "Cloud & Azure", color: "#0078D4", resume: true },
  { name: "Azure Databricks", category: "Cloud & Azure", color: "#FF3621", resume: true },
  { name: "Microsoft Fabric", category: "Cloud & Azure", color: "#37BDFF", resume: true },
  { name: "Azure AI Search", category: "Cloud & Azure", color: "#0078D4", resume: true },
  { name: "Python", category: "Dev & Tools", color: "#3776AB", resume: true },
  { name: "TypeScript", category: "Dev & Tools", color: "#3178C6" },
  { name: "Node.js", category: "Dev & Tools", color: "#339933", resume: true },
  { name: "React", category: "Dev & Tools", color: "#61DAFB", resume: true },
  { name: "Next.js", category: "Dev & Tools", color: "#ffffff", resume: true },
  { name: "Tailwind CSS", category: "Dev & Tools", color: "#06B6D4" },
  { name: "Electron", category: "Dev & Tools", color: "#47848F" },
  { name: "Supabase", category: "Dev & Tools", color: "#3ECF8E", resume: true },
  { name: "Vercel", category: "Dev & Tools", color: "#ffffff" },
  { name: "Git/GitHub", category: "Dev & Tools", color: "#F05032", resume: true },
  { name: "Azure DevOps Repos", category: "Dev & Tools", color: "#0078D4" },
  { name: "CI/CD & DevOps", category: "Dev & Tools", color: "#2563EB", resume: true },
  { name: "Postman", category: "Dev & Tools", color: "#FF6C37" },
  { name: "Agile/Scrum Methodologies", category: "Dev & Tools", color: "#FF7043", resume: true },
  { name: "Google Apps Script", category: "Dev & Tools", color: "#4285F4" },
  { name: "Moodle LMS", category: "Dev & Tools", color: "#F98012" },
  { name: "Cybersecurity", category: "Cybersecurity", color: "#EF4444" },
];
