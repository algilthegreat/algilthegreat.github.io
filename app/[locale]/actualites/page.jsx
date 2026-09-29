import PageHero from '@/components/PageHero'
import NewsCard from '@/components/NewsCard'
import { getDictionary } from '@/lib/i18n'
import { getNews } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('news', '/actualites', (d) => d.news.title)

export default async function NewsPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const [first, ...rest] = getNews()
  return (
    <>
      <PageHero title={dict.news.title} intro={dict.news.intro} color="#FFE552" crumbs={crumbs(locale, dict, [dict.news.title, '/actualites'])} />
      <div className="container-site pb-24">
        <div className="mb-16 grid gap-8 md:grid-cols-1">
          <NewsCard article={first} locale={locale} headingLevel={2} />
        </div>
        <ul className="grid gap-10 md:grid-cols-3">
          {rest.map((n) => (
            <li key={n.slug}><NewsCard article={n} locale={locale} headingLevel={2} /></li>
          ))}
        </ul>
      </div>
    </>
  )
}
