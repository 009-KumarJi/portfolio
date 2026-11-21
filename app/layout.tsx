import "./globals.css";

export const metadata = {
  title: "Krishna Kumar | Backend & Cloud Engineer - Generative AI Systems",
  description:
    "Backend & Cloud Engineer at Accenture architecting Agentic AI workflows, AWS distributed pipelines, real-time streaming systems, and high-throughput microservices.",
  keywords: [
    "Backend Engineer",
    "Cloud Engineer",
    "Generative AI",
    "Agentic AI",
    "AWS Strands SDK",
    "Model Context Protocol",
    "Amazon Bedrock",
    "Python",
    "FastAPI",
    "AWS Lambda",
    "ECS Fargate",
    "DynamoDB",
    "Krishna Kumar",
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
