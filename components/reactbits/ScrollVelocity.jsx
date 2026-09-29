'use client'
/** ScrollVelocity — inspiré de React Bits : bandeau défilant qui accélère avec le scroll. */
import { useRef } from 'react'
import {
  motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity, wrap,
} from 'motion/react'

function Row({ items, baseVelocity, className }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(velocity, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)
  const direction = useRef(1)
  const reduce = useReducedMotion()

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let move = direction.current * baseVelocity * (delta / 1000)
    if (factor.get() < 0) direction.current = -1
    else if (factor.get() > 0) direction.current = 1
    move += direction.current * move * factor.get()
    baseX.set(baseX.get() + move)
  })

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-8 pr-8">
      {item}
      <span aria-hidden="true" className="inline-block size-4 rounded-full bg-current opacity-60" />
    </span>
  ))

  return (
    <div className="flex overflow-hidden whitespace-nowrap" aria-hidden="true">
      <motion.div className={`flex shrink-0 ${className}`} style={{ x }}>
        {content}
        {content}
      </motion.div>
    </div>
  )
}

export default function ScrollVelocity({ rows, velocity = 3, className = '', label }) {
  return (
    <div className="py-2" role="presentation">
      {label && <p className="sr-only">{label}</p>}
      {rows.map((items, i) => (
        <Row key={i} items={items} baseVelocity={i % 2 ? -velocity : velocity} className={className} />
      ))}
    </div>
  )
}
