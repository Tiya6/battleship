class Boat {
  
  constructor(arr,x,y,direction,damage){
    this.arr = arr;
    this.x = x
    this.y = y
    this.direction = direction
    this.damage = damage
  }

  paintBoat(arrBoard,arrBoat,x,y,direction){
    //para comprobar que hay barco en la misma posición que se intenta pintar
      for(let i = 0 ; i < arrBoat.length; i++){
      if(arrBoard[x][y+i]==='b'){
        console.log("There's a boat there folk!")
      }
      if(x+arrBoat[i].length>9){
        console.log('cant place the boat there')
      } else {
        if(direction){//para ponerlo horizontal o vertical
          arrBoard[x].splice(y,arrBoat.length,...arrBoat)
        } else {
            for ( let i = 0 ; i < arrBoat.length; i++){
                arrBoard[x+i].splice(y,1,arrBoat[i])
            }
        }
      }
    }
  }

  receiveDamage(arrBoat){
      
  }
  
  deleteBoat(){
    let del = document.getElementsByClassName('boat')
    console.log(del.inerText)
  }
    
}
