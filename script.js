const SUITS = ["spades", "hearts", "diamonds", "clubs"];
const SUIT_SYMBOLS = { spades: "♠", hearts: "♥", diamonds: "♦", clubs: "♣" };
const RED_SUITS = ["hearts", "diamonds"];
const RANK_LABELS = { 1: "A", 11: "J", 12: "Q", 13: "K" };
const DRAG_THRESHOLD = 4;

let stock = [];
let waste = [];
let foundations = { spades: [], hearts: [], diamonds: [], clubs: [] };
let tableau = [];
let moveCount = 0;
let drag = null;

const MISSIONS = {
  none: { label: "Free Play" },
  speed: { label: "Speed Run (under 60 moves)" },
  noredraw: { label: "No Redraw (never recycle the waste)" },
  acerush: { label: "Ace Rush (all 4 Aces home by move 15)" },
};

let currentDeck = "classic";
let currentTable = "green";
try {
  currentDeck = localStorage.getItem("solitaire_deck") || "classic";
  currentTable = localStorage.getItem("solitaire_table") || "green";
} catch (err) {
  // localStorage unavailable (private mode, etc.) — defaults are fine.
}
let currentMission = "none";
let missionStatus = "active"; // "active" | "success" | "failed"
let usedRedraw = false;

// ==========================================
// SOUND EFFECTS & AMBIENT MUSIC (Web Audio)
// ==========================================
let audioCtx = null;
let musicPlaying = false;
let musicChordIndex = 0;
let musicTimeoutId = null;

const MUSIC_CHORDS = [
  [110.0, 130.81, 164.81], // A minor
  [87.31, 110.0, 130.81], // F major
  [130.81, 164.81, 196.0], // C major
  [98.0, 123.47, 146.83], // G major
];

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function playTone(freq, duration, type = "sine", peakGain = 0.2, startDelay = 0) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    const t0 = ctx.currentTime + startDelay;
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(peakGain, t0 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  } catch (err) {
    // Web Audio unavailable or blocked — fail silently, gameplay still works.
  }
}

function playDrawSound() {
  playTone(520, 0.08, "square", 0.12);
}

function playLandSound() {
  playTone(340, 0.1, "sine", 0.18);
  playTone(680, 0.08, "sine", 0.08, 0.02);
}

function playInvalidSound() {
  playTone(140, 0.15, "sawtooth", 0.12);
}

function playWinFanfare() {
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
  notes.forEach((freq, i) => playTone(freq, 0.28, "triangle", 0.16, i * 0.12));
}

function playMusicChord(freqs) {
  freqs.forEach((freq, i) => playTone(freq, 1.8, "sine", 0.045, i * 0.03));
  playTone(freqs[0] * 2, 1.6, "triangle", 0.025, 0.05);
}

function scheduleNextMusicChord() {
  if (!musicPlaying) return;
  playMusicChord(MUSIC_CHORDS[musicChordIndex]);
  musicChordIndex = (musicChordIndex + 1) % MUSIC_CHORDS.length;
  musicTimeoutId = setTimeout(scheduleNextMusicChord, 2000);
}

function toggleMusic() {
  musicPlaying = !musicPlaying;
  const btn = document.getElementById("music-toggle-btn");
  if (musicPlaying) {
    btn.textContent = "🎵 Music: On";
    scheduleNextMusicChord();
  } else {
    btn.textContent = "🎵 Music";
    if (musicTimeoutId) clearTimeout(musicTimeoutId);
  }
}

