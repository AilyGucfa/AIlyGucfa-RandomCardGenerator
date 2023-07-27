const suits = ["\u2665", "\u2666", "\u2663", "\u2660"];
const value = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function getRandomSuit() {
  let randomIndexSuit = Math.floor(Math.random() * suits.length);
  return suits[randomIndexSuit];
}

function getRandomValue() {
  return Math.floor(Math.random() * value.length);
}

function updateCard() {
  let randomSuit = getRandomSuit();
  let randomValue = value[getRandomValue()];

  let firstSuitElement = document.getElementById("first-suit");
  let secondSuitElement = document.getElementById("second-suit");
  let cardValueElement = document.getElementById("card-value");

  firstSuitElement.innerText = randomSuit;
  secondSuitElement.innerText = randomSuit;
  cardValueElement.innerText = randomValue;

  let suitColor = getRandomSuitColor(randomSuit);
  firstSuitElement.style.color = suitColor;
  secondSuitElement.style.color = suitColor;
}

function getRandomSuitColor(suit) {
  if (suit === "\u2665" || suit === "\u2666") {
    return "red";
  } else {
    return "black";
  }
}

function generateNewCard() {
  updateCard();
}

// Set up the timer
let timer = setInterval(generateNewCard, 10000); // 10 seconds
let counter = 0; // Counter to keep track of iterations

function stopTimer() {
  clearInterval(timer);
}
//same output with the below code for the button.
/*document.addEventListener("DOMContentLoaded", () => {
  updateCard();
  let buttonElement = document.getElementById("button");
  buttonElement.addEventListener("click", updateCard);
});*/
window.onload = function() {
  updateCard();
  document.getElementById("button").addEventListener("click", updateCard);
};
