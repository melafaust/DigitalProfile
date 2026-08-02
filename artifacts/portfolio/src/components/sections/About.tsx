import { motion } from "framer-motion";
import { User, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
          About Me
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 md:col-span-2 p-8 rounded-lg bg-gradient-to-br from-secondary/35 via-card/70 to-primary/15 border border-secondary/40 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="text-sm text-secondary mb-4 flex items-center gap-2">
            <User className="w-4 h-4" /> Profile Summary
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">
            {profile.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 p-8 rounded-lg bg-gradient-to-br from-primary/35 via-card/70 to-secondary/15 border border-primary/40 backdrop-blur-sm relative overflow-hidden flex flex-col justify-center"
        >
          <div className="space-y-6">
            <div>
              <div className="text-xs text-primary mb-1">LOCATION</div>
              <div className="text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                {profile.location}
              </div>
            </div>
            <div>
              <div className="text-xs text-primary mb-1">LANGUAGES</div>
              <div className="text-foreground">
                {profile.languages}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
