import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import { themeRoute } from '@/lib/theme-route'

const colors = ['#FFE552', '#FFB7AE', '#7AB1E8', '#99C221']

const route = themeRoute('jeunesse', ({ locale, dict }) => (
  <section className="container-site pb-16" aria-label={dict.themes.jeunesse.title}>
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {dict.youth.groups.map((g, i) => (
        <AnimatedContent as="li" key={g.title} delay={i * 0.08}>
          <div className="relative flex aspect-square flex-col justify-end overflow-hidden border-2 border-ink p-6">
            <span aria-hidden="true" className="absolute -top-10 -right-10 size-48 rounded-full" style={{ background: colors[i] }} />
            <h2 className="display relative text-4xl uppercase">{g.title}</h2>
            <p className="relative mt-2 text-lg">{g.text}</p>
          </div>
        </AnimatedContent>
      ))}
    </ul>
    <Link href={`/${locale}/contact`} className="btn-primary mt-8">
      {dict.youth.schoolsCta} <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  </section>
))

export const generateMetadata = route.generateMetadata
export default route.Page
