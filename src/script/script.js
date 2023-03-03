function getComputerChoice() {
  //Function to get random value for computer choice
  const choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function Game() {
  //Function to loop game, before someone score 5 time

  function playGame(playerChoice, computerChoice) {
    //Function to measure who win and lost(player vs computer)
    let rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    if (playerChoice === computerChoice) {
      return 'Draw!';
    } else if (computerChoice === rules[playerChoice]) {
      return 'You won!';
    } else {
      return 'You lost!';
    }
  }

  //Variables to store computer and player choices
  let computerChoice = getComputerChoice();
  let playerChoice = prompt('Choose "rock", "paper" or "scissors".').toLowerCase();
  //Little code for check result
  console.log(playGame(playerChoice, computerChoice));
}
