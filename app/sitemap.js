/** Sitemap multilingue avec alternates hreflang (fr / en / lo) pour chaque URL. */
import { locales } from '@/lib/i18n/config'
import { getArtists, getEvents, getNews, getVenues, disciplines } from '@/lib/data'
import { FESTIVAL_DAYS, daySlug } from '@/lib/format'
import { SITE_URL } from '@/lib/seo'

const staticPaths = [
  ['', 1, 'daily'],
  ['/programme', 0.95, 'daily'],
  ['/programme/3-novembre', 0.9, 'weekly'],
  ['/artistes', 0.9, 'weekly'],
  ['/festival', 0.8, 'monthly'],
  ['/villes', 0.7, 'monthly'],
  ['/luang-prabang', 0.85, 'weekly'],
  ['/vientiane', 0.85, 'weekly'],
  ['/lieux', 0.7, 'monthly'],
  ['/disciplines', 0.6, 'monthly'],
  ['/cinema', 0.7, 'weekly'],
  ['/musique', 0.7, 'weekly'],
  ['/expositions', 0.7, 'weekly'],
  ['/rencontres', 0.6, 'weekly'],
  ['/ateliers', 0.6, 'weekly'],
  ['/jeunesse', 0.6, 'weekly'],
  ['/actualites', 0.7, 'daily'],
  ['/galerie', 0.5, 'weekly'],
  ['/videos', 0.5, 'weekly'],
  ['/france-laos', 0.5, 'yearly'],
  ['/partenaires', 0.4, 'monthly'],
  ['/infos-pratiques', 0.7, 'monthly'],
  ['/faq', 0.6, 'monthly'],
  ['/contact', 0.5, 'yearly'],
  ['/presse', 0.4, 'monthly'],
  ['/medias', 0.3, 'monthly'],
  ['/newsletter', 0.3, 'yearly'],
  ['/carte', 0.6, 'monthly'],
  ['/mentions-legales', 0.1, 'yearly'],
]

export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date()
  const paths = [
    ...staticPaths,
    ...FESTIVAL_DAYS.slice(1).map((d) => [`/programme/${daySlug(d)}`, 0.6, 'daily']),
    ...getEvents().map((e) => [`/evenements/${e.slug}`, 0.8, 'weekly']),
    ...getArtists().flatMap((a) => [[`/artistes/${a.slug}`, 0.7, 'weekly'], [`/artistes/${a.slug}/agenda`, 0.4, 'weekly']]),
    ...getVenues().map((v) => [`/lieux/${v.slug}`, 0.5, 'monthly']),
    ...disciplines.map((d) => [`/disciplines/${d.slug}`, 0.5, 'weekly']),
    ...getNews().map((n) => [`/actualites/${n.slug}`, 0.6, 'monthly']),
  ]

  return paths.flatMap(([path, priority, changeFrequency]) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])) },
    })),
  )
}
