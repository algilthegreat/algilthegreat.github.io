'use client'
/**
 * Bouton « + Agenda » réutilisable : Google Agenda (lien prérempli avec ctz=Asia/Vientiane),
 * Outlook (deeplink) et fichier .ics (Apple Calendrier & co).
 * `event` = objet événement complet ou `card.cal` (voir toEventCard).
 *
 * Le menu est rendu dans un portail (document.body) en position fixe : il n'est donc jamais
 * rogné par un parent en overflow-hidden (cartes événement, SpotlightCard…).
 */
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CalendarPlus, ChevronDown, Download } from 'lucide-react'
import { googleCalendarUrl, outlookCalendarUrl, icsHref } from '@/lib/calendar'

const MENU_WIDTH = 240
const GAP = 8
const MARGIN = 12

export default function CalendarButton({ event, locale, labels, variant = 'outline', className = '', align = 'left' }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState(null)
  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const menuId = useId()

  const place = useCallback(() => {
    const button = buttonRef.current
    if (!button) return
    const r = button.getBoundingClientRect()
    const menuHeight = menuRef.current?.offsetHeight ?? 150
    const below = window.innerHeight - r.bottom
    // Ouvre vers le haut s'il n'y a pas la place en dessous
    const top = below < menuHeight + GAP + MARGIN && r.top > menuHeight + GAP ? r.top - menuHeight - GAP : r.bottom + GAP
    let left = align === 'right' ? r.right - MENU_WIDTH : r.left
    left = Math.min(Math.max(MARGIN, left), window.innerWidth - MENU_WIDTH - MARGIN)
    setPos({ top, left })
  }, [align])

  // Positionnement avant affichage, puis recalcul une fois la hauteur réelle connue
  useLayoutEffect(() => {
    if (open) place()
  }, [open, place])

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (!buttonRef.current?.contains(e.target) && !menuRef.current?.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onDoc)
    document.addEventListener('keydown', onKey)
    window.addEventListener('scroll', place, true)
    window.addEventListener('resize', place)
    return () => {
      document.removeEventListener('pointerdown', onDoc)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', place, true)
      window.removeEventListener('resize', place)
    }
  }, [open, place])

  const styles = {
    outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
    solid: 'bg-blue text-paper hover:bg-blue-deep border-2 border-blue',
    light: 'bg-paper text-ink hover:bg-tournesol border-2 border-paper',
  }

  const item = 'flex min-h-11 items-center gap-3 px-4 py-2.5 text-sm font-semibold hover:bg-mist focus-visible:bg-mist'
  const close = () => setOpen(false)

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        className={`inline-flex min-h-11 w-full items-center justify-center gap-2 px-4 text-sm font-bold uppercase transition-colors duration-200 ${styles[variant]}`}
      >
        <CalendarPlus className="size-5" aria-hidden="true" />
        <span>{labels.calendar}</span>
        <ChevronDown className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            style={{ position: 'fixed', top: pos?.top ?? -9999, left: pos?.left ?? -9999, width: MENU_WIDTH }}
            className="z-50 border-2 border-ink bg-paper text-ink shadow-[6px_6px_0_0_#000]"
          >
            <a className={item} href={googleCalendarUrl(event, locale)} target="_blank" rel="noopener noreferrer" onClick={close}>
              <GoogleMark /> {labels.google}
            </a>
            <a className={item} href={outlookCalendarUrl(event, locale)} target="_blank" rel="noopener noreferrer" onClick={close}>
              <span aria-hidden="true" className="grid size-5 place-items-center bg-[#0a64ad] text-[10px] font-black text-white">O</span>
              {labels.outlook}
            </a>
            <a className={item} href={icsHref(event, locale)} download={`${event.slug}.ics`} onClick={close}>
              <Download className="size-5" aria-hidden="true" /> {labels.ics}
            </a>
          </div>,
          document.body,
        )}
    </div>
  )
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff" stroke="#4285F4" strokeWidth="2" />
      <rect x="3" y="3" width="18" height="5" fill="#4285F4" />
      <text x="12" y="18.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#4285F4">31</text>
    </svg>
  )
}
