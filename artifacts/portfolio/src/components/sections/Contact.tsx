import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Get in Touch
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left panel — contact info */}
        <AnimCard>
          <div className="bg-gradient-to-br from-primary/20 via-card/50 to-secondary/10 border border-primary/25 dark:border-white/5 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none" />

            <h3 className="text-2xl font-bold mb-3 text-foreground flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              Send a Message
            </h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:melamarfaustino@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <div className="text-foreground text-sm font-medium">melamarfaustino@gmail.com</div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">Phone</div>
                  <div className="text-foreground text-sm font-medium mb-3">0930 593 8658</div>
                  <div className="flex flex-wrap gap-2">
                    {/* Viber */}
                    <a
                      href="viber://chat?number=%2B639305938658"
                      title="Viber"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#7360f2]/10 border border-[#7360f2]/20 text-[#7360f2] hover:bg-[#7360f2] hover:text-white transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
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
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#26a5e4]/10 border border-[#26a5e4]/20 text-[#26a5e4] hover:bg-[#26a5e4] hover:text-white transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.93.43l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.53.26l.19-2.63 4.83-4.36c.21-.19-.05-.29-.32-.1L7.9 14.4l-2.52-.79c-.55-.17-.56-.55.12-.81l9.85-3.8c.46-.17.86.11.29.8z"/>
                      </svg>
                      Telegram
                    </a>
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/639305938658"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] hover:bg-[#25d366] hover:text-white transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimCard>

        {/* Right panel — contact form */}
        <AnimCard className="bg-gradient-to-br from-secondary/15 via-card/40 to-primary/10 border border-secondary/25 dark:border-white/5 rounded-lg p-8 relative overflow-hidden">
          <h3 className="text-lg font-semibold text-foreground mb-6">Contact Form</h3>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Name</label>
              <input
                type="text"
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Email</label>
              <input
                type="email"
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Message</label>
              <textarea
                className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all h-32 resize-none placeholder:text-muted-foreground/40"
                placeholder="What would you like to say?"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
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
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Melamar Faustino
        </p>
      </motion.div>
    </section>
  );
}
