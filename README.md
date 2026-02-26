# Juglee Landing Page

Landing page de [Juglee](https://github.com/danieldupont/juglee-extension), une extension Chrome qui marque vos vidéos YouTube comme vues avec un badge vert visible sur les miniatures.

## Stack technique

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (button, accordion, badge, separator)
- **Magic UI** (animated-gradient-text, blur-fade, magic-card, shimmer-button, shine-border, border-beam, text-animate, particles, animated-shiny-text, number-ticker)
- **Lucide React** (icônes)
- **Framer Motion** (animations via Magic UI)

## Structure

```
app/
  layout.tsx          # Layout racine (lang fr, dark mode, SEO metadata)
  page.tsx            # Page principale (composition des sections)
  globals.css         # Variables CSS, thème dark green/zinc

components/
  landing/
    navbar.tsx        # Barre de navigation fixe avec CTA
    hero.tsx          # Section héro avec particles et gradient text
    problem.tsx       # Section problème avec stats animées
    features.tsx      # 4 feature cards interactives
    how-it-works.tsx  # 3 étapes illustrées
    pricing.tsx       # Carte de prix unique (9,99€)
    faq.tsx           # 6 questions/réponses en accordion
    footer.tsx        # Pied de page
  ui/                 # Composants shadcn/ui et Magic UI
```

## Développement

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Déploiement

Déployable sur [Vercel](https://vercel.com) en connectant le repository.
