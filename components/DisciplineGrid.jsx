import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import DisciplineIcon from './DisciplineIcon'
import { tr } from '@/lib/i18n/config'
import { getEvents } from '@/lib/data'

/** Grille très visuelle des 12 disciplines, chaque tuile est cliquable. */
export default function DisciplineGrid({ disciplines, locale, labels, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <ul className="grid grid-cols-2 border-t-2 border-l-2 border-ink md:grid-cols-3 lg:grid-cols-4">
      {disciplines.map((d) => {
        const count = getEvents({ discipline: d.slug }).length
        return (
          <li key={d.slug} className="border-r-2 border-b-2 border-ink">
            <Link
              href={`/${locale}/disciplines/${d.slug}`}
              className="group relative flex aspect-square flex-col justify-between overflow-hidden p-4 md:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute -right-1/4 -bottom-1/4 size-3/4 rounded-full transition-transform duration-500 ease-out group-hover:scale-[2.2]"
                style={{ background: d.color }}
              />
              <span className="relative flex items-start justify-between">
                <DisciplineIcon name={d.icon} className="size-7 md:size-8" />
                <ArrowUpRight className="size-6 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </span>
              <span className="relative">
                <H className="display text-2xl uppercase md:text-4xl">{tr(d.label, locale)}</H>
                <span className="mt-1 block text-sm font-bold">
                  {count} {count > 1 ? labels.events : labels.event}
                </span>
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