// ==========================================
// AMBIENT BACKGROUND PARTICLES (purely decorative, runs once)
// ==========================================
function initAmbientParticles() {
  const container = document.getElementById("ambient-particles");
  const symbols = ["♠", "♥", "♦", "♣"];
  const count = 16;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "ambient-particle";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${Math.random() * 100}%`;
    el.style.fontSize = `${14 + Math.random() * 18}px`;
    el.style.setProperty("--drift-x", `${Math.random() * 80 - 40}px`);
    const duration = 14 + Math.random() * 14;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${-Math.random() * duration}s`;
    container.appendChild(el);
  }
}

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
  drag = null;
  missionStatus = "active";
  usedRedraw = false;

  let idx = 0;
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row <= col; row++) {
      const card = deck[idx++];
      tableau[col].push({ card, faceUp: row === col });
    }
  }
  stock = deck.slice(idx).map((card) => ({ card }));

  document.getElementById("win-overlay").classList.add("hidden");
  document.querySelectorAll(".confetti-piece").forEach((el) => el.remove());
  render({ deal: true });
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
    el.dataset.suitSymbol = SUIT_SYMBOLS[card.suit];
    el.innerHTML = `<div class="corner top">${label}</div><div class="corner bottom">${label}</div>`;
  }
  return el;
}

function render(opts = {}) {
  const { deal = false, movedIds = [] } = opts;
  renderStock();
  renderWaste(movedIds);
  renderFoundations(movedIds);
  renderTableau(deal, movedIds);
  document.getElementById("move-count").textContent = `Moves: ${moveCount}`;
  checkWin();
  evaluateMission();
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

function renderWaste(movedIds = []) {
  const el = document.getElementById("waste");
  el.innerHTML = "";
  if (waste.length > 0) {
    const topCard = waste[waste.length - 1];
    const cardEl = makeCardEl(topCard, true);
    if (movedIds.includes(topCard.id)) cardEl.classList.add("landed");
    el.appendChild(cardEl);
  }
}

function renderFoundations(movedIds = []) {
  document.querySelectorAll(".foundation").forEach((pileEl) => {
    const suit = pileEl.dataset.suit;
    pileEl.innerHTML = "";
    pileEl.dataset.suitSymbol = SUIT_SYMBOLS[suit];
    const stack = foundations[suit];
    if (stack.length > 0) {
      const topCard = stack[stack.length - 1];
      const cardEl = makeCardEl(topCard, true);
      if (movedIds.includes(topCard.id)) cardEl.classList.add("landed");
      pileEl.appendChild(cardEl);
    }
  });
}

function renderTableau(deal = false, movedIds = []) {
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
      if (deal) {
        cardEl.classList.add("dealing");
        cardEl.style.animationDelay = `${(colIndex + cardIndex) * 0.03}s`;
      } else if (movedIds.includes(entry.card.id)) {
        cardEl.classList.add("landed");
      }
      colEl.appendChild(cardEl);
    });

    colEl.style.minHeight = `${Math.max(1, column.length) * offsetStep + cardH}px`;
    container.appendChild(colEl);
  });
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

// Returns the cards that would move if this pile/col/index is picked up:
// the waste's top card, or a tableau card plus everything stacked below it.
function getRunCards(pile, col, index) {
  if (pile === "waste") return waste.length ? [waste[waste.length - 1]] : [];
  if (pile === "tableau") return tableau[col].slice(index).map((entry) => entry.card);
  return [];
}

function removeRunFromSource(pile, col, index) {
  if (pile === "waste") return [waste.pop()];
  if (pile === "tableau") {
    const colArr = tableau[col];
    const removed = colArr.splice(index).map((entry) => entry.card);
    if (colArr.length > 0) colArr[colArr.length - 1].faceUp = true;
    return removed;
  }
  return [];
}

// A plain click (no real drag) tries to send the card straight to its
// foundation automatically, e.g. clicking an Ace sends it home by itself.
// Returns the moved card (for the landing animation), or null if nothing moved.
function tryAutoFoundation(pile, col, index) {
  const cards = getRunCards(pile, col, index);
  if (cards.length !== 1) return null;
  const card = cards[0];
  if (!canPlaceOnFoundation(card, card.suit)) return null;
  removeRunFromSource(pile, col, index);
  foundations[card.suit].push(card);
  moveCount++;
  return card;
}

function onStockClick() {
  let movedIds = [];
  if (stock.length > 0) {
    const { card } = stock.pop();
    waste.push(card);
    movedIds = [card.id];
    playDrawSound();
  } else if (waste.length > 0) {
    stock = waste.reverse().map((card) => ({ card }));
    waste = [];
    usedRedraw = true;
  }
  render({ movedIds });
}

