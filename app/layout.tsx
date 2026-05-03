import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="ro" className={`${inter.variable} dark`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
