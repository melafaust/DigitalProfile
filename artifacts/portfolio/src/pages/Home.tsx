import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="scanline" />
      
      {/* Fixed Navigation/Branding */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary font-bold text-lg tracking-widest"
        >
          MF_SYS_V1.0
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6 font-mono text-sm text-muted-foreground"
        >
          <a href="#about" className="hover:text-primary transition-colors">/ABOUT</a>
          <a href="#skills" className="hover:text-primary transition-colors">/SKILLS</a>
          <a href="#experience" className="hover:text-primary transition-colors">/EXPERIENCE</a>
          <a href="#projects" className="hover:text-primary transition-colors">/PROJECTS</a>
          <a href="#contact" className="hover:text-primary transition-colors">/CONTACT</a>
        </motion.nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
