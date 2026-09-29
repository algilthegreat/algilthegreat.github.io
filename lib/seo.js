import { locales, localeMeta, tr } from './i18n/config'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.festival-france-laos.org').replace(/\/$/, '')
export const SITE_NAME = 'Festival France–Laos 2026'

const siteTitle = {
  fr: 'Festival France–Laos 2026 · Vientiane × Luang Prabang · 3 → 21 novembre',
  en: 'France–Laos Festival 2026 · Vientiane × Luang Prabang · 3 → 21 November',
  lo: 'ເທດສະການ ຝຣັ່ງ–ລາວ 2026 · ວຽງຈັນ × ຫຼວງພະບາງ · 3 → 21 ພະຈິກ',
}

/**
 * Métadonnées communes : canonical, hreflang (fr/en/lo + x-default), Open Graph et Twitter.
 * `path` est le chemin sans préfixe de langue ("/programme").
 */
export function buildMetadata({ locale, path = '', title, description, image, type = 'website', noindex = false }) {
  const clean = path === '/' ? '' : path
  const languages = Object.fromEntries(locales.map((l) => [localeMeta[l].htmlLang, `/${l}${clean}`]))
  languages['x-default'] = `/fr${clean}`
  const fullTitle = title ? `${title} — ${SITE_NAME}` : siteTitle[locale]
  return {
    title: title ? { absolute: fullTitle } : { absolute: siteTitle[locale] },
    description,
    alternates: { canonical: `/${locale}${clean}`, languages },
    openGraph: {
      type,
      url: `/${locale}${clean}`,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: localeMeta[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].og),
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

/* ------------------------------ JSON-LD ------------------------------ */

export const organizationLd = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Institut français du Laos',
  url: SITE_URL,
  logo: `${SITE_URL}/medias/logo-festival-france-laos-2026.svg`,
}

export function placeLd(venue, locale) {
  if (!venue) return undefined
  return {
    '@type': 'Place',
    name: tr(venue.name, locale),
    url: `${SITE_URL}/${locale}/lieux/${venue.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue.address,
      addressLocality: tr(venue.city?.name, locale),
      addressCountry: 'LA',
    },
    ...(venue.geo ? { geo: { '@type': 'GeoCoordinates', latitude: venue.geo[0], longitude: venue.geo[1] } } : {}),
  }
}

export function eventLd(event, locale) {
  const offset = '+07:00'
  const iso = (local) => (local.length <= 10 ? local : `${local}:00${offset}`)
  return {
    '@type': event.type === 'exposition' ? 'ExhibitionEvent' : event.type === 'concert' ? 'MusicEvent' : event.type === 'cinema' ? 'ScreeningEvent' : 'Event',
    '@id': `${SITE_URL}/${locale}/evenements/${event.slug}#event`,
    name: tr(event.title, locale),
    description: tr(event.summary, locale),
    startDate: iso(event.start),
    endDate: iso(event.end),
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: event.languages ?? ['fr', 'lo'],
    url: `${SITE_URL}/${locale}/evenements/${event.slug}`,
    image: [`${SITE_URL}/${locale}/evenements/${event.slug}/opengraph-image`],
    location: placeLd(event.venue, locale),
    organizer: { '@id': `${SITE_URL}/#organization` },
    superEvent: { '@id': `${SITE_URL}/#festival` },
    isAccessibleForFree: Boolean(event.free),
    offers: {
      '@type': 'Offer',
      price: event.free ? 0 : event.price ?? 0,
      priceCurrency: 'LAK',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/${locale}/evenements/${event.slug}`,
      validFrom: '2026-09-29',
    },
    performer: (event.artists ?? []).map((a) => ({
      '@type': a.kind === 'collective' ? 'PerformingGroup' : 'Person',
      name: a.name,
      url: `${SITE_URL}/${locale}/artistes/${a.slug}`,
    })),
  }
}

export function festivalLd(locale, description) {
  return {
    '@type': 'Festival',
    '@id': `${SITE_URL}/#festival`,
    name: SITE_NAME,
    description,
    startDate: '2026-11-03T18:00:00+07:00',
    endDate: '2026-11-21T23:00:00+07:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: `${SITE_URL}/${locale}`,
    image: [`${SITE_URL}/${locale}/opengraph-image`],
    organizer: { '@id': `${SITE_URL}/#organization` },
    location: [
      { '@type': 'City', name: 'Luang Prabang', address: { '@type': 'PostalAddress', addressCountry: 'LA' } },
      { '@type': 'City', name: 'Vientiane', address: { '@type': 'PostalAddress', addressCountry: 'LA' } },
    ],
    isAccessibleForFree: true,
  }
}

export function breadcrumbLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  }
}
