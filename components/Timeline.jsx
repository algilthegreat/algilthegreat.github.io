import Link from 'next/link'
import { FESTIVAL_DAYS, daySlug, formatWeekday } from '@/lib/format'
import { getEvents } from '@/lib/data'
import { tr } from '@/lib/i18n/config'
import { cities } from '@/lib/data/taxonomies'

/**
 * Grande frise 03.11 → 21.11 : un jour = une colonne cliquable, points colorés par ville.
 * `city` limite la frise à une ville (pages Luang Prabang / Vientiane).
 */
export default function Timeline({ locale, city, dark = false }) {
  const days = FESTIVAL_DAYS.filter((d) => !city || (d >= city.from && d <= city.to))
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
      <ol className="flex min-w-max gap-0 border-y-2 border-current">
        {days.map((day) => {
          const counts = cities.map((c) => ({ city: c, n: getEvents({ day, city: c.slug }).filter((e) => !e.allDay).length }))
          const cityOfDay = cities.find((c) => day >= c.from && day <= c.to)
          return (
            <li key={day} className="border-r-2 border-current last:border-r-0">
              <Link
                href={`/${locale}/programme/${daySlug(day)}`}
                className={`group flex h-full w-[5.5rem] flex-col gap-2 p-3 transition-colors ${dark ? 'hover:bg-paper hover:text-ink' : 'hover:bg-ink hover:text-paper'}`}
                aria-label={`${formatWeekday(day, locale)} ${Number(day.slice(8))} — ${counts.map((c) => `${tr(c.city.name, locale)} ${c.n}`).join(', ')}`}
              >
                <span className="text-xs font-bold uppercase opacity-70">{formatWeekday(day, locale)}</span>
                <span className="display text-5xl">{day.slice(8)}</span>
                <span className="h-1.5 w-full" style={{ background: cityOfDay?.color }} aria-hidden="true" />
                <span className="flex flex-wrap gap-1" aria-hidden="true">
                  {counts.flatMap(({ city: c, n }) =>
                    Array.from({ length: n }, (_, i) => <span key={`${c.slug}${i}`} className="size-2.5 rounded-full" style={{ background: c.color }} />),
                  )}
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
      {!city && (
        <ul className="mt-4 flex flex-wrap gap-6 text-sm font-bold uppercase">
          {cities.map((c) => (
            <li key={c.slug} className="flex items-center gap-2">
              <span className="size-3 rounded-full" style={{ background: c.color }} aria-hidden="true" />
              {tr(c.name, locale)} · {Number(c.from.slice(8))}→{Number(c.to.slice(8))}.11
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
