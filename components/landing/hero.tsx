"use client";

import { useTranslations } from "next-intl";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Highlighter } from "@/components/ui/highlighter";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MonitorSmartphone } from "lucide-react";

const DOWNLOAD_URL = "/juglee-extension.zip";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 md:pt-48">
      <div className="relative z-10 flex flex-col items-center text-center">
        <BlurFade delay={0.1} inView>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 px-4 py-1.5">
            <MonitorSmartphone className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <AnimatedGradientText colorFrom="#fc4e4e" colorTo="#d0a0ff" className="text-sm font-medium">
              {t("badge")}
            </AnimatedGradientText>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-7xl">
            {t.rich("title", {
              highlight: (chunks) => (
                <Highlighter
                  action="underline"
                  color="#fc4e4e"
                  strokeWidth={3}
                  isView
                >
                  {chunks}
                </Highlighter>
              ),
              mark: (chunks) => (
                <Highlighter
                  action="highlight"
                  color="#d0a0ff30"
                  strokeWidth={2}
                  isView
                >
                  {chunks}
                </Highlighter>
              ),
            })}
          </h1>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 md:text-xl">
            {t("subtitle")}
          </p>
        </BlurFade>

        <BlurFade delay={0.55} inView>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={DOWNLOAD_URL} download>
              <ShimmerButton
                background="linear-gradient(135deg, #fc4e4e, #d0a0ff)"
                shimmerColor="rgba(255, 255, 255, 0.8)"
                shimmerSize="2px"
                className="px-8 py-4 shadow-2xl"
              >
                <span className="text-lg font-semibold text-white drop-shadow-sm">
                  {t("cta")}
                </span>
              </ShimmerButton>
            </a>
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              {t("ctaSubtext")}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.7} inView>
          <div className="mt-12 w-full max-w-4xl">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/UCqDHIF19Zs?autoplay=1"
              thumbnailSrc="/videos/version_2-thumbnail.jpg"
              thumbnailAlt="Jugleey extension demo"
              className="rounded-xl"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
