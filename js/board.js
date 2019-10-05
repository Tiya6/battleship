class Board {
  constructor(row,column){
    this.row = row
    this.column = column
  }

  paintBoard(arr){
    let divy = document.createElement('div')
    divy.className = 'water-tile div-style'
    
    for(let i = 0; i < arr.length; i++) {
      let row = document.createElement('div')
      row.className='water-tile row'
      
      for(let j = 0; j < arr.length; j++) {
          // Corresponde a cada columna
          var column = document.createElement('div')          
          column.innerText = arr[i][j]          
          if(column.innerText === " "){
            column.className='water-tile column'
            } else if(column.innerText === "b"){
              column.className='water-tile column boat'
              column.onclick = function(e){
              e.currentTarget.className = 'water-tile column boom'}
            }
          row.appendChild(column);          
      }
      divy.appendChild(row)
      // Corresponde a cada fila     
  } 
    document.body.appendChild(divy)
  }

  
}
