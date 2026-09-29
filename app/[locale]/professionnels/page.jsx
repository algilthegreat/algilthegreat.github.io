import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import EventRow from '@/components/EventRow'
import ContactForm from '@/components/ContactForm'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { getDictionary } from '@/lib/i18n'
import { getEvents, toEventCard } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('pros', '/professionnels', (d) => d.pros.title)

export default async function ProsPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const p = dict.pros
  const events = getEvents({ audience: 'professionnels' })
  return (
    <>
      <PageHero kicker="B2B · Networking" title={p.title} intro={p.intro} tone="dark" color="#3558A2" crumbs={crumbs(locale, dict, [p.title, '/professionnels'])} />

      <Section id="pour-qui" title={p.audiencesTitle}>
        <ul className="flex flex-wrap gap-3">
          {p.audiences.map((a) => (
            <li key={a} className="border-2 border-ink px-5 py-3 text-lg font-bold uppercase">{a}</li>
          ))}
        </ul>
      </Section>

      <Section id="contenu-pro" tone="mist" title={p.contentTitle}>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {p.content.map((c) => (
            <li key={c.title}>
              <SpotlightCard className="h-full border-2 border-ink bg-paper p-6">
                <h3 className="display text-3xl uppercase">{c.title}</h3>
                <p className="mt-3 text-lg">{c.text}</p>
              </SpotlightCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="programme-pro" title={p.programmeTitle}>
        <ul className="border-t-2 border-ink">
          {events.map((e) => (
            <EventRow key={e.slug} card={toEventCard(e, locale)} locale={locale} labels={dict.common} />
          ))}
        </ul>
      </Section>

      <Section id="contact-pro" tone="mist" title={p.contactTitle}>
        <p className="mb-8 max-w-2xl text-lg">{p.contactText}</p>
        <div className="max-w-3xl">
          <ContactForm labels={dict.contact} defaultSubject={dict.contact.subjects[2]} />
        </div>
      </Section>
    </>
  )
}
