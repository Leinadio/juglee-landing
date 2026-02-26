# Juglee Landing Page

Landing page de l'extension Chrome Juglee.

## L'extension Juglee

Juglee est une extension Chrome (Manifest V3) pour YouTube. Elle permet de :

- **Marquer manuellement des vidéos comme vues** en cliquant sur une icône au survol des miniatures ou sur le lecteur vidéo
- **Afficher un badge vert (checkmark)** sur les miniatures des vidéos déjà vues, partout sur YouTube (accueil, recherche, chaînes, playlists, Shorts)
- **Exporter/importer l'historique** en JSON pour sauvegarder ou transférer ses données
- **Nettoyage automatique** des vidéos les plus anciennes quand le stockage atteint 9 Mo

Toutes les données sont stockées localement dans le navigateur (chrome.storage.local). Aucune donnée n'est envoyée à un serveur externe. L'extension est en vanilla JS/CSS, sans framework.

Le code source de l'extension est dans le dossier frère `juglee-extension/`.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- shadcn/ui + Magic UI (composants dans `components/ui/`)
- Lucide React (icônes), Framer Motion (animations via Magic UI)

## Commandes

```bash
npm run dev      # Dev server sur localhost:3000
npm run build    # Build production
npm run lint     # ESLint
```

## Architecture

- `app/page.tsx` — compose les 8 sections de la landing page
- `app/layout.tsx` — layout racine (lang fr, dark mode forcé, SEO)
- `app/globals.css` — thème dark green/zinc avec variables CSS shadcn
- `components/landing/` — sections : navbar, hero, problem, features, how-it-works, pricing, faq, footer
- `components/ui/` — composants shadcn/ui et Magic UI (auto-générés)

## Conventions

- Dark mode uniquement (classe `dark` sur `<html>`)
- Couleur primaire : green-500 (`#22c55e`), gradient vers cyan-500 (`#06b6d4`)
- Contenu en français
- CTA → lien Stripe Payment Link (paiement unique 9,99€)
- Composants sections dans `components/landing/`, composants UI dans `components/ui/`

## Lien Stripe

```
https://buy.stripe.com/eVqeVdgDQ51f3EN7tD9ws00
```
