let frutas = ["banana", "pera","manzana"];

// A. Acceder a elementos específicos de un array.
let indexBanana = frutas.indexOf('banana');
console.log(indexBanana);

// B. Modificar cada uno de sus elementos e imprimirlos.
console.log(frutas);
let modifBan = frutas.shift();
console.log(frutas);
let modifPera = frutas.shift();
console.log(frutas);
let modifManz = frutas.shift();
console.log(frutas);
let agrego1 = frutas.unshift('manzana2');
let agrego2 = frutas.unshift('pera2');
let agrego3 = frutas.unshift('banana2');
console.log(frutas);

// C. Agregar elementos a un array.
let agregarFrutaAdelante = frutas.unshift('sandia');
let agregarFrutaDetras = frutas.push('durazno')
console.log(frutas);

// D. Extraer elementos de un array.
let extraerPrimerFruta = frutas.shift();
let extraesUltimaFruta = frutas.pop()
console.log(frutas);

// E. Comparar elementos de un array con los elementos de otro.
//TODO
