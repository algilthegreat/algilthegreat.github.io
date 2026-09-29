import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MapPin, Clock, Ticket, Accessibility, Languages, Navigation, CalendarDays } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import SplitText from '@/components/reactbits/SplitText'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import Poster from '@/components/Poster'
import CalendarButton from '@/components/CalendarButton'
import AddToFestival from '@/components/AddToFestival'
import ArtistCard from '@/components/ArtistCard'
import EventCard from '@/components/EventCard'
import MapView from '@/components/MapView'
import Section from '@/components/Section'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { locales, tr } from '@/lib/i18n/config'
import { getArtist, getEvent, getEvents, getRelatedEvents, eventTypes, toArtistCard, toEventCard } from '@/lib/data'
import { buildMetadata, eventLd } from '@/lib/seo'
import { crumbs } from '@/lib/page'
import { formatLongDate, formatDate, formatTimeRange, formatPrice } from '@/lib/format'

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((locale) => getEvents().map((e) => ({ locale, slug: e.slug })))

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const event = getEvent(slug)
  if (!event) return {}
  const date = formatDate(event.start, locale)
  return buildMetadata({
    locale,
    path: `/evenements/${slug}`,
    title: `${tr(event.title, locale)} — ${date}, ${tr(event.city.name, locale)}`,
    description: tr(event.summary, locale),
    type: 'article',
  })
}

