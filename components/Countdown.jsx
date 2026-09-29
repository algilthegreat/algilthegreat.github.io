'use client'
import { useEffect, useState } from 'react'
import { FESTIVAL_START, FESTIVAL_END } from '@/lib/format'

const start = new Date(FESTIVAL_START).getTime()
const end = new Date(FESTIVAL_END).getTime()

/** Compte à rebours jusqu'au 3 novembre 18:00 (heure du Laos). Rendu client uniquement. */
export default function Countdown({ labels }) {
  const [now, setNow] = useState(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  if (now !== null && now >= end) return <p className="display text-4xl uppercase">{labels.ended}</p>
  if (now !== null && now >= start) return <p className="display text-4xl uppercase">{labels.started}</p>

  const diff = now === null ? null : Math.max(0, start - now)
  const units = [
    ['days', diff === null ? null : Math.floor(diff / 86400000)],
    ['hours', diff === null ? null : Math.floor(diff / 3600000) % 24],
    ['minutes', diff === null ? null : Math.floor(diff / 60000) % 60],
    ['seconds', diff === null ? null : Math.floor(diff / 1000) % 60],
  ]

  return (
    <div>
      <p className="kicker mb-3">{labels.countdownTitle}</p>
      <dl className="flex gap-2 sm:gap-3">
        {units.map(([key, value]) => (
          <div key={key} className="min-w-[4.2rem] border-2 border-current px-2 py-2 text-center sm:min-w-20">
            <dt className="sr-only">{labels.countdown[key]}</dt>
            <dd className="display text-3xl tabular-nums sm:text-5xl" suppressHydrationWarning>
              {value === null ? '--' : String(value).padStart(2, '0')}
            </dd>
            <dd aria-hidden="true" className="text-[10px] font-bold tracking-widest uppercase opacity-80">
              {labels.countdown[key]}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
