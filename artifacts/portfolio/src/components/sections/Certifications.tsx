import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";

// Microsoft logo SVG
const MicrosoftLogo = () => (
  <svg viewBox="0 0 21 21" className="w-5 h-5 shrink-0" fill="none">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

// Fortinet logo SVG
const FortinetLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
    <path d="M12 2L3 6.5V12c0 4.418 3.582 8.48 9 9.95C17.418 20.48 21 16.418 21 12V6.5L12 2zm0 2.236l7 3.5V12c0 3.5-2.8 6.72-7 8.07C7.8 18.72 5 15.5 5 12V7.736l7-3.5z"/>
    <path d="M10 8v3H7v2h3v3h2v-3h3v-2h-3V8h-2z"/>
  </svg>
);

const certs = [
  { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", code: "PL-300", vendor: "microsoft", color: "#F2C811", url: "https://learn.microsoft.com/api/credentials/share/en-us/FaustinoMelamar-1402/F36BF1AD52844B3C?sharingId=63E0F70F6947D5A5", featured: true },
  { name: "Microsoft Certified: AI Fundamentals (AI-900)", code: "AI-900", vendor: "microsoft", color: "#00A4EF", url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/8a33cf26ddb37821", featured: false },
  { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", code: "AZ-900", vendor: "microsoft", color: "#7FBA00", url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/e669fd00c030c13c", featured: false },
  { name: "Microsoft Certified: Azure Data Fundamentals (DP-900)", code: "DP-900", vendor: "microsoft", color: "#FFB900", url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/4c2a81bb29bc39d4", featured: false },
  { name: "Fortinet NSE 2: Cybersecurity Fundamentals", code: "NSE 2", vendor: "fortinet", color: "#EE3124", url: "https://www.credly.com/badges/70f078c8-5c0e-4f68-840c-7b3c88982828/linked_in_profile", featured: false },
  { name: "Fortinet NSE 3: Cybersecurity Associate", code: "NSE 3", vendor: "fortinet", color: "#EE3124", url: "https://www.credly.com/badges/e4d2c971-9c74-4d3e-a736-e7ecf4ac9966/linked_in_profile", featured: false },
];

export default function Certifications() {
  return (
    <section id="education" className="relative scroll-m-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground">
          Certifications
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert) => (
          <AnimCard
            key={cert.code}
            className={`group relative flex items-center gap-4 p-4 rounded-lg overflow-hidden transition-colors ${
              cert.featured
                ? "sm:col-span-2 lg:col-span-3 border-2 bg-gradient-to-br from-card/80 to-transparent hover:border-opacity-80"
                : "border border-white/5 bg-gradient-to-br from-card/60 to-transparent hover:border-primary/25"
            }`}
            style={cert.featured ? { borderColor: `${cert.color}66` } : undefined}
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`View ${cert.name} credential`}
            />
            <div
              className="absolute left-0 top-0 h-full w-[3px] rounded-l-lg opacity-80"
              style={{ backgroundColor: cert.color }}
            />

            <div
              className={`p-2 rounded-md shrink-0 ${cert.featured ? "p-3" : ""}`}
              style={{ backgroundColor: `${cert.color}18`, color: cert.color }}
            >
              {cert.vendor === "microsoft" ? <MicrosoftLogo /> : <FortinetLogo />}
            </div>

            <div className="min-w-0 flex-1">
              <div className={`font-semibold text-foreground leading-snug ${cert.featured ? "text-base" : "text-sm"}`}>{cert.name}</div>
              <div className="mt-1 flex items-center gap-2 flex-wrap">
                <div
                  className="inline-block text-xs font-mono px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}33` }}
                >
                  {cert.code}
                </div>
              </div>
            </div>

            <ExternalLink
              className="w-4 h-4 shrink-0 opacity-30 group-hover:opacity-70 transition-opacity relative z-20"
              style={{ color: cert.color }}
            />
          </AnimCard>
        ))}
      </StaggerGrid>
    </section>
  );
}