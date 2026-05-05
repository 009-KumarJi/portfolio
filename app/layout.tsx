import "./globals.css";

export const metadata = {
  title: "Krishna Kumar | Backend Engineer - Distributed Systems & AWS",
  description:
    "Backend engineer at Accenture building APIs, asynchronous cloud workflows, distributed systems, and AI-powered backend capabilities with Node.js, Python, AWS, Redis, and DynamoDB.",
  keywords: [
    "backend engineer",
    "distributed systems",
    "cloud engineer",
    "AI-powered systems",
    "Krishna Kumar",
    "Python",
    "Node.js",
    "AWS",
    "Redis",
    "DynamoDB",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
