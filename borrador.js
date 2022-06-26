 /*function loro(oye){
     for(i=1; i<=5; i++){
     console.log(oye)
     }
 }

 loro("hola que tal!")*/

 console.log("************************");
 function noParesDeContarImparesHasta(numero){
    let total=null;
    for (i=1 ; i <= numero; i++){
        if ((i % 2) !== 0){
            total++;
        }
    }
    return total;
}
         
   

 noParesDeContarImparesHasta(4)

 console.log("************************");
 
function tablaDeMultiplicar(numero){
    let resultado=0
 let i=0
    while(i<=10){
    resultado = numero *i
    
    console.log(numero + " " +"*" +" "+ i + " " + "=" + " " + resultado )
    i++
    }
};

tablaDeMultiplicar(5)
console.log("************************");
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(" ")
  console.log(fraseNueva)
  console.log("************************");