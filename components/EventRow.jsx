import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AddToFestival from './AddToFestival'
import CalendarButton from './CalendarButton'
import EventPhoto from './EventPhoto'
import { formatRangeShort, formatTimeRange, formatWeekday } from '@/lib/format'

/** Ligne compacte : « 03 NOV — Inauguration — Luang Prabang » + actions. */
export default function EventRow({ card, locale, labels }) {
  const href = `/${locale}/evenements/${card.slug}`
  return (
    <li className="group relative grid grid-cols-[4.5rem_1fr] items-center gap-x-5 gap-y-3 border-b-2 border-ink py-5 md:grid-cols-[6rem_9rem_1fr_auto]">
      <div className="relative row-span-2 aspect-square self-start overflow-hidden border-2 border-ink md:row-span-1 md:self-center">
        <EventPhoto photo={card.photo} seed={card.slug} color={card.color} sizes="6rem" className="transition-transform duration-500 ease-out group-hover:scale-105" />
      </div>
      <div className="flex flex-col">
        <span className="display text-2xl text-blue md:text-3xl">{formatRangeShort(card.start, card.end, locale)}</span>
        <span className="text-xs font-semibold text-ink/60 uppercase">
          {card.allDay ? labels.allDay : `${formatWeekday(card.start, locale)} ${formatTimeRange(card.start, card.end)}`}
        </span>
      </div>
      <div>
        <span className="mb-1 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
          <span className="size-2.5 rounded-full" style={{ background: card.color }} aria-hidden="true" />
          {card.typeLabel} · {card.cityName}
        </span>
        <h3 className="text-lg leading-tight font-black uppercase">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] group-hover:text-blue">
            {card.title}
          </Link>
        </h3>
        <p className="text-sm text-ink/70">{card.venueName}</p>
      </div>
      <div className="relative z-10 col-span-2 flex flex-wrap items-center gap-2 md:col-span-1">
        <Link href={href} className="btn-outline min-h-11 px-4" aria-label={`${labels.seeEvent} : ${card.title}`}>
          {labels.seeEvent} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <CalendarButton event={card.cal} locale={locale} labels={labels} align="right" />
        <AddToFestival slug={card.slug} labels={labels} compact />
      </div>
    </li>
  )
}
