export default function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 ${className}`}>
      {children}
    </section>
  );
}

