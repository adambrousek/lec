# Luxury Esthetic - Jednoduchý HTML web

Jednoduché statické HTML stránky pro Luxury Esthetic kliniku.

## Jak otevřít

1. **Otevřete `index.html` v prohlížeči**
   - Dvojklik na soubor `index.html`
   - Nebo pravý klik → Otevřít v prohlížeči

2. **Nebo použijte jednoduchý server:**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (pokud máte npx)
   npx serve
   ```
   Pak otevřete: http://localhost:8000

## Struktura

- `index.html` - Homepage
- `sluzby.html` - Přehled všech služeb
- Stránky služeb (popis + ceník na každé): `microneedling.html`, `skin-treatments.html`, `laserova-epilace.html`, `ipl-lumecca.html`, `morpheus8.html`, `endosphere.html`, `vyplne.html`, `vyhlazeni-vrasek.html`, `mezoterapie.html`, `biorevitalizace.html`, `infuzni-terapie.html`
- `predplacene-plany-vouchery.html` - Předplacené plány a vouchery
- `pripravujeme.html` - Připravované služby
- `kariera.html` - Kariéra
- `kontakt.html` - Kontakt
- `styles.css` - Všechny styly
- `script.js` - JavaScript pro menu a formuláře

## Úprava obsahu

Jednoduše otevřete HTML soubory v textovém editoru a upravte text přímo v HTML.

## Barvy (brand guidelines)

- Světlá béžová: `#F0EBE9`
- Tmavá modrošedá: `#38424F`
- Světle modrá: `#9CC6EB`

Barvy jsou definované v `styles.css` jako CSS proměnné.

## Design

- Čistý, luxusní vzhled
- Serif nadpisy, sans-serif text
- Responzivní design (mobile-first)
- Brand barvy podle guidelines
