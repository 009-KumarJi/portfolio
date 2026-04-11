"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-2 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-gray-400 mb-10">
          Production-deployed systems and engineering side-projects.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} index={i} />
        ))}
      </div>
    </Section>
  );
}
