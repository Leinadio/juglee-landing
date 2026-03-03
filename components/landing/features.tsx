"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { CheckCircle, Eye, Download, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: CheckCircle,
    titleKey: "feature1Title",
    descKey: "feature1Description",
    className: "col-span-3 md:col-span-2",
    backgroundImage: "/images/image_1.png",
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
        <BentoGrid className="mt-16 auto-rows-[16rem] grid-cols-3 gap-4">
          {features.map((feature, i) =>
            feature.backgroundImage ? (
              <div
                key={i}
                className={cn(
                  "group relative col-span-3 row-span-2 flex flex-col overflow-hidden rounded-xl md:col-span-2",
                  "bg-[#0F0F0F] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                  "transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]"
                )}
              >
                <div className="relative w-full min-h-0 flex-1">
                  <img
                    src={feature.backgroundImage}
                    alt=""
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-transparent" />
                </div>
                <div className="relative z-10 shrink-0 px-5 pb-5 -mt-6">
                  <feature.Icon className="h-10 w-10 text-neutral-50" />
                  <h3 className="mt-1 text-xl font-semibold text-neutral-50">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="max-w-lg text-neutral-300">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            ) : (
              <BentoCard
                key={i}
                name={t(feature.titleKey)}
                description={t(feature.descKey)}
                Icon={feature.Icon}
                className={cn(feature.className, "h-[16rem]")}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fc4e4e]/8 to-[#d0a0ff]/8" />
                }
              />
            )
          )}
        </BentoGrid>
      </BlurFade>
    </section>
  );
}
