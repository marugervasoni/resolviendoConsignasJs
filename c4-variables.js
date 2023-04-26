//1
let edadMinima = 21;
let capacidaMaxima = 800;

//2
let uno = 13;
let dos = uno;

console.log(`2--> ${dos}`);

//3
let nombre = "Maria";
let edad = 27;
let cumpleaños = "03/04/1996";
let ciudad = "San Isidro";
let ocupacion = "empleada";
let hobbie = "escuchar musica";

console.log(`3--> Hola, mi nombre es ${nombre}, tengo ${edad} años, y nací el día ${cumpleaños}. Vivo en la ciudad de ${ciudad}, trabajo como ${ocupacion}, y mi hobbie es ${hobbie}!! `);

let mascota = "foster"; let ahijada = "azul"; let hermanos = 4;

//4
let edad1 = 27;
let edad2 = 25;
let edad3 = 29;

let cantidadDias1 = edad1*365;
let cantidadDias2 = edad2*365;
let cantidadDias3 = edad3*365;

console.log(`4--> 1) 27 años tiene ${cantidadDias1} días, 2) 25 años tiene ${cantidadDias2} días, 3) 29 años tiene ${cantidadDias3} días.`);

//5
let num1 = 10;
let num2 = 15;
let resultado = num1 + num2;

console.log(`5--> la suma de ${num1} y ${num2} es: ${resultado}.`);

//6
let miEdad = 27;
let edadMax = 85;
let snackFav = "3D";
let snacksXDia = 5;
let precioXUnid = 2.5;
let snacksXComerEnMiVida = (edadMax - miEdad) * snacksXDia;
let gasto = snacksXComerEnMiVida * precioXUnid;

console.log(`6--> Voy a necesitar ${snacksXComerEnMiVida} snacks para que me alcance hasta los ${edadMax} años, y voy a gastar ${gasto} pesos.`);

//7
let diasDeViaje = 7;
let presupMax = 70000;
let comidas = diasDeViaje * 4;
let gastoXComida = presupMax / comidas;

console.log(`7--> Podré gastar $ ${gastoXComida} en cada comida para que me alcance la plata durante los ${diasDeViaje} días de viaje.`);

//8
let nombre1 = "Nicolas Lopez";
let edadNico = 27;
let peso = 83.5;
let altura = 1.70;
let tienePrepaga = true;
let iMC = peso / (altura*2);

let peso2 = 62.0;
let altura2 = 1.64;
let iMC2 =  peso2 / (altura2*2);

console.log(`8--> * ${nombre1} tiene ${edadNico} años y su índice de masa corporal es de ${iMC}. ${nombre} tiene ${edad} años y su índice de masa corporal es de ${iMC2}`);


//*
// function saludar(nombre = 'visitante', apellido = 'anonimo') {
//     return 'Hola '+nombre+' '+apellido;
// }
// let saludarAnon = saludar()
// let saludarMaru = saludar("maru","gervasoni"); 
// console.log(saludarAnon,saludarMaru);