import type { Metadata } from "next";
import "./globals.css";
import '@/styles/windows-xp.css';

export const metadata: Metadata = {
  title: "Krishna Kumar Portfolio",
  description: "My Windows XP themed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
