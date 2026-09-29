# Festival France–Laos 2026 — site officiel

Next.js 16 (App Router, JavaScript/JSX) · Tailwind CSS 4 · Motion · Leaflet — trilingue **FR / EN / ລາວ**.

```bash
npm install
npm run dev      # http://localhost:3000/fr (ou /en, /lo)
npm run build    # export statique dans out/ (GitHub Pages)
```

Copier `.env.example` en `.env.local` et renseigner `NEXT_PUBLIC_SITE_URL` (canonical, hreflang, sitemap, JSON-LD).

**Mise en ligne** : `npm run deploy` construit le site et publie `out/` sur la branche `gh-pages` (GitHub Pages) → https://algilthegreat.github.io

## Architecture

```
lib/data/          ← système de données relationnel (source unique)
  taxonomies.js    disciplines, types, publics, pratiques, villes, palette
  venues.js        lieux (ville, adresse, GPS, accès, accessibilité)
  artists.js       artistes (bio/parcours/œuvres en fr/en/lo)
  events.js        événements (lieu, artistes, horaires Asia/Vientiane, film/expo/atelier)
  content.js       actualités, partenaires, galerie, vidéos, FAQ, kit presse
  index.js         relations Artist ↔ Event ↔ Venue ↔ City ↔ Discipline + requêtes
lib/i18n/          dictionnaires d'interface fr.js / en.js / lo.js
lib/calendar.js    liens Google Agenda / Outlook + génération .ics
lib/seo.js         metadata, hreflang, JSON-LD (Festival, Event, Person, Place…)
components/        Header (mega-menu, ⌘K), EventCard, CalendarButton, AddToFestival…
components/reactbits/  animations inspirées de React Bits (SplitText, BlurText, CountUp,
                   ScrollVelocity, SpotlightCard, TiltedCard, Magnet, Aurora, ClickSpark,
                   DecryptedText, CircularText, StarBorder, GlareHover, ScrollReveal,
                   RotatingText, GradientText, ShinyText, AnimatedContent)
app/[locale]/      toutes les pages (≈ 555 pages statiques générées)
app/api/ics        export .ics (1 ou plusieurs événements, ou events=all)
app/api/search     index de recherche statique par langue
```

Ajouter un événement = ajouter un objet dans `lib/data/events.js` : page événement, programme,
pages ville/lieu/artiste/discipline, recherche, sitemap, JSON-LD et agenda se mettent à jour.

## À compléter avant mise en ligne

- **Contenus** : artistes, événements, actualités et partenaires sont des données de démonstration.
- **Coordonnées** : adresses, GPS, téléphones, e-mails (`venues.js`, `contact/page.jsx`, `presse/page.jsx`).
- **Photos** : ajouter `photo: '/images/…'` aux artistes ; les visuels génératifs servent de remplacement.
- **Traduction lao** : à faire relire par un·e locuteur·rice natif·ve.
- **Formulaires** : renseigner `NEXT_PUBLIC_FORMSPREE_CONTACT` / `NEXT_PUBLIC_FORMSPREE_NEWSLETTER` (URL Formspree) dans `.env.local` avant `npm run deploy`, sinon les formulaires affichent une erreur.
- **Réseaux sociaux** : URL dans `components/SocialIcons.jsx`.
