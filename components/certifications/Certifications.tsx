import Section from "../ui/Section";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section className="pb-24">
      <h2 className="text-3xl font-semibold mb-10">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="bg-[#111318] border border-gray-800 rounded-xl p-5"
          >
            {cert}
          </div>
        ))}
      </div>
    </Section>
  );
}
