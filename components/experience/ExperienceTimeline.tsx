"use client";

import { motion } from "framer-motion";

interface ExperienceCommit {
  commitHash: string;
  branch: string;
  role: string;
  company: string;
  department: string;
  period: string;
  location: string;
  type: "full-time" | "internship";
  stackTags: string[];
  points: string[];
}

const experiences: ExperienceCommit[] = [
  {
    commitHash: "commit e82f9a1",
    branch: "HEAD -> main, origin/prod",
    role: "Associate Software Engineer",
    company: "Accenture India",
    department: "Advanced Technology Centers",
    period: "OCT 2025 – PRESENT",
    location: "BENGALURU, INDIA",
    type: "full-time",
    stackTags: [
      "AWS Strands SDK",
      "Model Context Protocol (MCP)",
      "Amazon Bedrock (Claude)",
      "Python",
      "FastAPI",
      "AWS Step Functions",
      "AWS Lambda (SnapStart)",
      "ECS Fargate",
      "DynamoDB (Single-Table)",
      "VPC Lattice",
    ],
    points: [
      "Architected and deployed an **Agentic AI platform** utilizing AWS Strands SDK, Claude on Bedrock, and a standalone ECS Fargate Model Context Protocol (MCP) server, orchestrating multi-step industrial root-cause analysis with closed-loop DynamoDB write-backs via real-time SSE streaming.",
      "Engineered a distributed ML model training pipeline orchestrating **AWS Step Functions** (Distributed Map at 50 concurrency), routing training jobs to ECS Fargate via VPC Lattice and maintaining execution state machines in DynamoDB.",
      "Engineered an industrial sensor data pipeline using async **aiohttp** connection pooling with X-Ray tracing, 30+ custom unit conversions, stream data filtration logic, and chunked streaming across distributed microservices.",
      "Developed resilient, event-driven backend microservices with **FastAPI**, AWS Lambda (SnapStart), SQS, and DynamoDB single-table design with PITR-to-Parquet exports via Durable Execution SDK, monitored by 30+ CloudWatch composite alarms.",
    ],
  },
  {
    commitHash: "commit b41c902",
    branch: "branch: feature/shop-floor-sim",
    role: "Software Engineer Intern",
    company: "Accenture India",
    department: "Industry X / Simulation Labs",
    period: "FEB 2025 – JUN 2025",
    location: "BENGALURU, INDIA",
    type: "internship",
    stackTags: ["Python", "Machine Learning", "Simulation", "Predictive Analysis"],
    points: [
      "Modeled discrete-event simulations of greenfield shop-floor operations using ML algorithms to support predictive analysis and bottleneck detection.",
      "Built automated data preprocessing pipelines and parameter tuning testbeds for simulation verification under varying stochastic loads.",
    ],
  },
  {
    commitHash: "commit 4c01d78",
    branch: "branch: feature/esg-calculator",
    role: "Full Stack Developer Intern",
    company: "Envint Global",
    department: "Enterprise Sustainability Systems",
    period: "AUG 2024 – DEC 2024",
    location: "REMOTE",
    type: "internship",
    stackTags: ["Node.js", "Express.js", "Python", "JWT", "RBAC", "ESG Automation"],
    points: [
      "Developed the backend base of a new project from scratch — Node.js/Express APIs serving a sustainable energy consumption calculator — with JWT-based authentication and role-based access control (RBAC), designed for future expansion.",
      "Built Python utilities for PDF creation and extraction to automate document workflows for ESG/sustainability reporting.",
    ],
  },
];

function formatBullet(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16"
    >
      {/* Section Header */}
      <div className="border-b border-white/[0.08] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <div className="font-mono text-xs text-[#10b981] tracking-widest uppercase flex items-center gap-2">
            <span>04 // PRODUCTION CHANGELOG</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] inline-block" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Career Deployments &amp; Git Branch Commit Tree
          </h2>
        </div>
        <div className="font-mono text-xs text-gray-500">
          STRICT ISOLATION: [FULL-TIME PROD] vs [INTERNSHIP STAGING]
        </div>
      </div>

      {/* Continuous Git Branch Tree Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-white/[0.08] flex flex-col gap-8 sm:gap-10">
        {experiences.map((exp, index) => {
          const isFullTime = exp.type === "full-time";

          return (
            <motion.div
              key={exp.commitHash}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col gap-2.5 group"
            >
              {/* Git Branch Node Anchor Indicator */}
              <span
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#08090c] border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                  isFullTime ? "border-[#10b981]" : "border-[#00f2fe]"
                }`}
              >
                {isFullTime ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" />
                )}
              </span>

              {/* Commit Metadata Header */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-gray-400 font-mono">{exp.commitHash}</span>
                <span className="text-gray-600">|</span>
                <span
                  className={`font-mono ${
                    isFullTime ? "text-[#10b981]" : "text-[#00f2fe]"
                  }`}
                >
                  {exp.branch}
                </span>
                <span className="text-gray-600">|</span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1.5 ${
                    isFullTime
                      ? "bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981]"
                      : "bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isFullTime ? "bg-[#10b981]" : "border border-[#00f2fe]"
                    }`}
                  />
                  {isFullTime ? "FULL-TIME // PROD" : "INTERNSHIP // STAGING"}
                </span>

                <span className="text-gray-500 sm:ml-auto text-[11px]">
                  {exp.period} // {exp.location}
                </span>
              </div>

              {/* Role Card Inset */}
              <div
                className={`rounded-xl bg-[#0d1117] border p-5 sm:p-6 transition-all duration-300 ${
                  isFullTime
                    ? "border-white/[0.08] hover:border-[#10b981]/40"
                    : "border-white/[0.08] hover:border-[#00f2fe]/40"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs text-gray-400 mt-0.5">
                      {exp.company} · {exp.department}
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#12161f] font-mono text-xs text-gray-400 text-[11px] w-fit">
                    {isFullTime ? "● PRODUCTION" : "○ FEATURE STAGING"}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300 list-none pt-1 leading-relaxed">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className={`font-mono text-xs mt-0.5 shrink-0 ${
                          isFullTime ? "text-[#10b981]" : "text-[#00f2fe]"
                        }`}
                      >
                        ❯
                      </span>
                      <span>{formatBullet(p)}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.06]">
                  {exp.stackTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono bg-[#12161f] border border-white/[0.04] px-2 py-0.5 rounded text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
