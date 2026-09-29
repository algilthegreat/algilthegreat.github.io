export const locales = ['fr', 'en', 'lo']
export const defaultLocale = 'fr'

export const localeMeta = {
  fr: { label: 'FR', name: 'Français', htmlLang: 'fr', og: 'fr_FR', intl: 'fr-FR' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', og: 'en_US', intl: 'en-GB' },
  lo: { label: 'ລາວ', name: 'ພາສາລາວ', htmlLang: 'lo', og: 'lo_LA', intl: 'lo-LA' },
}

export const hasLocale = (value) => locales.includes(value)

/** Renvoie la valeur traduite d'un champ { fr, en, lo } avec repli sur le français. */
export function tr(field, locale) {
  if (field == null) return ''
  if (typeof field === 'string' || typeof field === 'number') return field
  return field[locale] ?? field.fr ?? field.en ?? ''
}

/** Préfixe un chemin interne avec la langue courante. */
export function href(locale, path = '') {
  const clean = path.startsWith('/') ? path : `/${path}`
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`
}
