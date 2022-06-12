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
      console.log("TIE");
      return
    } else if ((this.leftPlayer.playerPiece === "rock" && this.rightPlayer.playerPiece === 'scissors') || (this.leftPlayer.playerPiece === "paper" && this.rightPlayer.playerPiece === 'rock') || (this.leftPlayer.playerPiece === "scissors" && this.rightPlayer.playerPiece === 'paper')){
      console.log('You Win!')
    } else {
      console.log('You Lose');
    }
  }
  checkWinnerDifficultGame(){
    if(this.leftPlayer.playerPiece === this.rightPlayer.playerPiece){
      console.log("TIE");
      return
    } else if ((this.leftPlayer.playerPiece === "rock" && this.rightPlayer.playerPiece === 'scissors') || (this.leftPlayer.playerPiece === "paper" && this.rightPlayer.playerPiece === 'rock') || (this.leftPlayer.playerPiece === "scissors" && this.rightPlayer.playerPiece === 'paper')){
      console.log('You Win!')
    } else {
      console.log('You Lose');
    }
  }
}


// changeText() {
//   this.leftWins +=1:
//   leftScore.innerText = this.leftWins;
// }
