import PageHero from '@/components/PageHero'
import DisciplineGrid from '@/components/DisciplineGrid'
import ScrollVelocity from '@/components/reactbits/ScrollVelocity'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { disciplines } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('disciplines', '/disciplines', (d) => d.disciplines.title)

export default async function DisciplinesPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const labels = disciplines.map((d) => tr(d.label, locale))
  return (
    <>
      <PageHero kicker="12" title={dict.disciplines.title} intro={dict.disciplines.intro} color="#FFB7AE" crumbs={crumbs(locale, dict, [dict.disciplines.title, '/disciplines'])} />
      <div className="border-y-2 border-ink bg-ink py-4 text-paper">
        <ScrollVelocity rows={[labels.slice(0, 6), labels.slice(6)]} velocity={2} className="display text-5xl uppercase md:text-7xl" label={labels.join(', ')} />
      </div>
      <div className="container-site py-16">
        <DisciplineGrid disciplines={disciplines} locale={locale} labels={dict.common} headingLevel={2} />
      </div>
    </>
  )
}
