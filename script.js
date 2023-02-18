let randomNumber = Math.random()*22
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard] //array - ordered list ofitems
let hasBlackJack = false
let isAlive = true
let sum = firstCard

let message = ""
let messageEl = document.getElementById("message-el")
let somaEl = document.querySelector("#soma-el")
let cartasEl = document.querySelector("#cartas-el")

function startGame() {
  renderGame()
}

function getRandomCard(){
  return Math.floor(
    Math.random()*13
  )
}

function renderGame() {
  cartasEl.textContent = "Cartas: "

  for (let i = 0; i < cards.length; i++) {
    cartasEl.textContent += cards[i]+ " "
  }

  somaEl.textContent = "Sum: " + sum

  if (sum <= 20) {
    message = "Quer outra carta?"
    messageEl.style.color="yellow"
  } else if (sum === 21) {
    message = "Voce tem o blackjack!"
    hasBlackJack = true
    messageEl.style.color="green"
  } else {
    message = "Você perdeu"
    isAlive = false
    messageEl.style.color="red"
  }
  messageEl.textContent = message
}

function newCard() {
  let card2 = getRandomCard()
  sum+=card2
  cards.push(card2)
  console.log(cards)
  renderGame()
}

// exercicio=================================
// let messages = [
//   "eai man",
//   "fala qual a boa",
//   "so na paz"
// ]

// for(let i=0; i<messages.length; i++){
//   console.log(messages[i])
// }
// console.log("===================")

// for(let i=0; i<cards.length; i++){
//   console.log(cards[i])
// }
// console.log("===================")

// let exercicioEl = document.querySelector("#exercicio")

// for(let i=0; i<messages.length; i++){
//     exercicioEl.textContent+= messages[i] + " "
// }

//exercicio2

// let player1Time=102
// let player2Time=107

// function getTotalRaceTime(){
//   return player1Time+player2Time
// }

// console.log(getTotalRaceTime())

// console.log(Math.floor( Math.random()*21 ))

function rollDice(){
  return Math.floor(
    Math.random()*7
  )
}

console.log(rollDice())