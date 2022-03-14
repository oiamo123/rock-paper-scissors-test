function game() {

let aiChoices = ['rock', 'paper', 'scissors'];
let aiChoice = Math.floor(Math.random() * aiChoices.length);
console.log(aiChoice)
let playerInput = prompt('Rock, paper or scissors?');
let choice = playerInput.toLowerCase();

let playerChoiceConverter = function() {    
    if (choice == 'rock') {
        return 0;
    } 
    else if (choice == 'paper') {
        return 1;
    }
    else {
        return 2;
    }
}

let aiChoiceConverter = function() {    
    if (aiChoice == 0) {
        return 'rock';
    } 
    else if (aiChoice == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
let aiChoiceAlert = aiChoiceConverter
let playerChoice = playerChoiceConverter()

if (playerChoice == aiChoice) {
    alert('It\'s a tie!')
}
else if (playerChoice == 0 && (aiChoice == 1)) {
    alert(`You lose! You\'re opponent chose ${aiChoiceAlert()}!`)
}
else if (playerChoice == 1 && (aiChoice == 2)) {
    alert(`You lose! You\'re opponent chose ${aiChoiceAlert()}!`)
}
else if (playerChoice == 2 && (aiChoice == 0)) {
    alert(`You lose! You\'re opponent chose ${aiChoiceAlert()}!`)
}
else {
    alert('You win!')
}
menu()
}

function menu() {
    let count = 0;
    function playerGame() {
        if (count > 0) {
            return prompt('Would you like to play again?');
        } else {
            return prompt('Would you like to play \'Rock, Paper, Scissors?\'');
        }
    }
    let playGame = playerGame().toLowerCase();
    
    if (playGame == 'yes') {
        game()
        count++;
    }
    else if (playGame == 'no') {
        alert('Good-bye!')
    } else {
        alert('Incorrect input');
        menu()
        --count;
    }
}

menu()