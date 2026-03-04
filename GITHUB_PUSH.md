# Nahrání projektu na GitHub (adambrousek/lec)

Repozitář je prázdný: https://github.com/adambrousek/lec

## 1. Přijmout licenci Xcode (jen jednou, pokud se zobrazuje chyba)

```bash
sudo xcodebuild -license
```

Projděte a zadejte `agree`.

## 2. Inicializace a první push

V Terminálu v adresáři projektu (`LEC web 2`):

```bash
cd "/Users/adambrousek/Desktop/LEC web 2"

# inicializace git (pokud ještě neproběhla)
git init

# připojení vzdáleného repozitáře
git remote add origin https://github.com/adambrousek/lec.git

# přidání všech souborů (node_modules a .zip jsou v .gitignore)
git add .

# první commit
git commit -m "Luxury Esthetic Clinic – statický web"

# odeslání na GitHub (větev main)
git branch -M main
git push -u origin main
```

Při `git push` se může zeptat na přihlášení do GitHubu (uživatel + heslo nebo osobní přístupový token).

## 3. Pokud už jste někdy v tomto adresáři spouštěli git init

Stačí zkontrolovat, že je nastavený remote, a push:

```bash
cd "/Users/adambrousek/Desktop/LEC web 2"
git remote -v
# pokud chybí origin:
# git remote add origin https://github.com/adambrousek/lec.git
git add .
git commit -m "Luxury Esthetic Clinic – statický web"
git branch -M main
git push -u origin main
```
