"use client";

import { useLocale } from "next-intl";
import posthog from "posthog-js";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "en" | "fr") {
    posthog.capture("language_switch", { locale: newLocale });
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 p-0.5 text-sm font-medium">
      <button
        onClick={() => switchLocale("en")}
        className={`rounded-full px-4 py-2 transition-colors ${
          locale === "en"
            ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50"
            : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("fr")}
        className={`rounded-full px-4 py-2 transition-colors ${
          locale === "fr"
            ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50"
            : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
        }`}
      >
        FR
      </button>
    </div>
  );
}
