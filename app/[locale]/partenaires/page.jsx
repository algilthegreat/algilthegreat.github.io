import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/PageHero'
import PartnersWall from '@/components/PartnersWall'
import { getDictionary } from '@/lib/i18n'
import { partnerGroups } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('partners', '/partenaires', (d) => d.partners.title)

export default async function PartnersPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.partners.title} intro={dict.partners.intro} color="#21AB88" crumbs={crumbs(locale, dict, [dict.partners.title, '/partenaires'])} />
      <div className="container-site pb-20">
        <PartnersWall groups={partnerGroups} locale={locale} />
      </div>
      <section className="on-dark bg-blue py-16 text-paper">
        <div className="container-site flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="display text-5xl uppercase">{dict.partners.become}</h2>
            <p className="mt-2 text-lg">{dict.partners.becomeText}</p>
          </div>
          <Link href={`/${locale}/contact`} className="btn-light">
            {dict.nav.contact} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
