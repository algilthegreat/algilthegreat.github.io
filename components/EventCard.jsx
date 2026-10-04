import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Ticket, ArrowUpRight, User } from 'lucide-react'
import Poster from './Poster'
import AddToFestival from './AddToFestival'
import CalendarButton from './CalendarButton'
import SpotlightCard from './reactbits/SpotlightCard'
import { formatDay, formatMonthShort, formatRangeShort, formatTimeRange, formatPrice } from '@/lib/format'

/**
 * Carte événement — utilisable côté serveur et client.
 * `card` provient de toEventCard(event, locale) ; `labels` = dict.common.
 */
export default function EventCard({ card, locale, labels, headingLevel = 3, priority = false }) {
  const H = `h${headingLevel}`
  const href = `/${locale}/evenements/${card.slug}`
  const multiDay = card.start.slice(0, 10) !== card.end.slice(0, 10)

  return (
    <SpotlightCard as="article" className="flex h-full flex-col border-2 border-ink bg-paper text-ink" color={`${card.color}55`}>
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div className="h-full transition-transform duration-700 ease-out group-hover/spot:scale-105">
          {card.photo ? (
            <Image src={card.photo} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          ) : (
            <Poster seed={card.slug} color={card.color} />
          )}
        </div>
        <span className="absolute top-3 left-3 bg-paper px-2.5 py-1 text-xs font-bold tracking-wider uppercase">{card.typeLabel}</span>
        {priority && <span className="absolute top-3 right-3 size-3 rounded-full bg-tournesol ring-4 ring-ink/10" />}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="display text-3xl" style={{ color: 'var(--color-blue)' }}>
          {multiDay ? (
            <span className="text-2xl">{formatRangeShort(card.start, card.end, locale)}</span>
          ) : (
            <>
              {formatDay(card.start)} <span className="text-ink">{formatMonthShort(card.start, locale)}</span>
            </>
          )}
        </p>
        <H className="text-xl leading-tight font-black uppercase">
          <Link href={href} className="link-underline after:absolute after:inset-0 after:content-['']">
            {card.title}
          </Link>
        </H>
        <ul className="space-y-1.5 text-sm text-ink/80">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
            <span>
              <strong className="text-ink">{card.cityName}</strong> · {card.venueName}
            </span>
          </li>
          {card.artists?.length > 0 && (
            <li className="flex items-start gap-2">
              <User className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
              <span>{card.artists.map((a) => (a.countryLabel ? `${a.name} (${a.countryLabel})` : a.name)).join(', ')}</span>
            </li>
          )}
          <li className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-blue" aria-hidden="true" />
            {card.allDay ? labels.allDay : formatTimeRange(card.start, card.end)}
          </li>
          <li className="flex items-center gap-2">
            <Ticket className="size-4 shrink-0 text-blue" aria-hidden="true" />
            {formatPrice(card, labels)}
          </li>
        </ul>
        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Link href={href} className="btn-dark min-h-11 px-4">
            {labels.seeEvent} <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <CalendarButton event={card.cal} locale={locale} labels={labels} />
          <AddToFestival slug={card.slug} labels={labels} compact className="ml-auto" />
        </div>
      </div>
    </SpotlightCard>
  )
}
