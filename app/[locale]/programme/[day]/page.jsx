import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import EventCard from '@/components/EventCard'
import { getDictionary, fill } from '@/lib/i18n'
import { locales, tr } from '@/lib/i18n/config'
import { getEvents, cities, toEventCard } from '@/lib/data'
import { buildMetadata } from '@/lib/seo'
import { crumbs } from '@/lib/page'
import { FESTIVAL_DAYS, daySlug, dayFromSlug, formatLongDate } from '@/lib/format'

export const dynamicParams = false

// Le 3 novembre possède sa propre page (/programme/3-novembre)
export const generateStaticParams = () =>
  locales.flatMap((locale) => FESTIVAL_DAYS.slice(1).map((d) => ({ locale, day: daySlug(d) })))

export async function generateMetadata({ params }) {
  const { locale, day } = await params
  const iso = dayFromSlug(day)
  if (!iso) return {}
  const dict = getDictionary(locale)
  const date = formatLongDate(iso, locale)
  const titles = getEvents({ day: iso }).map((e) => tr(e.title, locale))
  return buildMetadata({
    locale,
    path: `/programme/${day}`,
    title: fill(dict.programme.dayTitle, { date }),
    description: `${fill(dict.programme.dayTitle, { date })} : ${titles.slice(0, 4).join(', ')}.`,
  })
}

export default async function DayPage({ params }) {
  const { locale, day } = await params
  const iso = dayFromSlug(day)
  if (!iso) notFound()
  const dict = getDictionary(locale)
  const i = FESTIVAL_DAYS.indexOf(iso)
  const prev = FESTIVAL_DAYS[i - 1]
  const next = FESTIVAL_DAYS[i + 1]
  const city = cities.find((c) => iso >= c.from && iso <= c.to)
  const events = getEvents({ day: iso })
  const title = fill(dict.programme.dayTitle, { date: formatLongDate(iso, locale) })

  return (
    <>
      <PageHero
        kicker={tr(city?.name, locale)}
        title={title}
        color={city?.color}
        crumbs={crumbs(locale, dict, [dict.programme.title, '/programme'], [formatLongDate(iso, locale), `/programme/${day}`])}
      />
      <div className="container-site pb-24">
        <nav className="mb-10 flex justify-between gap-4 border-y-2 border-ink py-3" aria-label={dict.programme.byDay}>
          {prev ? (
            <Link href={`/${locale}/programme/${daySlug(prev)}`} className="btn-outline min-h-11 border-0 px-2" rel="prev">
              <ArrowLeft className="size-4" aria-hidden="true" /> {dict.programme.prevDay}
            </Link>
          ) : <span />}
          {next && (
            <Link href={`/${locale}/programme/${daySlug(next)}`} className="btn-outline min-h-11 border-0 px-2" rel="next">
              {dict.programme.nextDay} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          )}
        </nav>
        {events.length === 0 ? (
          <p className="text-xl font-bold">{dict.programme.empty}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {events.map((e) => (
              <li key={e.slug}>
                <EventCard card={toEventCard(e, locale)} locale={locale} labels={dict.common} headingLevel={2} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
