// modificá tu código de forma tal que cumpla con estas consignas:
// ● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
// inválida. Por favor ingrese un número válido."
// Importante: No se deberá mostrar ningún otro mensaje.
// ● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
// la mayoría de edad.
// ● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad
// es impar?".
let edad = 21;

if(edad < 0){
    console.log("Error, edad inválida. Por favor ingrese un numero válido.");
}
else if(edad === 21){
    console.log("Bienvenido, felicitaciones por haber llegado a la mayoría de edad.");
}
else if((edad % 2) === 1){
    console.log("¿Sabías que tu edad es impar?");
}

// Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
// litrosConsumidos.
// A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones.
// ● Si el vehículo es “coche”, el precio por litro es de $86,
// ● Si es “moto” ha de ser $70.
// ● Si es “autobús” ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.
function totalAPagar(vehiculo, litrosConsumidos) {

    let resultado = 0;
    let adicional = 0;

    switch (vehiculo) {
        case "coche":
            resultado = litrosConsumidos * 86;
            break;
        case "moto":
            resultado = litrosConsumidos * 70;
            break;
        case "autobus":
            resultado = litrosConsumidos * 55;
            break;
    }
    if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
        adicional = 50;
    }
    else if (litrosConsumidos > 25) {
        adicional = 25
    }
    let total = resultado + adicional
    return "El total a pagar para el "+vehiculo+", por "+litrosConsumidos+" lts, más un adicional de $ "+adicional+" por la cantidad de lts, es: $ "+total+".";        
}
//console.log(totalAPagar("autobus", 27));

// Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes
// eligen el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma
// el valor de su seleccion al precio, por ej, un sadwich base vegetariano con un precio x,
// despues selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y
// asi sucecivamente con el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera:
// Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor
// base diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego de eso el sistema les pregunta qué tipo de pan querrán, tienen para elegir
// entre otras 3 opciones, por lo que recibiremos también otro string con el tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos, es decir true o
// false, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total
// de 6 valores booleanos, uno por cada adicional).
// Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el
// sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función
// deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de
// pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá
// retornar el valor numérico del total a pagar del cliente.
function calcularCostoSandwich(sandwichBase, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    
    let precio = 0;
    switch (sandwichBase) {
        case "pollo":
            precio += 150;
            break;
        case "carne":
            precio += 200;
            break;
        case "veggie":
            precio += 100;
            break;
        default:
            console.log("la opción envíada no existe o es incorrecta");
    }
    switch (pan) {
        case "blanco":
            precio += 50;
            break;
        case "negro":
            precio += 60;
            break;
        case "s/gluten":
            precio += 75;
            break;
        default:
            console.log("la opción envíada no existe o es incorrecta");
    }
    queso? precio += 20:precio += 0;
    tomate? precio += 15:precio += 0;
    lechuga? precio += 10:precio += 0;
    cebolla? precio += 20:precio += 0;
    mayonesa? precio += 5:precio += 0;
    mostaza? precio += 5:precio += 0;

    return (`Sandwich base de ${sandwichBase} con pan ${pan} y sus adicionales de: ${queso? "queso, ":""}${tomate? "tomate, ":""}${lechuga? "lechuga, ":""}${cebolla? "cebolla, ":""}${mayonesa? "mayonesa, ":""}${mostaza? "mostaza, ":""}cuesta: $${precio}.`);
}
console.log(calcularCostoSandwich("pollo","negro", true, true, false, false, true, false));

// Extra Bonus
// ¿Cual es el número secreto?
// Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 (investiga que hace la función Math.random()), en caso de ser correcto
// retorna un mensaje felicitando al usuario, y en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.
function esElNumeroSecreto(numero){
    let numSecreto = Math.round(Math.random()*10+1);
    let resultado;
    if (numero == numSecreto) {
        resultado = "Felicitaciones, acertaste el numero secreto";
    } else {
        resultado = "Lo sentimos, mejor suerte para la proxima";
    } 
    return resultado + ", el numero secreto es: "+numSecreto+" y tu numero es: "+numero+".";
}
//console.log(esElNumeroSecreto(5));

// abrirParacaidas()
// Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h
// ● La altura debe ser mayor o igual a 2000m y menor a 3000m
function abrirParacaidas(velocidad, altura){
    let kmPorHoraMax = 1000;
    let mtsMin = 2000;
    let mtsMax = 3000;
    let respuesta;
    if((velocidad < kmPorHoraMax) && (altura >= mtsMin && altura < mtsMax)) {
        respuesta = "Paracaidas puede abrirse";
    } else {
        respuesta = "Paracaidas no puede abrirse"
    }
    return respuesta;
}
//console.log(abrirParacaidas(900,2500));

// Estructura switch
// Traductor Condicional
// Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.
function traductor(palabra) {
    
    let respuesta;

    switch (palabra) {
        case "casa":
            respuesta = "house";
            break;
        case "perro":
            respuesta = "dog";
            break;
        case "pelota":
            respuesta = "ball";
            break;
        case "arbol":
            respuesta = "tree";
            break;
        case "genio":
            respuesta = "genius";
            break;        
        default:
            respuesta = "la palabra ingresada es incorrecta"
    }
    return respuesta;
}
//console.log(traductor("arbol"));

// Valoración de Películas
// Usando la estructura switch, pedile al usuario que valore la película que acaba de ver
// en:
// ● Muy Mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras
// por su valoración.
// Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
// En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor
// inválido".
// Cuando el usuario haya valorado la película, agradecele su visita.
function valorarPeli(valoracion) {
    switch (valoracion) {
        case "Muy mala":
            console.log("Calificaste la pelicula como "+valoracion+". Lo lamentamos mucho");
            break;
        case "Mala":
            console.log("Calificaste la pelicula como "+valoracion+". Lo lamentamos mucho");
            break;
        case "Mediocre":
            console.log("Calificaste la pelicula como "+valoracion+". Lo lamentamos mucho");
            break;
        case "Buena":
            console.log("Calificaste la pelicula como "+valoracion+". Gracias por tu calificación");
            break;    
        case "Muy buena":
            console.log("Calificaste la pelicula como "+valoracion+". Muchisimas gracias por tu calificación");
            break;            
        default:
            console.log("Ingresaste un valor inválido");
    }
}
valorarPeli("Muy buena")