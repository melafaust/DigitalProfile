import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    period: "June 2024 – Present",
    points: [
      "Drives full-stack development on an Azure-powered agile team, consistently shipping solutions that make a real difference for enterprise clients across multiple regions",
      "Independently designed and deployed Power BI dashboards now used by international leadership to steer key business decisions — turning raw data into clarity",
      "Identified inefficiencies others overlooked and built automation workflows that cut manual workload by 92%, giving the team back time that actually matters",
      "Earned SME recognition not just for technical depth, but for a collaborative approach that keeps teammates unblocked, upskilled, and moving forward"
    ]
  },
  {
    role: "Assistant Engineer",
    company: "Yokogawa Philippines, Inc.",
    period: "November 2023 – April 2024",
    points: [
      "Gained hands-on expertise in Distributed Control Systems (DCS) and industrial automation — bridging engineering principles with real-world operational demands",
      "Delivered reliable after-sales support and on-site troubleshooting for systems where downtime isn't an option",
      "Brought order to complex compliance workflows, ensuring Factory Acceptance Tests and system documentation met strict industry standards",
      "Owned installations end-to-end — from initial hardware setup through configuration, testing, and handover — with minimal oversight"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Experience
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="relative pl-8 md:pl-0">
        {/* Timeline Line for Mobile */}
        <div className="absolute left-[15px] top-0 bottom-0 w-[1px] bg-border md:hidden" />
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center"
            >
              {/* Timeline Node Mobile */}
              <div className="absolute -left-[31px] top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center md:hidden z-10">
                <Briefcase className="w-3 h-3 text-primary" />
              </div>

              {/* Left Column (or Top on Mobile) */}
              <div className={`mb-4 md:mb-0 ${idx % 2 === 0 ? "md:text-right" : "md:col-start-3"}`}>
                <div className="font-mono text-xl font-bold text-primary mb-1">{exp.role}</div>
                <div className="text-foreground font-semibold mb-2">{exp.company}</div>
                <div className={`flex items-center gap-2 text-sm text-muted-foreground font-mono ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </div>
              </div>

              {/* Center Column - Timeline Node Desktop */}
              <div className={`hidden md:flex flex-col items-center relative ${idx % 2 === 0 ? "col-start-2" : "col-start-2"}`}>
                <div className="w-[1px] h-full bg-border absolute top-0 bottom-0 -z-10" />
                <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10 glow-box">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Right Column (or Bottom on Mobile) */}
              <div className={`bg-gradient-to-br ${idx % 2 === 0 ? "from-primary/15 via-card/50 to-secondary/10" : "from-secondary/15 via-card/50 to-primary/10"} border ${idx % 2 === 0 ? "border-primary/25" : "border-secondary/25"} dark:border-white/5 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden ${idx % 2 === 0 ? "md:col-start-3" : "md:col-start-1 md:row-start-1"}`}>
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <ChevronRight className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
