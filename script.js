let firstCard = 10
let secondCard = 11
let hasBlackJack = false

let sum = firstCard+secondCard
console.log(sum)

if (sum<=20) {
  console.log("quer outra carta?")
}else if(sum===21){
  console.log("you've got blackjack")
  hasBlackJack=true
}else{
  console.log("you are out of the game!")
}

//cash out!
console.log(hasBlackJack)
// exercicio