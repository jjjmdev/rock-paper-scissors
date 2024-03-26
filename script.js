// INIT random computer choice
// Options are: rock, paper, scissors

let getComputerChoice = () => {
    let choices = ["ROCK", "PAPER", "SCISSORS"];

    // RETURN either rock, paper, or scissors
    return choices[Math.floor(Math.random() * 3)];
};
