import { ImageResponse } from 'next/og'
import { locales } from '@/lib/i18n/config'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Festival France–Laos 2026 — Vientiane × Luang Prabang — 3 → 21 novembre'
export const generateStaticParams = () => locales.map((locale) => ({ locale }))

const COLORS = ['#FFE552', '#21AB88', '#869ECE', '#FF9575', '#7AB1E8', '#99C221', '#FFB7AE']

export default async function Image({ params }) {
  const { locale } = await params
  const dates = locale === 'fr' ? '3 → 21 NOVEMBRE 2026' : '3 → 21 NOVEMBER 2026'
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#3558A2', color: '#fff', padding: 64, position: 'relative', fontFamily: 'sans-serif' }}>
        {COLORS.map((c, i) => {
          const a = (i / COLORS.length) * Math.PI * 2 - Math.PI / 2
          return (
            <div
              key={c}
              style={{ position: 'absolute', width: 130, height: 130, borderRadius: 999, background: c, left: 870 + Math.cos(a) * 170, top: 250 + Math.sin(a) * 170, display: 'flex' }}
            />
          )
        })}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: 6, display: 'flex' }}>FESTIVAL</div>
          <div style={{ fontSize: 110, fontWeight: 900, lineHeight: 1, display: 'flex' }}>FRANCE–LAOS</div>
          <div style={{ fontSize: 110, fontWeight: 900, lineHeight: 1, color: '#FFE552', display: 'flex' }}>2026</div>
          <div style={{ fontSize: 40, fontWeight: 900, marginTop: 30, display: 'flex' }}>{dates}</div>
          <div style={{ fontSize: 28, fontWeight: 700, marginTop: 8, letterSpacing: 4, display: 'flex' }}>VIENTIANE × LUANG PRABANG</div>
        </div>
      </div>
    ),
    size,
  )
}
