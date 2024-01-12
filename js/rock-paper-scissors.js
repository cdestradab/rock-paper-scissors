function getRandomInt(n) {
    let randomNumber = Math.floor((Math.random()*n));

    return randomNumber;
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);

    let randomChoice;

    switch (randomNumber){
        case 0: randomChoice = "Rock"; break;
        case 1: randomChoice = "Paper"; break;
        case 2: randomChoice = "Scissors"; break;
    }

    return randomChoice;
}

function toSentenceCase(text="") {
    text = text.toLowerCase();
    
    return text[0].toUpperCase() + text.slice(1);
}

function validateUserSelection(userInput, expectedInputs = []) {
    let validated = false;

    for (i in expectedInputs) {
        if (userInput === expectedInputs[i]) {
            validated = true;
        }
    }

    return validated;
}

function askUserChoice() {
    let getChoice = () => {
        let choice = prompt("Choose your weapon: Rock, Paper or Scissor");
        if (choice === "") {choice = " "};
        choice = toSentenceCase(choice);
        
        return choice;
    }

    let userSelection = getChoice();

    while (!validateUserSelection(userSelection, ["Rock", "Paper", "Scissors"])) {
        userSelection = getChoice();
    }

    return userSelection;
}

function startRound(userSelection, computerSelection) {

    if (userSelection === computerSelection) {
        alert("Ties, choose again!");
        return startRound(askUserChoice(), getComputerChoice());
    }

    let winMessage = () => {
        console.log(`You win! ${userSelection} beats ${computerSelection}`);
        return "player";
    }
    let loseMessage = () => {
        console.log(`You lose! ${computerSelection} beats ${userSelection}`);
        return "computer";
    }
    
    switch (userSelection){
        case "Rock":
            return (computerSelection === "Scissors") ? winMessage() : loseMessage();
        
        case "Scissors":
            return (computerSelection === "Paper") ? winMessage() : loseMessage();
        
        case "Paper":
            return (computerSelection === "Rock") ? winMessage() : loseMessage();

    }

    console.log(`${userSelection} | ${computerSelection}`);
    return 0;
}

function game(numberOfRounds = 5) {
    const MAX_POINTS = Math.floor(numberOfRounds/2) + 1;
    console.log(numberOfRounds)
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        const winner = startRound(askUserChoice(), getComputerChoice());
        (winner === "player") ? playerScore++ : computerScore++;

        if (playerScore === MAX_POINTS) {
            return "You won the game!";
        } 
        if (computerScore === MAX_POINTS) {
            return "You lose!";
        }

        console.log(`Your score: ${playerScore} | Computer score: ${computerScore}`)
    }

    return 0;
}