"use client";

import { motion } from "framer-motion";

function Badge({ label }: { label: string }) {
  return (
    <span className="text-xs bg-[var(--bg-card-alt)] border border-gray-700/50 px-2 py-1 rounded text-gray-400">
      {label}
    </span>
  );
}

export default function ProjectCard({
  title,
  description,
  highlights,
  stack,
  github,
  live,
  featured,
  index,
}: {
  title: string;
  description: string;
  highlights?: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`bg-[var(--bg-card)] border rounded-xl hover:border-[var(--accent)]/40 transition-all duration-300 group ${
        featured
          ? "border-gray-700 p-6 md:p-8 md:col-span-2"
          : "border-gray-800 p-6"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-3 sm:gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          {featured && (
            <span className="text-xs px-2 py-0.5 bg-[var(--accent-muted)] text-[var(--accent)] rounded-full font-medium">
              Featured
            </span>
          )}
          <h3 className={`font-semibold ${featured ? "text-xl md:text-2xl" : "text-xl"}`}>
            {title}
          </h3>
        </div>
        <div className="flex gap-3 text-sm text-gray-400 shrink-0">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live
            </a>
          )}
        </div>
      </div>

      <p className={`text-gray-400 mt-3 leading-relaxed ${featured ? "text-base" : "text-sm"}`}>
        {description}
      </p>

      {/* Highlights — only for featured */}
      {featured && highlights && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-[var(--accent)] text-xs">▹</span>
              {h}
            </div>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((tech, i) => (
          <Badge key={i} label={tech} />
        ))}
      </div>
    </motion.div>
  );
}
