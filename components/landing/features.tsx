"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { CheckCircle, Eye, Download, Globe } from "lucide-react";

const icons = [CheckCircle, Eye, Download, Globe];

export function Features() {
  const t = useTranslations("Features");

  const features = icons.map((icon, i) => ({
    icon,
    title: t(`feature${i + 1}Title`),
    description: t(`feature${i + 1}Description`),
  }));

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-red-500">
          {t("label")}
        </p>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-neutral-50 md:text-5xl">
          {t("title")}
        </h2>
      </BlurFade>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, i) => (
          <BlurFade key={i} delay={0.3 + i * 0.1} inView>
            <MagicCard
              gradientColor="#FF000010"
              gradientFrom="#FF0000"
              gradientTo="#FF4E45"
              className="rounded-2xl border border-neutral-800"
            >
              <div className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/10">
                  <feature.icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-50">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
