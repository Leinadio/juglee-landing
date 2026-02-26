"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { CheckCircle, Eye, Download, Globe } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Marquez vos vidéos comme vues",
    description:
      "Un simple clic pour marquer une vidéo comme vue. L'icône verte apparaît instantanément sur la miniature.",
  },
  {
    icon: Eye,
    title: "Badge vert sur chaque miniature",
    description:
      "Repérez en un coup d'œil les vidéos déjà vues grâce au badge vert affiché directement sur YouTube.",
  },
  {
    icon: Download,
    title: "Exportez et importez vos données",
    description:
      "Sauvegardez votre historique en JSON et restaurez-le à tout moment. Vos données vous appartiennent.",
  },
  {
    icon: Globe,
    title: "Fonctionne sur tout YouTube",
    description:
      "Page d'accueil, recherche, chaînes, playlists, Shorts… Juglee fonctionne partout où des miniatures sont affichées.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-green-500">
          Fonctionnalités
        </p>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-zinc-50 md:text-5xl">
          Tout ce dont vous avez besoin
        </h2>
      </BlurFade>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, i) => (
          <BlurFade key={feature.title} delay={0.3 + i * 0.1} inView>
            <MagicCard
              gradientColor="#22c55e10"
              gradientFrom="#22c55e"
              gradientTo="#06b6d4"
              className="rounded-2xl border border-zinc-800"
            >
              <div className="p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                  <feature.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-50">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
