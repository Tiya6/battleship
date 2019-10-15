class Boat {
  
  constructor(boaty) {
   /* this.size = size
    this.init = init*/
    this.boaty = boaty
    this.markerBoat = document.getElementById('boat')
   /* this.randomPosition()*/
  }
 
  draw(){
    let count = 0;
    this.boaty.forEach(elem => {
      const spanElem = document.getElementById(`${elem.i}-${elem.j}`)
      //console.log(spanElem)
      spanElem.onclick = () => {
      spanElem.classList.add('little-boom')
      elem.touched = true;
      count ++;
      this.isSank()
      } 
    })
  }

  isSank(){
    let counter =0
    const boatLength = this.boaty.length

    this.boaty.forEach(elem => {
      if(elem.touched === true && counter < boatLength){
        counter++;
        }
      if(counter === boatLength){
         const spansBoomed = document.querySelectorAll('.little-boom')
         spansBoomed.forEach(span => {
           span.classList.add('boom')
           //console.log('boat over')
         }) 
      }
    })
  }
  
  get() {
    return this.boaty
  }

  isThereBoat(){
      for(let i = 0; i < this.boaty.length; i++){
        while(!this.boaty[i].i ){

        }
      }  
}

  randomPosition(){
    let posI = Math.floor(Math.random()*10) 
    let posJ = Math.floor(Math.random()*10) 

  for(let i = 0; i < this.boaty.length;i++){
    if(posI < 10){
      this.boaty[i].i = posI
    }
    if(posJ < 5){
       for(let x = 0; x < this.boaty.length; x++){
         posJ++
        this.boaty[x].j = posJ
       }       
    } 
  }
  }

  // paintBoat(arrBoard,arrBoat,x,y,direction){
  //   //para comprobar que hay barco en la misma posición que se intenta pintar
  //     for(let i = 0 ; i < arrBoat.length; i++){
  //     if(arrBoard[x][y+i]==='b'){
  //       console.log("There's a boat there folk!")
  //     }
  //     if(x+arrBoat[i].length>9){
  //       console.log('cant place the boat there')
  //     } else {
  //       if(direction){//para ponerlo horizontal o vertical
  //         arrBoard[x].splice(y,arrBoat.length,...arrBoat)
  //       } else {
  //           for ( let i = 0 ; i < arrBoat.length; i++){
  //               arrBoard[x+i].splice(y,1,arrBoat[i])
  //           }
  //       }
  //     }
  //   }
  // }

  /*receiveDamage(arrBoat){
      
  }
  
  deleteBoat(){
    let del = document.getElementsByClassName('boat')
    console.log(del.inerText)
  }*/
    
}
