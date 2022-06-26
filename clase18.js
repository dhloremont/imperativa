let matriz = [
    [ 1600, 2800, 3650, 1],
    [ 1300, 898, 1, 2800],
    [1900, 1, 4500, 2560],
    [ 1, 1980, 1270, 950],
  ];
  

  let suma = 0;

for(let i=0 ; i<matriz[2].length ; i++){
  suma += matriz[2][i];
}
console.log(suma);



let gastadoDia3 = matriz[0][2]


let sumaTotal = 0;
for(let i=0 ; i<matriz.length ; i++){
  for(let j = 0 ; j<matriz[i].length ; j++){
    sumaTotal += matriz[i][j]   
  }
}



function encontrarGasto(matriz){
  let sumaSemana0 = 0;
  let sumaSemana1 = 0;
  let sumaSemana2 = 0;
  let sumaSemana3 = 0;
  for(let i=0 ; i<matriz.length ; i++){
    for(let j = 0 ; j<matriz[i].length ; j++){
      switch (i) {
        case 0:
          sumaSemana0 += matriz[0][j]

          sumaSemana0 = sumaSemana0 + matriz[0][j];
        break;

        case 1:
          sumaSemana1 += matriz[1][j]
        break;

        case 2:
          sumaSemana2 += matriz[2][j]
        break;

        case 3:
          sumaSemana3 += matriz[3][j]
        break;
      
        default:
          break;
      }
    }

    let gastoMaximo = Math.max(sumaSemana0,sumaSemana1,sumaSemana2,sumaSemana3);

    let mensaje = "";

    switch (gastoMaximo) {
      case sumaSemana0:
        mensaje = "La primer semana se ha gastadoo mas"
        break;

        case sumaSemana1:
        mensaje = "La segunda semana se ha gastadoo mas"
        break;
    
        case sumaSemana2:
        mensaje = "La tercer mer semana se ha gastadoo mas"
        break;

        case sumaSemana3:
        mensaje = "La cuarta semana se ha gastadoo mas"
        break; 

      default:
        break;
    }

    return mensaje;



  // SUMAR DIAGONAL ROJA

function sumarDeDiagonal(matriz){
  let suma = 0;
  for(let i=0 ; i<matriz.length ; i++){
    for(let j=0 ; j<matriz[i].length ; j++){

      if(i===j){
        suma += matriz[i][j];
      }

    }
  }

  return suma;
}
  
  
  //SUMAR DIAGONAL VERDE, OPCION 1
  /*
  for(let fila=0 ; fila < matriz.length ; fila++){    
    for( let columna= matriz[fila].length-1 ; columna>=0 ; columna--){
      if(fila+columna == matriz.length-1){
        sumaDiagonalDos += matriz[fila][columna];
      }
    }
  }
  console.log(sumaDiagonalDos);
  
  */
  
  
  // SUMAR DIAGONAL VERDE, OPCION 2
  /*
  for(let fila=0 ; fila < matriz.length ; fila++){
  
    for( let columna= 0 ; columna<matriz[fila].length ; columna++){
  
      if(fila+columna == matriz.length-1){ //La diagonal secundaria es cuando el valor de suma entre fila y columna es igual al tamaño de la matriz
        sumaDiagonalDos += matriz[fila][columna];
      }
    }
  }
    
  console.log(sumaDiagonalDos);

*/

