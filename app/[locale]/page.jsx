import Link from 'next/link'
import { ArrowRight, CalendarPlus } from 'lucide-react'
import SplitText from '@/components/reactbits/SplitText'
import DecryptedText from '@/components/reactbits/DecryptedText'
import Magnet from '@/components/reactbits/Magnet'
import StarBorder from '@/components/reactbits/StarBorder'
import ScrollVelocity from '@/components/reactbits/ScrollVelocity'
import ScrollReveal from '@/components/reactbits/ScrollReveal'
import RotatingText from '@/components/reactbits/RotatingText'
import CountUp from '@/components/reactbits/CountUp'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import GradientText from '@/components/reactbits/GradientText'
import HeroRectangles from '@/components/HeroRectangles'
import Countdown from '@/components/Countdown'
import Timeline from '@/components/Timeline'
import Section from '@/components/Section'
import EventCard from '@/components/EventCard'
import ArtistCard from '@/components/ArtistCard'
import CityCard from '@/components/CityCard'
import NewsCard from '@/components/NewsCard'
import DisciplineGrid from '@/components/DisciplineGrid'
import PartnersWall from '@/components/PartnersWall'
import NewsletterForm from '@/components/NewsletterForm'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { buildMetadata, festivalLd } from '@/lib/seo'
import {
  getUpcomingEvents, getArtists, getEvents, getNews, cities, disciplines, partnerGroups, palette, stats, toEventCard, toArtistCard,
} from '@/lib/data'

// « Prochains événements » : régénération horaire (ISR)
export const revalidate = 3600

export async function generateMetadata({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return buildMetadata({ locale, path: '', description: dict.meta.home })
}

const festivalCalendarUrl = (dict) => {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Festival France–Laos 2026',
    dates: '20261103/20261122',
    details: `${dict.home.heroCities} — ${dict.footer.tagline}`,
    location: 'Luang Prabang & Vientiane, Laos',
    ctz: 'Asia/Vientiane',
  })
  return `https://calendar.google.com/calendar/render?${p}`
}

