"use client";

import { useState, useMemo } from "react";
import { useTelemetry } from "@/components/context/TelemetryContext";
import { AudioEngine } from "@/lib/audio";
import {
  capabilityCategories,
  rawYamlConfig,
  rawJsonConfig,
  CapabilityCategory,
} from "@/data/skills";

export default function EngineRoom() {
  const { copyToClipboard } = useTelemetry();
  const [activeView, setActiveView] = useState<"matrix" | "yaml">("matrix");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtered categories based on selected tab and search query
  const filteredCategories = useMemo(() => {
    return capabilityCategories.filter((cat) => {
      const matchesCategory =
        selectedCategory === "all" || cat.id === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = cat.title.toLowerCase().includes(q);
      const inTagline = cat.tagline.toLowerCase().includes(q);
      const inCode = cat.code.toLowerCase().includes(q);
      const inTech = cat.technologies.some((t) => t.toLowerCase().includes(q));
      const inHighlights = cat.architectureHighlights.some((h) =>
        h.toLowerCase().includes(q)
      );
      const inSpecs = cat.specTags.some(
        (s) =>
          s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
      );

      return inTitle || inTagline || inCode || inTech || inHighlights || inSpecs;
    });
  }, [selectedCategory, searchQuery]);

  const totalTechCount = useMemo(() => {
    return capabilityCategories.reduce(
      (acc, cat) => acc + cat.technologies.length,
      0
    );
  }, []);

  const yamlLines = useMemo(() => {
    return rawYamlConfig.split("\n");
  }, []);

  return (
    <section
      id="capabilities"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16"
    >
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-6 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="font-mono text-xs text-[#f59e0b] tracking-widest uppercase flex items-center gap-2 mb-2">
            <span>03 // THE ENGINE ROOM</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-gray-500 text-[10px]">
              [{capabilityCategories.length} CLUSTERS // {totalTechCount} PRODUCTION TECHS]
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Categorized Backend Capabilities &amp; Stack Config
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-2xl font-mono">
            Granular technical matrix derived from verified production systems, distributed cloud orchestration, and real-time AI microservices.
          </p>
        </div>

        {/* View Mode Toggle & Export Actions */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {/* Matrix vs YAML Switcher */}
          <div className="flex items-center p-1 rounded-lg bg-[#0d1117] border border-white/[0.08] mr-2">
            <button
              type="button"
              onClick={() => {
                AudioEngine.click();
                setActiveView("matrix");
              }}
              className={`px-3 py-1 rounded-md transition-all ${
                activeView === "matrix"
                  ? "bg-[#10b981]/20 text-[#10b981] font-semibold border border-[#10b981]/30 shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ⚡ Matrix View
            </button>
            <button
              type="button"
              onClick={() => {
                AudioEngine.click();
                setActiveView("yaml");
              }}
              className={`px-3 py-1 rounded-md transition-all ${
                activeView === "yaml"
                  ? "bg-[#00f2fe]/20 text-[#00f2fe] font-semibold border border-[#00f2fe]/30 shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ⌨ /etc/system/capabilities.yaml
            </button>
          </div>

          {/* Action buttons */}
          <button
            onClick={() =>
              copyToClipboard(rawYamlConfig, "SYSTEM YAML CONFIG EXPORTED")
            }
            type="button"
            className="px-3 py-1.5 rounded-md bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            title="Copy full YAML specification to clipboard"
          >
            <span className="text-[#f59e0b]">⬇</span>
            <span>[Export YAML]</span>
          </button>
          <button
            onClick={() =>
              copyToClipboard(rawJsonConfig, "SYSTEM JSON CONFIG EXPORTED")
            }
            type="button"
            className="px-3 py-1.5 rounded-md bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            title="Copy full JSON specification to clipboard"
          >
            <span className="text-[#00f2fe]">&#123;&#125;</span>
            <span>[JSON]</span>
          </button>
        </div>
      </div>

      {/* MATRIX VIEW */}
      {activeView === "matrix" && (
        <div className="space-y-6">
          {/* Controls Bar: Search & Category Pills */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-[#08090c] p-4 rounded-xl border border-white/[0.06]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs">
                $ grep -i
              </span>
              <input
                type="text"
                placeholder="filter tech, tools, or patterns (e.g. MCP, DynamoDB, PyArrow, X-Ray)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d1117] border border-white/[0.08] rounded-lg pl-22 pr-4 py-2 font-mono text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00f2fe]/50 focus:ring-1 focus:ring-[#00f2fe]/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white font-mono text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter Counts */}
            <div className="font-mono text-xs text-gray-400 flex items-center gap-2 shrink-0">
              <span className="text-[#10b981]">●</span>
              <span>
                Showing {filteredCategories.length} of {capabilityCategories.length} clusters
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            <button
              type="button"
              onClick={() => {
                AudioEngine.click();
                setSelectedCategory("all");
              }}
              className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/40 font-semibold"
                  : "bg-[#0d1117] text-gray-400 border-white/[0.06] hover:text-white hover:border-white/20"
              }`}
            >
              [All Capabilities ({capabilityCategories.length})]
            </button>
            {capabilityCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  AudioEngine.click();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-[#00f2fe]/15 text-[#00f2fe] border-[#00f2fe]/40 font-semibold"
                    : "bg-[#0d1117] text-gray-400 border-white/[0.06] hover:text-white hover:border-white/20"
                }`}
              >
                {cat.code.split("//")[1]?.trim() || cat.title}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center rounded-xl bg-[#08090c] border border-white/[0.06] font-mono text-sm text-gray-400">
              <p className="text-gray-300 mb-2">No capability matching &quot;{searchQuery}&quot;</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="text-[#00f2fe] hover:underline"
              >
                $ reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCategories.map((cat) => (
                <CapabilityCard key={cat.id} category={cat} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* TERMINAL YAML VIEW */}
      {activeView === "yaml" && (
        <div className="rounded-xl bg-[#08090c] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/70">
          {/* Terminal Title Bar */}
          <div className="h-9 bg-[#0d1117] px-4 flex items-center justify-between border-b border-white/[0.06] font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300 font-mono">
                /etc/system/capabilities.yaml
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-gray-500">
              <span>{yamlLines.length} LINES</span>
              <span>UTF-8</span>
              <span className="text-[#10b981]">READONLY</span>
            </div>
          </div>

          {/* Line-numbered Code Editor */}
          <div className="p-4 sm:p-6 font-mono text-xs text-gray-300 flex gap-4 sm:gap-6 overflow-x-auto max-h-[720px] scrollbar-thin">
            {/* Line Numbers */}
            <div className="select-none text-gray-600 text-right pr-4 border-r border-white/[0.06] flex flex-col font-mono text-[12px] leading-6 shrink-0">
              {yamlLines.map((_, i) => (
                <span key={i}>{(i + 1).toString().padStart(2, "0")}</span>
              ))}
            </div>

            {/* Syntax Highlighted Lines */}
            <div className="flex-1 font-mono text-[12px] leading-6 select-all min-w-[540px]">
              {yamlLines.map((line, i) => (
                <YamlLine key={i} line={line} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CapabilityCard({ category }: { category: CapabilityCategory }) {
  const badgeColors = {
    emerald: "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30",
    cyan: "bg-[#00f2fe]/15 text-[#00f2fe] border-[#00f2fe]/30",
    amber: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    purple: "bg-[#a855f7]/15 text-[#a855f7] border-[#a855f7]/30",
  };

  return (
    <div className="rounded-xl bg-[#08090c] border border-white/[0.08] hover:border-white/20 transition-all duration-200 overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/40">
      {/* Card Header */}
      <div className="p-5 border-b border-white/[0.06] bg-[#0d1117]/60">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-mono text-xs text-gray-400 tracking-wider">
            {category.code}
          </span>
          <span
            className={`font-mono text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider font-semibold ${
              badgeColors[category.statusBadge.variant]
            }`}
          >
            {category.statusBadge.label}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-[#00f2fe] transition-colors">
          {category.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1 font-mono leading-relaxed">
          {category.tagline}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-4 flex-1">
        {/* Technologies Pills */}
        <div>
          <div className="font-mono text-[10px] uppercase text-gray-500 mb-2 tracking-wider">
            Core Technologies &amp; Frameworks
          </div>
          <div className="flex flex-wrap gap-1.5">
            {category.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-[#161b22] border border-white/[0.08] text-gray-300 font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div>
          <div className="font-mono text-[10px] uppercase text-gray-500 mb-2 tracking-wider">
            Architectural Implementations &amp; Resilience Patterns
          </div>
          <ul className="space-y-1.5 font-mono text-xs text-gray-400">
            {category.architectureHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <span className="text-[#10b981] shrink-0 mt-0.5">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Telemetry Config Tags */}
      <div className="px-5 py-3 bg-[#0a0c10] border-t border-white/[0.06] flex flex-wrap items-center gap-2 font-mono text-[11px] text-gray-400">
        <span className="text-gray-600 text-[10px] uppercase tracking-wider mr-1">
          SPECS:
        </span>
        {category.specTags.map((spec, i) => (
          <span
            key={i}
            className="px-2 py-0.5 rounded bg-black/40 border border-white/[0.05] text-gray-400 flex items-center gap-1"
          >
            <span className="text-gray-500">{spec.label}:</span>
            <span className="text-gray-300">{spec.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function YamlLine({ line }: { line: string }) {
  if (!line.trim()) {
    return <div className="h-6" />;
  }

  // Top level section header (e.g. 01_agentic_ai_and_mcp:)
  if (/^\d{2}_[a-zA-Z0-9_]+:/.test(line)) {
    return (
      <div className="mt-2 text-[#10b981] font-semibold">
        <span>{line}</span>
      </div>
    );
  }

  // Key-value pair like '  - framework: "AWS Strands Agents SDK"'
  const kvMatch = line.match(/^(\s*-\s*)([a-zA-Z0-9_]+):\s*"(.*)"$/);
  if (kvMatch) {
    const [, indent, key, val] = kvMatch;
    return (
      <div className="text-gray-400">
        <span className="text-gray-600">{indent}</span>
        <span className="text-[#00f2fe]">{key}</span>:{" "}
        <span className="text-[#f59e0b]">&quot;{val}&quot;</span>
      </div>
    );
  }

  return <div className="text-gray-400">{line}</div>;
}
