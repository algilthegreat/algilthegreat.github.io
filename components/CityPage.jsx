import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Aurora from './reactbits/Aurora'
import SplitText from './reactbits/SplitText'
import CountUp from './reactbits/CountUp'
import Breadcrumbs from './Breadcrumbs'
import Timeline from './Timeline'
import Section from './Section'
import ProgrammeExplorer from './ProgrammeExplorer'
import ArtistCard from './ArtistCard'
import VenueCard from './VenueCard'
import MapView from './MapView'
import EventCard from './EventCard'
import JsonLd from './JsonLd'
import CitySocial from './CitySocial'
import { fill } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { cities, getArtists, getEvents, getVenues, venueKinds, toArtistCard, toEventCard } from '@/lib/data'
import { explorerOptions } from '@/lib/explorer-props'
import { crumbs } from '@/lib/page'
import { formatShortDate } from '@/lib/format'
import { SITE_URL } from '@/lib/seo'

/** Page ville partagée par /luang-prabang et /vientiane. */
export default function CityPage({ city, locale, dict }) {
  const name = tr(city.name, locale)
  const events = getEvents({ city: city.slug })
  const artists = getArtists({ city: city.slug })
  const venues = getVenues({ city: city.slug })
  const other = cities.find((c) => c.slug !== city.slug)
  const opening = events.find((e) => e.special === 'opening')
  // Expositions mises en avant qui ouvrent le même jour (vernissage pendant la soirée d'ouverture)
  const openingExtras = opening ? events.filter((e) => e.featured && e.allDay && e.days.includes(opening.start.slice(0, 10))) : []
  const count = (types) => events.filter((e) => types.includes(e.type)).length

  return (
    <>
      <JsonLd
        data={{
          '@type': 'Festival',
          name: `Festival France–Laos 2026 — ${name}`,
          startDate: city.from,
          endDate: city.to,
          location: { '@type': 'City', name },
          superEvent: { '@id': `${SITE_URL}/#festival` },
          subEvent: events.map((e) => ({ '@id': `${SITE_URL}/${locale}/evenements/${e.slug}#event` })),
        }}
      />
      <header className="on-dark relative isolate overflow-hidden bg-ink text-paper" style={city.heroColor ? { background: city.heroColor } : undefined}>
        {city.photo && !city.heroColor && (
          <>
            <Image src={city.photo} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-55" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
          </>
        )}
        {!city.heroColor && <Aurora colors={[city.color, '#3558A2', other.color, '#FFB7AE']} className={city.photo ? 'opacity-40 mix-blend-screen' : ''} />}
        <div className="container-site relative pt-8 pb-16 md:pb-24">
          <Breadcrumbs dark items={crumbs(locale, dict, [dict.cities.title, '/villes'], [name, `/${city.slug}`])} />
          <p className="kicker mt-16" style={{ color: city.color }}>
            {dict.city.kicker} · {fill(dict.cities.period, { from: formatShortDate(city.from, locale), to: formatShortDate(city.to, locale) })}
          </p>
          <SplitText as="h1" text={name} className="display mt-4 block text-[clamp(3.5rem,13vw,12rem)] uppercase" />
          <p className="mt-6 max-w-2xl text-xl text-paper/85">{tr(city.description, locale)}</p>
          <dl className="mt-10 flex flex-wrap gap-8">
            {[
              [dict.common.events, events.length],
              [dict.common.artists, artists.length],
              [dict.common.venues, venues.length],
            ].map(([label, n]) => (
              <div key={label}>
                <dd className="display text-6xl" style={{ color: city.color }}><CountUp to={n} /></dd>
                <dt className="font-bold uppercase">{label}</dt>
              </div>
            ))}
          </dl>
          <CitySocial city={city} locale={locale} label={dict.common.follow} dark className="mt-10" />
        </div>
      </header>

      <Section id="timeline" title={`${Number(city.from.slice(8))} → ${Number(city.to.slice(8))} ${dict.city.timeline}`}>
        <Timeline locale={locale} city={city} />
      </Section>

      {opening && (
        <Section id="inauguration" tone="blue" kicker="03.11.2026" title={dict.city.opening} action={{ href: `/${locale}/programme/3-novembre`, label: dict.common.readMore }}>
          <ul className="grid max-w-4xl gap-6 md:grid-cols-2">
            {[opening, ...openingExtras].map((e) => (
              <li key={e.slug}>
                <EventCard card={toEventCard(e, locale)} locale={locale} labels={dict.common} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <section className="container-site py-16" aria-labelledby="city-programme">
        <h2 id="city-programme" className="display mb-4 text-[clamp(2.2rem,5.5vw,4.75rem)] uppercase">{dict.city.programme}</h2>
        <ul className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase">
          {[
            [dict.city.exhibitions, ['exposition']],
            [dict.city.concerts, ['concert']],
            [dict.city.cinema, ['cinema']],
            [dict.city.workshops, ['atelier', 'jeunesse']],
            [dict.city.meetings, ['conference', 'debat', 'rencontre-pro', 'education']],
          ].map(([label, types]) => (
            <li key={label} className="border-2 border-ink px-3 py-2">
              {label} <span className="text-blue">{count(types)}</span>
            </li>
          ))}
        </ul>
        <ProgrammeExplorer
          cards={events.map((e) => toEventCard(e, locale))}
          locale={locale}
          labels={dict.programme}
          common={dict.common}
          {...explorerOptions(locale)}
          fixed={{ city: city.slug }}
          syncUrl={false}
        />
      </section>

      <Section id="city-artists" tone="mist" title={dict.city.artists}>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {artists.map((a) => (
            <li key={a.slug}><ArtistCard artist={toArtistCard(a, locale)} locale={locale} /></li>
          ))}
        </ul>
      </Section>

      <Section id="city-venues" title={dict.city.venues}>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((v) => (
            <li key={v.slug}><VenueCard venue={v} locale={locale} labels={dict.common} eventCount={getEvents({ venue: v.slug }).length} /></li>
          ))}
        </ul>
        <h3 className="display mt-16 mb-6 text-4xl uppercase">{dict.city.map}</h3>
        <MapView
          height="55vh"
          showCityToggle={false}
          labels={dict.map}
          cities={[{ slug: city.slug, label: name, color: city.color, geo: city.geo }]}
          venues={venues.map((v) => ({
            slug: v.slug,
            name: tr(v.name, locale),
            kind: tr(venueKinds[v.kind], locale),
            citySlug: v.citySlug,
            cityColor: city.color,
            geo: v.geo,
            count: getEvents({ venue: v.slug }).length,
            href: `/${locale}/lieux/${v.slug}`,
          }))}
        />
      </Section>

      <Link href={`/${locale}/${other.slug}`} className="on-dark group block bg-blue py-16 text-paper md:py-24">
        <span className="container-site flex flex-wrap items-end justify-between gap-6">
          <span>
            <span className="kicker text-tournesol">{dict.city.otherCity}</span>
            <span className="display block text-[clamp(3rem,10vw,9rem)] uppercase">{tr(other.name, locale)}</span>
          </span>
          <ArrowRight className="size-16 transition-transform group-hover:translate-x-3" aria-hidden="true" />
        </span>
      </Link>
    </>
  )
}
