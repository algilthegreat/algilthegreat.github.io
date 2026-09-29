'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search as SearchIcon } from 'lucide-react'
import { searchIndex } from './SearchDialog'

const GROUPS = ['event', 'artist', 'venue', 'article']

/** Page /recherche?q= : même moteur que la recherche du header, résultats complets. */
export default function SearchResults({ index, labels }) {
  const [q, setQ] = useState('')
  useEffect(() => setQ(new URLSearchParams(window.location.search).get('q') ?? ''), [])
  useEffect(() => {
    const url = q ? `?q=${encodeURIComponent(q)}` : window.location.pathname
    window.history.replaceState(null, '', url)
  }, [q])

  const results = searchIndex(index, q)

  return (
    <div>
      <label htmlFor="search-page" className="sr-only">{labels.title}</label>
      <div className="flex items-center gap-3 border-b-4 border-ink">
        <SearchIcon className="size-8 text-blue" aria-hidden="true" />
        <input
          id="search-page"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={labels.placeholder}
          className="min-h-20 flex-1 bg-transparent text-2xl font-bold outline-none md:text-4xl"
        />
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2" aria-live="polite">
        {q.trim().length < 2 && <p className="text-ink/60">{labels.hint}</p>}
        {q.trim().length >= 2 && results.length === 0 && <p className="text-xl font-bold">{labels.empty.replace('{q}', q)}</p>}
        {GROUPS.map((g) => {
          const items = results.filter((r) => r.kind === g)
          if (!items.length) return null
          return (
            <section key={g}>
              <h2 className="display mb-4 text-3xl uppercase">
                {labels.groups[g]} <span className="text-blue">— {items.length}</span>
              </h2>
              <ul className="border-t-2 border-ink">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="flex min-h-14 items-center gap-3 border-b-2 border-ink/10 py-3 hover:bg-mist">
                      <span className="size-3 shrink-0 rounded-full" style={{ background: item.color }} aria-hidden="true" />
                      <span>
                        <span className="block font-black uppercase">{item.title}</span>
                        <span className="block text-sm text-ink/60">{item.meta}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
