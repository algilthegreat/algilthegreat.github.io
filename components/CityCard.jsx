import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Poster from './Poster'
import { tr } from '@/lib/i18n/config'
import { formatShortDate } from '@/lib/format'
import { fill } from '@/lib/i18n'

/** Grande carte ville immersive (pages Accueil et Villes). */
export default function CityCard({ city, locale, dict, count, headingLevel = 2 }) {
  const H = `h${headingLevel}`
  return (
    <article className="group on-dark relative isolate flex min-h-[32rem] flex-col justify-end overflow-hidden bg-ink p-6 text-paper md:min-h-[40rem] md:p-10">
      <div className="absolute inset-0 -z-10 opacity-80 transition-transform duration-[1.2s] ease-out group-hover:scale-105">
        {city.photo ? (
          <Image src={city.photo} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        ) : (
          <Poster seed={`city-${city.slug}`} color={city.color} ratio={3 / 4} ground="#000000" />
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <p className="kicker mb-3" style={{ color: city.color }}>
        {fill(dict.cities.period, { from: formatShortDate(city.from, locale), to: formatShortDate(city.to, locale) })}
      </p>
      <H className="display text-[clamp(3rem,8vw,7rem)] uppercase">{tr(city.name, locale)}</H>
      <p className="mt-4 max-w-md text-lg text-paper/85">{tr(city.tagline, locale)}</p>
      <p className="mt-2 text-sm font-bold uppercase">
        {count} {dict.common.events}
      </p>
      <Link href={`/${locale}/${city.slug}`} className="btn-light mt-6 self-start after:absolute after:inset-0 after:content-['']">
        {dict.common.seeProgramme} <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  )
}
