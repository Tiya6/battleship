class Game {

  constructor(){
    
    this.boardy = new Array(10).fill('')
    this.boaty = [
      
    ]

    this.boaty1 = [
      {i:1, j:1, touched: false},
      {i:1, j:2, touched: false},
      {i:1, j:3, touched: false},
      {i:1, j:4, touched: false}
    ]

    this.boaty2 = [
      {i:4, j:1, touched: false},
      {i:4, j:2, touched: false}
    ]

    this.boaty3 = [
      {i:8, j:1, touched: false},
      {i:8, j:2, touched: false},
      {i:8, j:3, touched: false},
      {i:8, j:4, touched: false}
    ]

    this.boaty4 = [
      {i:3, j:8, touched: false},
      {i:4, j:8, touched: false},
      {i:5, j:8, touched: false},
      {i:6, j:8, touched: false},
      {i:7, j:8, touched: false}
    ]

    this.boaty5 = [
      {i:3, j:0, touched: false},
      {i:4, j:0, touched: false},
      {i:5, j:0, touched: false},
      {i:6, j:0, touched: false},      
    ]
    
    this.boaty6 = [
      {i:null, j:null, touched: false},
      {i:null, j:null, touched: false},
      {i:null, j:null, touched: false},
      {i:null, j:null, touched: false},
    ]

    /*const posI = Math.floor(Math.random()*10) 
    const posJ = Math.floor(Math.random()*10) 

    for(let i = 0; i < this.boaty6.length;i++){
      if(posI < 10){
        this.boaty6[i].i = posI
      }
      if(posJ < 5){
         for(let x = 0; x < this.boaty6.length; x++){
          //this.boaty6[x].j = posJ
         }       
      }
    }
   
    console.log(this.boaty6)*/

    this.board = new Board(this.boardy)
    
    this.boat1 = new Boat(this.boaty1)
    this.boat2 = new Boat(this.boaty2)
    this.boat3 = new Boat(this.boaty3)
    this.boat4 = new Boat(this.boaty4)
    this.boat5 = new Boat(this.boaty5)
    this.boat6 = new Boat(this.boaty6)

  }

  start() {
    this.board.draw() 
    this.board.gameOver()
    this.boat1.draw()
    this.boat2.draw()
    this.boat3.draw()
    this.boat4.draw()
    this.boat5.draw()
   //this.boat6.draw()
  }
  
 }