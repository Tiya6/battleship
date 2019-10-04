class Game {
  /* constructor(){
     const position = [0,0]
     this.position = position
     const myGrid = [10,10]
     this.myGrid = myGrid
   }*/
 
   createMatrix(columns, rows) {    
     var matrix = [];
     var table = document.createElement("table");
     table.className='tabla'
     /*for (var i = 0; i < columns; i++) {
       matrix[i] = new Array(rows);
     }*/
     for(let i = 0; i < columns; i++) {
       var tr = document.createElement('tr');
       matrix[i]= []
       tr.className='column'+i
       
       
       for (let j = 0 ; j < rows; j++) {
         var td = document.createElement('td');
         td.className='row'+j
         tr.appendChild(td);
         matrix[i][j] = []
         
       }
       table.appendChild(tr);
     }
     document.body.appendChild(table)
     console.log(matrix)    
   }
   
   /*paintMatrix( ){
     const myGrid = createMatrix(10, 10)
     for (var i=0; i<this.myGrid.length;i++){
       for (var j=0;j<this.myGrid.length;j++){
           this.myGrid[i,j]="X"
       }
       console.log(myGrid);
     }
   }*/
 
   /*createBoard(){
     var table = document.createElement("table");
     for (var i = 1; i < 11; i++) {
     var tr = document.createElement('tr');
     for (var j = 1; j < 11; j++) {
         var td = document.createElement('td');
         tr.appendChild(td);
     }
     table.appendChild(tr);
   }
   document.body.appendChild(table);
   }*/
 
 }