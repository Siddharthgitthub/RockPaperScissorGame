let userScore = 0;
let computerScore = 0;
const result = document.getElementById('result');
const userScoreDiv = document.getElementById('user-score');
const computerScoreDiv = document.getElementById('computer-score');
const buttons = document.querySelectorAll('.btn-choice');
const confetti = document.getElementById('confetti');

// Random choice generator for computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Update Scoreboard
function updateScore() {
    userScoreDiv.textContent = `User: ${userScore}`;
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

// Display Confetti on Win
function showConfetti() {
    confetti.style.display = 'block';
    setTimeout(() => {
        confetti.style.display = 'none';
    }, 1000);
}

// Handle game logic
function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    if (userChoice === computerChoice) {
        result.textContent = `You both chose ${userChoice}. It's a draw!`;
        result.className = 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        result.className = 'win';
        showConfetti();
    } else {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        result.className = 'lose';
    }

    updateScore();
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.textContent.toLowerCase());
    });
});
