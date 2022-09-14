const choice = document.querySelectorAll(`.choice`);
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const winnerEl = document.querySelector(".winner");
const total0EL = document.querySelector(".total--0");
const total1EL = document.querySelector(".total--1");
const aiChoiceImg = document.querySelector(".aiChoiceImg");
let winner;
let score0 = 0;
let score1 = 0;
let total0 = 0;
let total1 = 0;

score1El.style.marginTop = "9.7vw";

const aiWins = function () {
  score1++;
  score1El.textContent = `SCORE: ${score1}`;
  winnerEl.style.left = "46.9%";
  winnerEl.textContent = `AI WON`;
};

const checkScore = function () {
  if (score0 === 5) {
    total0++;
    total1EL.textContent = `TOTAL: ${total1}`;
    score1El.textContent = `SCORE: 0`;
    total0EL.textContent = `TOTAL: ${total0}`;
    score0El.textContent = `SCORE: 0`;
    score0 = 0;
    score1 = 0;
  }
  if (score1 === 5) {
    total1++;
    total1EL.textContent = `TOTAL: ${total1}`;
    score1El.textContent = `SCORE: 0`;
    total0EL.textContent = `TOTAL: ${total0}`;
    score0El.textContent = `SCORE: 0`;
    score0 = 0;
    score1 = 0;
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", function () {
    choice.classList.remove("choice");
    // console.log(choice.classList);
    let aiChoice = Math.floor(Math.random() * 3);
    switch (aiChoice) {
      case 0:
        aiChoice = "rock";
        break;
      case 1:
        aiChoice = "paper";
        break;
      case 2:
        aiChoice = "scissors";
        break;
    }
    console.log(aiChoice);
    aiChoiceImg.classList.remove("--hidden");
    aiChoiceImg.src = `./img/${aiChoice}.png`;
    score1El.style.marginTop = "1.5vw";

    const playerChoice = choice.className;
    console.log(playerChoice);
    if (aiChoice === "rock" && playerChoice === "scissors") {
      aiWins();
    } else if (aiChoice === "paper" && playerChoice === "rock") {
      aiWins();
    } else if (aiChoice === "scissors" && playerChoice === "paper") {
      aiWins();
    } else if (aiChoice === playerChoice) {
      winnerEl.style.left = "48.7%";
      winnerEl.textContent = `TIE`;
    } else {
      winnerEl.textContent = `YOU WIN`;
      winnerEl.style.left = "46.5%";
      score0++;
      score0El.textContent = `SCORE: ${score0}`;
    }
    checkScore();
  });
});

document.querySelector(".btn--rst").addEventListener("click", function () {
  score0 = 0;
  score1 = 0;
  total0 = 0;
  total1 = 0;
  score0El.textContent = `SCORE:`;
  score1El.textContent = `SCORE:`;
  total0EL.textContent = `TOTAL:`;
  total1EL.textContent = `TOTAL:`;
  winnerEl.textContent = "";
});
