import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { academicRecord, awards } from "@/data/education";

export default function Education() {
  return (
    <section id="education-main" className="relative scroll-m-32 space-y-16">

      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
            Education
          </h2>
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
              <h3 className="text-lg font-bold font-serif">Academic Record</h3>
            </div>

            <div className="mb-4">
              <div className="text-foreground font-bold">{academicRecord.degree}</div>
              <div className="text-sm text-muted-foreground">{academicRecord.school}</div>
              <div className="text-xs text-muted-foreground/60 mt-1">{academicRecord.period}</div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">GPA: {academicRecord.gpa}</span>
                <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded border border-secondary/20">{academicRecord.distinction}</span>
              </div>
            </div>

            {/* DOST spotlight */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
              <Award className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-xs text-primary font-bold">{academicRecord.scholar}</span>
              <span className="text-xs text-muted-foreground">· {academicRecord.scholarNote}</span>
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
              <h3 className="text-lg font-bold font-serif">AWARDS</h3>
            </div>
            <ul className="space-y-3">
              {awards.map((award, i) => (
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
