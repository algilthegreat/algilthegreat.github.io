import { themeRoute } from '@/lib/theme-route'

const route = themeRoute('musique')
export const generateMetadata = route.generateMetadata
export default route.Page
