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
    }
}

playRound();