// caching the DOM and connecting HTML elements with variables for easier debugging
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
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
    let choices = ["r", "p", "s", "l", "v"];
    let randomNumber = Math.floor(Math.random() * 5);
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

/**
 * Decalres win for user when computer loses and amends user score total
 */
function win(userChoice, computerChoice) {
    userScore++

    //Briefly changes background colour of user score div to indicate the win
    changeCol()

    function changeCol() {
        document.getElementById("userback").style.background = "#1adbf4";
        setTimeout(function () {
            setNormal()
        }, 100)
    }

    function setNormal() {
        document.getElementById("userback").style.background = "#2f54ce"
    }

    if (userScore === 10) {
        endGame()
    } else {

        // displays numerical score results for user and computer
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

        //displays both choices and outcome
        results_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`
    }
}

/**
 * Declares loss for user when computer wins and amends computer score total
 */
function lose(userChoice, computerChoice) {
    computerScore++

    // Briefly changes background colour of comp score div to indicate the win
    setToBlue();

    function setToBlue() {
        document.getElementById("compback").style.background = "#1adbf4";
        setTimeout(function () {
            setNormal
        }, 100)
    }

    function setNormal() {
        document.getElementById("compback").style.background = "#2f54ce";
    }

    if (computerScore === 10) {
        endGame();
    } else {

        // displays numerical score results for user and computer
        userScore_span.innerHTML = userScore;
        computerScore.innerHTML = computerScore;

        // displays both choices and outcome
        results_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost....`
    }
}

/**
 * Declares a draw if user and computer make same choice
 */
function draw(userChoice, computerChoice) {
    results_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw!!`
}

/**
 * Declares winner after 10 rounds then resets game
 */

function endGame(win, lose) {

    

}