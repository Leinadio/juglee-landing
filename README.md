# Juglee Landing Page

Landing page for [Juglee](https://github.com/danieldupont/juglee-extension), a Chrome extension that marks your YouTube videos as watched with a green badge visible on thumbnails.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** (button, accordion, badge, separator)
- **Magic UI** (animated-gradient-text, blur-fade, magic-card, shimmer-button, shine-border, border-beam, text-animate, particles, animated-shiny-text, number-ticker)
- **Lucide React** (icons)
- **Framer Motion** (animations via Magic UI)

## Structure

```
app/
  layout.tsx          # Root layout (lang fr, dark mode, SEO metadata)
  page.tsx            # Main page (section composition)
  globals.css         # CSS variables, dark green/zinc theme

components/
  landing/
    navbar.tsx        # Fixed navigation bar with CTA
    hero.tsx          # Hero section with particles and gradient text
    problem.tsx       # Problem section with animated stats
    features.tsx      # 4 interactive feature cards
    how-it-works.tsx  # 3 illustrated steps
    pricing.tsx       # Single pricing card (9.99€)
    faq.tsx           # 6 Q&A in accordion
    footer.tsx        # Footer
  ui/                 # shadcn/ui and Magic UI components
```

## Development

```bash
npm install
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deployment

Deployable on [Vercel](https://vercel.com) by connecting the repository.
