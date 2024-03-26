// INIT random computer choice
// Options are: rock, paper, scissors

let getComputerChoice = () => {
    let choices = ["ROCK", "PAPER", "SCISSORS"];

    // RETURN either rock, paper, or scissors
    return choices[Math.floor(Math.random() * 3)];
};

let getPlayerChoice = () => {
    return prompt("Rock, paper, or scissors?");
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
        if (computerSelection === "PAPER") return "You lose! Paper beats rock.";

        return "You win! Rock beats scissors.";
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS")
            return "You lose! Scissors beat paper";

        return "You win! Paper beats rock.";
    } else if (computerSelection === "ROCK")
        // playerSelection = 'scissors' since it's the only remaining option
        return "You lose! Rock beats scissors.";

    return "You win! Scissors beat paper.";
};

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
