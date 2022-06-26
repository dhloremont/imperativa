function matrizX3(){
    let matriz = [];
    for(i=0;i<3;i++) {
        let fila = [];
        let fila1=0
        for(j=0; j<3; j++) { 
             if(i==0){
             fila1--
                fila.push(fila1);
            }else
           fila.push(j-i*3);
        }
        matriz.push(fila)
    }
    return matriz;
  }
 
  
  let matrizNegativa=matrizX3()
  console.table(matrizNegativa)

  let a=0;

while (a<=10){

    console.log(a);

    a++;

}