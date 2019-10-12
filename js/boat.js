class Boat {
  
  constructor(boaty) {
   /* this.size = size
    this.init = init*/
    this.boaty = boaty
    this.markerBoat = document.getElementById('boat')
  }
 
  draw(){
    let count = 0;
    this.boaty.forEach(elem => {
      const spanElem = document.getElementById(`${elem.i}-${elem.j}`)
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
         })
      }
    })
  }

  get() {
    return this.boaty
  }

 randomNumber(){      
      let i = Math.floor(Math.random()*10)
        if(i < 10){
          return i
        }     
 }  

  randomDirection(){
    let randomBoolean = Math.random() >= 0.5
    console.log(randomBoolean)
    //return randomBoolean
  }

  randomPosition(){
    const i = this.randomNumber()  
    const j = this.randomNumber()
    console.log(i,j)
  }



  /* constructor(arr,x,y,direction,damage){
     this.arr = arr;
     this.x = x
     this.y = y
     this.direction = direction
     this.damage = damage
   }*/

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





}
