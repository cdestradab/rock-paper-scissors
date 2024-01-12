1. Create random choice generator for the computer.

    CONSTRAINTS:
        - There are 3 possible choices: "Rock", "Paper", "Scissors".

    PSEUDO:
   ```
        DECLARE function getRandomNumber
            DECLARE a variable randomNumber that obtains a random number between 0 and 2

            IF randomNumber is 0
                THEN RETURN "Rock"
            IF randomNumber is 1
                THEN RETURN "Paper"
            IF randomNumber is 2
                THEN RETURN "Scissors"
   ```

3. Create a function that plays a single round of the TicTacToe game

    CONSTRAINTS:
        - It takes to parameters "playerSelection" and "computerSelection"
        - The result of a tie is starting another round. Only one can win.
        - It follows the game rules:
            - Paper beats Rock
            - Rock beats Scissors
            - Scissors beat Paper
        - It has to handle the user input to make it case-insensitive
    
    PSEUDO:
    ```
        IMPORT getComputerChoice()

        DECLARE function startRound()
            DECLARE variable computerSelection that takes a value from calling getComputerChoice()
            DECLARE variable userSelection that takes a value from an user input, and make it capitalized.
            
            EVALUATE userSelection to check that it match the three possible choices
                IF userSelection is "Rock" or "Paper" or "Scissors"
                    CONTINUE
                ELSE
                    ASK INPUT for userSelection
            
            EVALUATE the choices from userSelection and computerSelection to know the winner
                IF userSelection is equal to computerSelection
                    CALL function startRound() to start again
                ELSE
                    IF userSelection = "Rock"
                        EVALUATE computerSelection
                            IF computerSelection = "Scissors"
                                RETURN "You win!" userSelection "beats" computerSelection
                            ELSE
                                RETURN "You lose!" computerSelection "beats" userSelection

                    IF userSelection = "Scissors"
                        EVALUATE computerSelection
                            IF computerSelection = "Paper"
                                RETURN "You win!" userSelection "beats" computerSelection
                            ELSE
                                RETURN "You lose!" computerSelection "beats" userSelection

                    
                    IF userSelection = "Paper"
                        EVALUATE computerSelection
                            IF computerSelection = "Rock"
                                RETURN "You win!" userSelection "beats" computerSelection
                            ELSE
                                RETURN "You lose!" computerSelection "beats" userSelection
<<<<<<< HEAD

3. Create a function that starts the game setting a number of rounds and announces the winner

    CONSTRAINTS: 
        - There is a previously set number of rounds X that must be played.
        - There is only one winner in the game, a player wins the game if he wins more than half of the rounds of the game.
    
    PSEUDO:
        IMPORT startRound()
        IMPORT getComputerChoice()
        
        DECLARE function game(numberOfRounds)

            DECLARE variable playerScore initialized at 0
            DECLARE variable computerScore initialized at 0

            

            FOR 0 to numberOfRounds:

                DECLARE constant userChoice equal to a PROMPT value asked to the user. // Maybe asking a prompt option should be a function itself.
                DECLARE constant computerChoice equals to getComputerChoice()
                
                DECLARE constant winner that is equal to CALL startRound(playerScore, computerScore)

                EVALUATE who wins in the current round and assign the score to the winner
                    IF winner is equal to "player"
                        THEN playerScore++
                    ELSE IF winner is equal to "computer"
                        THEN computerScore ++

                EVALUATE if there is a winner for the whole game
                    IF userScore is equal to ((numberOfRounds/2).FLOOR_DOWN + 1)
                        THEN RETURN "You win the game"
                    IF computer is equal to ((numberOfRounds/2).FLOOR_DOWN + 1)
                        THEN RETURN "You lose the game"
            END FOR


=======
```
>>>>>>> 55e5c844f36ab3d182186c8c14791c136d625821
