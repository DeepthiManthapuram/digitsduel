let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.random() * 100;

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Your guess is less than the target.Aim higher!";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "You got it! Great job!";
    }
}