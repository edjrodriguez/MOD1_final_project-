var classicGameSelectorButton = document.querySelector('.classic-game-selector');
var difficultGameSelectorButton = document.querySelector('.difficult-game-selector');
var gameSelectPageHome = document.querySelector('.game-select-page');
var gameSelectHeading = document.querySelector('.heading-game-select');
var gameBoardHeading = document.querySelector('.heading');
var gameBoardPage = document.querySelector('.gameboards');
var scoreCard = document.querySelector('.score-cards');
var homeButtonView = document.querySelector('.home-button-container');
var homeButton = document.querySelector('.home-button');
var computerSide = document.querySelector('.right-player-board');
var computerSideOffSides = document.querySelector('.computer-side')
var leftRock = document.querySelector('.L-rock-image')
var leftPaper = document.querySelector('.L-paper-image')
var leftScissors = document.querySelector('.L-scissors-image')
var rightRock = document.querySelector('.R-rock-image')
var rightPaper = document.querySelector('.R-paper-image')
var rightScissors = document.querySelector('.R-scissors-image')
var leftScore  = document.querySelector('.left-score-count')
var rightScore = document.querySelector('.right-score-count')


classicGameSelectorButton.addEventListener('click', beginClassicGame);
difficultGameSelectorButton.addEventListener('click', beginDifficultGame);
homeButton.addEventListener('click', goHome);
// computerSide.addEventListener('mouseenter', offSides)
// leftRock.addEventListener('click', functionTBD1);
// leftPaper.addEventListener('click', functionTBD2 );
// leftScissors.addEventListener('click', functionTBD3);

function goHome(){
  var exitGame = new Game();
  exitGame.reset();
  show(gameSelectPageHome);
  hide(gameBoardPage);
  hide(scoreCard);
  hide(homeButtonView)
  show(gameSelectHeading);
  hide(gameBoardHeading)

}
//
// function offSides (){
//   show(computerSideOffSides);
//   hide(computerSide);
// }


function beginClassicGame(event) {
  beginGame();
  var newGame = new Game();
  newGame.startClassicGame();

};

function beginDifficultGame(event) {
  beginGame();
  var newGame = new Game();
  newGame.startDifficultGame();
};

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
