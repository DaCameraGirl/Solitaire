const SUITS = ["spades", "hearts", "diamonds", "clubs"];
const SUIT_SYMBOLS = { spades: "♠", hearts: "♥", diamonds: "♦", clubs: "♣" };
const RED_SUITS = ["hearts", "diamonds"];
const RANK_LABELS = { 1: "A", 11: "J", 12: "Q", 13: "K" };

let stock = [];
let waste = [];
let foundations = { spades: [], hearts: [], diamonds: [], clubs: [] };
let tableau = [];
let selection = null;
let moveCount = 0;

function createDeck() {
  const deck = [];
  let id = 0;
  for (const suit of SUITS) {
    for (let rank = 1; rank <= 13; rank++) {
      deck.push({ suit, rank, id: id++ });
    }
  }
  return deck;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function isRed(card) {
  return RED_SUITS.includes(card.suit);
}

function cardLabel(card) {
  return (RANK_LABELS[card.rank] || String(card.rank)) + SUIT_SYMBOLS[card.suit];
}

function dealNewGame() {
  const deck = createDeck();
  shuffle(deck);

  stock = [];
  waste = [];
  foundations = { spades: [], hearts: [], diamonds: [], clubs: [] };
  tableau = Array.from({ length: 7 }, () => []);
  moveCount = 0;
  selection = null;

  let idx = 0;
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row <= col; row++) {
      const card = deck[idx++];
      tableau[col].push({ card, faceUp: row === col });
    }
  }
  stock = deck.slice(idx).map((card) => ({ card }));

  document.getElementById("win-overlay").classList.add("hidden");
  render();
}

function getCardOffsetStep() {
  const cardH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--card-h"));
  return cardH * 0.28;
}

function makeCardEl(card, faceUp) {
  const el = document.createElement("div");
  el.className = `card ${faceUp ? (isRed(card) ? "red" : "black") : "face-down"}`;
  el.dataset.cardId = card.id;
  if (faceUp) {
    const label = cardLabel(card);
    el.innerHTML = `<div class="corner top">${label}</div><div class="corner bottom">${label}</div>`;
  }
  return el;
}

function render() {
  renderStock();
  renderWaste();
  renderFoundations();
  renderTableau();
  document.getElementById("move-count").textContent = `Moves: ${moveCount}`;
  checkWin();
}

function renderStock() {
  const el = document.getElementById("stock");
  el.innerHTML = "";
  if (stock.length > 0) {
    el.appendChild(makeCardEl(stock[stock.length - 1].card, false));
  } else if (waste.length > 0) {
    const hint = document.createElement("div");
    hint.className = "recycle-hint";
    hint.textContent = "↺";
    el.appendChild(hint);
  }
}

function renderWaste() {
  const el = document.getElementById("waste");
  el.innerHTML = "";
  if (waste.length > 0) {
    const topCard = waste[waste.length - 1];
    const cardEl = makeCardEl(topCard, true);
    if (selection && selection.pile === "waste") cardEl.classList.add("selected");
    el.appendChild(cardEl);
  }
}

function renderFoundations() {
  document.querySelectorAll(".foundation").forEach((pileEl) => {
    const suit = pileEl.dataset.suit;
    pileEl.innerHTML = "";
    pileEl.dataset.suitSymbol = SUIT_SYMBOLS[suit];
    const stack = foundations[suit];
    if (stack.length > 0) {
      pileEl.appendChild(makeCardEl(stack[stack.length - 1], true));
    }
  });
}

function renderTableau() {
  const container = document.getElementById("tableau");
  container.innerHTML = "";
  const offsetStep = getCardOffsetStep();
  const cardH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--card-h"));

  tableau.forEach((column, colIndex) => {
    const colEl = document.createElement("div");
    colEl.className = "tableau-column";
    colEl.dataset.col = String(colIndex);

    column.forEach((entry, cardIndex) => {
      const cardEl = makeCardEl(entry.card, entry.faceUp);
      cardEl.style.top = `${cardIndex * offsetStep}px`;
      cardEl.style.zIndex = String(cardIndex);
      cardEl.dataset.col = String(colIndex);
      cardEl.dataset.index = String(cardIndex);
      if (
        selection &&
        selection.pile === "tableau" &&
        selection.col === colIndex &&
        cardIndex >= selection.index
      ) {
        cardEl.classList.add("selected");
      }
      colEl.appendChild(cardEl);
    });

    colEl.style.minHeight = `${Math.max(1, column.length) * offsetStep + cardH}px`;
    container.appendChild(colEl);
  });
}

