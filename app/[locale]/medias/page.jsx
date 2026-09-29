import PageHero from '@/components/PageHero'
import DownloadList from '@/components/DownloadList'
import Logo from '@/components/Logo'
import { getDictionary } from '@/lib/i18n'
import { pressKit } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('media', '/medias', (d) => d.media.title)

const order = ['logos', 'affiches', 'photos', 'videos', 'dossier', 'programme']
const swatches = [
  ['Noir', '#000000'], ['Blanc', '#FFFFFF'], ['Bleu', '#3558A2'],
  ['Tournesol', '#FFE552'], ['Menthe', '#21AB88'], ['Écume', '#869ECE'], ['Tuile', '#FF9575'],
  ['Cumulus', '#7AB1E8'], ['Bourgeon', '#99C221'], ['Macaron', '#FFB7AE'],
]

export default async function MediaPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.media.title} intro={dict.media.intro} color="#869ECE" crumbs={crumbs(locale, dict, [dict.press.title, '/presse'], [dict.media.title, '/medias'])} />
      <div className="container-site pb-24">
        <section className="mb-16 grid gap-4 md:grid-cols-2" aria-label="Logos">
          <div className="grid aspect-[2/1] place-items-center border-2 border-ink"><Logo className="scale-[2]" /></div>
          <div className="grid aspect-[2/1] place-items-center bg-blue"><Logo inverted className="scale-[2]" /></div>
        </section>
        <section className="mb-16" aria-label="Couleurs">
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {swatches.map(([name, hex]) => (
              <li key={hex} className="border-2 border-ink">
                <span className="block aspect-[3/2]" style={{ background: hex }} />
                <span className="block p-2 text-sm font-bold">{name} <span className="font-normal text-ink/60">{hex}</span></span>
              </li>
            ))}
          </ul>
        </section>
        {order.map((kind) => {
          const items = pressKit.filter((i) => i.kind === kind)
          if (!items.length) return null
          return (
            <section key={kind} className="mb-12" aria-labelledby={`k-${kind}`}>
              <h2 id={`k-${kind}`} className="display mb-4 text-4xl uppercase">{dict.media.kinds[kind]}</h2>
              <DownloadList items={items} locale={locale} labels={dict.common} />
            </section>
          )
        })}
      </div>
    </>
  )
}
