var classicGameSelectorButton = document.querySelector('.classic-game-selector');
var difficultGameSelectorButton = document.querySelector('.difficult-game-selector');
var gameSelectPageHome = document.querySelector('.game-select-page');
var gameSelectHeading = document.querySelector('.heading-game-select');
var gameBoardHeading = document.querySelector('.heading');
var difficultBoardHeading = document.querySelector('.difficult-heading');
var gameBoardPage = document.querySelector('.gameboards');
var difficultGameBoardPage = document.querySelector('.difficult-gameboards');
var form = document.querySelector('.popup-container')
var buttonStart = document.querySelector('.btn-start')

var buttonStart2 = document.querySelector('.btn-start2')


var scoreCard = document.querySelector('.score-cards');
var computerName = document.querySelector('.computer-name')
var computerAvatar = document.querySelector('.computer-avatar')
var userName = document.querySelector('.user-name')
var userAvatar = document.querySelector('.user-avatar')
var userInputName = document.querySelector('.userinput')
var selectedAvatar = document.querySelector('.userinput2')


var homeButtonView = document.querySelector('.home-button-container');
var homeButtonViewDifficult = document.querySelector('.home-button-container-difficult');
var homeButton = document.querySelector('.home-button')
var homeButton2 = document.querySelector('.home-button2')
var resetButton = document.querySelector('.reset-button');
var resetButton2 = document.querySelector('.reset-button2');
var leftScore  = document.querySelector('.left-score-count');
var rightScore = document.querySelector('.right-score-count');
var gameWin = document.querySelector('.game-result-win');
var gameLose = document.querySelector('.game-result-lose');
var gameTie = document.querySelector('.game-result-tie');
var leftRock = document.querySelector('#l-rock');
var leftPaper = document.querySelector('#l-paper');
var leftScissors = document.querySelector('#l-scissors');
var selectLeftRock = document.querySelector('.L-rock-select');
var selectLeftPaper = document.querySelector('.L-paper-select');
var selectLeftScissors = document.querySelector('.L-scissors-select');
var rightRock = document.querySelector('.outside-rock');
var rightPaper = document.querySelector('.outside-paper');
var rightScissors = document.querySelector('.outside-scissors');
var selectRightRock = document.querySelector('.R-rock-select');
var selectRightPaper = document.querySelector('.R-paper-select');
var selectRightScissors = document.querySelector('.R-scissors-select');
var leftMetal = document.querySelector('.l-metal');
var leftWater = document.querySelector('.l-water');
var leftWood = document.querySelector('.l-wood');
var leftFire = document.querySelector('.l-fire');
var leftEarth = document.querySelector('.l-earth');
var selectLeftMetal = document.querySelector('.L-metal-select');
var selectLeftWater = document.querySelector('.L-water-select');
var selectLeftWood = document.querySelector('.L-wood-select');
var selectLeftFire = document.querySelector('.L-fire-select');
var selectLeftEarth = document.querySelector('.L-earth-select');
var rightMetal = document.querySelector('.outside-metal');
var rightWater = document.querySelector('.outside-water');
var rightWood = document.querySelector('.outside-wood');
var rightFire = document.querySelector('.outside-fire');
var rightEarth = document.querySelector('.outside-earth');
var selectRightMetal = document.querySelector('.R-metal-select');
var selectRightWater = document.querySelector('.R-water-select');
var selectRightWood = document.querySelector('.R-wood-select');
var selectRightFire = document.querySelector('.R-fire-select');
var selectRightEarth = document.querySelector('.R-earth-select');
var rules1 = document.querySelector('.rules1')
var pieces1 = document.querySelector('.pieces1')
var rules2 = document.querySelector('.rules2')
var pieces3 = document.querySelector('.pieces3')
var pieces2 = document.querySelector('.pieces2')

var newGame = null;

classicGameSelectorButton.addEventListener('mouseenter', showClassicPieces);
classicGameSelectorButton.addEventListener('mouseleave', showClassicPieces);
classicGameSelectorButton.addEventListener('click', openClassicTypeGame);
difficultGameSelectorButton.addEventListener('click', openDifficultTypeGame);
difficultGameSelectorButton.addEventListener('mouseenter', showDifficultPieces);
difficultGameSelectorButton.addEventListener('mouseleave', showDifficultPieces);
homeButton.addEventListener('click', goHome);
homeButton2.addEventListener('click', goHome);
buttonStart.addEventListener('click', continueGame);
buttonStart2.addEventListener('click', continueGame2)
resetButton.addEventListener('click', resetPage);
resetButton2.addEventListener('click', resetPage);
leftRock.addEventListener('click', playerLeftSelectClassic);
leftPaper.addEventListener('click', playerLeftSelectClassic);
leftScissors.addEventListener('click', playerLeftSelectClassic);
leftMetal.addEventListener('click', playerLeftSelectDifficult);
leftWater.addEventListener('click', playerLeftSelectDifficult);
leftWood.addEventListener('click', playerLeftSelectDifficult);
leftFire.addEventListener('click', playerLeftSelectDifficult);
leftEarth.addEventListener('click', playerLeftSelectDifficult);
window.addEventListener ('beforeunload', (event) => {
  event.returnValue = "This will clear your score.  Continue?";
})

