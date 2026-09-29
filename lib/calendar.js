/**
 * Génération des liens « Ajouter à l'agenda » (Google, Outlook) et des fichiers .ics.
 * Les données horaires sont stockées en heure locale Asia/Vientiane (UTC+7) :
 * Google reçoit l'heure locale + ctz, l'ICS et Outlook reçoivent de l'UTC / ISO avec décalage.
 */
import { FESTIVAL_TZ, FESTIVAL_OFFSET, toDate } from './format'
import { tr } from './i18n/config'
import { SITE_URL } from './seo'

// "2026-11-03T18:00" → "20261103T180000"
const toLocalStamp = (local) => {
  const [d, t = '00:00'] = local.split('T')
  return `${d.replace(/-/g, '')}T${t.replace(':', '')}00`
}
const toUtcStamp = (local) => toDate(local).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
const nextDay = (isoDay) => {
  const d = new Date(`${isoDay}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + 1)
  return d.toISOString().slice(0, 10).replace(/-/g, '')
}

export function eventCalendarPayload(event, locale) {
  const url = `${SITE_URL}/${locale}/evenements/${event.slug}`
  const title = `${tr(event.title, locale)} — Festival France–Laos 2026`
  const location = event.venue ? `${tr(event.venue.name, locale)}, ${event.venue.address}, ${tr(event.city?.name, locale)}, Laos` : ''
  const details = `${tr(event.summary, locale)}\n\n${url}`
  return { title, location, details, url }
}

export function googleCalendarUrl(event, locale) {
  const { title, location, details } = eventCalendarPayload(event, locale)
  const dates = event.allDay
    ? `${event.start.slice(0, 10).replace(/-/g, '')}/${nextDay(event.end.slice(0, 10))}`
    : `${toLocalStamp(event.start)}/${toLocalStamp(event.end)}`
  const params = new URLSearchParams({ action: 'TEMPLATE', text: title, dates, details, location, ctz: FESTIVAL_TZ })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function outlookCalendarUrl(event, locale) {
  const { title, location, details } = eventCalendarPayload(event, locale)
  const iso = (local) => (local.length <= 10 ? local : `${local}:00${FESTIVAL_OFFSET}`)
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: title,
    startdt: iso(event.start),
    enddt: event.allDay ? `${event.end.slice(0, 10)}T23:59:00${FESTIVAL_OFFSET}` : iso(event.end),
    location,
    body: details,
    ...(event.allDay ? { allday: 'true' } : {}),
  })
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
}

// Lien data: vers le fichier .ics (le site est statique : pas de route serveur)
export const icsHref = (events, locale) => `data:text/calendar;charset=utf-8,${encodeURIComponent(buildIcs([].concat(events), locale))}`

const escapeIcs = (s) => String(s).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
// RFC 5545 : lignes de 75 octets max (le lao occupe 3 octets par caractère en UTF-8)
const encoder = new TextEncoder()
const fold = (line) => {
  const out = []
  let current = ''
  let bytes = 0
  for (const char of line) {
    const size = encoder.encode(char).length
    if (bytes + size > 73) {
      out.push(current)
      current = ' '
      bytes = 1
    }
    current += char
    bytes += size
  }
  out.push(current)
  return out.join('\r\n')
}

export function buildIcs(events, locale) {
  const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Institut francais du Laos//Festival France-Laos 2026//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Festival France–Laos 2026',
    `X-WR-TIMEZONE:${FESTIVAL_TZ}`,
  ]
  for (const event of events) {
    const { title, location, details, url } = eventCalendarPayload(event, locale)
    lines.push('BEGIN:VEVENT', `UID:${event.slug}@festival-france-laos-2026`, `DTSTAMP:${now}`)
    if (event.allDay) {
      lines.push(`DTSTART;VALUE=DATE:${event.start.slice(0, 10).replace(/-/g, '')}`)
      lines.push(`DTEND;VALUE=DATE:${nextDay(event.end.slice(0, 10))}`)
    } else {
      lines.push(`DTSTART:${toUtcStamp(event.start)}`, `DTEND:${toUtcStamp(event.end)}`)
    }
    lines.push(
      `SUMMARY:${escapeIcs(title)}`,
      `DESCRIPTION:${escapeIcs(details)}`,
      `LOCATION:${escapeIcs(location)}`,
      `URL:${url}`,
    )
    if (event.venue?.geo) lines.push(`GEO:${event.venue.geo[0]};${event.venue.geo[1]}`)
    lines.push('END:VEVENT')
  }
  lines.push('END:VCALENDAR')
  return lines.map(fold).join('\r\n')
}
