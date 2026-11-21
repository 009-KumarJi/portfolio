"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { AudioEngine } from "@/lib/audio";

interface TelemetryContextType {
  toast: string | null;
  showToast: (msg: string) => void;
  isCmdOpen: boolean;
  openCmd: () => void;
  closeCmd: () => void;
  sfxEnabled: boolean;
  toggleSfx: () => void;
  copyToClipboard: (text: string, successMsg?: string) => Promise<void>;
}

const TelemetryContext = createContext<TelemetryContextType | undefined>(
  undefined
);

export function TelemetryProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kk_telemetry_sfx");
      if (saved !== null) {
        setSfxEnabled(saved === "true");
        AudioEngine.enabled = saved === "true";
      }
    }
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  const openCmd = useCallback(() => {
    AudioEngine.click(900);
    setIsCmdOpen(true);
  }, []);

  const closeCmd = useCallback(() => {
    setIsCmdOpen(false);
  }, []);

  const toggleSfx = useCallback(() => {
    const next = AudioEngine.toggle();
    setSfxEnabled(next);
    showToast(next ? "SFX: ACTIVE (AUDIO ENABLED)" : "SFX: MUTED (SILENT MODE)");
  }, [showToast]);

  const copyToClipboard = useCallback(
    async (text: string, successMsg = "BUFFER COPIED TO CLIPBOARD") => {
      AudioEngine.click(1600);
      try {
        await navigator.clipboard.writeText(text);
        showToast(successMsg);
      } catch {
        showToast(successMsg);
      }
    },
    [showToast]
  );

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
        AudioEngine.click(900);
      } else if (e.key === "Escape") {
        setIsCmdOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <TelemetryContext.Provider
      value={{
        toast,
        showToast,
        isCmdOpen,
        openCmd,
        closeCmd,
        sfxEnabled,
        toggleSfx,
        copyToClipboard,
      }}
    >
      {children}
    </TelemetryContext.Provider>
  );
}

export function useTelemetry() {
  const context = useContext(TelemetryContext);
  if (!context) {
    throw new Error("useTelemetry must be used within a TelemetryProvider");
  }
  return context;
}
