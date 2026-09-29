import { themeRoute } from '@/lib/theme-route'

const route = themeRoute('expositions')
export const generateMetadata = route.generateMetadata
export default route.Page
