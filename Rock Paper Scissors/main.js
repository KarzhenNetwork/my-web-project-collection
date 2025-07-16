const choices = ['paper', 'rock', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    let result = '';

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else {
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors') ? 'YOU WON!' : 'YOU LOSE';
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? 'YOU WON!' : 'YOU LOSE';
                break;
            case 'scissors':
                result = (computerChoice == 'paper') ? 'YOU WON!' : 'YOU LOSE';
                break;

        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove('greenText', 'redText'); ///// am remova shteky basha chunka atwanet la 1katda 1 dana yan zyatr class bsretawa.

    switch(result){
        case 'YOU WON!':
            resultDisplay.classList.add('greenText');
            playerScore ++ ;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'YOU LOSE':
            resultDisplay.classList.add('redText');
            computerScore ++;
            computerScoreDisplay.textContent = computerScore;
            break;
}
}
