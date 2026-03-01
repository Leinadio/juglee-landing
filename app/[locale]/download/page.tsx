"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Download,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function DownloadPage() {
  const t = useTranslations("Download");
  const [key, setKey] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "valid" | "invalid"
  >("idle");
  const [downloadToken, setDownloadToken] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/verify-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: key.trim() }),
      });
      const data = await res.json();
      if (data.valid && data.token) {
        setDownloadToken(data.token);
        setStatus("valid");
      } else {
        setStatus("invalid");
      }
    } catch {
      setStatus("invalid");
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-neutral-900 dark:text-neutral-50">
      <nav className="border-b border-neutral-200 dark:border-neutral-800/50 bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">Juglee</span>
          </a>
        </div>
      </nav>

      <main className="mx-auto flex max-w-md flex-col items-center px-6 py-24">
        <BlurFade delay={0.1} inView>
          <h1 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-center text-neutral-400 dark:text-neutral-500">
            {t("subtitle")}
          </p>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <form onSubmit={handleSubmit} className="mt-10 w-full space-y-4">
            <div>
              <label
                htmlFor="license-key"
                className="mb-2 block text-sm font-medium"
              >
                {t("label")}
              </label>
              <input
                id="license-key"
                type="text"
                value={key}
                onChange={(e) => {
                  setKey(e.target.value);
                  if (status === "invalid") setStatus("idle");
                }}
                placeholder="JGLEE-XXXX-XXXX-XXXX"
                className="w-full rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-3 text-center font-mono tracking-wider uppercase placeholder:text-neutral-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:placeholder:text-neutral-600"
                disabled={status === "loading" || status === "valid"}
              />
            </div>
            <Button
              type="submit"
              disabled={
                !key.trim() || status === "loading" || status === "valid"
              }
              className="w-full bg-red-600 py-3 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {t("verifying")}
                </span>
              ) : (
                t("verify")
              )}
            </Button>
          </form>
        </BlurFade>

        {status === "valid" && (
          <BlurFade delay={0.1} inView>
            <div className="mt-8 w-full rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
              <CheckCircle className="mx-auto h-10 w-10 text-green-500" />
              <p className="mt-3 font-semibold text-green-400">
                {t("successTitle")}
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                {t("successDescription")}
              </p>
              <a
                href={`/api/download?token=${downloadToken}`}
                download
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                <Download className="h-5 w-5" />
                {t("downloadButton")}
              </a>
            </div>

            <div className="mt-8 w-full rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="font-semibold">{t("installTitle")}</h3>
              <ol className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>1. {t("installStep1")}</li>
                <li>2. {t("installStep2")}</li>
                <li>3. {t("installStep3")}</li>
                <li>4. {t("installStep4")}</li>
                <li>5. {t("installStep5")}</li>
              </ol>
            </div>
          </BlurFade>
        )}

        {status === "invalid" && (
          <BlurFade delay={0.1} inView>
            <div className="mt-8 w-full rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center">
              <AlertCircle className="mx-auto h-8 w-8 text-red-500" />
              <p className="mt-3 font-semibold text-red-400">
                {t("errorTitle")}
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                {t("errorDescription")}
              </p>
            </div>
          </BlurFade>
        )}
      </main>
    </div>
  );
}
