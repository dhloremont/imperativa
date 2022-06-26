console.log("*******Loop de pares*******************************************")
function loopDePares(numero){
    let suma =null
    let resultado = "";
    
    for(i=0;i<=100;i++){
        suma=numero+i;

        if(suma%2==0){
            
            resultado=console.log("El numero "+suma+" es par");
        }
        
    }
}

let numeroIngresado=loopDePares(6);

console.log("******************impares********************************")
function loopDeImPares(numero,palabra){
    let suma =null
    let resultado = "";
    
    for(i=0;i<=100;i++){
        suma=numero+i;

        if(suma%2 !=0){
            
            resultado=console.log("El numero "+suma+" es impar");
        }
        else{
            resultado= console.log(palabra)
        }
    }
}

let numerosImpares=loopDeImPares(6,"hola");

console.log("*****************sumatoria*********************************")

function sumatoria(numero){
    
    let suma=null
 for (let i= 1; i<=numero; i ++){
     suma= suma+i
     
     
 }
 return suma
}

let resultado=sumatoria(8)
console.log (resultado)

console.log("*****************nuevo arreglo*********************************")
function nuevoArreglo(numero){
    let newarreglo= []
    for (let i = 1; i<=numero; i++){
        newarreglo.push(i)

    }
    return newarreglo
}

let arregloNuevo=nuevoArreglo(10)
console.log(arregloNuevo)

console.log("*****************SPLIT*********************************")
function split(nombre){
    let arrayNombre=[]
   arrayNombre= nombre.split("")
    return arrayNombre
}
console.log(split("hola"))

console.log("*****************Carácter del medio*********************************")

function caracterMedio (string){
    let valorMitad=null;
    valorMitad=(Math.floor((string.length)/2))
    if (string.length % 2 !== 0){
        return string[valorMitad];
    }
    else
        return string[valorMitad-1] + string[valorMitad] ;
    
}
console.log(caracterMedio("Hola"));

console.log("*****************mover ceros a lo ultimo*********************************")


console.log("*****************camelCase*********************************")
/*function conversor(string){
    let nuevaString;
    for(let i = 0; i < string.length; i++){
        if(string[i] === '-'){
        nuevaString = string.replace('-','');
        string[i + 1].toUpperCase;
        }else if(string[i] === '_'){
        nuevaString = string.replace('_','');
        string[i + 1].toUpperCase;
        }
    }
    return string;
    }

    conversor('hola-mina-gonzalez');*/

    function conversor2(frase){
        let fraseSin= ""
        let camelUp=" "
        for(let i = 0; i < frase.length; i++){
            if(frase[i] == '-'){
            frase[i+1].toUpperCase       
        }
        else if(frase[i] == '_'){
            frase[i+1].toUpperCase
        }
        return  frase
    }
}
        

        //fraseSin=frase.replace(/-/gi,"")

        //return fraseSin
    

    let prueba1=conversor2("hola-que-tal")
    console.log(prueba1)

    /*Mover ceros a lo último
Deberás crear una función llamada moverCeros que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final. Ejemplo:
moverCeros([false,1,0,1,2,0,1,3,"a"]) debe retornar [false,1,1,2,1,3,"a",0,0]
moverCeros([1,2,0,1,0,1,0,3,0,1]) debe retornar [1,2,1,1,3,1,0,0,0,0]
*/
let unArreglo = [false,1,0,1,2,0,1,3,"a"];
function moverCeros (unArreglo){
    let primerArreglo = [];
    let segundoArreglo = [];
    let arregloFinal = [];
    for( let i= 0 ; i < unArreglo.length ; i++){
        if( unArreglo[i] === 0){
            segundoArreglo.push(unArreglo[i])
        }
    else {
        primerArreglo.push(unArreglo[i]);
    }
    arregloFinal = primerArreglo.concat(segundoArreglo);
    }
    return arregloFinal
}

console.log(moverCeros(unArreglo))
