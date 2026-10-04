import Link from 'next/link'
import Logo from './Logo'
import NewsletterForm from './NewsletterForm'
import SocialIcons from './SocialIcons'
import ShinyText from './reactbits/ShinyText'

export default function Footer({ locale, dict }) {
  const { nav, footer } = dict
  const L = (p) => `/${locale}${p}`
  const cols = [
    {
      title: nav.programme,
      links: [
        [L('/programme'), nav.allProgramme],
        [L('/programme/3-novembre'), nav.opening],
        [L('/luang-prabang'), 'Luang Prabang'],
        [L('/vientiane'), 'Vientiane'],
        [L('/agenda'), nav.myFestival],
        [L('/carte'), nav.map],
      ],
    },
    {
      title: nav.discover,
      links: [
        [L('/festival'), nav.festival],
        [L('/artistes'), nav.artists],
        [L('/disciplines'), nav.disciplines],
        [L('/france-laos'), nav.franceLaos],
        [L('/lieux'), nav.venues],
        [L('/partenaires'), nav.partners],
      ],
    },
    {
      title: nav.practical,
      links: [
        [L('/infos-pratiques'), nav.practical],
        [L('/faq'), nav.faq],
        [L('/contact'), nav.contact],
        [L('/presse'), nav.press],
        [L('/medias'), nav.media],
      ],
    },
  ]

  return (
    <footer className="on-dark bg-blue text-paper">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="display mt-8 max-w-sm text-3xl uppercase">{footer.tagline}</p>
          <div className="mt-8 max-w-md">
            <p className="kicker mb-4 text-tournesol">{dict.newsletter.title}</p>
            <NewsletterForm labels={dict.newsletter} locale={locale} dark />
          </div>
        </div>
        {cols.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="kicker mb-4 text-tournesol">{col.title}</h2>
            <ul className="space-y-1">
              {col.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="link-underline inline-flex min-h-10 items-center font-semibold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="overflow-hidden border-t border-paper/20" aria-hidden="true">
        <p className="display container-site py-6 text-[clamp(3rem,13vw,13rem)] whitespace-nowrap uppercase">
          <ShinyText>France–Laos</ShinyText>
        </p>
      </div>

      <div className="border-t border-paper/20">
        <div className="container-site flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-paper/80">
            <p className="font-bold text-paper">{footer.organizedBy}</p>
            <p>
              © 2026 Institut français du Laos. {footer.rights}{' '}
              <Link href={L('/mentions-legales')} className="underline underline-offset-4">
                {footer.legal}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="kicker">{footer.follow}</span>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  )
}
