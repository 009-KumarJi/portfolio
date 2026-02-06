import "./globals.css";

export const metadata = {
  title: "Krishna Kumar | Backend Engineer",
  description:
    "Backend engineer building scalable APIs, RBAC systems, and cloud-native applications.",
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
