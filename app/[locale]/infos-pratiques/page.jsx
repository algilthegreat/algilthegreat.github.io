import Link from 'next/link'
import { CalendarDays, MapPin, Clock, Ticket, Accessibility, TrainFront, Mail, ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import Faq from '@/components/Faq'
import SocialIcons from '@/components/SocialIcons'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { getDictionary } from '@/lib/i18n'
import { faq } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('practical', '/infos-pratiques', (d) => d.practical.title)

export default async function PracticalPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const p = dict.practical
  const L = (x) => `/${locale}${x}`
  const blocks = [
    [CalendarDays, p.calendarTitle, p.calendarText, L('/programme'), '#FFE552'],
    [MapPin, dict.nav.venues, dict.venues.intro, L('/lieux'), '#21AB88'],
    [Clock, p.hoursTitle, p.hoursText, null, '#869ECE'],
    [Ticket, p.pricesTitle, p.pricesText, null, '#FF9575'],
    [Accessibility, p.accessibilityTitle, p.accessibilityText, L('/contact'), '#7AB1E8'],
    [TrainFront, p.transportTitle, p.transportText, L('/carte'), '#99C221'],
  ]
  return (
    <>
      <PageHero title={p.title} intro={p.intro} color="#99C221" crumbs={crumbs(locale, dict, [p.title, '/infos-pratiques'])} />
      <div className="container-site pb-16">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map(([Icon, title, text, href, color]) => (
            <li key={title}>
              <SpotlightCard color={`${color}88`} className="flex h-full flex-col border-2 border-ink p-6">
                <Icon className="size-9" style={{ color: 'var(--color-blue)' }} aria-hidden="true" />
                <h2 className="display mt-6 text-3xl uppercase">{title}</h2>
                <p className="mt-3 text-lg text-ink/80">{text}</p>
                {href && (
                  <Link href={href} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 font-bold uppercase underline underline-offset-4">
                    {dict.common.readMore} <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                )}
              </SpotlightCard>
            </li>
          ))}
        </ul>
      </div>
      <Section id="contact-infos" tone="blue" title={p.contactTitle}>
        <div className="flex flex-wrap items-center gap-8">
          <Link href={L('/contact')} className="btn-light"><Mail className="size-4" aria-hidden="true" /> {dict.nav.contact}</Link>
          <div className="flex items-center gap-4">
            <span className="kicker">{p.socialTitle}</span>
            <SocialIcons />
          </div>
        </div>
      </Section>
      <Section id="faq" title={p.faqTitle} action={{ href: L('/faq'), label: dict.common.seeAll }}>
        <Faq items={faq.slice(0, 4)} locale={locale} withSchema={false} />
      </Section>
    </>
  )
}
