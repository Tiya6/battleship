class Boat {
  
  constructor(arr,x,y,direction){
    this.arr = arr;
    this.x = x
    this.y = y
    this.direction = direction
  }

  paintBoat(arrBoard,arrBoat,x,y,direction){
    /*arrBoard.forEach(elem => function(){
      if(elem === 'b'){
      console.log("There's a boat there folk!")
      }})*/
  
    for(let i = 0 ; i < arrBoat.length; i++){
      
      if(arrBoard[x][y+i]==='b'){
        console.log("There's a boat there folk!")
      }
    }
    
    if(direction){
      arrBoard[x].splice(y,arrBoat.length,...arrBoat)
    } else {
        for ( let i = 0 ; i < arrBoat.length; i++){
            arrBoard[x+i].splice(y,1,arrBoat[i])
        }
    }
    
    
  }

  deleteBoat(){
    let del = document.getElementsByClassName('boat')
    console.log(del.inerText)
  }
    
  }
