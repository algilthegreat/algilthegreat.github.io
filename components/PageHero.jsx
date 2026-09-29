import SplitText from './reactbits/SplitText'
import BlurText from './reactbits/BlurText'
import Breadcrumbs from './Breadcrumbs'

/**
 * En-tête de page « minimalisme exagéré » : très grande typographie, fort contraste,
 * pastille de couleur secondaire.
 */
export default function PageHero({ kicker, title, intro, color = '#FFE552', tone = 'light', crumbs, children, aside }) {
  const dark = tone === 'dark' || tone === 'blue'
  return (
    <header
      className={`relative overflow-hidden ${tone === 'blue' ? 'on-dark bg-blue text-paper' : tone === 'dark' ? 'on-dark bg-ink text-paper' : 'bg-paper text-ink'}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-[22rem] rounded-full opacity-90 md:size-[34rem]"
        style={{ background: color }}
      />
      <div className="container-site relative pt-8 pb-14 md:pt-12 md:pb-20">
        {crumbs && <Breadcrumbs items={crumbs} dark={dark} />}
        <div className="mt-10 grid gap-10 md:mt-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {kicker && <p className={`kicker mb-4 ${dark ? 'text-tournesol' : 'text-blue'}`}>{kicker}</p>}
            <SplitText as="h1" text={title} className="display block max-w-[16ch] text-[clamp(2.75rem,9vw,8.5rem)] uppercase" />
            {intro && <BlurText text={intro} className={`mt-8 max-w-2xl text-lg md:text-xl ${dark ? 'text-paper/85' : 'text-ink/80'}`} delay={0.3} />}
            {children}
          </div>
          {aside}
        </div>
      </div>
    </header>
  )
}
