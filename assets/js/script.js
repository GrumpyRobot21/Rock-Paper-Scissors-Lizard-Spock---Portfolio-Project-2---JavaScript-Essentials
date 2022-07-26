/**
 * create game variables
 */
let uscore = 0;
let comScore = 0;
const uScoreS = document.getElementById("user");
const compScoreS = document.getElementById("computer");
const resultsP = document.querySelector(".score");
const rockD = document.getElementById("r");
const paperD = document.getElementById("p");
const scissorsD = document.getElementById("s");
const lizardD = document.getElementById("l");
const spockD = document.getElementById("v");

/**
 * Random choice generator for computer player
 */
const getcompChoice = () => {
  let choices = ["r", "p", "s", "l", "v"];
  let randomNum = Math.floor(Math.random() * 5);
  return choices[randomNum];
}

/**
 * Object to convert user and computer choices into text for results display
 */
const changeToText = (letter) => {
  return {
    r: "Rock",
    p: "Paper",
    s: "Scissors",
    l: "Lizard",
    v: "Spock"
  } [letter];
}

// activates background color change of either score div to indicate the winner
const changeCol = (id, color) => {
  document.getElementById(id).style.background = color;
}

/**
 * Declares win for user when computer loses and amends user score total
 */
const win = (uchoice, compChoice) => {
  uscore++;

  // Briefly changes background color of user score div to indicate the win
  changeCol("userback", "#1adbf4"); {
    setTimeout(function () {
      setNormal();
    }, 100);
  }

  // changes user score div back to original colour
  const setNormal = () => {
    document.getElementById("userback").style.background = "#2f54ce";
  }

  if (uscore === 10) {

    // calls endGame function if user score is 10
    endGame();
  } else {

    //if user score is less than 10 displays numerical score results for both user and computer and game continues
    uScoreS.innerHTML = uscore;
    compScoreS.innerHTML = comScore;
    resultsP.innerHTML = `${changeToText(uchoice)} beats ${changeToText(
      compChoice
    )}. You Win!!!`;
  }
}

/**
 * Declares loss for user when computer wins and amends computer score total
 */
const lose = (uchoice, compChoice) => {
  comScore++;

  // Briefly changes background color of comp score div to indicate the win
  changeCol("compback", "#1adbf4"); {
    setTimeout(function () {
      setNormal();
    }, 100);
  }
  // changes computer score div back to original colour
  const setNormal = () => {
    document.getElementById("compback").style.background = "#2f54ce"
  }

  if (comScore === 10) {
    // calls endGame function if computer score is 10
    endGame();
  } else {

    //if computer score is less than 10 displays numerical score results for both user and computer and game continues
    uScoreS.innerHTML = uscore;
    compScoreS.innerHTML = comScore;
    resultsP.innerHTML = `${changeToText(
      uchoice
    )} loses to ${changeToText(compChoice)}. You Lost...`;
  }
}

/**
 * Declares a draw if user and computer make same choice
 */
const draw = (uchoice, compChoice) => {
  resultsP.innerHTML = `${changeToText(uchoice)} equals ${changeToText(
    compChoice
  )}. It's a Draw!!`;
}

/**
 * Declares winner after 10 rounds then resets game.
 */
const endGame = () => {
  if (comScore === 10) {

    // changes result output background-colour for lose scenario
    let element = document.querySelector(".score");
    element.style.backgroundColor = "red";
    resultsP.innerHTML = `Bad luck, the computer won ${comScore} rounds. You lost the game!!! (The Game will restart shortly. Have another go!).`;

    // clears icon images from gameplay area
    let clear = document.querySelector(".choices");
    clear.remove();

    //plays short audio file to signify game lost
    let loseSound = new Audio(
      "assets/audio/loseSound.wav"
    );
    loseSound.play();
  } else if (uscore === 10) {

    // changes result output background-colour for win scenario
    let element = document.querySelector(".score");
    element.style.backgroundColor = "green";
    resultsP.innerHTML = `Well done, you won ${uscore} rounds. Live long and prosper!!! (The Game will restart shortly. Have another go!).`;

    // clears icon images from gameplay area
    let clear = document.querySelector(".choices");
    clear.remove();

    //plays short audio file to signify game won
    let winSound = new Audio(
      "assets/audio/winSound.wav"
    );
    winSound.play();
  }

  //resets game after 7 seconds once winner is declared
  setTimeout(function () {
    location.reload();
  }, 7000);
}

/**
 * Defines winning scenarios, losing scenarios and draw scenarios
 */
const playGame = (uchoice) => {
  const compChoice = getcompChoice();
  switch (uchoice + compChoice) {
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
      win(uchoice, compChoice);
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
      lose(uchoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "vv":
      draw(uchoice, compChoice);
      break;
  }
}

/**
 * Gameplay event listeners for player icon choices
 */
const main = () => {
  rockD.addEventListener("click", function () {
    playGame("r");
  });

  paperD.addEventListener("click", function () {
    playGame("p");
  });

  scissorsD.addEventListener("click", function () {
    playGame("s");
  });

  lizardD.addEventListener("click", function () {
    playGame("l");
  });

  spockD.addEventListener("click", function () {
    playGame("v");
  });
}

main();