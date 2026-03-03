"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { CheckCircle, Eye, Download, Globe } from "lucide-react";

const DOWNLOAD_URL = "/juglee-extension.zip";

const features = [
  {
    Icon: CheckCircle,
    titleKey: "feature1Title",
    descKey: "feature1Description",
    className: "col-span-3 md:col-span-2",
  },
  {
    Icon: Eye,
    titleKey: "feature2Title",
    descKey: "feature2Description",
    className: "col-span-3 md:col-span-1",
  },
  {
    Icon: Download,
    titleKey: "feature3Title",
    descKey: "feature3Description",
    className: "col-span-3 md:col-span-1",
  },
  {
    Icon: Globe,
    titleKey: "feature4Title",
    descKey: "feature4Description",
    className: "col-span-3 md:col-span-2",
  },
];

export function Features() {
  const t = useTranslations("Features");

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
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

      <BlurFade delay={0.3} inView>
        <BentoGrid className="mt-16 auto-rows-[14rem] md:auto-rows-[16rem]">
          {features.map((feature, i) => (
            <BentoCard
              key={i}
              name={t(feature.titleKey)}
              description={t(feature.descKey)}
              Icon={feature.Icon}
              className={feature.className}
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-[#fc4e4e]/8 to-[#d0a0ff]/8" />
              }
              href={DOWNLOAD_URL}
              cta={t("label")}
            />
          ))}
        </BentoGrid>
      </BlurFade>
    </section>
  );
}
