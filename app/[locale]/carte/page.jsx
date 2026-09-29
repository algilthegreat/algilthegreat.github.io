import PageHero from '@/components/PageHero'
import MapView from '@/components/MapView'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { cities, getEvents, getVenues, venueKinds } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('map', '/carte', (d) => d.map.title)

export default async function MapPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const venues = getVenues().map((v) => ({
    slug: v.slug,
    name: tr(v.name, locale),
    kind: tr(venueKinds[v.kind], locale),
    citySlug: v.citySlug,
    cityColor: v.city.color,
    geo: v.geo,
    count: getEvents({ venue: v.slug }).length,
    href: `/${locale}/lieux/${v.slug}`,
  }))
  return (
    <>
      <PageHero kicker="Laos" title={dict.map.title} intro={dict.map.intro} color="#99C221" crumbs={crumbs(locale, dict, [dict.map.title, '/carte'])} />
      <div className="container-site pb-24">
        <MapView
          venues={venues}
          labels={dict.map}
          cities={cities.map((c) => ({ slug: c.slug, label: tr(c.name, locale), color: c.color, geo: c.geo, zoom: 14 }))}
        />
      </div>
    </>
  )
}
