'use client'
import { useEffect, useMemo, useState } from 'react'
import { LayoutGrid, List, SlidersHorizontal, RotateCcw } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import EventCard from './EventCard'
import EventRow from './EventRow'
import { FESTIVAL_DAYS, formatWeekday } from '@/lib/format'

export function Group({ legend, children }) {
  return (
    <fieldset className="min-w-0">
      <legend className="kicker mb-3">{legend}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  )
}

export function Chip({ pressed, onClick, children, count, color }) {
  return (
    <button type="button" className="chip disabled:cursor-not-allowed disabled:opacity-35" aria-pressed={pressed} onClick={onClick} disabled={count === 0 && !pressed}>
      {color && <span className="size-2.5 rounded-full" style={{ background: color }} aria-hidden="true" />}
      {children}
      {count !== undefined && <span className="text-xs opacity-60">{count}</span>}
    </button>
  )
}

const todayIso = () => {
  // Date du jour à Vientiane (UTC+7)
  const d = new Date(Date.now() + 7 * 3600 * 1000)
  return d.toISOString().slice(0, 10)
}

/**
 * Filtres du programme, synchronisés avec l'URL (?ville=&jour=&type=&public=&prix=).
 * `fixed` permet de verrouiller un filtre (ex. ville sur les pages ville).
 */
