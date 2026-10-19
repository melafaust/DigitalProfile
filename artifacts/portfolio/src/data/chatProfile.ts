import { profile } from "./profile";
import { experiences } from "./experience";
import { allProjects } from "./projects";
import { skills, CATEGORIES } from "./skills";
import { academicRecord, awards } from "./education";
import { certs } from "./certifications";

/* The chatbot's knowledge of Mela, built from the same data files that
   render the site and generate the resume, so all three stay in step.
   References are deliberately left out: their contact details are theirs. */
export function buildChatProfile(): string {
  const lines: string[] = [];
  const add = (...l: string[]) => lines.push(...l);

  add(
    "IDENTITY",
    `- Full name: ${profile.name} (goes by Mela)`,
    `- Roles: ${profile.roles.join(", ")}`,
    `- Location: ${profile.locationFull}`,
    `- Languages: ${profile.languages}`,
    `- Email: ${profile.email}`,
    `- Phone / Viber / WhatsApp: ${profile.phone}`,
    `- LinkedIn: ${profile.linkedin}`,
    "- Open to work: yes, open to new opportunities",
    "",
    "SUMMARY",
    profile.summary,
    "",
    "EXPERIENCE (most relevant first)",
  );
  for (const e of experiences) {
    add(`- ${e.role}${e.subtitle ? ` (${e.subtitle})` : ""} at ${e.company}, ${e.period}`);
    e.points.forEach((p) => add(`  • ${p}`));
  }

  add("", "PROJECTS");
  allProjects.forEach((p, i) => {
    add(`${i + 1}. ${p.title}: ${p.subtitle} (${p.org}, ${p.date})`, `   ${p.description}`);
    if (p.role) add(`   Role: ${p.role}`);
    p.points.forEach((pt) => add(`   - ${pt}`));
    add(`   Tech: ${p.tech.join(", ")}`);
  });

  add("", "TECHNICAL SKILLS");
  for (const cat of CATEGORIES.filter((c) => c !== "All")) {
    const names = skills.filter((s) => s.category === cat).map((s) => s.name);
    if (names.length) add(`- ${cat}: ${names.join(", ")}`);
  }

  add("", `CERTIFICATIONS (${certs.length} total, newest first)`);
  for (const c of certs) {
    add(
      `- ${c.name} (${c.code}), issued by ${c.issuer}, earned ${c.earned}` +
        (c.expires ? `, valid until ${c.expires}` : "") +
        (c.url ? `, verify: ${c.url}` : ""),
    );
  }

  add(
    "",
    "EDUCATION",
    `- ${academicRecord.degree}, ${academicRecord.school}, ${academicRecord.period}`,
    `  GPA ${academicRecord.gpa} | ${academicRecord.distinction} | ${academicRecord.scholar} (${academicRecord.scholarNote})`,
    "",
    "AWARDS & HONORS",
    "- Champion, FY26 Accenture Sustainability Hackathon (TagSight, Nov 2025)",
    ...awards.map((a) => `- ${a}`),
  );

  return lines.join("\n");
}
