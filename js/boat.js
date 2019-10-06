class Boat {

  constructor(arr){
    this.arr = arr;
  }

  paintBoat(arrBoard,arrBoat){
    let boatCreate = document.createElement('span')
    boatCreate.className = 'boat-style'
    boatCreate.innerHTML = arrBoat
    arrBoard.splice(1,0,arrBoat)
  }

  deleteBoat(arr){
    let del = document.getElementsByClassName('boat')
    
    console.log(del.inerText)
  }
    
  }
