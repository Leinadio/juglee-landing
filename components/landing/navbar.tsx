"use client";

import { useEffect, useState } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CheckCircle } from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/eVqeVdgDQ51f3EN7tD9ws00";

export function Navbar() {
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
          ? "border-b border-neutral-800/50 bg-[#0F0F0F]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <CheckCircle className="h-6 w-6 text-red-500" />
          <span className="text-xl font-bold text-neutral-50">Juglee</span>
        </a>
        <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
          <ShimmerButton
            background="rgba(255, 0, 0, 0.15)"
            shimmerColor="#FF0000"
            className="px-5 py-2"
          >
            <span className="text-sm font-medium text-white">
              Obtenir Juglee
            </span>
          </ShimmerButton>
        </a>
      </div>
    </nav>
  );
}
