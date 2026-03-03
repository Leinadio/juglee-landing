"use client";

import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const DOWNLOAD_URL = "/jugleey-extension.zip";

const installStepKeys = [
  "installStep1",
  "installStep2",
  "installStep3",
  "installStep4",
  "installStep5",
  "installStep6",
] as const;

export function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <section
      id="tarif"
      className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24"
    >
      <BlurFade delay={0.1} inView>
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-5xl">
          {t("installTitle")}
        </h2>
      </BlurFade>

      <BlurFade delay={0.15} inView>
        <p className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t("installNote")}
        </p>
      </BlurFade>

      <div className="relative mt-12 w-full max-w-lg">
        {/* Ligne connectrice verticale */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

        <ol className="relative space-y-8">
          {installStepKeys.map((key, i) => (
            <BlurFade key={key} delay={0.2 + i * 0.08} inView>
              <li className="flex items-start gap-4">
                {/* Cercle numéroté */}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#fc4e4e]/30 bg-neutral-50 text-base font-bold text-[#fc4e4e] dark:bg-neutral-950">
                  {i + 1}
                </span>

                {/* Texte de l'étape */}
                <p className="pt-1.5 text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {t.rich(key, {
                    code: (chunks) => (
                      <code className="rounded bg-neutral-200 px-1.5 py-0.5 font-mono text-sm text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200">
                        {chunks}
                      </code>
                    ),
                    bold: (chunks) => (
                      <span className="font-semibold text-neutral-900 dark:text-neutral-50">{chunks}</span>
                    ),
                  })}
                </p>
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>

      <BlurFade delay={0.7} inView>
        <div className="mt-10 flex flex-col items-center gap-4">
          <ShimmerButton
            background="linear-gradient(135deg, #fc4e4e, #d0a0ff)"
            shimmerColor="rgba(255, 255, 255, 0.8)"
            shimmerSize="2px"
            className="px-8 py-4 shadow-2xl"
            onClick={() => {
              posthog.capture("download_click", { location: "pricing" });
              window.dispatchEvent(new Event("juglee:download"));
              const a = document.createElement("a");
              a.href = DOWNLOAD_URL;
              a.download = "";
              a.click();
            }}
          >
            <span className="text-lg font-semibold text-white drop-shadow-sm">
              {t("cta")}
            </span>
          </ShimmerButton>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            {t("footnote")}
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
