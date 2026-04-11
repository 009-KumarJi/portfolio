import "./globals.css";

export const metadata = {
  title: "Krishna Kumar | Software Engineer — Backend & Cloud",
  description:
    "Software engineer at Accenture building scalable APIs, cloud-native systems, and production-grade full-stack applications. Specializing in Python, Node.js, AWS, and distributed architectures.",
  keywords: [
    "software engineer",
    "backend engineer",
    "full stack developer",
    "cloud engineer",
    "Krishna Kumar",
    "Python",
    "Node.js",
    "AWS",
    "React",
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
