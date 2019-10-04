const game = new Game()
const board = new Board()
/*const boardy = [
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null]
  ,[null,null,null,null,null,null,null,null,null,null]]*/

  const boardy = [
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z']]

window.onload = function() {

  //game.createBoard()
  //.createMatrix(10,10)
  board.paintBoard(boardy)
}