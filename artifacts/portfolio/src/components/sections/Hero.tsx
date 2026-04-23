import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Database, Code2, ArrowRight, Linkedin } from "lucide-react";
import avatarImg from "/avatar.png";
import { useIsMobile } from "@/hooks/use-mobile";

const roles = [
  { label: "Software Engineer", Icon: Code2 },
  { label: "Data & AI Specialist", Icon: Database },
  { label: "Power BI Developer", Icon: Terminal },
];

// Precompute elliptical orbit keyframes
function getOrbitKeyframes(rx: number, ry: number, angleDeg: number, steps = 72) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const x: number[] = [];
  const y: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * 2 * Math.PI;
    const ex = rx * Math.cos(t);
    const ey = ry * Math.sin(t);
    x.push(ex * cos - ey * sin);
    y.push(ex * sin + ey * cos);
  }
  return { x, y, times: x.map((_, i) => i / steps) };
}

const ORBITS = [
  { id: 1, rx: 180, ry: 72, angle: 0,   duration: 4, strokeColor: "hsl(var(--primary))",   strokeOpacity: 0.35, colorClass: "bg-primary shadow-[0_0_12px_hsl(var(--primary))]"    },
  { id: 2, rx: 180, ry: 72, angle: 60,  duration: 6, strokeColor: "hsl(var(--secondary))", strokeOpacity: 0.3,  colorClass: "bg-secondary shadow-[0_0_12px_hsl(var(--secondary))]" },
  { id: 3, rx: 180, ry: 72, angle: -60, duration: 9, strokeColor: "hsl(var(--primary))",   strokeOpacity: 0.25, colorClass: "bg-primary shadow-[0_0_10px_hsl(var(--primary))]"     },
];

// Desktop: 72 steps (smooth). Mobile: 24 steps (lighter).
const ORBIT_KF_DESKTOP = ORBITS.map(({ rx, ry, angle }) => getOrbitKeyframes(rx, ry, angle, 72));
const ORBIT_KF_MOBILE  = ORBITS.map(({ rx, ry, angle }) => getOrbitKeyframes(rx, ry, angle, 24));

const PARTICLES = [
  { id: 0, left: 8,  top: 18, size: 2, dur: 8,  del: 0   },
  { id: 1, left: 82, top: 28, size: 3, dur: 11, del: 1.5 },
  { id: 2, left: 23, top: 62, size: 2, dur: 7,  del: 0.5 },
  { id: 3, left: 67, top: 44, size: 4, dur: 13, del: 2   },
  { id: 4, left: 44, top: 80, size: 2, dur: 9,  del: 0.8 },
  { id: 5, left: 12, top: 40, size: 3, dur: 10, del: 1.2 },
  { id: 6, left: 78, top: 72, size: 2, dur: 8,  del: 0.3 },
  { id: 7, left: 35, top: 15, size: 3, dur: 12, del: 1.8 },
  { id: 8, left: 58, top: 55, size: 2, dur: 7,  del: 0.6 },
  { id: 9, left: 90, top: 85, size: 3, dur: 9,  del: 2.2 },
  { id: 10, left: 3, top: 70, size: 2, dur: 11, del: 1   },
  { id: 11, left: 50, top: 8,  size: 3, dur: 8,  del: 0.4 },
];

const FLOAT_TAGS = [
  { label: "Azure",    angle: -90  },
  { label: "Python",   angle: -18  },
  { label: "Power BI", angle:  54  },
  { label: "AI / ML",  angle: 126  },
  { label: "SQL",      angle: 198  },
];

