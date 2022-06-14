class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.playerPiece = null;
  }
  identify(){
    if(this.name === "Your Computer"){
      computerName.innerText = this.name;
      computerAvatar.innerText = this.token;
    } else if (this.name === undefined){
      show(form);
      hide(gameBoardPage);
      hide(homeButtonView)
      hide(difficultGameBoardPage);
        this.name = "Human";
        this.token = "🫥"
        userName.innerText = this.name;
        userAvatar.innerText = this.token;
    }
  }
  selectPiece(piece){
    this.playerPiece = piece;
  }
  takeTurn(event){
    if (this.name === "Your Computer"){
      var computerSelection = Math.floor(Math.random() * (2 - 0 + 1) + 0);
      var piece = newGame.classicGamePieces[computerSelection];
      if (piece === 'rock') {
        show(selectRightRock);
      } else if (piece === 'paper') {
        show(selectRightPaper);
      } else if (piece === 'scissors') {
        show(selectRightScissors);
      }
      newGame.rightPlayer.selectPiece(piece);
    } else {
      var piece = event.target.classList;
      if (piece.contains('rock-selection')) {
        show(selectLeftRock)
        newGame.leftPlayer.selectPiece('rock');
      } else if (piece.contains('paper-selection')) {
        show(selectLeftPaper)
        newGame.leftPlayer.selectPiece('paper');
      } else if (piece.contains('scissors-selection')) {
        show(selectLeftScissors)
        newGame.leftPlayer.selectPiece('scissors');
      }
    }
  }
  takeTurnDifficultGame(event){
    if (this.name === "Your Computer"){
      var computerSelection = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      var piece = newGame.difficultGamePieces[computerSelection];
      if (piece === 'metal') {
          show(selectRightMetal);
        } else if (piece === 'water') {
          show(selectRightWater);
        } else if (piece === 'wood') {
          show(selectRightWood);
        } else if (piece === 'fire') {
          show(selectRightFire);
        } else if (piece === 'earth') {
          show(selectRightEarth);
        }
        newGame.rightPlayer.selectPiece(piece);
      } else {
        var piece = event.target.classList;
        if (piece.contains('l-metal')) {
          show(selectLeftMetal)
          newGame.leftPlayer.selectPiece('metal');
          } else if (piece.contains('l-water')) {
            show(selectLeftWater)
            newGame.leftPlayer.selectPiece('water');
          } else if (piece.contains('l-wood')) {
            show(selectLeftWood)
            newGame.leftPlayer.selectPiece('wood');
          } else if (piece.contains('l-fire')) {
            show(selectLeftFire)
            newGame.leftPlayer.selectPiece('fire');
          } else if (piece.contains('l-earth')) {
            show(selectLeftEarth)
            newGame.leftPlayer.selectPiece('earth');
        }
    }
  }
}
