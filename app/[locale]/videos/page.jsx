import { Play, Clock } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Poster from '@/components/Poster'
import GlareHover from '@/components/reactbits/GlareHover'
import { getDictionary } from '@/lib/i18n'
import { tr } from '@/lib/i18n/config'
import { videos, videoCategories } from '@/lib/data'
import { pageMetadata, crumbs } from '@/lib/page'

export const generateMetadata = pageMetadata('videos', '/videos', (d) => d.videos.title)

export default async function VideosPage({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return (
    <>
      <PageHero title={dict.videos.title} intro={dict.videos.intro} tone="dark" color="#FF9575" crumbs={crumbs(locale, dict, [dict.videos.title, '/videos'])} />
      <div className="container-site py-16">
        {videoCategories.map((cat) => {
          const list = videos.filter((v) => v.category === cat.slug)
          if (!list.length) return null
          return (
            <section key={cat.slug} className="mb-16" aria-labelledby={`v-${cat.slug}`}>
              <h2 id={`v-${cat.slug}`} className="display mb-6 text-4xl uppercase">{tr(cat.label, locale)}</h2>
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {list.map((v) => (
                  <li key={v.slug}>
                    <GlareHover>
                      <figure className="border-2 border-ink">
                        <div className="relative aspect-video">
                          {v.youtubeId ? (
                            <iframe
                              className="absolute inset-0 h-full w-full"
                              src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                              title={tr(v.title, locale)}
                              loading="lazy"
                              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <>
                              <Poster seed={v.slug} color={v.color} ratio={16 / 9} ground="#000000" />
                              <span className="absolute inset-0 grid place-items-center">
                                <span className="grid size-16 place-items-center rounded-full bg-paper/90">
                                  <Play className="size-7" aria-hidden="true" />
                                </span>
                              </span>
                              <span className="absolute right-3 bottom-3 bg-tournesol px-2 py-1 text-xs font-bold uppercase">{dict.videos.soon}</span>
                            </>
                          )}
                        </div>
                        <figcaption className="flex items-center justify-between gap-4 p-4">
                          <span className="font-black uppercase">{tr(v.title, locale)}</span>
                          <span className="flex items-center gap-1 text-sm text-ink/60"><Clock className="size-4" aria-hidden="true" />{v.duration}</span>
                        </figcaption>
                      </figure>
                    </GlareHover>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </>
  )
}
