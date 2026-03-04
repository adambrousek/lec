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
- `laserova-epilace.html` - Stránka laserové epilace
- `endosphere.html` - Stránka Endosphere Therapy
- `pripravujeme.html` - Připravované služby
- `permanentky.html` - Věrnostní program
- `vouchery.html` - Dárkové vouchery
- `o-klinice.html` - O klinice
- `cenik.html` - Ceník
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
