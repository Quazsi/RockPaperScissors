
// Randomly return rock, paper, or scissors 
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0){
        return "rock"
    } else if (randomNumber == 1) {
        return "paper"
    } else if (randomNumber == 2) {
        return "scissors"
    }

}
console.log(getComputerChoice())

//Prompt user for their choice
function getHumanChoice(){
   let choice = prompt("Rock, Paper, or Scissors?")
   return choice.toLowerCase();
}


function playRound(){
    //Get the computers choice
    let computersChoice = getComputerChoice()
    //Get the players choice
    let humansChoice = getHumanChoice()
    //Determine who won
    if (humansChoice == "rock") {
        switch(computersChoice){
            case "rock":
                console.log("It's a Tie!")
                break;
            case "paper":
                console.log("You lose!")
                computerScore++ 
                break;
            case "scissors":
                console.log("You win!")
                humanScore++
                break;
        }
    }
    if (humansChoice == "paper") {
        switch(computersChoice){
            case "rock":
                console.log("You lose!") 
                break;
            case "paper":
                console.log("It's a Tie!") 
                break;
            case "scissors":
                console.log("You win!")
                humanScore++

                break;
        }
    }
    if (humansChoice == "scissors") {
        switch(computersChoice){
            case "rock":
                console.log("You lose!")
                computerScore++  
                break;
            
            case "paper": 
                console.log("You win!")
                humanScore++
                break;
            
            case "scissors":
                console.log("It's a Tie!") 
                break;
        }
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
}