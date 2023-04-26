//1 - operaciones basicas

function sumar(a, b){
    return a + b;
}
function restar(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b){
    return a / b;
}


//2- testeamos funciones
console.log("-----------Testeo de operaciones / Calculadora-------------");
console.log(sumar(5,7));
console.log(restar(5,7));
console.log(multiplicar(5,7));
console.log(dividir(10,0));


//3- operaciones avanzadas
function cuadradoDeUnNumero(numero) {
    return multiplicar(numero, 2);
}
//console.log(cuadradoDeUnNumero(8));

function promedioDeTresNumeros(num1,num2,num3){
    let suma1 = sumar(num1,num2);
    let total = sumar(suma1, num3);
    return dividir(total,3);
}
//console.log(promedioDeTresNumeros(3,4,5));

function calcularPorcentaje(total, porcentaje) {
    let multipTotalPorcentaje = multiplicar(total, porcentaje);
    return dividir(multipTotalPorcentaje, 100);   
}
//console.log(calcularPorcentaje(2000,20));

function generadorDePorcentaje(porcentaje, total) {
    let divisionPorcentaje = dividir(porcentaje, total);
    return multiplicar(divisionPorcentaje, 100);
}
//console.log(generadorDePorcentaje(2,200));