import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogaru Cătălin — Web Developer",
  description:
    "Site-uri ultra-rapide și sisteme de management pentru afaceri locale. Fără abonamente lunare. Cod personalizat. Performanță maximă.",
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={GeistSans.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
