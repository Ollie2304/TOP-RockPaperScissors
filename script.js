let userSelection;
let computerSelection;
const displayResult = document.getElementById('result');
const userChoice = document.getElementById('user-choice');
var result = results();
const possibleChoices = document.querySelectorAll('.choices');
const computerChoice = document.getElementById('computer-choice');



// user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userSelection = e.target.id;
  generatedComputerChoice();
  results();
  userChoice.innerHTML = userSelection;
  computerChoice.innerHTML = computerSelection;
  displayResult.innerHTML = result;
}))

//computer choice
function generatedComputerChoice() {
    const randomNumber = Math.floor(Math.random() * (3))
  if (randomNumber === 0) {
    return computerSelection = '✊'
  } else if (randomNumber === 1) {
    return computerSelection = '✋'
  } else if (randomNumber === 2) {
    return computerSelection = '✌'
  }
}

//results
function results() {
  if (computerSelection == userSelection) {
    return result = 'You tied!'
  } else if (computerSelection === '✊' && userSelection === '✋') {
    return result = 'You won!'
  } else if (computerSelection === '✊' && userSelection === '✌') {
    return result = 'You lost!'
  } else if (computerSelection === '✋' && userSelection === '✊') {
    return result = 'You lost!'
  } else if (computerSelection === '✋' && userSelection === '✌') {
    return result = 'You won!'
  } else if (computerSelection === '✌' && userSelection === '✊') {
    return result = 'You won!'
  } else if (computerSelection === '✌' && userSelection === '✋') {
    return result = 'You won!'
  }
}