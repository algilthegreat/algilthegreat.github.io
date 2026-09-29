import PageHero from '@/components/PageHero'
import AgendaView from '@/components/AgendaView'
import { getDictionary } from '@/lib/i18n'
import { getEvents, toEventCard } from '@/lib/data'
import { buildMetadata } from '@/lib/seo'
import { crumbs } from '@/lib/page'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  // Page personnelle : pas d'intérêt à l'indexer
  return buildMetadata({ locale, path: '/agenda', title: dict.agenda.title, description: dict.meta.agenda, noindex: true })
}

export default async function AgendaPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const cards = getEvents().map((e) => toEventCard(e, locale))
  return (
    <>
      <PageHero kicker="♡" title={dict.agenda.title} intro={dict.agenda.intro} color="#FFB7AE" crumbs={crumbs(locale, dict, [dict.agenda.title, '/agenda'])} />
      <div className="container-site pb-24">
        <AgendaView cards={cards} locale={locale} labels={dict.agenda} common={dict.common} />
      </div>
    </>
  )
}
