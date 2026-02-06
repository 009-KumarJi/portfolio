export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-6xl mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
}
