import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/hero/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import MetricsSection from "@/components/metrics/MetricsSection";
import EngineRoom from "@/components/capabilities/EngineRoom";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import Certifications from "@/components/certifications/Certifications";
import Education from "@/components/education/Education";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full relative min-h-screen bg-[#08090c] overflow-hidden">
        {/* Blueprint Dot Matrix Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-40 z-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 flex flex-col w-full">
          <Hero />
          <ProjectsSection />
          <MetricsSection />
          <EngineRoom />
          <ExperienceTimeline />
          <Certifications />
          <Education />
          <Footer />
        </div>
      </main>
    </>
  );
}
