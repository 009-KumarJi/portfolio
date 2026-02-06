import Section from "../ui/Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Section id="projects" className="pb-24">
      <h2 className="text-3xl font-semibold mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </Section>
  );
}
