# Návod na nasazení webu

## Možnost 1: Netlify Drop (nejjednodušší - bez registrace)

1. Otevřete https://app.netlify.com/drop
2. Přetáhněte celou složku projektu na stránku
3. Netlify automaticky nasadí web a dá vám URL (např. `random-name.netlify.app`)
4. Můžete změnit název v nastavení

## Možnost 2: Vercel (také jednoduché)

1. Nainstalujte Vercel CLI: `npm i -g vercel`
2. V terminálu v této složce spusťte: `vercel`
3. Postupujte podle instrukcí
4. Web bude nasazen na `project-name.vercel.app`

## Možnost 3: GitHub Pages (zdarma, vyžaduje GitHub účet)

1. Vytvořte nový repozitář na GitHub.com
2. Nahrajte soubory (kromě node_modules)
3. V Settings > Pages vyberte branch `main` a složku `/ (root)`
4. Web bude na `username.github.io/repo-name`

## Co nahrát na hosting:

Nahrajte tyto soubory:
- index.html
- sluzby.html
- Všechny stránky služeb (microneedling.html, skin-treatments.html, laserova-epilace.html, ipl-lumecca.html, morpheus8.html, endosphere.html, vyplne.html, vyhlazeni-vrasek.html, mezoterapie.html, biorevitalizace.html, infuzni-terapie.html)
- predplacene-plany-vouchery.html
- pripravujeme.html
- kariera.html
- kontakt.html
- styles.css
- script.js
- složka assets/ (logo)

NENAHRAVAT:
- node_modules/
- package.json
- .gitignore
- README.md
- PROMPT.md
