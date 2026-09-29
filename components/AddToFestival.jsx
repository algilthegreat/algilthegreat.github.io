'use client'
import { Heart } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useFestival } from './festival-store'

/** Bouton ♡ « Ajouter à mon festival ». `compact` = bouton icône seul. */
export default function AddToFestival({ slug, labels, compact = false, className = '' }) {
  const { has, toggle } = useFestival()
  const reduce = useReducedMotion()
  const active = has(slug)
  const label = active ? labels.inFestival : labels.addToFestival

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={active}
      aria-label={compact ? label : undefined}
      title={compact ? label : undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 border-2 text-sm font-bold uppercase transition-colors duration-200 ${
        compact ? 'min-w-11 px-0' : 'px-4'
      } ${active ? 'border-macaron bg-macaron text-ink' : 'border-ink bg-transparent text-ink hover:bg-ink hover:text-paper'} ${className}`}
    >
      <motion.span
        key={String(active)}
        initial={reduce ? false : { scale: 0.4 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        className="inline-flex"
      >
        <Heart className="size-5" fill={active ? 'currentColor' : 'none'} aria-hidden="true" />
      </motion.span>
      {!compact && <span>{label}</span>}
    </button>
  )
}
