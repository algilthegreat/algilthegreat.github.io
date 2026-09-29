'use client'
/** DecryptedText — inspiré de React Bits : le texte se « déchiffre » à l'apparition. */
import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789→×'

export default function DecryptedText({ text, className = '', speed = 40 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [out, setOut] = useState(text)

  useEffect(() => {
    // Pas d'effet sur les écritures non latines (lao) ni en mouvement réduit
    if (!inView || reduce || /[຀-໿]/.test(text)) return
    let revealed = 0
    const id = setInterval(() => {
      revealed += 1 / 2
      setOut(
        text
          .split('')
          .map((c, i) => (c === ' ' || i < revealed ? c : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join(''),
      )
      if (revealed >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [inView, reduce, text, speed])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  )
}
