"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import { skills } from "@/data/skills";

const skillCategories = [
  { title: "Languages", items: skills.languages, accent: true },
  { title: "Backend & APIs", items: skills.backend, accent: true },
  { title: "Databases & Caching", items: skills.databases, accent: false },
  { title: "Cloud & AWS", items: skills.cloud, accent: true },
  { title: "AI Backend", items: skills.aiBackend, accent: false },
  { title: "Tools", items: skills.tools, accent: false },
  { title: "Concepts", items: skills.concepts, accent: false },
  { title: "Frontend Familiarity", items: skills.frontend, accent: false },
];

function SkillGroup({
  title,
  items,
  accent,
  index,
}: {
  title: string;
  items: string[];
  accent: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
        {accent && (
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        )}
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <span
            key={i}
            className={`text-sm px-3 py-1.5 rounded-lg border transition-colors duration-200 ${
              accent
                ? "bg-[var(--accent-muted)] border-[var(--accent)]/20 text-gray-200 hover:border-[var(--accent)]/50"
                : "bg-[var(--bg-card-alt)] border-gray-800 text-gray-300 hover:border-gray-600"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsMatrix() {
  return (
    <Section id="skills" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Skills</h2>
        <p className="text-gray-400 mb-10">
          Backend-first toolkit across APIs, data stores, AWS infrastructure, and AI-capable service design.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {skillCategories.map((cat, i) => (
          <SkillGroup
            key={cat.title}
            title={cat.title}
            items={cat.items}
            accent={cat.accent}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
