/**
 * /fr/programme.ics (et /en, /lo) : programme complet au format .ics,
 * généré à la construction du site (export statique).
 */
import { buildIcs } from '@/lib/calendar'
import { getEvents } from '@/lib/data'
import { locales } from '@/lib/i18n/config'

export const dynamic = 'force-static'
export const generateStaticParams = () => locales.map((locale) => ({ locale }))

export async function GET(_request, { params }) {
  const { locale } = await params
  return new Response(buildIcs(getEvents(), locale), {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  })
}
