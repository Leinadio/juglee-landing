"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { motion, AnimatePresence } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { X, Loader2, Send, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const POPUP_DELAY_MS = 0;

export function ReviewPopup() {
  const t = useTranslations("Review");
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    function onDownload() {
      // Ne pas afficher si déjà montré dans cette session
      if (sessionStorage.getItem("juglee_review_shown")) return;
      sessionStorage.setItem("juglee_review_shown", "1");
      setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    }
    window.addEventListener("juglee:download", onDownload);
    return () => window.removeEventListener("juglee:download", onDownload);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          message: message.trim() || `${rating}/5`,
          rating,
          source: "post_download",
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      posthog.capture("review_submitted", { rating, source: "post_download" });
      setTimeout(() => setOpen(false), 3000);
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = cn(
    "w-full rounded-lg border px-3 py-2 text-sm",
    "border-neutral-300 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400",
    "dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-500",
    "focus:border-[#fc4e4e] focus:outline-none focus:ring-1 focus:ring-[#fc4e4e]/50"
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="review-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            key="review-popup"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-white dark:bg-[#0F0F0F] p-5 shadow-2xl sm:p-6"
          >
            <ShineBorder
              shineColor={["#fc4e4e", "#d0a0ff"]}
              borderWidth={1.5}
              duration={10}
            />

            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {t("title")}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {t("subtitle")}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {status === "success" ? (
              <div className="mt-6 py-6 text-center">
                <p className="text-3xl">&#10084;&#65039;</p>
                <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                  {t("thankYou")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="text-center">
                  <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
                    {t("ratingLabel")}
                  </p>
                  <div className="flex justify-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={cn(
                            "h-8 w-8 transition-colors",
                            (hoverRating || rating) >= star
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-neutral-300 dark:text-neutral-600"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("namePlaceholder")}
                  className={inputClasses}
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("messagePlaceholder")}
                  rows={3}
                  className={cn(inputClasses, "resize-y")}
                />

                {status === "error" && (
                  <p className="text-xs text-red-500 dark:text-red-400">
                    {t("error")}
                  </p>
                )}

                <ShimmerButton
                  type="submit"
                  disabled={status === "loading" || rating === 0}
                  background="linear-gradient(135deg, #fc4e4e, #d0a0ff)"
                  shimmerColor="rgba(255, 255, 255, 0.8)"
                  shimmerSize="2px"
                  className="w-full px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2 text-sm font-medium text-white drop-shadow-sm">
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {t("submit")}
                  </span>
                </ShimmerButton>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full text-center text-xs text-neutral-400 hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
                >
                  {t("skip")}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
