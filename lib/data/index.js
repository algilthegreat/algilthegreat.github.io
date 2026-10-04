/**
 * Couche relationnelle : Artist ↔ Event ↔ Venue ↔ City ↔ Discipline.
 * Toutes les pages (programme, artistes, lieux, villes, disciplines, agenda, recherche,
 * sitemap, JSON-LD, Google Calendar) sont générées à partir de ces fonctions.
 */
import { artists as rawArtists } from './artists'
import { events as rawEvents } from './events'
import { venues as rawVenues } from './venues'
import { cities, disciplines, eventTypes, audiences, roles, countries, venueKinds, palette } from './taxonomies'
import { news, partnerGroups, gallery, galleryFilters, videos, videoCategories, faq, pressKit } from './content'
import { tr } from '../i18n/config'

export { cities, disciplines, eventTypes, audiences, roles, countries, venueKinds, palette }
export { news, partnerGroups, gallery, galleryFilters, videos, videoCategories, faq, pressKit }

const bySlug = (list) => Object.fromEntries(list.map((x) => [x.slug, x]))
const citiesBySlug = bySlug(cities)
const disciplinesBySlug = bySlug(disciplines)

const venues = rawVenues.map((v) => ({ ...v, city: citiesBySlug[v.citySlug] }))
const venuesBySlug = bySlug(venues)
const artistsBySlug = bySlug(rawArtists)

const events = rawEvents
  .map((e) => {
    const venue = venuesBySlug[e.venueSlug]
    return {
      ...e,
      venue,
      city: venue.city,
      citySlug: venue.citySlug,
      disciplineData: disciplinesBySlug[e.discipline],
      color: disciplinesBySlug[e.discipline]?.color ?? palette.cumulus,
      artists: e.artistSlugs.map((s) => artistsBySlug[s]).filter(Boolean),
      days: e.dates ?? eventDays(e),
    }
  })
  .sort((a, b) => a.start.localeCompare(b.start))
const eventsBySlug = bySlug(events)

const artists = rawArtists.map((a) => ({
  ...a,
  color: disciplinesBySlug[a.disciplines[0]]?.color ?? palette.ecume,
  eventSlugs: events.filter((e) => e.artistSlugs.includes(a.slug)).map((e) => e.slug),
}))
const artistsFull = bySlug(artists)

