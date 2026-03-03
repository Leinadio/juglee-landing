"use client";

import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mx-auto max-w-5xl px-6 pb-12 pt-8">
      <Separator className="mb-8 bg-neutral-200 dark:bg-neutral-800" />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-[#fc4e4e]" />
          <span className="font-semibold text-neutral-900 dark:text-neutral-50">Juglee</span>
        </div>
        <p className="text-sm text-neutral-400 dark:text-neutral-500">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
