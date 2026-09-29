'use client'
/** SpotlightCard — inspiré de React Bits : halo lumineux qui suit le curseur. */
import { useRef } from 'react'

export default function SpotlightCard({ children, className = '', color = 'rgba(255, 229, 82, 0.35)', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <Tag ref={ref} onPointerMove={onMove} className={`group/spot relative overflow-hidden ${className}`} {...rest}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), ${color}, transparent 60%)` }}
      />
      {children}
    </Tag>
  )
}
