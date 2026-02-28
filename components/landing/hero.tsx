"use client";

import { useTranslations } from "next-intl";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MonitorSmartphone } from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/eVqeVdgDQ51f3EN7tD9ws00";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      <Particles
        className="absolute inset-0 z-0"
        quantity={60}
        color="#FF0000"
        ease={80}
        size={0.6}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <BlurFade delay={0.1} inView>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5">
            <MonitorSmartphone className="h-4 w-4 text-neutral-400" />
            <AnimatedShinyText className="text-sm">
              {t("badge")}
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            <AnimatedGradientText colorFrom="#FF0000" colorTo="#FF4E45">
              {t("title")}
            </AnimatedGradientText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            {t("subtitle")}
          </p>
        </BlurFade>

        <BlurFade delay={0.55} inView>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                background="rgba(255, 0, 0, 0.2)"
                shimmerColor="#FF0000"
                className="px-8 py-4 shadow-2xl"
              >
                <span className="text-lg font-semibold text-white">
                  {t("cta")}
                </span>
              </ShimmerButton>
            </a>
            <p className="text-sm text-neutral-500">
              {t("ctaSubtext")}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
