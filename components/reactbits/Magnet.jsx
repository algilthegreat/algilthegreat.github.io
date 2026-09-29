'use client'
/** Magnet — inspiré de React Bits : l'élément est attiré par le curseur. */
import { useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

export default function Magnet({ children, strength = 4, padding = 60, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0, active: false })

  const onMove = (e) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    if (Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding) {
      setPos({ x: dx / strength, y: dy / strength, active: true })
    } else if (pos.active) setPos({ x: 0, y: 0, active: false })
  }

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      onPointerMove={onMove}
      onPointerLeave={() => setPos({ x: 0, y: 0, active: false })}
      style={{ padding: 0 }}
    >
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: pos.active ? 'transform 0.2s ease-out' : 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
