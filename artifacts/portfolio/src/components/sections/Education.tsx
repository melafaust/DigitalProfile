import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education-main" className="relative scroll-m-32 space-y-16">

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Education
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic Record */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg bg-gradient-to-br from-secondary/30 via-card/60 to-transparent border border-secondary/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/15 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-secondary" />
              <h3 className="text-lg font-bold font-mono">Academic Record</h3>
            </div>

            <div className="mb-4">
              <div className="text-foreground font-bold">Bachelor of Science in Computer Science</div>
              <div className="text-sm text-muted-foreground font-mono">Pangasinan State University – Main Campus</div>
              <div className="text-xs text-muted-foreground/60 font-mono mt-1">June 2019 – Aug 2023</div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">GPA: 1.49</span>
                <span className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">Academic Distinction</span>
              </div>
            </div>

            {/* DOST spotlight */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <Award className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-xs font-mono text-primary font-bold">DOST Scholar</span>
              <span className="text-xs text-muted-foreground">· Merit scholarship for academic excellence in S&amp;T</span>
            </div>
          </motion.div>

          {/* Honors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg bg-gradient-to-br from-primary/30 via-card/60 to-transparent border border-primary/40 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-[40px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold font-mono">AWARDS</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Adhikalinisan Sustainability Pitching Competition – Champion",
                "Best Student Research (2023)",
                "DICT Start-Up Challenge PH (2023) – Runner-Up",
                "Best in Thesis (2023)"
              ].map((award, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
