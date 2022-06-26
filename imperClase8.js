console.log("****************PRIMEROS 10************************");
function primeros10 (){
    for(i=1; i<=10; i++){
      console.log(i)  
    }
}
primeros10()
console.log("*****************DEL 5 AL 20********************************");
function del5al20 (){
    for(i=5; i<=20; i+=3){
      console.log(i)  
    }

}
del5al20()
console.log("*****************sumar 100********************************");
function sumarCienN(){
let suma=0
for(i=0;i<=100;i++){
    suma= suma+i;
    console.log(suma);

}
}
sumarCienN()
console.log("*****************factorial********************************");
function factorial(){
    let factor=1
    for(i=1;i<=10;i++){
        factor= factor*i;
        console.log(factor);
    }
}
factorial()
console.log("*****************fibonache********************************");
function fibonache(numero){
    let numeros =[0,1]
    for(let i = 2;i<numero; i++){
        numeros[i] = numeros [i-2]+numeros[i-1];
    }
    return numeros;
}
console.log(fibonache(10))
