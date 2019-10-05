class Game {

  drawBoard(arr){
    let board = new Board()
    board.paintBoard(arr)
  }
  
  applyStyles(arr){
    let board = new Board()
    board.classes(arr)
  }

  clickando(){
    const te = document.getElementById("yo")
    document.ge
    te.onclick = function(){
    te.innerHTML = "YOU CLICKED ME!";
    }
   
  }

 }