'use client'
/** TiltedCard — inspiré de React Bits : inclinaison 3D douce au survol. */
import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'

const spring = { damping: 30, stiffness: 120, mass: 1.5 }

export default function TiltedCard({ children, className = '', amplitude = 10 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const rx = useSpring(useMotionValue(0), spring)
  const ry = useSpring(useMotionValue(0), spring)

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const ox = e.clientX - r.left - r.width / 2
    const oy = e.clientY - r.top - r.height / 2
    rx.set((oy / (r.height / 2)) * -amplitude)
    ry.set((ox / (r.width / 2)) * amplitude)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <div ref={ref} className={`[perspective:900px] ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div className="h-full [transform-style:preserve-3d]" style={{ rotateX: rx, rotateY: ry }}>
        {children}
      </motion.div>
    </div>
  )
}
