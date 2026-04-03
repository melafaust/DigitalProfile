import { motion } from "framer-motion";
import { Trophy, Code2, Cpu } from "lucide-react";

const projects = [
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
    color: "primary"
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
    color: "secondary"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          <span className="text-primary">/</span>KEY_INITIATIVES
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className={`group relative p-8 rounded-lg bg-card/40 border border-white/5 overflow-hidden transition-all duration-500 hover:bg-card/60 ${project.color === 'primary' ? 'hover:border-primary/50' : 'hover:border-secondary/50'}`}
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 p-12 -mt-8 -mr-8 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity ${project.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg ${project.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20'} border`}>
                  {project.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-muted-foreground">{project.date}</div>
                  <div className="text-xs font-mono text-muted-foreground/60">{project.org}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
              <h4 className={`text-sm font-mono mb-4 ${project.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>{project.subtitle}</h4>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {project.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                    <Trophy className={`w-4 h-4 shrink-0 mt-0.5 ${project.color === 'primary' ? 'text-primary/70' : 'text-secondary/70'}`} />
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
