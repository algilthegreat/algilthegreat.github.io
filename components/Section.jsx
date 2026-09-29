import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/** Section de page avec grand titre et lien « Tout voir » optionnel. */
export default function Section({ id, kicker, title, action, children, tone = 'light', className = '' }) {
  const tones = {
    light: 'bg-paper text-ink',
    mist: 'bg-mist text-ink',
    dark: 'on-dark bg-ink text-paper',
    blue: 'on-dark bg-blue text-paper',
  }
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className={`py-16 md:py-24 ${tones[tone]} ${className}`}>
      <div className="container-site">
        {(title || action) && (
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
            <div>
              {kicker && <p className={`kicker mb-3 ${tone === 'dark' || tone === 'blue' ? 'text-tournesol' : 'text-blue'}`}>{kicker}</p>}
              {title && (
                <h2 id={id ? `${id}-title` : undefined} className="display max-w-[20ch] text-[clamp(2.2rem,5.5vw,4.75rem)] uppercase">
                  {title}
                </h2>
              )}
            </div>
            {action && (
              <Link href={action.href} className={tone === 'dark' || tone === 'blue' ? 'btn-light' : 'btn-dark'}>
                {action.label} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
