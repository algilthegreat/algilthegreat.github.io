'use client'
/**
 * « Mon festival » : sélection d'événements stockée dans le navigateur (localStorage),
 * synchronisée entre composants et entre onglets.
 */
import { useCallback, useSyncExternalStore } from 'react'

const KEY = 'ffl26:mon-festival'
const EMPTY = []
const listeners = new Set()
let cache = null

function read() {
  if (cache) return cache
  try {
    const raw = JSON.parse(window.localStorage.getItem(KEY) ?? '[]')
    cache = Array.isArray(raw) ? raw.filter((s) => typeof s === 'string') : EMPTY
  } catch {
    cache = EMPTY
  }
  return cache
}

function write(next) {
  cache = next
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* stockage indisponible (navigation privée…) : la sélection reste en mémoire */
  }
  listeners.forEach((l) => l())
}

function subscribe(listener) {
  listeners.add(listener)
  const onStorage = (e) => {
    if (e.key === KEY) {
      cache = null
      listener()
    }
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function useFestival() {
  const slugs = useSyncExternalStore(subscribe, read, () => EMPTY)
  const toggle = useCallback((slug) => {
    const current = read()
    write(current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug])
  }, [])
  const remove = useCallback((slug) => write(read().filter((s) => s !== slug)), [])
  const clear = useCallback(() => write([]), [])
  return { slugs, has: (slug) => slugs.includes(slug), toggle, remove, clear }
}
