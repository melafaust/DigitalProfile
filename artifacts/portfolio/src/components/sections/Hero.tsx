import { motion } from "framer-motion";
import { Terminal, Database, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center" id="hero">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            SYSTEM_ONLINE
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Melamar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text">
              Faustino
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 text-lg text-muted-foreground font-mono"
          >
            <span className="flex items-center gap-2"><Code2 className="w-5 h-5 text-primary" /> Software Engineer</span>
            <span className="flex items-center gap-2"><Database className="w-5 h-5 text-secondary" /> Data & AI Specialist</span>
            <span className="flex items-center gap-2"><Terminal className="w-5 h-5 text-primary" /> Power BI SME</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg max-w-xl leading-relaxed text-muted-foreground/80"
          >
            Building high-performance data pipelines and intelligent automated systems. Transforming raw data into actionable insights and operational excellence.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-mono font-bold rounded-none hover:bg-primary/90 transition-colors glow-box flex items-center gap-2">
              INITIATE_PROJECTS
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border border-white/20 text-foreground font-mono font-bold hover:bg-white/5 transition-colors">
              PING_ME
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto lg:ml-auto w-64 h-64 md:w-80 md:h-80"
        >
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite] border-t-primary" />
          <div className="absolute inset-4 border-2 border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse] border-b-secondary" />
          <div className="absolute inset-8 rounded-full overflow-hidden bg-muted p-1 glow-box">
            <img 
              src="/avatar.png" 
              alt="Melamar Faustino" 
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
