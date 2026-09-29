import Link from 'next/link'
import { Map as MapIcon } from 'lucide-react'
import PageHero from '@/components/PageHero'
import VenueCard from '@/components/VenueCard'
import Section from '@/components/Section'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { cities, getEvents, getVenues } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('venues', '/lieux', (d) => d.venues.title)

export default async function VenuesPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const featured = getVenues().filter((v) => v.featured)
  return (
    <>
      <PageHero kicker={`${getVenues().length} ${dict.common.venues}`} title={dict.venues.title} intro={dict.venues.intro} color="#869ECE" crumbs={crumbs(locale, dict, [dict.venues.title, '/lieux'])}>
        <Link href={`/${locale}/carte`} className="btn-dark mt-8">
          <MapIcon className="size-4" aria-hidden="true" /> {dict.nav.map}
        </Link>
      </PageHero>

      <div className="container-site grid gap-4 pb-8 md:grid-cols-2">
        {featured.map((v) => (
          <Link key={v.slug} href={`/${locale}/lieux/${v.slug}`} className="on-dark group block bg-blue p-8 text-paper transition-colors hover:bg-ink md:p-12">
            <span className="kicker text-tournesol">{tr(v.city.name, locale)}</span>
            <span className="display mt-4 block text-4xl uppercase md:text-5xl">{tr(v.name, locale)}</span>
            <span className="mt-6 block font-bold uppercase">{getEvents({ venue: v.slug }).length} {dict.common.events} →</span>
          </Link>
        ))}
      </div>

      {cities.map((c) => (
        <Section key={c.slug} id={`lieux-${c.slug}`} title={tr(c.name, locale)}>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getVenues({ city: c.slug }).map((v) => (
              <li key={v.slug}><VenueCard venue={v} locale={locale} labels={dict.common} eventCount={getEvents({ venue: v.slug }).length} /></li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  )
}
