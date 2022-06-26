function piramideAscendente(num) {
    let vuelta = "";
    for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        vuelta = vuelta + i;
}
    vuelta = vuelta +  "\n";
    }
    return vuelta;
};
let piramideAsc=piramideAscendente(7)
console.log(piramideAsc)

function piramideInvertida(nro) {
    let vuelta = "";
    for (let i = nro; i >= 1; i--) {
        for (let j = i; j > 0; j--) {
         vuelta = vuelta + i;
}
   vuelta = vuelta +  "\n";
    }
    return vuelta;
};

let piramideInv = piramideInvertida(6);
console.log(piramideInv)

console.log("*****************verdadero falso array ordenado******************")
let array1 = [4, 3, 1, 7, 9, 0, 4, 2];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];

function verdaderoFalso(array){
    let ordenado = true;
    for (let i= 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[i] > array[i+1]){
                ordenado = false;
            }
            
        }
    }
    return ordenado
}

let desordenado = verdaderoFalso(array1)
console.log(desordenado)

let ordenado = verdaderoFalso(array2)
console.log(ordenado)