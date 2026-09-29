'use client'
/** RotatingText — inspiré de React Bits : mots qui se succèdent dans un cadre coloré. */
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

export default function RotatingText({ words, interval = 2200, className = '', colors = [] }) {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval, reduce])

  return (
    <span
      className={`relative inline-flex overflow-hidden px-3 align-bottom transition-colors duration-500 ${className}`}
      style={{ backgroundColor: colors[i % (colors.length || 1)] }}
    >
      <span className="sr-only">{words.join(', ')}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          aria-hidden="true"
          className="inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
