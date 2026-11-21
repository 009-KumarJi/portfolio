"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12"
    >
      <div className="border-b border-white/[0.08] pb-4 mb-6">
        <div className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase flex items-center gap-2">
          <span>ACADEMIC FOUNDATION</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] inline-block" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
          Education &amp; Engineering Degree
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 sm:p-6 hover:border-white/20 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#10b981] font-mono text-sm">▶</span>
              <h3 className="text-base sm:text-lg font-semibold text-white">
                Bachelor of Engineering (B.E.)
              </h3>
            </div>
            <a
              href="https://www.ietdavv.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-gray-400 mt-1 block hover:text-[#00f2fe] transition-colors font-mono"
            >
              Institute of Engineering &amp; Technology, Devi Ahilya Vishwavidyalaya (IET-DAVV) ↗
            </a>
            <p className="text-gray-400 text-xs mt-1 font-mono">
              Indore, Madhya Pradesh, India
            </p>
          </div>

          <div className="flex sm:flex-col items-start sm:items-end gap-2 font-mono text-xs">
            <span className="text-gray-400">2021 – 2025</span>
            <span className="px-2.5 py-1 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] rounded font-bold">
              CGPA: 7.49
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
