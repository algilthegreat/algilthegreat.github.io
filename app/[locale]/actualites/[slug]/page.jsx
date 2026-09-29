import Image from 'next/image'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import SplitText from '@/components/reactbits/SplitText'
import Poster from '@/components/Poster'
import EventCard from '@/components/EventCard'
import ArtistCard from '@/components/ArtistCard'
import NewsCard from '@/components/NewsCard'
import Section from '@/components/Section'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { locales, tr } from '@/lib/i18n/config'
import { getArticle, getArtist, getEvent, getNews, toArtistCard, toEventCard } from '@/lib/data'
import { buildMetadata, SITE_URL, SITE_NAME } from '@/lib/seo'
import { crumbs } from '@/lib/page'
import { formatDate } from '@/lib/format'

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((locale) => getNews().map((n) => ({ locale, slug: n.slug })))

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const a = getArticle(slug)
  if (!a) return {}
  return buildMetadata({ locale, path: `/actualites/${slug}`, title: tr(a.title, locale), description: tr(a.excerpt, locale), type: 'article' })
}

export default async function ArticlePage({ params }) {
  const { locale, slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  const dict = getDictionary(locale)
  const title = tr(article.title, locale)
  const events = article.eventSlugs.map(getEvent).filter(Boolean)
  const artists = article.artistSlugs.map(getArtist).filter(Boolean)
  const more = getNews().filter((n) => n.slug !== slug).slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          '@type': 'NewsArticle',
          headline: title,
          description: tr(article.excerpt, locale),
          datePublished: article.date,
          inLanguage: locale,
          author: { '@type': 'Organization', name: tr(article.author, locale) },
          publisher: { '@id': `${SITE_URL}/#organization`, name: SITE_NAME },
          mainEntityOfPage: `${SITE_URL}/${locale}/actualites/${slug}`,
        }}
      />
      <article>
        <header className="container-site pt-8">
          <Breadcrumbs items={crumbs(locale, dict, [dict.news.title, '/actualites'], [title, `/actualites/${slug}`])} />
          <p className="kicker mt-12 text-blue">
            <time dateTime={article.date}>{formatDate(article.date, locale)}</time> · {dict.news.by} {tr(article.author, locale)}
          </p>
          <SplitText as="h1" by="words" text={title} className="display mt-4 block max-w-[20ch] text-[clamp(2.5rem,7vw,6rem)] uppercase" />
          <p className="mt-6 max-w-3xl text-2xl font-semibold">{tr(article.excerpt, locale)}</p>
        </header>
        <div className="relative mt-12 aspect-[21/9] max-h-[60vh] w-full overflow-hidden border-y-2 border-ink">
          {article.photo ? (
            <Image src={article.photo} alt="" fill priority sizes="100vw" className="object-cover" />
          ) : (
            <Poster seed={`${slug}-hero`} color={article.color} ratio={21 / 9} title={title} />
          )}
        </div>
        <div className="container-site py-16">
          <div className="prose-site mx-auto text-xl">
            {article.body.map((p, i) => (
              <p key={i}>{tr(p, locale)}</p>
            ))}
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3" aria-label={dict.news.gallery}>
            {(article.photos ?? [0, 1, 2]).map((p, n) => (
              <li key={n} className="relative aspect-square overflow-hidden">
                {typeof p === 'string' ? (
                  <Image src={p} alt="" fill sizes="(min-width: 768px) 16rem, 33vw" className="object-cover" />
                ) : (
                  <Poster seed={`${slug}-${n}`} color={article.color} ratio={1} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {events.length > 0 && (
        <Section id="evenements-associes" tone="mist" title={dict.news.relatedEvents}>
          <ul className="grid gap-6 md:grid-cols-3">
            {events.map((e) => (
              <li key={e.slug}><EventCard card={toEventCard(e, locale)} locale={locale} labels={dict.common} /></li>
            ))}
          </ul>
        </Section>
      )}

      {artists.length > 0 && (
        <Section id="artistes-associes" title={dict.news.relatedArtists}>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {artists.map((a) => (
              <li key={a.slug}><ArtistCard artist={toArtistCard(a, locale)} locale={locale} /></li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="plus" tone="mist" title={dict.news.more}>
        <ul className="grid gap-10 md:grid-cols-3">
          {more.map((n) => (
            <li key={n.slug}><NewsCard article={n} locale={locale} /></li>
          ))}
        </ul>
      </Section>
    </>
  )
}
