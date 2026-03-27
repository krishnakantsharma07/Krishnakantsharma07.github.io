// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set max attempts
let maxAttempts = 7;
let attemptsLeft = maxAttempts;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");
    let attempts = document.getElementById("attempts");

    if (userGuess === "") {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    userGuess = Number(userGuess);
    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high!";
    } else {
        message.textContent = "📈 Too low!";
    }

    attempts.textContent = "Attempts left: " + attemptsLeft;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = "❌ Game Over! Number was " + randomNumber;
        endGame();
    }
}

// End game function
function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
}

// Restart game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
    document.querySelector("button").disabled = false;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";

    document.getElementById("restartBtn").style.display = "none";
}
