class Game {

  constructor(){
    this.board = new Board()
    this.boat = new Boat()
  }

  drawBoard(arr){
    this.board.paintBoard(arr)
  }

  drawBoat(arr){
    this.boat.paintBoat(arr)
  }

 }