function Badge({ label }: { label: string }) {
  return (
    <span className="text-xs bg-[#151821] border border-gray-700 px-2 py-1 rounded">
      {label}
    </span>
  );
}

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  live,
}: {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
}) {
  return (
    <div className="bg-[#111318] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex gap-3 text-sm text-gray-400">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub ↗
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 mt-3">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((tech, i) => (
          <Badge key={i} label={tech} />
        ))}
      </div>
    </div>
  );
}
