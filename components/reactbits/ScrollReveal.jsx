'use client'
/** ScrollReveal — inspiré de React Bits : les mots s'allument au fil du scroll. */
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }} className="inline-block">{children}&nbsp;</motion.span>
}

export default function ScrollReveal({ text, as: Tag = 'p', className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.3'] })
  if (reduce) return <Tag className={className}>{text}</Tag>
  const words = text.split(' ')
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {w}
          </Word>
        ))}
      </span>
    </Tag>
  )
}
