// Après `next build` : remplace la 404 générique de Next (out/404.html) par la page 404 du site.
// Elle est servie pour toute URL inconnue (GitHub Pages, `npx serve`, Apache via .htaccess) et
// s'affiche ensuite dans la langue de l'URL (fr, en ou lo).
import { copyFileSync, existsSync } from 'node:fs'

const src = 'out/fr/404.html'
if (existsSync(src)) {
  copyFileSync(src, 'out/404.html')
  console.log('404 du site copiée vers out/404.html')
}
