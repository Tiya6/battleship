class Boat {
  constructor(arr){
    this.arr = arr;
  }


  drawBoat(arr1,arr){
    let divBoat = document.createElement('div');
    divBoat.className = 'boat'
    
    arr1[3].splice(3,0,...arr)
    //boardy[3].splice(3,0,...boatOne)
  }

}