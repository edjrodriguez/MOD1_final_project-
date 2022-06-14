class Game{
  constructor(){
      this.id = Date.now();
      this.leftPlayer = null;
      this.rightPlayer = null;
      this.classicGamePieces = ['rock', 'paper', 'scissors'];
      this.difficultGamePieces = ['metal', 'water', 'wood', 'fire', 'earth'];
  }
  startGame(){
    this.leftPlayer = new Player();
    this.rightPlayer = new Player("Your Computer", "💻");
    this.leftPlayer.identify();
    this.rightPlayer.identify();
  }
  checkWinnerClassicGame(){
    if(this.leftPlayer.playerPiece === this.rightPlayer.playerPiece){
      hide(gameBoardPage);
      show(gameTie);
    } else if ((this.leftPlayer.playerPiece === "rock" && this.rightPlayer.playerPiece === 'scissors') || (this.leftPlayer.playerPiece === "paper" && this.rightPlayer.playerPiece === 'rock') ||       (this.leftPlayer.playerPiece === "scissors" && this.rightPlayer.playerPiece === 'paper')){
      this.leftPlayer.wins +=1;
      leftScore.innerText = this.leftPlayer.wins;
      hide(gameBoardPage);
      show(gameWin);
    } else {
      this.rightPlayer.wins +=1;
      rightScore.innerText = this.rightPlayer.wins;
      hide(gameBoardPage);
      show(gameLose);
    }
  }
  checkWinnerDifficultGame(){
    if(this.leftPlayer.playerPiece === this.rightPlayer.playerPiece){
      hide(difficultGameBoardPage);
      show(gameTie);
    } else if ((this.leftPlayer.playerPiece === "metal" && this.rightPlayer.playerPiece === 'wood') || (this.leftPlayer.playerPiece === "metal" && this.rightPlayer.playerPiece === 'earth')|| (this.leftPlayer.playerPiece === "water" && this.rightPlayer.playerPiece === 'metal')|| (this.leftPlayer.playerPiece === "water" && this.rightPlayer.playerPiece === 'fire')|| (this.leftPlayer.playerPiece === "wood" && this.rightPlayer.playerPiece === 'earth')|| (this.leftPlayer.playerPiece === "wood" && this.rightPlayer.playerPiece === 'water')|| (this.leftPlayer.playerPiece === "fire" && this.rightPlayer.playerPiece === 'wood')|| (this.leftPlayer.playerPiece === "fire" && this.rightPlayer.playerPiece === 'metal')|| (this.leftPlayer.playerPiece === "earth" && this.rightPlayer.playerPiece === 'fire')|| (this.leftPlayer.playerPiece === "earth" && this.rightPlayer.playerPiece === 'water')){
      this.leftPlayer.wins +=1;
      leftScore.innerText = this.leftPlayer.wins;
      hide(difficultGameBoardPage);
      show(gameWin);
    } else {
      this.rightPlayer.wins +=1;
      rightScore.innerText = this.rightPlayer.wins;
      hide(difficultGameBoardPage);
      show(gameLose);
    }
  }
}
