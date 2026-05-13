import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abu-sufian-rafi.vercel.app"),
  title: {
    default: "Abu Sufian Rafi | Software Engineer",
    template: "%s | Abu Sufian Rafi",
  },
  description:
    "Software Engineer portfolio of Abu Sufian Rafi featuring Flutter and competitive programming achievements.",
  openGraph: {
    title: "Abu Sufian Rafi | Software Engineer",
    description:
      "Explore Abu Sufian Rafi's portfolio — Software Engineer & Flutter Developer building scalable apps, solving algorithmic challenges, and delivering clean, impactful solutions.",
    url: "https://abu-sufian-rafi.vercel.app",
    siteName: "Abu Sufian Rafi",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abu Sufian Rafi Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Sufian Rafi | Software Engineer Portfolio",
    description: "Software Engineer | Flutter Developer | Competitive Programmer",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth dark`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
