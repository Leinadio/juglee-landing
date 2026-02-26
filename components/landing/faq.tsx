"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";

const faqs = [
  {
    question: "Comment fonctionne Juglee ?",
    answer:
      "Juglee est une extension Chrome qui s'intègre directement à YouTube. Une fois installée, elle vous permet de marquer manuellement des vidéos comme vues. Un badge vert apparaît alors sur les miniatures des vidéos marquées, partout sur YouTube.",
  },
  {
    question: "Est-ce un abonnement ?",
    answer:
      "Non. Juglee coûte 9,99€ en paiement unique. Vous payez une seule fois et vous avez accès à l'extension pour toujours, mises à jour incluses.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Oui. Toutes vos données sont stockées localement dans votre navigateur via chrome.storage.local. Aucune donnée n'est envoyée à un serveur externe. Vous pouvez aussi exporter vos données en JSON à tout moment.",
  },
  {
    question: "Que se passe-t-il si j'ai trop de vidéos marquées ?",
    answer:
      "Juglee inclut un système de nettoyage automatique. Lorsque le stockage atteint 9 Mo, les vidéos les plus anciennes sont supprimées automatiquement pour libérer de l'espace.",
  },
  {
    question: "L'extension fonctionne-t-elle sur Firefox ou Safari ?",
    answer:
      "Pour le moment, Juglee est disponible uniquement sur Google Chrome et les navigateurs basés sur Chromium comme Edge, Brave, Opera, etc. Une version Firefox pourrait être envisagée à l'avenir.",
  },
  {
    question: "Comment puis-je obtenir de l'aide ?",
    answer:
      "Vous pouvez nous contacter par email pour toute question ou problème. Nous répondons généralement sous 24 heures.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <BlurFade delay={0.1} inView>
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-50 md:text-4xl">
          Questions fréquentes
        </h2>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-neutral-800"
            >
              <AccordionTrigger className="text-left text-neutral-50 hover:text-red-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </BlurFade>
    </section>
  );
}
