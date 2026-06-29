import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { StaggerGrid, AnimCard } from "@/components/ui/animate";

const certs = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    code: "PL-300",
    color: "#F2C811",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/FaustinoMelamar-1402/F36BF1AD52844B3C?sharingId=63E0F70F6947D5A5",
    badgeImg: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
  },
  {
    name: "Microsoft Certified: AI Fundamentals",
    code: "AI-900",
    color: "#00A4EF",
    url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/8a33cf26ddb37821",
    badgeImg: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    color: "#7FBA00",
    url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/e669fd00c030c13c",
    badgeImg: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    code: "DP-900",
    color: "#FFB900",
    url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/4c2a81bb29bc39d4",
    badgeImg: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
  },
  {
    name: "Fortinet NSE 2: Network Security Associate",
    code: "NSE 2",
    color: "#EE3124",
    url: "https://www.credly.com/badges/70f078c8-5c0e-4f68-840c-7b3c88982828/linked_in_profile",
    badgeImg: "https://images.credly.com/size/680x680/images/20082fc1-94af-4773-9df0-28856b566748/image.png",
  },
  {
    name: "Fortinet NSE 3: Network Security Associate",
    code: "NSE 3",
    color: "#EE3124",
    url: "https://www.credly.com/badges/e4d2c971-9c74-4d3e-a736-e7ecf4ac9966/linked_in_profile",
    badgeImg: "https://images.credly.com/size/680x680/images/22a0ece5-ff05-4594-8320-25e55e9ae203/image.png",
  },
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

      <StaggerGrid className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {certs.map((cert) => (
          <AnimCard
            key={cert.code}
            className="group relative flex flex-col items-center gap-2 p-3 rounded-lg border border-white/5 bg-gradient-to-br from-card/60 to-transparent hover:border-primary/25 overflow-hidden transition-colors"
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

            <div className="w-14 h-14 flex items-center justify-center">
              <img
                src={cert.badgeImg}
                alt={cert.name}
                className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full text-center">
              <div className="text-[10px] font-semibold text-foreground leading-snug line-clamp-2 mb-1">{cert.name}</div>
              <div
                className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded"
                style={{ backgroundColor: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}33` }}
              >
                {cert.code}
              </div>
            </div>

            <ExternalLink
              className="absolute top-1.5 right-1.5 w-2.5 h-2.5 opacity-20 group-hover:opacity-60 transition-opacity z-20"
              style={{ color: cert.color }}
            />
          </AnimCard>
        ))}
      </StaggerGrid>
    </section>
  );
}