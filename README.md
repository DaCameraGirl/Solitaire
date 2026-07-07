# Solitaire

Classic Klondike solitaire, playable in the browser. No build step, no
dependencies, no backend — just HTML, CSS, and vanilla JavaScript.

Live: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

## How to play

- Click the stock pile (top-left) to draw a card into the waste pile.
- Click a face-up card to select it, then click a foundation or another
  tableau column to move it there.
- Cards move to a foundation in ascending order by suit, starting with
  the Ace.
- Cards move to another tableau column on a card of the opposite color
  one rank higher (or onto an empty column with a King).
- Click the selected card again to deselect it.
- Win by moving all 52 cards to the four foundations.

## Run locally

No install needed — open `index.html` directly in a browser, or serve
the folder with any static file server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

GitHub Pages serves this repo directly from the `main` branch root —
no build step, so any push to `main` goes live automatically.
