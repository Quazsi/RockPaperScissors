document.addEventListener("DOMContentLoaded", function() {
    // Randomly return rock, paper, or scissors 
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);

        if (randomNumber == 0) {
            return "rock";
        } else if (randomNumber == 1) {
            return "paper";
        } else if (randomNumber == 2) {
            return "scissors";
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humansChoice) {
        const sect = document.querySelector("#result");
        const score = document.querySelector("#score");
        const winner = document.querySelector("#winner");


        sect.textContent = '';

        //Get the computers choice
        let computersChoice = getComputerChoice();
        //Determine who won
        if (humansChoice == "rock") {
            switch (computersChoice) {
                case "rock":
                    sect.textContent = "It's a Tie!";
                    break;
                case "paper":
                    sect.textContent = "You lose " + computersChoice + " beats " + humansChoice;
                    computerScore++;
                    break;
                case "scissors":
                    sect.textContent = "You win " + humansChoice + " beats " + computersChoice;
                    humanScore++;
                    break;
            }
        } else if (humansChoice == "paper") {
            switch (computersChoice) {
                case "rock":
                    sect.textContent = "You win " + humansChoice + " beats " + computersChoice;
                    humanScore++;
                    break;
                case "paper":
                    sect.textContent = "It's a Tie!";
                    break;
                case "scissors":
                    sect.textContent = "You lose " + computersChoice + " beats " + humansChoice;
                    computerScore++;
                    break;
            }
        } else if (humansChoice == "scissors") {
            switch (computersChoice) {
                case "rock":
                    sect.textContent = "You lose " + computersChoice + " beats " + humansChoice;
                    computerScore++;
                    break;
                case "paper":
                    sect.textContent = "You win " + humansChoice + " beats " + computersChoice;
                    humanScore++;
                    break;
                case "scissors":
                    sect.textContent = "It's a Tie!";
                    break;
            }
        }
        score.textContent = "Player: " + humanScore + " Computer: " + computerScore;

        if(humanScore >= 5){
            winner.textContent = "YOU WIN!";
        } else if(computerScore >= 5){
            winner.textContent = "You lose, the computer has won";
        }
    }

    // Select the container element
    let buttonsContainer = document.getElementById("buttonContainer");

    // Add click event listener to the container
    buttonsContainer.addEventListener("click", function(event) {
        // Check if the clicked element is a button
        if (event.target.tagName === 'BUTTON') {
            let buttonId = event.target.id;
            switch (buttonId) {
                case "Rock":
                    playRound("rock");
                    console.log("Player chooses rock");
                    break;
                case "Paper":
                    playRound("paper");
                    console.log("Player chooses paper");
                    break;
                case "Scissors":
                    playRound("scissors");
                    console.log("Player chooses scissors");
                    break;
            }
        }
    });
});
