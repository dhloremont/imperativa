let edad = 17 //(el número es a modo de ejemplo, podés cambiarlo o

if(edad<0){
console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if(edad < 18) {
console.log("No puede pasar al bar.");
} else if(edad < 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad==21){
console.log("Felicitaciones por llegar a los 21! Bienvenidoooo! :)");
} else {
    /*if(edad==21){
        console.log("Bienvenido :)");
    }*/
console.log("Puede pasar al bar y tomar alcohol.")
}
if(edad%2!=0){
    console.log("Sabias que tu edad es impar?");
}
