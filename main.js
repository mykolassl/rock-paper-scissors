function computerPick() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.round(Math.random() * 2);
    return choices[randomNum];
}

function playRound() {
    let computerChoice = computerPick();
    let playerChoice = prompt('Rock, paper or scissors?').toLowerCase();
    
    if(computerChoice === playerChoice) {
        alert(`It's a tie! Your and computer's choice was ${playerChoice}`);
    } else if((playerChoice === 'scissors' && computerChoice === 'paper') ||
              (playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock')) {
        alert(`You win! ${playerChoice} beats ${computerChoice}`);
    } else {
        alert(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
}

function startGame() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}

startGame();