function startDrag(e, pile, col, index, originEl) {
  e.preventDefault();
  let cardEls;
  if (pile === "waste") {
    cardEls = [originEl];
  } else {
    const colEl = originEl.closest(".tableau-column");
    cardEls = Array.from(colEl.querySelectorAll(".card")).slice(index);
  }

  const baseRects = cardEls.map((el) => el.getBoundingClientRect());
  const clones = cardEls.map((el, i) => {
    const clone = el.cloneNode(true);
    clone.classList.add("dragging-clone");
    clone.style.position = "fixed";
    clone.style.left = `${baseRects[i].left}px`;
    clone.style.top = `${baseRects[i].top}px`;
    clone.style.margin = "0";
    clone.style.pointerEvents = "none";
    clone.style.zIndex = String(1000 + i);
    document.body.appendChild(clone);
    el.style.visibility = "hidden";
    return clone;
  });

  drag = {
    pile,
    col,
    index,
    startX: e.clientX,
    startY: e.clientY,
    baseRects,
    clones,
    hiddenEls: cardEls,
    moved: false,
  };

  document.addEventListener("mousemove", onDragMouseMove);
  document.addEventListener("mouseup", onDragMouseUp);
}

function onDragMouseMove(e) {
  if (!drag) return;
  const dx = e.clientX - drag.startX;
  const dy = e.clientY - drag.startY;
  if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) drag.moved = true;
  drag.clones.forEach((clone, i) => {
    clone.style.left = `${drag.baseRects[i].left + dx}px`;
    clone.style.top = `${drag.baseRects[i].top + dy}px`;
  });
}

function onDragMouseUp(e) {
  if (!drag) return;
  document.removeEventListener("mousemove", onDragMouseMove);
  document.removeEventListener("mouseup", onDragMouseUp);

  drag.clones.forEach((clone) => clone.remove());
  drag.hiddenEls.forEach((el) => (el.style.visibility = ""));

  const { pile, col, index, moved } = drag;
  const dropX = e.clientX;
  const dropY = e.clientY;
  drag = null;

  if (!moved) {
    const movedCard = tryAutoFoundation(pile, col, index);
    if (movedCard) playLandSound();
    render({ movedIds: movedCard ? [movedCard.id] : [] });
    return;
  }

  const dropEl = document.elementFromPoint(dropX, dropY);
  const foundationEl = dropEl ? dropEl.closest(".foundation") : null;
  const columnEl = dropEl ? dropEl.closest(".tableau-column") : null;
  const cards = getRunCards(pile, col, index);
  let movedIds = [];

  if (cards.length > 0 && foundationEl && cards.length === 1 && canPlaceOnFoundation(cards[0], foundationEl.dataset.suit)) {
    removeRunFromSource(pile, col, index);
    foundations[foundationEl.dataset.suit].push(cards[0]);
    moveCount++;
    movedIds = [cards[0].id];
  } else if (cards.length > 0 && columnEl) {
    const destCol = parseInt(columnEl.dataset.col, 10);
    const sameColumn = pile === "tableau" && col === destCol;
    if (!sameColumn && canPlaceOnTableau(cards[0], destCol)) {
      removeRunFromSource(pile, col, index);
      cards.forEach((card) => tableau[destCol].push({ card, faceUp: true }));
      moveCount++;
      movedIds = cards.map((card) => card.id);
    }
  }

  if (movedIds.length > 0) playLandSound();
  else playInvalidSound();

  render({ movedIds });
}

function onWasteMouseDown(e) {
  const cardEl = e.target.closest(".card");
  if (!cardEl || waste.length === 0) return;
  startDrag(e, "waste", null, waste.length - 1, cardEl);
}

