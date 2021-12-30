
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
    return userInput;
  } else {
    console.log('This is not a valid input');
  }
};

// console.log(getUserChoice('beans'));

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random()*3);
 switch(randomNumber){
   case 0:
   return 'rock';
   case 1:
   return 'paper';
   case 2:
   return 'scissors';
 }
}
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice){
  return 'This game is a tie!';
}
if (userChoice === 'rock') {
  if(computerChoice === 'paper') {
    return 'The machine beat you!';
  } else {
    return 'The user won!';
  }
}
if (userChoice === 'paper') {
  if(computerChoice === 'scissors') {
    return 'The machine beat you!';
  } else {
    return 'The user won!';
  }
}
if (userChoice === 'scissors') {
  if(computerChoice === 'rock') {
    return 'The machine beat you!';
  } else {
    return 'The user won!';
  }
}
if (userChoice === 'bomb'){
  return 'You blew up your opponent!';
}
};

// console.log(determineWinner('rock'));

const playGame= () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log(`You picked ${userChoice} and the computer chose ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

