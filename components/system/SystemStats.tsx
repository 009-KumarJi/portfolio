"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

const metrics = [
  { value: "Agentic AI", label: "Strands SDK, Bedrock & MCP", icon: "AI" },
  { value: "AWS Cloud", label: "Lambda, Step Functions & Fargate", icon: "Cloud" },
  { value: "Backend", label: "FastAPI, aiohttp & Distributed APIs", icon: "API" },
  { value: "Real-Time", label: "SSE Streaming & DynamoDB State", icon: "Data" },
];

export default function SystemStats() {
  return (
    <Section className="pb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[var(--bg-card)] border border-gray-800 rounded-xl p-5 md:p-6 text-center hover:border-[var(--accent)]/30 transition-colors duration-300 group"
          >
            <span className="text-xs mb-2 inline-flex min-h-7 items-center rounded-full border border-gray-700 px-2.5 py-1 text-gray-400 group-hover:border-[var(--accent)]/40 transition-colors">
              {metric.icon}
            </span>
            <p className="text-2xl md:text-3xl font-bold text-white">
              {metric.value}
            </p>
            <p className="text-sm text-gray-400 mt-1">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
