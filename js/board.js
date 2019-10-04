class Board {

  paintBoard(arr){
    let divy = document.createElement('div')
    divy.className = 'water-tile'
    
    for(let i = 0; i < arr.length; i++) {
      let row = document.createElement('div')
      row.className='water-tile'
      for(let j = 0; j < arr.length; j++) {
          // Corresponde a cada columna
          var column = document.createElement('div')
          column.className='water-tile'
          column.innerText = arr[i][j]
          row.appendChild(column);
          divy.appendChild(row)
      }
      // Corresponde a cada fila     
  } 
    console.log(divy)
    return divy
  }
}
