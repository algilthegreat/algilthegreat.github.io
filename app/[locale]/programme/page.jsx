import PageHero from '@/components/PageHero'
import ProgrammeExplorer from '@/components/ProgrammeExplorer'
import JsonLd from '@/components/JsonLd'
import { getDictionary } from '@/lib/i18n'
import { getEvents, toEventCard } from '@/lib/data'
import { explorerOptions } from '@/lib/explorer-props'
import { pageMetadata, crumbs } from '@/lib/page'
import { SITE_URL } from '@/lib/seo'

export const generateMetadata = pageMetadata('programme', '/programme')

export default async function ProgrammePage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const events = getEvents()
  const cards = events.map((e) => toEventCard(e, locale))

  return (
    <>
      <JsonLd
        data={{
          '@type': 'ItemList',
          name: dict.programme.title,
          itemListElement: events.map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/${locale}/evenements/${e.slug}` })),
        }}
      />
      <PageHero
        kicker="03.11 → 21.11.2026"
        title={dict.programme.title}
        intro={dict.programme.intro}
        crumbs={crumbs(locale, dict, [dict.programme.title, '/programme'])}
        color="#7AB1E8"
      />
      <div className="container-site pb-24">
        <ProgrammeExplorer cards={cards} locale={locale} labels={dict.programme} common={dict.common} {...explorerOptions(locale)} />
      </div>
    </>
  )
}
