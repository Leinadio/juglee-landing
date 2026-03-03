import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { Particles } from "@/components/ui/particles";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-neutral-900 dark:text-neutral-50">
      <Particles
        className="absolute inset-0 z-0"
        quantity={40}
        color="#c084fc"
        ease={80}
        size={1.8}
      />
      <ScrollProgress className="z-[60] h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-red-400" />
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
}
