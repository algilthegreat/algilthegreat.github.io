/**
 * Icônes réseaux sociaux (SVG simplifiés). Deux comptes Instagram : Luang Prabang (LPB) et Vientiane (VTE).
 * ⚠️ Facebook et YouTube : remplacer les URL par les comptes officiels.
 */
const networks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    path: 'M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.2-.6.6-.6Z',
  },
  {
    name: 'Instagram — Institut français de Luang Prabang (@if_lpb)',
    tag: 'LPB',
    href: 'https://www.instagram.com/if_lpb/',
    path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z',
  },
  {
    name: 'Instagram — Institut français du Laos, Vientiane (@institutfrancais_laos)',
    tag: 'VTE',
    href: 'https://www.instagram.com/institutfrancais_laos/',
    path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    path: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z',
  },
]

export default function SocialIcons({ className = '' }) {
  return (
    <ul className={`flex gap-2 ${className}`}>
      {networks.map((n) => (
        <li key={n.name}>
          <a
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={n.name}
            title={n.name}
            className={`flex h-11 items-center justify-center gap-1.5 border-2 border-current transition-colors hover:bg-tournesol hover:text-ink ${n.tag ? 'px-2.5' : 'w-11'}`}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
              <path d={n.path} fillRule="evenodd" />
            </svg>
            {n.tag && <span aria-hidden="true" className="text-xs font-black tracking-wider">{n.tag}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
