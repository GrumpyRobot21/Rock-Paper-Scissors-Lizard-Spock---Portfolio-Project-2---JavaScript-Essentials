// caching the DOM and connecting HTML elements with variables for easier debugging
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("v");


/**
 * Random choice generator for computer player
 */
function getComputerChoice() {
    let choices= ["r", "p", "s", "l", "v"];
    let randomNumber = Math.floor(Math.random()*5);
    return choices[randomNumber];
}

/**
 * converts user and computer choices into text for results display purposes
 */
function convertToWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    if (letter === "s") return "Scissors"
    if (letter === "l") return "Lizard"
    return "Spock";
}


