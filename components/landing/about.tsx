"use client";

import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/creator.jpg"
            alt="Daniel Dupont"
            width={128}
            height={128}
            className="mb-6 h-32 w-32 rounded-full object-cover object-[center_20%] ring-2 ring-[#fc4e4e]/50"
          />

          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-3xl">
            {t("name")}
          </h2>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t("bio")}
            <br />
            {t("bio2")}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 dark:text-neutral-500">
            {t("story")}
          </p>

          <a
            href="https://x.com/leinadiotech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 px-5 py-2.5 text-sm font-medium text-neutral-900 dark:text-neutral-50 transition-colors hover:border-[#fc4e4e]/50 hover:bg-[#fc4e4e]/10"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            {t("cta")}
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
