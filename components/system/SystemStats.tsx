"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

const metrics = [
  { value: "1+", label: "Year Experience", icon: "📅" },
  { value: "21×", label: "API Speed Boost", icon: "⚡" },
  { value: "4", label: "Professional Roles", icon: "💼" },
  { value: "3", label: "Deployed Projects", icon: "🚀" },
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
            <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">
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
