export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  if (variant === "outline") {
    return (
      <button className="px-6 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition">
        {children}
      </button>
    );
  }

  return (
    <button className="px-6 py-3 bg-[var(--accent)] text-black rounded-lg hover:opacity-90 transition">
      {children}
    </button>
  );
}
