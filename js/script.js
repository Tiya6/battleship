const game = new Game()

/*const boardy = [
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,'b','b','b'],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,'b','b','b',null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null]
  ,[null,null,null,null,null,null,null,null,null,null]]
*/
  
  
  const boardy = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','b',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','b',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ','b',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ','b','b','b',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
  ]

window.onload = function() {
  game.drawBoard(boardy)
  game.deleteBoat()
  
}