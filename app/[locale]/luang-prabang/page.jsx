import CityPage from '@/components/CityPage'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { getCity } from '@/lib/data'
import { buildMetadata } from '@/lib/seo'

const city = getCity('luang-prabang')

export async function generateMetadata({ params }) {
  const { locale } = await params
  return buildMetadata({
    locale,
    path: '/luang-prabang',
    title: `${tr(city.name, locale)} · 3 → 9 nov. 2026`,
    description: tr(city.description, locale),
  })
}

export default async function LuangPrabangPage({ params }) {
  const { locale } = await params
  return <CityPage city={city} locale={locale} dict={getDictionary(locale)} />
}
