// GAME 

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSOR') || 
        (playerSelection === 'SCISSOR' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSOR') ||
        (computerSelection === 'SCISSOR' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
}