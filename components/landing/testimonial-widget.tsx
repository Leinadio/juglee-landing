"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { MessageSquareHeart, X, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialWidget() {
  const t = useTranslations("Testimonial");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setTimeout(() => {
        setOpen(false);
        setName("");
        setEmail("");
        setMessage("");
        setStatus("idle");
      }, 3000);
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
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-center rounded-full p-2 transition-colors",
          "text-neutral-500 dark:text-neutral-400",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-200",
          open && "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
        )}
        aria-label={t("triggerLabel")}
      >
        <MessageSquareHeart className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="testimonial-popup"
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute right-0 top-full mt-2 z-50",
              "w-80 sm:w-96"
            )}
          >
            <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#0F0F0F] p-4 shadow-2xl sm:p-5">
              <ShineBorder
                shineColor={["#fc4e4e", "#d0a0ff"]}
                borderWidth={1.5}
                duration={10}
              />

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
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

              <p className="mt-3 text-xs text-neutral-400 dark:text-neutral-500">
                {t("consent")}
              </p>

              {status === "success" ? (
                <div className="mt-4 py-4 text-center">
                  <p className="text-2xl">&#10084;&#65039;</p>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    {t("thankYou")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("namePlaceholder")}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("emailPlaceholder")}
                    className={inputClasses}
                  />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("messagePlaceholder")}
                    rows={3}
                    className={cn(inputClasses, "resize-none")}
                  />
                  {status === "error" && (
                    <p className="text-xs text-red-500 dark:text-red-400">
                      {t("error")}
                    </p>
                  )}
                  <ShimmerButton
                    type="submit"
                    disabled={status === "loading" || !message.trim()}
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
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
