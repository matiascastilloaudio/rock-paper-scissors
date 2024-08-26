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

function getHumanChoice() {
    let humanChoice = prompt("Choose: rock, paper, scissors");
    return humanChoice;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    //for debugging
    // console.log(humanChoice + " " + computerChoice);

    if (humanChoice === null) {
        console.log("Game cancelled.");
    } else if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log("Computer Wins - Score: Computer " + ++computerScore + " Human: " + humanScore);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Human Wins - Score: Computer " + computerScore + " Human: " + ++humanScore);
    } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }

    return humanScore && computerScore;
}

function playGame() {
    if ((computerScore + humanScore) < 5) {
        for (let i = 0; i < 5; i++) {
            playRound();
        }
    }

    console.log("Final Score - Computer: " + computerScore + " Human: " + humanScore);
}

playGame();