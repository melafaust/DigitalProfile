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
        className="mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
          Certifications
        </h2>
      </motion.div>

      <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {certs.map((cert) => (
          <AnimCard key={cert.code} className="group">
            <a
              href={cert.url ?? cert.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${cert.name} certificate`}
              className="block"
            >
              <div className="relative overflow-hidden rounded-md border border-black/10 dark:border-white/10 group-hover:border-primary/40 transition-colors">
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  loading="lazy"
                  className="w-full aspect-[1.45] object-contain bg-black/[0.04] dark:bg-white/[0.03] group-hover:scale-[1.03] transition-transform duration-300"
                />
                <ExternalLink className="absolute top-2 right-2 w-3.5 h-3.5 text-white drop-shadow opacity-0 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="mt-2 px-0.5">
                <div className="text-xs font-semibold text-foreground leading-snug line-clamp-2">
                  {cert.name}
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <span className="font-medium" style={{ color: cert.color }}>{cert.code}</span>
                  <span>·</span>
                  <span>{cert.issuer}</span>
                  <span>·</span>
                  <span>{cert.earned}</span>
                </div>
              </div>
            </a>
          </AnimCard>
        ))}
      </StaggerGrid>
    </section>
  );
}
