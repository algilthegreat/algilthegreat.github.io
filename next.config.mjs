import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    // Export statique pour GitHub Pages : pas de serveur Node, le site est généré dans out/.
    // Désactivé en `next dev`, où l'export ferait échouer toute URL inconnue au lieu d'afficher la 404.
    output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : 'export',
    images: { unoptimized: true },
    poweredByHeader: false,
  }
}
