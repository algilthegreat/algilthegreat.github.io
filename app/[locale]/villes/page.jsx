import PageHero from '@/components/PageHero'
import CityCard from '@/components/CityCard'
import Timeline from '@/components/Timeline'
import { getDictionary } from '@/lib/i18n'
import { cities, getEvents } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('cities', '/villes', (d) => d.cities.title)

export default async function CitiesPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero kicker="Vientiane × Luang Prabang" title={dict.cities.title} intro={dict.cities.intro} color="#21AB88" crumbs={crumbs(locale, dict, [dict.cities.title, '/villes'])} />
      <div className="container-site grid gap-4 md:grid-cols-2">
        {cities.map((c) => (
          <CityCard key={c.slug} city={c} locale={locale} dict={dict} count={getEvents({ city: c.slug }).length} />
        ))}
      </div>
      <div className="container-site py-20">
        <Timeline locale={locale} />
      </div>
    </>
  )
}
