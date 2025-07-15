'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Initial Score
let score = 20;
// Initial highscore
let highscore = 0;

// Creating a message funciton
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔🙅‍♀️ No Number!';
    displayMessage(`⛔🙅‍♀️ No Number!`);

    // When Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `🎉 Correct Number!`;
    displayMessage(`🎉 Correct Number!`);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? `📈 Too high!` : `📉 Too low!`;
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `💥 You lost the game!`;
      displayMessage(`💥 You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `📈 Too high!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `💥 You lost the game!`;
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `📉 Too low!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `💥 You lost the game!`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);

  document.querySelector('.number').textContent = `?`;

  document.querySelector('.guess').value = ``;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
