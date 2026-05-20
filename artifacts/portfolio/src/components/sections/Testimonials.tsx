import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  // ── Top 5 (fixed order) ─────────────────────────────────────────────────────
  {
    name: "B***y C**z",
    role: "Technology Architect Senior Manager",
    feedback: `Mela has done many for this year that made her to be one of the valuable members of the team. She has taken steps to be able to deliver medium to complex requirements and has pushed further by taking some adhoc activities like Hackathon. Mela has been proactive on her career and I'm happy that she took the challenges well.\n\nMela can be more active in every discussion on the team especially in designing and planning out strategies. She can further push to gain more visibility by proactively participating in many activities where she can learn more and enjoy aligning with her passion. Start taking a sub-lead role so not only as an engineer but also start leading the team and take charge of shaping the different requirements to a better value.`,
  },
  {
    name: "A***o P***o",
    role: "Scrum Master Associate Manager",
    feedback: `Well:\nYou are already operating at a level beyond your current role. Your technical contributions consistently drive outcomes across sprints—not just by delivering high-quality solutions, but by shaping technical direction, unblocking complex challenges, and raising the overall engineering bar. Teams rely on your judgment for critical decisions, and your ability to translate complexity into clear, actionable guidance enables faster, more confident delivery. Your impact extends beyond your own work and is felt across the broader team.\n\nBetter:\nAt this stage, growth is less about execution and more about intentional influence. There is an opportunity to further elevate your presence by more explicitly framing technical decisions in terms of business impact, risk, and long-term sustainability, especially in cross-team or stakeholder discussions. Making these connections visible will help others more clearly see the strategic value you already provide.\n\nNext:\nAs a next step, continue to scale your impact through people and systems. This includes mentoring emerging members, codifying best practices, and proactively driving architectural or platform-level improvements. Lean into opportunities where you can represent the team technically, set direction early, and influence outcomes at a broader scope. You are well-positioned for expanded responsibility, and these actions will further reinforce your readiness for the next level.`,
  },
  {
    name: "S**n S*a",
    role: "Developer Lead",
    feedback: `Mela has demonstrated strong technical capability and initiative through her development work and the automation solutions she has implemented. Her contributions have significantly reduced the team's manual effort, allowing focus on higher-value tasks. She consistently identifies opportunities for improvement and delivers practical solutions that have a measurable impact on team efficiency. Mela has also completed multiple certifications, further strengthening her technical skills.\n\nShe communicates effectively, asks questions when clarification is needed, and adapts quickly to new tasks. To further enhance her impact, she could continue deepening her understanding of the team's end-to-end system processes, code, and scripting, while optimizing her automation for scalability, maintainability, and performance. Additionally, enhancing her debugging skills will further improve her ability to troubleshoot and resolve issues efficiently. I encourage her to continue her eagerness to learn, apply insights from her certifications to day-to-day tasks, and explore opportunities to integrate automations with Gen AI where possible.`,
  },
  {
    name: "A***o L***s",
    role: "Hackathon Team Lead",
    feedback: `Mela was a key contributor to our hackathon team that emerged as Champion in Q1 FY26.2. Her primary contribution was on the development side, particularly in implementing the camera-based detection of ArUco codes, which played an important role in the overall solution.\n\nShe is a reliable and collaborative teammate who works effectively with minimal supervision. When given clear direction, she consistently executes tasks thoroughly and often goes beyond expectations by introducing additional improvements that benefit the team as a whole.\n\nMela demonstrates strong technical capability and ownership. She is proactive, dependable, and contributes positively to team momentum, especially during development-intensive phases.\n\nFor growth, the main area to focus on is maintaining composure during crunch time. Her technical skill level is already operating at an advanced level, and with improved confidence and calm under pressure, she can perform even more effectively. She is notably more capable than she often gives herself credit for. Thank you Mela!`,
  },
  {
    name: "M***n E***e",
    role: "Technology Lead",
    feedback: `Melamar has demonstrated significant growth this year, particularly in managing medium to complex requirements. Her technical development and willingness to step up when needed have been commendable. A notable achievement was her initiative in creating an automation solution that substantially reduced manual work for the test team, showcasing her ability to contribute meaningfully to team efficiency.\n\nShe exhibits a strong drive for continuous improvement, as evidenced by her participation in the Hackathon alongside her regular responsibilities. This proactive attitude is a valuable asset. Moving forward, there is an opportunity for Melamar to engage more actively in team discussions during design and planning phases. Sharing her insights more frequently would enhance team collaboration and decision-making.\n\nAdditionally, consistently applying feedback from senior colleagues and broadening her understanding of the overall product landscape will support her development into a more strategic contributor. With these areas of focus, Melamar is well-positioned to take on greater ownership and continue making impactful contributions to the team.`,
  },
  // ── Rest ────────────────────────────────────────────────────────────────────
  {
    name: "L***a T***o",
    role: "Developer, Teammate",
    feedback: `Mela has consistently demonstrated exceptional technical capability and teamwork throughout our collaboration. She developed a re-ingestion tool that significantly streamlined our rerun process and created an automation script that greatly improved the speed and efficiency of parameter retrieval. She has been incredibly supportive in guiding me through unfamiliar issues and processes, always offering clear explanations and practical solutions.\n\nBeyond her technical contributions, Mela is a cheerful, positive, and dependable team player who consistently uplifts and supports the entire team. She also went above and beyond by sharing her reviewer materials to help us prepare for our certification exams, which contributed greatly to our readiness and confidence.\n\nOverall, Mela exhibits strong senior-level qualities—her problem-solving skills, initiative, and output quality reflect the capability and mindset of a seasoned developer.`,
  },
  {
    name: "C***e E***a",
    role: "QA Tester",
    feedback: `I would like to commend her for her continuous growth and strong initiative. She consistently takes action on high-priority items and demonstrates a clear understanding of her responsibilities and deliverables.\n\nMela shows confidence in her work and ownership of her tasks. She is proactive, reliable, and always ensures that priority items are addressed on time. I truly appreciate how she steps up to take on complex user stories without hesitation and handles them with accountability and focus.\n\nIn addition, she is very supportive of other team members, especially new developers who may need guidance. She is always willing to extend help when needed to ensure that the team meets our commitments and completes all tasks within the timeline.\n\nOverall, Mela is a dependable team player who contributes positively to both delivery and team collaboration.`,
  },
  {
    name: "A***a B***a",
    role: "Developer, Teammate",
    feedback: `Mela is very helpful and consistently proactive in finding ways to support the team. She takes initiative beyond her assigned tasks and actively looks for opportunities to improve our processes. Her work in automating the collection of parameters for reruns and enabling faster ingestion significantly reduced manual effort and improved overall efficiency.\n\nIn addition, she is collaborative, responsive, and always willing to assist others, making her a reliable team member who positively contributes to both team productivity and continuous improvement. Keep up the good work!`,
  },
  {
    name: "G***l B***r",
    role: "Developer, Teammate",
    feedback: `Mela has had a significant positive impact on my growth within the team. Ever since I first joined, she has consistently guided me through different processes and was always willing to help whenever I was unfamiliar with a task. Her support made it easier for me to adapt and become more confident in my role.\n\nIn addition, the automation she created for re-ingestion in the builds environment has been extremely valuable. It greatly improved efficiency and collaboration within the team, especially since builds involve large volumes of data. Her initiative and willingness to share her work demonstrate strong teamwork and a collaborative mindset.`,
  },
  {
    name: "D***a S**a",
    role: "Test Lead",
    feedback: `Impact:\nYour automation for monitoring has been a huge help to the team! One idea to make it even better could be automating the opening of each failed run in ADF—this would save time and make retrieving parameters quicker.\n\nGrowth:\nI really appreciate how eager you are to learn more about the project and support teammates, especially with their ingestion tasks. Taking on some more complex challenges could also be a great way to showcase your senior-level knowledge.\n\nCollaboration:\nYour quick responses to questions from the test team are awesome, and I really like how open and teachable you've become. Keeping that up will make working together even smoother.`,
  },
  {
    name: "A***a J***a",
    role: "Product Owner, Team Lead",
    feedback: `Mela is highly goal-oriented, which provides her direction and motivation in work. To further enhance her impact, she should continue developing her openness to feedback and guidance from senior team members, ensuring their advice, updates and shared best practices are consistently reflected in her approach.\n\nMela should also consider expanding her knowledge on the team's broader products and processes, beyond what she usually handles. This can allow her to contribute more strategically and add value beyond her immediate scope. Continuing to build consistency in balancing Insights team responsibilities with additional initiatives will help her maintain steady performance while confidently taking on new opportunities in a sustainable way.`,
  },
  {
    name: "R***l A***e",
    role: "DevSecOps Partner",
    feedback: `I've had the privilege of working with Mela through the CIO DevSecOps Capability, especially during the certification learning sessions, and I must say it has been such a positive experience. What really stands out about Mela is how proactive she is—she doesn't just wait for direction, but actively seeks clarity by asking thoughtful questions to ensure everything is delivered in the best possible way.\n\nBeyond that, she goes above and beyond by stepping up to present when needed, which shows both her confidence and her generosity in sharing knowledge. I truly appreciate her dependability! Whenever support is needed, she responds quickly and with so much enthusiasm.\n\nThank you, Mela, for the dedication and enthusiasm you bring to the team. I really look forward to working with you more and presenting on learning activities—you have so many things to offer with the skills that you have. Kudos!`,
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function Testimonials() {
  const [[current, direction], setPage] = useState([0, 0]);

  const paginate = (dir: number) => {
    setPage(([prev]) => {
      const next = (prev + dir + testimonials.length) % testimonials.length;
      return [next, dir];
    });
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Peer Testimonials
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
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
              className="p-6 md:p-8 flex flex-col gap-5"
            >
              {/* Decorative quote icon */}
              <Quote className="w-9 h-9 text-primary/30 shrink-0" />

              {/* Feedback text */}
              <div className="max-h-64 overflow-y-auto pr-1 text-muted-foreground text-sm leading-relaxed whitespace-pre-line scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {t.feedback}
              </div>

              {/* Divider + meta */}
              <div className="border-t border-white/10 pt-4 flex items-end justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono font-semibold text-foreground text-sm tracking-wide">
                    {t.name}
                  </span>
                  <span className="text-xs text-primary/70 font-mono">{t.role}</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground/30 shrink-0">
                  {current + 1} / {testimonials.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev button */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-9 h-9 rounded-full bg-card border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Next button */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-9 h-9 rounded-full bg-card border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-200 shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5 flex-wrap">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > current ? 1 : -1])}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-primary" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
