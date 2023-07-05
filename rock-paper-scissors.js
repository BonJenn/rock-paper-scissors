// rock-paper-scissors.js

let playerScore = 0,
computerScore = 0,
counter = 0;

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];  
}

function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        return "You win! Paper beats rock!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        return "You win! Scissors beats paper!";
    } else if (playerSelection === computerSelection) {
        playerScore += 1,
        computerScore += 1;



function game() {
    while (playerScore < 5 && computerScore < 5) {


        let computerSelection = getComputerChoice();

        let playerSelection = prompt("Rock, Paper, or Scissors?"); 
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        console.log("Player's choice" + " " + "=" + playerSelection);
        console.log("Computer's choice" + " " + "=" + computerSelection);

    
        let roundResult = playRound(playerSelection, computerSelection);
        console.log("Player's score" + " " + playerScore, "Computer's score" + " " + computerScore);

       if (playerScore == 5) {
        console.log("Player wins!");
        break;
       } else if (computerScore == 5) {
        console.log("Computer wins!");
        break;
       }
    
    }

}

game();
    } else {
        computerScore += 1;
        return "You lose!";
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {


        let computerSelection = getComputerChoice();

        let playerSelection = prompt("Rock, Paper, or Scissors?"); 
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

        console.log("Player's choice" + " " + "=" + playerSelection);
        console.log("Computer's choice" + " " + "=" + computerSelection);

    
        let roundResult = playRound(playerSelection, computerSelection);
        console.log("Player's score" + " " + playerScore, "Computer's score" + " " + computerScore);

       if (playerScore == 5) {
        console.log("Player wins!");
        break;
       } else if (computerScore == 5) {
        console.log("Computer wins!");
        break;
       }
    
    }

}

game();
