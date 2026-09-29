/** Raccourci pour les supports imprimés : /fr/mon-festival → agenda personnel. */
import RedirectTo from '@/components/RedirectTo'

export const metadata = { robots: { index: false } }

export default async function MonFestival({ params }) {
  const { locale } = await params
  return <RedirectTo href={`/${locale}/agenda`} />
}
