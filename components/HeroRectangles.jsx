'use client'
/** Illustration du hero : 6 rectangles portrait aux couleurs de la palette secondaire, animés comme un égaliseur. */
import { motion, useReducedMotion } from 'motion/react'
import { palette } from '@/lib/data/taxonomies'

// [couleur, hauteur en % de la plus haute, motif (globals.css), durée d'une oscillation, décalage]
const RECTS = [
  [palette.tournesol, 78, 'soundwave-a', '1.7s', '-0.2s'],
  [palette.menthe, 100, 'soundwave-c', '0.8s', '-0.5s'],
  [palette.tuile, 64, 'soundwave-b', '2.1s', '-1.3s'],
  [palette.cumulus, 88, 'soundwave-a', '1.05s', '-0.7s'],
  [palette.macaron, 72, 'soundwave-c', '1.45s', '-1.1s'],
  [palette.bourgeon, 94, 'soundwave-b', '0.7s', '-0.3s'],
]

export default function HeroRectangles({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <div className={`flex aspect-[2/1] items-end gap-[3%] ${className}`} aria-hidden="true">
      {RECTS.map(([c, h, wave, duration, delay], i) => (
        <motion.span
          key={c}
          className="block flex-1 origin-bottom"
          style={{ height: `${h}%` }}
          initial={reduce ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="block h-full origin-bottom"
            style={{ background: c, animation: `${wave} ${duration} ease-in-out ${delay} infinite` }}
          />
        </motion.span>
      ))}
    </div>
  )
}