function onTableauMouseDown(e) {
  const cardEl = e.target.closest(".card");
  if (!cardEl) return;
  const col = parseInt(cardEl.dataset.col, 10);
  const index = parseInt(cardEl.dataset.index, 10);
  const entry = tableau[col][index];
  if (!entry.faceUp) return;
  startDrag(e, "tableau", col, index, cardEl);
}

function checkWin() {
  const total = Object.values(foundations).reduce((sum, arr) => sum + arr.length, 0);
  if (total === 52) {
    const overlay = document.getElementById("win-overlay");
    const alreadyShown = !overlay.classList.contains("hidden");
    document.getElementById("win-stats").textContent = `Completed in ${moveCount} moves.`;
    overlay.classList.remove("hidden");
    if (!alreadyShown) {
      spawnConfetti();
      playWinFanfare();
    }
  }
}

// Missions are objectives layered on top of normal play. Once a mission
// locks into "success" or "failed" it stays there for the rest of the game.
function evaluateMission() {
  if (currentMission !== "none" && missionStatus === "active") {
    const total = Object.values(foundations).reduce((sum, arr) => sum + arr.length, 0);

    if (currentMission === "speed") {
      if (total === 52) {
        missionStatus = moveCount <= 60 ? "success" : "failed";
      } else if (moveCount > 60) {
        missionStatus = "failed";
      }
    } else if (currentMission === "noredraw") {
      if (usedRedraw) {
        missionStatus = "failed";
      } else if (total === 52) {
        missionStatus = "success";
      }
    } else if (currentMission === "acerush") {
      const acesHome = SUITS.filter((suit) => foundations[suit].some((card) => card.rank === 1)).length;
      if (acesHome === 4 && moveCount <= 15) {
        missionStatus = "success";
      } else if (moveCount > 15) {
        missionStatus = "failed";
      }
    }
  }

  updateMissionStatusUI();
}

function updateMissionStatusUI() {
  const el = document.getElementById("mission-status");
  if (!el) return;
  if (currentMission === "none") {
    el.textContent = "";
    el.className = "";
    return;
  }
  const suffix = missionStatus === "success" ? " — Complete!" : missionStatus === "failed" ? " — Failed" : " — In progress";
  el.textContent = `Mission: ${MISSIONS[currentMission].label}${suffix}`;
  el.className = missionStatus;
}

function spawnConfetti() {
  const overlay = document.getElementById("win-overlay");
  const symbols = ["♠", "♥", "♦", "♣"];
  const colors = ["#d4af37", "#ffffff", "#b5122e", "#2ecc71"];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${1.4 + Math.random() * 1.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    piece.addEventListener("animationend", () => piece.remove());
    overlay.appendChild(piece);
  }
}

document.getElementById("stock").addEventListener("click", onStockClick);
document.getElementById("waste").addEventListener("mousedown", onWasteMouseDown);
document.getElementById("tableau").addEventListener("mousedown", onTableauMouseDown);
document.getElementById("new-game-btn").addEventListener("click", dealNewGame);
document.getElementById("win-new-game-btn").addEventListener("click", dealNewGame);
document.getElementById("music-toggle-btn").addEventListener("click", toggleMusic);

document.getElementById("deck-select").value = currentDeck;
document.body.dataset.deck = currentDeck;
document.getElementById("deck-select").addEventListener("change", (e) => {
  currentDeck = e.target.value;
  document.body.dataset.deck = currentDeck;
  try {
    localStorage.setItem("solitaire_deck", currentDeck);
  } catch (err) {
    // localStorage unavailable — the choice just won't persist across visits.
  }
});

document.getElementById("table-select").value = currentTable;
document.body.dataset.table = currentTable;
document.getElementById("table-select").addEventListener("change", (e) => {
  currentTable = e.target.value;
  document.body.dataset.table = currentTable;
  try {
    localStorage.setItem("solitaire_table", currentTable);
  } catch (err) {
    // localStorage unavailable — the choice just won't persist across visits.
  }
});

document.getElementById("mission-select").addEventListener("change", (e) => {
  currentMission = e.target.value;
  dealNewGame();
});

initAmbientParticles();
dealNewGame();
