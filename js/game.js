class Game {

  constructor(){
    this.board = new Board()
    this.boat = new Boat()
  }

  drawBoard(arr){
    this.board.paintBoard(arr)
  }

  drawBoat(arrBoard,arrBoat,x,y,direction){
    this.boat.paintBoat(arrBoard,arrBoat,x,y,direction)
  }
  
  deleteBoat(){
    this.boat.deleteBoat()
  }

 }