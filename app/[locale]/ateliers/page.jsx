import { themeRoute } from '@/lib/theme-route'

const route = themeRoute('ateliers')
export const generateMetadata = route.generateMetadata
export default route.Page
