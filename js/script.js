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

  const boaty= ['b','b','b']

window.onload = function() {
  game.drawBoard(boardy)
  //game.drawBoat(boaty,boardy)
  game.drawBoat(boaty,boardy)
  game.drawBoat(boardy,boaty)
}