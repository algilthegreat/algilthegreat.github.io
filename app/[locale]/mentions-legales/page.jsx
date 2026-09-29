import PageHero from '@/components/PageHero'
import { getDictionary } from '@/lib/i18n'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('legal', '/mentions-legales', (d) => d.legal.title)

export default async function LegalPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.legal.title} color="#869ECE" crumbs={crumbs(locale, dict, [dict.legal.title, '/mentions-legales'])} />
      <div className="container-site pb-24">
        <p className="prose-site">{dict.legal.text}</p>
      </div>
    </>
  )
}
