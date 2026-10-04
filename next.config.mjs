import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  const dev = phase === PHASE_DEVELOPMENT_SERVER
  return {
    // Export statique pour GitHub Pages : pas de serveur Node, le site est généré dans out/.
    // Désactivé en `next dev`, où l'export ferait échouer toute URL inconnue au lieu d'afficher la 404.
    output: dev ? undefined : 'export',
    images: { unoptimized: true },
    poweredByHeader: false,
    // En production, public/index.html redirige « / » vers la langue du navigateur ;
    // `next dev` ne sert pas ce fichier à la racine, d'où cette redirection équivalente.
    ...(dev && { redirects: async () => [{ source: '/', destination: '/fr', permanent: false }] }),
  }
}
