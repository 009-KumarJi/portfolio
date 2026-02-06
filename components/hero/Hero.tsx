"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";
import ProfileTerminal from "./ProfileTerminal";

export default function Hero() {
  return (
    <Section className="min-h-screen flex flex-col justify-center items-center md:items-center md:flex-row md:justify-between gap-10 text-center md:text-left">
      
      {/* MOBILE IMAGE */}
      <div className="md:hidden flex justify-center w-full">
        <ProfileTerminal />
      </div>

      {/* TEXT BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md md:max-w-xl flex flex-col items-center md:items-start"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          I build scalable backend systems
          <span className="text-[var(--accent)]">
            {" "}that survive production.
          </span>
        </h1>

        <p className="mt-4 text-gray-400">
          Associate Software Engineer focused on backend architecture,
          secure APIs, and cloud-native systems.
        </p>

        <div className="mt-6 flex gap-3 justify-center md:justify-start flex-wrap">
          <a href="#projects">
            <Button>View Projects</Button>
          </a>
          <Button variant="outline">Download Resume</Button>
        </div>
      </motion.div>

      {/* DESKTOP IMAGE */}
      <div className="hidden md:flex justify-end">
        <ProfileTerminal />
      </div>
    </Section>
  );
}
