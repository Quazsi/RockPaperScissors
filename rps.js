
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

//Prompt user for their choice
function getHumanChoice(){
   let choice = prompt("Rock, Paper, or Scissors?")
   return choice.toLowerCase();
}



//Plays a game of rock paper scissors for a specified number of rounds
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    const rounds = 5
    for (let index = 0; index < 5; index++) {
        playRound()
    }

    if(humanScore > computerScore) {
        alert("YOU WON THE GAME!");
    }

    if(humanScore < computerScore) {
        alert("You lost the game");
    }

    if (humanScore == computerScore){
        alert("It was a tie?")
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
                    console.log("You lose " + computersChoice + " beats " + humansChoice)
                    computerScore++ 
                    break;
                case "scissors":
                    console.log("You win " + humansChoice + " beats " + computersChoice)
                    humanScore++
                    break;
            }
        }
        if (humansChoice == "paper") {
            switch(computersChoice){
                case "rock":
                    console.log("You lose " + computersChoice + " beats " + humansChoice)
                    break;
                case "paper":
                    console.log("It's a Tie!") 
                    break;
                case "scissors":
                    console.log("You win " + humansChoice + " beats " + computersChoice)
                    humanScore++
    
                    break;
            }
        }
        if (humansChoice == "scissors") {
            switch(computersChoice){
                case "rock":
                    console.log("You lose " + computersChoice + " beats " + humansChoice)
                    computerScore++  
                    break;
                
                case "paper": 
                    console.log("You win " + humansChoice + " beats " + computersChoice)
                    humanScore++
                    break;
                
                case "scissors":
                    console.log("It's a Tie!") 
                    break;
            }
        }
    }
}

playGame();