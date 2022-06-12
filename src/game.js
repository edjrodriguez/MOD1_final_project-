class Game{
  constructor(){
      this.leftPlayer = null;
      this.rightPlayer = null;
      this.classicGamePieces =
      ['rock', 'paper', 'scissors'];
      this.difficultGamePieces = [];

  }


  startClassicGame(){
    this.leftPlayer = new Player();
    this.rightPlayer = new Player ();

  }

  startDifficultGame(){
    this.leftPlayer = new Player();
    this.rightPlayer = new Player();


  }
  checkWinnerClassicGame(){
    if(this.leftPlayer.playerPiece === this.rightPlayer.playerPiece){
      hide(gameBoardPage);
      show(gameTie);
      console.log("TIE");
      return
    } else if ((this.leftPlayer.playerPiece === "rock" && this.rightPlayer.playerPiece === 'scissors') || (this.leftPlayer.playerPiece === "paper" && this.rightPlayer.playerPiece === 'rock') || (this.leftPlayer.playerPiece === "scissors" && this.rightPlayer.playerPiece === 'paper')){
      this.leftPlayer.wins +=1;
      leftScore.innerText = this.leftPlayer.wins;
      hide(gameBoardPage);
      show(gameWin);
      console.log('You Win!')
    } else {
      this.rightPlayer.wins +=1;
      rightScore.innerText = this.rightPlayer.wins;
      hide(gameBoardPage);
      show(gameLose);
      console.log('You Lose');
    }
  }
  checkWinnerDifficultGame(){
    if(this.leftPlayer.playerPiece === this.rightPlayer.playerPiece){
      console.log("TIE");

    } else if ((this.leftPlayer.playerPiece === "rock" && this.rightPlayer.playerPiece === 'scissors') || (this.leftPlayer.playerPiece === "paper" && this.rightPlayer.playerPiece === 'rock') || (this.leftPlayer.playerPiece === "scissors" && this.rightPlayer.playerPiece === 'paper')){
      console.log("1", this.leftPlayer.wins);
      this.leftPlayer.wins +=1;
      console.log("2", this.leftPlayer.wins);
      leftScore.innerText = this.leftPlayer.wins;
      console.log('You Win!')
    } else {
      this.rightPlayer.wins +=1;
      rightScore.innerText = this.rightPlayer.wins;
      console.log('You Lose');
    }
  }
}


// changeText() {
//   this.leftWins +=1:
//   leftScore.innerText = this.leftWins;
// }
