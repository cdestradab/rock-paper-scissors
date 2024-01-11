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

function startRound(userSelection, computerSelection) {

    userSelection = toSentenceCase(userSelection);

    while (!validateUserSelection(userSelection, ["Rock", "Paper", "Scissors"])) {
        userSelection = prompt("Choose your weapon: Rock, Paper or Scissor");
    }

    if (userSelection === computerSelection) {
        return startRound(prompt("Ties! Choose again."), getComputerChoice());
    }

    let winMessage = `You win! ${userSelection} beats ${computerSelection}`;
    let loseMessage = `You lose! ${computerSelection} beats ${userSelection}`;
    switch (userSelection){
        case "Rock":
            return (computerSelection === "Scissors") ? winMessage : loseMessage;
        
        case "Scissors":
            return (computerSelection === "Paper") ? winMessage : loseMessage;
        
        case "Paper":
            return (computerSelection === "Rock") ? winMessage : loseMessage;

    }

    return 0;
}