"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { Download, Play, MousePointerClick } from "lucide-react";

const icons = [Download, Play, MousePointerClick];
const numbers = ["01", "02", "03"];

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = icons.map((icon, i) => ({
    number: numbers[i],
    icon,
    title: t(`step${i + 1}Title`),
    description: t(`step${i + 1}Description`),
  }));

  return (
    <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gradient">
          {t("label")}
        </p>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
          {t("title")}
        </h2>
      </BlurFade>

      <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Connecting line */}
        <div className="absolute top-[7.25rem] right-[16.67%] left-[16.67%] hidden h-px border-t border-dashed border-neutral-300 dark:border-neutral-700 md:block" />

        {steps.map((step, i) => (
          <BlurFade key={step.number} delay={0.3 + i * 0.15} inView>
            <div className="flex flex-col items-center text-center">
              <span className="mb-4 text-7xl font-bold text-[#d0a0ff]/10">
                {step.number}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                <step.icon className="h-6 w-6 text-[#fc4e4e]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-neutral-500 dark:text-neutral-400">
                {step.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
