import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mass Developers | Architectural Integrity",
  description:
    "MASS Developers operates at the intersection of structural brutalism and modern luxury. Premier construction and interior design company in Ernakulam, Kerala — since 2018.",
  keywords: [
    "Mass Developers",
    "construction Kerala",
    "interior design Ernakulam",
    "residential construction",
    "turnkey projects",
    "architectural design Kerala",
    "luxury construction",
  ],
  openGraph: {
    title: "Mass Developers | Architectural Integrity",
    description:
      "Redefining architectural integrity through innovative design and luxury construction. Built in Kerala, designed for the bold.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
