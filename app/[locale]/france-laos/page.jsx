import PageHero from '@/components/PageHero'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { getDictionary } from '@/lib/i18n'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('franceLaos', '/france-laos', (d) => d.franceLaos.title)

const colors = ['#FFE552', '#21AB88', '#869ECE', '#FF9575', '#7AB1E8', '#99C221', '#FFB7AE']

export default async function FranceLaosPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const t = dict.franceLaos
  return (
    <>
      <PageHero kicker="FR × LA" title={t.title} intro={t.intro} tone="blue" color="#FFE552" crumbs={crumbs(locale, dict, [t.title, '/france-laos'])} />
      <div className="container-site py-20">
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.sections.map((s, i) => (
            <AnimatedContent as="li" key={s.title} delay={(i % 3) * 0.08} className={i === 0 ? 'lg:col-span-2' : ''}>
              <SpotlightCard as="section" color={`${colors[i]}88`} className="flex h-full min-h-72 flex-col border-2 border-ink p-8">
                <span className="display text-7xl" style={{ color: colors[i] }} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="display mt-auto pt-8 text-4xl uppercase">{s.title}</h2>
                <p className="mt-3 max-w-xl text-lg text-ink/80">{s.text}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </ol>
      </div>
    </>
  )
}
