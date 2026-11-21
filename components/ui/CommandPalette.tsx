"use client";

import { useState, useEffect, useRef } from "react";
import { useTelemetry } from "@/components/context/TelemetryContext";
import { AudioEngine } from "@/lib/audio";
import { rawYamlConfig } from "@/data/skills";

interface CommandItem {
  id: string;
  label: string;
  detail: string;
  category: "ROUTE" | "ACTION" | "CLI";
  action: () => void;
}

export default function CommandPalette() {
  const { isCmdOpen, closeCmd, copyToClipboard } = useTelemetry();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      id: "copy-email",
      label: "Copy Direct Contact Email",
      detail: "krishna902kumar@gmail.com",
      category: "ACTION",
      action: () => {
        copyToClipboard("krishna902kumar@gmail.com", "EMAIL COPIED: krishna902kumar@gmail.com");
      },
    },
    {
      id: "goto-arch",
      label: "Jump to 01 Architecture Topology",
      detail: "#architecture",
      category: "ROUTE",
      action: () => {
        document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "goto-metrics",
      label: "Inspect 02 Realtime Latency Sparklines",
      detail: "#metrics",
      category: "ROUTE",
      action: () => {
        document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "goto-capabilities",
      label: "View 03 The Engine Room",
      detail: "#capabilities",
      category: "ROUTE",
      action: () => {
        document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "goto-experience",
      label: "View 04 Production Changelog & Career Timeline",
      detail: "#experience",
      category: "ROUTE",
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "copy-curl",
      label: "Copy CLI cURL Health Check",
      detail: "curl -s https://krishna.novitrail.com/api/v1/ping",
      category: "CLI",
      action: () => {
        copyToClipboard(
          "curl -s https://krishna.novitrail.com/api/v1/ping",
          "CLI cURL COMMAND COPIED"
        );
      },
    },
    {
      id: "download-specs",
      label: "Export Architecture Specs (YAML)",
      detail: "/etc/system/capabilities.yaml",
      category: "ACTION",
      action: () => {
        copyToClipboard(rawYamlConfig, "YAML SPECS COPIED TO BUFFER");
      },
    },
    {
      id: "view-resume",
      label: "Open Dedicated Resume Screen",
      detail: "GET /resume (Interactive Web + PDF Canvas)",
      category: "ROUTE",
      action: () => {
        closeCmd();
        window.location.href = "/resume";
      },
    },
    {
      id: "download-resume",
      label: "Direct Download Resume PDF",
      detail: "GET /krishna_kumar.pdf",
      category: "ACTION",
      action: () => {
        window.open("/krishna_kumar.pdf", "_blank");
      },
    },
    {
      id: "github-link",
      label: "Open GitHub Profile",
      detail: "github.com/009-KumarJi",
      category: "ROUTE",
      action: () => {
        window.open("https://github.com/009-KumarJi", "_blank");
      },
    },
    {
      id: "linkedin-link",
      label: "Open LinkedIn Profile",
      detail: "linkedin.com/in/krishna-kumar-975b25186",
      category: "ROUTE",
      action: () => {
        window.open("https://www.linkedin.com/in/krishna-kumar-975b25186/", "_blank");
      },
    },
  ];

  const filtered = commands.filter((c) =>
    (c.label + " " + c.detail + " " + c.category)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isCmdOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCmdOpen]);

  if (!isCmdOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      AudioEngine.click(1400);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      AudioEngine.click(1400);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        closeCmd();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150"
      onClick={closeCmd}
    >
      <div
        className="w-full max-w-xl rounded-xl bg-[#0d1117] border border-[#10b981]/40 shadow-2xl shadow-black overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Terminal Header & Input Bar */}
        <div className="p-3.5 border-b border-white/10 flex items-center gap-3 bg-[#08090c]">
          <span className="text-[#10b981] font-mono text-base font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or route... (e.g. 'email', 'arch', 'yaml')"
            className="w-full bg-transparent text-white font-mono text-sm focus:outline-none placeholder:text-gray-500"
          />
          <kbd className="px-2 py-0.5 rounded bg-[#161b22] border border-white/10 text-gray-400 text-[10px] font-mono uppercase">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-1 font-mono text-xs">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No matching command found</div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    closeCmd();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`px-3 py-2 rounded-lg cursor-pointer flex items-center justify-between transition-colors ${
                    isSelected
                      ? "bg-[#161b22] border border-[#10b981]/50 text-white"
                      : "text-gray-300 hover:bg-[#161b22]/60 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        item.category === "ACTION"
                          ? "bg-[#10b981]/15 text-[#10b981]"
                          : item.category === "CLI"
                          ? "bg-[#00f2fe]/15 text-[#00f2fe]"
                          : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className="text-gray-500 text-[11px] truncate max-w-[200px]">
                    {item.detail}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-3 py-2 bg-[#08090c] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>NAVIGATION: ↑ ↓ TO MOVE, ENTER TO SELECT</span>
          <span className="text-[#10b981]">KK://systems</span>
        </div>
      </div>
    </div>
  );
}
