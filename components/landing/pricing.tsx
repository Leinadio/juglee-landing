"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Check } from "lucide-react";

const STRIPE_URL = "https://buy.stripe.com/eVqeVdgDQ51f3EN7tD9ws00";

const features = [
  "Marquez vos vidéos comme vues",
  "Badge vert sur les miniatures",
  "Export et import en JSON",
  "Fonctionne sur tout YouTube",
  "Nettoyage automatique du stockage",
  "Mises à jour gratuites",
  "Support par email",
];

export function Pricing() {
  return (
    <section
      id="tarif"
      className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24"
    >
      <BlurFade delay={0.1} inView>
        <div className="mb-8 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5">
          <AnimatedShinyText className="text-sm">
            Offre de lancement
          </AnimatedShinyText>
        </div>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-50 md:text-5xl">
          Un prix simple, pour toujours
        </h2>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="relative mt-12 w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
          <BorderBeam
            colorFrom="#FF0000"
            colorTo="#FF4E45"
            size={80}
            duration={8}
            borderWidth={2}
          />

          <h3 className="text-2xl font-bold text-neutral-50">Juglee</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-neutral-50">9,99€</span>
            <span className="text-neutral-400">/ paiement unique</span>
          </div>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-red-500" />
                <span className="text-neutral-300">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={STRIPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block"
          >
            <ShimmerButton
              background="rgba(255, 0, 0, 0.2)"
              shimmerColor="#FF0000"
              className="w-full py-4 shadow-2xl"
            >
              <span className="font-semibold text-white">
                Obtenir Juglee maintenant
              </span>
            </ShimmerButton>
          </a>

          <p className="mt-4 text-center text-xs text-neutral-500">
            Paiement sécurisé par Stripe. Accès immédiat après achat.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
