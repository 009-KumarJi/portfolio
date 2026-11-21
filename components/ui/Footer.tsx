"use client";

import { useTelemetry } from "@/components/context/TelemetryContext";

export default function Footer() {
  const { copyToClipboard, openCmd } = useTelemetry();

  return (
    <footer className="w-full bg-[#08090c] border-t border-white/[0.08] pt-16 pb-12">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Ready to Deploy / Terminal Disconnect Card */}
        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 shadow-2xl shadow-black/80">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[#10b981]">
              <span className="animate-pulse">●</span>
              <span>krishna@workstation:~$ shutdown -h now? [Y/n]</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to Deploy Next-Gen Distributed Architecture?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Direct connection available for principal backend roles, distributed architecture consultation, and high-stakes GenAI production engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() =>
                copyToClipboard(
                  "krishna902kumar@gmail.com",
                  "EMAIL COPIED: krishna902kumar@gmail.com"
                )
              }
              type="button"
              className="px-5 py-3 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#08090c] font-mono text-xs font-bold tracking-wide transition-all duration-200 shadow-[0_0_16px_rgba(16,185,129,0.35)] flex items-center gap-2 active:translate-y-px"
            >
              <span>✉</span>
              <span>krishna902kumar@gmail.com</span>
            </button>

            <button
              onClick={openCmd}
              type="button"
              className="px-4 py-3 rounded-lg bg-[#161b22] hover:bg-[#1f242c] border border-white/[0.08] hover:border-white/20 text-gray-200 font-mono text-xs transition-colors flex items-center gap-2"
            >
              <span className="text-[#00f2fe]">&gt;</span>
              <span>[⌘K Command Palette]</span>
            </button>
          </div>
        </div>

        {/* Telemetry Status Bar & Daemon Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 font-mono text-xs">
          <div className="md:col-span-6 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#10b981]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="font-semibold">DAEMON: kk_systems_agent_v4.2.0 // ACTIVE_POLL_TICK</span>
            </div>
            <div className="text-gray-400">
              EDGE: bom1-edge-04 // LATENCY: 1.84ms // STATE: CLEAN
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-1.5">
            <div className="flex items-center gap-3 text-gray-400">
              <a
                href="mailto:krishna902kumar@gmail.com"
                className="text-[#00f2fe] hover:underline"
              >
                krishna902kumar@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">TLS 1.3</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">SSH ED25519</span>
            </div>
            <div className="text-gray-400 text-[11px]">
              PROTOCOL BUFFER SPEC v3.19.4
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Krishna Kumar [KK://systems]. All protocols reserved.</p>
          <p className="text-[10px] tracking-wider uppercase text-gray-400">
            SYNCHRONIZED WITH GLOBAL MESH
          </p>
        </div>
      </div>
    </footer>
  );
}
