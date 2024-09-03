let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice < 0.3) {
        return "rock";
    } else if (computerChoice >= 0.3 && computerChoice < 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    console.log("Human: " + humanChoice + " - Computer: " + computerChoice); // For debugging

    if (humanChoice === computerChoice) {
        display.textContent = `Tie. Score: Human ${humanScore} - Computer ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        display.textContent = `Human Wins. ${humanChoice} beats ${computerChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    } else {
        computerScore++;
        display.textContent = `Computer Wins ${computerChoice} beats ${humanChoice}. Score: Human ${humanScore} - Computer ${computerScore}`;
    }

    if (humanScore + computerScore === 5) {
        display.textContent += ` Final Score: Human ${humanScore} - Computer ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector("div");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound(humanChoice);
    });
});
