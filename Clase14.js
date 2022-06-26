const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
/* a.	Obtener en un nuevo array las edades menores a 18.
b.	Obtener en un nuevo array las edades mayor o igual a 18.
c.	Obtener en un nuevo array las edades igual a 18.
d.	Obtener el menor.
e.	Obtener el mayor. 
f.	Obtener el promedio de edades.
*/
console.log("************menor a 18****************")
function menores18(array){
    let menorA18 =[];
    for (let i= 0; i < array.length; i ++){
        if (array [i]< 18){
            menorA18.push(array[i])
        }
    } return menorA18
}

let menorA18Result = menores18(edades);
console.log(menorA18Result)
console.log("************menor****************")
function obtenermenor(array){
    let nroMenor=0
    nroMenor=Math.min.apply(null,array)
    return nroMenor
}

let numeroMenor= obtenermenor (edades)
console.log(numeroMenor)
console.log("************mayor****************")
function obtenermayor(array){
    let nroMayor=0
    nroMayor=Math.max.apply(null,array)
    return nroMayor
}

let numeroMayor= obtenermayor(edades)
console.log(numeroMayor)
console.log("************promedio****************")
function promedioEdad(array){
    let suma =0
    for( let i=0; i< array.length;i++ ){
        suma = suma +array[i]
    }
    let promedio = 0
    promedio= suma / array.length

    return  promedio

}
let promedioFinal = promedioEdad(edades)
console.log(promedioFinal)
console.log("************edad mas 1****************")
// Incrementar en 1 todas las edades

function incrementarEdad(array){

    for( let i=0; i< array.length;i++ ){
        array[i] = array[i]+1

    }
    return array
}
console.log(edades)
let masEdad= incrementarEdad(edades)
console.log(masEdad)

console.log("*********************************OBJETOS*****************************************************")
/*Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un nuevo array por cada tipo de cuenta.
Obtener un nuevo array con las cuentas habilitadas.
Obtener un nuevo array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.
*/

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

console.log("**********edades sean menores a 30********************")

function menoresA30(array){
  let arrayMenores30=[]
  for(i=0; i < array.length;i++){
    if (array[i].edadTitular< 30){
    arrayMenores30.push(array[i]);
    }
    
  }
  return arrayMenores30
}

let arraymenores= menoresA30(arrayCuentas);
console.log(arraymenores)

console.log("********************mayor o igual a 30*******************************************")
function mayorIgual30(array){
  let igualMayor30=[]
  for(i=0; i < array.length;i++){
    if (array[i].edadTitular>= 30){
    igualMayor30.push(array[i]);
    }
  }
  return igualMayor30

}
let mayoresA30 = mayorIgual30(arrayCuentas);
console.log(mayoresA30)

console.log("*********************obtenerMenorEdad******************************************")
function obtenerMenorEdad(array){
  let menorEdad={};
  let edadMenor= array[0].edadTitular;

  for(let i = 0 ; i < array.length; i++){
    if (array[i].edadTitular < edadMenor){
      menorEdad= array[i]
     

    }
    
  } //console.log(menorEdad)
  return menorEdad
}

let resultadoMenorEdad=obtenerMenorEdad(arrayCuentas);
console.log(resultadoMenorEdad)

  


console.log("***********************tipo de cuenta****************************************")
//Obtener un nuevo array por cada tipo de cuenta.

function tipoDeCuenta(array){
let cuentasSueldo=[]
let cuentasCorrientes=[]
let cuentasGrales=[]

for (i=0; i< array.length; i++){
  if(array[i].tipoCuenta== "sueldo"){
    cuentasSueldo.push(array[i])
  }else{
    cuentasCorrientes.push(array[i])
  }
}
cuentasGrales.push(cuentasSueldo);
cuentasGrales.push(cuentasCorrientes);
return cuentasGrales
}
let resultadoCtasCtes=(tipoDeCuenta(arrayCuentas));
console.log(resultadoCtasCtes)

console.log("********************ctas habilitadas*******************************************")
//Obtener un nuevo array con las cuentas habilitadas.
function cuentasHabilitadas(array){
  let arrayCtasHabilitadas=[]
  for (i=0;i<array.length;i++){
    if (array[i].estaHabilitada==true){
      arrayCtasHabilitadas.push(array[i]);
    }
  }return arrayCtasHabilitadas
}
let ctasHabilitadas= cuentasHabilitadas(arrayCuentas);
console.log(ctasHabilitadas);

console.log("********************cuentas deshabilitadas*******************************************");
//Obtener un nuevo array con las cuentas deshabilitadas

function cuentasDeshabilitadas(array){
  let arrayCtasDeshabilitadas=[];
  for(i=0; i<array.length; i++){
  if (array[i].estaHabilitada== false){
    arrayCtasDeshabilitadas.push(array[i])
  }
}return arrayCtasDeshabilitadas
}
let ctasDeshabilitadas= cuentasDeshabilitadas(arrayCuentas);
console.log(ctasDeshabilitadas)
console.log("**********************menor saldo*****************************************")
//Obtener la cuenta con el menor saldo.
function  ctaMenorSaldo(array){
  let cuentaConMenorSaldo= {};
  let saldoMenor = array[0].saldo;
  parseFloat(saldoMenor);
  for (i=0; i<array.length;i++){
    let saldoDecimal= array[i].saldo;
    parseFloat(saldoDecimal);

    if (saldoDecimal< saldoMenor){
      cuentaConMenorSaldo= array[i];
    }
    console.log(cuentaConMenorSaldo)
  }//return cuentaConMenorSaldo
}

//let resultSaldoMenor= ctaMenorSaldo(arrayCuentas);
//console.log(resultSaldoMenor);
ctaMenorSaldo(arrayCuentas)


console.log("***************************************************************")

