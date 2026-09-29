import { Plus } from 'lucide-react'
import JsonLd from './JsonLd'
import { tr } from '@/lib/i18n/config'

/** Accordéon FAQ accessible (details/summary) + données structurées FAQPage. */
export default function Faq({ items, locale, withSchema = true }) {
  return (
    <div className="border-t-2 border-ink">
      {withSchema && (
        <JsonLd
          data={{
            '@type': 'FAQPage',
            mainEntity: items.map((i) => ({
              '@type': 'Question',
              name: tr(i.q, locale),
              acceptedAnswer: { '@type': 'Answer', text: tr(i.a, locale) },
            })),
          }}
        />
      )}
      {items.map((item, i) => (
        <details key={i} className="group border-b-2 border-ink">
          <summary className="flex min-h-16 list-none items-center justify-between gap-6 py-5 text-lg font-black uppercase md:text-xl [&::-webkit-details-marker]:hidden">
            {tr(item.q, locale)}
            <Plus className="size-7 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="max-w-3xl pb-6 text-lg text-ink/80">{tr(item.a, locale)}</p>
        </details>
      ))}
    </div>
  )
}
