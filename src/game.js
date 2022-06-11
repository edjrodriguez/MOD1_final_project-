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

    }

  checkWinnerDifficultGame(){
    if(this.leftPlayer.playerPiece === this.rightPlayer.playerPiece){
        console.log("TIE");

      }

}
}


// changeText() {
//   this.leftWins +=1:
//   leftScore.innerText = this.leftWins;
// }
