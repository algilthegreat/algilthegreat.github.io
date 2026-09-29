import { Download, Clock } from 'lucide-react'
import { tr } from '@/lib/i18n/config'

/** Liste de fichiers presse / kit média ; les fichiers absents sont signalés « bientôt ». */
export default function DownloadList({ items, locale, labels, kindLabels }) {
  return (
    <ul className="border-t-2 border-ink">
      {items.map((item) => (
        <li key={item.slug} className="flex flex-wrap items-center gap-4 border-b-2 border-ink py-4">
          <span className="grid size-14 place-items-center bg-ink text-xs font-black text-paper">{item.format}</span>
          <span className="flex-1">
            <span className="block text-lg font-black uppercase">{tr(item.title, locale)}</span>
            {kindLabels && <span className="text-sm text-ink/60">{kindLabels[item.kind]}</span>}
          </span>
          {item.file ? (
            <a href={item.file.replace('/fr/', `/${locale}/`)} download className="btn-primary">
              <Download className="size-4" aria-hidden="true" /> {labels.download}
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 px-4 text-sm font-bold text-ink/50 uppercase">
              <Clock className="size-4" aria-hidden="true" /> {labels.soon}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
