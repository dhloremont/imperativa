const NUMERO_MIN = 10;
const NUMERO_MAX = 1000;

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

let sumarNumeros = () => {
    let sumaTotal = 0;
    numeros.map(x => {
        x.map(c => {
            if (c >= NUMERO_MIN && c < NUMERO_MAX ) {
                sumaTotal += c;
            }
        })
    })
    return sumaTotal
}

let sumaConFor = () => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros[i].length; j++) {
            if (numeros[i][j] >= NUMERO_MIN && numeros[i][j] < NUMERO_MAX ) {
                sumaTotal += numeros[i][j];
            }
        }
    }
    return sumaTotal;
}

console.log(sumaConFor());
console.log(sumarNumeros());