export default async function EventPage({ params }) {
  const { locale, slug } = await params
  const event = getEvent(slug)
  if (!event) notFound()
  const dict = getDictionary(locale)
  const { common } = dict
  const card = toEventCard(event, locale)
  const typeLabel = tr(eventTypes.find((t) => t.slug === event.type)?.label, locale)
  const related = getRelatedEvents(event, 3)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${event.venue.geo.join(',')}`
  const dateLabel = event.allDay ? `${formatDate(event.start, locale)} → ${formatDate(event.end, locale)}` : formatLongDate(event.start, locale)

  const Info = ({ icon: Icon, label, children }) => (
    <div className="flex gap-4 border-b-2 border-ink/10 py-4">
      <Icon className="mt-1 size-6 shrink-0 text-blue" aria-hidden="true" />
      <div>
        <dt className="kicker text-ink/60">{label}</dt>
        <dd className="mt-1 text-lg font-semibold">{children}</dd>
      </div>
    </div>
  )

  return (
    <>
      <JsonLd data={eventLd(event, locale)} />
      <header className="relative overflow-hidden border-b-2 border-ink">
        <span aria-hidden="true" className="absolute -top-32 -right-32 size-[30rem] rounded-full" style={{ background: event.color }} />
        <div className="container-site relative pt-8 pb-12">
          <Breadcrumbs items={crumbs(locale, dict, [dict.programme.title, '/programme'], [tr(event.title, locale), `/evenements/${slug}`])} />
          <p className="kicker mt-12 text-blue">
            {typeLabel} · {tr(event.disciplineData.label, locale)}
          </p>
          <SplitText as="h1" by="words" text={tr(event.title, locale)} className="display mt-4 block max-w-[18ch] text-[clamp(2.5rem,7vw,6.5rem)] uppercase" />
          <p className="display mt-6 text-[clamp(1.5rem,3vw,2.5rem)] uppercase first-letter:uppercase">{dateLabel}</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-lg font-bold">
            <li className="flex items-center gap-2"><MapPin className="size-5 text-blue" aria-hidden="true" />{tr(event.venue.name, locale)}</li>
            <li className="flex items-center gap-2"><Clock className="size-5 text-blue" aria-hidden="true" />{event.allDay ? common.allDay : formatTimeRange(event.start, event.end)}</li>
            <li className="flex items-center gap-2"><Ticket className="size-5 text-blue" aria-hidden="true" />{formatPrice(event, common)}</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <CalendarButton event={card.cal} locale={locale} labels={common} variant="solid" />
            <AddToFestival slug={slug} labels={common} />
          </div>
        </div>
      </header>

      <div className="aspect-[21/9] max-h-[65vh] w-full overflow-hidden border-b-2 border-ink">
        {event.photo ? (
          <Image src={event.photo} alt={tr(event.title, locale)} width={2100} height={900} priority sizes="100vw" className="h-full w-full object-cover" />
        ) : (
          <Poster seed={`${slug}-hero`} color={event.color} ratio={21 / 9} title={tr(event.title, locale)} />
        )}
      </div>

      <div className="container-site grid gap-16 py-16 lg:grid-cols-[1fr_24rem]">
        <div>
          <section aria-labelledby="about">
            <h2 id="about" className="display text-5xl uppercase">{dict.event.about}</h2>
            <p className="prose-site mt-6 text-xl">{tr(event.description, locale)}</p>
          </section>

          {event.film && (
            <section aria-labelledby="film" className="mt-14 border-2 border-ink p-6 md:p-8">
              <h2 id="film" className="display text-4xl uppercase">{dict.event.film}</h2>
              <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {[
                  [common.director, event.film.director],
                  [common.country, tr(event.film.country, locale)],
                  [common.year, event.film.year],
                  [common.duration, `${event.film.duration} ${common.min}`],
                  [common.languages, tr(event.film.language, locale)],
                  [common.subtitles, tr(event.film.subtitles, locale)],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="kicker text-ink/60">{k}</dt>
                    <dd className="font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="kicker mt-8 text-blue">{common.synopsis}</h3>
              <p className="mt-2 text-lg">{tr(event.film.synopsis, locale)}</p>
            </section>
          )}

          {event.exhibition && (
            <section aria-labelledby="expo" className="mt-14 border-2 border-ink p-6 md:p-8">
              <h2 id="expo" className="display text-4xl uppercase">{dict.event.exhibition}</h2>
              <dl className="mt-6 grid gap-4 md:grid-cols-2">
                <div><dt className="kicker text-ink/60">{common.curator}</dt><dd className="font-bold">{tr(event.exhibition.curator, locale)}</dd></div>
                <div><dt className="kicker text-ink/60">{common.hours}</dt><dd className="font-bold">{tr(event.exhibition.hours, locale)}</dd></div>
              </dl>
            </section>
          )}

          {event.workshop && (
            <section aria-labelledby="atelier" className="mt-14 border-2 border-ink p-6 md:p-8">
              <h2 id="atelier" className="display text-4xl uppercase">{dict.event.workshop}</h2>
              <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {[
                  [common.age, tr(event.workshop.age, locale)],
                  [common.level, tr(event.workshop.level, locale)],
                  [common.duration, tr(event.workshop.duration, locale)],
                  [common.seats, event.workshop.seats],
                  [common.materials, tr(event.workshop.materials, locale)],
                ].map(([k, v]) => (
                  <div key={k}><dt className="kicker text-ink/60">{k}</dt><dd className="font-bold">{v}</dd></div>
                ))}
              </dl>
            </section>
          )}

          {event.schedule && (
            <section aria-labelledby="programme" className="mt-14">
              <h2 id="programme" className="display text-5xl uppercase">{dict.event.programme}</h2>
              <ol className="mt-6 border-t-2 border-ink">
                {event.schedule.map((s) => (
                  <li key={s.time} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b-2 border-ink py-4">
                    <span className="display text-2xl text-blue">{s.time}</span>
                    <span className="text-lg font-bold">{tr(s.label, locale)}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {event.artists.length > 0 && (
            <section aria-labelledby="avec" className="mt-14">
              <h2 id="avec" className="display text-5xl uppercase">{dict.event.with}</h2>
              <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {event.artists.map((a) => (
                  <AnimatedContent as="li" key={a.slug}>
                    <ArtistCard artist={toArtistCard(getArtist(a.slug), locale)} locale={locale} />
                  </AnimatedContent>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start" aria-labelledby="infos">
          <div className="border-2 border-ink p-6">
            <h2 id="infos" className="display text-3xl uppercase">{dict.event.practical}</h2>
            <dl className="mt-2">
              <Info icon={CalendarDays} label={common.date}><span className="first-letter:uppercase">{dateLabel}</span></Info>
              <Info icon={Clock} label={common.time}>{event.allDay ? tr(event.exhibition?.hours, locale) || common.allDay : formatTimeRange(event.start, event.end)}</Info>
              <Info icon={MapPin} label={common.address}>
                <Link href={`/${locale}/lieux/${event.venueSlug}`} className="underline underline-offset-4 hover:text-blue">{tr(event.venue.name, locale)}</Link>
                <span className="block text-base font-normal">{event.venue.address}</span>
              </Info>
              <Info icon={Ticket} label={common.price}>
                {formatPrice(event, common)}
                {event.registration && <span className="block text-sm font-normal">{dict.event.registrationNote}</span>}
              </Info>
              {event.languages?.length > 0 && (
                <Info icon={Languages} label={dict.event.languages}>{event.languages.map((l) => dict.langs[l]).join(' · ')}</Info>
              )}
              <Info icon={Accessibility} label={common.accessibility}>{tr(event.venue.accessibility, locale)}</Info>
            </dl>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 w-full">
              <Navigation className="size-4" aria-hidden="true" /> {common.openInMaps}
            </a>
            <div className="mt-3 flex gap-2">
              <CalendarButton event={card.cal} locale={locale} labels={common} variant="solid" className="flex-1" />
              <AddToFestival slug={slug} labels={common} compact />
            </div>
          </div>
        </aside>
      </div>

      <section aria-labelledby="carte" className="container-site pb-16">
        <h2 id="carte" className="display mb-6 text-5xl uppercase">{dict.event.map}</h2>
        <MapView
          height="45vh"
          showCityToggle={false}
          labels={dict.map}
          cities={[{ slug: event.citySlug, label: tr(event.city.name, locale), color: event.city.color, geo: event.venue.geo, zoom: 16 }]}
          venues={[{
            slug: event.venueSlug,
            name: tr(event.venue.name, locale),
            kind: tr(event.venue.city.name, locale),
            citySlug: event.citySlug,
            cityColor: event.city.color,
            geo: event.venue.geo,
            count: getEvents({ venue: event.venueSlug }).length,
            href: `/${locale}/lieux/${event.venueSlug}`,
          }]}
        />
      </section>

      {related.length > 0 && (
        <Section id="related" tone="mist" title={dict.event.related}>
          <ul className="grid gap-6 md:grid-cols-3">
            {related.map((e) => (
              <li key={e.slug}><EventCard card={toEventCard(e, locale)} locale={locale} labels={common} /></li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}
