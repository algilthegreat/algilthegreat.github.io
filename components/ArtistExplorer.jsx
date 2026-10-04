'use client'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import ArtistCard from './ArtistCard'
import { Chip, Group } from './ProgrammeExplorer'

/** Catalogue des artistes filtrable : pays, type (artiste/collectif), pratique, discipline. */
export default function ArtistExplorer({ artists, locale, labels, roles, disciplines, common }) {
  const reduce = useReducedMotion()
  const [country, setCountry] = useState('')
  const [kind, setKind] = useState('')
  const [role, setRole] = useState('')
  const [discipline, setDiscipline] = useState('')

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.get('discipline')) setDiscipline(p.get('discipline'))
    if (p.get('pays')) setCountry(p.get('pays'))
    if (p.get('pratique')) setRole(p.get('pratique'))
  }, [])

  useEffect(() => {
    const p = new URLSearchParams()
    if (discipline) p.set('discipline', discipline)
    if (country) p.set('pays', country)
    if (role) p.set('pratique', role)
    const qs = p.toString()
    window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`)
  }, [discipline, country, role])

  // Les profils binationaux (FR-LA, SE-FR) apparaissent dans le filtre de chacun de leurs pays
  const byCountry = (a, c) => !c || a.country.split('-').includes(c)
  const matches = (a, skip) =>
    (skip === 'country' || byCountry(a, country)) &&
    (skip === 'kind' || !kind || a.kind === kind) &&
    (skip === 'role' || !role || a.roles.includes(role)) &&
    (skip === 'discipline' || !discipline || a.disciplines.includes(discipline))
  const count = (skip, pred) => artists.filter((a) => matches(a, skip) && pred(a)).length
  const results = artists.filter((a) => matches(a))
  const active = country || kind || role || discipline

  return (
    <div>
      <div className="grid gap-8 border-2 border-ink bg-mist p-5 md:p-8 lg:grid-cols-[auto_auto_1fr]">
        <Group legend={common.country}>
          <Chip pressed={!country} onClick={() => setCountry('')}>{labels.filterAll}</Chip>
          <Chip pressed={country === 'FR'} onClick={() => setCountry(country === 'FR' ? '' : 'FR')} count={count('country', (a) => byCountry(a, 'FR'))}>{labels.france}</Chip>
          <Chip pressed={country === 'LA'} onClick={() => setCountry(country === 'LA' ? '' : 'LA')} count={count('country', (a) => byCountry(a, 'LA'))}>{labels.laos}</Chip>
        </Group>
        <Group legend="&nbsp;">
          <Chip pressed={kind === 'artist'} onClick={() => setKind(kind === 'artist' ? '' : 'artist')} count={count('kind', (a) => a.kind === 'artist')}>{labels.individuals}</Chip>
          <Chip pressed={kind === 'collective'} onClick={() => setKind(kind === 'collective' ? '' : 'collective')} count={count('kind', (a) => a.kind === 'collective')}>{labels.collectives}</Chip>
        </Group>
        <Group legend={common.filters}>
          {roles.map((r) => (
            <Chip key={r.slug} pressed={role === r.slug} onClick={() => setRole(role === r.slug ? '' : r.slug)} count={count('role', (a) => a.roles.includes(r.slug))}>
              {r.label}
            </Chip>
          ))}
        </Group>
        <div className="lg:col-span-3">
          <Group legend={labels.disciplineLegend}>
            {disciplines.map((d) => (
              <Chip key={d.slug} pressed={discipline === d.slug} onClick={() => setDiscipline(discipline === d.slug ? '' : d.slug)} count={count('discipline', (a) => a.disciplines.includes(d.slug))} color={d.color}>
                {d.label}
              </Chip>
            ))}
          </Group>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-bold uppercase" aria-live="polite">{labels.count.replace('{n}', results.length)}</p>
        {active && (
          <button type="button" className="min-h-11 text-sm font-bold uppercase underline underline-offset-4" onClick={() => { setCountry(''); setKind(''); setRole(''); setDiscipline('') }}>
            {common.reset}
          </button>
        )}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
        {results.map((a, i) => (
          <motion.li key={a.slug} layout={!reduce} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i * 0.03, 0.3) }}>
            <ArtistCard artist={a} locale={locale} headingLevel={2} />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
