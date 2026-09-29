import { themeRoute } from '@/lib/theme-route'

const route = themeRoute('rencontres')
export const generateMetadata = route.generateMetadata
export default route.Page
