//I
// 1. Crear una función que convierta pulgadas en centímetros. Es decir, recibe por
// parámetro pulgadas y retorna su equivalente en centímetros.
function pasarACm(pulgadas){    
    let cm = 0.393701; 
    let resultado = pulgadas * cm;
    return pulgadas+" pulgadas equivalen a "+resultado+" cm.";
}
// console.log(pasarACm(76));

// 2. Crear una función que recibe un string y lo convierte en una URL.
// Ejemplo: “pepito” es devuelto como “http://www.pepito.com”.
function pasarAUrl(string){
    let url = "http://www." + string+".com"
    return url;
}
//console.log(pasarAUrl("marudev"));

// 3. Crear una función que recibe un string y devuelve la misma frase, pero con
// admiración.
function fraseConAdmiracion(string){
    let admiración = "¡¡" + string +"!!"
    return admiración;
}
//console.log(fraseConAdmiracion("que lindo dia"));

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.
function calcularEdadPerro(edad){
    let edadPerruna = edad * 7; 
    return "Mi perro tiene "+edad+" años, pero realmente tiene "+edadPerruna+" años perrunos.";
}
//console.log(calcularEdadPerro(5));

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40
// horas.
function calcularHoraLaboral(sueldo) {
    let horasMensuales = 40;
    let resultado = sueldo / horasMensuales;
    return "el valor de mi hora de trabajo es: $"+resultado+".";
}
//console.log(calcularHoraLaboral(50000));

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
// kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
// probando diferentes valores.
function calcularIMC(altura, peso){
    let imc = peso / (altura*2);
    return "el IMC para un peso de "+peso+" kgs. y una altura de "+altura+" mts. es: "+imc+".";
}
//console.log(calcularIMC(1.64, 63));

//II
// 1. Crear una función que recibe un string en minúscula, lo convierta a
// mayúsculas y lo retorne. Pista: investigá qué hace el método de strings:
// toUpperCase()
function pasarAMayuscula(string) {
    return string.toUpperCase();
}
//console.log(pasarAMayuscula("estoy en mayuscula"));

// 2. Crear una función que recibe un parámetro y devuelve qué tipo de dato
// es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada
// typeof.
function queTipoDeDatoEs(dato) {
    return typeof(dato);
}
console.log(queTipoDeDatoEs("hola"));
console.log(queTipoDeDatoEs(false));
console.log(queTipoDeDatoEs(1));
console.log(queTipoDeDatoEs([1, "hola", 3]));

// 3. Crear una función a la que le pasamos el radio de un círculo y nos
// devuelve la circunferencia. Pista: investigá si el objeto Math tiene entre sus
// propiedades el número pi.
function devolverCircunferencia(radio) {
    let pi = Math.PI;
    let resultado = 2 * pi * radio;
    return "La circunferencia del circulo con radio "+radio+" es: "+resultado+".";
}
//console.log(devolverCircunferencia(14));