function getSelectedCard() {
  if (!selection) return null;
  if (selection.pile === "waste") return waste[waste.length - 1];
  if (selection.pile === "tableau") return tableau[selection.col][selection.index].card;
  return null;
}

function isSelectionSingleCard() {
  if (!selection) return false;
  if (selection.pile === "waste") return true;
  if (selection.pile === "tableau") {
    const col = tableau[selection.col];
    return selection.index === col.length - 1;
  }
  return false;
}

function canPlaceOnFoundation(card, suit) {
  if (card.suit !== suit) return false;
  const stack = foundations[suit];
  const topRank = stack.length ? stack[stack.length - 1].rank : 0;
  return card.rank === topRank + 1;
}

function canPlaceOnTableau(card, destColIndex) {
  const destCol = tableau[destColIndex];
  if (destCol.length === 0) return card.rank === 13;
  const top = destCol[destCol.length - 1];
  if (!top.faceUp) return false;
  return isRed(card) !== isRed(top.card) && card.rank === top.card.rank - 1;
}

function moveSelectedCardTo(dest) {
  let movingCards = [];
  if (selection.pile === "waste") {
    movingCards = [waste.pop()];
  } else if (selection.pile === "tableau") {
    const col = tableau[selection.col];
    movingCards = col.splice(selection.index).map((entry) => entry.card);
    if (col.length > 0) col[col.length - 1].faceUp = true;
  }

  if (dest.type === "foundation") {
    foundations[dest.suit].push(...movingCards);
  } else if (dest.type === "tableau") {
    movingCards.forEach((card) => tableau[dest.col].push({ card, faceUp: true }));
  }
  moveCount++;
}

function onStockClick() {
  if (stock.length > 0) {
    const { card } = stock.pop();
    waste.push(card);
  } else if (waste.length > 0) {
    stock = waste.reverse().map((card) => ({ card }));
    waste = [];
  }
  selection = null;
  render();
}

function onWasteClick() {
  if (waste.length === 0) return;
  selection = selection && selection.pile === "waste" ? null : { pile: "waste" };
  render();
}

function onFoundationClick(e) {
  const pileEl = e.target.closest(".foundation");
  if (!pileEl || !selection) return;
  const suit = pileEl.dataset.suit;
  const card = getSelectedCard();
  if (card && isSelectionSingleCard() && canPlaceOnFoundation(card, suit)) {
    moveSelectedCardTo({ type: "foundation", suit });
  }
  selection = null;
  render();
}

function attemptMoveToColumn(destCol) {
  const card = getSelectedCard();
  if (!card) {
    selection = null;
    render();
    return;
  }
  if (selection.pile === "tableau" && selection.col === destCol) {
    selection = null;
    render();
    return;
  }
  if (canPlaceOnTableau(card, destCol)) {
    moveSelectedCardTo({ type: "tableau", col: destCol });
  }
  selection = null;
  render();
}

function onTableauClick(e) {
  const colEl = e.target.closest(".tableau-column");
  if (!colEl) return;
  const colIndex = parseInt(colEl.dataset.col, 10);
  const cardEl = e.target.closest(".card");

  if (cardEl) {
    const cardCol = parseInt(cardEl.dataset.col, 10);
    const cardIndex = parseInt(cardEl.dataset.index, 10);
    const entry = tableau[cardCol][cardIndex];

    if (!entry.faceUp) return;

    if (selection && selection.pile === "tableau" && selection.col === cardCol && selection.index === cardIndex) {
      selection = null;
      render();
      return;
    }

    if (selection) {
      attemptMoveToColumn(cardCol);
      return;
    }

    selection = { pile: "tableau", col: cardCol, index: cardIndex };
    render();
    return;
  }

  if (selection) {
    attemptMoveToColumn(colIndex);
  }
}

function checkWin() {
  const total = Object.values(foundations).reduce((sum, arr) => sum + arr.length, 0);
  if (total === 52) {
    document.getElementById("win-stats").textContent = `Completed in ${moveCount} moves.`;
    document.getElementById("win-overlay").classList.remove("hidden");
  }
}

document.getElementById("stock").addEventListener("click", onStockClick);
document.getElementById("waste").addEventListener("click", onWasteClick);
document.getElementById("foundations").addEventListener("click", onFoundationClick);
document.getElementById("tableau").addEventListener("click", onTableauClick);
document.getElementById("new-game-btn").addEventListener("click", dealNewGame);
document.getElementById("win-new-game-btn").addEventListener("click", dealNewGame);

dealNewGame();
