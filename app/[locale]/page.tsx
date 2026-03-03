import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { ReviewPopup } from "@/components/landing/review-popup";
import { Particles } from "@/components/ui/particles";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { getTranslations } from "next-intl/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jugleey.com";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tFaq = await getTranslations({ locale, namespace: "FAQ" });
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4, 5, 6, 7].map((n) => ({
      "@type": "Question",
      name: tFaq(`q${n}`),
      acceptedAnswer: {
        "@type": "Answer",
        text: tFaq(`a${n}`),
      },
    })),
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jugleey",
    description: tMeta("description"),
    url: `${SITE_URL}/${locale}`,
    applicationCategory: "BrowserExtension",
    operatingSystem: "Chrome",
    browserRequirements: "Google Chrome or Chromium-based browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-neutral-900 dark:text-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={40}
        color="#c084fc"
        ease={80}
        size={1.8}
      />
      <ScrollProgress className="z-[60] h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-red-400" />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <About />
      </main>
      <Footer />
      <ReviewPopup />
    </div>
  );
}