/** Liste des jours "YYYY-MM-DD" couverts par un événement (utile pour les expositions). */
function eventDays(e) {
  const from = e.start.slice(0, 10)
  const to = e.end.slice(0, 10)
  const out = []
  for (let d = new Date(`${from}T00:00:00Z`); d <= new Date(`${to}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + 1)) {
    out.push(d.toISOString().slice(0, 10))
  }
  return out
}

/* --------------------------------- Getters --------------------------------- */

export const getEvents = (filter = {}) =>
  events.filter(
    (e) =>
      (!filter.city || e.citySlug === filter.city) &&
      (!filter.discipline || e.discipline === filter.discipline) &&
      (!filter.type || [].concat(filter.type).includes(e.type)) &&
      (!filter.venue || e.venueSlug === filter.venue) &&
      (!filter.day || e.days.includes(filter.day)) &&
      (!filter.audience || e.audience.includes(filter.audience)) &&
      (!filter.artist || e.artistSlugs.includes(filter.artist)) &&
      (!filter.featured || e.featured),
  )
export const getEvent = (slug) => eventsBySlug[slug]

export const getArtists = (filter = {}) =>
  artists.filter(
    (a) =>
      (!filter.discipline || a.disciplines.includes(filter.discipline)) &&
      (!filter.city || a.eventSlugs.some((s) => eventsBySlug[s].citySlug === filter.city)),
  )
export const getArtist = (slug) => artistsFull[slug]
export const getArtistEvents = (slug) => events.filter((e) => e.artistSlugs.includes(slug))

export const getVenues = (filter = {}) => venues.filter((v) => !filter.city || v.citySlug === filter.city)
export const getVenue = (slug) => venuesBySlug[slug]
export const getVenueArtists = (slug) => {
  const set = new Set(getEvents({ venue: slug }).flatMap((e) => e.artistSlugs))
  return artists.filter((a) => set.has(a.slug))
}

export const getCity = (slug) => citiesBySlug[slug]
export const getDiscipline = (slug) => disciplinesBySlug[slug]

export const getNews = () => [...news].sort((a, b) => b.date.localeCompare(a.date))
export const getArticle = (slug) => news.find((n) => n.slug === slug)

/** Prochains événements (à partir d'aujourd'hui, ou du début du festival). */
export function getUpcomingEvents(limit = 6) {
  const today = new Date().toISOString().slice(0, 10)
  const from = today < '2026-11-03' ? '2026-11-03' : today
  // Événements à heure fixe, plus les expositions mises en avant (featured), placées après les événements du même jour
  const key = (e) => e.start.slice(0, 10) + (e.allDay ? '~' : e.start.slice(10))
  return events
    .filter((e) => (!e.allDay || e.featured) && e.start.slice(0, 10) >= from)
    .sort((x, y) => (key(x) < key(y) ? -1 : key(x) > key(y) ? 1 : 0))
    .slice(0, limit)
}

export const getRelatedEvents = (event, limit = 3) =>
  events
    .filter((e) => e.slug !== event.slug && (e.discipline === event.discipline || e.artistSlugs.some((s) => event.artistSlugs.includes(s))))
    .slice(0, limit)

export const stats = {
  events: events.length,
  artists: artists.length,
  venues: venues.length,
  days: 19,
  cities: cities.length,
  free: events.filter((e) => e.free).length,
}

/* ----------------------- Sérialisation pour le client ----------------------- */

/** Version allégée et localisée d'un événement, sûre pour les Client Components. */
export function toEventCard(e, locale) {
  return {
    slug: e.slug,
    title: tr(e.title, locale),
    summary: tr(e.summary, locale),
    type: e.type,
    typeLabel: tr(eventTypes.find((t) => t.slug === e.type)?.label, locale),
    discipline: e.discipline,
    disciplineLabel: tr(e.disciplineData?.label, locale),
    color: e.color,
    start: e.start,
    end: e.end,
    allDay: Boolean(e.allDay),
    days: e.days,
    citySlug: e.citySlug,
    cityName: tr(e.city.name, locale),
    venueSlug: e.venueSlug,
    venueName: tr(e.venue.shortName ?? e.venue.name, locale),
    audience: e.audience,
    free: Boolean(e.free),
    price: e.price ?? null,
    photo: e.photo ?? null,
    registration: Boolean(e.registration),
    artists: e.artists.map((a) => ({ slug: a.slug, name: a.name, countryLabel: tr(countries[a.country]?.label, locale) })),
    // Données nécessaires pour les liens Google Calendar / Outlook côté client
    cal: {
      slug: e.slug,
      title: e.title,
      summary: e.summary,
      start: e.start,
      end: e.end,
      allDay: e.allDay,
      venue: { name: e.venue.name, address: e.venue.address, geo: e.venue.geo },
      city: { name: e.city.name },
    },
  }
}

export function toArtistCard(a, locale) {
  return {
    slug: a.slug,
    name: a.name,
    kind: a.kind,
    country: a.country,
    countryLabel: tr(countries[a.country]?.label, locale),
    roles: a.roles,
    roleLabel: a.roles.map((r) => tr(roles.find((x) => x.slug === r)?.label, locale)).join(' · '),
    disciplines: a.disciplines,
    disciplineLabel: tr(disciplinesBySlug[a.disciplines[0]]?.label, locale),
    tagline: tr(a.tagline, locale),
    color: a.color,
    photo: a.photo ?? null,
    eventCount: a.eventSlugs.length,
  }
}

/** Index de recherche globale (événements, artistes, lieux, articles). */
export function buildSearchIndex(locale) {
  return [
    ...events.map((e) => ({
      kind: 'event',
      href: `/${locale}/evenements/${e.slug}`,
      title: tr(e.title, locale),
      meta: `${e.start.slice(8, 10)}.${e.start.slice(5, 7)} · ${tr(e.city.name, locale)}`,
      text: [tr(e.summary, locale), tr(e.disciplineData?.label, locale), e.type, e.artists.map((a) => a.name).join(' ')].join(' '),
      color: e.color,
    })),
    ...artists.map((a) => ({
      kind: 'artist',
      href: `/${locale}/artistes/${a.slug}`,
      title: a.name,
      meta: `${tr(a.tagline, locale)} · ${tr(countries[a.country].label, locale)}`,
      text: [tr(a.bio, locale), a.disciplines.map((d) => tr(disciplinesBySlug[d]?.label, locale)).join(' '), a.roles.join(' ')].join(' '),
      color: a.color,
    })),
    ...venues.map((v) => ({
      kind: 'venue',
      href: `/${locale}/lieux/${v.slug}`,
      title: tr(v.name, locale),
      meta: tr(v.city.name, locale),
      text: [tr(v.description, locale), v.address, tr(venueKinds[v.kind], locale)].join(' '),
      color: v.city.color,
    })),
    ...news.map((n) => ({
      kind: 'article',
      href: `/${locale}/actualites/${n.slug}`,
      title: tr(n.title, locale),
      meta: n.date,
      text: tr(n.excerpt, locale),
      color: n.color,
    })),
  ]
}