export default async function HomePage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const { home, common } = dict
  const upcoming = getUpcomingEvents(6).map((e) => toEventCard(e, locale))
  const artists = getArtists().slice(0, 8).map((a) => toArtistCard(a, locale))
  const news = getNews().slice(0, 3)
  const colors = Object.values(palette)

  return (
    <>
      <JsonLd data={festivalLd(locale, dict.meta.home)} />

      {/* ================================ HERO ================================ */}
      <section className="on-dark relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-ink text-paper">
        {/* Rectangles aux couleurs secondaires, en arrière-plan à droite */}
        <div className="pointer-events-none absolute right-[3%] bottom-[8%] hidden w-[min(32vw,30rem)] lg:block">
          <HeroRectangles />
        </div>
        <div className="container-site relative py-16">
          <div>
            <p className="kicker mb-6 text-tournesol">{home.heroKicker}</p>
            <h1 className="display text-[clamp(2.25rem,11vw,10.5rem)] uppercase">
              {home.heroTitle.map((line, i) => (
                <SplitText key={line} text={line} className={`block ${i === 2 ? 'text-tournesol' : ''}`} delay={i * 0.25} />
              ))}
            </h1>
            <p className="display mt-8 text-[clamp(1.6rem,4vw,3.25rem)]">
              <DecryptedText text={home.heroDates} />
            </p>
            <p className="mt-2 text-lg font-bold tracking-[0.2em] md:text-xl">{home.heroCities}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnet>
                <StarBorder>
                  <Link href={`/${locale}/programme`} className="btn-light min-h-14 px-7 text-base">
                    {home.ctaProgramme} <ArrowRight className="size-5" aria-hidden="true" />
                  </Link>
                </StarBorder>
              </Magnet>
              <a href={festivalCalendarUrl(dict)} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-14 border-paper px-6 hover:bg-paper hover:text-ink">
                <CalendarPlus className="size-5" aria-hidden="true" /> {home.ctaCalendar}
              </a>
            </div>

            <div className="mt-12">
              <Countdown labels={home} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================== MARQUEE ============================== */}
      <div className="border-b-2 border-ink bg-tournesol py-4 text-ink">
        <ScrollVelocity rows={[home.marquee]} velocity={2.5} className="display text-4xl uppercase md:text-6xl" label={home.marquee.join(', ')} />
      </div>

      {/* ============================== OUVERTURE ============================= */}
      <section className="py-20 md:py-32" aria-labelledby="ouverture">
        <div className="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="kicker mb-6 text-blue">{home.openingKicker}</p>
            <h2 id="ouverture" className="sr-only">
              {home.openingTitle}
            </h2>
            <ScrollReveal text={home.openingTitle} className="display text-[clamp(2.5rem,7vw,6.5rem)] uppercase" as="p" />
          </div>
          <AnimatedContent>
            <p className="text-2xl leading-snug font-bold">
              {home.rotatingPrefix}{' '}
              <RotatingText words={home.rotating} colors={colors} className="text-ink" />
            </p>
            <p className="prose-site mt-6">{home.openingText}</p>
            <Link href={`/${locale}/festival`} className="btn-dark mt-8">
              {dict.nav.festival} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </AnimatedContent>
        </div>
      </section>

      {/* ============================== TIMELINE ============================== */}
      <Section id="timeline" tone="dark" kicker={dict.programme.byDay} title={home.timelineTitle} action={{ href: `/${locale}/programme`, label: common.seeProgramme }}>
        <p className="mb-10 max-w-2xl text-lg text-paper/80">{home.timelineText}</p>
        <Timeline locale={locale} dark />
      </Section>

      {/* ============================ PROCHAINS ÉVÉNEMENTS ============================ */}
      <Section id="prochains" title={home.upcomingTitle} action={{ href: `/${locale}/programme`, label: dict.nav.allProgramme }}>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {upcoming.map((card, i) => (
            <AnimatedContent as="li" key={card.slug} delay={(i % 3) * 0.08}>
              <EventCard card={card} locale={locale} labels={common} priority={i === 0} />
            </AnimatedContent>
          ))}
        </ul>
      </Section>

      {/* ============================== ARTISTES ============================== */}
      <Section id="artistes" tone="mist" title={home.artistsTitle} action={{ href: `/${locale}/artistes`, label: dict.nav.allArtists }}>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {artists.map((a, i) => (
            <AnimatedContent as="li" key={a.slug} delay={(i % 4) * 0.06}>
              <ArtistCard artist={a} locale={locale} />
            </AnimatedContent>
          ))}
        </ul>
      </Section>

      {/* =============================== VILLES =============================== */}
      <section aria-labelledby="villes-title" className="py-16 md:py-24">
        <div className="container-site">
          <h2 id="villes-title" className="display mb-10 text-[clamp(2.2rem,5.5vw,4.75rem)] uppercase">
            {home.citiesTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cities.map((c) => (
              <CityCard key={c.slug} city={c} locale={locale} dict={dict} count={getEvents({ city: c.slug }).length} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>

      {/* =============================== CHIFFRES =============================== */}
      <Section id="chiffres" tone="blue" title={home.statsTitle}>
        <dl className="grid grid-cols-2 gap-px bg-paper/25 md:grid-cols-5">
          {[
            ['days', stats.days],
            ['events', stats.events],
            ['artists', stats.artists],
            ['venues', stats.venues],
            ['free', stats.free],
          ].map(([key, value], i) => (
            <div key={key} className="flex flex-col-reverse bg-blue p-6">
              <dt className="mt-2 font-bold uppercase">{home.stats[key]}</dt>
              <dd className="display text-7xl md:text-8xl" style={{ color: colors[i] }}>
                <CountUp to={value} />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ============================= DISCIPLINES ============================= */}
      <Section id="disciplines" title={home.disciplinesTitle} action={{ href: `/${locale}/disciplines`, label: common.seeAll }}>
        <DisciplineGrid disciplines={disciplines} locale={locale} labels={common} />
      </Section>

      {/* ============================== ACTUALITÉS ============================== */}
      <Section id="actualites" tone="mist" title={home.newsTitle} action={{ href: `/${locale}/actualites`, label: common.seeAll }}>
        <ul className="grid gap-10 md:grid-cols-3">
          {news.map((n) => (
            <li key={n.slug}>
              <NewsCard article={n} locale={locale} />
            </li>
          ))}
        </ul>
      </Section>

      {/* ============================== PARTENAIRES ============================== */}
      <Section id="partenaires" title={home.partnersTitle} action={{ href: `/${locale}/partenaires`, label: common.seeAll }}>
        <PartnersWall groups={partnerGroups} locale={locale} compact />
      </Section>

      {/* ============================== NEWSLETTER ============================== */}
      <section className="border-t-2 border-ink bg-tournesol py-16 md:py-24" aria-labelledby="newsletter-title">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="newsletter-title" className="display text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
              <GradientText colors={['#000', '#3558A2', '#000']}>{dict.newsletter.title}</GradientText>
            </h2>
            <p className="mt-4 max-w-lg text-lg">{dict.newsletter.intro}</p>
          </div>
          <NewsletterForm labels={dict.newsletter} locale={locale} full />
        </div>
      </section>
    </>
  )
}
