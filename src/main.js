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

leftRock.addEventListener('click', selectedLeftRock);
leftPaper.addEventListener('click', selectedLeftPaper);
leftScissors.addEventListener('click', selectedLeftScissors);

rightRock.addEventListener('click', selectedRightRock);
rightPaper.addEventListener('click', selectedRightPaper);
rightScissors.addEventListener('click', selectedRightScissors);


function selectedLeftRock(){
  show(selectLeftRock);;
  leftSelect();

}

function selectedLeftPaper(){
  show(selectLeftPaper);
  leftSelect();
}
function selectedLeftScissors(){
  show(selectLeftScissors);
  leftSelect();
}

function selectedRightRock(){
  show(selectRightRock);
  rightSelect();
}

function selectedRightPaper(){
  show(selectRightPaper)
  rightSelect();
}

function selectedRightScissors(){
  show(selectRightScissors)
  rightSelect();
}


function goHome(){
  show(gameSelectPageHome);
  hide(gameBoardPage);
  hide(scoreCard);
  hide(homeButtonView)
  show(gameSelectHeading);
  hide(gameBoardHeading)
}


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
