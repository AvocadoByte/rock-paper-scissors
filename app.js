const choiceList = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
const max_rounds = 3;

// Computer choice
const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choiceList.length);
  return choiceList[randomIndex];
};

// User choice
const getPlayerChoice = () => {
  let userChoice = prompt("Write - rock, paper, or scissors").toLowerCase();
  if (choiceList.includes(userChoice)) {
    return userChoice;
  } else {
    console.log("Wrong choice, try again");
    return getPlayerChoice();
  }
};

// Score logic
const Scoring = () => {
  let userChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  console.log(
    `Player choice: ${userChoice}, Computer choice: ${computerChoice}`
  );

  if (userChoice === computerChoice) {
    console.log("Tie");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore += 1;
    console.log(`Player wins! ${userChoice} beats ${computerChoice}`);
  } else {
    computerScore += 1;
    console.log(`Computer wins! ${computerChoice} beats ${userChoice}`);
  }
};

// Game logic
for (let i = 0; i < max_rounds; i++) {
  Scoring();
  console.log(
    `Current Score - Player: ${userScore}, Computer: ${computerScore}`
  );
}

console.log(`Final Score - Player: ${userScore}, Computer: ${computerScore}`);
