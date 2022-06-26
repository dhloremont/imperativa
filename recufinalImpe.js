console.log("*****alumno Lorena Beatriz Montaldo Camada5 1021**********")

/*Ejercicio 1: 
a ¿Cuál es la diferencia entre utilizar == o === en un condicional?
    La diferencia de utilizar == y ===, es que El == compara solo el contenido por ej 5 numerico lo reconoce como igual a un "5" string, en cambio el === los reconoce como distintos porque valida contenido y tipo de dato uno es numerico y el otro string por lo tando no son iguales con ===

b ¿Cuándo es correcto usar const y cuando let?
    const se usa cuando lo que contenga como dato no tiene que sufrir modificaciones y va a mantener el mismo valor o dato en toda la ejecucion del programa.
    let se usa para declarar variables como el nombre lo indica pueden modificar su valor o el dato que contenga durante la ejecucion del programa ya sea por una operacion matematica porque que se asigna otro valor etc.

c ¿Cuál es la diferencia entre funciones expresadas y funciones declaradas? 
La funcion declarada se define dentro de una variable y la funcion expresada directamente se usa la palabra function nombre de la funcion y llaves.

d ¿Cuál es la diferencia entre un objeto y un arreglo (array)?
Un array se declara entre corchetes, contiene datos, cada dato ocupa un indice del array los indices empiezan en la pocision 0
Un objeto se declara entre llaves y tiene claves y un valor cada una de ellas  

e ¿Qué retorna está función y por qué? 
la funcion no retorna nada porque no tiene un return que es lo que hace que la funcion retorne algo solo imprime hola mundo por consola.
*/
/* Crear un array con 10 mascotas con las siguientes propiedades
nombre (String)
edad (Number) 
estaVacunado (Boolean) 
*/
const MASCOTAS =[
    {
        nombre:"pipi",
        edad:1,
        estaVacunado:true,
    },
    {
        nombre:"charly",
        edad:8,
        estaVacunado:true,
    },
    {
        nombre:"pulgoso",
        edad:12,
        estaVacunado:false,
    },
    {
        nombre:"pichicha",
        edad:10,
        estaVacunado:false,
    },
    {
        nombre:"blacky",
        edad:9,
        estaVacunado:true,
    },
    {
        nombre:"morena",
        edad:7,
        estaVacunado:true,
    },
    {
        nombre:"tita",
        edad:3,
        estaVacunado:false,
    },
    {
        nombre:"Fyby",
        edad:2,
        estaVacunado:false,
    },
    {
        nombre:"clopatra",
        edad:7,
        estaVacunado: true,
    },
    {
        nombre:"Chiche",
        edad:12,
        estaVacunado: true,
    }
]
console.log ("********ejercicio 2a************")
console.log(MASCOTAS)

/*Desarrollar una función que reciba por parámetro un array de mascotas y retorne un NUEVO array que cumpla las siguientes condiciones
que esté vacunado
que la edad sea menor a 2 años
*/
function nuevoArrayMascotas(array){
    let nuevoArray =[]
    for(i=0 ; i< array.length; i++){
    if ((array[i].edad<2)&& (array[i].estaVacunado=== true) ){
        nuevoArray.push(array[i])
    }
    }return nuevoArray
}
console.log ("********ejercicio 2b************")
let mascMenorA2 = nuevoArrayMascotas(MASCOTAS);
console.log(mascMenorA2)

/*Ejercicio 3:
Desarrollar una función que reciba una matriz de ceros como parámetro y retorne el número de fila donde se encuentre “el intruso”. Se considera un intruso al cero string ‘0’, es decir, un tipo de dato que 'no es Number y no es el número 0' . En caso de no encontrar el intruso retorna null.
*/

let matriz0=[
    [0,0,0],
    [0,0,0],
    [0,"0",0],
]
let matriz2= [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
function detectarIntruso(matriz){
    let resultado
    for(let i=0; i<matriz.length; i++) {
        for(let j=0; j<matriz[i].length; j++) {
            if (matriz[i][j] !==0){
            resultado = i
            } 
                       
        }    
    } return resultado
}
console.log ("********ejercicio 3************")

let nroIntruso= detectarIntruso(matriz0);
console.log(nroIntruso);

let nroceros=detectarIntruso(matriz2);
console.log(nroceros);