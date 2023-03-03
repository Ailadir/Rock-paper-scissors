function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playGame() {
  let computerChoice = getComputerChoice();
  let playerChoice = prompt('Choose "rock", "paper" or "scissors".');
  console.log(playerChoice);
  console.log(computerChoice);
  let rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (playerChoice === computerChoice) {
    console.log('Draw!');
  } else if (computerChoice === rules[playerChoice]) {
    console.log('You won!');
  } else {
    console.log('You lost!');
  }
}
