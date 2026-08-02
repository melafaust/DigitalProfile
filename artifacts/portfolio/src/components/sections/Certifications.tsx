import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";
import { certs } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="education" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
          Certifications
        </h2>
      </motion.div>

      <StaggerGrid className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {certs.map((cert) => (
          <AnimCard
            key={cert.code}
            className="group relative flex flex-col items-center gap-2 p-3 rounded-lg border border-white/5 bg-gradient-to-br from-card/60 to-transparent hover:border-primary/25 overflow-hidden transition-colors"
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`View ${cert.name} credential`}
            />
            <div
              className="absolute left-0 top-0 h-full w-[3px] rounded-l-lg opacity-80"
              style={{ backgroundColor: cert.color }}
            />

            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src={cert.badgeImg}
                alt={cert.name}
                className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full text-center">
              <div className="text-xs font-semibold text-foreground leading-snug line-clamp-2 mb-1">{cert.name}</div>
              <div
                className="inline-block text-xs px-1.5 py-0.5 rounded"
                style={{ backgroundColor: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}33` }}
              >
                {cert.code}
              </div>
            </div>

            <ExternalLink
              className="absolute top-1.5 right-1.5 w-2.5 h-2.5 opacity-20 group-hover:opacity-60 transition-opacity z-20"
              style={{ color: cert.color }}
            />
          </AnimCard>
        ))}
      </StaggerGrid>
    </section>
  );
}