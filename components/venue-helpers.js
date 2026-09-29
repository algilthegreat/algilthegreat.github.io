import { tr } from '@/lib/i18n/config'
import { venueKinds } from '@/lib/data/taxonomies'

export { tr }
export const venueKindsLabel = (kind, locale) => tr(venueKinds[kind], locale)
