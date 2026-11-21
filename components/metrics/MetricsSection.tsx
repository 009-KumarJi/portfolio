"use client";

import { useState } from "react";
import { useTelemetry } from "@/components/context/TelemetryContext";
import { AudioEngine } from "@/lib/audio";

interface ChartData {
  p50: string;
  p95: string;
  p99: string;
}

const chartDatasets: Record<"1h" | "24h" | "7d", ChartData> = {
  "1h": {
    p50: "0,150 50,140 100,145 150,135 200,138 250,130 300,134 350,128 400,132 450,125 500,128 550,122 600,126 650,120 700,122 750,118 800,115",
    p95: "0,120 50,115 100,125 150,105 200,110 250,95 300,102 350,92 400,98 450,88 500,92 550,84 600,88 650,80 700,82 750,78 800,74",
    p99: "0,90 50,85 100,100 150,75 200,82 250,65 300,72 350,62 400,68 450,55 500,60 550,50 600,56 650,46 700,48 750,42 800,38",
  },
  "24h": {
    p50: "0,145 50,142 100,140 150,138 200,136 250,132 300,130 350,128 400,129 450,125 500,124 550,121 600,122 650,120 700,119 750,116 800,114",
    p95: "0,110 50,108 100,112 150,102 200,105 250,92 300,95 350,88 400,90 450,85 500,84 550,82 600,80 650,78 700,79 750,76 800,72",
    p99: "0,80 50,82 100,78 150,70 200,74 250,60 300,62 350,58 400,56 450,52 500,48 550,45 600,44 650,42 700,40 750,38 800,35",
  },
  "7d": {
    p50: "0,140 50,138 100,137 150,135 200,132 250,130 300,128 350,126 400,125 450,122 500,120 550,118 600,116 650,115 700,114 750,112 800,110",
    p95: "0,105 50,102 100,100 150,96 200,94 250,90 300,88 350,85 400,82 450,80 500,78 550,75 600,72 650,70 700,68 750,66 800,64",
    p99: "0,75 50,72 100,70 150,68 200,65 250,62 300,58 350,55 400,52 450,48 500,45 550,42 600,40 650,38 700,36 750,34 800,32",
  },
};

