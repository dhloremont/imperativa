let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function arrayPorIndice(array, indice) {
  let dato = 0;
  dato = array[indice];
  return dato;  
};
 
let valor = arrayPorIndice(array, 6);
console.log(valor);
console.log("****************************************************")
function miFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0 || i % 15 === 0){
        console.log("FizzBuzz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
    }
  }
  miFizzBuzz();

  console.log("****************************************************")
  function diasDelMes(numeroMes) {  
	let cantidadDias = 0;  
	if (numeroMes === 1 || numeroMes === 3|| numeroMes === 5|| numeroMes === 7|| numeroMes === 8 || numeroMes === 10 || numeroMes === 12) {	cantidadDias = 31;              
	}else if (numeroMes  === 4 || numeroMes === 6 || numeroMes === 9|| numeroMes === 11) {
			cantidadDias = 30;           
	} else {
			cantidadDias = 28;     
	}    
	return cantidadDias;    
};
console.log(diasDelMes(4));
console.log("****************************************************")
let arry = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repetidor(array) {
  arry.sort();
  let arrayRepetidos =[];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i + 1] === arry[i]) {
      arrayRepetidos.push(arry[i])      
    }
  }  
  return arrayRepetidos;
};
let arrays = repetidor(arry)
console.log(arrays);
