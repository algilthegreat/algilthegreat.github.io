import Link from 'next/link'
import Image from 'next/image'
import Poster from './Poster'
import { tr } from '@/lib/i18n/config'
import { formatDay, formatMonthShort } from '@/lib/format'

export default function NewsCard({ article, locale, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <article className="group relative flex h-full flex-col border-t-4 border-ink pt-4">
      <div className="mb-4 aspect-[3/2] overflow-hidden">
        <div className="relative h-full transition-transform duration-700 group-hover:scale-105">
          {article.photo ? (
            <Image src={article.photo} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
          ) : (
            <Poster seed={article.slug} color={article.color} ratio={3 / 2} />
          )}
        </div>
      </div>
      <p className="display text-2xl text-blue">
        {formatDay(article.date)} {formatMonthShort(article.date, locale)}
      </p>
      <H className="mt-2 text-xl leading-tight font-black uppercase">
        <Link href={`/${locale}/actualites/${article.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-blue">
          {tr(article.title, locale)}
        </Link>
      </H>
      <p className="mt-2 text-ink/75">{tr(article.excerpt, locale)}</p>
    </article>
  )
}
