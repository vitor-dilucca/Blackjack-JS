let cards = [] //array - ordered list ofitems
let sum=0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let somaEl = document.querySelector("#soma-el")
let cartasEl = document.querySelector("#cartas-el")
let playerEl = document.querySelector("#player-el")
let player = {
  name: "Vitor",
  money: 150,
  dizerOi: function(){
    console.log("hheissann!")
  }
}
player.dizerOi()
playerEl.textContent=player.name+ ": R$"+ player.money

function getRandomCard(){
  let randomNumber = Math.floor( Math.random()*13 )
  if (randomNumber===1) {
    return 11
  }else if(randomNumber==11||randomNumber==12||randomNumber==13){
    return 10
  }else{
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard+secondCard
  console.log(cards)
  console.log(sum)
  renderGame()
}

function renderGame() {
  cartasEl.textContent = "Cartas: "
  console.log(cards)
  console.log(sum)
  
  for (let i = 0; i < cards.length; i++) {
    cartasEl.textContent += cards[i]+ " "
  }
  console.log("ASDa")
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
  if(isAlive==true && hasBlackJack==false){
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
  }
}

//exercicio
let hasSolvedChallenge=0
let hasHintsLeft=1

if(hasSolvedChallenge || hasHintsLeft){
  showSolution()
}else{
  console.log("You got this")
  
}

function showSolution(){
  console.log("Showing the solution....")
}

const airbnbProperty = {
  type:"castle",
  cleaningLady:true,
  roomFor:2,
  furniture:['chair','table','bed']
};

console.log(airbnbProperty.length)
console.log(airbnbProperty.type)
console.log(airbnbProperty.furniture)