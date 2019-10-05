class Game {

  drawBoard(arr){
    let board = new Board()
    board.paintBoard(arr)
  }
  
  drawBoat(arr1,arr){
    let boat = new Boat()
    boat.drawBoat(arr1,arr)
  }

 }