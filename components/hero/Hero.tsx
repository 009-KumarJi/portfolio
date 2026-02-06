"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";
import TerminalIntro from "./TerminalIntro";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-bold leading-tight">
          I build scalable backend systems
          <span className="text-[var(--accent)]"> that survive production.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Associate Software Engineer focused on backend architecture,
          secure APIs, and cloud-native systems.
        </p>

        <div className="mt-8 flex gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Download Resume</Button>
        </div>
      </motion.div>

      <TerminalIntro />
    </Section>
  );
}
