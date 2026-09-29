import Link from 'next/link'
import { Play } from 'lucide-react'
import PageHero from '@/components/PageHero'
import GalleryGrid from '@/components/GalleryGrid'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { gallery, galleryFilters } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('gallery', '/galerie', (d) => d.gallery.title)

export default async function GalleryPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.gallery.title} intro={dict.gallery.intro} color="#FF9575" crumbs={crumbs(locale, dict, [dict.gallery.title, '/galerie'])}>
        <Link href={`/${locale}/videos`} className="btn-dark mt-8">
          <Play className="size-4" aria-hidden="true" /> {dict.nav.videos}
        </Link>
      </PageHero>
      <div className="container-site pb-24">
        <GalleryGrid
          items={gallery.map((g) => ({ ...g, caption: tr(g.caption, locale) }))}
          filters={galleryFilters.map((f) => ({ slug: f.slug, label: tr(f.label, locale) }))}
          labels={dict.gallery}
        />
      </div>
    </>
  )
}
