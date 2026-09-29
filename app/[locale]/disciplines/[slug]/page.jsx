import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import ThemePage from '@/components/ThemePage'
import { getDictionary } from '@/lib/i18n'
import { locales, tr } from '@/lib/i18n/config'
import { disciplines, getDiscipline, getEvents } from '@/lib/data'
import { buildMetadata } from '@/lib/seo'

export const dynamicParams = false
export const generateStaticParams = () => locales.flatMap((locale) => disciplines.map((d) => ({ locale, slug: d.slug })))

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const d = getDiscipline(slug)
  if (!d) return {}
  return buildMetadata({ locale, path: `/disciplines/${slug}`, title: tr(d.label, locale), description: tr(d.description, locale) })
}

export default async function DisciplinePage({ params }) {
  const { locale, slug } = await params
  const d = getDiscipline(slug)
  if (!d) notFound()
  const dict = getDictionary(locale)
  return (
    <ThemePage
      locale={locale}
      dict={dict}
      theme={{ title: tr(d.label, locale), intro: tr(d.description, locale) }}
      path={`/disciplines/${slug}`}
      events={getEvents({ discipline: slug })}
      color={d.color}
    >
      {d.page && (
        <div className="container-site pb-10">
          <Link href={`/${locale}${d.page}`} className="btn-outline">
            {tr(d.label, locale)} — {dict.common.seeAll} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </ThemePage>
  )
}
