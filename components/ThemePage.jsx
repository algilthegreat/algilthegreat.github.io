import Link from 'next/link'
import Image from 'next/image'
import { Film, Languages, Timer, User, Users, Gauge, Package, CalendarDays, MapPin } from 'lucide-react'
import PageHero from './PageHero'
import Section from './Section'
import EventCard from './EventCard'
import ArtistCard from './ArtistCard'
import Poster from './Poster'
import EventPhoto from './EventPhoto'
import CalendarButton from './CalendarButton'
import AddToFestival from './AddToFestival'
import SpotlightCard from './reactbits/SpotlightCard'
import AnimatedContent from './reactbits/AnimatedContent'
import { tr } from '@/lib/i18n/config'
import { getArtist, toArtistCard, toEventCard } from '@/lib/data'
import { crumbs } from '@/lib/page'
import { formatDate, formatRangeShort, formatTimeRange, formatLongDate } from '@/lib/format'

/**
 * Pages thématiques (/cinema, /musique, /expositions, /rencontres, /ateliers, /jeunesse)
 * et pages discipline : générées à partir des mêmes données relationnelles.
 */
export default function ThemePage({ locale, dict, theme, path, events, color, variant = 'grid', children }) {
  const { common } = dict
  const artistSlugs = [...new Set(events.flatMap((e) => e.artistSlugs))]
  const artists = artistSlugs.map((s) => getArtist(s)).filter(Boolean)

  return (
    <>
      <PageHero
        kicker={`${events.length} ${events.length > 1 ? common.events : common.event}`}
        title={theme.title}
        intro={theme.intro}
        color={color}
        crumbs={crumbs(locale, dict, [dict.programme.title, '/programme'], [theme.title, path])}
      />

      {children}

      <div className="container-site pb-20">
        {variant === 'films' && (
          <ul className="space-y-8">
            {events.map((e, i) => (
              <AnimatedContent as="li" key={e.slug} delay={0.05 * (i % 3)}>
                <SpotlightCard as="article" color={`${e.color}66`} className="grid border-2 border-ink md:grid-cols-[18rem_1fr]">
                  <div className="relative aspect-[2/3] overflow-hidden border-b-2 border-ink md:border-r-2 md:border-b-0">
                    {e.photo ? (
                      <Image src={e.photo} alt="" fill sizes="(min-width: 768px) 18rem, 100vw" className="object-cover" />
                    ) : (
                      <Poster seed={`film-${e.film.synopsis.fr.slice(0, 20)}`} color={e.color} ratio={2 / 3} ground="#000000" title={tr(e.title, locale)} />
                    )}
                  </div>
                  <div className="flex flex-col gap-4 p-6 md:p-8">
                    <p className="display text-3xl text-blue uppercase first-letter:uppercase">
                      {formatLongDate(e.start, locale)} · {formatTimeRange(e.start, e.end)}
                    </p>
                    <h2 className="text-3xl font-black uppercase">
                      <Link href={`/${locale}/evenements/${e.slug}`} className="hover:text-blue">{tr(e.title, locale)}</Link>
                    </h2>
                    <dl className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
                      {[
                        [User, common.director, e.film.director],
                        [Film, `${common.country} · ${common.year}`, `${tr(e.film.country, locale)} · ${e.film.year}`],
                        [Timer, common.duration, `${e.film.duration} ${common.min}`],
                        [Languages, common.languages, tr(e.film.language, locale)],
                        [Languages, common.subtitles, tr(e.film.subtitles, locale)],
                        [MapPin, common.venue, `${tr(e.venue.shortName ?? e.venue.name, locale)}, ${tr(e.city.name, locale)}`],
                      ].map(([Icon, k, v]) => (
                        <div key={k} className="flex gap-2">
                          <Icon className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                          <div><dt className="font-bold uppercase">{k}</dt><dd>{v}</dd></div>
                        </div>
                      ))}
                    </dl>
                    <p className="text-lg"><strong>{common.synopsis}. </strong>{tr(e.film.synopsis, locale)}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <Link href={`/${locale}/evenements/${e.slug}`} className="btn-dark">{common.seeEvent}</Link>
                      <CalendarButton event={toEventCard(e, locale).cal} locale={locale} labels={common} />
                      <AddToFestival slug={e.slug} labels={common} compact />
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </ul>
        )}

        {variant === 'exhibitions' && (
          <ul className="space-y-16">
            {events.map((e) => (
              <li key={e.slug} className="grid gap-8 border-t-4 border-ink pt-8 lg:grid-cols-2">
                <div>
                  <p className="display text-4xl text-blue">{formatRangeShort(e.start, e.end, locale)}</p>
                  <h2 className="display mt-3 text-5xl uppercase">
                    <Link href={`/${locale}/evenements/${e.slug}`} className="hover:text-blue">{tr(e.title, locale)}</Link>
                  </h2>
                  <p className="mt-4 text-lg">{tr(e.description, locale)}</p>
                  <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div><dt className="kicker text-ink/60">{common.venue}</dt><dd className="font-bold">{tr(e.venue.name, locale)}</dd></div>
                    <div><dt className="kicker text-ink/60">{common.date}</dt><dd className="font-bold">{formatDate(e.start, locale)} → {formatDate(e.end, locale)}</dd></div>
                    <div><dt className="kicker text-ink/60">{dict.nav.artists}</dt><dd className="font-bold">{e.artists.map((a) => a.name).join(', ')}</dd></div>
                    <div><dt className="kicker text-ink/60">{common.curator}</dt><dd className="font-bold">{tr(e.exhibition?.curator, locale)}</dd></div>
                    <div><dt className="kicker text-ink/60">{common.hours}</dt><dd className="font-bold">{tr(e.exhibition?.hours, locale)}</dd></div>
                    <div><dt className="kicker text-ink/60">{common.price}</dt><dd className="font-bold">{e.free ? common.free : common.paid}</dd></div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <CalendarButton event={toEventCard(e, locale).cal} locale={locale} labels={common} />
                    <AddToFestival slug={e.slug} labels={common} />
                  </div>
                </div>
                <Link href={`/${locale}/evenements/${e.slug}`} className="group relative block aspect-[4/3] self-start overflow-hidden border-2 border-ink" tabIndex={-1} aria-hidden="true">
                  <EventPhoto photo={e.photo} seed={e.slug} color={e.color} sizes="(min-width: 1024px) 50vw, 100vw" className="transition-transform duration-700 ease-out group-hover:scale-105" />
                </Link>
              </li>
            ))}
          </ul>
        )}

        {variant === 'workshops' && (
          <ul className="grid gap-6 md:grid-cols-2">
            {events.map((e) => (
              <li key={e.slug}>
                <SpotlightCard as="article" color={`${e.color}66`} className="flex h-full flex-col border-2 border-ink">
                  <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-ink">
                    <EventPhoto photo={e.photo} seed={e.slug} color={e.color} sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="kicker" style={{ color: 'var(--color-blue)' }}>{tr(e.disciplineData.label, locale)} · {tr(e.city.name, locale)}</p>
                    <h2 className="mt-2 text-2xl font-black uppercase">
                      <Link href={`/${locale}/evenements/${e.slug}`} className="hover:text-blue">{tr(e.title, locale)}</Link>
                    </h2>
                    <p className="mt-2 flex items-center gap-2 font-bold"><CalendarDays className="size-4 text-blue" aria-hidden="true" />{formatDate(e.start, locale)} · {formatTimeRange(e.start, e.end)}</p>
                    <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      {e.workshop && [
                        [Users, common.age, tr(e.workshop.age, locale)],
                        [Gauge, common.level, tr(e.workshop.level, locale)],
                        [Timer, common.duration, tr(e.workshop.duration, locale)],
                        [Users, common.seats, e.workshop.seats],
                        [Package, common.materials, tr(e.workshop.materials, locale)],
                        [User, dict.event.with, e.artists.map((a) => a.name).join(', ')],
                      ].map(([Icon, k, v]) => (
                        <div key={k} className="flex gap-2">
                          <Icon className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                          <div><dt className="font-bold uppercase">{k}</dt><dd>{v}</dd></div>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      <Link href={`/${locale}/contact`} className="btn-primary">{common.register}</Link>
                      <CalendarButton event={toEventCard(e, locale).cal} locale={locale} labels={common} />
                      <AddToFestival slug={e.slug} labels={common} compact />
                    </div>
                  </div>
                </SpotlightCard>
              </li>
            ))}
          </ul>
        )}

        {variant === 'grid' && (
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {events.map((e) => (
              <li key={e.slug}><EventCard card={toEventCard(e, locale)} locale={locale} labels={common} headingLevel={2} /></li>
            ))}
          </ul>
        )}
      </div>

      {artists.length > 0 && (
        <Section id="artistes-associes" tone="mist" title={dict.nav.artists}>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {artists.map((a) => (
              <li key={a.slug}><ArtistCard artist={toArtistCard(a, locale)} locale={locale} /></li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
