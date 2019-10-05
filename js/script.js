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
  ,[null,null,null,null,null,null,null,null,null,null]]
*/
  const boardy = [
    ['1','2','3','4','5','6','7','8','9','10'],
    ['11','12','13','14','15','16','17','18','19','20'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z'],
    ['z','z','z','z','z','z','z','z','z','z']]

  const boatOne = ['boat','boat','boat','boat']

window.onload = function() {

  //boardy[3].splice(3,0,...boatOne)
  game.drawBoard(boardy)
  game.drawBoat(boardy,boatOne)

  
}