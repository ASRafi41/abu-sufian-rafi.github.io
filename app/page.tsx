import type { Metadata } from "next";
import { SiteChrome } from "@/app/components/site-chrome";
import { PortfolioSections } from "@/app/sections/portfolio-sections";
import { personalInfo } from "@/app/lib/data";

export const metadata: Metadata = {
  title: `${personalInfo.name} | Software Engineer Portfolio`,
  description:
    "Premium portfolio of Abu Sufian Rafi, Software Engineer, Flutter Developer, and Competitive Programmer.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  address: { "@type": "PostalAddress", addressLocality: personalInfo.location },
  email: personalInfo.email,
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteChrome />
      <PortfolioSections />
    </>
  );
}
