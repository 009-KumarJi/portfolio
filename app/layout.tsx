import "./globals.css";

export const metadata = {
  title: "Krishna Kumar | Software Engineer",
  description:
    "Software engineer building scalable APIs, full-stack applications, and cloud-native systems.",
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
