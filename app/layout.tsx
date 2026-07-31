import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nawakhun Promlok | Portfolio",
  description:
    "Portfolio of Nawakhun Promlok, a Computer Science student focused on cybersecurity, AI, and data science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
