// 1. Partimos de nuestro array de películas
let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculasAnimadas = ["los simpsons", "mosnters inc", "la sirenita", "everest", "toy story"]

// function convertirAMayusculas(array){
//     array[0] = array[0].toUpperCase()
//     array[1] = array[1].toUpperCase()
//     array[2] = array[2].toUpperCase()
//     array[3] = array[3].toUpperCase()
//     array[4] = array[4].toUpperCase()
//     return array
// }

// pasemos todos los elementos a mayúsculas utilizando bucles.
function convertirAMayus(array){

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
        // console.log(array);
    }
    return array;
}
console.log(convertirAMayus(peliculas));



// 2. Ahora necesitamos modificar la función pasajeDeElementos() la cual nos permite
// agregar los contenidos de nuestro array de pelis animadas al array de pelis
// original.

// function pasajeDeElementos(array1, array2) {
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// array1.push(array2.pop().toUpperCase())
// return array1
// }

function pasajeDeElementos(array1, array2) {

    for (let i = 0; i < array2.length; i++) {
        array2[i] = array2[i].toUpperCase();
        array1.push(array2[i])
        //console.log(array1);
    }
    return array1;
}
console.log(pasajeDeElementos(peliculas,peliculasAnimadas));



// 3. Para este punto, si decidiste trabajar en un archivo distinto en lugar de
// modificar el anterior, recordá que teníamos un infiltrado dentro de nuestras
// pelis animadas que debíamos sacar y guardar en otra variable antes de realizar
// el pasaje de elementos de un array a otro.



// 4. Por último, debemos modificar nuestra función comparadora de puntajes para
// las películas como venimos haciendo hasta ahora.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// function compararCalificaciones(asia, europa) {
// let comparacionesAsiaEuropa = []
// comparacionesAsiaEuropa[0] = asia[0] === europa[0]
// comparacionesAsiaEuropa[1] = asia[1] === europa[1]
// comparacionesAsiaEuropa[2] = asia[2] === europa[2]
// comparacionesAsiaEuropa[3] = asia[3] === europa[3]
// comparacionesAsiaEuropa[4] = asia[4] === europa[4]
// comparacionesAsiaEuropa[5] = asia[5] === europa[5]
// comparacionesAsiaEuropa[6] = asia[6] === europa[6]
// comparacionesAsiaEuropa[7] = asia[7] === europa[7]
// comparacionesAsiaEuropa[8] = asia[8] === europa[8]
// return comparacionesAsiaEuropa
// }
function  compararCalificaciones(asia, europa) {

    let comparacionesAsiaEuropa = []
    for (let i = 0; i < asia.length; i++) {
        comparacionesAsiaEuropa[i] = asia[i] === europa[i];
        //console.log(comparacionesAsiaEuropa);
    }
    return comparacionesAsiaEuropa;
}
console.log(compararCalificaciones(asiaScores,euroScores));



// Extra bonus-----------------------------------------------------------------------------

// Concurso de clavados
// Un cliente nos pide que hagamos una aplicación que pueda determinar a los
// ganadores de un concurso de clavados que se realizó el fin de semana.
// Para ello vamos a necesitar seguir las siguientes instrucciones e información para
// poder desarrollar nuestra app.
// Cada participante cuenta con 5 clavados, de los cuales se formarán sus puntajes
// individuales. Los participantes con sus respectivos puntajes son los siguientes:
// ● Participante A: 5, 8, 4, 9, 5.
// ● Participante B: 8, 7, 8, 6, 8.
// ● Participante C: 7, 5, 10, 8, 3.
// La competencia consta de 2 modalidades de selección para un ganador:
// ● Mejor promedio (el mayor puntaje promedio entre los competidores).
// ● Mayor puntaje (el mayor puntaje de entre los 5 clavados de cada participante).
// Con esta información, nuestro tech leader nos pide lo siguiente:

// 1. Determinar cuál sería la forma ideal de representar a cada participante con sus
// puntajes.
let participanteA = [5,8,4,9,5];
let participanteB = [8,7,8,6,8];
let participanteC = [7,5,10,8,3];

// 2. Crear una función puntajePromedio la cual recibe un participante por parámetro
// y deberá calcular —y retornar— el puntaje promedio del mismo.
function puntajePromedio(participante) {
    
    let puntaje = 0;
    for (let i = 0; i < participante.length; i++) {
        puntaje += participante[i];
//        console.log(puntaje);
    }
    return puntaje / participante.length;
}
// console.log("Promedio participanteA: "+puntajePromedio(participanteA));
// console.log("Promedio participanteB: "+puntajePromedio(participanteB));
// console.log("Promedio participanteC: "+puntajePromedio(participanteC));



// 3. Crear una función puntajeNayor la cual recibe un participante por parámetro y
// deberá buscar —y retornar— el mayor puntaje que tenga el participante.
function puntajeMayor(participante) {
    
    let puntajeMayor = 0;
    for (let i = 0; i < participante.length; i++) {
        if (participante[i] > puntajeMayor) {
            puntajeMayor = participante[i];    
        }
        // console.log(puntajeMayor);
    }
    return puntajeMayor;
}
// console.log("Puntaje mayor participanteA: "+puntajeMayor(participanteA));
// console.log("Puntaje mayor participanteB: "+puntajeMayor(participanteB));
// console.log("Puntaje mayor participanteC: "+puntajeMayor(participanteC));

// 4. Luego, nuestro tech leader nos solicita que —creadas estas dos funciones—
// generemos una nueva funcionalidad llamada competencia la cual recibirá a los 3
// participantes por parámetros y ejecutará las dos funciones creadas
// previamente para calcular los promedios y puntajes mayores de cada uno.
// Además, esta deberá anunciar (mostrar por la consola) al ganador de cada
// modalidad de puntaje.
function competencia(participante1, participante2, participante3) {
 
    let participantes = [participante1,participante2,participante3]
    let promedios = [];
    let puntajesMayores = [];
    let mejorPromedioGeneral = 0;
    let mayorPuntajeGeneral = 0;

    for (let i = 0; i < participantes.length; i++) {
        const participante = participantes[i];
        promedios.push(puntajePromedio(participante)); 
        puntajesMayores.push(puntajeMayor(participante)); 

        for (let i = 0; i < promedios.length; i++) {
            const promedio = promedios[i];
            if (promedio > mejorPromedioGeneral) {
                mejorPromedioGeneral = promedio;    
            }
        }
        for (let i = 0; i < puntajesMayores.length; i++) {
            const puntajeMayor = puntajesMayores[i];
            if (puntajeMayor > mayorPuntajeGeneral) {
                mayorPuntajeGeneral = puntajeMayor;
            }
        }

    }
    console.log("Promedios generales:");
    console.table(promedios)
    console.log("Mayores puntajes generales:");
    console.table(puntajesMayores);
    return ("- El mejor de todos los promedios es: "+mejorPromedioGeneral+", y el mejor de todos los puntajes es: "+mayorPuntajeGeneral+".");
}
console.log(competencia(participanteA,participanteB,participanteC));