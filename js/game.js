class Game {

  drawBoard(arr){
    let board = new Board()
    board.paintBoard(arr)
  }
  
  clickando(){
    const te = document.getElementsByClassName('prueba9')
    console.log(te)
    
    /*for (let i=0; i < te.length;i++){
      if(te.innerText === 'z'){
        te.onclick = function(e){

          e.currentTarget.className = "water-tile column boom"
        }
      }
    }*/


      /*te.forEach(elm =>  elm.onclick = function(e){

        e.currentTarget.className = "water-tile column boom"
      })*/

    
    /*te.forEach(function(elm){
      elm.onclick = function(e){
        e.currentTarget.className = "water-tile column boom"
      }
    }) */
    

  }



 }