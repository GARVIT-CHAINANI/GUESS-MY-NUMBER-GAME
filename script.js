let randNum = document.querySelector(".number");
let score = 10;
let highscoreNum = 0;
let highScore = document.querySelector(".highscore");
let numGenrator = Math.trunc(Math.random() * 20) + 1;
console.log(numGenrator);
let message = document.querySelector(".message");
let guessInput = document.querySelector(".guess");
let again = document.querySelector(".again");
let gameWon = false;

again.addEventListener("click", function () {
    score = 10;
    document.querySelector(".score").innerText = score;
    numGenrator = Math.trunc(Math.random() * 20) + 1;
    console.log(numGenrator);
    message.innerText = `Start guessing...`;
    guessInput.value = "";
    guessInput.disabled = false;
    randNum.innerText = "?";
    gameWon = false;
});

let check = document.querySelector(".check");
check.addEventListener("click", function() {
    let guess = Number(guessInput.value);
    
    if (!gameWon) {
        if (guess > 20 || guess <= 0 || !guess) {
            message.textContent = "SELECT A NUMBER BETWEEN 1 TO 20!";
        } else if (guess === numGenrator) {
            message.textContent = "CORRECT NUMBER";
            randNum.innerText = numGenrator;
            guessInput.disabled = true;
            gameWon = true;
            if (score > highscoreNum) {
                highscoreNum = score; 
                highScore.innerText = highscoreNum;
            }
        } else if (guess > numGenrator) {
            message.textContent = "TOO HIGH";
            score--;
            document.querySelector(".score").innerText = score;
            if (score < 1) {
                message.textContent = "YOU LOSE.";
                guessInput.disabled = true;
                gameWon = true 
            }
        } else if (guess < numGenrator) {
            message.textContent = "TOO LOW";
            score--;
            document.querySelector(".score").innerText = score;
            if (score < 1) {
                message.textContent = "YOU LOSE.";
                guessInput.disabled = true;
            }
        } else {
            message.textContent = "SELECT APPROPRIATE NUMBER";
        }
    }
});
