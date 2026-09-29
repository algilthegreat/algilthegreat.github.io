import { ImageResponse } from 'next/og'
import { getEvent, getEvents } from '@/lib/data'
import { locales } from '@/lib/i18n/config'
import { formatDay, formatMonthShort, formatTime } from '@/lib/format'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Festival France–Laos 2026'
export const generateStaticParams = () => locales.flatMap((locale) => getEvents().map((e) => ({ locale, slug: e.slug })))

// Le moteur OG n'embarque pas de police lao : on utilise le titre anglais pour la version lao.
export default async function Image({ params }) {
  const { locale, slug } = await params
  const event = getEvent(slug)
  const l = locale === 'lo' ? 'en' : locale
  const title = event?.title[l] ?? 'Festival France–Laos 2026'
  const city = event?.city.name[l] ?? ''

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#3558A2', color: '#fff', padding: 64, position: 'relative', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', right: -120, top: -120, width: 520, height: 520, borderRadius: 999, background: event?.color ?? '#FFE552', display: 'flex' }} />
        <div style={{ position: 'absolute', right: 260, bottom: -80, width: 220, height: 220, borderRadius: 999, background: '#FFB7AE', display: 'flex' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 10, height: 64, background: '#FFE552', display: 'flex' }} />
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: 28, fontWeight: 900, letterSpacing: 2 }}>
              <span>FESTIVAL FRANCE–LAOS 2026</span>
              <span style={{ fontSize: 20, opacity: 0.8 }}>VIENTIANE × LUANG PRABANG</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 900 }}>
            {event && (
              <div style={{ fontSize: 44, fontWeight: 900, color: '#FFE552', display: 'flex' }}>
                {formatDay(event.start)} {formatMonthShort(event.start, l)} · {city} {formatTime(event.start) && `· ${formatTime(event.start)}`}
              </div>
            )}
            <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', marginTop: 12, display: 'flex' }}>{title}</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
