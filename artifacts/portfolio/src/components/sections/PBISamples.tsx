import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BarChart2, ZoomIn, X } from "lucide-react";

const samples = [
  {
    title: "GitHub Copilot Metrics Dashboard",
    img: "/pbi-samples/copilot-metrics-dashboard.png",
    description:
      "A cross-functional executive dashboard tracking Copilot adoption across 21,000+ seats, with real-time breakdowns of active users, code acceptance rates, and model usage per team. Designed to help engineering leaders measure ROI and guide AI rollout decisions at scale.",
  },
  {
    title: "Language Breakdown Analysis",
    img: "/pbi-samples/language-breakdown-analysis.png",
    description:
      "A deep-dive analytical report surfacing Copilot's effectiveness per programming language — covering accepted prompts, suggestion rates, and line-level acceptance trends across 462 languages. Built to help teams identify where AI assistance delivers the most value and where adoption can be improved.",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function PBISamples() {
  const [[current, direction], setPage] = useState([0, 0]);
  const [zoomed, setZoomed] = useState(false);

  const paginate = (dir: number) => {
    setPage(([prev]) => {
      const next = (prev + dir + samples.length) % samples.length;
      return [next, dir];
    });
  };

  const s = samples[current];

  return (
    <section id="pbi-samples" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Featured Power BI Dashboards
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Carousel card */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-card/40">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col md:flex-row"
            >
              {/* Image — clickable to zoom */}
              <div className="relative md:w-2/3 bg-card/60 border-b md:border-b-0 md:border-r border-white/10 flex items-start justify-center p-3">
                <div
                  className="relative group cursor-zoom-in w-full"
                  onClick={() => setZoomed(true)}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const parent = (e.currentTarget as HTMLImageElement).parentElement?.parentElement;
                      if (parent) parent.classList.add("show-placeholder");
                    }}
                  />
                  {/* zoom hint overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-200 rounded">
                    <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
                  </div>
                </div>
                <div className="placeholder-overlay absolute inset-0 hidden items-center justify-center flex-col gap-3 text-muted-foreground/40">
                  <BarChart2 className="w-8 h-8" />
                  <span className="text-xs font-mono">Add image to public/pbi-samples/</span>
                </div>
              </div>

              {/* Details — side panel */}
              <div className="md:w-1/3 p-4 md:p-5 flex flex-col justify-center gap-3">
                <div>
                  <span className="text-xs font-mono text-primary/70 uppercase tracking-widest mb-2 block">Power BI Report</span>
                  <h3 className="font-bold text-base text-foreground leading-snug mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.description}</p>
                </div>
                <div className="text-xs font-mono text-muted-foreground/40 pt-2 border-t border-white/5">
                  {current + 1} / {samples.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-9 h-9 rounded-full bg-card border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 shadow-lg"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-9 h-9 rounded-full bg-card border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 shadow-lg"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {samples.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > current ? 1 : -1])}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setZoomed(false)}
          >
            <motion.img
              src={s.img}
              alt={s.title}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

