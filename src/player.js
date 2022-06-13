class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.playerPiece = null;
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
}
