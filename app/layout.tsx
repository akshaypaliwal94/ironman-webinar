import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ironman 70.3 Webinar — For Entrepreneurs & Executives",
  description:
    "In one 3-hour live webinar, a 17× Ironman finisher and active CEO hands you the exact system to conquer Ironman 70.3 — built around a founder's schedule. 5th April 2026 · 11:00 AM IST.",
  openGraph: {
    title: "Ironman 70.3 Webinar — For Entrepreneurs & Executives",
    description:
      "The complete race blueprint built for people who run companies and still want to cross the Ironman finish line.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
