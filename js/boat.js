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
    let cont = 0;
    this.boaty.forEach(elem => {
      if(elem.touched === true && counter < boatLength){
        counter++;
        }
      if(counter === boatLength){
         const spansBoomed = document.querySelectorAll('.little-boom')
         spansBoomed.forEach(span => {
           span.classList.add('boom')           
         })
         cont++
         //this.createDivIsSank(cont)
      }
    })
  }

  /*createDivIsSank(cont){
    let base = document.getElementById('base')
    let sank = document.createElement('h3')
    sank.id = 'sank'
    sank.className = 'sank'
    sank.innerText = cont + ' boat destroyed' 
    base.appendChild(sank)
  }*/
  


  get() {
    return this.boaty
  }

  
}
