let firstCard = 10
let secondCard = 19

let sum = firstCard+secondCard
console.log(sum)

if (sum < 21) {
  console.log("do you want to draw a new card?")
}else if(sum===21){
  console.log("congratulations voce venceu! you have blackjack")
}else {
  console.log("you lost.")

}

// exercicio