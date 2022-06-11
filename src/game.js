class Game{
  constructor(){
      this.leftWins = 8;
      this.rightWins = 0;
      this.gamePeices = {
        rock: ['rock'],
        paper: ['paper'],
        scissors: ['scisssors']
      }


  }
  startClassicGame(){
    var leftPlayer = new Player();
    var rightPlayer = new Player ();
    this.leftWins +=1;
    leftScore.innerText = this.leftWins;
  }

  startDifficultGame(){
    var leftPlayer = new Player();
    var rightPlayer = new Player ();

  }
  checkWinner(){

  }
  reset(){

  }
}


// changeText() {
//   this.leftWins +=1:
//   leftScore.innerText = this.leftWins;
// }
