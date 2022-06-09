var classicGameSelectorButton = document.querySelector('.classic-game-selector');
var difficultGameSelectorButton = document.querySelector('.difficult-game-selector');
var gameSelectPageHome = document.querySelector('.game-select-page');
var gameBoardPage = document.querySelector('.gameboards');
var scoreCard = document.querySelector('.score-cards');
var homeButtonView = document.querySelector('.home-button-container');
var homeButton = document.querySelector('.home-button');


classicGameSelectorButton.addEventListener('click', beginClassicGame);
difficultGameSelectorButton.addEventListener('click', beginDifficultGame);
homeButton.addEventListener('click', goHome);

function beginClassicGame(event) {
  hide(gameSelectPageHome);
  show(gameBoardPage);
  show(scoreCard);
  show(homeButtonView)

};

function goHome(){
  show(gameSelectPageHome);
  hide(gameBoardPage);
  hide(scoreCard);
  hide(homeButtonView)

}

function beginDifficultGame(event) {
  hide(gameSelectPageHome);
  show(gameBoardPage);
  show(scoreCard);
  show(homeButton);
};


function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};
