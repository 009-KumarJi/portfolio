"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2 tracking-tight">
          Certifications
        </h2>
        <p className="text-gray-400 mb-10">
          Industry-recognized credentials.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-[var(--bg-card)] border border-gray-800 rounded-xl p-5 hover:border-[var(--accent)]/40 transition-all duration-300 group flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-muted)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-5 h-5 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-sm md:text-base text-gray-200 group-hover:text-white transition-colors">
                {cert.title}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">
                Verify credential ↗
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
