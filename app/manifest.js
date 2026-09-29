export const dynamic = 'force-static'

export default function manifest() {
  return {
    name: 'Festival France–Laos 2026',
    short_name: 'France–Laos 26',
    description: 'Vientiane × Luang Prabang · 3 → 21 novembre 2026 · Institut français du Laos',
    start_url: '/fr',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3558A2',
    icons: [
      { src: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  }
}
