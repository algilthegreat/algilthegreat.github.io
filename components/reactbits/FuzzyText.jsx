'use client'
/**
 * FuzzyText — inspiré de React Bits : texte dessiné sur canvas dont chaque ligne de pixels
 * tremble horizontalement ; l'effet s'intensifie au survol (ou au toucher).
 * Image fixe en mouvement réduit.
 */
import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

export default function FuzzyText({
  children,
  fontSize = 'clamp(6rem, 22vw, 16rem)',
  fontWeight = 900,
  color = '#ffffff',
  baseIntensity = 0.18,
  hoverIntensity = 0.55,
  className = '',
  label,
}) {
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()
  const text = String(children)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let frame = 0
    let cancelled = false
    let cleanup = () => {}

    const init = async () => {
      if (document.fonts?.ready) await document.fonts.ready
      if (cancelled) return

      const ctx = canvas.getContext('2d')
      const fontFamily = getComputedStyle(canvas).fontFamily || 'sans-serif'

      // Taille de police CSS (clamp, rem…) résolue via un élément temporaire
      const probe = document.createElement('span')
      probe.style.cssText = `position:absolute;visibility:hidden;font-size:${fontSize}`
      document.body.appendChild(probe)
      const px = parseFloat(getComputedStyle(probe).fontSize)
      probe.remove()

      // Rendu hors écran du texte, à la résolution de l'écran
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const off = document.createElement('canvas')
      const octx = off.getContext('2d')
      const font = `${fontWeight} ${px * dpr}px ${fontFamily}`
      octx.font = font
      const m = octx.measureText(text)
      const ascent = m.actualBoundingBoxAscent || px * dpr * 0.8
      const descent = m.actualBoundingBoxDescent || px * dpr * 0.2
      const w = Math.ceil(m.actualBoundingBoxLeft + m.actualBoundingBoxRight || m.width)
      const h = Math.ceil(ascent + descent)
      off.width = w + 20
      off.height = h + 20
      octx.font = font
      octx.textBaseline = 'alphabetic'
      octx.fillStyle = color
      octx.fillText(text, 10 + (m.actualBoundingBoxLeft || 0), 10 + ascent)

      const margin = Math.round(60 * dpr)
      canvas.width = off.width + margin * 2
      canvas.height = off.height
      canvas.style.width = `${canvas.width / dpr}px`

      const draw = (intensity) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for (let y = 0; y < off.height; y++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * margin * 1.6)
          ctx.drawImage(off, 0, y, off.width, 1, margin + dx, y, off.width, 1)
        }
      }

      if (reduce) {
        draw(0)
        return
      }

      let hovering = false
      const loop = () => {
        draw(hovering ? hoverIntensity : baseIntensity)
        frame = requestAnimationFrame(loop)
      }
      loop()

      const on = () => (hovering = true)
      const off_ = () => (hovering = false)
      canvas.addEventListener('pointerenter', on)
      canvas.addEventListener('pointerleave', off_)
      canvas.addEventListener('touchstart', on, { passive: true })
      canvas.addEventListener('touchend', off_)
      cleanup = () => {
        canvas.removeEventListener('pointerenter', on)
        canvas.removeEventListener('pointerleave', off_)
        canvas.removeEventListener('touchstart', on)
        canvas.removeEventListener('touchend', off_)
      }
    }

    init()
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      cleanup()
    }
  }, [text, fontSize, fontWeight, color, baseIntensity, hoverIntensity, reduce])

  return <canvas ref={canvasRef} role="img" aria-label={label ?? text} className={`block h-auto max-w-full font-display ${className}`} />
}
