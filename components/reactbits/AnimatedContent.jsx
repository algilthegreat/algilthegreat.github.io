'use client'
/** AnimatedContent — inspiré de React Bits : apparition au scroll (translation + fondu). */
import { motion, useReducedMotion } from 'motion/react'

export default function AnimatedContent({ children, className = '', delay = 0, distance = 40, direction = 'up', as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const sign = direction === 'down' || direction === 'right' ? -1 : 1
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, [axis]: distance * sign }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}
