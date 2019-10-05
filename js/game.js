class Game {

  drawBoard(arr){
    let board = new Board()
    board.paintBoard(arr)
  }
  
  clickando(){
    const te = document.getElementsByClassName('prueba9')    
    te.array.forEach(element => {
      element.onclick = function(e){

        e.currentTarget.className = "water-tile column boom"
      }
    });
    
    
  }



 }