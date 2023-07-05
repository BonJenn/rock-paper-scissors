// rock-paper-scissors.js

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];  
}



let playerSelection = prompt("Rock, Paper, or Scissors?"); 

playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();


let computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) { 
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You win! Rock beats scissors!";
} else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats rock!";
} else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You win! Scissors beats paper!";
} else if (playerSelection === computerSelection) {
    return "It's a tie!";
} else {
    return "You lose!";
 }
}


console.log("Player chose: " + playerSelection);
console.log("Computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
