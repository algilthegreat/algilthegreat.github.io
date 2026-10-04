'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronDown, Heart, Menu, Search as SearchIcon, X } from 'lucide-react'
import Logo from './Logo'
import SearchDialog from './SearchDialog'
import { useFestival } from './festival-store'
import { locales, localeMeta } from '@/lib/i18n/config'

export default function Header({ locale, nav, searchLabels, disciplines }) {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { slugs } = useFestival()
  const reduce = useReducedMotion()
  const closeTimer = useRef(null)
  const L = (p) => `/${locale}${p}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Raccourci clavier ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Fermer les menus lors d'un changement de page
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const menus = {
    programme: {
      label: nav.programme,
      columns: [
        {
          links: [
            { href: L('/programme'), label: nav.allProgramme },
            { href: L('/programme?jour=aujourdhui'), label: nav.today },
            { href: L('/programme?semaine=1'), label: nav.thisWeek },
            { href: L('/programme/3-novembre'), label: nav.opening },
          ],
        },
        {
          links: [
            { href: L('/luang-prabang'), label: 'Luang Prabang' },
            { href: L('/vientiane'), label: 'Vientiane' },
            { href: L('/agenda'), label: nav.agenda },
            { href: L('/carte'), label: nav.map },
          ],
        },
        {
          links: [
            { href: L('/cinema'), label: nav.cinema },
            { href: L('/musique'), label: nav.music },
            { href: L('/expositions'), label: nav.exhibitions },
            { href: L('/rencontres'), label: nav.meetings },
            { href: L('/ateliers'), label: nav.workshops },
            { href: L('/jeunesse'), label: nav.youth },
          ],
        },
      ],
    },
    artists: {
      label: nav.artists,
      columns: [
        { links: [{ href: L('/artistes'), label: nav.allArtists }] },
        { links: disciplines.slice(0, 6).map((d) => ({ href: L(`/artistes?discipline=${d.slug}`), label: d.label, color: d.color })) },
        { links: disciplines.slice(6).map((d) => ({ href: L(`/artistes?discipline=${d.slug}`), label: d.label, color: d.color })) },
      ],
    },
    discover: {
      label: nav.discover,
      columns: [
        {
          links: [
            { href: L('/festival'), label: nav.festival },
            { href: L('/france-laos'), label: nav.franceLaos },
            { href: L('/villes'), label: nav.cities },
            { href: L('/lieux'), label: nav.venues },
            { href: L('/disciplines'), label: nav.disciplines },
          ],
        },
        {
          links: [
            { href: L('/partenaires'), label: nav.partners },
            { href: L('/galerie'), label: nav.gallery },
            { href: L('/videos'), label: nav.videos },
          ],
        },
        {
          links: [
            { href: L('/infos-pratiques'), label: nav.practical },
            { href: L('/faq'), label: nav.faq },
            { href: L('/presse'), label: nav.press },
            { href: L('/contact'), label: nav.contact },
          ],
        },
      ],
    },
  }

  const simpleLinks = [
    { href: L('/lieux'), label: nav.venues },
    { href: L('/villes'), label: nav.cities },
    { href: L('/actualites'), label: nav.news },
  ]

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`)
  const switchLocale = (target) => pathname.replace(/^\/(fr|en|lo)(?=\/|$)/, `/${target}`)

  const openWithDelay = (key) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(key)
  }
  const closeWithDelay = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-tournesol focus:px-4 focus:py-3 focus:font-bold">
        {nav.skip}
      </a>
      <header
        className={`sticky top-0 z-30 border-b-2 border-ink bg-paper/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-[0_6px_0_0_rgba(0,0,0,0.06)]' : ''}`}
        onMouseLeave={closeWithDelay}
      >
        <div className="container-site flex h-18 items-center gap-6">
          <Link href={L('/')} className="shrink-0" aria-label="Festival France–Laos 2026 — accueil">
            <Logo />
          </Link>

          <nav aria-label="Navigation principale" className="hidden flex-1 lg:block">
            <ul className="flex items-center gap-1">
              {Object.entries(menus).map(([key, menu]) => (
                <li key={key} onMouseEnter={() => openWithDelay(key)}>
                  <button
                    type="button"
                    aria-expanded={openMenu === key}
                    aria-controls={`mega-${key}`}
                    onClick={() => setOpenMenu(openMenu === key ? null : key)}
                    className={`flex min-h-11 items-center gap-1 px-3 text-sm font-bold tracking-wide uppercase hover:text-blue ${openMenu === key ? 'text-blue' : ''}`}
                  >
                    {menu.label}
                    <ChevronDown className={`size-4 transition-transform ${openMenu === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                </li>
              ))}
              {simpleLinks.map((l) => (
                <li key={l.href} onMouseEnter={() => setOpenMenu(null)}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? 'page' : undefined}
                    className="flex min-h-11 items-center px-3 text-sm font-bold tracking-wide uppercase hover:text-blue aria-[current=page]:text-blue"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-sm font-bold uppercase hover:text-blue xl:px-3"
              aria-label={searchLabels.open}
            >
              <SearchIcon className="size-5" aria-hidden="true" />
              <span className="hidden xl:inline">{nav.search}</span>
              <kbd className="hidden border border-ink/20 px-1.5 text-[10px] font-semibold text-ink/60 xl:inline">⌘K</kbd>
            </button>
            <Link
              href={L('/agenda')}
              className="relative flex min-h-11 min-w-11 items-center justify-center gap-2 bg-ink px-3 text-sm font-bold text-paper uppercase transition-colors hover:bg-blue"
            >
              <Heart className="size-5" fill={slugs.length ? '#FFB7AE' : 'none'} aria-hidden="true" />
              <span className="hidden md:inline">{nav.myFestival}</span>
              {slugs.length > 0 && (
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-tournesol text-xs font-black text-ink" aria-label={`${slugs.length}`}>
                  {slugs.length}
                </span>
              )}
            </Link>
            <ul className="hidden items-center sm:flex" aria-label={nav.language}>
              {locales.map((l, i) => (
                <li key={l} className="flex items-center">
                  {i > 0 && <span className="text-ink/30" aria-hidden="true">|</span>}
                  <Link
                    href={switchLocale(l)}
                    hrefLang={l}
                    lang={l}
                    aria-current={l === locale ? 'true' : undefined}
                    className={`flex min-h-11 items-center px-2 text-sm font-bold ${l === locale ? 'text-blue underline decoration-2 underline-offset-4' : 'hover:text-blue'}`}
                  >
                    {localeMeta[l].label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label={nav.menu}
              aria-expanded={mobileOpen}
            >
              <Menu className="size-7" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mega-menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              id={`mega-${openMenu}`}
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => clearTimeout(closeTimer.current)}
              className="absolute inset-x-0 top-full hidden border-b-2 border-ink bg-paper lg:block"
            >
              <div className="container-site grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 py-10">
                <p className="display text-6xl text-blue uppercase">{menus[openMenu].label}</p>
                {menus[openMenu].columns.map((col, i) => (
                  <ul key={i} className="space-y-1">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="group flex min-h-10 items-center gap-3 text-lg font-bold hover:text-blue">
                          {l.color && <span className="size-3 rounded-full" style={{ background: l.color }} aria-hidden="true" />}
                          <span className="link-underline">{l.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={nav.menu}
            initial={reduce ? false : { clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={reduce ? undefined : { clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="on-dark fixed inset-0 z-50 overflow-y-auto bg-blue text-paper lg:hidden"
          >
            <div className="container-site flex h-18 items-center justify-between">
              <Logo inverted />
              <button type="button" onClick={() => setMobileOpen(false)} className="flex min-h-11 min-w-11 items-center justify-center" aria-label={nav.close}>
                <X className="size-8" aria-hidden="true" />
              </button>
            </div>
            <nav className="container-site pt-6 pb-16" aria-label="Navigation mobile">
              {Object.entries(menus).map(([key, menu]) => (
                <details key={key} className="border-b border-paper/25 py-3" open={key === 'programme'}>
                  <summary className="display flex list-none items-center justify-between text-4xl uppercase">
                    {menu.label}
                    <ChevronDown className="size-6" aria-hidden="true" />
                  </summary>
                  <ul className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
                    {menu.columns.flatMap((c) => c.links).map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="flex min-h-11 items-center text-lg font-semibold">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              {simpleLinks.map((l) => (
                <Link key={l.href} href={l.href} className="display block border-b border-paper/25 py-3 text-4xl uppercase">
                  {l.label}
                </Link>
              ))}
              <div className="mt-8 flex gap-3">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLocale(l)}
                    hrefLang={l}
                    lang={l}
                    className={`flex min-h-11 min-w-14 items-center justify-center border-2 border-paper px-3 font-bold ${l === locale ? 'bg-paper text-blue' : ''}`}
                  >
                    {localeMeta[l].label}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} locale={locale} labels={searchLabels} />
    </>
  )
}
