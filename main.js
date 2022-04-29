const buttons = [...document.querySelectorAll('.buttons > button')];
const result = document.querySelector('#result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let roundResult = playRound(e.target.id);
        handleResults(roundResult);
    });
});

function computerPick() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.round(Math.random() * 2);
    return choices[randomNum];
}

function playRound(playerChoice) {
    let computerChoice = computerPick();
    
    if(computerChoice === playerChoice) {
        result.textContent = `It's a tie! Your and computer's choice was ${playerChoice}`;
        return 'tie';
    } else if((playerChoice === 'scissors' && computerChoice === 'paper') ||
              (playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock')) {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        return 'win';
    } else {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        return 'loss';
    }
}

function handleResults(roundResult) {
    if(roundResult === 'win') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if(roundResult === 'loss') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    if(computerScore.textContent === '5') {
        alert(`You lost!`)
        resetGame();
    } else if(playerScore.textContent === '5') {
        alert(`You won!`)
        resetGame();
    }
}

function resetGame() {
    result.textContent = '';
    playerScore.textContent = '0';
    computerScore.textContent = '0';
}