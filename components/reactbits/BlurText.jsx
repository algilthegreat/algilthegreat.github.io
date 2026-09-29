'use client'
/** BlurText — inspiré de React Bits : les mots apparaissent en sortant du flou. */
import { motion, useReducedMotion } from 'motion/react'

export default function BlurText({ text, as: Tag = 'p', className = '', delay = 0, stagger = 0.06 }) {
  const reduce = useReducedMotion()
  if (reduce) return <Tag className={className}>{text}</Tag>
  const MotionTag = motion[Tag] ?? motion.p
  const words = text.split(' ')
  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: -12 },
            visible: { filter: 'blur(0px)', opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          {w}
          {i < words.length - 1 && ' '}
        </motion.span>
      ))}
    </MotionTag>
  )
}
