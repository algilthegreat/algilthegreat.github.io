'use client'
/** ClickSpark — inspiré de React Bits : étincelles colorées au clic. */
import { useCallback, useEffect, useRef } from 'react'

const COLORS = ['#FFE552', '#21AB88', '#FF9575', '#7AB1E8', '#FFB7AE', '#99C221']

export default function ClickSpark({ children, count = 10, radius = 26, duration = 450 }) {
  const canvasRef = useRef(null)
  const sparks = useRef([])
  const frame = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  const draw = useCallback(
    (now) => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const dpr = devicePixelRatio
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparks.current = sparks.current.filter((s) => now - s.start < duration)
      for (const s of sparks.current) {
        const p = (now - s.start) / duration
        const eased = 1 - (1 - p) ** 3
        const d = eased * radius
        const len = 10 * (1 - eased)
        ctx.strokeStyle = s.color
        ctx.lineWidth = 2.5 * dpr
        ctx.beginPath()
        ctx.moveTo((s.x + d * Math.cos(s.angle)) * dpr, (s.y + d * Math.sin(s.angle)) * dpr)
        ctx.lineTo((s.x + (d + len) * Math.cos(s.angle)) * dpr, (s.y + (d + len) * Math.sin(s.angle)) * dpr)
        ctx.stroke()
      }
      if (sparks.current.length) frame.current = requestAnimationFrame(draw)
    },
    [duration, radius],
  )

  const onClick = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const now = performance.now()
    for (let i = 0; i < count; i++) {
      sparks.current.push({ x: e.clientX, y: e.clientY, angle: (2 * Math.PI * i) / count, start: now, color: COLORS[i % COLORS.length] })
    }
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(draw)
  }

  return (
    <div onClickCapture={onClick} className="contents">
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] h-screen w-screen" />
      {children}
    </div>
  )
}
