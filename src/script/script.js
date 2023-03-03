const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(choices) {
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
