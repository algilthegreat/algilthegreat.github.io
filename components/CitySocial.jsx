import { tr } from '@/lib/i18n/config'
import { icons } from './SocialIcons'

/** « Suivre l'Institut français » de la ville : liens Facebook et Instagram (pages ville, lieu, événement). */
export default function CitySocial({ city, locale, label, dark = false, className = '' }) {
  if (!city?.social) return null
  const org = tr(city.social.org, locale)
  const links = [
    ['Facebook', city.social.facebook, icons.facebook],
    ['Instagram', city.social.instagram, icons.instagram],
  ]
  return (
    <div className={className}>
      <p className={`kicker ${dark ? 'text-paper/70' : 'text-ink/60'}`}>
        {label} · <span style={{ color: dark ? city.color : undefined }}>{org}</span>
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {links.map(([network, href, path]) => (
          <li key={network}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${network} — ${org}`}
              className={`group flex h-11 items-center gap-2 border-2 px-4 text-sm font-bold uppercase tracking-wider transition-colors hover:border-tournesol hover:bg-tournesol hover:text-ink ${dark ? 'border-paper/60' : 'border-ink'}`}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                <path d={path} fillRule="evenodd" />
              </svg>
              {network}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
