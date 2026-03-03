"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const DOWNLOAD_URL = "/juglee-extension.zip";

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

      <BlurFade delay={0.2} inView>
        <div className="mt-12 w-full max-w-lg rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 p-8">
          <p className="mb-6 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t("installNote")}
          </p>
          <ol className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
            {installStepKeys.map((key, i) => (
              <li key={key} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fc4e4e]/10 text-xs font-bold text-[#fc4e4e]">
                  {i + 1}
                </span>
                <span>
                  {t.rich(key, {
                    code: (chunks) => (
                      <code className="rounded bg-neutral-200 px-1.5 py-0.5 font-mono text-xs text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200">
                        {chunks}
                      </code>
                    ),
                    bold: (chunks) => (
                      <span className="font-semibold text-neutral-900 dark:text-neutral-50">{chunks}</span>
                    ),
                  })}
                </span>
              </li>
            ))}
          </ol>

          <a
            href={DOWNLOAD_URL}
            download
            className="mt-8 block"
          >
            <ShimmerButton
              background="linear-gradient(135deg, #fc4e4e, #d0a0ff)"
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
