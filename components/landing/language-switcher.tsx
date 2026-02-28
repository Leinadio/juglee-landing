"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "en" | "fr") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 p-0.5 text-xs font-medium">
      <button
        onClick={() => switchLocale("en")}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "en"
            ? "bg-neutral-700 text-neutral-50"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("fr")}
        className={`rounded-full px-3 py-1 transition-colors ${
          locale === "fr"
            ? "bg-neutral-700 text-neutral-50"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
      >
        FR
      </button>
    </div>
  );
}
