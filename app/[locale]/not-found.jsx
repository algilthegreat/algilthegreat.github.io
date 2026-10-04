import NotFoundView from '@/components/NotFoundView'

// Rendu dans le layout de langue ; la langue est déduite de l'URL côté client (non transmise ici).
export default function NotFound() {
  return <NotFoundView />
}
