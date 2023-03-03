const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

let computerChoice = getComputerChoice();
let playerChoice = prompt('Choose "rock", "paper" or "scissors".');

function playGame(playerChoice, computerChoice) {}
