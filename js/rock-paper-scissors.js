const getRandomInt = function(n) {
    let randomNumber = Math.floor((Math.random()*n));

    return randomNumber;
}

const getComputerChoice = function() {
    let randomNumber = getRandomInt(3);

    let randomChoice;

    switch (randomNumber){
        case 0: randomChoice = "Rock"; break;
        case 1: randomChoice = "Paper"; break;
        case 2: randomChoice = "Scissors"; break;
    }

    return randomChoice;
}

const toSentenceCase = function(text="") {
    text = text.toLowerCase();
    
    return text[0].toUpperCase() + text.slice(1);
}

const validateUserSelection = function(userInput, expectedInputs = []) {
    let validated = false;

    for (i in expectedInputs) {
        if (userInput === expectedInputs[i]) {
            validated = true;
        }
    }

    return validated;
}

const showMessage = function(message, selector, deletePreviousContent = true) {
    if (message !== null && message !== 0) {
        const container = document.querySelector(selector);
        const newMessage = document.createElement('p');

        if (deletePreviousContent && container.hasChildNodes()) {
            container.innerHTML = "";
        }

        newMessage.textContent = message;
        container.appendChild(newMessage);
    }

    return message;
}

/* function askUserChoiceByPrompt() {
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
} */

//requires showMessage()
const startRound = function(userSelection, computerSelection) {

    if (userSelection === computerSelection) {
        showMessage("Ties, choose again!", '.rps-results', false);
        return "ties";
    }

    let winMessage = () => {
        showMessage(`You win! ${userSelection} beats ${computerSelection}`, '.rps-results', false);
        return "player";
    }
    let loseMessage = () => {
        showMessage(`You lose! ${computerSelection} beats ${userSelection}`, '.rps-results', false);
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
    
    return 0;
}

//requires showMessage()
/* const game = function(numberOfRounds = 5) {
    const MAX_POINTS = Math.floor(numberOfRounds/2) + 1;
    console.log(numberOfRounds)
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < (numberOfRounds + 1); i++) {
        const winner = startRound(askUserChoice(), getComputerChoice());
        (winner === "player") ? playerScore++ : computerScore++;

        if (playerScore === MAX_POINTS) {
            return "You won the game!";
        } else if (computerScore === MAX_POINTS) {
            return "You lose!";
        } 

        showMessage(`Your score: ${playerScore} | Computer score: ${computerScore}`, '.rps-score');
    }

    return 0;
} */

// UI LOGIC

const resultsContainer = document.querySelector('.rps-results');
const scoreContainer = document.querySelector('.rps-score');
showMessage(`Your score: 0 | Computer score: 0`, '.rps-score');
showMessage("Choose your weapon: Rock, Paper or Scissor", '.rps-results');

function captureUserChoice() {
    let playerSelection;
    const playerOptions = document.querySelector('.rps-ui');
    playerOptions.addEventListener('click', (e) => {
        let choice = e.target;

        switch(choice.id) {
            case 'btn-rock':
                playerSelection = "Rock";
                showMessage(`Player selected ${playerSelection}`, '.rps-results', true);
                initGame(playerSelection);
                break;

            case 'btn-paper':
                playerSelection = "Paper";
                showMessage(`Player selected ${playerSelection}`, '.rps-results', true);
                initGame(playerSelection);
                break;
            
            case 'btn-scissors':
                playerSelection = "Scissors";
                showMessage(`Player selected ${playerSelection}`, '.rps-results', true);
                initGame(playerSelection);
                break;
        }

        
    })

    return 0;
}

let gameOn = false;
const numberOfRounds = 5;
const MAX_POINTS = Math.floor(numberOfRounds/2) + 1;
let playerScore = 0;
let computerScore = 0;
let round = 0;
function initGame(userSelection) {
    let result;

    if (!gameOn) {
        gameOn = true;
        playerScore = 0;
        computerScore = 0;
        round = 0;

        result = newRound(userSelection);
        showMessage(result, '.rps-results', false);
    } else {
        result = newRound(userSelection);
        showMessage(result, '.rps-results', false);
    }

    function newRound(userSelection) {
        const showScore = () => showMessage(`Your score: ${playerScore} | Computer score: ${computerScore}`, '.rps-score');

        if (round < numberOfRounds + 1) {
            const computerChoice = getComputerChoice();
            showMessage(`Machine selected ${computerChoice}`, '.rps-results', false);
            const winner = startRound(userSelection, computerChoice);

            if (winner !== "ties") {
                (winner === "player") ? playerScore++ : computerScore++;
            }

            showScore();

            if (playerScore === MAX_POINTS) {
                gameOn = false;
                showScore();
                return "You won the game!";
            } else if (computerScore === MAX_POINTS) {
                gameOn = false;
                showScore();
                return "You lost the game!";
            }
        }

        return 0
    }
}

captureUserChoice();