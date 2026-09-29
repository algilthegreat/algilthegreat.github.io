import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import JsonLd from './JsonLd'
import { breadcrumbLd } from '@/lib/seo'

/** Fil d'Ariane + données structurées BreadcrumbList. items = [{ name, href }] */
export default function Breadcrumbs({ items, dark = false }) {
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbLd(items)} />
      <ol className={`flex flex-wrap items-center gap-1 text-xs font-semibold tracking-wide uppercase ${dark ? 'text-paper/70' : 'text-ink/60'}`}>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
            {i === items.length - 1 ? (
              <span aria-current="page" className={dark ? 'text-paper' : 'text-ink'}>
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="link-underline hover:text-current">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
