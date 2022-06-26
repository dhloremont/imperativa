let numeros = [12,5,13,25,69,87,4]


                
for(let i=0 ; i<numeros.length - 1; i++){
  if(numeros[i]>numeros[i+1]){

   let temporario = numeros[i];
   numeros[i] = numeros[i+1];
   numeros[i+1] = temporario;

  }
}

console.log(numeros);