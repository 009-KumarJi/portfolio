"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

export default function Education() {
  return (
    <Section id="education" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Education</h2>
        <p className="text-gray-400 mb-10">Academic background.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-[var(--bg-card)] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-gray-700 transition-colors duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Bachelor of Engineering
            </h3>
            <a
              href="https://www.ietdavv.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 mt-1 block hover:text-[var(--accent)] transition-colors"
            >
              Institute of Engineering & Technology, Devi Ahilya Vishwavidyalaya ↗
            </a>
            <p className="text-gray-500 text-sm mt-1">Indore, Madhya Pradesh, India</p>
          </div>

          <div className="flex flex-row md:flex-col items-start md:items-end gap-3 md:gap-1">
            <span className="text-sm text-gray-400">2021 – 2025</span>
            <span className="text-sm px-3 py-1 bg-[var(--accent-muted)] text-[var(--accent)] rounded-full font-medium">
              CGPA: 7.49
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
