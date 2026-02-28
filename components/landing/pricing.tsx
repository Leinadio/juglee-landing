"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Check } from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/eVqeVdgDQ51f3EN7tD9ws00";

const featureKeys = [
  "feature1",
  "feature2",
  "feature3",
  "feature4",
  "feature5",
  "feature6",
  "feature7",
] as const;

export function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section
      id="tarif"
      className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24"
    >
      <BlurFade delay={0.1} inView>
        <div className="mb-8 inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 px-4 py-1.5">
          <AnimatedShinyText className="text-sm">
            {t("badge")}
          </AnimatedShinyText>
        </div>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
          {t("title")}
        </h2>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="relative mt-12 w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 p-8">
          <BorderBeam
            colorFrom="#FF0000"
            colorTo="#FF4E45"
            size={80}
            duration={8}
            borderWidth={2}
          />

          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">{t("planName")}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-neutral-900 dark:text-neutral-50">{t("price")}</span>
            <span className="text-neutral-500 dark:text-neutral-400">{t("priceLabel")}</span>
          </div>

          <ul className="mt-8 space-y-4">
            {featureKeys.map((key) => (
              <li key={key} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-red-500" />
                <span className="text-neutral-600 dark:text-neutral-300">{t(key)}</span>
              </li>
            ))}
          </ul>

          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block"
          >
            <ShimmerButton
              background="rgba(220, 0, 0, 1)"
              shimmerColor="rgba(255, 255, 255, 0.8)"
              shimmerSize="2px"
              className="w-full py-4 shadow-2xl"
            >
              <span className="font-semibold text-white drop-shadow-sm">
                {t("cta")}
              </span>
            </ShimmerButton>
          </a>

          <p className="mt-4 text-center text-xs text-neutral-400 dark:text-neutral-500">
            {t("footnote")}
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
