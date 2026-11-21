"use client";

import { useState } from "react";
import Link from "next/link";
import { useTelemetry } from "@/components/context/TelemetryContext";
import { AudioEngine } from "@/lib/audio";

export default function ResumePage() {
  const [activeView, setActiveView] = useState<"web" | "pdf">("web");
  const { copyToClipboard } = useTelemetry();

  const rawResumeMarkdown = `# Krishna Kumar
Bengaluru, India | +91 9755296678 | krishna902kumar@gmail.com
LinkedIn: https://linkedin.com/in/krishna-kumar-975b25186/
GitHub: https://github.com/009-KumarJi
Portfolio: https://krishna.novitrail.com/
LeetCode: https://leetcode.com/u/009-kumarji/ (Peak 1563)

## WORK EXPERIENCE
### Accenture India — Associate Software Engineer (Oct 2025 – Present) | Bengaluru, India
- Architected autonomous Agentic AI platform using AWS Strands SDK and Claude on Bedrock; built standalone Fargate MCP server for closed-loop anomaly diagnosis and DynamoDB write-backs via real-time SSE.
- Architected distributed ML model training pipeline from scratch to production using AWS Step Functions (Distributed Map, 50 concurrency), VPC Lattice routing to Fargate, and DynamoDB state machines with automated failure recovery.
- Engineered high-throughput industrial sensor data pipeline with async aiohttp connection pooling, X-Ray tracing, 30+ custom pint UOM conversions, stream data filtration logic, and semaphore-gated chunked streaming.
- Built resilient event-driven microservices: FastAPI, Lambda SnapStart, SQS, DynamoDB single-table design with PITR-to-Parquet export via Lambda Durable Execution SDK, and 30+ CloudWatch composite alarms.

## INTERNSHIPS
### Accenture India — Software Engineer Intern (Feb 2025 – Jun 2025) | Bengaluru, India
- Modeled discrete-event simulations of greenfield shop-floor operations using ML algorithms to support predictive analysis.

### Envint Global — Full Stack Developer Intern (Aug 2024 – Dec 2024) | Remote
- Developed backend base from scratch using Node.js/Express APIs for sustainable energy consumption calculator with JWT auth and role-based access control (RBAC), designed for scalability.
- Built Python utilities for automated PDF creation, parsing, and extraction to streamline ESG reporting workflows.

## TECHNICAL SKILLS
- Backend Systems: Python, FastAPI, Node.js, Express.js, aiohttp, Pydantic v2, RESTful APIs, WebSockets, JWT
- Cloud & Infra: AWS CDK (Python), Lambda (SnapStart, Durable SDK), ECS Fargate, Step Functions, SageMaker, VPC Lattice
- Data & Messaging: DynamoDB (Single-table, Streams), PyArrow (Parquet), Redis, SQS, EventBridge, PostgreSQL
- AI & Agentic Systems: AWS Strands Agents SDK, Model Context Protocol (MCP), Amazon Bedrock, SSE Streaming
- Frontend: Angular, React.js, Next.js, Material UI
- Reliability & Testing: CloudWatch Composite Alarms, AWS X-Ray, Circuit Breakers, pytest, moto, Hypothesis, Ruff
- Languages & Core CS: Python, TypeScript, JavaScript, SQL, C++, Java, Go | LeetCode Peak 1563

## PROJECTS
### Smart Media Uploader | FastAPI, AWS S3, DynamoDB, SQS, Lambda, Step Functions, ECS Fargate
- Built upload orchestration with JWT auth, 15-minute presigned S3 URLs, DynamoDB upload sessions, owner checks, MIME/extension validation, and a 500 MB file cap.
- Modeled async media processing as SQS -> dispatcher Lambda -> Step Functions -> ECS workers, branching image/video/audio jobs and writing progress/heartbeats to DynamoDB.

### NoviSentinel | Python, FastAPI, PostgreSQL, Redis, Presidio, Detoxify, Docker
- Built an AI safety firewall for LLM apps with real-time input/output scanning for prompt injection, PII, exposed credentials, and toxicity.
- Implemented API-key auth, Redis sliding-window rate limiting, PostgreSQL scan logs, HMAC-SHA256 signed webhooks, and a Python SDK with sync/async clients.

### NoviConnect | Node.js, Express 5, TypeScript, MongoDB, Redis, Socket.IO
- Built REST + Socket.IO backend with cookie auth shared across HTTP and socket handshakes, MongoDB chat/message models, Redis presence, refresh sessions, and rate limits.
- Designed E2EE-aware message storage: validates encrypted envelopes, stores ciphertext and wrapped keys, and supports encrypted attachment metadata without server-side decryption.

## EDUCATION
### Institute of Engineering & Technology, Devi Ahilya Vishwavidyalaya | Indore, MP, India
Bachelor of Engineering, CGPA: 7.5 | 2021 – 2025

## CERTIFICATIONS
- Oracle Cloud Infrastructure 2024 Generative AI Certified Professional (1Z0-1127-24)
- Oracle Cloud Infrastructure 2024 Certified Foundations Associate (1Z0-1085-24)`;

  const handlePrint = () => {
    AudioEngine.click(1000);
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-gray-200 selection:bg-[#10b981]/25 selection:text-[#10b981] pb-16 print:bg-white print:text-black print:pb-0">
      {/* Top Fixed Control Plane Header */}
      <header className="sticky top-0 z-40 bg-[#08090c]/90 backdrop-blur-xl border-b border-white/[0.08] print:hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Back to Control Plane */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => AudioEngine.click(800)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] hover:border-white/20 font-mono text-xs text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-[#10b981]">←</span>
              <span>[Control Plane]</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-gray-400">
              <span className="text-[#10b981] font-bold">●</span>
              <span>DOC: resume.tex</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#00f2fe]">ATS: 98/100</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#f59e0b]">1-PAGE STRICT</span>
            </div>
          </div>

          {/* Controls: View Switcher & Actions */}
          <div className="flex items-center gap-2 font-mono text-xs">
            {/* View Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-[#0d1117] border border-white/[0.08]">
              <button
                type="button"
                onClick={() => {
                  AudioEngine.click(1000);
                  setActiveView("web");
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeView === "web"
                    ? "bg-[#10b981]/20 text-[#10b981] font-semibold border border-[#10b981]/30 shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ⚡ Web View
              </button>
              <button
                type="button"
                onClick={() => {
                  AudioEngine.click(1000);
                  setActiveView("pdf");
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeView === "pdf"
                    ? "bg-[#00f2fe]/20 text-[#00f2fe] font-semibold border border-[#00f2fe]/30 shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                📄 PDF Canvas
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              type="button"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] hover:border-white/20 text-gray-300 hover:text-white transition-colors"
              title="Print formatted 1-page resume"
            >
              <span>⎙</span>
              <span>[Print]</span>
            </button>

            {/* Copy Markdown */}
            <button
              onClick={() =>
                copyToClipboard(rawResumeMarkdown, "RESUME COPIED AS PLAIN TEXT")
              }
              type="button"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] hover:border-white/20 text-gray-300 hover:text-white transition-colors"
              title="Copy plain-text markdown for ATS forms"
            >
              <span>⎘</span>
              <span>[Copy Text]</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="/krishna_kumar.pdf"
              download="Krishna_Kumar_Resume.pdf"
              onClick={() => AudioEngine.chirp()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#08090c] font-bold tracking-wide transition-all shadow-[0_0_12px_rgba(16,185,129,0.35)]"
            >
              <span>⬇</span>
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 pt-8 print:max-w-full print:p-0">
        {/* PDF CANVAS VIEW */}
        {activeView === "pdf" && (
          <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/80 flex flex-col print:hidden">
            <div className="h-10 bg-[#12161f] px-4 flex items-center justify-between border-b border-white/[0.06] font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-[#00f2fe]">●</span>
                <span>EMBEDDED PDF VIEWER: /public/krishna_kumar.pdf</span>
              </div>
              <a
                href="/krishna_kumar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10b981] hover:underline"
              >
                [Open in New Tab ↗]
              </a>
            </div>

            <div className="w-full h-[880px] bg-[#1a1e27] relative">
              <iframe
                src="/krishna_kumar.pdf#toolbar=0&navpanes=0&scrollbar=1"
                title="Krishna Kumar - Resume PDF"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* INTERACTIVE WEB VIEW */}
        {activeView === "web" && (
          <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-black/80 font-sans print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
            {/* Header / Contact Identity */}
            <div className="border-b border-white/[0.08] pb-6 mb-6 text-center print:border-b-2 print:border-black print:pb-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
                Krishna Kumar
              </h1>
              <p className="font-mono text-xs text-[#00f2fe] mt-1 print:text-black font-semibold">
                Backend, GenAI &amp; Distributed Systems Engineer
              </p>

              {/* Contact Pills */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 font-mono text-xs text-gray-400 mt-3 print:text-black print:gap-x-2">
                <span>Bengaluru, India</span>
                <span className="text-gray-600 print:text-gray-400">•</span>
                <a
                  href="tel:+919755296678"
                  className="hover:text-white transition-colors"
                >
                  +91 9755296678
                </a>
                <span className="text-gray-600 print:text-gray-400">•</span>
                <a
                  href="mailto:krishna902kumar@gmail.com"
                  className="text-[#00f2fe] hover:underline print:text-black"
                >
                  krishna902kumar@gmail.com
                </a>
                <span className="text-gray-600 print:text-gray-400">•</span>
                <a
                  href="https://linkedin.com/in/krishna-kumar-975b25186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  linkedin.com/in/krishna-kumar
                </a>
                <span className="text-gray-600 print:text-gray-400">•</span>
                <a
                  href="https://github.com/009-KumarJi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  github.com/009-KumarJi
                </a>
                <span className="text-gray-600 print:text-gray-400">•</span>
                <a
                  href="https://leetcode.com/u/009-kumarji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LeetCode (Peak 1563)
                </a>
                <span className="text-gray-600 print:text-gray-400">•</span>
                <a
                  href="https://krishna.novitrail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  krishna.novitrail.com
                </a>
              </div>
            </div>

            {/* SECTION 1: WORK EXPERIENCE */}
            <section className="mb-6">
              <h2 className="font-mono text-xs text-[#10b981] font-bold uppercase tracking-widest border-b border-white/[0.08] pb-1 mb-3 print:text-black print:border-black print:text-sm">
                WORK EXPERIENCE
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-base print:text-black">
                      Associate Software Engineer{" "}
                      <span className="font-normal text-gray-400 print:text-gray-600">
                        — Accenture India
                      </span>
                    </div>
                    <div className="font-mono text-xs text-[#f59e0b] print:text-black font-semibold">
                      Oct 2025 – Present | Bengaluru, India
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-2 space-y-1 text-xs text-gray-300 leading-relaxed print:text-black">
                    <li>
                      Architected autonomous Agentic AI platform using{" "}
                      <strong className="text-white print:text-black">AWS Strands SDK</strong> and{" "}
                      <strong className="text-white print:text-black">Claude on Bedrock</strong>; built standalone Fargate MCP server for closed-loop anomaly diagnosis and DynamoDB write-backs via real-time SSE.
                    </li>
                    <li>
                      Architected distributed ML model training pipeline from scratch to production using{" "}
                      <strong className="text-white print:text-black">AWS Step Functions</strong> (Distributed Map, 50 concurrency),{" "}
                      <strong className="text-white print:text-black">VPC Lattice</strong> routing to Fargate, and DynamoDB state machines with automated failure recovery.
                    </li>
                    <li>
                      Engineered high-throughput industrial sensor data pipeline with async{" "}
                      <strong className="text-white print:text-black">aiohttp connection pooling</strong>, X-Ray tracing, 30+ custom pint UOM conversions, stream data filtration logic, and semaphore-gated chunked streaming.
                    </li>
                    <li>
                      Built resilient event-driven microservices: FastAPI, Lambda SnapStart, SQS, DynamoDB single-table design with PITR-to-Parquet export via Lambda Durable Execution SDK, and 30+ CloudWatch composite alarms.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 2: INTERNSHIPS */}
            <section className="mb-6">
              <h2 className="font-mono text-xs text-[#00f2fe] font-bold uppercase tracking-widest border-b border-white/[0.08] pb-1 mb-3 print:text-black print:border-black print:text-sm">
                INTERNSHIPS
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-base print:text-black">
                      Software Engineer Intern{" "}
                      <span className="font-normal text-gray-400 print:text-gray-600">
                        — Accenture India
                      </span>
                    </div>
                    <div className="font-mono text-xs text-gray-400 print:text-black">
                      Feb 2025 – Jun 2025 | Bengaluru, India
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-1.5 text-xs text-gray-300 leading-relaxed print:text-black">
                    <li>
                      Modeled discrete-event simulations of greenfield shop-floor operations using ML algorithms to support predictive analysis.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-base print:text-black">
                      Full Stack Developer Intern{" "}
                      <span className="font-normal text-gray-400 print:text-gray-600">
                        — Envint Global
                      </span>
                    </div>
                    <div className="font-mono text-xs text-gray-400 print:text-black">
                      Aug 2024 – Dec 2024 | Remote
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-1.5 space-y-1 text-xs text-gray-300 leading-relaxed print:text-black">
                    <li>
                      Developed backend base from scratch using Node.js/Express APIs for sustainable energy consumption calculator with JWT auth and role-based access control (RBAC), designed for scalability.
                    </li>
                    <li>
                      Built Python utilities for automated PDF creation, parsing, and extraction to streamline ESG reporting workflows.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 3: TECHNICAL SKILLS */}
            <section className="mb-6">
              <h2 className="font-mono text-xs text-[#f59e0b] font-bold uppercase tracking-widest border-b border-white/[0.08] pb-1 mb-3 print:text-black print:border-black print:text-sm">
                TECHNICAL SKILLS
              </h2>

              <div className="space-y-1.5 font-mono text-xs text-gray-300 print:text-black leading-relaxed">
                <div>
                  <strong className="text-white print:text-black">Backend Systems:</strong>{" "}
                  Python, FastAPI, Node.js, Express.js, aiohttp, Pydantic v2, RESTful APIs, WebSockets, JWT
                </div>
                <div>
                  <strong className="text-white print:text-black">Cloud &amp; Infra:</strong>{" "}
                  AWS CDK (Python), Lambda (SnapStart, Durable SDK), ECS Fargate, Step Functions, SageMaker, VPC Lattice
                </div>
                <div>
                  <strong className="text-white print:text-black">Data &amp; Messaging:</strong>{" "}
                  DynamoDB (Single-table, Streams), PyArrow (Parquet), Redis, SQS, EventBridge, PostgreSQL
                </div>
                <div>
                  <strong className="text-white print:text-black">AI &amp; Agentic Systems:</strong>{" "}
                  AWS Strands Agents SDK, Model Context Protocol (MCP), Amazon Bedrock, SSE Streaming
                </div>
                <div>
                  <strong className="text-white print:text-black">Frontend:</strong>{" "}
                  Angular, React.js, Next.js, Material UI
                </div>
                <div>
                  <strong className="text-white print:text-black">Reliability &amp; Testing:</strong>{" "}
                  CloudWatch Composite Alarms, AWS X-Ray, Circuit Breakers, pytest, moto, Hypothesis, Ruff
                </div>
                <div>
                  <strong className="text-white print:text-black">Languages &amp; Core CS:</strong>{" "}
                  Python, TypeScript, JavaScript, SQL, C++, Java, Go | LeetCode Peak 1563
                </div>
              </div>
            </section>

            {/* SECTION 4: PROJECTS */}
            <section className="mb-6">
              <h2 className="font-mono text-xs text-[#10b981] font-bold uppercase tracking-widest border-b border-white/[0.08] pb-1 mb-3 print:text-black print:border-black print:text-sm">
                PROJECTS
              </h2>

              <div className="space-y-4">
                {/* Project 1 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-base print:text-black flex items-center gap-2">
                      <span>Smart Media Uploader</span>
                      <a
                        href="https://github.com/009-KumarJi/smart-media-uploader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#00f2fe] hover:underline print:text-black"
                      >
                        [GitHub ↗]
                      </a>
                    </div>
                    <div className="font-mono text-xs text-gray-400 print:text-black">
                      FastAPI, AWS S3, DynamoDB, SQS, Lambda, Step Functions, ECS Fargate
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-1.5 space-y-1 text-xs text-gray-300 leading-relaxed print:text-black">
                    <li>
                      Built upload orchestration with JWT auth, 15-minute presigned S3 URLs, DynamoDB upload sessions, owner checks, MIME/extension validation, and a 500 MB file cap.
                    </li>
                    <li>
                      Modeled async media processing as SQS → dispatcher Lambda → Step Functions → ECS workers, branching image/video/audio jobs and writing progress/heartbeats to DynamoDB.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-base print:text-black flex items-center gap-2">
                      <span>NoviSentinel</span>
                      <a
                        href="https://github.com/009-KumarJi/novisentinel-core"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#00f2fe] hover:underline print:text-black"
                      >
                        [GitHub ↗]
                      </a>
                    </div>
                    <div className="font-mono text-xs text-gray-400 print:text-black">
                      Python, FastAPI, PostgreSQL, Redis, Presidio, Detoxify, Docker
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-1.5 space-y-1 text-xs text-gray-300 leading-relaxed print:text-black">
                    <li>
                      Built an AI safety firewall for LLM apps with real-time input/output scanning for prompt injection, PII, exposed credentials, and toxicity.
                    </li>
                    <li>
                      Implemented API-key auth, Redis sliding-window rate limiting, PostgreSQL scan logs, HMAC-SHA256 signed webhooks, and a Python SDK with sync/async clients.
                    </li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="font-bold text-white text-base print:text-black flex items-center gap-2">
                      <span>NoviConnect</span>
                      <a
                        href="https://noviconnect-client-v2.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#10b981] hover:underline print:text-black"
                      >
                        [Live ↗]
                      </a>
                      <a
                        href="https://github.com/009-KumarJi/NoviConnect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#00f2fe] hover:underline print:text-black"
                      >
                        [GitHub ↗]
                      </a>
                    </div>
                    <div className="font-mono text-xs text-gray-400 print:text-black">
                      Node.js, Express 5, TypeScript, MongoDB, Redis, Socket.IO
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-5 mt-1.5 space-y-1 text-xs text-gray-300 leading-relaxed print:text-black">
                    <li>
                      Built REST + Socket.IO backend with cookie auth shared across HTTP and socket handshakes, MongoDB chat/message models, Redis presence, refresh sessions, and rate limits.
                    </li>
                    <li>
                      Designed E2EE-aware message storage: validates encrypted envelopes, stores ciphertext and wrapped keys, and supports encrypted attachment metadata without server-side decryption.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 5: EDUCATION */}
            <section className="mb-6">
              <h2 className="font-mono text-xs text-[#00f2fe] font-bold uppercase tracking-widest border-b border-white/[0.08] pb-1 mb-3 print:text-black print:border-black print:text-sm">
                EDUCATION
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <div className="font-bold text-white text-base print:text-black">
                    Institute of Engineering &amp; Technology, Devi Ahilya Vishwavidyalaya
                  </div>
                  <div className="text-xs text-gray-400 print:text-gray-700 font-mono">
                    Bachelor of Engineering, CGPA — 7.5
                  </div>
                </div>
                <div className="font-mono text-xs text-gray-400 print:text-black">
                  2021 – 2025 | Indore, MP, India
                </div>
              </div>
            </section>

            {/* SECTION 6: CERTIFICATIONS */}
            <section>
              <h2 className="font-mono text-xs text-[#f59e0b] font-bold uppercase tracking-widest border-b border-white/[0.08] pb-1 mb-3 print:text-black print:border-black print:text-sm">
                CERTIFICATIONS
              </h2>

              <ul className="list-disc list-outside pl-5 space-y-1 text-xs text-gray-300 leading-relaxed print:text-black">
                <li>
                  <strong className="text-white print:text-black">
                    Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
                  </strong>{" "}
                  (1Z0-1127-24)
                </li>
                <li>
                  <strong className="text-white print:text-black">
                    Oracle Cloud Infrastructure 2024 Certified Foundations Associate
                  </strong>{" "}
                  (1Z0-1085-24)
                </li>
              </ul>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
