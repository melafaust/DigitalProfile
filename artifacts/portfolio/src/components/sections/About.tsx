import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          <span className="text-primary">/</span>ABOUT_ME
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 md:col-span-2 p-8 rounded-lg bg-card/50 border border-white/5 backdrop-blur-sm glow-box-secondary"
        >
          <div className="font-mono text-sm text-secondary mb-4 flex items-center gap-2">
            <User className="w-4 h-4" /> [PROFILE_SUMMARY]
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">
            Innovative Software Engineer with specialized expertise in Azure Data Services. Proven track record in optimizing business processes through Development, Testing, and Automations. Grounded in a data-driven approach, leveraging PowerBI and Azure Data Factory to deliver high-performance technical solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 p-8 rounded-lg bg-card/50 border border-white/5 backdrop-blur-sm glow-box flex flex-col justify-center"
        >
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs text-primary mb-1">LOCATION</div>
              <div className="text-foreground font-mono flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                Fairview, Quezon City
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-primary mb-1">LANGUAGES</div>
              <div className="text-foreground font-mono">
                English, Filipino
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-primary mb-1">STATUS</div>
              <div className="text-foreground font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
