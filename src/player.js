class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.playerPiece = null;
  }


  takeTurn(piece){
    this.playerPiece = piece;
    newGame.checkWinnerClassicGame();

  }
}
