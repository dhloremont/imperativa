// ARRAY, OBJETOS, IF ELSE, Y CICLO FOR

// CREAR UN ARRAY DE PERSONAS CON LAS SIGUIENTES PROPIEDADES CADA UNA:
// NOMBRE, APELLIDO, EDAD, PROFESION, cantidadHermanos Y ADEMAS UN METODO QUE NOS RETORNE EL
// NOMBRE COMPLETO DE LA PERSONA
// LUEGO CON UN BUCLE O CICLO INCREMENTAR LA CANTIDAD DE HERMANOS DE CADA PERSONA EN 3 
let personas =[
    {
        nombre:"Maximiliano" ,
        apellido:"Linares" ,
        edad:16,
        profesion:"estudiante",
        cantidadHermanos:5,
        nombreCompleto: function(){
            let mensaje=""
            mensaje= this.nombre + " " + this.apellido
            return mensaje
        }
        
    },
    {
        nombre:"Carla" ,
        apellido:"Montaldo" ,
        edad:43,
        profesion:"Profesora",
        cantidadHermanos:7,
        nombreCompleto: function(){
            let mensaje=""
            mensaje= this.nombre + " " + this.apellido
            return mensaje
        }
        
    },
    {
        nombre:"Maria" ,
        apellido:"Pascarelli" ,
        edad:75,
        profesion:"jubilada",
        cantidadHermanos:2,
        nombreCompleto: function(){
            let mensaje=""
            mensaje= this.nombre + " " + this.apellido
            return mensaje
        }
        
    }
];

function masHermanos(array){
    for (let i=0; i<array.length;i++){
        array[i].cantidadHermanos= array[i].cantidadHermanos+3
    }
    return array
}

//let hermanos= masHermanos(personas);
//console.log(hermanos)


// MATRICES
// DADA LA SIGUIENTE MATRIZ 

let matriz = [
    [5, 1, 12, 24],
    [19, 2, 7, 11],
    [10, 3, 14, 27]
]

// CALCULAR LA SUMA TOTAL DE LA COLUMNA EN LA POSICION 1 ( RECORDA QUE EMPIEZA EN LA POSICION 0)
// CALCULAR EL RESULTADO DE MULTIPLICAR TODO LOS ELEMENTOS DE LA FILA EN LA POSICION 2 ( RECORDA QUE EMPIEZA EN LA POSICION 0)
// CALCULAR EL TOTAL DE LA SUMA DE TODO LOS ELEMENTOS DE LA MATRIZ

   
function sumarcolumna(matriz,columna){
     let sumarcol=0
    for(i=0; i< matriz.length; i++){
        sumarcol=sumarcol+matriz[i][columna]
    }

    return sumarcol
}
 let sumaColumna= sumarcolumna(matriz, 0)
console.log(sumaColumna)

function multiplicarFila(matriz,fila){
    let multiFila=1
    for (i=0; i<matriz[fila].length;i++ ){
    multiFila= multiFila* matriz[fila][i]
    }
    return multiFila
}

let filaMultipicada=multiplicarFila(matriz,1)
console.log(filaMultipicada)
    
function sumarTotalMatriz(matriz){
    let sumaTotalM=0
    for(i=0; i<matriz.length; i++){
        for(j=0; j<matriz[i].length;j++){
            sumaTotalM= sumaTotalM +matriz[i][j]
        }
    }return sumaTotalM
}

let totalMatriz= sumarTotalMatriz(matriz)
console.log(totalMatriz)
    


// CREAR UNA MATRIZ DE 5 X 5 CON LOS VALORES QUE TU QUIERAS
// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE MULTIPLICAR TODOS LOS NUMEROS
// DE LA DIAGONAL PRINCIPAL
// CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE SUMAR TODOS LOS NUMEROS DE LA DIAGONAL SECUNDARIA
// EN UNA VARIABLE GUARDAR EL RESULTADO DE DIAGONALPRINCIPAL MENOS DIAGONALSECUNDARIA

function matrizX5(){
    let matriz = [];
    for(i=0;i<5;i++) {
        let fila = [];
        for(j=1; j<=5; j++) {  
            fila.push(j+i*5);
        }
        matriz.push(fila)
    }
    return matriz;
  }
  
  let resulMatriz5= matrizX5()
  console.log(resulMatriz5)
  console.table(resulMatriz5)

 ;


 
function multiDiag(matriz) {
    let multi = 1; 
    for(let i=0; i<matriz.length; i++) {
                  
        multi *= matriz[i][i];               
     }
       
    return multi;
   }
 let resulMulti= multiDiag(resulMatriz5)
 console.log(resulMulti)

 function sumarDiag2(matriz){
     let suma=0
     for(i=0; i<matriz.length;i++){
     suma=suma+ matriz[i][matriz.length-1-i]
 }return suma
 }
 let resulSuma= sumarDiag2(resulMatriz5)
 console.log(resulSuma)
let restaMatriz= resulMulti-resulSuma
console.log(restaMatriz)

// ALGORITMO BUBBLE SORT

// DADO EL SIGUIENTE ARRAY DE NUMEROS, ORDENARLO DE FORMA ASCENDENTE Y LUEGO DESCENDETE

let numerosParaOrdenar = [ 12, 15, 2, 19, 4, 13, 22, 1]
function ordenarArray(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temporario = array[j];
                 array[j] = array[j + 1];
                 array[j + 1] = temporario;
      }
    }
  }return array
}
let arrayOrdenado= ordenarArray(numerosParaOrdenar)
console.log(arrayOrdenado)


// AHORA DEBERAS ORDENAR EL ARRAY DE PERSONAS QUE CREASTE AL INICIO DE FORMA ASCENDENTE
// EN BASE A LA CANTIDAD DE HERMANOS E IMPRIMIRLO POR CONSOLA PARA VERIFICAR

// LUEGO DEBERAS ORDENARLO DE FORMA DESCENDENTE EN BASE A LA PROPIEDAD NOMBRE

function ordenXCantHermanos(array){
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j].cantidadHermanos > array[j + 1].cantidadHermanos) {
            let temporario = array[j];
             array[j] = array[j + 1];
             array[j + 1] = temporario;
  }
}
}return array
}

let cantHermanosOrdenada= ordenXCantHermanos(personas);
console.log(cantHermanosOrdenada)

function ordenXCantHermanosDesc(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].cantidadHermanos < array[j + 1].cantidadHermanos) {
                let temporario = array[j];
                 array[j] = array[j + 1];
                 array[j + 1] = temporario;
      }
    }
    }return array
    }

    let cantHermanosDesc= ordenXCantHermanosDesc(personas);
    console.log(cantHermanosDesc)

    