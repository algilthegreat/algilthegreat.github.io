/** Fabrique de route pour une page thématique (metadata + page). */
import ThemePage from '@/components/ThemePage'
import { getDictionary } from './i18n'
import { buildMetadata } from './seo'
import { themes } from './themes'

export function themeRoute(key, extra) {
  const theme = themes[key]
  return {
    async generateMetadata({ params }) {
      const { locale } = await params
      const dict = getDictionary(locale)
      const t = dict.themes[key]
      return buildMetadata({ locale, path: theme.path, title: t.title, description: t.intro })
    },
    async Page({ params }) {
      const { locale } = await params
      const dict = getDictionary(locale)
      return (
        <ThemePage locale={locale} dict={dict} theme={dict.themes[key]} path={theme.path} events={theme.select()} color={theme.color} variant={theme.variant}>
          {extra?.({ locale, dict })}
        </ThemePage>
      )
    },
  }
}
