/*Ejercicio 1:
 Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
nombre
apellido 
camada
esParcial (VERDADERO)


2.  Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
	 NOTA < 4 :           desaprobado
 4 <= NOTA < 7 :  debe rendir examen final 
	 NOTA >= 7 :         promocionado.  
La función deberá retornar la condición final del alumno (solo retorna la palabra). 
Al momento de llamar a la función, deberás mostrar la siguiente frase: 
	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]”*/
console.log("**************Lorena Montaldo camada5***********");
console.log("************Ejercicio 1*******************************************");
console.log("***punto1***");
let estudiante={
    nombre: "",
    apellido: "",
    camada:"",
    esParcial: true
}
console.log(estudiante);

console.log("***punto2***");
function situacionDelAlumno(nota){
    condicion=""
    if(nota<4){
        condicion="desaprobado"        
    }
    else if (nota>4 && nota <= 7){
        condicion= "debe rendirexamen final"
    }
    else if( nota>=7){
        condicion="promocionado"
    }
    let situacionFinalAlumno="El alumno obtuvo una nota igual a " + nota + " por lo tanto su condición es "+ condicion

    return situacionFinalAlumno
    }

    let estadoDeAlumno= situacionDelAlumno(3);
    console.log(estadoDeAlumno);
/*Ejercicio 2:
Crea 1 array llamado clase.  
Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
Agrega estos 3 objetos al array llamado clase.
Imprimir el array para ver que contenga esos objetos.
Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada. 
*/
    console.log("************Ejercicio 2*******************************************");
    console.log("**********");
    let clase=[];
        let alumno1= {
            nombres:"Esteban",
            apellidos:"Piazza",
            bimestre:1
        };
        let alumno2={
            nombres:"Leandro",
            apellidos:"Borrelli",
            bimestre:1
        };
        let alumno3={
            nombres:"Martín",
            apellidos:"Cejas",        
            bimestre:1
        };
        clase.push(alumno1);
        clase.push(alumno2);
        clase.push(alumno3);
    
console.log(clase);

console.log("***********");
function siguienteCursada(array){
    for (let i=0; i<array.length;i++){
        array[i].bimestre= array[i].bimestre+1
    }
    return array
}

let proximoBimestre= siguienteCursada(clase);
console.log(proximoBimestre)

/*Ejercicio 3:
1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 
Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.
Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
Deberá retornar un string aprobado o desaprobado según corresponda
*/
console.log("************Ejercicio 3*******************************************");
    console.log("**********");
    function evaluativa(CantAsist,ProgPG){
    const asistenciaMinima=23;
    let estadoAlumno=""
    if( CantAsist>=23 && ProgPG== true){
        estadoAlumno="aprobado"
    }else{
        estadoAlumno="desaprobado"
    }
    return estadoAlumno
    }

let situcionAlumno=evaluativa(30,true)
console.log(situcionAlumno)
console.log("**********");
situcionAlumno=evaluativa(23,true)
console.log(situcionAlumno)
console.log("**********");
situcionAlumno=evaluativa(23,false)
console.log(situcionAlumno)
console.log("**********");
situcionAlumno=evaluativa(18,false)
console.log(situcionAlumno)
console.log("**********");



