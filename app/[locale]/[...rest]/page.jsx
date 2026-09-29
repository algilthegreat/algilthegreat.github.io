import { notFound } from 'next/navigation'
import { locales } from '@/lib/i18n/config'

// Export statique : on génère /fr/404, /en/404, /lo/404 (page 404 dans le bon layout).
// GitHub Pages sert out/404.html pour toute URL inconnue (copie de /fr/404, voir le workflow).
export const dynamicParams = false
export const generateStaticParams = () => locales.map((locale) => ({ locale, rest: ['404'] }))

export default function CatchAll() {
  notFound()
}
