/**
 * Formatage des dates. Tables fixes (et non Intl) pour garantir un rendu identique
 * serveur / navigateur — les données ICU du lao varient selon les environnements.
 * Toutes les heures sont en heure locale du Laos (UTC+7, sans heure d'été).
 */
export const FESTIVAL_TZ = 'Asia/Vientiane'
export const FESTIVAL_OFFSET = '+07:00'
export const FESTIVAL_START = '2026-11-03T18:00:00+07:00'
export const FESTIVAL_END = '2026-11-21T23:00:00+07:00'

const MONTHS = {
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  lo: ['ມັງກອນ', 'ກຸມພາ', 'ມີນາ', 'ເມສາ', 'ພຶດສະພາ', 'ມິຖຸນາ', 'ກໍລະກົດ', 'ສິງຫາ', 'ກັນຍາ', 'ຕຸລາ', 'ພະຈິກ', 'ທັນວາ'],
}
const MONTHS_SHORT = {
  fr: ['JANV', 'FÉVR', 'MARS', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC'],
  en: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  lo: ['ມ.ກ.', 'ກ.ພ.', 'ມ.ນ.', 'ມ.ສ.', 'ພ.ພ.', 'ມິ.ຖ.', 'ກ.ລ.', 'ສ.ຫ.', 'ກ.ຍ.', 'ຕ.ລ.', 'ພ.ຈ.', 'ທ.ວ.'],
}
const WEEKDAYS = {
  fr: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  lo: ['ວັນອາທິດ', 'ວັນຈັນ', 'ວັນອັງຄານ', 'ວັນພຸດ', 'ວັນພະຫັດ', 'ວັນສຸກ', 'ວັນເສົາ'],
}
const WEEKDAYS_SHORT = {
  fr: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  lo: ['ອາ.', 'ຈ.', 'ອ.', 'ພ.', 'ພຫ.', 'ສ.', 'ສ.'],
}

const parts = (local) => {
  const y = Number(local.slice(0, 4))
  const m = Number(local.slice(5, 7))
  const d = Number(local.slice(8, 10))
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay()
  return { y, m, d, wd }
}
const L = (table, locale) => table[locale] ?? table.fr

/** Convertit une date/heure locale du Laos en objet Date absolu. */
export const toDate = (local) => new Date(local.length <= 10 ? `${local}T00:00:00${FESTIVAL_OFFSET}` : `${local}:00${FESTIVAL_OFFSET}`)

export const formatDay = (local) => local.slice(8, 10)
export const formatMonthShort = (local, locale) => L(MONTHS_SHORT, locale)[parts(local).m - 1]
export const formatWeekday = (local, locale) => L(WEEKDAYS_SHORT, locale)[parts(local).wd]
export const formatTime = (local) => (local.length > 10 ? local.slice(11, 16) : '')

export function formatDate(local, locale) {
  const { y, m, d } = parts(local)
  const month = L(MONTHS, locale)[m - 1]
  if (locale === 'en') return `${d} ${month} ${y}`
  return `${d} ${month} ${y}`
}
export function formatLongDate(local, locale) {
  const { wd } = parts(local)
  const weekday = L(WEEKDAYS, locale)[wd]
  return locale === 'en' ? `${weekday} ${formatDate(local, locale)}` : `${weekday} ${formatDate(local, locale)}`
}
export function formatShortDate(local, locale) {
  const { d, m } = parts(local)
  return `${d} ${L(MONTHS, locale)[m - 1]}`
}
/** "03 NOV" ou "03 NOV → 09 NOV" pour les événements sur plusieurs jours */
export function formatRangeShort(start, end, locale) {
  const a = `${formatDay(start)} ${formatMonthShort(start, locale)}`
  if (start.slice(0, 10) === end.slice(0, 10)) return a
  return `${a} → ${formatDay(end)} ${formatMonthShort(end, locale)}`
}
export function formatTimeRange(start, end) {
  const a = formatTime(start)
  const b = formatTime(end)
  return a && b ? `${a} – ${b}` : a
}

/** Jours du festival : 2026-11-03 → 2026-11-21 */
export const FESTIVAL_DAYS = Array.from({ length: 19 }, (_, i) => `2026-11-${String(3 + i).padStart(2, '0')}`)

/** "2026-11-03" → "3-novembre" (segment d'URL des pages jour) */
export const daySlug = (isoDay) => `${Number(isoDay.slice(8, 10))}-novembre`
export const dayFromSlug = (slug) => {
  const m = /^(\d{1,2})-novembre$/.exec(slug)
  if (!m) return null
  const iso = `2026-11-${m[1].padStart(2, '0')}`
  return FESTIVAL_DAYS.includes(iso) ? iso : null
}

export function formatPrice(event, common) {
  if (event.free) return event.registration ? common.freeRegistration : common.free
  return event.price ? `${new Intl.NumberFormat('fr-FR').format(event.price).replace(/\s/g, ' ')} LAK` : common.paid
}
