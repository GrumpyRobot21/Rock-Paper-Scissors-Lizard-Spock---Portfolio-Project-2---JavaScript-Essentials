/**
 * create game variables
 */
let userScore = 0
let computerScore = 0
const userScoreSpan = document.getElementById("user-score")
const computerScoreSpan = document.getElementById("computer-score")
const resultsP = document.querySelector(".score")
const rockDiv = document.getElementById("r")
const paperDiv = document.getElementById("p")
const scissorsDiv = document.getElementById("s")
const lizardDiv = document.getElementById("l")
const spockDiv = document.getElementById("v")

/**
 * Random choice generator for computer player
 */
function getComputerChoice() {
  let choices = ["r", "p", "s", "l", "v"]
  let randomNumber = Math.floor(Math.random() * 5)
  return choices[randomNumber]
}

/**
 * converts user and computer choices into text for results display
 */
function convertToWord(letter) {
  if (letter === "r") return "Rock"
  if (letter === "p") return "Paper"
  if (letter === "s") return "Scissors"
  if (letter === "l") return "Lizard"
  return "Spock"
}

/**
 * Declares win for user when computer loses and amends user score total
 */
function win(userChoice, computerChoice) {
  userScore++;
  // Briefly changes background color of user score div to indicate the win
  function changeCol() {
    document.getElementById("userback").style.background = "#1adbf4"
    setTimeout(function () {
      setNormal()
    }, 100)
  }
  changeCol();

  function setNormal() {
    document.getElementById("userback").style.background = "#2f54ce"
  }

  if (userScore === 10) {
    // calls endGame function if user score is 10
    endgame();
  } else {
    //displays numerical score results for user and computer and game continues
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    resultsP.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
      computerChoice
    )}. You Win!!!`;
  }
}

/**
 * Declares loss for user when computer wins and amends computer score total
 */
function lose(userChoice, computerChoice) {
  computerScore++
  // Briefly changes background color of comp score div to indicate the win
  function setToBlue() {
    document.getElementById("compback").style.background = "#1adbf4"
    setTimeout(function () {
      setNormal()
    }, 100)
  }
  setToBlue();

  function setNormal() {
    document.getElementById("compback").style.background = "#2f54ce"
  }

  if (computerScore === 10) {
    // calls endGame function if computer score is 10
    endgame();
  } else {
    //displays numerical score results for user and computer and game continues
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    resultsP.innerHTML = `${convertToWord(
      userChoice
    )} loses to ${convertToWord(computerChoice)}. You Lost...`;
  }
}

/**
 * Declares a draw if user and computer make same choice
 */
function draw(userChoice, computerChoice) {
  resultsP.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a Draw!!`
}

/**
 * Declares winner after 10 rounds then resets game.
 */
function endgame(win, lose) {
  if (computerScore === 10) {
    let element = document.querySelector(".score")
    element.style.backgroundColor = "red" // changes result output background-colour for lose scenario
    resultsP.innerHTML = `Bad luck, the computer won ${computerScore} rounds. You lost the game!!! (The Game will restart shortly. Have another go!).`

    // clears icon images from gameplay area
    let clear = document.querySelector(".choices")
    clear.remove();

    //plays short audio file to signify game lost
    let loseSound = new Audio(
      "../audio/loseSound.wav"
    )
    loseSound.play();
  } else if (userScore === 10) {
    let element = document.querySelector(".score")
    element.style.backgroundColor = "green" // changes result output background-colour for win scenario
    resultsP.innerHTML = `Well done, you won ${userScore} rounds. Live long and prosper!!! (The Game will restart shortly. Have another go!).`
    
    // clears icon images from gameplay area
    let clear = document.querySelector(".choices")
    clear.remove()

    //plays short audio file to signify game won
    let winSound = new Audio(
      "../audio/winSound.wav"
    )
    winSound.play();
  }

  //resets game after 7 seconds once winner is declared
  setTimeout(function () {
    location.reload()
  }, 7000)
}

/**
 * Defines winning scenarios, losing scenarios and draw scenarios
 */
function playGame(userChoice) {
  const computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {
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
      win(userChoice, computerChoice)
      break
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
      lose(userChoice, computerChoice)
      break
    case "rr":
    case "pp":
    case "ss":
    case "ll":
    case "vv":
      draw(userChoice, computerChoice)
      break
  }
}

/**
 * Gameplay event listeners for player icon choices
 */
function main() {
  rockDiv.addEventListener("click", function () {
    playGame("r")
  })

  paperDiv.addEventListener("click", function () {
    playGame("p")
  })

  scissorsDiv.addEventListener("click", function () {
    playGame("s")
  })

  lizardDiv.addEventListener("click", function () {
    playGame("l")
  })

  spockDiv.addEventListener("click", function () {
    playGame("v")
  })
}

main();