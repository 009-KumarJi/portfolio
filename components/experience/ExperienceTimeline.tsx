"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "full-time" | "internship";
  techTags: string[];
  points: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: "Software Engineer (Intern + FTE)",
    company: "Accenture India",
    period: "Feb 2025 - Present",
    location: "Bengaluru, India",
    type: "full-time",
    techTags: ["Python", "REST APIs", "AWS Lambda", "ECS Fargate", "DynamoDB"],
    points: [
      "Built backend APIs for AVEVA CDS industrial sensor-data workflows, separating ingestion, validation, and dashboard-facing reads through asynchronous processing.",
      "Worked on AWS data pipelines using Lambda/Fargate components for long-running processing, status tracking, and downstream prediction API handoff.",
      "Stored model and pipeline configuration in DynamoDB, shaping API contracts around validation, traceability, and inference-ready payloads.",
      "Handled backend reliability concerns across VPC-aware services, rate limiting, auth boundaries, and release/debug coordination with cross-functional teams.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Envint Global",
    period: "Aug 2024 - Dec 2024",
    location: "Remote",
    type: "internship",
    techTags: ["Node.js", "Express.js", "JWT", "Redis", "MongoDB", "RBAC"],
    points: [
      "Built Node.js/Express CMS APIs with JWT access tokens, Redis-backed refresh sessions, encrypted cookies, bcrypt hashing, and MongoDB models.",
      "Implemented Admin/Moderator/User RBAC middleware and request validators to protect article, user, file, and editorial workflow endpoints.",
      "Integrated Cloudinary-backed file handling and cookie-based session flows for authenticated content-management operations.",
    ],
  },
  {
    role: "JAMstack Developer Intern",
    company: "WeFrameTech",
    period: "Jun 2024 - Jul 2024",
    location: "Remote",
    type: "internship",
    techTags: ["Directus", "MedusaJS", "Node.js", "Headless CMS"],
    points: [
      "Integrated Directus and MedusaJS-backed content/commerce flows, normalizing API payloads for reusable JAMstack delivery.",
      "Connected backend content models to frontend-facing APIs while keeping data contracts consistent across pages and components.",
    ],
  },
];

function formatBullet(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-white font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function ExperienceItem({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-l-2 border-gray-800 pl-4 sm:pl-6 pb-10 relative group"
    >
      <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[7px] top-1.5 group-hover:scale-125 transition-transform ring-4 ring-[var(--bg)]" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
        <h3 className="text-lg md:text-xl font-semibold text-white">{entry.role}</h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium w-fit ${
            entry.type === "full-time"
              ? "bg-[var(--green-muted)] text-[var(--green)]"
              : "bg-[var(--accent-muted)] text-[var(--accent)]"
          }`}
        >
          {entry.type === "full-time" ? "Full-time" : "Internship"}
        </span>
      </div>

      <p className="text-gray-400 text-sm">
        {entry.company} · {entry.location} · {entry.period}
      </p>

      <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed">
        {entry.points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[var(--accent)] mt-1 shrink-0">▹</span>
            <span>{formatBullet(p)}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {entry.techTags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-[var(--bg-card-alt)] border border-gray-800 px-2 py-0.5 rounded text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  return (
    <Section id="experience" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Experience</h2>
        <p className="text-gray-400 mb-10">
          Backend engineering experience across industrial data APIs, AWS workflows, auth systems, and headless content integrations.
        </p>
      </motion.div>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} entry={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
