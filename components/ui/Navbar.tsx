"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTelemetry } from "@/components/context/TelemetryContext";
import { AudioEngine } from "@/lib/audio";

const navLinks = [
  { label: "01 Architecture", href: "#architecture" },
  { label: "02 Metrics", href: "#metrics" },
  { label: "03 Capabilities", href: "#capabilities" },
  { label: "04 Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCmd, sfxEnabled, toggleSfx } = useTelemetry();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090c]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60"
            : "bg-[#08090c]/70 backdrop-blur-md border-b border-white/[0.05]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Tag & Edge Telemetry */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              onClick={() => AudioEngine.click(800)}
              className="flex items-center gap-2.5 group"
            >
              {/* Micro Biometric Avatar */}
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#00f2fe]/40 group-hover:border-[#00f2fe] group-hover:shadow-[0_0_10px_rgba(0,242,254,0.4)] transition-all shrink-0 bg-[#0d1117]">
                <Image
                  src="/profile.png"
                  alt="Krishna Kumar"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#10b981] border border-[#08090c]" />
              </div>

              <span className="font-mono text-sm sm:text-base font-bold text-[#10b981] tracking-tight group-hover:text-[#34d399] transition-colors">
                KK://systems
              </span>
            </a>

            {/* Edge Telemetry Badge */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-[#0d1117] border border-white/[0.08] font-mono text-xs text-gray-400">
              <span className="text-[#10b981] font-bold animate-pulse">●</span>
              <span>ap-south-1</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#10b981] font-medium">200 OK</span>
              <span className="text-gray-600">|</span>
              <span>UP: 99.98%</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#00f2fe]">p99: 12ms</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => AudioEngine.click(1000)}
                className="text-gray-400 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#10b981] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: SFX Toggle, Resume & ⌘K Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSfx}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0d1117] hover:bg-[#161b22] border border-white/[0.08] font-mono text-xs text-gray-400 hover:text-white transition-colors"
              title="Toggle Telemetry Audio Feedback"
            >
              <span className={sfxEnabled ? "text-[#10b981]" : "text-gray-500"}>
                {sfxEnabled ? "🔊" : "🔇"}
              </span>
              <span>{sfxEnabled ? "[SFX: ACTIVE]" : "[SFX: MUTED]"}</span>
            </button>

            {/* Resume Page Link - Prominent on Mobile & Desktop */}
            <Link
              href="/resume"
              onClick={() => AudioEngine.click(1200)}
              className="inline-flex items-center px-2 sm:px-3 py-1 rounded bg-[#0d1117] hover:bg-[#161b22] border border-[#10b981]/40 hover:border-[#10b981] font-mono text-xs text-[#10b981] hover:text-white transition-all shadow-[0_0_10px_rgba(16,185,129,0.15)] active:translate-y-px"
            >
              <span className="mr-1">📄</span>
              <span className="hidden sm:inline">[GET /resume]</span>
              <span className="sm:hidden font-semibold">Resume</span>
            </Link>

            {/* ⌘K Command Palette Button */}
            <button
              onClick={openCmd}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded bg-[#10b981] hover:bg-[#34d399] text-[#08090c] font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(16,185,129,0.35)] active:translate-y-px"
            >
              <span className="bg-[#08090c]/20 px-1 py-0.5 rounded text-[10px]">⌘K</span>
              <span>Connect</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                AudioEngine.click(800);
                setMobileOpen(!mobileOpen);
              }}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-white/5 text-gray-300"
              aria-label="Toggle Navigation Menu"
            >
              <span
                className={`w-5 h-[2px] bg-white transition-transform ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-white transition-transform ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#08090c]/98 border-b border-white/10 px-4 py-5 flex flex-col gap-3 font-mono text-sm animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between py-2 border-b border-white/[0.08] text-xs text-gray-400">
              <span className="text-[#10b981]">● CLUSTER: ap-south-1</span>
              <span>p99: 12ms</span>
            </div>

            {/* Featured Resume Link in Drawer */}
            <Link
              href="/resume"
              onClick={() => {
                AudioEngine.click(1200);
                setMobileOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#10b981]/15 hover:bg-[#10b981]/25 border border-[#10b981]/40 text-[#10b981] font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_12px_rgba(16,185,129,0.2)]"
            >
              <span>📄</span>
              <span>[VIEW RESUME — WEB &amp; PDF]</span>
            </Link>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  AudioEngine.click(1000);
                  setMobileOpen(false);
                }}
                className="text-gray-300 hover:text-[#10b981] py-2 border-b border-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-2 pt-2">
              <a
                href="/krishna_kumar.pdf"
                download="Krishna_Kumar_Resume.pdf"
                onClick={() => AudioEngine.chirp()}
                className="flex-1 text-center py-2 rounded bg-[#0d1117] border border-white/10 text-xs text-gray-300 hover:text-white"
              >
                ⬇ Direct PDF Download
              </a>
              <button
                onClick={() => {
                  toggleSfx();
                }}
                className="px-3 py-2 rounded bg-[#0d1117] border border-white/10 text-xs text-gray-400"
              >
                {sfxEnabled ? "SFX: ON" : "SFX: OFF"}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
