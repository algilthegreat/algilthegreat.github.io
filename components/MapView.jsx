'use client'
/**
 * Carte interactive (Leaflet + fonds CARTO/OpenStreetMap). Chargée côté client uniquement.
 * venues = [{ slug, name, kind, cityName, cityColor, geo, count, href }]
 */
import { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => <div className="grid h-full place-items-center bg-mist text-sm font-bold uppercase">…</div>,
})

export default function MapView({ venues, labels, cities, height = '70vh', initialCity, showCityToggle = true }) {
  const [city, setCity] = useState(initialCity ?? cities[0]?.slug)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const current = cities.find((c) => c.slug === city) ?? cities[0]
  const visible = useMemo(() => venues.filter((v) => !showCityToggle || v.citySlug === city), [venues, city, showCityToggle])

  return (
    <div className="relative border-2 border-ink">
      {showCityToggle && cities.length > 1 && (
        <div className="absolute top-3 left-1/2 z-[500] flex -translate-x-1/2 border-2 border-ink bg-paper" role="group">
          {cities.map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={city === c.slug}
              onClick={() => setCity(c.slug)}
              className="flex min-h-11 items-center gap-2 px-4 text-sm font-bold uppercase aria-pressed:bg-ink aria-pressed:text-paper"
            >
              <span className="size-3 rounded-full" style={{ background: c.color }} aria-hidden="true" /> {c.label}
            </button>
          ))}
        </div>
      )}
      <div style={{ height }} className="relative z-0">
        {mounted && <LeafletMap key={current.slug} center={current.geo} zoom={current.zoom ?? 15} venues={visible} labels={labels} />}
      </div>
      <ul className="grid border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((v) => (
          <li key={v.slug} className="border-b border-ink/15 sm:border-r">
            <a href={v.href} className="flex min-h-14 items-center gap-3 px-4 py-3 hover:bg-mist">
              <span className="size-3 shrink-0 rounded-full" style={{ background: v.cityColor }} aria-hidden="true" />
              <span className="flex-1 text-sm font-bold">{v.name}</span>
              <span className="text-xs font-semibold text-ink/60">
                {(v.count === 1 ? labels.eventsHereOne : labels.eventsHere).replace('{n}', v.count)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
