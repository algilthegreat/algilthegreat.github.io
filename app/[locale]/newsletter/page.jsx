import PageHero from '@/components/PageHero'
import NewsletterForm from '@/components/NewsletterForm'
import { getDictionary } from '@/lib/i18n'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('newsletter', '/newsletter', (d) => d.newsletter.title)

export default async function NewsletterPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.newsletter.title} intro={dict.newsletter.intro} color="#FFE552" crumbs={crumbs(locale, dict, [dict.newsletter.title, '/newsletter'])} />
      <div className="container-site max-w-3xl pb-24">
        <div className="border-2 border-ink p-6 md:p-10">
          <NewsletterForm labels={dict.newsletter} locale={locale} full />
        </div>
      </div>
    </>
  )
}
