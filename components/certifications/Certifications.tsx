import Section from "../ui/Section";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section className="pb-24">
      <h2 className="text-3xl font-semibold mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111318] border border-gray-800 rounded-xl p-5 hover:border-[var(--accent)] transition group"
          >
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)] text-xl group-hover:scale-110 transition-transform">✦</span>
              <span>{cert.title}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
