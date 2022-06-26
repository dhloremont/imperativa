/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let matriz= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]

console.table(matriz)

let sumafila=null
let sumaacum=null
for (let i=0; i< matriz.length; i++){
    for( let j=0; j<matriz.length; j++){
        sumafila= sumafila +matriz[i][j]

    }
   console.log("suma de la fila " + sumafila)
   sumaacum=sumaacum+sumafila
}
console.log("suma total "+sumaacum)

// Completa la función para que retorne una matriz
// de 10x10
console.log("********Matriz x 10**************")


/*function generarMatriz10por10() {
    let arrayFinal=[]


    for(let i=0; i<10; i++){
        arrayFinal.push([[]])
        


        for(let j=0; j<10;j++){
            arrayFinal.push([[j]])

        }
    
    }
           

	return arrayFinal;
}

let matriz10por10 = generarMatriz10por10();
console.log(matriz10por10);
console.table(matriz10por10)*/

/*var returnedArray = [];
numero = 1
for(var i=0; i<10; i++) {
    returnedArray[i] = new Array(10);
    for (j=0 ; j<10 ; j++){
    returnedArray[i][j] = numero+j
    }numero=numero+10
} 
console.table(returnedArray)*/

let returnedArray = [];
numero = 1
for(let i=0; i<10; i++) {
    returnedArray[i] = [];
        for (j=0 ; j<10 ; j++){
    returnedArray[i][j] = numero+j
    
    }
    numero+= j
} 
console.table(returnedArray)