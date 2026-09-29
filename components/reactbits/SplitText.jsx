'use client'
/**
 * SplitText — inspiré de React Bits (reactbits.dev/text-animations/split-text).
 * Découpe en graphèmes (Intl.Segmenter) pour ne jamais séparer les voyelles et
 * tons combinants du lao ; repli en mots si `by="words"`.
 */
import { motion, useReducedMotion } from 'motion/react'

const segment = (text) => {
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    return Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), (s) => s.segment)
  }
  return Array.from(text)
}

export default function SplitText({ text, as: Tag = 'span', by = 'chars', delay = 0, stagger = 0.03, className = '', once = true }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[Tag] ?? motion.span
  if (reduce) return <Tag className={className}>{text}</Tag>

  const words = text.split(' ')
  let index = 0
  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
    >
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {(by === 'words' ? [word] : segment(word)).map((part) => {
            index += 1
            return (
              <motion.span
                key={index}
                className="inline-block will-change-transform"
                variants={{
                  hidden: { y: '0.6em', opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {part}
              </motion.span>
            )
          })}
          {wi < words.length - 1 && ' '}
        </span>
      ))}
    </MotionTag>
  )
}
