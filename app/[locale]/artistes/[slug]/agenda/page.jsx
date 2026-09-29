import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Download } from 'lucide-react'
import PageHero from '@/components/PageHero'
import EventCard from '@/components/EventCard'
import { getDictionary, fill } from '@/lib/i18n'
import { locales } from '@/lib/i18n/config'
import { getArtist, getArtists, getArtistEvents, toEventCard } from '@/lib/data'
import { buildMetadata } from '@/lib/seo'
import { crumbs } from '@/lib/page'
import { icsHref } from '@/lib/calendar'

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((locale) => getArtists().map((a) => ({ locale, slug: a.slug })))

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const a = getArtist(slug)
  if (!a) return {}
  const dict = getDictionary(locale)
  const title = fill(dict.artist.agendaTitle, { name: a.name })
  return buildMetadata({ locale, path: `/artistes/${slug}/agenda`, title, description: `${title} — Festival France–Laos 2026` })
}

export default async function ArtistAgendaPage({ params }) {
  const { locale, slug } = await params
  const artist = getArtist(slug)
  if (!artist) notFound()
  const dict = getDictionary(locale)
  const events = getArtistEvents(slug)
  const title = fill(dict.artist.agendaTitle, { name: artist.name })

  return (
    <>
      <PageHero
        kicker={artist.name}
        title={title}
        color={artist.color}
        crumbs={crumbs(locale, dict, [dict.artists.title, '/artistes'], [artist.name, `/artistes/${slug}`], [dict.nav.programme, `/artistes/${slug}/agenda`])}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/${locale}/artistes/${slug}`} className="btn-outline">
            <ArrowLeft className="size-4" aria-hidden="true" /> {dict.artist.backToArtist}
          </Link>
          <a href={icsHref(events, locale)} download={`${slug}-festival-france-laos-2026.ics`} className="btn-primary">
            <Download className="size-4" aria-hidden="true" /> {dict.common.downloadIcs}
          </a>
        </div>
      </PageHero>
      <div className="container-site pb-24">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {events.map((e) => (
            <li key={e.slug}><EventCard card={toEventCard(e, locale)} locale={locale} labels={dict.common} headingLevel={2} /></li>
          ))}
        </ul>
      </div>
    </>
  )
}
