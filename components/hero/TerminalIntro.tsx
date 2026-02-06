"use client";

export default function TerminalIntro() {
  return (
    <div className="hidden md:block bg-black rounded-xl p-6 text-green-400 font-mono text-sm w-[420px] shadow-lg">
      <p>&gt; role: Backend Engineer</p>
      <p>&gt; stack: FastAPI | Node.js | AWS</p>
      <p>&gt; focus: RBAC | APIs | Systems</p>
      <p>&gt; status: shipping in production</p>
      <span className="animate-pulse">▌</span>
    </div>
  );
}
