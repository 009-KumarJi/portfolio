"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AudioEngine } from "@/lib/audio";

interface TopologyProject {
  id: string;
  number: string;
  title: string;
  role: string;
  tag: string;
  categories: string[];
  description: string;
  metricLabel: string;
  metricValue: string;
  flowSteps: { label: string; highlight?: boolean; color?: string }[];
  badges: string[];
  github?: string;
  live?: string;
}

const projects: TopologyProject[] = [
  {
    id: "novisentinel",
    number: "01",
    title: "NoviSentinel",
    role: "Sub-millisecond AI Safety & PII Firewall Proxy",
    tag: "INGRESS // SECURITY",
    categories: ["all", "security", "compute"],
    description:
      "Ultra low-overhead reverse proxy positioned in front of LLM inference engines. Performs regex fast-fail preflight, Presidio NLP redaction, and semantic toxicity scoring before upstream transmission.",
    metricLabel: "LATENCY TARGET",
    metricValue: "<1.0ms FAILOVER",
    flowSteps: [
      { label: "Client HTTP/2", color: "text-[#00f2fe]" },
      { label: "Fast Regex (<0.3ms)", color: "text-[#f59e0b]" },
      { label: "Presidio NLP", color: "text-gray-200" },
      { label: "Detoxify ML", color: "text-gray-200" },
      { label: "AWS Bedrock Upstream", highlight: true, color: "text-[#10b981]" },
    ],
    badges: [
      "FastAPI",
      "Redis Bucket",
      "Presidio NLP",
      "Detoxify ML",
      "Docker",
      "HMAC Alerts",
      "Sub-1ms Guard",
    ],
    github: "https://github.com/009-KumarJi/novisentinel-core",
  },
  {
    id: "noviconnect",
    number: "02",
    title: "NoviConnect",
    role: "Realtime Distributed Collaboration Gateway",
    tag: "COMPUTE & RUNTIME",
    categories: ["all", "compute"],
    description:
      "Bi-directional WebSocket broker powering sub-15ms sync for distributed editors. Implements distributed Redis pub/sub backplanes, connection heartbeat pruning, and CRDT delta synchronization.",
    metricLabel: "CONCURRENCY TARGET",
    metricValue: "100K+ CONNS",
    flowSteps: [
      { label: "Socket.IO Edge", color: "text-[#00f2fe]" },
      { label: "Redis Sharded Bus", color: "text-[#10b981]" },
      { label: "CRDT Delta Engine", color: "text-gray-200" },
      { label: "MongoDB ReplSet", highlight: true, color: "text-[#00f2fe]" },
    ],
    badges: [
      "TypeScript",
      "Node.js 22",
      "Express 5",
      "Socket.IO",
      "Redis Pub/Sub",
      "MongoDB",
      "Cloudinary",
    ],
    github: "https://github.com/009-KumarJi/NoviConnect",
    live: "https://noviconnect-client-v2.vercel.app/",
  },
  {
    id: "smart-media",
    number: "03",
    title: "Smart Media Uploader & Distributed Pipeline",
    role: "Event-Driven S3, Step Functions & ECS Fargate Ingestion",
    tag: "DATA & PERSISTENCE",
    categories: ["all", "persistence", "compute"],
    description:
      "Event-driven distributed media backend where FastAPI generates presigned S3 uploads, DynamoDB tracks upload sessions and job state, SQS buffers async tasks, and Step Functions coordinates ECS Fargate worker containers.",
    metricLabel: "THROUGHPUT TARGET",
    metricValue: "ASYNC DISPATCH",
    flowSteps: [
      { label: "FastAPI Presigned S3", color: "text-[#f59e0b]" },
      { label: "DynamoDB Job State", color: "text-[#00f2fe]" },
      { label: "SQS Buffer", color: "text-gray-200" },
      { label: "Step Functions Map", color: "text-gray-200" },
      { label: "ECS Fargate Worker", highlight: true, color: "text-[#10b981]" },
    ],
    badges: [
      "Python 3.12",
      "FastAPI",
      "AWS DynamoDB",
      "Amazon S3",
      "AWS SQS",
      "Step Functions",
      "ECS Fargate",
      "Terraform",
    ],
    github: "https://github.com/009-KumarJi/smart-media-uploader",
  },
];

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projects.filter((p) =>
    p.categories.includes(selectedFilter)
  );

  const handleFilterClick = (filter: string) => {
    AudioEngine.click(1400);
    setSelectedFilter(filter);
  };

  return (
    <section
      id="architecture"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-20"
    >
      {/* Section Header & Filter Cluster */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-4 mb-8">
        <div className="flex flex-col gap-1">
          <div className="font-mono text-xs text-[#10b981] tracking-widest uppercase flex items-center gap-2">
            <span>01 // TOPOLOGY EXECUTION MAPS</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] inline-block" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Distributed Architectures &amp; Event-Driven Systems
          </h2>
          <p className="text-sm text-gray-400 max-w-xl">
            Zero-trust inference proxies, realtime distributed state consensus, and agentic vectors routed across high-throughput serverless and edge compute.
          </p>
        </div>

        {/* Node Filtering Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <span className="text-gray-500 text-[11px] mr-1">
            MATCHED: {filteredProjects.length}/{projects.length} NODES
          </span>
          <button
            onClick={() => handleFilterClick("all")}
            type="button"
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              selectedFilter === "all"
                ? "bg-[#10b981] text-[#08090c] font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-400"
            }`}
          >
            [All Nodes]
          </button>
          <button
            onClick={() => handleFilterClick("security")}
            type="button"
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              selectedFilter === "security"
                ? "bg-[#10b981] text-[#08090c] font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-400"
            }`}
          >
            [Security &amp; Proxy]
          </button>
          <button
            onClick={() => handleFilterClick("compute")}
            type="button"
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              selectedFilter === "compute"
                ? "bg-[#10b981] text-[#08090c] font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-400"
            }`}
          >
            [Compute &amp; Runtime]
          </button>
          <button
            onClick={() => handleFilterClick("persistence")}
            type="button"
            className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
              selectedFilter === "persistence"
                ? "bg-[#10b981] text-[#08090c] font-bold shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                : "bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-400"
            }`}
          >
            [Data &amp; Persistence]
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="flex flex-col rounded-xl bg-[#0d1117] border border-white/[0.08] hover:border-[#10b981]/50 transition-all duration-300 p-5 group shadow-lg shadow-black/40"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] font-mono text-xs">
              <span className="text-[#10b981] font-bold">
                {project.number} // {project.title.toUpperCase()}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] text-[10px] font-mono">
                {project.tag}
              </span>
            </div>

            {/* Content Body */}
            <div className="py-4 flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {project.role}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Step Flow Schematic Diagram */}
              <div className="rounded-lg bg-[#08090c] border border-white/[0.06] p-3 flex flex-col gap-2 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-500 text-[10px]">
                  <span>FLOW SCHEMATIC</span>
                  <span className="text-[#10b981] font-semibold">
                    {project.metricLabel}: {project.metricValue}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap text-[11px] leading-relaxed">
                  {project.flowSteps.map((step, sIdx) => (
                    <span key={sIdx} className="inline-flex items-center gap-1.5">
                      <span
                        className={`px-1.5 py-0.5 rounded bg-[#12161f] border border-white/[0.08] ${
                          step.color || "text-gray-300"
                        }`}
                      >
                        {step.label}
                      </span>
                      {sIdx < project.flowSteps.length - 1 && (
                        <span className="text-gray-600">→</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Badges & GitHub Links */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-3">
              <div className="flex flex-wrap gap-1 font-mono text-[11px]">
                {project.badges.map((b) => (
                  <span
                    key={b}
                    className="px-2 py-0.5 rounded bg-[#12161f] border border-white/[0.04] text-gray-400 text-[10px]"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 font-mono text-xs">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => AudioEngine.click(1100)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#00f2fe]">git://</span> View Source ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => AudioEngine.click(1100)}
                    className="text-[#10b981] hover:text-[#34d399] transition-colors flex items-center gap-1"
                  >
                    <span>●</span> Live Service ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
