const prompt = require("prompt-sync")({sigint:true});

/*2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos.
3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo.
4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación.
5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.*/
console.log("**********SUMA********************************");
let num1 = parseInt (prompt("ingrese 1er numrero"));
let num2 = parseInt (prompt("ingrese 2do numrero"));
let suma= () => num1 +num2;
console.log(suma());

console.log("*******RESTA***********************************");
let num3 = parseInt (prompt("ingrese 1er numrero"));
    let num4 = parseInt (prompt("ingrese 2do numrero"));
function resta (num3, num4){
    
    let resulResta= num3 -num4;
    return resulResta;
}

console.log(resta(num3,num4));

console.log("*******Multiplicacion***********************************");
let num5 = parseInt (prompt("ingrese 1er numrero"));
    let num6 = parseInt (prompt("ingrese 2do numrero"))
function Mutiplicar (num5, num6){
    
    let resulMulti= num5 *num6;
    return resulMulti;
}
console.log(Mutiplicar(num5,num6))
console.log("*******Division***********************************");
let num7 = parseInt (prompt("ingrese 1er numrero"));
    let num8 = parseInt (prompt("ingrese 2do numrero"));
function Dividir (num7, num8){
    
    let resulDiv= num7 / num8;
    return resulDiv;
}
console.log(Dividir(num7,num8))