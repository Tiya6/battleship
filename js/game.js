class Game {

  constructor(){
    
    this.boardy = new Array(10).fill('')
    this.boaty = [
      
    ]
    this.boaty1 = [
      {i:4, j:1, touched: false},
      {i:4, j:2, touched: false}
    ]
    this.boaty2 = [      
      {i:1, j:1, touched: false},
      {i:1, j:2, touched: false},
      {i:1, j:3, touched: false}
    ]
    this.boaty3 = [
      {i:8, j:1, touched: false},
      {i:8, j:2, touched: false},
      {i:8, j:3, touched: false}
    ]
    this.boaty4 = [
      {i:3, j:8, touched: false},
      {i:4, j:8, touched: false},
      {i:5, j:8, touched: false},
      {i:6, j:8, touched: false}
    ]
    this.boaty5 = [
      {i:3, j:0, touched: false},
      {i:4, j:0, touched: false},
      {i:5, j:0, touched: false},
      {i:6, j:0, touched: false},
      {i:7, j:0, touched: false}
    ]    
       
    this.board = new Board(this.boardy)
    
    this.boat1 = new Boat(this.boaty1)
    this.boat2 = new Boat(this.boaty2)
    this.boat3 = new Boat(this.boaty3)
    this.boat4 = new Boat(this.boaty4)
    this.boat5 = new Boat(this.boaty5)

  }
  
  beforeStart(){
    this.createInstructions()      
  }

  createInstructions(){
    const divIns = document.createElement('div')
    divIns.id = 'container'
    const headIns = document.createElement('h1')
    headIns.classList.add('heading')
    headIns.innerText = 'Instructions'
    const paraIns = document.createElement('p')
    paraIns.classList.add('paragr')
    paraIns.innerText = "You only have 20 attempts to guess where are the 5 boats,be smart!!"
    headIns.appendChild(paraIns)
    divIns.appendChild(headIns)
    const base = document.getElementById('base')
    base.appendChild(divIns)
    this.createBtnStart()
  }

  createBtnStart(){
    const btnStart = document.createElement('button')
    btnStart.id = 'before-button'
    btnStart.type = 'button'
    btnStart.innerText = 'Start Game'
    const base = document.getElementById('container')
    base.appendChild(btnStart)
    btnStart.onclick = () => {  
      this.deleteStart()
      this.start()
    }
  }

  deleteStart(){
      const deleteImg = document.getElementById('before-button')
      deleteImg.remove()
      const deleteButton = document.getElementById('container')
      deleteButton.remove() 
  }

  start(){
    this.board.draw()
    this.board.overMarker()
    this.board.gameOver()
    this.boat1.draw()
    this.boat2.draw()
    this.boat3.draw()
    this.boat4.draw()
    this.boat5.draw()
  }

  
 }