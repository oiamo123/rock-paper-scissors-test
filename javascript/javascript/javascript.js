let firstRound = true;

function game() {
let userChoice;
let aiChoice;
let aiCounter = 0;
let playerCounter = 0;
while (aiCounter != 5 && playerCounter !=5) {

aiChoice = Math.floor(Math.random() * 3)
userChoice = prompt('rock paper or scissors?')

switch (userChoice) {
    case 'rock':
        userChoice = 0;
        break;
    case 'paper':
        userChoice = 1
        break;
    case 'scissors':
        userChoice = 2
        break;
    default:
        alert('incorrect input')
}


if (aiChoice === 0 && userChoice === 2) {
    alert(`You lose! The AI chose rock!`)
    aiCounter++
} else if (aiChoice === 1 && userChoice === 0) {
    alert(`You lose The AI chose paper!`)
    aiCounter++
} else if (aiChoice === 2 && userChoice === 1) {
    alert(`You lose! The AI chose scissors!`)
    aiCounter++
} else if (aiChoice === userChoice) {
    alert(`It's a tie!`)
} else {
    alert(`You win!`)
    playerCounter++
}

if (playerCounter === 5) {
    alert(`You beat the computer!`)
    menu()
} else if (aiCounter === 5) {
    alert(`You lost the game against the ai!!`)
    menu()
}

console.log(`Ai choice: ${aiChoice} Player choice: ${userChoice} AI Counter: ${aiCounter} Player counter ${playerCounter}`)


}}


function menu() {
let userPlayGame = '';
function playGame() {
if (firstRound === true) {
    firstRound = false
    userPlayGame = prompt(`Would you like to play rock, paper, scissors? y or n`)
} else {
    userPlayGame = prompt(`Would you like to play again?`)
}}

playGame()

if (userPlayGame === `y`) {
    alert(`Goodluck!`)
    game()
} else if (userPlayGame === `n`) {
    alert(`Good-bye!`)
} else {
    alert(`Incorrect input`)
    playGame()
}
}

menu()