function sumar (a,b,c) {
    return a + b + c;
}
function restar (a,b) {
    return a - b;
}
function multiplicar (a,b) {
    return a * b;
}
function dividir (a,b) {
    return a / b;
}
function cuadradoDeUnNumero (a) {
    let cuadrado = multiplicar (a,a);
    return cuadrado;
}
function promedioDeTresNumeros (a,b,c) {

    let final = dividir (a + b + c,3);
    return final;
}
function calcularPorcentaje (a,b) {
    let porcentaje = multiplicar (a,b);
    let total = porcentaje /100;
    return total;

}
function GeneradorDePorcentaje (a,b) {
    let porcentaje = dividir (a,b);
    let total = porcentaje *100;
    return total;
}
console.log(GeneradorDePorcentaje (2,200))