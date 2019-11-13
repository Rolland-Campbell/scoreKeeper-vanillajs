let player1 = {
  score: 0
}

let player2 = {
  score: 0
}

let players = [player1, player2]

let finalScore = 11

let player1display = document.querySelector("#player1score")
let player2display = document.querySelector("#player2score")

function count(playerIndex) {
  if (winCheck()) {
    return
  }
  players[playerIndex].score++
  updateScore()
}

function winCheck() {
  if ((players[0].score >= finalScore || players[1].score >= finalScore) && winByTwo()) {
    return true
  }
  return false
}

function winByTwo() {
  return Math.abs(players[0].score - players[1].score) > 1;
}

function updateScore() {
  player1display.textContent = players[0].score.toString()
  player2display.textContent = players[1].score.toString()
}

function reset() {
  players[0].score = 0
  players[1].score = 0
  updateScore()
}