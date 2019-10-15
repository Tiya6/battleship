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
    //  let jump = document.createElement('div')
      //this.base.appendChild(jump)
    }
  }

  gameOver(){
    let count = 0;
    const spanElem = document.querySelectorAll('span')
    spanElem.forEach(element => {
      element.onclick = () => {
        count ++;
        if(count === 20){
          const over = document.getElementById('base')
          over.innerHTML='<img src="https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2018/01/11/38E3D0E9-0B9E-43FD-8295-389C159F855C/58.jpg" id="img"/>';
          this.btnEnd()          
        }
      }  
    });
  }

  btnEnd(){
    const btnStart = document.createElement('button')
    btnStart.id = 'button'
    btnStart.classList.add('btn-danger')
    btnStart.classList.add('btn-outline-warning')
    btnStart.type = 'button'
    btnStart.innerText = 'Start Game'
    this.base.appendChild(btnStart)
    btnStart.onclick = () => {
      new Game().beforeStart() 
      this.deleteOver()     
    }
  }
  
  deleteOver(){
    const deleteImg = document.getElementById('img')
    deleteImg.remove()
    const deleteButton = document.getElementById('button')
    deleteButton.remove()
  }

  winGame(){
    let win = document.getElementsByClassName('boom')
    console.log(win.value)
  }
}
