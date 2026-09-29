/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique pour GitHub Pages : pas de serveur Node, le site est généré dans out/
  output: 'export',
  images: { unoptimized: true },
  poweredByHeader: false,
}

export default nextConfig
