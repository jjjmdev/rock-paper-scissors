// INIT random computer choice
// Options are: rock, paper, scissors
let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
	let choices = ["ROCK", "PAPER", "SCISSORS"];

	// RETURN either rock, paper, or scissors
	return choices[Math.floor(Math.random() * 3)];
};

let getPlayerChoice = () => {
	return prompt("Rock, paper, or scissors?");
};

// HELPER
let playerWin = (playerSelection, computerSelection) => {
	playerScore++;
	return `You win! ${playerSelection} beats ${computerSelection}`;
};

let computerWin = (playerSelection, computerSelection) => {
	computerScore++;
	return `You lose! ${computerSelection} beats ${playerSelection}`;
};

// Plays one round
let playRound = (playerSelection, computerSelection) => {
	playerSelection = playerSelection.toUpperCase();

	if (
		playerSelection !== "ROCK" &&
		playerSelection !== "PAPER" &&
		playerSelection !== "SCISSORS"
	)
		return "Invalid input.";

	if (playerSelection === computerSelection) return "Draw!";

	if (playerSelection === "ROCK") {
		if (computerSelection === "PAPER") {
			return computerWin(playerSelection, computerSelection);
		}

		return playerWin(playerSelection, computerSelection);
	} else if (playerSelection === "PAPER") {
		if (computerSelection === "SCISSORS") {
			return computerWin(playerSelection, computerSelection);
		}

		return playerWin(playerSelection, computerSelection);
	} else if (computerSelection === "ROCK") {
		// playerSelection = 'scissors' since it's the only remaining option
		return computerWin(playerSelection, computerSelection);
	} else {
		return playerWin(playerSelection, computerSelection);
	}
};

let displayScore = () => {
	if (playerScore >= 5) return "Player wins!";
	else if (computerScore >= 5) return "Computer wins!";

	return `Player: ${playerScore}, Computer: ${computerScore}`;
};

const container = document.querySelector("#container");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

container.addEventListener("click", (event) => {
	let target = event.target;

	switch (target.id) {
		case "rock":
		case "paper":
		case "scissors":
			result.textContent = `${playRound(target.id, getComputerChoice())}`;
			score.textContent = displayScore();
			break;
	}
});
