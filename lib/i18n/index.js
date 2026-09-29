import { notFound } from 'next/navigation'
import fr from './dictionaries/fr'
import en from './dictionaries/en'
import lo from './dictionaries/lo'
import { hasLocale } from './config'

const dictionaries = { fr, en, lo }

export function getDictionary(locale) {
  if (!hasLocale(locale)) notFound()
  return dictionaries[locale]
}

/** Remplace les variables {n}, {name}… d'une chaîne traduite. */
export const fill = (str, vars = {}) => str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`))

/** Résout params (Promise en Next 16) → { locale, dict } avec 404 si langue inconnue. */
export async function resolveLocale(params) {
  const { locale } = await params
  return { locale, dict: getDictionary(locale) }
}
