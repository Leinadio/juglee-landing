"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

export function Problem() {
  const t = useTranslations("Problem");

  const stats = [
    {
      value: Number(t("stat1Value")),
      suffix: t("stat1Suffix"),
      label: t("stat1Label"),
    },
    {
      value: Number(t("stat2Value")),
      suffix: t("stat2Suffix"),
      label: t("stat2Label"),
    },
    {
      value: Number(t("stat3Value")),
      suffix: t("stat3Suffix"),
      label: t("stat3Label"),
    },
  ];

  return (
    <section id="problem" className="mx-auto max-w-5xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <p className="text-sm font-semibold uppercase tracking-widest text-gradient">
          {t("label")}
        </p>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
          {t("title")}
        </h2>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t("description")}
        </p>
      </BlurFade>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat, i) => (
          <BlurFade key={i} delay={0.4 + i * 0.1} inView>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient">
                <NumberTicker value={stat.value} delay={0.5 + i * 0.15} />
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
