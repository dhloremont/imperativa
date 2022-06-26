/*Ejercicio 1
Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio. 
a ¿Qué tipo de dato es?
b ¿Cuáles son las claves que puedes identificar?
c Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*) 
*/

console.log("alumno: Lorena Montaldo Camada5")
const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
    },
  ];

  console.log("*************ejercicio 1********************");
  console.log("a- es un Array que contiene objetos");
  console.log("b- las claves de los objetos son: id-numerico, nombre-string, apellido-string, legajo-numerico, notas-que es un array-");
  console.log("**********ejercicicio 1- C**************************")
  function ordenarPorLegajo(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].legajo < array[j + 1].legajo) {
                let temp = array[j];
                 array[j] = array[j + 1];
                 array[j + 1] = temp;
      }
    }
    }return array
    }

    let ordenadoPorLegajo= ordenarPorLegajo(alumnos);
    console.log(ordenadoPorLegajo)

    console.log("*************ejercicio 2********************");
    /*Ejercicio 2
Dado el objeto */
let alumno = {
id: 5,
nombre: "Lucas",
apellido: "Astrada",
legajo: 20220125,
notas: [10,6,8,7,9]
}
/*
a)Crear un método que retorne el promedio de notas. (*)
b)Crear una función que ordene las notas del alumno de forma ascendente. (*)*/
console.log("*************ejercicio 2 - a promedio de notas ********************");

function promedioNotas(array){
    let suma=0
    let promedio=0
    for(i=0; i<array.notas.length;i++){

        suma= suma+array.notas[i]
        
    }promedio= suma/array.notas.length
    return promedio
}

let notaspromedio= promedioNotas(alumno);
console.log(notaspromedio)

console.log("*************ejercicio 2 - b ordenar notas ascendente ********************");
function ordenarNotasDesc(array){
    for (let i = 0; i < array.notas.length; i++) {
        for (let j = 0; j < array.notas.length - 1; j++) {
            if (array.notas[j] > array.notas[j + 1]) {
                let temp = array.notas[j];
                 array.notas[j] = array.notas[j + 1];
                 array.notas[j + 1] = temp;
      }
    }
    }return array.notas
    }
let notasOrdDesc=ordenarNotasDesc(alumno);
console.log(notasOrdDesc);

/* 
Ejercicio 3
a)Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.
b)Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5. 
c)Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.
d)Crear una función que retorne la multiplicación de las diagonales de la matriz.
*/
console.log("*************ejercicio 3********************");
console.log("*************ejercicio 3 - a - Matiz 3 x 3********************");
let matrix3x3=[
    [-1,-2,-10],
    [-4,-5,-6],
    [-7,-8,-10],
]
console.table(matrix3x3)
console.log("*************ejercicio 3 - b - multiplos 5********************");

function mutiploDe5(matriz){
    let suma=0
    for (i=0; i<matriz.length;i++){
        for(j=0; j<matriz[i].length;j++){
            if (matriz[i][j]%5 ===0)
            suma=suma+matriz[i][j]
            
            }
    } return suma
}

let mutiplo5= mutiploDe5(matrix3x3)
console.log(mutiplo5)
console.log("*************ejercicio 3 - c - valor booleano ********************");
function sumarTotalMatriz(matriz){
    let sumaTotalM=0
    let booleano = true
    for(i=0; i<matriz.length; i++){
        for(j=0; j<matriz[i].length;j++){
            sumaTotalM= sumaTotalM +matriz[i][j]
        }
    } console.log(sumaTotalM)
    if (sumaTotalM%2=== 0){
    booleano=true
    }
    else
    booleano=false;

    return booleano
}

let verdaroFalso=sumarTotalMatriz(matrix3x3)
console.log(verdaroFalso)
console.log("*************ejercicio 3 - d - multiplicar diagonal ********************");
function multiDiag(matriz) {
    let multi = 1; 
    for(let i=0; i<matriz.length; i++) {
                  
        multi =multi* matriz[i][i];               
     }
       
    return multi;
   }
 let resulMulti= multiDiag(matrix3x3)
 console.log(resulMulti)