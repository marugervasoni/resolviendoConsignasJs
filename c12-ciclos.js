// determinar ganador de concurso standup de 3 presentaciones x participante
//publixo maximo 100 personas
const alicia = [13, 69, 32];
const bob = [12,67,43];

//La tarea consiste en enfrentar estas votaciones comparando a[0] 
//con b[0], a[1] con b[1] y a[2] con b[2].
function encontrarGanador (a, b){

    let puntosA = 0;
    let puntosB = 0;
    let resultados;

    for (let i = 0; i < a.length; i++) {
        const votación = a[i];

        if (votación > b[i]) {
            ++puntosA;
        }
        else if (votación < b[i]) {
            ++puntosB;
        }
        else {
            console.log(`En la presentación ${++i} hubo empate!; Los puntajes de cada participante hasta el momento son: ${puntosA} puntos para Alicia y ${puntosB} puntos para Bob.`);
        }
    }

    if (puntosA > puntosB) {
        resultados = `Resultados de la competencia: Ganadora Alicia con ${puntosA > 1? puntosA+" puntos" : puntosA+" punto!"}.`;
    }
    else if (puntosA < puntosB) {
        resultados = `Resultados de la competencia: Ganador Bob con ${puntosB > 1? puntosB+" puntos" : puntosB+" punto!"}.`;
    } else {
        resultados = `Resultados de la competencia: Tenemos un empate!!`;
    }
    
    return resultados;
}
console.log(encontrarGanador(alicia,bob));

//extra bonus

// Crea la función digitalHouse() la cual recibirá 2 números como parámetros. La función
// deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
// siguientes criterios:
// ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó,
// deberá mostrar el string “Digital” en lugar del número.
// ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
// mostrar el string “House” en su lugar.
// ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el
// string “Digital House” en lugar del número.
function digitalHouse(num1, num2){

    let numero;
    for (let i = 0; i <= 100; i++) {
        numero = i;
        if((numero % num1 === 0 ) && !(numero % num2 === 0 )) {
            console.log("Digital");
        }
        else if (!(numero % num1 === 0 ) && (numero % num2 === 0 )) {
            console.log("House");
        } 
        else if ((numero % num1 === 0 ) && (numero % num2 === 0 )) {
            console.log("Digital House");
        }else {
            console.log(numero);
        }        
    }
}
digitalHouse(5,7);

// Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta
// vez lo modificaremos para que pueda recibir un array de números de cualquier
// cantidad de elementos.
// Si no recordás el enunciado original: deberás crear una función sumaArray que
// acepte un arreglo de números y devuelva la suma de todos ellos.
// Ejemplo:
// ● sumArray([1,2,3]) // 6
// ● sumArray([10, 3, 10, 4]) // 27
// ● sumArray([-5,100]) // 95

let numeros = [1, 3, 6, 7, 8, 9, 10, 25, 3]

function sumArray(arrayNums) {

    let sumaNumeros = 0;
    for (let i = 0; i < arrayNums.length; i++) {
        const numero = arrayNums[i];
        sumaNumeros += numero;
        // console.log("vuelta "+i+": suma = "+sumaNumeros);
    }
    return sumaNumeros;
}
console.log("suma numeros = "+sumArray(numeros));

// Ya que estamos retocando funciones, hagamos lo propio con la función del ejercicio
// simulación join().
// Deberás modificar la función join() de manera que pueda recibir un array de strings
// de cualquier cantidad de elementos.
// Importante: no podés usar el método Array.join() original.
// Por ejemplo:
// join(["h","o","l","a"]) debe retornar el string "hola".
// join(["c","h","a,"u"]) debe retornar el string "chau".

let saludoDH = ["h","o","l","a","D","i","g","i","t","a","l","H","o","u","s","e"]

function join(arrayStrings) {

    let stringJoined = arrayStrings.join("");
    return stringJoined;
}
console.log(join(saludoDH));