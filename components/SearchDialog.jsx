'use client'
/**
 * Recherche globale (⌘K) : événements, artistes, lieux, articles.
 * L'index est chargé à la première ouverture depuis /api/search/[locale] (statique).
 */
import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react'

export const normalize = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export function searchIndex(index, query) {
  const q = normalize(query.trim())
  if (q.length < 2) return []
  const terms = q.split(/\s+/)
  return index
    .map((item) => {
      const title = normalize(item.title)
      const hay = `${title} ${normalize(item.meta ?? '')} ${normalize(item.text ?? '')}`
      if (!terms.every((t) => hay.includes(t))) return null
      const score = terms.reduce((s, t) => s + (title.includes(t) ? 3 : 1), 0) + (title.startsWith(terms[0]) ? 2 : 0)
      return { ...item, score }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
}

const GROUPS = ['event', 'artist', 'venue', 'article']

export default function SearchDialog({ open, onClose, locale, labels }) {
  const dialogRef = useRef(null)
  const inputRef = useRef(null)
  const router = useRouter()
  const [index, setIndex] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open && !d.open) {
      d.showModal()
      setTimeout(() => inputRef.current?.focus(), 10)
      if (!index) {
        fetch(`/api/search/${locale}`)
          .then((r) => r.json())
          .then(setIndex)
          .catch(() => setIndex([]))
      }
    } else if (!open && d.open) d.close()
  }, [open, index, locale])

  const results = useMemo(() => (index ? searchIndex(index, query) : []), [index, query])
  const grouped = GROUPS.map((g) => ({ kind: g, items: results.filter((r) => r.kind === g) })).filter((g) => g.items.length)

  const submit = (e) => {
    e.preventDefault()
    if (query.trim().length >= 2) {
      onClose()
      router.push(`/${locale}/recherche?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-label={labels.title}
      className="m-0 h-dvh max-h-none w-full max-w-none bg-ink/60 p-0 backdrop:bg-transparent open:flex open:items-start open:justify-center"
    >
      <div className="mt-0 w-full max-w-3xl border-2 border-ink bg-paper md:mt-[8vh]">
        <form onSubmit={submit} className="flex items-center gap-3 border-b-2 border-ink px-5">
          <SearchIcon className="size-6 shrink-0 text-blue" aria-hidden="true" />
          <label htmlFor="global-search" className="sr-only">
            {labels.title}
          </label>
          <input
            id="global-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={labels.placeholder}
            autoComplete="off"
            className="min-h-16 flex-1 bg-transparent text-xl font-semibold outline-none placeholder:text-ink/40"
          />
          <button type="button" onClick={onClose} className="flex min-h-11 min-w-11 items-center justify-center" aria-label={labels.close}>
            <X className="size-6" aria-hidden="true" />
          </button>
        </form>

        <div className="max-h-[65vh] overflow-y-auto p-5" aria-live="polite">
          {query.trim().length < 2 ? (
            <p className="text-ink/60">{labels.hint}</p>
          ) : !index ? (
            <p className="text-ink/60">…</p>
          ) : grouped.length === 0 ? (
            <p className="font-semibold">{labels.empty.replace('{q}', query)}</p>
          ) : (
            grouped.map((g) => (
              <section key={g.kind} className="mb-6 last:mb-0">
                <h2 className="kicker mb-2 flex items-center gap-2 text-blue">
                  {labels.groups[g.kind]} <span className="text-ink/40">— {g.items.length}</span>
                </h2>
                <ul>
                  {g.items.slice(0, 6).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex min-h-12 items-center gap-3 border-b border-ink/10 py-2 hover:bg-mist focus-visible:bg-mist"
                      >
                        <span className="size-3 shrink-0 rounded-full" style={{ background: item.color }} aria-hidden="true" />
                        <span className="flex-1">
                          <span className="block font-bold">{item.title}</span>
                          <span className="block text-sm text-ink/60">{item.meta}</span>
                        </span>
                        <ArrowRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))
          )}
        </div>
      </div>
    </dialog>
  )
}
