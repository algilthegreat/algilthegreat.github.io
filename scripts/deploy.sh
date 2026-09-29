#!/usr/bin/env bash
# Construit le site en statique puis publie out/ sur la branche gh-pages (GitHub Pages).
# Usage : npm run deploy   (variables Formspree lues dans .env.local si présentes)
set -euo pipefail
cd "$(dirname "$0")/.."

export NEXT_PUBLIC_SITE_URL=https://algilthegreat.github.io
npx next build
# GitHub Pages sert 404.html pour toute URL inconnue : on reprend la 404 du site en français
cp out/fr/404.html out/404.html
touch out/.nojekyll

cd out
git init -q -b gh-pages
git config core.autocrlf false
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" \
  commit -q -m "Publication du $(date '+%Y-%m-%d %H:%M')"
git push -f "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git
echo "Publié : https://algilthegreat.github.io"
