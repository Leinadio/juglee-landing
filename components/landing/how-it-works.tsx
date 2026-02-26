"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Download, Play, MousePointerClick } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Installez l'extension",
    description:
      "Ajoutez Juglee à Chrome en un clic. Aucune configuration nécessaire.",
  },
  {
    number: "02",
    icon: Play,
    title: "Naviguez sur YouTube",
    description:
      "Parcourez YouTube normalement. Juglee fonctionne en arrière-plan.",
  },
  {
    number: "03",
    icon: MousePointerClick,
    title: "Marquez et repérez",
    description:
      "Cliquez sur l'icône pour marquer une vidéo. Le badge vert apparaît sur la miniature.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-green-500">
          Comment ça marche
        </p>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-zinc-50 md:text-5xl">
          Simple comme bonjour
        </h2>
      </BlurFade>

      <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Connecting line */}
        <div className="absolute top-16 right-[16.67%] left-[16.67%] hidden h-px border-t border-dashed border-zinc-700 md:block" />

        {steps.map((step, i) => (
          <BlurFade key={step.number} delay={0.3 + i * 0.15} inView>
            <div className="flex flex-col items-center text-center">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <span className="absolute text-7xl font-bold text-green-500/10">
                  {step.number}
                </span>
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">
                  <step.icon className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-zinc-400">{step.description}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
