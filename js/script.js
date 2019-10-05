const game = new Game()

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
    ['z','z','z','b','z','z','z','z','z','z'],
    ['z','z','z','b','z','z','z','z','z','z'],
    ['z','z','z','b','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','b','b','b','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z']
  ]

window.onload = function() {
  game.drawBoard(boardy)
  game.applyStyles(boardy)
  game.clickando()
}