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
    let cont = 0;
    this.boaty.forEach(elem => {
      if(elem.touched === true && counter < boatLength){
        counter++;
        }
      if(counter === boatLength){
         const spansBoomed = document.querySelectorAll('.little-boom')
         spansBoomed.forEach(span => {
           span.classList.add('boom') 
           cont++   
         })
         if(cont === 17){
           this.winGame()
         }
      }
    })
  }

  winGame(){
    const over = document.getElementById('base')
          over.innerHTML='<img src="https://ak3.picdn.net/shutterstock/videos/34233733/thumb/1.jpg" id="img"/>';
          this.btnEnd()
  }

  btnEnd(){
    const btnStart = document.createElement('button')
    btnStart.id = 'button'
    btnStart.classList.add('btn-danger')
    btnStart.classList.add('btn-outline-warning')
    btnStart.type = 'button'
    btnStart.innerText = 'Start Game'
    const base = document.getElementById('base')
    base.appendChild(btnStart)
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

  get() {
    return this.boaty
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

  
}
