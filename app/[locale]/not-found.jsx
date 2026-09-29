import Link from 'next/link'
import HeroCircles from '@/components/HeroCircles'

// Rendu dans le layout de langue ; textes trilingues car la langue n'est pas transmise ici.
export default function NotFound() {
  return (
    <section className="container-site grid min-h-[70vh] items-center gap-10 py-20 md:grid-cols-2">
      <div>
        <p className="display text-[clamp(6rem,20vw,14rem)] text-blue">404</p>
        <h1 className="display text-4xl uppercase">Page introuvable · Page not found · ບໍ່ພົບໜ້ານີ້</h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/fr" className="btn-dark">Accueil</Link>
          <Link href="/en" className="btn-outline">Home</Link>
          <Link href="/lo" className="btn-outline">ໜ້າຫຼັກ</Link>
        </div>
      </div>
      <HeroCircles className="mx-auto w-full max-w-sm" />
    </section>
  )
}
