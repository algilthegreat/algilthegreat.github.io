import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import DownloadList from '@/components/DownloadList'
import { getDictionary } from '@/lib/i18n'
import { pressKit } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('press', '/presse', (d) => d.press.title)

export default async function PressPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero kicker="Press" title={dict.press.title} intro={dict.press.intro} tone="dark" color="#FFE552" crumbs={crumbs(locale, dict, [dict.press.title, '/presse'])}>
        <Link href={`/${locale}/medias`} className="btn-light mt-8">
          {dict.press.mediaKit} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </PageHero>
      <Section id="telechargements" title={dict.press.downloads}>
        <DownloadList items={pressKit} locale={locale} labels={dict.common} kindLabels={dict.media.kinds} />
      </Section>
      <Section id="contacts-presse" tone="blue" title={dict.press.contactTitle}>
        <p className="max-w-2xl text-lg">{dict.press.contactText}</p>
        {/* ⚠️ Adresse à confirmer */}
        <a href="mailto:presse@festival-france-laos.org" className="btn-light mt-8">
          <Mail className="size-4" aria-hidden="true" /> presse@festival-france-laos.org
        </a>
      </Section>
    </>
  )
}
