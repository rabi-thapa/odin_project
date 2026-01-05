var humanScore = 0;
var computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("Choose? Rock, Paper or Scissor");

    humanChoice = humanChoice.toLowerCase();
    console.log("Human Choose", humanChoice);
    return humanChoice;
}

function getComputerChoice() {
    var choice = Math.random();
    if (choice <= 0.34) {
        choice = "rock";
    } else if (choice <= 0.67) {
        choice = "paper";
    } else {
        choice = "scissor";
    }

    console.log("Computer Choose", choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("computer score: ", computerScore);
        console.log("human score: ", humanScore);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++;
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++;
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore++;
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++;
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);
    } else {
        console.log("human score: ", humanScore);
        console.log("computer score: ", computerScore);
    }
}

function playGame() {
    const message = "WINNER: ";
    for (let i = 0; i < 3; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        play = playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) console.log(message + "HUMAN");
    else if (computerScore > humanScore) console.log(message + "COMPUTER");
    else console.log("DRAW");
}

playGame()