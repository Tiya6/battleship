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
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
  ]
 
  const boaty= [
    ['b','b','b','b'],
  ['b','b','b']]

  //const boaty= ['b','b','b','b']
  
window.onload = function() {  
  for(let i = 0; i<boaty.length; i++){
    x = Math.floor(Math.random()*10)
    y = Math.floor(Math.random()*10)
    var randomBoolean = Math.random() >= 0.5;
    game.drawBoat(boardy,boaty[i],x,y,randomBoolean)
  }
  game.drawBoard(boardy)
}