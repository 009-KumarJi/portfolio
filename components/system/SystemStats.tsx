import Section from "../ui/Section";

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-[#111318] border border-gray-800 rounded-xl p-6">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

export default function SystemStats() {
  return (
    <Section className="pb-24">
      <h2 className="text-3xl font-semibold mb-8">System Overview</h2>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Experience" value="1+ Year" />
        <StatCard title="Production Systems" value="Yes" />
        <StatCard title="Auth & RBAC" value="JWT / Multi-role" />
        <StatCard title="Cloud" value="AWS" />
      </div>
    </Section>
  );
}
