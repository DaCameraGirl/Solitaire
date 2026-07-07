<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="Solitaire — der klassische Klondike, spielbar im Browser" width="100%"/>
</p>

# Solitaire

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-d4af37?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="Animierte Grafik: eine Karte dreht sich um und zeigt das Pik-Ass" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_Live_Demo-d4af37?style=for-the-badge" alt="Live-Demo"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**Der klassische Klondike-Solitaire, direkt im Browser.** Karten per Drag-and-Drop
bewegen, einen Kartendeck-Stil wählen, eine Tischfarbe wählen, eine
Herausforderungs-Mission ausprobieren und mit Musik und Sound spielen. Keine
Installation, kein Build-Schritt, keine Abhängigkeiten — nur HTML, CSS und
reines JavaScript.

Live: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## Funktionen

| Funktion | Was sie tut |
|---|---|
| **Echtes Drag-and-Drop** | Karte greifen und dort ablegen, wo sie hingehört — kein Klick-dann-Klick |
| **Automatisches Fundament** | Ein einfacher Klick auf eine Karte schickt sie direkt zu ihrem Fundament, wenn ein gültiger Platz existiert — ein Ass geht z. B. von allein nach Hause |
| **4 Kartendeck-Stile** | Klassisch, Königlich (Elfenbein/Serif/Gold-Wasserzeichen), Minimalistisch und Neon — deine Wahl wird gemerkt |
| **5 Tischfarben** | Grüner Filz, Violett, Marineblau, Bordeaux, Anthrazit — werden ebenfalls gemerkt |
| **Herausforderungs-Missionen** | Speed Run (Sieg unter 60 Zügen), Kein Nachziehen (Ablagestapel nie recyceln), Ass-Rennen (alle 4 Asse bis Zug 15 im Fundament) |
| **Musik &amp; Sound** | Ein umschaltbarer Ambient-Soundtrack in Dauerschleife, plus Soundeffekte beim Ziehen, Ablegen einer Karte, einem ungültigen Zug und beim Gewinnen |
| **Sieges-Feier** | Ein Konfetti-Ausbruch und Fanfare, wenn das Spielfeld geräumt ist |

## So wird gespielt

- Eine Karte per Drag-and-Drop auf ein Fundament oder eine andere Tableau-Spalte
  ziehen, um sie zu bewegen.
- Ein einfacher Klick (ohne Ziehen) auf eine Karte schickt sie automatisch
  direkt zu ihrem Fundament, wenn ein legaler Platz existiert — der schnelle
  Weg, um Asse und niedrige Karten loszuwerden.
- Karten wandern in aufsteigender Reihenfolge nach Farbe auf ein Fundament,
  beginnend mit dem Ass.
- Karten wandern auf eine andere Tableau-Spalte auf eine Karte der
  entgegengesetzten Farbe eine Stufe höher (oder auf eine leere Spalte mit
  einem König).
- Auf den Nachziehstapel klicken, um eine Karte auf den Ablagestapel zu ziehen;
  erneut klicken, wenn er leer ist, um den Ablagestapel zurück in den
  Nachziehstapel zu recyceln.
- Gewinnen, indem alle 52 Karten auf die vier Fundamente gebracht werden.

## Lokal ausführen

Keine Installation nötig — `index.html` direkt im Browser öffnen, oder den
Ordner mit einem beliebigen statischen Dateiserver bereitstellen:

```bash
python -m http.server 8000
```

Dann `http://localhost:8000` aufrufen.

## Deployment

GitHub Pages liefert dieses Repository direkt aus der Wurzel des
`main`-Branches aus — kein Build-Schritt, jeder Push auf `main` geht also
automatisch live.

## Mitwirkende

- Angela — Produktrichtung, Tests
- Claude — Implementierung und GitHub-Workflow

## Rechtliches

Alles läuft vollständig in deinem Browser. Keine Konten, keine
Datensammlung, kein Server — dein Spielstand existiert nur auf der Seite und,
für deine Kartendeck-/Tisch-Einstellungen, im lokalen Speicher deines
Browsers.
