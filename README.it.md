<p align="center">
  <img src="docs/assets/readme-hero.svg" alt="Solitario — il classico Klondike, giocabile nel browser" width="100%"/>
</p>

# Solitario

<p align="center">
  <a href="README.md"><img src="https://img.shields.io/badge/🇺🇸_English-131a26?style=for-the-badge" alt="English"/></a>
  <a href="README.es.md"><img src="https://img.shields.io/badge/🇪🇸_Español-131a26?style=for-the-badge" alt="Español"/></a>
  <a href="README.fr.md"><img src="https://img.shields.io/badge/🇫🇷_Français-131a26?style=for-the-badge" alt="Français"/></a>
  <a href="README.de.md"><img src="https://img.shields.io/badge/🇩🇪_Deutsch-131a26?style=for-the-badge" alt="Deutsch"/></a>
  <a href="README.pt-BR.md"><img src="https://img.shields.io/badge/🇧🇷_Português-131a26?style=for-the-badge" alt="Português"/></a>
  <a href="README.zh-CN.md"><img src="https://img.shields.io/badge/🇨🇳_中文-131a26?style=for-the-badge" alt="中文"/></a>
  <a href="README.ja.md"><img src="https://img.shields.io/badge/🇯🇵_日本語-131a26?style=for-the-badge" alt="日本語"/></a>
  <a href="README.ko.md"><img src="https://img.shields.io/badge/🇰🇷_한국어-131a26?style=for-the-badge" alt="한국어"/></a>
  <a href="README.it.md"><img src="https://img.shields.io/badge/🇮🇹_Italiano-d4af37?style=for-the-badge" alt="Italiano"/></a>
  <a href="README.ar.md"><img src="https://img.shields.io/badge/🇸🇦_العربية-131a26?style=for-the-badge" alt="العربية"/></a>
</p>

<p align="center">
  <img src="docs/assets/card-flip.svg" alt="Diagramma animato: una carta si gira per rivelare l'Asso di Picche" width="320"/>
</p>

<p align="center">
  <a href="https://dacameragirl.github.io/Solitaire/"><img src="https://img.shields.io/badge/🌐_Demo_live-d4af37?style=for-the-badge" alt="Demo live"/></a>
  <img src="https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

**Il classico solitario Klondike, direttamente nel tuo browser.** Trascina e
rilascia le carte, scegli uno stile di mazzo, scegli un colore del tavolo,
prova una missione sfida, e gioca con musica e suono. Nessuna installazione,
nessuna build, nessuna dipendenza — solo HTML, CSS e JavaScript puro.

Live: [dacameragirl.github.io/Solitaire](https://dacameragirl.github.io/Solitaire/)

---

## Funzionalità

| Funzionalità | Cosa fa |
|---|---|
| **Trascinamento reale** | Prendi una carta e rilasciala dove deve andare, senza clic-poi-clic |
| **Fondazione automatica** | Un semplice clic su una carta la invia direttamente alla sua fondazione se c'è un posto valido — un Asso, ad esempio, va da solo a casa |
| **4 stili di mazzo** | Classico, Royal (avorio/serif/filigrana dorata), Minimalista e Neon — la tua scelta viene ricordata |
| **5 colori del tavolo** | Verde feltro, Viola, Blu navy, Bordeaux, Antracite — anch'essi ricordati |
| **Missioni sfida** | Corsa veloce (vinci in meno di 60 mosse), Nessun ripescaggio (non riciclare mai lo scarto), Corsa agli Assi (tutti e 4 gli Assi in fondazione entro la mossa 15) |
| **Musica e suono** | Una colonna sonora ambientale in loop attivabile, più effetti sonori per pescare, posare una carta, una mossa non valida e vincere |
| **Festeggiamento vittoria** | Un'esplosione di coriandoli e una fanfara quando completi il tabellone |

## Come si gioca

- Trascina una carta e rilasciala su una fondazione o un'altra colonna del
  tabellone per spostarla.
- Un semplice clic (senza trascinare) su una carta la invia automaticamente
  alla sua fondazione, se c'è un posto legale — è il modo veloce per liberare
  Assi e carte basse.
- Le carte vanno su una fondazione in ordine crescente per seme, iniziando
  dall'Asso.
- Le carte si spostano su un'altra colonna sopra una carta di colore opposto
  di un rango superiore (o su una colonna vuota con un Re).
- Clicca sul mazzo per pescare una carta nello scarto; clicca di nuovo quando
  è vuoto per riciclare lo scarto nel mazzo.
- Vinci spostando tutte le 52 carte nelle quattro fondazioni.

## Eseguire in locale

Nessuna installazione necessaria — apri `index.html` direttamente in un
browser, oppure servi la cartella con qualsiasi server di file statici:

```bash
python -m http.server 8000
```

Poi visita `http://localhost:8000`.

## Distribuzione

GitHub Pages serve questo repository direttamente dalla radice del branch
`main` — nessuna build, quindi ogni push su `main` va online automaticamente.

## Collaboratori

- Angela — direzione di prodotto, test
- Claude — implementazione e workflow GitHub

## Note legali

Tutto funziona interamente nel tuo browser. Nessun account, nessuna raccolta
dati, nessun server — lo stato della partita vive solo nella pagina e, per le
tue preferenze di mazzo/tavolo, nell'archiviazione locale del browser.
