import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import Timeline from '@/components/Timeline'
import DisciplineGrid from '@/components/DisciplineGrid'
import VenueCard from '@/components/VenueCard'
import PartnersWall from '@/components/PartnersWall'
import ScrollReveal from '@/components/reactbits/ScrollReveal'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { cities, disciplines, getEvents, getVenues, partnerGroups } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('festival', '/festival', (d) => d.festival.title)

export default async function FestivalPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const f = dict.festival

  return (
    <>
      <PageHero kicker="2026" title={f.title} intro={f.intro} color="#3558A2" crumbs={crumbs(locale, dict, [f.title, '/festival'])} />

      <section className="bg-ink py-16 text-paper md:py-24" aria-labelledby="frise">
        <div className="container-site">
          <h2 id="frise" className="display text-[clamp(4rem,16vw,15rem)] leading-none">
            03.11 <span className="text-tournesol">—</span> 21.11
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {cities.map((c) => (
              <Link key={c.slug} href={`/${locale}/${c.slug}`} className="group flex items-center justify-between border-2 border-paper p-6 hover:bg-paper hover:text-ink">
                <span>
                  <span className="kicker" style={{ color: c.color }}>{Number(c.from.slice(8))} → {Number(c.to.slice(8))}.11</span>
                  <span className="display block text-5xl uppercase">{tr(c.name, locale)}</span>
                </span>
                <ArrowRight className="size-10 transition-transform group-hover:translate-x-2" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site grid gap-16 py-20 lg:grid-cols-2" aria-label={f.conceptTitle}>
        <div>
          <h2 className="display text-5xl uppercase">{f.conceptTitle}</h2>
          <ScrollReveal text={f.conceptText} className="mt-6 text-2xl leading-snug font-semibold" />
        </div>
        <div>
          <h2 className="display text-5xl uppercase">{f.historyTitle}</h2>
          <p className="prose-site mt-6">{f.historyText}</p>
        </div>
      </section>

      <Section id="objectifs" tone="blue" title={f.objectivesTitle}>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {f.objectives.map((o, i) => (
            <AnimatedContent as="li" key={o} delay={i * 0.06} className="flex gap-4 border-2 border-paper/40 p-6">
              <Check className="size-7 shrink-0 text-tournesol" aria-hidden="true" />
              <span className="text-xl font-bold">{o}</span>
            </AnimatedContent>
          ))}
        </ul>
      </Section>

      <Section id="dates" title={f.datesTitle}>
        <Timeline locale={locale} />
      </Section>

      <Section id="disciplines" tone="mist" title={f.disciplinesTitle}>
        <DisciplineGrid disciplines={disciplines} locale={locale} labels={dict.common} />
      </Section>

      <Section id="lieux" title={f.venuesTitle} action={{ href: `/${locale}/lieux`, label: dict.common.seeAll }}>
        <ul className="grid gap-6 md:grid-cols-3">
          {getVenues().filter((v) => v.featured || v.kind === 'espace-public').slice(0, 3).map((v) => (
            <li key={v.slug}><VenueCard venue={v} locale={locale} labels={dict.common} eventCount={getEvents({ venue: v.slug }).length} /></li>
          ))}
        </ul>
      </Section>

      <Section id="partenaires" tone="mist" title={f.partnersTitle} action={{ href: `/${locale}/partenaires`, label: dict.common.seeAll }}>
        <PartnersWall groups={partnerGroups} locale={locale} compact />
      </Section>
    </>
  )
}
