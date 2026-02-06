import Hero from "@/components/hero/Hero";
import Footer from "@/components/ui/Footer";
import SystemStats from "@/components/system/SystemStats";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import Certifications from "@/components/certifications/Certifications";


export default function Home() {
  return (
    <main className="space-y-32">
      <Hero />
      <SystemStats />
      <ExperienceTimeline />
      <ProjectsSection />
      <SkillsMatrix />
      <Certifications />
      <Footer />
    </main>
  );
}
