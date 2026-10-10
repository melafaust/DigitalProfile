export interface CertEntry {
  name: string;
  code: string;
  issuer: string;
  color: string;
  /** Scan of the actual certificate, served from /public/certs. */
  image: string;
  earned: string;
  expires?: string;
  /** Online verification link; when absent the card opens the certificate image. */
  url?: string;
}

/* Newest first. */
export const certs: CertEntry[] = [
  {
    name: "Claude Certified Associate - Foundations",
    code: "CCA-F",
    issuer: "Anthropic",
    color: "#D97757",
    image: "/certs/claude-associate-foundations.jpg",
    earned: "Oct 2026",
    expires: "Oct 2027",
    url: "https://www.credly.com/badges/057b8660-a0a4-4c33-85a5-da9b08e20118/linked_in_profile",
  },
  {
    name: "GitHub Foundations",
    code: "GH-900",
    issuer: "Microsoft · GitHub",
    color: "#8B949E",
    image: "/certs/github-foundations.jpg",
    earned: "Sep 2026",
    expires: "Sep 2028",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/FaustinoMelamar-1402/66A6F49D5EE32527",
  },
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    code: "PL-300",
    issuer: "Microsoft",
    color: "#F2C811",
    image: "/certs/pl-300.jpg",
    earned: "Jun 2026",
    expires: "Jun 2027",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/FaustinoMelamar-1402/F36BF1AD52844B3C?sharingId=63E0F70F6947D5A5",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    color: "#00A4EF",
    image: "/certs/ai-900.jpg",
    earned: "Nov 2025",
    url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/8a33cf26ddb37821",
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    color: "#FFB900",
    image: "/certs/dp-900.jpg",
    earned: "Jun 2025",
    url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/4c2a81bb29bc39d4",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft",
    color: "#7FBA00",
    image: "/certs/az-900.jpg",
    earned: "Sep 2024",
    url: "https://learn.microsoft.com/en-us/users/faustinomelamar-1402/credentials/e669fd00c030c13c",
  },
  {
    name: "Fortinet Certified Associate in Cybersecurity",
    code: "FCA",
    issuer: "Fortinet",
    color: "#EE3124",
    image: "/certs/fortinet-fca.jpg",
    earned: "Nov 2023",
    expires: "Nov 2025",
    url: "https://www.credly.com/badges/e4d2c971-9c74-4d3e-a736-e7ecf4ac9966/linked_in_profile",
  },
  {
    name: "Fortinet Certified Fundamentals in Cybersecurity",
    code: "FCF",
    issuer: "Fortinet",
    color: "#EE3124",
    image: "/certs/fortinet-fcf.jpg",
    earned: "Nov 2023",
    expires: "Nov 2025",
    url: "https://www.credly.com/badges/70f078c8-5c0e-4f68-840c-7b3c88982828/linked_in_profile",
  },
];
