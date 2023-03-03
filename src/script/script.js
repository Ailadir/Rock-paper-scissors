function getComputerChoice() {
  //Function to get random value for computer choice
  const choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function playGame(playerChoice, computerChoice) {
  //Function to measure who win and lost(player vs computer)
  let rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (playerChoice === computerChoice) {
    return 'Draw!';
  } else if (computerChoice === rules[playerChoice]) {
    return 'You won!';
  } else {
    return 'You lost';
  }
}

function Game() {
  let playerScore = 0;
  let computerScore = 0;

  //Function to loop game, before someone score 5 time
  while (playerScore < 5 && computerScore < 5) {
    //Variables to store computer and player choices
    let computerChoice = getComputerChoice();
    let playerChoice = prompt('Choose "rock", "paper" or "scissors".').toLowerCase();

    let result = playGame(playerChoice, computerChoice);
    console.log(result);
    if (result === 'You won!') {
      playerScore++;
      console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    } else if (result === 'You lost') {
      computerScore++;
      console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    } else {
      console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }
  }

  //Determine who won the game
  if (playerScore > computerScore) {
    return 'You won the game!';
  } else if (playerScore < computerScore) {
    return 'You lost the game!';
  } else {
    return 'The game ended in a draw!';
  }
}

//Little code for check result
console.log(Game());
