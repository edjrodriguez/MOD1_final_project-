var newGame = null;

var classicGameSelectorButton = document.querySelector('.classic-game-selector');
var difficultGameSelectorButton = document.querySelector('.difficult-game-selector');
var gameSelectPageHome = document.querySelector('.game-select-page');
var gameSelectHeading = document.querySelector('.heading-game-select');
var gameBoardHeading = document.querySelector('.heading');
var gameBoardPage = document.querySelector('.gameboards');
var scoreCard = document.querySelector('.score-cards');
var homeButtonView = document.querySelector('.home-button-container');
var homeButton = document.querySelector('.home-button');
var leftScore  = document.querySelector('.left-score-count')
var rightScore = document.querySelector('.right-score-count')
var gameWin = document.querySelector('.game-result-win')
var gameLose = document.querySelector('.game-result-lose')
var gameTie = document.querySelector('.game-result-tie')







// var computerSide = document.querySelector('.right-player-board');
// var computerSideOffSides = document.querySelector('.computer-side')


var leftRock = document.querySelector('.L-rock-image')
var leftPaper = document.querySelector('.L-paper-image')
var leftScissors = document.querySelector('.L-scissors-image')
var selectLeftRock = document.querySelector('.L-rock-select')
var selectLeftPaper = document.querySelector('.L-paper-select')
var selectLeftScissors = document.querySelector('.L-scissors-select')

var rightRock = document.querySelector('.outside-rock')
var rightPaper = document.querySelector('.outside-paper')
var rightScissors = document.querySelector('.outside-scissors')
var selectRightRock = document.querySelector('.R-rock-select')
var selectRightPaper = document.querySelector('.R-paper-select')
var selectRightScissors = document.querySelector('.R-scissors-select')

classicGameSelectorButton.addEventListener('click', beginClassicGame);
difficultGameSelectorButton.addEventListener('click', beginDifficultGame);
homeButton.addEventListener('click', goHome);
leftRock.addEventListener('click', playerLeftSelectClassic);
leftPaper.addEventListener('click', playerLeftSelectClassic);
leftScissors.addEventListener('click', playerLeftSelectClassic);


function beginClassicGame(event) {
  beginGame();
  newGame = new Game();
  newGame.startClassicGame();
};

function playerLeftSelectClassic(event){
  leftSelect();
  var piece = event.target.classList;
  if (piece.contains('rock-selection')) {
    show(selectLeftRock)
    newGame.leftPlayer.takeTurn('rock');
  } else if (piece.contains('paper-selection')) {
    show(selectLeftPaper)
    newGame.leftPlayer.takeTurn('paper');
  } else if (piece.contains('scissors-selection')) {
    show(selectLeftScissors)
    newGame.leftPlayer.takeTurn('scissors');
  }
  setTimeout(computerSelectClassic, 500);
  setTimeout(classicGameScoreBoard, 1500);
  setTimeout(playAgain, 2500);
}

function computerSelectClassic() {
  rightSelect();
  var computerSelection = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  var piece = newGame.classicGamePieces[computerSelection];
  if (piece === 'rock') {
    show(selectRightRock);
  } else if (piece === 'paper') {
    show(selectRightPaper);
  } else if (piece === 'scissors') {
    show(selectRightScissors);
  }
  newGame.rightPlayer.takeTurn(piece);
  console.log(newGame);
}

function beginDifficultGame(event) {
  beginGame();
  newGame = new Game();
  newGame.startDifficultGame();
};

function playerLeftSelectDifficult(event){
  leftSelect();
  var piece = event.target.classList;
  if (piece.contains('rock-selection')) {
    show(selectLeftRock)
    newGame.leftPlayer.takeTurn('rock');
  } else if (piece.contains('paper-selection')) {
    show(selectLeftPaper)
    newGame.leftPlayer.takeTurn('paper');
  } else if (piece.contains('scissors-selection')) {
    show(selectLeftScissors)
    newGame.leftPlayer.takeTurn('scissors');
  }
setTimeout(computerSelectDifficult, 4000);
newGame.checkWinnerDifficultGame();
}

function computerSelectDifficult() {
  rightSelect();
  var computerSelection = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  var piece = newGame.classicGamePieces[computerSelection];
  if (piece === 'rock') {
    show(selectRightRock);
  } else if (piece === 'paper') {
    show(selectRightPaper);
  } else if (piece === 'scissors') {
    show(selectRightScissors);
  }
  newGame.rightPlayer.takeTurn(piece);

  console.log(newGame);
}

function classicGameScoreBoard(){
  newGame.checkWinnerClassicGame();
}

function goHome(){
  show(gameSelectPageHome);
  hide(gameBoardPage);
  hide(scoreCard);
  hide(homeButtonView)
  show(gameSelectHeading);
  hide(gameBoardHeading)
}

function playAgain() {
  show(gameBoardPage);
  hide(gameTie);
  hide(gameWin);
  hide(gameLose)
  show(leftPaper);
  show(leftScissors);
  show(leftRock);
  show(rightPaper);
  show(rightScissors);
  show(rightRock);
  hide(selectRightRock);
  hide(selectLeftRock);
  hide(selectRightPaper);
  hide(selectLeftPaper);
  hide(selectRightScissors);
  hide(selectLeftScissors);
}

function leftSelect(){
  hide(leftPaper);
  hide(leftScissors);
  hide(leftRock);
}

function rightSelect(){
  hide(rightPaper);
  hide(rightScissors);
  hide(rightRock);
}

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

function beginGame (){
  hide(gameSelectPageHome);
  hide(gameSelectHeading);
  show(gameBoardHeading)
  show(gameBoardPage);
  show(scoreCard);
  show(homeButtonView)
}

// //these are an extra if I have time
// classicGameSelectorButton.addEventListener('mouseenter', showClassicPieces);
// function showClassicPieces(){
  //
  // }
  //
  // difficultGameSelectorButton.addEventListener('mouseenter', showDifficultPieces);
  // function showDifficultPieces(){
    //
    // }

// computerSide.addEventListener('mouseenter', offSides)

//
// function offSides (){
//   show(computerSideOffSides);
//   hide(computerSide);
// }
