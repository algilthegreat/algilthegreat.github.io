import PageHero from '@/components/PageHero'
import Faq from '@/components/Faq'
import { getDictionary } from '@/lib/i18n'
import { faq } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('faq', '/faq', (d) => d.faq.title)

export default async function FaqPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero kicker="FAQ" title={dict.faq.title} intro={dict.faq.intro} color="#869ECE" crumbs={crumbs(locale, dict, [dict.faq.title, '/faq'])} />
      <div className="container-site pb-24">
        <Faq items={faq} locale={locale} />
      </div>
    </>
  )
}
