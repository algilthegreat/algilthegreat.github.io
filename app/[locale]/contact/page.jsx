import { MapPin, Mail, Phone } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import SocialIcons from '@/components/SocialIcons'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { getVenue } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'
import { SITE_URL } from '@/lib/seo'

export const generateMetadata = pageMetadata('contact', '/contact', (d) => d.contact.title)

// ⚠️ Coordonnées à confirmer par l'Institut français du Laos avant publication.
const contacts = {
  vientiane: { venue: 'institut-francais-vientiane', email: 'contact@festival-france-laos.org', phone: '+856 21 000 000' },
  lpb: { venue: 'institut-francais-luang-prabang', email: 'luangprabang@festival-france-laos.org', phone: '+856 71 000 000' },
}

export default async function ContactPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const c = dict.contact
  const columns = [
    [c.vientiane, c.vientianeName, contacts.vientiane, '#7AB1E8'],
    [c.lpb, c.lpbName, contacts.lpb, '#FFE552'],
  ]
  return (
    <>
      <JsonLd
        data={{
          '@type': 'ContactPage',
          name: c.title,
          about: { '@id': `${SITE_URL}/#organization` },
        }}
      />
      <PageHero title={c.title} intro={c.intro} color="#FFB7AE" crumbs={crumbs(locale, dict, [c.title, '/contact'])} />
      <div className="container-site grid gap-4 md:grid-cols-2">
        {columns.map(([city, name, info, color]) => {
          const venue = getVenue(info.venue)
          return (
            <section key={city} className="relative overflow-hidden border-2 border-ink p-8" aria-labelledby={`c-${info.venue}`}>
              <span aria-hidden="true" className="absolute -top-16 -right-16 size-48 rounded-full" style={{ background: color }} />
              <p className="kicker relative text-blue">{city}</p>
              <h2 id={`c-${info.venue}`} className="display relative mt-2 text-4xl uppercase">{name}</h2>
              <ul className="relative mt-6 space-y-3 text-lg">
                <li className="flex gap-3"><MapPin className="mt-1 size-5 shrink-0 text-blue" aria-hidden="true" />{venue.address}</li>
                <li className="flex gap-3"><Mail className="mt-1 size-5 shrink-0 text-blue" aria-hidden="true" /><a href={`mailto:${info.email}`} className="underline underline-offset-4">{info.email}</a></li>
                <li className="flex gap-3"><Phone className="mt-1 size-5 shrink-0 text-blue" aria-hidden="true" />{info.phone}</li>
                <li className="text-sm text-ink/60">{tr(venue.hours, locale)} · {c.verify}</li>
              </ul>
            </section>
          )
        })}
      </div>
      <section className="container-site grid gap-12 py-20 lg:grid-cols-[1fr_2fr]" aria-labelledby="form-title">
        <div>
          <h2 id="form-title" className="display text-5xl uppercase">{c.formTitle}</h2>
          <div className="mt-8"><SocialIcons /></div>
        </div>
        <ContactForm labels={c} />
      </section>
    </>
  )
}
