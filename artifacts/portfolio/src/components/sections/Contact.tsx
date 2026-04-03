import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, TerminalSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          <span className="text-primary">/</span>ESTABLISH_CONNECTION
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card/40 border border-white/5 rounded-lg p-8 h-full glow-box relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-4 font-mono text-foreground flex items-center gap-2">
              <TerminalSquare className="w-6 h-6 text-primary" />
              SYSTEM.COMMUNICATE
            </h3>
            <p className="text-muted-foreground mb-8">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:melamarfaustino@gmail.com" className="group flex items-center gap-4 p-4 rounded-md bg-white/5 border border-white/5 hover:border-primary/50 transition-all">
                <div className="p-3 bg-primary/10 rounded text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">EMAIL_ADDRESS</div>
                  <div className="text-foreground font-mono text-sm md:text-base">melamarfaustino@gmail.com</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a href="tel:09305938658" className="group flex items-center gap-4 p-4 rounded-md bg-white/5 border border-white/5 hover:border-secondary/50 transition-all">
                <div className="p-3 bg-secondary/10 rounded text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground mb-1">PHONE_NUMBER</div>
                  <div className="text-foreground font-mono text-sm md:text-base">0930 593 8658</div>
                </div>
                <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card/20 border border-white/5 rounded-lg p-8 relative"
        >
          <div className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            TRANSMISSION_FORM
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">IDENTIFIER</label>
              <input 
                type="text" 
                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">RETURN_ADDRESS</label>
              <input 
                type="email" 
                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-2">PAYLOAD</label>
              <textarea 
                className="w-full bg-background/50 border border-white/10 rounded-md px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all h-32 resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full py-4 bg-primary/20 text-primary border border-primary/50 font-mono font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-box"
            >
              TRANSMIT_DATA
            </button>
          </form>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center border-t border-white/5 pt-8"
      >
        <p className="text-xs font-mono text-muted-foreground">
          &copy; {new Date().getFullYear()} MELAMAR FAUSTINO. ALL SYSTEMS OPERATIONAL.
        </p>
      </motion.div>
    </section>
  );
}
