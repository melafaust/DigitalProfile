import { motion } from "framer-motion";
import { Trophy, Zap } from "lucide-react";

export default function HackathonSpotlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent p-6 md:p-8"
    >
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
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
  );
}
