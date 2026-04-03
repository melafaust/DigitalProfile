import { motion } from "framer-motion";
import { Code, Cloud, Database, Cpu, GitBranch, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & Infrastructure",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["Azure DevOps", "Azure Data Factory"],
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/10"
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-5 h-5" />,
    skills: ["Microsoft Power BI", "Data Analytics", "Data Engineering", "T-SQL", "MySQL"],
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10"
  },
  {
    title: "Automation & AI",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Power Apps", "Power Automate", "Automation", "Artificial Intelligence"],
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgColor: "bg-secondary/10"
  },
  {
    title: "Programming",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "C++"],
    color: "text-green-400",
    borderColor: "border-green-400/30",
    bgColor: "bg-green-400/10"
  },
  {
    title: "Engineering Practices",
    icon: <GitBranch className="w-5 h-5" />,
    skills: ["API Testing", "CI/CD", "Version Control (GIT)"],
    color: "text-orange-400",
    borderColor: "border-orange-400/30",
    bgColor: "bg-orange-400/10"
  },
  {
    title: "Methodologies",
    icon: <Users className="w-5 h-5" />,
    skills: ["Agile Team Practices"],
    color: "text-pink-400",
    borderColor: "border-pink-400/30",
    bgColor: "bg-pink-400/10"
  }
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
          <span className="text-secondary">/</span>TECHNICAL_CAPABILITIES
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-6 rounded-lg bg-card/40 border ${category.borderColor} hover:bg-card/60 transition-colors group`}
          >
            <div className={`flex items-center gap-3 mb-6 ${category.color} font-mono font-bold`}>
              <div className={`p-2 rounded-md ${category.bgColor}`}>
                {category.icon}
              </div>
              {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className={`text-xs font-mono px-2 py-1 rounded-md border border-white/10 text-muted-foreground group-hover:border-white/20 transition-colors`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
