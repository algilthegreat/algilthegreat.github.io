import Link from 'next/link'
import Image from 'next/image'
import Poster, { initials } from './Poster'
import TiltedCard from './reactbits/TiltedCard'

/** Carte artiste : photo (ou visuel génératif), nom, pays, pratique. */
export default function ArtistCard({ artist, locale, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <TiltedCard className="h-full">
      <article className="group relative flex h-full flex-col border-2 border-ink bg-paper">
        <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-ink">
          {artist.photo ? (
            <Image src={artist.photo} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          ) : (
            <Poster seed={artist.slug} color={artist.color} ratio={4 / 5} label={initials(artist.name)} />
          )}
          <span className="absolute top-3 left-3 bg-ink px-2 py-1 text-xs font-bold text-paper uppercase">{artist.countryLabel}</span>
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <H className="text-lg leading-tight font-black uppercase">
            <Link href={`/${locale}/artistes/${artist.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:text-blue">
              {artist.name}
            </Link>
          </H>
          <p className="text-sm font-semibold">{artist.countryLabel}</p>
          <p className="text-sm text-ink/70">{artist.roleLabel || artist.disciplineLabel}</p>
        </div>
      </article>
    </TiltedCard>
  )
}
