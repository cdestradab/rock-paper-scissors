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

function sentenceCase(text="") {
    text = text.toLowerCase();
    
    return text[0].toUpperCase() + text.slice(1);
}


// function validateUserInput(userInput, expectedInputs) {
//     let validated = false;

//     for (option in expectedInputs) {
//         if userInput.
//     }
// }

function startRound(userSelection, computerSelection) {

    userSelection = userSelection.toUpperCase();

    if (userSelection === "Rock"  ||
        userSelection === "Paper" ||
        userSelection === "Scissors") {
            console.log("User input accepted as :" + userSelection);
        } else {
            userSelection = prompt("Choose Rock, Paper or Scissor");
        }

    return 0;
}