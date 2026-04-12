import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck, Trophy, Zap, ExternalLink } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";

// Microsoft logo SVG
const MicrosoftLogo = () => (
  <svg viewBox="0 0 21 21" className="w-5 h-5 shrink-0" fill="none">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

// Fortinet logo SVG
const FortinetLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
    <path d="M12 2L3 6.5V12c0 4.418 3.582 8.48 9 9.95C17.418 20.48 21 16.418 21 12V6.5L12 2zm0 2.236l7 3.5V12c0 3.5-2.8 6.72-7 8.07C7.8 18.72 5 15.5 5 12V7.736l7-3.5z"/>
    <path d="M10 8v3H7v2h3v3h2v-3h3v-2h-3V8h-2z"/>
  </svg>
);

const certs = [
  { name: "Microsoft Certified: AI Fundamentals (AI-900)", code: "AI-900", vendor: "microsoft", color: "#00A4EF", url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/8a33cf26ddb37821" },
  { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", code: "AZ-900", vendor: "microsoft", color: "#7FBA00", url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/e669fd00c030c13c" },
  { name: "Microsoft Certified: Azure Data Fundamentals (DP-900)", code: "DP-900", vendor: "microsoft", color: "#FFB900", url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/4c2a81bb29bc39d4" },
  { name: "Fortinet NSE 2: Cybersecurity Fundamentals", code: "NSE 2", vendor: "fortinet", color: "#EE3124", url: "https://www.credly.com/badges/70f078c8-5c0e-4f68-840c-7b3c88982828/linked_in_profile" },
  { name: "Fortinet NSE 3: Cybersecurity Associate", code: "NSE 3", vendor: "fortinet", color: "#EE3124", url: "https://www.credly.com/badges/e4d2c971-9c74-4d3e-a736-e7ecf4ac9966/linked_in_profile" },
];

export default function Education() {
  return (
    <section id="education" className="relative scroll-m-32 space-y-16">

      {/* ── CERTIFICATIONS ── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
            Certifications
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </motion.div>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert) => (
            <AnimCard
              key={cert.code}
              className="group relative flex items-center gap-4 p-4 rounded-lg bg-card/40 border border-white/5 overflow-hidden hover:border-white/15 transition-colors"
            >
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${cert.name} credential`}
              />
              {/* coloured left glow bar */}
              <div
                className="absolute left-0 top-0 h-full w-[3px] rounded-l-lg opacity-80"
                style={{ backgroundColor: cert.color }}
              />

              {/* vendor logo */}
              <div
                className="p-2 rounded-md shrink-0"
                style={{ backgroundColor: `${cert.color}18`, color: cert.color }}
              >
                {cert.vendor === "microsoft" ? <MicrosoftLogo /> : <FortinetLogo />}
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-foreground leading-snug">{cert.name}</div>
                <div
                  className="mt-1 inline-block text-xs font-mono px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}33` }}
                >
                  {cert.code}
                </div>
              </div>

              <ExternalLink
                className="w-4 h-4 shrink-0 opacity-30 group-hover:opacity-70 transition-opacity relative z-20"
                style={{ color: cert.color }}
              />
            </AnimCard>
          ))}
        </StaggerGrid>
      </div>

      {/* ── HACKATHON SPOTLIGHT ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent p-6 md:p-8"
      >
        {/* animated glow blobs */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
          {/* trophy icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center glow-box">
            <Trophy className="w-8 h-8 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary flex items-center gap-1">
                <Zap className="w-3 h-3" /> CHAMPION
              </span>
              <span className="text-xs font-mono text-muted-foreground">Nov 2025 · Accenture</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
              FY26 Sustainability Hackathon
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Won first place out of all competing teams with <span className="text-foreground font-semibold">TagSight</span> — a visual tag-based people accounting system using ArUco markers and computer vision for emergency evacuation scenarios.
            </p>
          </div>
        </div>
      </motion.div>

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
            className="p-6 rounded-lg bg-card/40 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
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
            className="p-6 rounded-lg bg-card/40 border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
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
