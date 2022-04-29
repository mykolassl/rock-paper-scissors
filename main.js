function computerPick() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.round(Math.random() * 2);
    return choices[randomNum];
}

function playRound() {
    let computerChoice = computerPick();
    let playerChoice = prompt('Rock, paper or scissors?').toLowerCase();
    
    if(computerChoice === playerChoice) {
        console.log(`It's a tie! Your and computer's choice was ${playerChoice}`);
        return 'tie';
    } else if((playerChoice === 'scissors' && computerChoice === 'paper') ||
              (playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock')) {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        return 'win';
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return 'loss';
    }
}

function startGame() {
    let playerWins = 0;
    let computerWins = 0;

    for(let i = 0; i < 5; i++) {
        let roundResult = playRound();

        if(roundResult === 'win') {
            playerWins++;
        } else if(roundResult === 'loss') {
            computerWins++;
        }

        console.log(`Player score: ${playerWins}\nComputer score: ${computerWins}`)
    }

    if(playerWins === computerWins) {
        console.log("It's a tie!");
    } else if(playerWins > computerWins) {
        console.log("You won!");
    } else {
        console.log("You lost!");
    }
}

//startGame();