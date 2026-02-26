"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    value: 40,
    suffix: "%",
    label: "des utilisateurs re-regardent des vidéos par accident",
  },
  {
    value: 2,
    suffix: "h+",
    label: "perdues par mois à cause de vidéos déjà vues",
  },
  {
    value: 500,
    suffix: "M+",
    label: "de vidéos sur YouTube sans système de suivi",
  },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
          Le problème
        </p>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-50 md:text-5xl">
          YouTube ne se souvient pas de ce que vous avez regardé
        </h2>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-400">
          Vous scrollez dans vos recommandations et vous tombez sur une vidéo.
          Vous cliquez, vous regardez 30 secondes… et vous réalisez que vous
          l&apos;avez déjà vue. C&apos;est frustrant et ça vous fait perdre du
          temps.
        </p>
      </BlurFade>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat, i) => (
          <BlurFade key={stat.label} delay={0.4 + i * 0.1} inView>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">
                <NumberTicker value={stat.value} delay={0.5 + i * 0.15} />
                {stat.suffix}
              </div>
              <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
