// rock-paper-scissors.js

let playerScore = 0,
computerScore = 0,
counter = 0;

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];  
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.textContent);
    });
});

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
    } else {
        computerScore += 1;
        return "You lose!";
    }
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    let resultDiv = document.getElementById('result');

    resultDiv.innerHTML += "Player's choice = " + playerSelection + "<br>";
    resultDiv.innerHTML += "Computer's choice = " + computerSelection + "<br>";

    let roundResult = playRound(playerSelection, computerSelection);
    resultDiv.innerHTML += "Player's score = " + playerScore + ", Computer's score = " + computerScore + "<br>";

    if (playerScore >= 5) {
        resultDiv.innerHTML += "Player wins the game!<br>";
        resetGame();
    } else if (computerScore >= 5) {
        resultDiv.innerHTML += "Computer wins the game!<br>";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

game();
