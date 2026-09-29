import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

export default function robots() {
  return {
    // /agenda et /recherche restent crawlables pour que leur balise noindex soit lue
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