export default function ProgrammeExplorer({ cards, locale, labels, common, cities, types, audiences, fixed = {}, syncUrl = true }) {
  const reduce = useReducedMotion()
  const [city, setCity] = useState(fixed.city ?? '')
  const [day, setDay] = useState('')
  const [week, setWeek] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [audience, setAudience] = useState('')
  const [price, setPrice] = useState('')
  const [view, setView] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)

  // Lecture initiale de l'URL
  useEffect(() => {
    if (!syncUrl) return
    const p = new URLSearchParams(window.location.search)
    if (p.get('ville') && !fixed.city) setCity(p.get('ville'))
    const j = p.get('jour')
    if (j === 'aujourdhui') {
      const t = todayIso()
      setDay(FESTIVAL_DAYS.includes(t) ? t : FESTIVAL_DAYS[0])
    } else if (j && FESTIVAL_DAYS.includes(j)) setDay(j)
    if (p.get('semaine')) setWeek(true)
    if (p.get('type')) setSelectedTypes(p.get('type').split(','))
    if (p.get('public')) setAudience(p.get('public'))
    if (p.get('prix')) setPrice(p.get('prix'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Écriture dans l'URL (sans navigation)
  useEffect(() => {
    if (!syncUrl) return
    const p = new URLSearchParams()
    if (city && !fixed.city) p.set('ville', city)
    if (day) p.set('jour', day)
    if (week && !day) p.set('semaine', '1')
    if (selectedTypes.length) p.set('type', selectedTypes.join(','))
    if (audience) p.set('public', audience)
    if (price) p.set('prix', price)
    const qs = p.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`)
  }, [city, day, week, selectedTypes, audience, price, fixed.city, syncUrl])

  const weekDays = useMemo(() => {
    const t = todayIso()
    const from = t < FESTIVAL_DAYS[0] || t > FESTIVAL_DAYS.at(-1) ? FESTIVAL_DAYS[0] : t
    const i = FESTIVAL_DAYS.indexOf(from)
    return FESTIVAL_DAYS.slice(i, i + 7)
  }, [])

  const base = useMemo(() => cards.filter((c) => !fixed.city || c.citySlug === fixed.city), [cards, fixed.city])

  const matches = (c, skip) =>
    (skip === 'city' || !city || c.citySlug === city) &&
    (skip === 'day' || ((!day || c.days.includes(day)) && (!week || day || c.days.some((d) => weekDays.includes(d))))) &&
    (skip === 'type' || !selectedTypes.length || selectedTypes.includes(c.type)) &&
    (skip === 'audience' || !audience || c.audience.includes(audience)) &&
    (skip === 'price' || !price || (price === 'gratuit' ? c.free : !c.free))

  const results = base.filter((c) => matches(c))
  const countFor = (skip, pred) => base.filter((c) => matches(c, skip) && pred(c)).length
  const activeCount = [city && !fixed.city, day || week, selectedTypes.length, audience, price].filter(Boolean).length

  const reset = () => {
    if (!fixed.city) setCity('')
    setDay('')
    setWeek(false)
    setSelectedTypes([])
    setAudience('')
    setPrice('')
  }

  const toggleType = (slug) => setSelectedTypes((t) => (t.includes(slug) ? t.filter((x) => x !== slug) : [...t, slug]))
  const cityDays = fixed.city ? FESTIVAL_DAYS.filter((d) => base.some((c) => c.days.includes(d))) : FESTIVAL_DAYS

  return (
    <div>
      {/* Barre des dates */}
      <div className="sticky top-18 z-20 -mx-4 border-y-2 border-ink bg-paper/95 px-4 backdrop-blur sm:mx-0 sm:border-x-2 sm:px-0">
        <div className="flex items-stretch overflow-x-auto" role="group" aria-label={labels.date}>
          <button type="button" aria-pressed={!day && !week} onClick={() => { setDay(''); setWeek(false) }} className="shrink-0 border-r-2 border-ink px-4 py-3 text-sm font-bold uppercase aria-pressed:bg-ink aria-pressed:text-paper">
            {labels.allDates}
          </button>
          {cityDays.map((d) => {
            const n = countFor('day', (c) => c.days.includes(d))
            return (
              <button
                key={d}
                type="button"
                aria-pressed={day === d}
                onClick={() => { setDay(day === d ? '' : d); setWeek(false) }}
                disabled={n === 0}
                className="flex min-w-16 shrink-0 flex-col items-center border-r-2 border-ink px-3 py-2 last:border-r-0 hover:bg-mist disabled:opacity-30 aria-pressed:bg-blue aria-pressed:text-paper"
              >
                <span className="text-[10px] font-bold uppercase">{formatWeekday(d, locale)}</span>
                <span className="display text-2xl">{Number(d.slice(8))}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setShowFilters((s) => !s)} aria-expanded={showFilters} className="btn-outline min-h-11 px-4">
          <SlidersHorizontal className="size-4" aria-hidden="true" />
          {showFilters ? labels.hideFilters : labels.showFilters}
          {activeCount > 0 && <span className="grid size-6 place-items-center rounded-full bg-tournesol text-xs text-ink">{activeCount}</span>}
        </button>
        {activeCount > 0 && (
          <button type="button" onClick={reset} className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-bold uppercase underline underline-offset-4">
            <RotateCcw className="size-4" aria-hidden="true" /> {common.reset}
          </button>
        )}
        <p className="ml-auto text-sm font-bold uppercase" aria-live="polite">
          {results.length === 1 ? labels.countOne : labels.count.replace('{n}', results.length)}
        </p>
        <div className="flex border-2 border-ink" role="group" aria-label="Affichage">
          <button type="button" aria-pressed={view === 'grid'} onClick={() => setView('grid')} className="grid size-11 place-items-center aria-pressed:bg-ink aria-pressed:text-paper" aria-label="Grille">
            <LayoutGrid className="size-5" aria-hidden="true" />
          </button>
          <button type="button" aria-pressed={view === 'list'} onClick={() => setView('list')} className="grid size-11 place-items-center aria-pressed:bg-ink aria-pressed:text-paper" aria-label="Liste">
            <List className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showFilters && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-8 border-2 border-ink bg-mist p-5 md:grid-cols-2 md:p-8">
              {!fixed.city && (
                <Group legend={labels.city}>
                  <Chip pressed={!city} onClick={() => setCity('')}>{labels.all}</Chip>
                  {cities.map((c) => (
                    <Chip key={c.slug} pressed={city === c.slug} onClick={() => setCity(city === c.slug ? '' : c.slug)} count={countFor('city', (x) => x.citySlug === c.slug)} color={c.color}>
                      {c.label}
                    </Chip>
                  ))}
                </Group>
              )}
              <Group legend={labels.price}>
                <Chip pressed={!price} onClick={() => setPrice('')}>{labels.allF}</Chip>
                <Chip pressed={price === 'gratuit'} onClick={() => setPrice(price === 'gratuit' ? '' : 'gratuit')} count={countFor('price', (x) => x.free)}>{labels.free}</Chip>
                <Chip pressed={price === 'payant'} onClick={() => setPrice(price === 'payant' ? '' : 'payant')} count={countFor('price', (x) => !x.free)}>{labels.paid}</Chip>
              </Group>
              <div className="md:col-span-2">
                <Group legend={labels.type}>
                  {types.map((t) => (
                    <Chip key={t.slug} pressed={selectedTypes.includes(t.slug)} onClick={() => toggleType(t.slug)} count={countFor('type', (x) => x.type === t.slug)}>
                      {t.label}
                    </Chip>
                  ))}
                </Group>
              </div>
              <div className="md:col-span-2">
                <Group legend={labels.audience}>
                  <Chip pressed={!audience} onClick={() => setAudience('')}>{labels.allF}</Chip>
                  {audiences.map((a) => (
                    <Chip key={a.slug} pressed={audience === a.slug} onClick={() => setAudience(audience === a.slug ? '' : a.slug)} count={countFor('audience', (x) => x.audience.includes(a.slug))}>
                      {a.label}
                    </Chip>
                  ))}
                </Group>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10">
        {results.length === 0 ? (
          <div className="border-2 border-dashed border-ink p-12 text-center">
            <p className="text-xl font-bold">{labels.empty}</p>
            <button type="button" onClick={reset} className="btn-dark mt-6">{common.reset}</button>
          </div>
        ) : view === 'grid' ? (
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((c) => (
              <motion.li key={c.slug} layout={!reduce} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <EventCard card={c} locale={locale} labels={common} headingLevel={2} />
              </motion.li>
            ))}
          </ul>
        ) : (
          <ul className="border-t-2 border-ink">
            {results.map((c) => (
              <EventRow key={c.slug} card={c} locale={locale} labels={common} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
