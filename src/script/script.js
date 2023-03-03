function getComputerChoice() {
  //Function to get random value for computer choice
  const choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playGame(playerChoice, computerChoice) {
  //Function to measure who win and lost(player vs computer)
  let playerScore = 0;
  let computerScore = 0;
  let rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (playerChoice === computerChoice) {
    return 'Draw!';
  } else if (computerChoice === rules[playerChoice]) {
    return 'You won!';
    playerScore += 1;
  } else {
    return 'You lost!';
    computerScore += 1;
  }
}
function Game() {
  //Function to loop game, before someone score 5 time
  for (let i = 0; i < 5; i++) {
    //Variables to store computer and player choices
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('Choose "rock", "paper" or "scissors".').toLowerCase();
    let result = playGame(playerChoice, computerChoice);
    console.log(result);
  }
}

//Little code for check result
console.log(Game());
