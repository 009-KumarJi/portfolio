import "./globals.css";

export const metadata = {
  title: "Krishna Kumar | Backend Engineer",
  description: "Backend-focused software engineer building scalable systems",
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
