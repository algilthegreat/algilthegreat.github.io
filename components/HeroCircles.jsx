'use client'
/** Illustration principale : la ronde des 7 couleurs secondaires de la charte, en orbite. */
import { motion, useReducedMotion } from 'motion/react'

const COLORS = ['#FFE552', '#21AB88', '#869ECE', '#FF9575', '#7AB1E8', '#99C221', '#FFB7AE']

export default function HeroCircles({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        {COLORS.map((c, i) => {
          const angle = (i / COLORS.length) * Math.PI * 2 - Math.PI / 2
          return (
            <motion.span
              key={c}
              className="absolute size-[26%] rounded-full"
              style={{ background: c, left: `${37 + Math.cos(angle) * 37}%`, top: `${37 + Math.sin(angle) * 37}%` }}
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08, type: 'spring', stiffness: 180, damping: 14 }}
            />
          )
        })}
      </motion.div>
    </div>
  )
}
