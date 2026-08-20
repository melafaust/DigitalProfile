import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { Document, Page, Text, View, StyleSheet, Font, renderToBuffer } from "@react-pdf/renderer";

import { profile, references } from "../src/data/profile";
import { skills } from "../src/data/skills";
import { experiences } from "../src/data/experience";
import { allProjects, type ProjectEntry } from "../src/data/projects";
import { academicRecord, awards } from "../src/data/education";
import { certs } from "../src/data/certifications";

Font.registerHyphenationCallback((word) => [word]);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.resolve(__dirname, "fonts");

Font.register({
  family: "Bricolage Grotesque",
  fonts: [
    { src: path.join(fontsDir, "Bricolage-Bold.ttf"), fontWeight: 700 },
    { src: path.join(fontsDir, "Bricolage-ExtraBold.ttf"), fontWeight: 800 },
  ],
});

Font.register({
  family: "Work Sans",
  fonts: [
    { src: path.join(fontsDir, "WorkSans-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "WorkSans-Medium.ttf"), fontWeight: 500 },
    { src: path.join(fontsDir, "WorkSans-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontsDir, "WorkSans-Bold.ttf"), fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingHorizontal: 32,
    fontSize: 8.1,
    fontFamily: "Work Sans",
    fontWeight: 400,
    color: "#111111",
    lineHeight: 1.1,
  },
  name: {
    fontSize: 15,
    fontFamily: "Bricolage Grotesque",
    fontWeight: 800,
    textAlign: "center",
    letterSpacing: 0.5,
    lineHeight: 1,
  },
  headline: {
    fontSize: 8.3,
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
    textAlign: "center",
    marginTop: 3,
    letterSpacing: 0.3,
    lineHeight: 1,
  },
  contactRow: {
    fontSize: 7.8,
    textAlign: "center",
    marginTop: 3,
    paddingVertical: 2,
    borderTopWidth: 0.75,
    borderBottomWidth: 0.75,
    borderColor: "#7b7b7b",
    color: "#2f2f2f",
  },
  summary: {
    fontSize: 8.3,
    marginTop: 4,
    textAlign: "justify",
  },
  section: {
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 8.3,
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.3,
    borderBottomWidth: 0.75,
    borderColor: "#7b7b7b",
    paddingBottom: 1.5,
  },
  skillGrid: {
    marginTop: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    width: "33.33%",
    fontSize: 7.8,
    marginBottom: 0.5,
  },
  entry: {
    marginTop: 1.25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  rowTitle: {
    fontSize: 8.3,
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
  },
  rowDate: {
    fontSize: 8.3,
    fontFamily: "Bricolage Grotesque",
    fontWeight: 700,
  },
  sub: {
    fontSize: 7.8,
    color: "#2f2f2f",
    marginTop: 0.5,
  },
  bullet: {
    flexDirection: "row",
    fontSize: 7.8,
    marginTop: 0.2,
  },
  bulletDot: {
    width: 8,
  },
  bulletText: {
    flex: 1,
  },
  extraLine: {
    fontSize: 7.8,
    marginTop: 1,
  },
  extraLabel: {
    fontFamily: "Work Sans",
    fontWeight: 600,
  },
});

function Bullet({ text }: { text: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>-</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

interface ResumeProject {
  title: string;
  org: string;
  date: string;
  tech: string[];
  points: string[];
}

function buildResumeProjects(projects: ProjectEntry[]): ResumeProject[] {
  const grouped = new Map<string, ProjectEntry[]>();
  const standalone: ProjectEntry[] = [];

  for (const project of projects) {
    if (!project.resume) continue;
    if (project.resumeGroup) {
      const bucket = grouped.get(project.resumeGroup) ?? [];
      bucket.push(project);
      grouped.set(project.resumeGroup, bucket);
    } else {
      standalone.push(project);
    }
  }

  const merged: ResumeProject[] = [];
  for (const [groupName, items] of grouped) {
    merged.push({
      title: groupName,
      org: items[0].org,
      date: items[0].date,
      tech: Array.from(new Set(items.flatMap((i) => i.tech))).slice(0, 6),
      points: items.flatMap((i) => i.points.slice(0, 2)).slice(0, 3),
    });
  }
  for (const project of standalone) {
    merged.push({
      title: project.title,
      org: project.org,
      date: project.date,
      tech: project.tech.slice(0, 6),
      points: project.points.slice(0, 3),
    });
  }

  return merged;
}

function ResumeDocument() {
  const resumeSkills = skills.filter((s) => s.resume);
  const resumeProjects = buildResumeProjects(allProjects);
  const linkedinHandle = profile.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <Document title={`${profile.name} - Resume`} author={profile.name}>
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{profile.name.toUpperCase()}</Text>
        <Text style={styles.headline}>{profile.roles.join(" | ").toUpperCase()}</Text>
        <Text style={styles.contactRow}>
          {profile.locationFull}  |  {profile.phone}  |  {profile.email}  |  {linkedinHandle}
        </Text>
        <Text style={styles.summary}>{profile.summary}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills &amp; Expertise</Text>
          <View style={styles.skillGrid}>
            {resumeSkills.map((skill) => (
              <Text key={skill.name} style={styles.skillItem}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experiences.map((exp) => (
            <View key={`${exp.company}-${exp.role}`} style={styles.entry} wrap={false}>
              <View style={styles.row}>
                <Text style={styles.rowTitle}>
                  {exp.role} - {exp.company}
                </Text>
                <Text style={styles.rowDate}>{exp.period}</Text>
              </View>
              {exp.points.map((point) => (
                <Bullet key={point} text={point} />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {resumeProjects.map((project) => (
            <View key={project.title} style={styles.entry} wrap={false}>
              <View style={styles.row}>
                <Text style={styles.rowTitle}>{project.title}</Text>
                <Text style={styles.rowDate}>{project.date}</Text>
              </View>
              <Text style={styles.sub}>
                {project.org} | Tech: {project.tech.join(", ")}
              </Text>
              {project.points.map((point) => (
                <Bullet key={point} text={point} />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.entry}>
            <View style={styles.row}>
              <Text style={styles.rowTitle}>{academicRecord.degree}</Text>
              <Text style={styles.rowDate}>{academicRecord.period}</Text>
            </View>
            <Text style={styles.sub}>{academicRecord.school}</Text>
            <Bullet
              text={`GPA: ${academicRecord.gpa} | ${academicRecord.distinction} | ${academicRecord.scholar}`}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          <Text style={styles.extraLine}>
            <Text style={styles.extraLabel}>Languages: </Text>
            {profile.languages}.
          </Text>
          <Text style={styles.extraLine}>
            <Text style={styles.extraLabel}>Certifications: </Text>
            {certs.map((c) => `${c.name} (${c.code})`).join(", ")}.
          </Text>
          <Text style={styles.extraLine}>
            <Text style={styles.extraLabel}>Awards: </Text>
            {awards.join(", ")}.
          </Text>
          <Text style={styles.extraLine}>
            <Text style={styles.extraLabel}>References: </Text>
            {references
              .map((r) => `${r.name} - ${r.title}, ${r.company} - ${r.phone}`)
              .join("  |  ")}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

/** The resume is a strict one-pager; the build fails rather than ship page 2. */
const PAGE_LIMIT = 1;

function countPages(buffer: Buffer): number {
  const raw = buffer.toString("latin1");
  const pagesNode = raw.match(/\/Type\s*\/Pages[\s\S]{0,400}?\/Count\s+(\d+)/);
  if (pagesNode) return Number(pagesNode[1]);
  return (raw.match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
}

async function main() {
  const buffer = await renderToBuffer(<ResumeDocument />);
  const pages = countPages(buffer);

  if (pages > PAGE_LIMIT) {
    console.error(
      `\nResume overflowed to ${pages} pages - it must stay a single page.\n` +
        `Fix what feeds it rather than shipping page 2:\n` +
        `  - drop a "resume: true" flag in src/data/skills.ts or src/data/projects.ts\n` +
        `  - shorten a bullet in src/data/experience.ts\n` +
        `  - or tighten the spacing constants in this file\n`
    );
    process.exit(1);
  }

  const outPath = path.resolve(__dirname, "../public/Melamar_Faustino_Resume.pdf");
  await writeFile(outPath, buffer);
  console.log(
    `Resume generated: ${outPath} (${pages} page, ${(buffer.length / 1024).toFixed(1)} KB)`
  );
}

main().catch((err) => {
  console.error("Failed to generate resume PDF:", err);
  process.exit(1);
});
