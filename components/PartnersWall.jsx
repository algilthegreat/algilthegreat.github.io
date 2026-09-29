import Image from 'next/image'
import { tr } from '@/lib/i18n/config'
import GlareHover from './reactbits/GlareHover'

/**
 * Partenaires : logo (`logo`), photo du lieu (`photo`) ou placeholder typographique
 * tant que les visuels ne sont pas fournis.
 */
export default function PartnersWall({ groups, locale, compact = false }) {
  const list = compact ? groups.slice(0, 2) : groups
  return (
    <div className="space-y-12">
      {list.map((g) => (
        <section key={g.slug} aria-labelledby={`partners-${g.slug}`}>
          <h3 id={`partners-${g.slug}`} className="kicker mb-4 text-blue">
            {tr(g.label, locale)}
          </h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {g.items.map(({ name, logo, photo }) => (
              <li key={name}>
                <GlareHover className="h-full">
                  {logo ? (
                    <div className="flex aspect-[3/2] flex-col items-center justify-center gap-3 border-2 border-ink/15 bg-white p-4 transition-colors hover:border-ink">
                      <div className="relative h-3/5 w-full">
                        <Image src={logo} alt={name} fill sizes="(min-width: 1024px) 15vw, 40vw" className="object-contain" />
                      </div>
                      <span className="text-center text-xs font-bold text-ink/70 uppercase">{name}</span>
                    </div>
                  ) : photo ? (
                    <div className="group relative flex aspect-[3/2] items-end overflow-hidden border-2 border-ink/15 bg-ink transition-colors hover:border-ink">
                      <Image src={photo} alt="" fill sizes="(min-width: 1024px) 20vw, 50vw" className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                      <span className="relative p-3 text-sm font-black text-paper uppercase">{name}</span>
                    </div>
                  ) : (
                    <div className="flex aspect-[3/2] items-center justify-center border-2 border-ink/15 bg-paper p-4 text-center text-sm font-black text-ink/70 uppercase transition-colors hover:border-ink hover:text-ink">
                      {name}
                    </div>
                  )}
                </GlareHover>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
