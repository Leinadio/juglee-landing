"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";
import { LanguageSwitcher } from "./language-switcher";
import { TestimonialWidget } from "./testimonial-widget";
import { ThemeToggle } from "./theme-toggle";

const DOWNLOAD_URL = "/juglee-extension.zip";

export function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200 dark:border-neutral-800/50 bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <Image src="/images/icon.png" alt="Jugleey" width={24} height={24} />
          <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50">Jugleey</span>
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <TestimonialWidget />
          <a href={DOWNLOAD_URL} download className="hidden md:block" onClick={() => posthog.capture("download_click", { location: "navbar" })}>
            <ShimmerButton
              background="linear-gradient(135deg, #fc4e4e, #d0a0ff)"
              shimmerColor="rgba(255, 255, 255, 0.8)"
              shimmerSize="2px"
              className="px-5 py-2"
            >
              <span className="text-sm font-medium text-white drop-shadow-sm">
                {t("cta")}
              </span>
            </ShimmerButton>
          </a>
        </div>
      </div>
    </nav>
  );
}
