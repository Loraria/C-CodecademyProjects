let userName = 'Amelie';
//how to address User
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'is my cat gay?';
//printing user question
console.log(`${userName} wishes to know ${userQuestion}.`);
//random number between 0 and 7
let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';
//control flow takes random number and assigns eightBall according answer
switch (randomNumber) {
  case (0):
    eightBall = 'It is inevitable';
    break;
  case (1):
    eightBall = 'The council agrees';
    break;
  case (2):
    eightBall = 'You are testing your luck';
    break;
  case (3):
    eightBall = 'it advises against it';
    break;
  case (4):
    eightBall = 'Doesn\'t everybody?';
    break;
  case (5):
    eightBall = 'Yes, it can see it clearly';
    break;
  case (6):
    eightBall = 'The fbi disagrees';
    break;
  case (7):
    eightBall = 'it cannot possibly tell';
    break;
}

console.log(`The Magic Eight Ball advises that ${eightBall}`);
