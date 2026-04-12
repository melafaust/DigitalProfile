import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, TerminalSquare } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";

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
          Get in Touch
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimCard>
          <div className="bg-card/40 border border-white/5 rounded-lg p-8 h-full glow-box relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-4 font-mono text-foreground flex items-center gap-2">
              <TerminalSquare className="w-6 h-6 text-primary" />
              Send a Message
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

              <div className="flex items-center gap-4 p-4 rounded-md bg-white/5 border border-white/5">
                <div className="p-3 bg-secondary/10 rounded text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-muted-foreground mb-1">PHONE_NUMBER</div>
                  <div className="text-foreground font-mono text-sm md:text-base">0930 593 8658</div>
                  <div className="flex gap-2 mt-2">
                    {/* Viber */}
                    <a
                      href="viber://chat?number=%2B639305938658"
                      title="Viber"
                      className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#7360f2]/10 border border-[#7360f2]/20 text-[#7360f2] hover:bg-[#7360f2] hover:text-white transition-colors text-xs font-mono"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.97 2C6.44 2 2 6.26 2 11.55c0 2.77 1.2 5.27 3.13 7.07V22l3.07-1.58c.89.24 1.83.37 2.77.37 5.53 0 9.97-4.26 9.97-9.55C20.94 6.26 17.5 2 11.97 2zm1.07 12.86l-2.46-2.6-4.8 2.6 5.28-5.59 2.52 2.6 4.74-2.6-5.28 5.59z"/>
                      </svg>
                      Viber
                    </a>
                    {/* Telegram */}
                    <a
                      href="https://t.me/+639305938658"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Telegram"
                      className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#26a5e4]/10 border border-[#26a5e4]/20 text-[#26a5e4] hover:bg-[#26a5e4] hover:text-white transition-colors text-xs font-mono"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.53.26l.19-2.63 4.83-4.36c.21-.19-.05-.29-.32-.1L7.9 14.4l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.29.8z"/>
                      </svg>
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimCard>

        <AnimCard className="bg-card/20 border border-white/5 rounded-lg p-8 relative">
          <div className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Contact Form
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
        </AnimCard>
      </StaggerGrid>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center border-t border-white/5 pt-8"
      >
        <p className="text-xs font-mono text-muted-foreground">
          &copy; {new Date().getFullYear()} | MELAMAR FAUSTINO 
        </p>
      </motion.div>
    </section>
  );
}
