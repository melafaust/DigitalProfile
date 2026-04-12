import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/Chatbot";

const navLinks = [
  { href: "#about", label: "/ABOUT" },
  { href: "#skills", label: "/SKILLS" },
  { href: "#experience", label: "/EXPERIENCE" },
  { href: "#projects", label: "/PROJECTS" },
  { href: "#contact", label: "/CONTACT" },
];

export default function Home() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -400, y: -400 });
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  // cursor spotlight — desktop only
  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Cursor spotlight — dimmed, desktop only */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full hidden md:block"
        style={{
          width: 320,
          height: 320,
          left: cursor.x - 160,
          top: cursor.y - 160,
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.025) 0%, transparent 70%)",
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[9999] origin-left"
        style={{ scaleX }}
      />

      <div className="scanline" />
      
      {/* Fixed Navigation */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3 bg-background/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20" : "py-4 bg-background/60 backdrop-blur-md border-b border-white/5"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo / identity */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-bold tracking-widest text-primary/80 hover:text-primary transition-colors"
          >
            MF<span className="text-muted-foreground/50">.</span>PORTFOLIO
          </motion.a>

          {/* Desktop nav links */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1 font-mono text-sm"
          >
            {navLinks.map(({ href, label }, i) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                  className={`relative px-4 py-1.5 rounded transition-colors duration-200 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded bg-primary/10 border border-primary/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </motion.a>
              );
            })}
          </motion.nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="flex flex-col px-4 py-3 gap-1 font-mono text-sm">
                {navLinks.map(({ href, label }) => {
                  const id = href.slice(1);
                  const isActive = active === id;
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-3 py-2 rounded transition-colors ${isActive ? "text-primary bg-primary/10 border border-primary/20" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>

      <Chatbot />
    </main>
  );
}
