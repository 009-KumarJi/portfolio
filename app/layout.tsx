import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TelemetryProvider } from "@/components/context/TelemetryContext";
import Toast from "@/components/ui/Toast";
import CommandPalette from "@/components/ui/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishna.novitrail.com"),
  title: "Krishna Kumar | Backend & Distributed Systems Engineer — GenAI Infrastructure",
  description:
    "Backend, GenAI & Distributed Systems Engineer building sub-millisecond AI safety guardrails, distributed ML streaming pipelines, zero-trust inference proxies, and multi-region AWS & OCI infrastructure.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "Generative AI",
    "Agentic AI",
    "Model Context Protocol",
    "AWS Strands SDK",
    "Amazon Bedrock",
    "FastAPI",
    "Python",
    "Go",
    "Kafka",
    "Redis",
    "DynamoDB",
    "ECS Fargate",
    "Krishna Kumar",
  ],
  authors: [{ name: "Krishna Kumar", url: "https://krishna.novitrail.com" }],
  openGraph: {
    title: "Krishna Kumar | Backend & Distributed Systems Engineer",
    description:
      "Architecting Distributed Backends, Realtime Pipelines & Production GenAI Firewalls.",
    url: "https://krishna.novitrail.com",
    siteName: "Krishna Kumar — Systems Control Plane",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Krishna Kumar — Systems Control Plane",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Kumar | Backend & Distributed Systems Engineer",
    description:
      "Architecting Distributed Backends, Realtime Pipelines & Production GenAI Firewalls.",
    images: ["/profile.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#08090c] text-[#e6edf3]`}
      >
        <TelemetryProvider>
          {children}
          <Toast />
          <CommandPalette />
        </TelemetryProvider>
      </body>
    </html>
  );
}
