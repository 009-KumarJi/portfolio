import Section from "../ui/Section";
import { skills } from "@/data/skills";

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <span
            key={i}
            className="bg-[#151821] border border-gray-700 px-3 py-1 rounded text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMatrix() {
  return (
    <Section className="pb-24">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Backend & APIs" items={skills.backend} />
        <SkillGroup title="Databases" items={skills.databases} />
        <SkillGroup title="Cloud & DevOps" items={skills.cloud} />
      </div>
    </Section>
  );
}
