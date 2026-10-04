'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import FuzzyText from './reactbits/FuzzyText'
import Aurora from './reactbits/Aurora'
import ShinyText from './reactbits/ShinyText'

const copy = {
  fr: {
    kicker: 'Erreur 404',
    title: 'Vous vous êtes égaré entre deux rives',
    text: 'Cette page n’existe pas ou a été déplacée. Reprenez le fil du festival :',
    home: 'Retour à l’accueil',
    links: [['/programme', 'Programme'], ['/artistes', 'Artistes'], ['/lieux', 'Lieux'], ['/recherche', 'Rechercher']],
    hint: 'Passez la souris sur le 404',
  },
  en: {
    kicker: 'Error 404',
    title: 'You got lost between two riverbanks',
    text: 'This page does not exist or has moved. Pick up the festival again:',
    home: 'Back to home',
    links: [['/programme', 'Programme'], ['/artistes', 'Artists'], ['/lieux', 'Venues'], ['/recherche', 'Search']],
    hint: 'Hover over the 404',
  },
  lo: {
    kicker: 'ຂໍ້ຜິດພາດ 404',
    title: 'ທ່ານຫຼົງທາງລະຫວ່າງສອງຝັ່ງ',
    text: 'ໜ້ານີ້ບໍ່ມີ ຫຼື ຖືກຍ້າຍແລ້ວ. ກັບມາຕິດຕາມເທດສະການ:',
    home: 'ກັບໄປໜ້າຫຼັກ',
    links: [['/programme', 'ກຳນົດການ'], ['/artistes', 'ສິລະປິນ'], ['/lieux', 'ສະຖານທີ່'], ['/recherche', 'ຄົ້ນຫາ']],
    hint: 'ເລື່ອນເມົ້າໄປເທິງ 404',
  },
}

/** Page 404 : « 404 » flou animé (FuzzyText) sur fond Aurora, textes dans la langue de l'URL. */
export default function NotFoundView() {
  // 404.html est généré en français ; la langue réelle est lue dans l'URL après hydratation
  const [locale, setLocale] = useState('fr')
  useEffect(() => {
    const p = window.location.pathname
    const l = ['en', 'lo'].find((x) => p === `/${x}` || p.startsWith(`/${x}/`)) ?? 'fr'
    // 404.html (servi pour toute URL inconnue) a l'en-tête en français : on bascule sur la 404 de la bonne langue
    if (document.documentElement.lang !== l) window.location.replace(`/${l}/404`)
    else setLocale(l)
  }, [])
  const c = copy[locale]

  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper" lang={locale}>
      <Aurora colors={['#3558A2', '#7AB1E8', '#21AB88', '#FFE552']} className="opacity-60" />
      <div className="container-site relative flex min-h-[80vh] flex-col items-center justify-center py-20 text-center">
        <p className="kicker text-tournesol">{c.kicker}</p>
        <div className="mt-4 flex w-full justify-center" title={c.hint}>
          <FuzzyText label={`404 — ${c.title}`} color="#ffffff">404</FuzzyText>
        </div>
        <h1 className="display mt-6 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] uppercase">
          <ShinyText>{c.title}</ShinyText>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-paper/80">{c.text}</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {c.links.map(([href, label]) => (
            <li key={href}>
              <Link href={`/${locale}${href}`} className="inline-flex min-h-11 items-center border-2 border-paper/40 px-4 text-sm font-bold uppercase transition-colors hover:border-tournesol hover:text-tournesol">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={`/${locale}`} className="mt-8 inline-flex min-h-12 items-center gap-2 bg-tournesol px-6 text-sm font-black text-ink uppercase transition-transform hover:-translate-y-0.5">
          {c.home} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
