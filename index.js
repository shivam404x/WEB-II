const icons = ["🍎","🍌","🍇","🍉","🍓","🍒","🥝","🍍"];
let cards = [];
let firstCard = null;
let secondCard = null;
let lock = false;
let moves = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  moves = 0;
  document.getElementById("moves").textContent = "Moves: 0";

  cards = shuffle([...icons, ...icons]);

  cards.forEach(icon => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.icon = icon;
    card.textContent = "";
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
}

function flipCard() {
  if (lock || this === firstCard) return;

  this.textContent = this.dataset.icon;
  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  document.getElementById("moves").textContent = "Moves: " + moves;

  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    resetTurn();
  } else {
    lock = true;
    setTimeout(() => {
      firstCard.textContent = "";
      secondCard.textContent = "";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lock = false;
}

startGame();