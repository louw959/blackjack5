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
// let moneyEl = document.getElementById("money-el");
// let totalMoney = 0;


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
        // moneyEl.textContent = "MONEY EARNED: " + totalMoney
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        // totalMoney += 500
        // moneyEl.textContent = "MONEY EARNED: " + totalMoney
        hasBlackJack = true 
    } else {
        message = "You're out of the game"
        // totalMoney = totalMoney - 250
        // moneyEl.textContent = "MONEY EARNED: " + totalMoney
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
     

