import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowUpRight } from 'lucide-react'
import Poster from './Poster'
import GlareHover from './reactbits/GlareHover'
import { tr, venueKindsLabel } from './venue-helpers'

export default function VenueCard({ venue, locale, eventCount, labels, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <GlareHover className="h-full">
      <article className="group relative flex h-full flex-col border-2 border-ink bg-paper">
        <div className="aspect-[16/9] overflow-hidden border-b-2 border-ink">
          {venue.photo ? (
            <Image src={venue.photo} alt="" width={800} height={450} sizes="(min-width: 1024px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          ) : (
            <Poster seed={venue.slug} color={venue.city.color} ratio={16 / 9} />
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="kicker text-blue">{venueKindsLabel(venue.kind, locale)}</p>
          <H className="text-xl leading-tight font-black uppercase">
            <Link href={`/${locale}/lieux/${venue.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-blue">
              {tr(venue.name, locale)}
            </Link>
          </H>
          <p className="flex items-center gap-2 text-sm">
            <MapPin className="size-4 text-blue" aria-hidden="true" /> {tr(venue.city.name, locale)}
          </p>
          <p className="mt-auto flex items-center justify-between pt-3 text-sm font-bold uppercase">
            <span>
              {eventCount} {eventCount > 1 ? labels.events : labels.event}
            </span>
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </p>
        </div>
      </article>
    </GlareHover>
  )
}
