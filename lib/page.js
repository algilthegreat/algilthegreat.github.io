/** Helpers communs aux pages : métadonnées et fil d'Ariane. */
import { getDictionary } from './i18n'
import { buildMetadata } from './seo'

export function pageMetadata(key, path, titleKey) {
  return async function generateMetadata({ params }) {
    const { locale } = await params
    const dict = getDictionary(locale)
    const title = titleKey ? titleKey(dict) : dict.nav[key] ?? dict[key]?.title
    return buildMetadata({ locale, path, title, description: dict.meta[key] })
  }
}

export const crumbs = (locale, dict, ...items) => [{ name: dict.nav.home, href: `/${locale}` }, ...items.map(([name, path]) => ({ name, href: `/${locale}${path}` }))]
