"use client";

import { useTelemetry } from "@/components/context/TelemetryContext";

export default function Toast() {
  const { toast } = useTelemetry();

  if (!toast) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded bg-[#161b22] border border-[#10b981]/50 shadow-2xl shadow-black font-mono text-xs text-[#10b981] animate-in fade-in slide-in-from-bottom-4 duration-200"
      role="status"
      aria-live="polite"
    >
      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
      <span className="font-semibold tracking-wide">{toast}</span>
    </div>
  );
}
