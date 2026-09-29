import { Figtree, Noto_Sans_Lao } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ClickSpark from '@/components/reactbits/ClickSpark'
import { locales, localeMeta, tr } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n'
import { disciplines } from '@/lib/data'
import { SITE_URL, SITE_NAME, organizationLd } from '@/lib/seo'

const figtree = Figtree({ subsets: ['latin', 'latin-ext'], variable: '--font-figtree', display: 'swap' })
const notoLao = Noto_Sans_Lao({ subsets: ['lao'], variable: '--font-lao', display: 'swap' })

export const dynamicParams = false
export const generateStaticParams = () => locales.map((locale) => ({ locale }))

export const viewport = {
  themeColor: '#3558A2',
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    description: dict.meta.home,
    authors: [{ name: 'Institut français du Laos' }],
    keywords: ['Festival France Laos', 'Institut français du Laos', 'Vientiane', 'Luang Prabang', 'festival 2026', 'culture', 'concert', 'cinéma', 'exposition', 'ເທດສະການ'],
    formatDetection: { telephone: false },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
    icons: {
      icon: [
        { url: '/favicon.ico?v=2', sizes: '48x48' },
        { url: '/icon-96.png?v=2', sizes: '96x96', type: 'image/png' },
        { url: '/icon.svg?v=2', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.png?v=2',
    },
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const disciplineLinks = disciplines.map((d) => ({ slug: d.slug, label: tr(d.label, locale), color: d.color }))

  return (
    <html lang={localeMeta[locale].htmlLang} className={`${figtree.variable} ${notoLao.variable}`}>
      <body className="min-h-screen font-sans">
        <JsonLd
          data={[
            organizationLd,
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              name: SITE_NAME,
              url: `${SITE_URL}/${locale}`,
              inLanguage: locales,
              publisher: { '@id': `${SITE_URL}/#organization` },
              potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE_URL}/${locale}/recherche?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            },
          ]}
        />
        <ClickSpark>
          <Header locale={locale} nav={dict.nav} searchLabels={{ ...dict.search, close: dict.nav.close }} disciplines={disciplineLinks} />
          <main id="contenu" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer locale={locale} dict={dict} />
        </ClickSpark>
      </body>
    </html>
  )
}
