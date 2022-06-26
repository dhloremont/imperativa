const prompt = require("prompt-sync")({sigint:true});
let pulgada = prompt("ingrese pulgada");
let pulgadaCm = () => pulgada * 2.5;
console.log(pulgadaCm(pulgada));
console.log("******************************************");

let textoSimple = prompt("ingrese una palabra");
console.log(`http://www.${textoSimple}.com`);

console.log("******************************************");

let fraseComillas = prompt("ingrese una frase");
console.log(`"${fraseComillas}"`);

console.log("******************************************");
let aniosHumano = prompt("ingrese cuanto años tiene su perro");
let aniosPerro = () => aniosHumano * 7;
console.log(aniosPerro(aniosHumano));

console.log("******************************************");
let sueldoMensual = prompt("ingrese importe de su sueldo mensual");
let valorHora = () => sueldoMensual /40;
console.log(valorHora(sueldoMensual));
/* kilogramos divido por 
el cuadrado de la estatura en metros*/
console.log("******************************************");
let altura = parseFloat ( prompt("ingrese su altura en metros"));
let peso = parseFloat ( prompt("ingrese su peso en kilos"));
let imc = () => (peso) / (Math.pow(altura,2));

console.log(imc());
