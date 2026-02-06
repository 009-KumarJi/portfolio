import Section from "../ui/Section";

function ExperienceItem({
  role,
  company,
  period,
  points,
}: {
  role: string;
  company: string;
  period: string;
  points: string[];
}) {
  return (
    <div className="border-l border-gray-800 pl-6 pb-10 relative">
      <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[7px] top-1" />

      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-gray-400">
        {company} • {period}
      </p>

      <ul className="mt-3 space-y-2 text-gray-300">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <Section className="pb-24">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>

      <ExperienceItem
        role="Associate Software Engineer"
        company="Accenture"
        period="Oct 2025 – Present"
        points={[
          "Backend development using Python, AWS",
          "API development and production system optimization",
          "Data processing workflows in enterprise applications",
        ]}
      />

      <ExperienceItem
        role="Software Engineering Intern"
        company="Accenture"
        period="Feb 2025 – Jun 2025"
        points={[
          "Developed Python backend utilities for workflow automation",
          "Applied data-driven optimization and predictive analysis",
          "Integrated analysis outputs into backend workflows",
        ]}
      />

      <ExperienceItem
        role="Full Stack Developer Intern"
        company="Envint Global"
        period="Aug 2024 – Dec 2024"
        points={[
          "Designed scalable backend foundation from scratch",
          "Implemented JWT authentication and RBAC",
        ]}
      />

      <ExperienceItem
        role="JAMstack Developer Intern"
        company="WeFrameTech"
        period="Jun 2024 – Jul 2024"
        points={[
          "Integrated Directus and MedusaJS with backend APIs",
        ]}
      />
    </Section>
  );
}
