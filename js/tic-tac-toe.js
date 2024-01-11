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