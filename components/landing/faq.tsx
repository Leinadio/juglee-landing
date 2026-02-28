"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";

const faqKeys = [1, 2, 3, 4, 5, 6] as const;

export function FAQ() {
  const t = useTranslations("FAQ");

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
          {t("title")}
        </h2>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <Accordion type="single" collapsible className="mt-12">
          {faqKeys.map((n) => (
            <AccordionItem
              key={n}
              value={`item-${n}`}
              className="border-neutral-200 dark:border-neutral-800"
            >
              <AccordionTrigger className="text-left text-neutral-900 dark:text-neutral-50 hover:text-red-500">
                {t(`q${n}`)}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500 dark:text-neutral-400">
                {t(`a${n}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurFade>
    </section>
  );
}
