/** Raccourci pour les supports imprimés : /fr/ouverture → soirée d'ouverture du 3 novembre. */
import RedirectTo from '@/components/RedirectTo'

export const metadata = { robots: { index: false } }

export default async function Ouverture({ params }) {
  const { locale } = await params
  return <RedirectTo href={`/${locale}/programme/3-novembre`} />
}
