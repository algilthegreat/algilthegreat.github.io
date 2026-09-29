import PageHero from '@/components/PageHero'
import SearchResults from '@/components/SearchResults'
import { getDictionary } from '@/lib/i18n'
import { buildSearchIndex } from '@/lib/data'
import { buildMetadata } from '@/lib/seo'
import { crumbs } from '@/lib/page'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return buildMetadata({ locale, path: '/recherche', title: dict.search.title, description: dict.meta.search, noindex: true })
}

export default async function SearchPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.search.title} color="#7AB1E8" crumbs={crumbs(locale, dict, [dict.search.title, '/recherche'])} />
      <div className="container-site pb-24">
        <SearchResults index={buildSearchIndex(locale)} labels={dict.search} />
      </div>
    </>
  )
}
