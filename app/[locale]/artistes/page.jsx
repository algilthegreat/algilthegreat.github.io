import PageHero from '@/components/PageHero'
import ArtistExplorer from '@/components/ArtistExplorer'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { getArtists, roles, disciplines, toArtistCard } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('artists', '/artistes', (d) => d.artists.title)

export default async function ArtistsPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const artists = getArtists().map((a) => toArtistCard(a, locale))
  return (
    <>
      <PageHero
        kicker={`${artists.length} ${dict.common.artists} · France × Laos`}
        title={dict.artists.title}
        intro={dict.artists.intro}
        color="#FF9575"
        crumbs={crumbs(locale, dict, [dict.artists.title, '/artistes'])}
      />
      <div className="container-site pb-24">
        <ArtistExplorer
          artists={artists}
          locale={locale}
          labels={{ ...dict.artists, disciplineLegend: dict.nav.disciplines }}
          common={dict.common}
          roles={roles.map((r) => ({ slug: r.slug, label: tr(r.label, locale) }))}
          disciplines={disciplines.map((d) => ({ slug: d.slug, label: tr(d.label, locale), color: d.color }))}
        />
      </div>
    </>
  )
}
