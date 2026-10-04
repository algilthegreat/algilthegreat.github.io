import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock, Ticket, ArrowRight } from 'lucide-react'
import Aurora from '@/components/reactbits/Aurora'
import SplitText from '@/components/reactbits/SplitText'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import Breadcrumbs from '@/components/Breadcrumbs'
import Poster from '@/components/Poster'
import CalendarButton from '@/components/CalendarButton'
import AddToFestival from '@/components/AddToFestival'
import ArtistCard from '@/components/ArtistCard'
import EventCard from '@/components/EventCard'
import Section from '@/components/Section'
import PartnersWall from '@/components/PartnersWall'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { getArtist, getEvent, getEvents, partnerGroups, toArtistCard, toEventCard } from '@/lib/data'
import { buildMetadata, eventLd } from '@/lib/seo'
import { crumbs } from '@/lib/page'
import { formatTimeRange, formatPrice } from '@/lib/format'

const SLUG = 'soiree-veronique-de-lavenere'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return buildMetadata({ locale, path: '/programme/3-novembre', title: dict.opening.title, description: dict.meta.opening, type: 'article' })
}

export default async function OpeningPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const { opening, common } = dict
  const event = getEvent(SLUG)
  const card = toEventCard(event, locale)
  const exhibition = getEvent('exposition-les-mains-du-maitre')
  const others = getEvents({ city: 'luang-prabang' })
    .filter((e) => e.slug !== SLUG && e.slug !== exhibition.slug)
    .slice(0, 3)

  return (
    <>
      <JsonLd data={eventLd(event, locale)} />
      <header className="on-dark relative isolate overflow-hidden bg-ink text-paper">
        <Aurora colors={['#3558A2', '#FFE552', '#FF9575', '#21AB88']} />
        <div className="container-site relative pt-8 pb-16 md:pb-24">
          <Breadcrumbs dark items={crumbs(locale, dict, [dict.programme.title, '/programme'], [opening.title, '/programme/3-novembre'])} />
          <p className="display mt-16 text-[clamp(1.5rem,4vw,3rem)] text-tournesol uppercase">{opening.kicker}</p>
          <SplitText as="h1" text={opening.title} className="display mt-4 block max-w-[14ch] text-[clamp(3rem,10vw,9.5rem)] uppercase" />
          <p className="mt-8 max-w-2xl text-xl text-paper/85">{opening.intro}</p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-lg font-bold">
            <li className="flex items-center gap-2"><MapPin className="size-5 text-tournesol" aria-hidden="true" /> {tr(event.venue.name, locale)}</li>
            <li className="flex items-center gap-2"><Clock className="size-5 text-tournesol" aria-hidden="true" /> {formatTimeRange(event.start, event.end)}</li>
            <li className="flex items-center gap-2"><Ticket className="size-5 text-tournesol" aria-hidden="true" /> {formatPrice(event, common)}</li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <CalendarButton event={card.cal} locale={locale} labels={common} variant="light" />
            <AddToFestival slug={SLUG} labels={common} className="border-paper text-paper hover:bg-paper hover:text-ink" />
          </div>
        </div>
      </header>

      <div className="relative aspect-[21/9] max-h-[70vh] w-full overflow-hidden border-y-2 border-ink">
        {event.photo ? (
          <Image src={event.photo} alt={opening.title} fill sizes="100vw" className="object-cover" />
        ) : (
          <Poster seed="opening-night-hero" color="#FFE552" ratio={21 / 9} ground="#3558A2" title={opening.title} />
        )}
      </div>

      {event.schedule?.length > 0 && (
        <Section id="soiree" title={opening.scheduleTitle}>
          <ol className="border-t-2 border-ink">
            {event.schedule.map((s, i) => (
              <AnimatedContent as="li" key={s.time} delay={i * 0.05} className="grid grid-cols-[6rem_1fr] items-baseline gap-6 border-b-2 border-ink py-6 md:grid-cols-[12rem_1fr]">
                <span className="display text-4xl text-blue md:text-6xl">{s.time}</span>
                <span className="text-xl font-black uppercase md:text-3xl">{tr(s.label, locale)}</span>
              </AnimatedContent>
            ))}
          </ol>
        </Section>
      )}


      {event.artists.length > 0 && (
        <Section id="artistes-soiree" title={opening.artistsTitle}>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {event.artists.map((a) => (
              <li key={a.slug}>
                <ArtistCard artist={toArtistCard(getArtist(a.slug), locale)} locale={locale} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="exposition" tone="mist" title={opening.exhibitionTitle}>
        <div className="max-w-xl">
          <EventCard card={toEventCard(exhibition, locale)} locale={locale} labels={common} />
        </div>
      </Section>

      <Section id="aussi" title={opening.alsoTitle} action={{ href: `/${locale}/luang-prabang`, label: common.seeProgramme }}>
        <ul className="grid gap-6 md:grid-cols-3">
          {others.map((e) => (
            <li key={e.slug}>
              <EventCard card={toEventCard(e, locale)} locale={locale} labels={common} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="partenaires" tone="mist" title={dict.home.partnersTitle}>
        <PartnersWall groups={partnerGroups} locale={locale} compact />
        <Link href={`/${locale}/partenaires`} className="btn-dark mt-10">
          {common.seeAll} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Section>
    </>
  )
}
