import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import SplitText from '@/components/reactbits/SplitText'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import TiltedCard from '@/components/reactbits/TiltedCard'
import Poster, { initials } from '@/components/Poster'
import EventRow from '@/components/EventRow'
import ArtistCard from '@/components/ArtistCard'
import Section from '@/components/Section'
import JsonLd from '@/components/JsonLd'
import { getDictionary, fill } from '@/lib/i18n'
import { locales, tr } from '@/lib/i18n/config'
import { getArtist, getArtists, getArtistEvents, countries, roles, toArtistCard, toEventCard } from '@/lib/data'
import { buildMetadata, SITE_URL } from '@/lib/seo'
import { crumbs } from '@/lib/page'

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((locale) => getArtists().map((a) => ({ locale, slug: a.slug })))

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const a = getArtist(slug)
  if (!a) return {}
  return buildMetadata({
    locale,
    path: `/artistes/${slug}`,
    title: `${a.name} — ${tr(a.tagline, locale)}`,
    description: tr(a.bio, locale).slice(0, 160),
    type: 'profile',
  })
}

export default async function ArtistPage({ params }) {
  const { locale, slug } = await params
  const artist = getArtist(slug)
  if (!artist) notFound()
  const dict = getDictionary(locale)
  const { artist: t, common } = dict
  const events = getArtistEvents(slug)
  const country = tr(countries[artist.country].label, locale)
  const roleLabel = artist.roles.map((r) => tr(roles.find((x) => x.slug === r)?.label, locale)).join(' · ')
  const others = getArtists({ discipline: artist.disciplines[0] }).filter((a) => a.slug !== slug).slice(0, 4)

  return (
    <>
      <JsonLd
        data={{
          '@type': artist.kind === 'collective' ? 'PerformingGroup' : 'Person',
          name: artist.name,
          description: tr(artist.bio, locale),
          url: `${SITE_URL}/${locale}/artistes/${slug}`,
          ...(artist.kind === 'collective' ? {} : { jobTitle: roleLabel, nationality: country }),
          performerIn: events.map((e) => ({ '@id': `${SITE_URL}/${locale}/evenements/${e.slug}#event` })),
        }}
      />
      <header className="relative overflow-hidden">
        <div className="container-site pt-8">
          <Breadcrumbs items={crumbs(locale, dict, [dict.artists.title, '/artistes'], [artist.name, `/artistes/${slug}`])} />
          <p className="kicker mt-12 text-blue">{artist.kind === 'collective' ? t.collective : roleLabel} · {country}</p>
          <SplitText as="h1" text={artist.name} className="display mt-4 block text-[clamp(3rem,11vw,10rem)] uppercase" />
          <p className="mt-4 text-2xl font-bold">{tr(artist.tagline, locale)}</p>
        </div>
        <div className="mt-12 aspect-[21/9] max-h-[70vh] w-full overflow-hidden border-y-2 border-ink">
          {artist.photo ? (
            <Image src={artist.photo} alt={artist.name} width={2100} height={900} priority sizes="100vw" className="h-full w-full object-cover object-[center_30%]" />
          ) : (
            <Poster seed={`${slug}-hero`} color={artist.color} ratio={21 / 9} label={initials(artist.name)} title={artist.name} />
          )}
        </div>
      </header>

      <div className="container-site grid gap-16 py-16 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-16">
          <section aria-labelledby="bio">
            <h2 id="bio" className="display text-5xl uppercase">{t.bio}</h2>
            <p className="prose-site mt-6 text-xl">{tr(artist.bio, locale)}</p>
          </section>

          <section aria-labelledby="parcours">
            <h2 id="parcours" className="display text-5xl uppercase">{t.career}</h2>
            <ol className="mt-6 border-l-4 border-ink pl-6">
              {artist.timeline.map((item) => (
                <AnimatedContent as="li" key={item.year + tr(item.text, locale)} direction="left" className="relative pb-6 last:pb-0">
                  <span aria-hidden="true" className="absolute top-2 -left-[2.1rem] size-4 rounded-full border-4 border-ink" style={{ background: artist.color }} />
                  <span className="display text-3xl text-blue">{item.year}</span>
                  <p className="text-lg font-semibold">{tr(item.text, locale)}</p>
                </AnimatedContent>
              ))}
            </ol>
          </section>

          <section aria-labelledby="pratique">
            <h2 id="pratique" className="display text-5xl uppercase">{t.practice}</h2>
            <blockquote className="display mt-6 border-l-8 pl-6 text-3xl leading-tight normal-case" style={{ borderColor: artist.color }}>
              {tr(artist.practice, locale)}
            </blockquote>
          </section>

          <section aria-labelledby="oeuvres">
            <h2 id="oeuvres" className="display text-5xl uppercase">{t.works}</h2>
            <ul className="mt-6 grid grid-cols-2 gap-4">
              {artist.works.map((w) => (
                <li key={tr(w.title, locale)}>
                  <TiltedCard amplitude={6}>
                    <figure className="border-2 border-ink">
                      <div className="aspect-square overflow-hidden">
                        <Poster seed={`${slug}-${w.year}-${w.title.fr}`} color={artist.color} ratio={1} />
                      </div>
                      <figcaption className="p-3">
                        <span className="block font-black uppercase">{tr(w.title, locale)}</span>
                        <span className="text-sm text-ink/60">{w.year}</span>
                      </figcaption>
                    </figure>
                  </TiltedCard>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="fr-la" className="grid gap-6 md:grid-cols-2">
            <h2 id="fr-la" className="sr-only">France × Laos</h2>
            <div className="bg-blue p-6 text-paper">
              <h3 className="display text-3xl uppercase">{t.inFrance}</h3>
              <p className="mt-3 text-lg">{tr(artist.inFrance, locale)}</p>
            </div>
            <div className="bg-tournesol p-6">
              <h3 className="display text-3xl uppercase">{t.inLaos}</h3>
              <p className="mt-3 text-lg">{tr(artist.inLaos, locale)}</p>
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <dl className="border-2 border-ink p-6">
            <dt className="kicker text-ink/60">{common.country}</dt>
            <dd className="mb-4 text-lg font-bold">{country}</dd>
            <dt className="kicker text-ink/60">{dict.nav.disciplines}</dt>
            <dd className="mb-4 text-lg font-bold">{roleLabel}</dd>
            <dt className="kicker text-ink/60">{t.atFestival}</dt>
            <dd className="text-lg font-bold">{events.length} {events.length > 1 ? common.events : common.event}</dd>
          </dl>
        </aside>
      </div>

      <Section id="au-festival" tone="mist" kicker={t.atFestival} title={fill(t.participates, { name: artist.name })} action={{ href: `/${locale}/artistes/${slug}/agenda`, label: t.seeAgenda }}>
        <ul className="border-t-2 border-ink">
          {events.map((e) => (
            <EventRow key={e.slug} card={toEventCard(e, locale)} locale={locale} labels={common} />
          ))}
        </ul>
      </Section>

      {others.length > 0 && (
        <Section id="autres" title={dict.artists.title} action={{ href: `/${locale}/artistes`, label: dict.nav.allArtists }}>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {others.map((a) => (
              <li key={a.slug}><ArtistCard artist={toArtistCard(a, locale)} locale={locale} /></li>
            ))}
          </ul>
        </Section>
      )}

      <div className="container-site pb-16">
        <Link href={`/${locale}/artistes`} className="btn-dark">
          {dict.nav.allArtists} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </>
  )
}
