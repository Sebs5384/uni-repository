const number = Number(prompt("Insert a range between 1 to 20 for the guessing game"));
const range = numberRange(number);
const randomNumber = Math.floor(Math.random() * range.length);
const attempts = userAttempts(number);
let remainingAttempts = 0;
let userGuesses = [];

function userAttempts(number) {
  let userAttempts = 0;
  if (number >= 10) {
    userAttempts = 5;
  } else {
    userAttempts = 3;
  }
  return userAttempts;
}

function numberRange(number) {
  let myArray = [];
  for (let i = 0; i < number; i++) {
    myArray.push(i + 1);
  }
  return myArray;
}

function sortAscending(guesses) {
  guesses.sort(function (a, b) {
    return a - b;
  });
  return guesses;
}

function guessTheNumberGame(attempts, userGuesses) {
  for (let i = 0; i < attempts; i++) {
    remainingAttempts++;
    const guess = Number(prompt(`Can you guess the incognito number? you have ${attempts - i} attempts to guess it`));
    for (let i = 0; i < userGuesses.length; i++) {
      if (userGuesses[i] === guess) {
        console.log(`You already guessed ${guess}, try another number`);
        remainingAttempts--;
        continue;
      }
    }

    if (randomNumber !== guess) {
      if (guess < randomNumber) {
        userGuesses.push(guess);
        console.log(`${guess} is lower than our incognito, try again you still have ${attempts - (i + 1)} attempts, your current guesses are ${sortAscending(userGuesses)}.`);
      } else if (guess > randomNumber) {
        userGuesses.push(guess);
        console.log(`${guess} is higher than our incognito, try again you still have ${attempts - (i + 1)} attempts, your current guesses are ${sortAscending(userGuesses)}`);
      }
    }

    if (randomNumber === guess) {
      console.log(`Congratulations the incognito was indeed ${randomNumber}, you win !`);
      break;
    } else if (remainingAttempts === attempts) {
      console.log(`Your ${attempts} attempts are all gone, game over! your guesses were ${sortAscending(userGuesses)}`);
    }
  }
}

guessTheNumberGame(attempts, userGuesses);
