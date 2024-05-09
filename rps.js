
let humanScore = 0;
let computerScore = 0;
// Randomly return rock, paper, or scissors 
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0){
        return "Rock"
    } else if (randomNumber == 1) {
        return "Paper"
    } else if (randomNumber == 2) {
        return "Scissors"
    }

}
console.log(getComputerChoice())

//Prompt user for their choice
function getHumanChoice(){
   let choice = prompt("Rock, Paper, or Scissors?")
   return choice
}

console.log(getHumanChoice())
function playRound(){

}