export default function Hero() {
  const isMobile = useIsMobile();
  const [roleIdx, setRoleIdx] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 });
  const rotateY = useTransform(springX, [-200, 200], [-8, 8]);
  const rotateX = useTransform(springY, [-200, 200], [6, -6]);

  // Use lighter keyframes on mobile
  const ORBIT_KF = isMobile ? ORBIT_KF_MOBILE : ORBIT_KF_DESKTOP;

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return; // no tilt on touch
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  };

  return (
    <section
      className="relative min-h-[88vh] flex flex-col justify-center"
      id="hero"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background blobs — static on mobile to save CPU */}
      <motion.div
        animate={isMobile ? false : { x: [0, 25, 0], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={isMobile ? false : { x: [0, -18, 0], y: [0, 25, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/12 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={isMobile ? false : { x: [0, 12, 0], y: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 left-1/3 w-72 h-72 bg-primary/8 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Floating particles — hidden on mobile */}
      {!isMobile && PARTICLES.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 pointer-events-none"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -28, 0], opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.del }}
        />
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Text content ── */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">

          {/* Name — character stagger */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <div className="overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.25,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className="inline-flex items-baseline gap-3"
              >
                <span className="text-foreground">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-secondary">Mela</span>
              </motion.span>
            </div>
          </h1>

          {/* Role ticker */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="h-9 flex items-center justify-center lg:justify-start overflow-hidden"
          >

            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-base text-muted-foreground flex items-center gap-2"
              >
                {(() => { const { Icon } = roles[roleIdx]; return <Icon className="w-4 h-4 text-secondary" />; })()}
                {roles[roleIdx].label}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-base sm:text-lg max-w-xl leading-relaxed text-muted-foreground/80 mx-auto lg:mx-0"
          >
            Innovating with AI. Empowering with Power BI.<br />
            Turning complex challenges into clear, actionable insight.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.15 }}
            className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-mono font-bold text-sm rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.5)] transition-shadow duration-300"
            >
              GET IN TOUCH
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 border border-primary/30 text-primary font-mono font-bold text-sm rounded-lg hover:bg-primary/8 hover:border-primary/60 transition-all duration-300"
            >
              VIEW WORK
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/melamar-faustino-078b1b180/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center w-11 h-11 border border-[#0a66c2]/40 text-[#0a66c2] rounded-lg hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* ── Electron orbital display ── */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          {isMobile ? (
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-visible">
              {/* Orbital ring SVG */}
              <svg
                viewBox="-195 -195 390 390"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none"
                width="390"
                height="390"
              >
                <defs>
                  <filter id="eglow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </feMerge>
                </filter>
                </defs>
                {/* Nucleus glow ring */}
                <circle cx="0" cy="0" r="112" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1.5" />
                {/* Orbital rings */}
                {ORBITS.map(({ id, rx, ry, angle, strokeColor, strokeOpacity }) => (
                  <ellipse
                    key={id}
                    cx="0"
                    cy="0"
                    rx={rx}
                    ry={ry}
                    fill="none"
                    stroke={strokeColor}
                    strokeOpacity={strokeOpacity}
                    strokeWidth="1"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </svg>

              {/* Static electron dots for mobile */}
              {ORBITS.map(({ id, duration, colorClass }, idx) => {
                const kf = ORBIT_KF[idx];
                const staticIndex = Math.floor(kf.x.length / 4) || 0;
                const sx = kf.x[staticIndex] ?? 0;
                const sy = kf.y[staticIndex] ?? 0;
                return (
                  <div
                    key={id}
                    className={`absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full pointer-events-none ${colorClass}`}
                    style={{ transform: `translate(${sx}px, ${sy}px)` }}
                  />
                );
              })}

              {/* Central circular photo — static on mobile */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary" />
                <div className="absolute inset-[3px] rounded-full bg-background" />
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <img
                    src={avatarImg}
                    alt="Melamar Faustino"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                  />
                </div>
              </div>
            </div>
          ) : (
            <motion.div style={{ rotateX, rotateY, transformPerspective: 1200 }} className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 overflow-visible">
              {/* Orbital ring SVG */}
              <svg
                viewBox="-195 -195 390 390"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none"
                width="390"
                height="390"
              >
                <defs>
                  <filter id="eglow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </feMerge>
                </filter>
                </defs>
                {/* Nucleus glow ring */}
                <circle cx="0" cy="0" r="112" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1.5" />
                {/* Orbital rings */}
                {ORBITS.map(({ id, rx, ry, angle, strokeColor, strokeOpacity }) => (
                  <ellipse
                    key={id}
                    cx="0"
                    cy="0"
                    rx={rx}
                    ry={ry}
                    fill="none"
                    stroke={strokeColor}
                    strokeOpacity={strokeOpacity}
                    strokeWidth="1"
                    transform={`rotate(${angle})`}
                  />
                ))}
              </svg>

              {/* Animated electron dots */}
              {ORBITS.map(({ id, duration, colorClass }, idx) => {
                const kf = ORBIT_KF[idx];
                const dur = duration;
                return (
                  <motion.div
                    key={id}
                    className={`absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full pointer-events-none ${colorClass}`}
                    animate={{ x: kf.x, y: kf.y }}
                    transition={{ duration: dur, repeat: Infinity, ease: "linear", times: kf.times }}
                  />
                );
              })}

              {/* Central circular photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, type: "spring", bounce: 0.3 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
              >
                {/* Pulsing gradient border */}
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary"
                />
                <div className="absolute inset-[3px] rounded-full bg-background" />
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  <img
                    src={avatarImg}
                    alt="Melamar Faustino"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                  />
                </div>
              </motion.div>

              {/* Floating skill tags — only visible at md+ where there's room */}
              <div className="hidden md:contents">
                {FLOAT_TAGS.map(({ label, angle }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 195;
                  const x = Math.round(Math.cos(rad) * r);
                  const y = Math.round(Math.sin(rad) * r);
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + i * 0.12, type: "spring", bounce: 0.5 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ translateX: x, translateY: y }}
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        className="px-3 py-1 rounded-full bg-card/90 border border-primary/25 text-xs font-mono text-primary backdrop-blur-sm shadow-lg whitespace-nowrap"
                      >
                        {label}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
