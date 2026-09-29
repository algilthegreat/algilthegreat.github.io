/** Props sérialisables communes aux explorateurs client (programme, villes, thèmes). */
import { tr } from './i18n/config'
import { cities, eventTypes, audiences } from './data'

export function explorerOptions(locale) {
  return {
    cities: cities.map((c) => ({ slug: c.slug, label: tr(c.name, locale), color: c.color })),
    types: eventTypes.map((t) => ({ slug: t.slug, label: tr(t.label, locale) })),
    audiences: audiences.map((a) => ({ slug: a.slug, label: tr(a.label, locale) })),
  }
}
