let firstCard = getRandomNumber();
let secondCard = getRandomNumber();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newCard-el");

function getRandomNumber() {
   return Math.ceil(Math.random() * 13) + 1
   }

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (sum <= 21) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card)
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent = cards[i]
    }
    }
    renderGame()
    if (sum > 21) {
        cardsEl.textContent = "Cannot draw another card";
        sumEl += 0;
    }
}

function newGame() {
    location.reload()
    }

