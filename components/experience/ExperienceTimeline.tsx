import Section from "../ui/Section";

function ExperienceItem({
  role,
  company,
  period,
  location,
  points,
}: {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}) {
  return (
    <div className="border-l border-gray-800 pl-6 pb-10 relative">
      <div className="absolute w-3 h-3 bg-[var(--accent)] rounded-full -left-[7px] top-1" />

      <h3 className="text-xl font-semibold">{role}</h3>
      <p className="text-gray-400">
        {company} • {location} • {period}
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
        location="Bengaluru, India"
        points={[
          "Engineered core end-to-end features for enterprise-grade applications utilizing Python and AWS serverless architectures.",
          "Architected high-performance REST APIs across AWS Lambda and ECS Fargate, successfully decreasing average response times by 21x.",
        ]}
      />

      <ExperienceItem
        role="Software Engineering Intern"
        company="Accenture"
        period="Feb 2025 – Jun 2025"
        location="Bengaluru, India"
        points={[
          "Engineered Python-based backend utilities that automated simulation data processing workflows, streamlining performance analysis.",
          "Analyzed large-scale simulation outputs using data-driven optimization, directly improving system-level decision workflows and operational efficiency.",
        ]}
      />

      <ExperienceItem
        role="Full Stack Developer Intern"
        company="Envint Global"
        period="Aug 2024 – Dec 2024"
        location="Remote"
        points={[
          "Architected and built a scalable backend server foundation from scratch, designed to decouple services and easily support future operational expansion.",
          "Implemented secure JWT-based authentication and Role-Based Access Control (RBAC), fortifying API endpoints and ensuring strict authorization boundaries.",
        ]}
      />

      <ExperienceItem
        role="JAMstack Developer Intern"
        company="WeFrameTech"
        period="Jun 2024 – Jul 2024"
        location="Remote"
        points={[
          "Integrated headless CMS platforms (Directus, MedusaJS) with custom Node.js backend APIs to deliver dynamic, high-performance content delivery systems.",
        ]}
      />
    </Section>
  );
}
