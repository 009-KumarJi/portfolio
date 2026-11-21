"use client";

import { useTelemetry } from "@/components/context/TelemetryContext";

export default function Footer() {
  const { copyToClipboard, openCmd } = useTelemetry();

  return (
    <footer className="w-full bg-[#08090c] border-t border-white/[0.08] pt-12 sm:pt-16 pb-12 overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Ready to Deploy / Terminal Disconnect Card */}
        <div className="rounded-xl bg-[#0d1117] border border-white/[0.08] p-5 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 sm:mb-12 shadow-2xl shadow-black/80">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs text-[#10b981]">
              <span className="animate-pulse">●</span>
              <span className="break-all sm:break-normal">
                krishna@workstation:~$ shutdown -h now? [Y/n]
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to Deploy Next-Gen Distributed Architecture?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Direct connection available for backend &amp; distributed systems engineering, high-throughput pipelines, and production GenAI firewalls.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() =>
                copyToClipboard(
                  "krishna902kumar@gmail.com",
                  "EMAIL COPIED: krishna902kumar@gmail.com"
                )
              }
              type="button"
              className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#08090c] font-mono text-xs font-bold tracking-wide transition-all duration-200 shadow-[0_0_16px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 active:translate-y-px"
            >
              <span>✉</span>
              <span className="truncate">krishna902kumar@gmail.com</span>
            </button>

            <button
              onClick={openCmd}
              type="button"
              className="w-full sm:w-auto px-4 py-3 rounded-lg bg-[#161b22] hover:bg-[#1f242c] border border-white/[0.08] hover:border-white/20 text-gray-200 font-mono text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span className="text-[#00f2fe]">&gt;</span>
              <span>[⌘K Command Palette]</span>
            </button>
          </div>
        </div>

        {/* Telemetry Status Bar & Daemon Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8 font-mono text-xs border-b border-white/[0.06] pb-8">
          {/* Left Column: Daemon & Node State */}
          <div className="md:col-span-7 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2 text-[#10b981]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping shrink-0" />
              <span className="font-semibold break-all sm:break-normal">
                DAEMON: kk_systems_agent_v4.2.0
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] text-[10px] border border-[#10b981]/30">
                ACTIVE_POLL_TICK
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-gray-400 text-[11px]">
              <span>EDGE: bom1-edge-04</span>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <span>LATENCY: 1.84ms</span>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <span className="text-[#10b981]">STATE: CLEAN (200 OK)</span>
            </div>
          </div>

          {/* Right Column: Protocols & Direct Links */}
          <div className="md:col-span-5 flex flex-col md:items-end justify-between gap-2">
            <div className="flex flex-wrap items-center md:justify-end gap-2 text-gray-400 text-xs">
              <a
                href="mailto:krishna902kumar@gmail.com"
                className="text-[#00f2fe] hover:underline"
              >
                krishna902kumar@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">TLS 1.3</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">SSH ED25519</span>
            </div>
            <div className="text-gray-500 text-[11px]">
              PROTOCOL BUFFER SPEC v3.19.4 // UTC+5:30
            </div>
          </div>
        </div>

        {/* Bottom copyright line & engineering quote */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400 text-center md:text-left">
          <p className="order-2 md:order-1 text-gray-500">
            © {new Date().getFullYear()} Krishna Kumar [KK://systems]. All protocols reserved.
          </p>

          <p className="order-1 md:order-2 text-[11px] sm:text-xs text-gray-400 leading-relaxed max-w-xl md:text-right">
            ⚡ Built by me, my brain, my CPU, and of course{" "}
            <span className="text-[#00f2fe] font-medium">Antigravity</span> — because frontend can be done by anyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
