"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTelemetry } from "@/components/context/TelemetryContext";
import { AudioEngine } from "@/lib/audio";

export default function Hero() {
  const { copyToClipboard, showToast, openCmd } = useTelemetry();
  const [activeTab, setActiveTab] = useState<"post" | "health" | "ws">("post");
  const [scenario, setScenario] = useState<"clean" | "injection" | "pii">("clean");

  const handleSimulateInjection = () => {
    AudioEngine.chirp();
    setActiveTab("post");
    setScenario("injection");
    showToast("THREAT BLOCKED: 403 FORBIDDEN IN 0.28ms");
  };

  const handleSimulatePii = () => {
    AudioEngine.chirp();
    setActiveTab("post");
    setScenario("pii");
    showToast("PII DETECTED & REDACTED (2 ENTITIES)");
  };

  const handleSimulateClean = () => {
    AudioEngine.click(800);
    setActiveTab("post");
    setScenario("clean");
    showToast("TRACE NORMALIZED: 200 OK");
  };

  const handleTabChange = (tab: "post" | "health" | "ws") => {
    AudioEngine.click(1000);
    setActiveTab(tab);
  };

  const executeWorkflows = () => {
    AudioEngine.chirp();
    handleSimulateClean();
    document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
    showToast("WORKFLOW SIMULATION PIPELINE ACTIVE");
  };

  return (
    <section className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-24 pb-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* LEFT COLUMN: Terminal Dossier & CTAs (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col gap-5"
        >
          {/* Live Edge Status Pill */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0d1117] border border-[#10b981]/30 text-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-[#10b981] font-semibold">ENV: PRODUCTION</span>
              <span className="text-gray-600">||</span>
              <span className="text-[#00f2fe]">OPEN_FOR_HIRE = true</span>
            </div>
            <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/[0.08] text-gray-400">
              NODE: bom1-ctrl-01
            </span>
            <span className="px-2.5 py-1 rounded bg-[#0d1117] border border-white/[0.08] text-[#f59e0b]">
              UP: 99.98%
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Architecting Distributed Backends, Realtime Pipelines &amp;{" "}
            <span className="text-[#10b981] drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              Production GenAI Firewalls
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            Senior Systems &amp; Distributed Backend Engineer specializing in sub-millisecond AI safety guardrails, distributed ML streaming pipelines, zero-trust inference proxies, and multi-region cloud topology across AWS &amp; OCI.
          </p>

          {/* CTA & Quick CLI Trigger */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button
              onClick={executeWorkflows}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#10b981] text-[#08090c] font-mono text-sm font-bold tracking-wider transition-all duration-200 hover:bg-[#34d399] shadow-[0_0_20px_rgba(16,185,129,0.35)] active:translate-y-px"
            >
              <span>⚡</span>
              <span>[EXECUTE WORKFLOWS]</span>
            </button>

            <button
              onClick={openCmd}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] hover:border-white/20 text-gray-300 font-mono text-xs transition-colors"
            >
              <span className="text-[#00f2fe]">&gt;</span>
              <span>SYSTEM_SPEC.yaml</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#161b22] text-gray-400 text-[10px] ml-1">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Monospace Copy Command */}
          <div className="w-full max-w-xl rounded-lg bg-[#0d1117] border border-white/[0.08] p-2.5 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 overflow-x-auto select-all pr-2">
              <span className="text-[#10b981] select-none">$</span>
              <span className="text-gray-200 truncate">
                curl -s https://krishna.novitrail.com/api/v1/ping
              </span>
            </div>
            <button
              onClick={() =>
                copyToClipboard(
                  "curl -s https://krishna.novitrail.com/api/v1/ping",
                  "CURL COMMAND COPIED"
                )
              }
              type="button"
              title="Copy CLI Command"
              className="px-2 py-1 rounded bg-[#161b22] hover:bg-[#1f242c] border border-white/[0.08] text-gray-300 hover:text-[#10b981] transition-colors text-[11px] shrink-0"
            >
              copy
            </button>
          </div>

          {/* Terminal Link Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-gray-400">
            <a
              href="https://github.com/009-KumarJi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => AudioEngine.click(1000)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] hover:border-[#10b981]/40 text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-[#00f2fe]">git://</span> github.com/009-KumarJi
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-kumar-975b25186/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => AudioEngine.click(1000)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] hover:border-[#00f2fe]/40 text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-[#10b981]">in://</span> linkedin/krishna-kumar
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d1117] border border-[#f59e0b]/30 text-[#f59e0b]">
              <span>cert://</span> OCI_ARCHITECT_x2
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Realtime Live Request Inspector (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 w-full flex flex-col rounded-xl bg-[#0d1117] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/80"
        >
          {/* Window Chrome / Route Bar */}
          <div className="h-9 px-4 bg-[#12161f] flex items-center justify-between border-b border-white/[0.08] font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-gray-400 text-[11px]">telemetry-node02//edge-bom1</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#10b981] text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Protocol Tabs */}
          <div className="flex items-center border-b border-white/[0.08] bg-[#08090c] font-mono text-xs">
            <button
              onClick={() => handleTabChange("post")}
              type="button"
              className={`px-4 py-2 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeTab === "post"
                  ? "border-[#10b981] text-[#10b981] bg-[#0d1117]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-[10px] font-bold text-[#00f2fe]">POST</span> /inference/scan
            </button>
            <button
              onClick={() => handleTabChange("health")}
              type="button"
              className={`px-4 py-2 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeTab === "health"
                  ? "border-[#10b981] text-[#10b981] bg-[#0d1117]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-[10px] font-bold text-[#10b981]">GET</span> /healthz
            </button>
            <button
              onClick={() => handleTabChange("ws")}
              type="button"
              className={`px-4 py-2 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeTab === "ws"
                  ? "border-[#10b981] text-[#10b981] bg-[#0d1117]"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-[10px] font-bold text-[#f59e0b]">WS</span> /events
            </button>
          </div>

          {/* Micro Telemetry Chips */}
          <div className="px-4 py-2 bg-[#08090c]/50 border-b border-white/[0.04] flex flex-wrap items-center justify-between gap-1 text-[10px] font-mono text-gray-400">
            <span>PROTO: HTTP/2.0 TLSv1.3</span>
            <span>
              TOKEN_BUCKET:{" "}
              <span className="text-[#00f2fe] font-mono">
                {scenario === "injection" ? "997/1000" : scenario === "pii" ? "996/1000" : "998/1000"}
              </span>
            </span>
            <span>
              {scenario === "injection" ? (
                <span className="text-red-400 font-bold">TRACE: 0x99AB81C4: BLOCKED (403)</span>
              ) : scenario === "pii" ? (
                <span className="text-[#f59e0b] font-bold">TRACE: 0x99AB81C4: REDACTED (200)</span>
              ) : (
                <span className="text-[#10b981] font-bold">TRACE: 0x99AB81C4: PASS (0.42ms)</span>
              )}
            </span>
          </div>

          {/* Live JSON Terminal Console */}
          <div className="p-4 bg-[#08090c] font-mono text-xs text-gray-200 min-h-[230px] flex flex-col justify-between overflow-x-auto select-all">
            <pre className="text-[12px] leading-relaxed whitespace-pre">
              {activeTab === "health" ? (
                `{
  "service": "kk-mesh-ingress",
  "status": "HEALTHY",
  "uptime_seconds": 2491200,
  "circuit_breaker": "CLOSED",
  "db_pool_active": 14,
  "dynamo_pitr_status": "SYNCHRONIZED"
}`
              ) : activeTab === "ws" ? (
                `{
  "event": "SOCKET_HEARTBEAT",
  "connections": 104289,
  "shards": 8,
  "crdt_sync_lag_ms": 1.2,
  "cluster_state": "SYNCHRONIZED",
  "redis_presence_nodes": 6
}`
              ) : scenario === "injection" ? (
                `{
  "status": 403,
  "trace_id": "trc_inject_99ab81c4",
  "guardrail_latency": "0.28ms",
  "blocked": true,
  "trigger": "JAILBREAK_TOKEN_DETECTED",
  "regex_rule": "PROMPT_ESCAPE_V4",
  "threat_level": "CRITICAL",
  "upstream_route": "HALTED_AT_INGRESS_PROXY"
}`
              ) : scenario === "pii" ? (
                `{
  "status": 200,
  "trace_id": "trc_pii_99ab81c4",
  "guardrail_latency": "0.64ms",
  "blocked": false,
  "pii_redactions": 2,
  "redacted_entities": ["AWS_ACCESS_KEY", "IPV4_ADDR"],
  "sanitized_payload": "SENT_TO_BEDROCK",
  "upstream_route": "ap-south-1.bedrock.aws"
}`
              ) : (
                `{
  "status": 200,
  "trace_id": "trc_99ab81c4ee01",
  "guardrail_latency": "0.42ms",
  "blocked": false,
  "model": "claude-3-5-sonnet",
  "regex_preflight": "PASSED",
  "pii_redactions": 0,
  "upstream_route": "ap-south-1.bedrock.aws"
}`
              )}
            </pre>
          </div>

          {/* Interactive Simulation Triggers */}
          <div className="p-3 bg-[#12161f] border-t border-white/[0.08] flex flex-col gap-2">
            <div className="font-mono text-[10px] text-gray-400 uppercase tracking-wider px-1">
              SIMULATION ENGINE // INJECT SCENARIOS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
              <button
                onClick={handleSimulateInjection}
                type="button"
                className="px-2.5 py-1.5 rounded bg-[#0d1117] hover:bg-red-950/40 border border-red-500/30 hover:border-red-500 text-red-400 text-[11px] text-left transition-colors flex items-center gap-1.5"
              >
                <span>⚠️</span>
                <span className="truncate">Simulate Attack</span>
              </button>
              <button
                onClick={handleSimulatePii}
                type="button"
                className="px-2.5 py-1.5 rounded bg-[#0d1117] hover:bg-yellow-950/40 border border-[#f59e0b]/30 hover:border-[#f59e0b] text-[#f59e0b] text-[11px] text-left transition-colors flex items-center gap-1.5"
              >
                <span>🛡️</span>
                <span className="truncate">Simulate PII</span>
              </button>
              <button
                onClick={handleSimulateClean}
                type="button"
                className="px-2.5 py-1.5 rounded bg-[#0d1117] hover:bg-emerald-950/40 border border-[#10b981]/30 hover:border-[#10b981] text-[#10b981] text-[11px] text-left transition-colors flex items-center gap-1.5"
              >
                <span>✓</span>
                <span className="truncate">Reset 200 OK</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
