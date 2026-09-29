'use client'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, Download, ExternalLink, Trash2, TriangleAlert, Heart } from 'lucide-react'
import { useFestival } from './festival-store'
import EventPhoto from './EventPhoto'
import { googleCalendarUrl, icsHref } from '@/lib/calendar'
import { formatLongDate, formatRangeShort, formatTimeRange } from '@/lib/format'

/** Page « Mon festival » : événements sélectionnés, export Google / .ics. */
export default function AgendaView({ cards, locale, labels, common }) {
  const { slugs, remove, clear } = useFestival()
  const reduce = useReducedMotion()
  const selected = cards.filter((c) => slugs.includes(c.slug)).sort((a, b) => a.start.localeCompare(b.start))

  // Détection des chevauchements horaires (hors expositions)
  const overlaps = new Set()
  const timed = selected.filter((c) => !c.allDay)
  for (let i = 0; i < timed.length; i++)
    for (let j = i + 1; j < timed.length; j++)
      if (timed[i].start < timed[j].end && timed[j].start < timed[i].end) overlaps.add(timed[i].slug).add(timed[j].slug)

  if (selected.length === 0) {
    return (
      <div className="border-2 border-dashed border-ink p-10 text-center md:p-16">
        <Heart className="mx-auto size-12 text-macaron" aria-hidden="true" />
        <p className="mt-4 text-2xl font-black uppercase">{labels.empty}</p>
        <Link href={`/${locale}/programme`} className="btn-primary mt-8">
          {labels.emptyCta}
        </Link>
      </div>
    )
  }

  const days = [...new Set(selected.map((c) => c.start.slice(0, 10)))]

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start">
      <div>
        <p className="kicker mb-6">{labels.count.replace('{n}', selected.length)}</p>
        {days.map((day) => (
          <section key={day} className="mb-10" aria-labelledby={`day-${day}`}>
            <h2 id={`day-${day}`} className="display mb-4 border-b-4 border-ink pb-2 text-3xl uppercase first-letter:uppercase">
              {formatLongDate(day, locale)}
            </h2>
            <ul>
              <AnimatePresence initial={false}>
                {selected
                  .filter((c) => c.start.slice(0, 10) === day)
                  .map((c) => (
                    <motion.li
                      key={c.slug}
                      layout={!reduce}
                      exit={reduce ? undefined : { opacity: 0, x: -40 }}
                      className="grid grid-cols-[4rem_1fr] items-center gap-4 border-b-2 border-ink/15 py-4 sm:grid-cols-[4rem_7rem_1fr_auto]"
                    >
                      <Link href={`/${locale}/evenements/${c.slug}`} className="relative row-span-2 aspect-square self-start overflow-hidden border-2 border-ink sm:row-span-1 sm:self-center" tabIndex={-1} aria-hidden="true">
                        <EventPhoto photo={c.photo} seed={c.slug} color={c.color} sizes="4rem" />
                      </Link>
                      <span className="display text-xl text-blue">{c.allDay ? formatRangeShort(c.start, c.end, locale) : formatTimeRange(c.start, c.end)}</span>
                      <div>
                        <p className="text-xs font-bold uppercase">
                          <span className="mr-2 inline-block size-2.5 rounded-full" style={{ background: c.color }} aria-hidden="true" />
                          {c.typeLabel} · {c.cityName}
                        </p>
                        <Link href={`/${locale}/evenements/${c.slug}`} className="text-lg font-black uppercase hover:text-blue">
                          {c.title}
                        </Link>
                        <p className="text-sm text-ink/70">{c.venueName}</p>
                        {overlaps.has(c.slug) && (
                          <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#b54708]">
                            <TriangleAlert className="size-4" aria-hidden="true" /> {labels.conflict}
                          </p>
                        )}
                      </div>
                      <div className="col-span-2 flex gap-2 sm:col-span-1">
                        <a href={googleCalendarUrl(c.cal, locale)} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-11 px-3 text-xs">
                          <ExternalLink className="size-4" aria-hidden="true" /> Google
                        </a>
                        <button type="button" onClick={() => remove(c.slug)} className="grid size-11 place-items-center border-2 border-ink hover:bg-ink hover:text-paper" aria-label={`${common.removeFromFestival} : ${c.title}`}>
                          <Trash2 className="size-4" aria-hidden="true" />
                        </button>
                      </div>
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ul>
          </section>
        ))}
      </div>

      <aside className="on-dark sticky top-24 bg-blue p-6 text-paper md:p-8">
        <h2 className="display text-3xl uppercase">{labels.exportTitle}</h2>
        <a href={icsHref(selected.map((c) => c.cal), locale)} download="mon-festival-france-laos-2026.ics" className="btn-light mt-6 w-full">
          <Download className="size-4" aria-hidden="true" /> {labels.exportAll}
        </a>
        <p className="mt-4 text-sm text-paper/85">{labels.exportHint}</p>
        <details className="mt-6 border-t border-paper/30 pt-4">
          <summary className="flex min-h-11 items-center font-bold uppercase">{labels.googleEach}</summary>
          <ul className="mt-2 space-y-1">
            {selected.map((c) => (
              <li key={c.slug}>
                <a href={googleCalendarUrl(c.cal, locale)} target="_blank" rel="noopener noreferrer" className="flex min-h-10 items-center gap-2 text-sm hover:underline">
                  <Check className="size-4 text-tournesol" aria-hidden="true" /> {c.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
        <button type="button" onClick={clear} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold uppercase underline underline-offset-4">
          <Trash2 className="size-4" aria-hidden="true" /> {labels.clear}
        </button>
        <p className="mt-4 text-xs text-paper/70">{labels.stored}</p>
      </aside>
    </div>
  )
}
