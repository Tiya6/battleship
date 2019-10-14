class Board {

  constructor(board) {
    this.board = board
    this.base = document.getElementById('base')
  }

  createTile(x,y) {
    let tile = document.createElement('span')
    tile.className = `tile water-tile boat`
    tile.id = `${x}-${y}`
    return tile
  }


  draw() {
    for(let i = -1; ++i < this.board.length;) {
      for(let j = -1; ++j < this.board.length;) {
        this.base.appendChild(this.createTile(i,j))
      }
     // let jump = document.createElement('div')
      //this.base.appendChild(jump)
    }
  }
  
  gameOver(){
    let count = 0;
    const spanElem = document.querySelectorAll('span')
    console.log(spanElem)
    spanElem.forEach(element => {
      element.onclick = () => {
        count ++;
        console.log(count)
        if(count === 10){
          alert('Game over')
        }
      }  
    });     
  }

}
