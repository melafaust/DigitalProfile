import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Trash2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_VERSION = import.meta.env.VITE_AZURE_OPENAI_API_VERSION as string;

const SYSTEM_PROMPT = `You are an AI assistant embedded in Melamar Faustino's personal portfolio website. You speak on her behalf — knowledgeable, professional, and friendly. Answer any question about Mela accurately using the detailed profile below. Keep answers concise but helpful. If asked something genuinely unrelated to Mela or her field, politely redirect.

═══ MELAMAR FAUSTINO — FULL PROFILE ═══

IDENTITY
- Full name: Melamar Faustino
- Location: Fairview, Quezon City, Philippines
- Languages: English, Filipino
- Email: melamarfaustino@gmail.com
- Phone/Viber/WhatsApp: +63 930 593 8658
- Open to work: Yes — actively open to new opportunities

CURRENT ROLE
- Associate Software Engineer at Accenture (June 2024 – Present)
  • Full-Stack Engineer in an agile team delivering Azure-related software development and enhancements
  • Built multiple Power BI Dashboards adopted by leadership across multiple countries
  • Automated all-in-one tools that resolved repetitive task issues, achieving a 92% improvement in operational speed
  • Served as Subject Matter Expert (SME) guiding new team members across different products

PREVIOUS EXPERIENCE
- Assistant Engineer at Yokogawa Philippines, Inc. (November 2023 – April 2024)
  • Gained exposure to Distributed Control Systems using proprietary industrial software
  • Provided after-sales support through site dispatches
  • Managed documentation for Factory Acceptance Tests and system configurations
  • Delivered technical expertise including system installations, configurations, and troubleshooting

TECHNICAL SKILLS
- Cloud & Infrastructure: Azure DevOps, Azure Data Factory
- Data & Analytics: Microsoft Power BI, Data Analytics, Data Engineering, T-SQL, MySQL
- Automation & AI: Power Apps, Power Automate, Automation, Artificial Intelligence, LLM Integration (LLaMA 3.3 / Groq)
- Programming: Python, C++, Node.js
- Desktop Development: Electron
- Engineering Practices: API Testing, CI/CD, Version Control (Git)
- Methodologies: Agile Team Practices

PROJECTS
1. Mela Automations (Apr 2026 · Personal Project)
   - SE Platform Insights Automation Suite — a Windows desktop app (Electron + Node.js)
   - Bundles 4 AI-powered tools that automate Azure DevOps & Data Factory tasks
   - AI Assistant: LLaMA 3.3 via Groq — chat-driven, can launch tools and preview actions before running
   - ADO Suite: auto-scrapes ADF monitoring page, reads pipeline run parameters across 14 data types (eliminates manual copy-paste)
   - Reingestion Tool: bulk-sends collected params via API with live dashboard (success rate, error count, rows sent), retry logic, and one-click Microsoft Teams notifications
   - Alerts Monitor: detects failed ADF pipelines and posts rich alert cards to Teams with "Rerun Failed" button
   - Tech: Electron, Node.js, LLaMA 3.3 (Groq), Azure DevOps, Azure Data Factory, Teams Webhooks, PowerShell

2. TagSight (Nov 2025 · Accenture)
   - Visual Tag-Based People Accounting System for Emergency Evacuation
   - Uses ArUco markers + computer vision (Raspberry Pi + camera + Gen AI backend)
   - Real-time dashboard showing headcount during evacuations
   - WON CHAMPION at FY26 Accenture Sustainability Hackathon

3. Reverse Vending Machine (Jun 2023 · Pangasinan State University)
   - A machine that provides internet connectivity in exchange for inserted plastic bottles
   - Promotes recycling through connectivity incentives
   - Awarded Best in Thesis at PSU

EDUCATION
- Bachelor of Science in Computer Science
  Pangasinan State University – Main Campus
  June 2019 – August 2023
  GPA: 1.49 | Academic Distinction | DOST Scholar (merit scholarship for S&T excellence)

CERTIFICATIONS
- Microsoft AI Fundamentals (AI-900)
- Microsoft Azure Fundamentals (AZ-900)
- Microsoft Azure Data Fundamentals (DP-900)
- Fortinet Cybersecurity Fundamentals (NSE 2)
- Fortinet Cybersecurity Associate (NSE 3)

AWARDS & HONORS
- Champion – FY26 Accenture Sustainability Hackathon (TagSight, Nov 2025)
- Champion – Adhikalinisan Sustainability Pitching Competition
- Runner-Up – DICT Start-Up Challenge PH (2023)
- Best Student Research (2023)
- Best in Thesis (2023)

PERSONALITY / SUMMARY
Innovative Software Engineer with specialized expertise in Azure Data Services. Proven track record in optimizing business processes through development, testing, and automation. Grounded in a data-driven approach, leveraging Power BI and Azure Data Factory to deliver high-performance technical solutions. Passionate about AI, sustainability tech, and building impactful tools.
`;

async function sendToAzure(messages: Message[]): Promise<string> {
  // In production (GitHub Pages): VITE_CHAT_API_URL points to the Vercel serverless function.
  // In local dev: falls back to the Vite proxy at /api/azure-chat.
  const prodUrl = import.meta.env.VITE_CHAT_API_URL as string | undefined;
  const url = prodUrl ?? `/api/azure-chat?api-version=${API_VERSION}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 512,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("Azure API error:", response.status, err);
    throw new Error(`Azure API error ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Mela! Ask me anything about her skills, experience, or projects!" },
  ]);
  const INITIAL_MESSAGE: Message = { role: "assistant", content: "Hi! I'm Mela! Ask me anything about her skills, experience, or projects!" };
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setLoading(true);
    try {
      const reply = await sendToAzure(updated);
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Oops, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Chat bubble toggle */}
      <motion.button
        aria-label="Open AI chat"
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageSquare className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatwindow"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[9998] w-[340px] sm:w-[380px] max-h-[520px] flex flex-col rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-background/80">
              <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-mono text-sm font-semibold text-foreground leading-none">AI Assistant</p>
                <p className="font-mono text-[10px] text-primary/60 mt-0.5">Ask me about Mela's portfolio</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setMessages([INITIAL_MESSAGE])}
                  title="Clear chat"
                  className="text-muted-foreground/50 hover:text-red-400 transition-colors p-1 rounded"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] ${msg.role === "user" ? "bg-primary/20 border border-primary/30" : "bg-white/5 border border-white/10"}`}>
                    {msg.role === "user" ? <User className="w-3 h-3 text-primary" /> : <Bot className="w-3 h-3 text-muted-foreground" />}
                  </div>
                  <div
                    className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed font-sans whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-foreground/90 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10">
                    <Bot className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-bl-sm bg-white/5 border border-white/10">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/10 bg-background/60 flex items-end gap-2">
              <textarea
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask something…"
                disabled={loading}
                className="flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-white/8 transition-colors max-h-28 scrollbar-thin disabled:opacity-50"
                style={{ height: "auto", minHeight: "38px" }}
                onInput={e => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
                }}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
