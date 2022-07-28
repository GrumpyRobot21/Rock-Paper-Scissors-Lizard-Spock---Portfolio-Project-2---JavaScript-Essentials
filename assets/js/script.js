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
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
}

/**
 * Decalres win for user when computer loses and amends user score total
 */
function win(userChoice, computerChoice) {
    userScore++;

    //Briefly changes background colour of user score div to indicate the win
    changeCol();

    function changeCol() {
        document.getElementById("userback").style.background = "#1adbf4";
        setTimeout(function () {
            setNormal();
        }, 100);
    }

    function setNormal() {
        document.getElementById("userback").style.background = "#2f54ce";
    }

    if (userScore === 10) {
        endGame();
    } else {

        // displays numerical score results for user and computer
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;

        //displays both choices and outcome
        results_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    }
}

/**
 * Declares loss for user when computer wins and amends computer score total
 */
function lose(userChoice, computerChoice) {
    computerScore++;

    // Briefly changes background colour of comp score div to indicate the win
    setToBlue();

    function setToBlue() {
        document.getElementById("compback").style.background = "#1adbf4";
        setTimeout(function () {
            setNormal();
        }, 100);
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
        results_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost....`;
    }
}

/**
 * Declares a draw if user and computer make same choice
 */
function draw(userChoice, computerChoice) {
    results_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw!!`;
}

/**
 * Declares winner after 10 rounds then resets game
 */

function endGame(win, lose) {
    if (computerScore === 10) {

        //changes result output background colour
        let element = document.querySelector(".results_p");
        element.style.backgroundColor = "red";

        //announces computer win and loss for player
        results_p.innerHTML = `Bad luck, the computer won ${computerScore} rounds. You lost the game!!! (The Game will restart shortly. Have another go!).`;

        //Clears icon images from gameplay area
        let clear = document.querySelector(".choices");
        clear.remove();

        //plays short audio clip to signify game lost
        let loseSound = new Audio("assets/audio/loseSound.wav");
        loseSound.play();
    } else if (userScore === 10) {

        //changes result output background colour
        let element = document.querySelector(".results_p");
        element.style.backgroundColor = "green";

        //announces win for player
        results_p.innerHTML = `Well done, you won ${userScore} rounds. Live long and prosper!!! (The Game will restart shortly. Have another go!).`;

        //plays short audio clip to signity game won
        let winSound = new Audio("assets/audio/winSound.wav");
        winSound.play();

        //Resets game after 7 seconds once winner is declared
        setTimeout(function() {location.reload()}, 7000);
    }
}

    /**
     * Defines winning scenarios, losing scenarios and draw scenarios
     */

    function playGame(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice, computerChoice) {
            case "rs":
    case "pr":
    case "sp":
    case "rl":
    case "lv":
    case "vs":
    case "sl":
    case "lp":
    case "pv":
    case "vr":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
    case "lr":
    case "vl":
    case "sv":
    case "ls":
    case "pl":
    case "vp":
    case "rv":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "vv":
      draw(userChoice, computerChoice);
      break;
        }
    }

    /**
     * Gameplay event listeners for user icon choices
     */
function main() {
    rock_div.addEventListener("click", function() {playGame("r")});
    paper_div.addEventListener("click", function() {playGame("p")});
    scissors_div.addEventListener("click", function() {playGame("s")});
    lizard_div.addEventListener("click", function() {playGame("l")});
    spock_div.addEventListener("click", function() {playGame("v")});
}

main();

