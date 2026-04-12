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
    period: "Feb 2025 – Present",
    location: "Bengaluru, India",
    type: "full-time",
    techTags: ["Python", "AWS Lambda", "ECS Fargate", "REST APIs", "DynamoDB"],
    points: [
      "Developed and optimized scalable RESTful APIs to process real-time sensor data from industrial databases (AVEVA CDS), improving API response time by **30%** and reducing data latency by **~25%** using asynchronous processing.",
      "Spearheaded a cross-functional Agile team to design and deploy a cloud-native AWS data pipeline (Lambda, Fargate), collaborating with data scientists to process **10K+ events/day with >99% reliability**.",
      "Implemented secure and scalable architecture using AWS VPC, rate limiting, and microservices-based design, reducing system failures by **20%** and improving uptime to **99.9%**.",
      "Built and integrated end-to-end ML pipelines (data preprocessing, training, evaluation, deployment), reducing model deployment time by **40%** and enabling real-time inference with **<200ms latency**.",
      "Stored model configurations in DynamoDB and developed prediction APIs, supporting high-concurrency requests (**~1K+ requests/min**).",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Envint Global",
    period: "Aug 2024 – Dec 2024",
    location: "Remote",
    type: "internship",
    techTags: ["Node.js", "JWT", "RBAC", "REST APIs", "Microservices"],
    points: [
      "Collaborated closely with product managers to architect a scalable microservices backend, mentoring 2 junior developers while completing decoupling workflows that supported a **40% increase in operational capacity**.",
      "Implemented secure JWT-based authentication alongside Role-Based Access Control (RBAC), fortifying 50+ API endpoints and reducing unauthorized access attempts by **>99%**.",
    ],
  },
  {
    role: "JAMstack Developer Intern",
    company: "WeFrameTech",
    period: "Jun 2024 – Jul 2024",
    location: "Remote",
    type: "internship",
    techTags: ["Directus", "MedusaJS", "Node.js"],
    points: [
      "Integrated headless CMS platforms (Directus, MedusaJS) with scalable Node.js backend APIs, serving optimized, high-volume data payloads to **5K+ daily active users** and decreasing page load times by **~35%**.",
    ],
  },
];

function formatBullet(text: string) {
  // Bold text wrapped in ** **
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
      {/* Timeline dot */}
      <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[7px] top-1.5 group-hover:scale-125 transition-transform ring-4 ring-[var(--bg)]" />

      {/* Header row */}
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

      {/* Bullet points */}
      <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed">
        {entry.points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[var(--accent)] mt-1 shrink-0">▹</span>
            <span>{formatBullet(p)}</span>
          </li>
        ))}
      </ul>

      {/* Tech tags */}
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
          Professional journey across backend engineering, cloud architecture, and full-stack development.
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
