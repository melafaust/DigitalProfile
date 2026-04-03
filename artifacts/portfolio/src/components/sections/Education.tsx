import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          <span className="text-secondary">/</span>CREDENTIALS
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education & Awards */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-lg bg-card/40 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-secondary" />
              <h3 className="text-lg font-bold font-mono">ACADEMIC_RECORD</h3>
            </div>
            
            <div className="mb-2">
              <div className="text-foreground font-bold">Bachelor of Science in Computer Science</div>
              <div className="text-sm text-muted-foreground font-mono">Pangasinan State University – Main Campus</div>
              <div className="text-xs text-muted-foreground/60 font-mono mt-1">June 2019 – Aug 2023</div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">Academic Distinction</span>
              <span className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">GPA: 1.49</span>
              <span className="text-xs font-mono px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">DOST Scholar</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-lg bg-card/40 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold font-mono">HONORS</h3>
            </div>
            
            <ul className="space-y-3">
              {[
                "FY26 Sustainability Hackathon – Champion (Accenture)",
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-lg bg-card/40 border border-white/5 relative overflow-hidden h-full"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold font-mono">CERTIFICATIONS</h3>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "Microsoft AI Fundamentals", code: "AI-900" },
              { name: "Microsoft Azure Fundamentals", code: "AZ-900" },
              { name: "Microsoft Azure Data Fundamentals", code: "DP-900" },
              { name: "Fortinet Cybersecurity Fundamentals", code: "NSE 2" },
              { name: "Fortinet Cybersecurity Associate", code: "NSE 3" }
            ].map((cert, i) => (
              <div key={i} className="group flex items-center justify-between p-3 rounded bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-sm text-foreground">{cert.name}</span>
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{cert.code}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
