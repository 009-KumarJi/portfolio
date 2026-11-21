"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { AudioEngine } from "@/lib/audio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-12"
    >
      <div className="border-b border-white/[0.08] pb-4 mb-6">
        <div className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase flex items-center gap-2">
          <span>CREDENTIALS &amp; CLOUD ARCHITECT ACCREDITATIONS</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] inline-block" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
          Oracle Cloud Infrastructure (OCI) Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => AudioEngine.click(1200)}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 hover:border-[#10b981]/50 transition-all duration-300 group flex items-center gap-4 shadow-lg shadow-black/40"
          >
            <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="text-[#10b981] font-bold text-sm">OCI</span>
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {cert.title}
              </span>
              <p className="text-xs text-[#10b981] mt-1 font-mono flex items-center gap-1">
                <span>Verify Oracle Credential</span>
                <span>↗</span>
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
