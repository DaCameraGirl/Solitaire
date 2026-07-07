<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="Solitaire — classic Klondike, playable in the browser" width="100%"/>
</p>

# Solitaire

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-d4af37?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-131a26?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="Animated diagram: a card flipping from its back to reveal the Ace of Spades" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_Live_Demo-d4af37?style=for-the-badge" alt="Live demo"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**Classic Klondike solitaire, playable right in your browser.** Drag and drop cards,
pick a deck style, pick a table color, try a challenge mission, and play with music
and sound on. No install, no build step, no dependencies — just HTML, CSS, and
vanilla JavaScript.

Live: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## Features

| Feature | What it does |
|---|---|
| **Real drag-and-drop** | Pick up a card and drop it where it belongs — no click-then-click |
| **Auto-foundation** | A plain click on a card sends it straight to its foundation if there's a valid spot, e.g. an Ace goes home by itself |
| **4 deck styles** | Classic, Royal (ivory/serif/gold watermark), Minimalist, and Neon — your choice is remembered next time |
| **5 table colors** | Green Felt, Purple, Navy, Burgundy, Charcoal — also remembered |
| **Challenge missions** | Speed Run (win under 60 moves), No Redraw (never recycle the waste), Ace Rush (all 4 Aces home by move 15) — layered on top of normal play |
| **Music &amp; sound** | A toggleable looping ambient soundtrack, plus sound effects for drawing, landing a card, an invalid move, and winning |
| **Win celebration** | A confetti burst and fanfare when you clear the board |

## How to play

- Drag a card and drop it on a foundation or another tableau column to move it.
- A plain click (no drag) on a card sends it straight to its foundation automatically,
  if there's a legal spot — this is the fast way to clear Aces and low cards.
- Cards move to a foundation in ascending order by suit, starting with the Ace.
- Cards move to another tableau column on a card of the opposite color one rank
  higher (or onto an empty column with a King).
- Click the stock pile to draw a card into the waste pile; click it again once
  empty to recycle the waste back into the stock.
- Win by moving all 52 cards to the four foundations.

## Run locally

No install needed — open `index.html` directly in a browser, or serve the folder
with any static file server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

GitHub Pages serves this repo directly from the `main` branch root — no build
step, so any push to `main` goes live automatically.

## Contributors

- Angela — product direction, testing
- Claude — implementation and GitHub workflow

## Legal

Everything runs entirely in your browser. No accounts, no data collection, no
server — your game state lives only in the page and, for your deck/table
preferences, in your browser's local storage.
