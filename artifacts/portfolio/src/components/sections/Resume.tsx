import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-lg bg-gradient-to-br from-primary/30 via-card/60 to-secondary/15 border border-primary/35 dark:border-white/5 p-8 md:p-10 relative overflow-hidden text-center"
      >
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/15 rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/15 rounded-full blur-[50px] pointer-events-none" />

        <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
          <FileText className="w-7 h-7" />
        </div>

        <h2 className="relative text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
          Want the full picture?
        </h2>
        <p className="relative text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8">
          Download my resume for a one-page summary of my experience, skills, and certifications.
        </p>

        <a
          href="/Melamar_Faustino_Resume.pdf"
          download="Melamar_Faustino_Resume.pdf"
          className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
