/** Index de recherche statique par langue, chargé à la demande par la recherche du header. */
import { buildSearchIndex } from '@/lib/data'
import { locales, hasLocale } from '@/lib/i18n/config'

export const dynamic = 'force-static'
export const dynamicParams = false
export const generateStaticParams = () => locales.map((locale) => ({ locale }))

export async function GET(_request, { params }) {
  const { locale } = await params
  if (!hasLocale(locale)) return new Response('Not found', { status: 404 })
  return Response.json(buildSearchIndex(locale))
}
