import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Clock, Accessibility, Navigation, Bus } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Poster from '@/components/Poster'
import EventCard from '@/components/EventCard'
import ArtistCard from '@/components/ArtistCard'
import MapView from '@/components/MapView'
import Section from '@/components/Section'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { locales, tr } from '@/lib/i18n/config'
import { getEvents, getVenue, getVenues, getVenueArtists, venueKinds, toArtistCard, toEventCard } from '@/lib/data'
import { buildMetadata, placeLd } from '@/lib/seo'
import { crumbs } from '@/lib/page'

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((locale) => getVenues().map((v) => ({ locale, slug: v.slug })))

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const v = getVenue(slug)
  if (!v) return {}
  return buildMetadata({ locale, path: `/lieux/${slug}`, title: tr(v.name, locale), description: tr(v.description, locale) })
}

export default async function VenuePage({ params }) {
  const { locale, slug } = await params
  const venue = getVenue(slug)
  if (!venue) notFound()
  const dict = getDictionary(locale)
  const events = getEvents({ venue: slug })
  const artists = getVenueArtists(slug)
  const name = tr(venue.name, locale)

  const infos = [
    [MapPin, dict.common.address, `${venue.address} — ${tr(venue.city.name, locale)}`],
    [Clock, dict.common.hours, tr(venue.hours, locale)],
    [Bus, dict.common.access, tr(venue.access, locale)],
    [Accessibility, dict.common.accessibility, tr(venue.accessibility, locale)],
  ]

  return (
    <>
      <JsonLd data={{ ...placeLd(venue, locale), description: tr(venue.description, locale), event: events.map((e) => ({ '@type': 'Event', name: tr(e.title, locale), startDate: e.start })) }} />
      <PageHero
        kicker={`${tr(venueKinds[venue.kind], locale)} · ${tr(venue.city.name, locale)}`}
        title={name}
        color={venue.city.color}
        crumbs={crumbs(locale, dict, [dict.venues.title, '/lieux'], [name, `/lieux/${slug}`])}
      />
      <div className="aspect-[21/9] max-h-[60vh] w-full overflow-hidden border-y-2 border-ink">
        {venue.photo ? (
          <Image src={venue.photo} alt={name} width={2100} height={900} priority sizes="100vw" className="h-full w-full object-cover" />
        ) : (
          <Poster seed={`${slug}-hero`} color={venue.city.color} ratio={21 / 9} title={name} />
        )}
      </div>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1fr_24rem]">
        <section aria-labelledby="presentation">
          <h2 id="presentation" className="display text-5xl uppercase">{dict.venues.presentation}</h2>
          <p className="prose-site mt-6 text-xl">{tr(venue.description, locale)}</p>
        </section>
        <aside aria-labelledby="pratique" className="border-2 border-ink p-6">
          <h2 id="pratique" className="display text-3xl uppercase">{dict.venues.practical}</h2>
          <dl>
            {infos.map(([Icon, label, value]) => (
              <div key={label} className="flex gap-4 border-b-2 border-ink/10 py-4 last:border-0">
                <Icon className="mt-1 size-6 shrink-0 text-blue" aria-hidden="true" />
                <div>
                  <dt className="kicker text-ink/60">{label}</dt>
                  <dd className="mt-1 font-semibold">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <a href={`https://www.google.com/maps/search/?api=1&query=${venue.geo.join(',')}`} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 w-full">
            <Navigation className="size-4" aria-hidden="true" /> {dict.common.openInMaps}
          </a>
        </aside>
      </div>

      <div className="container-site pb-8">
        <MapView
          height="45vh"
          showCityToggle={false}
          labels={dict.map}
          cities={[{ slug: venue.citySlug, label: tr(venue.city.name, locale), color: venue.city.color, geo: venue.geo, zoom: 16 }]}
          venues={[{ slug, name, kind: tr(venueKinds[venue.kind], locale), citySlug: venue.citySlug, cityColor: venue.city.color, geo: venue.geo, count: events.length, href: `/${locale}/lieux/${slug}` }]}
        />
      </div>

      <Section id="evenements-lieu" title={dict.venues.eventsHere}>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {events.map((e) => (
            <li key={e.slug}><EventCard card={toEventCard(e, locale)} locale={locale} labels={dict.common} /></li>
          ))}
        </ul>
      </Section>

      {artists.length > 0 && (
        <Section id="artistes-lieu" tone="mist" title={dict.venues.artistsHere}>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {artists.map((a) => (
              <li key={a.slug}><ArtistCard artist={toArtistCard(a, locale)} locale={locale} /></li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