function playerLeftSelectClassic(event){
  leftSelect();
  newGame.leftPlayer.takeTurn(event);
  homeButton.disabled = true;
  setTimeout(computerSelectClassic, 500);
  setTimeout(classicGameScoreBoard, 1500);
  setTimeout(playAgain, 2500);
}

function computerSelectClassic() {
  rightSelect();
  newGame.rightPlayer.takeTurn();
}

function playerLeftSelectDifficult(event){
  difficultLeftSelect();
  newGame.leftPlayer.takeTurnDifficultGame(event);
  homeButton2.disabled = true;
  setTimeout(computerSelectDifficult, 500);
  setTimeout(difficultGameScoreBoard, 1500);
  setTimeout(playDifficultAgain, 2500);
}

function computerSelectDifficult() {
  difficultRightSelect();
  newGame.rightPlayer.takeTurnDifficultGame();
}

function classicGameScoreBoard(){
  newGame.checkWinnerClassicGame();
}

function difficultGameScoreBoard(){
  newGame.checkWinnerDifficultGame();
}

function continueGame(){
  hide(form);
  show(homeButtonViewDifficult)
  show(homeButtonView)
  show(gameBoardPage)
  if(userInputName.value != ''){
  userName.innerText = userInputName.value;
  }
  if (selectedAvatar.value != "🫥")
  userAvatar.innerText = selectedAvatar.value;
}


function continueGame2(){
  hide(form);
  show(homeButtonViewDifficult)
  show(homeButtonView)
  show(difficultGameBoardPage)
  if (userInputName.value != '' || selectedAvatar.value != "🫥"){
    userName.innerText = userInputName.value;
    userAvatar.innerText = selectedAvatar.value;
  }
  if (selectedAvatar.value != "🫥")
  userAvatar.innerText = selectedAvatar.value;
}



function openClassicTypeGame(event){
  if (newGame === null){
    newGame = new Game();
    hide(gameSelectPageHome);
    hide(gameSelectHeading);
    show(gameBoardHeading)
    show(gameBoardPage);
    show(scoreCard);
    show(homeButtonView)
    show(buttonStart)
    hide(buttonStart2)
    setTimeout(startTheGame, 1000);
  } else {
    hide(gameSelectPageHome);
    hide(gameSelectHeading);
    show(gameBoardHeading)
    show(gameBoardPage);
    show(scoreCard);
    show(homeButtonView)
  }
}

function openDifficultTypeGame (){
  if (newGame === null){
    newGame = new Game();
    hide(gameSelectPageHome);
    hide(gameSelectHeading);
    show(difficultBoardHeading)
    show(difficultGameBoardPage);
    show(scoreCard);
    hide(buttonStart)
    show(buttonStart2)
    show(homeButtonViewDifficult)
    setTimeout(startTheGame, 1000);
  } else {
    hide(gameSelectPageHome);
    hide(gameSelectHeading);
    show(difficultBoardHeading)
    show(difficultGameBoardPage);
    show(scoreCard);
    show(homeButtonViewDifficult)
  }
}

function goHome(){
  hide(form)
  show(gameSelectPageHome);
  hide(gameBoardPage);
  hide(difficultGameBoardPage);
  hide(scoreCard);
  hide(homeButtonView);
  hide(homeButtonViewDifficult);
  show(gameSelectHeading);
  hide(gameBoardHeading)
  hide(difficultBoardHeading)
}

function resetPage(){
  location.reload();
}

function startTheGame(){
   newGame.startGame();
}

function playAgain() {
  homeButton.disabled = false;
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
  show(resetButton);
  show(resetButton2);
}

function playDifficultAgain() {
  homeButton2.disabled = false;
  show(difficultGameBoardPage);
  hide(gameTie);
  hide(gameWin);
  hide(gameLose)
  show(leftMetal);
  show(leftWater);
  show(leftWood);
  show(leftFire);
  show(leftEarth);
  show(rightMetal);
  show(rightWater);
  show(rightWood);
  show(rightFire);
  show(rightEarth);
  hide(selectRightMetal);
  hide(selectLeftMetal);
  hide(selectRightWater);
  hide(selectLeftWater);
  hide(selectRightWood);
  hide(selectLeftWood);
  hide(selectRightFire);
  hide(selectLeftFire);
  hide(selectRightEarth);
  hide(selectLeftEarth);
  show(resetButton2);
  show(resetButton);
}

function showClassicPieces(){
  toggle(rules1)
  toggle(pieces1)
}

function showDifficultPieces(){
  toggle(rules2)
  toggle(pieces2)
  toggle(pieces3)
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

function difficultLeftSelect(){
  hide(leftMetal);
  hide(leftWater);
  hide(leftWood);
  hide(leftFire);
  hide(leftEarth);
}

function difficultRightSelect(){
  hide(rightMetal);
  hide(rightWater);
  hide(rightWood);
  hide(rightFire);
  hide(rightEarth);
}

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

function toggle(element) {
  element.classList.toggle('hidden')
}