export default function MetricsSection() {
  const [activeWindow, setActiveWindow] = useState<"1h" | "24h" | "7d">("1h");
  const [hoverData, setHoverData] = useState<{
    x: number;
    time: string;
    throughput: string;
    p99: string;
  } | null>(null);
  const { showToast } = useTelemetry();

  const handleWindowChange = (w: "1h" | "24h" | "7d") => {
    AudioEngine.click(1100);
    setActiveWindow(w);
    showToast(`SAMPLING WINDOW: ${w.toUpperCase()}`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const pct = Math.round((x / rect.width) * 100);
    const fakeP99 = (10 + Math.sin(pct / 5) * 3).toFixed(2);
    setHoverData({
      x,
      time: `T-${100 - pct}s [SAMPLE #${pct * 4}]`,
      throughput: `${14000 + pct * 25} req/s`,
      p99: `${fakeP99}ms`,
    });
  };

  const currentData = chartDatasets[activeWindow];

  return (
    <section
      id="metrics"
      className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-16"
    >
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <div className="font-mono text-xs text-[#00f2fe] tracking-widest uppercase flex items-center gap-2">
            <span>02 // TELEMETRY &amp; HARDWARE BENCHMARKS</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00f2fe] inline-block" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Performance Under Stress
          </h2>
        </div>
        <div className="font-mono text-xs text-gray-400">
          BENCHMARK HARNESS: K6 + LOCUST CLUSTER (bom1)
        </div>
      </div>

      {/* 4 High-Density Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 flex flex-col justify-between hover:border-[#10b981]/40 transition-colors">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Short-Circuit Latency
          </span>
          <div className="font-mono text-3xl sm:text-4xl font-bold text-[#10b981] my-2">
            &lt;1.0ms
          </div>
          <span className="font-mono text-xs text-gray-400">
            Pre-flight regex evaluation on ingress edge proxy
          </span>
        </div>

        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 flex flex-col justify-between hover:border-[#00f2fe]/40 transition-colors">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Cloud Footprint
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-[#00f2fe] my-2">
            Multi-Region
          </div>
          <span className="font-mono text-xs text-gray-400">
            AWS (ap-south-1) &amp; OCI Hybrid active-active sync
          </span>
        </div>

        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 flex flex-col justify-between hover:border-[#10b981]/40 transition-colors">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Availability SLO
          </span>
          <div className="font-mono text-3xl sm:text-4xl font-bold text-[#10b981] my-2">
            99.98%
          </div>
          <span className="font-mono text-xs text-gray-400">
            Automated failover daemons with health probes
          </span>
        </div>

        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 flex flex-col justify-between hover:border-[#f59e0b]/40 transition-colors">
          <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            OCI Credentials
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f59e0b] my-2">
            2x Certified
          </div>
          <span className="font-mono text-xs text-gray-400">
            Cloud Infrastructure (AI Professional + Foundations)
          </span>
        </div>
      </div>

      {/* Real-time SVG Latency Sparklines Container */}
      <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 sm:p-6 flex flex-col gap-4 shadow-xl shadow-black/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs font-bold text-white tracking-wide">
              EDGE_LATENCY_PERCENTILES
            </span>
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="flex items-center gap-1.5 text-[#00f2fe]">
                <span className="w-2.5 h-0.5 bg-[#00f2fe] inline-block" />
                p50 (4ms)
              </span>
              <span className="flex items-center gap-1.5 text-[#10b981]">
                <span className="w-2.5 h-0.5 bg-[#10b981] inline-block" />
                p95 (9ms)
              </span>
              <span className="flex items-center gap-1.5 text-[#f59e0b]">
                <span className="w-2.5 h-0.5 border-t border-dashed border-[#f59e0b] inline-block" />
                p99 (12ms)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 font-mono text-xs">
            {(["1h", "24h", "7d"] as const).map((w) => (
              <button
                key={w}
                onClick={() => handleWindowChange(w)}
                type="button"
                className={`px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                  activeWindow === w
                    ? "bg-[#10b981] text-[#08090c]"
                    : "bg-[#161b22] text-gray-400 hover:text-white"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Graph Area */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverData(null)}
          className="relative w-full h-44 sm:h-52 bg-[#08090c] rounded-lg border border-white/[0.06] overflow-hidden flex items-center justify-center cursor-crosshair group"
        >
          {/* Axis Grid lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line stroke="rgba(255,255,255,0.04)" strokeWidth="1" x1="0" x2="100%" y1="25%" y2="25%" />
            <line stroke="rgba(255,255,255,0.04)" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%" />
            <line stroke="rgba(255,255,255,0.04)" strokeWidth="1" x1="0" x2="100%" y1="75%" y2="75%" />
          </svg>

          {/* Dynamic Sparkline Curves */}
          <svg
            className="absolute inset-0 w-full h-full p-2"
            preserveAspectRatio="none"
            viewBox="0 0 800 160"
          >
            <defs>
              <linearGradient id="grad-p50" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* p50 Area + Line */}
            <polygon
              fill="url(#grad-p50)"
              points={`0,160 ${currentData.p50} 800,160`}
            />
            <polyline
              fill="none"
              points={currentData.p50}
              stroke="#00f2fe"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* p95 Line */}
            <polyline
              fill="none"
              points={currentData.p95}
              stroke="#10b981"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* p99 Line */}
            <polyline
              fill="none"
              points={currentData.p99}
              stroke="#f59e0b"
              strokeDasharray="4,4"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Interactive Crosshair & Tooltip */}
          {hoverData && (
            <>
              <div
                className="absolute top-0 bottom-0 w-px bg-[#10b981]/70 pointer-events-none"
                style={{ left: `${hoverData.x}px` }}
              />
              <div
                className="absolute z-20 pointer-events-none px-3 py-1.5 rounded-md bg-[#161b22] border border-white/20 font-mono text-xs shadow-xl"
                style={{
                  left: `${Math.min(hoverData.x + 12, 600)}px`,
                  top: "12px",
                }}
              >
                <div className="text-gray-400 text-[10px]">{hoverData.time}</div>
                <div className="text-[#10b981] font-bold">
                  p99: {hoverData.p99} | {hoverData.throughput}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Metrics Specs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-[11px] text-gray-500 gap-1 pt-1">
          <span>SAMPLING: 100ms TICK RATE</span>
          <span>EDGE POP: AWS ap-south-1 (MUMBAI) ↔ OCI AP-HYDERABAD-1</span>
          <span>TOTAL LOAD: 4.8M REQ/HR</span>
        </div>
      </div>
    </section>
  );
}
