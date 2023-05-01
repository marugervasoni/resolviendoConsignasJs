// Desde un banco nos contactan para crear una aplicación que pueda facilitar el
// manejo de información y las acciones que el mismo necesita. Nuestro tech leader nos
// facilita la forma de representar a los usuarios (cuentas bancarias). Cada una de estas
// cuentas tiene la siguiente información:

// ● N.o de cuenta (solo números).
// ● Tipo de cuenta (cuenta corriente en pesos o caja de ahorro en
// pesos).
// ● Saldo en pesos (solo la cantidad).
// ● Titular de la cuenta (nombre completo).

//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];


// 2. Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes”, que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.
let banco = {

    clientes: arrayCuentas,

    // 3. Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá
    // un nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y
    // retornar el objeto cliente que corresponda con ese nombre ingresado.
    consultarCliente: function(titular) {

        let clienteBuscado = "";
        for (let i = 0; i < banco.clientes.length; i++) {
            const cliente = banco.clientes[i]
            if (cliente.titularCuenta == titular) {
                clienteBuscado = cliente;
                // console.log(clienteBuscado);
            }
        }
        return clienteBuscado;
    },
    // 4. Crear otro método llamado depósito, que recibirá dos parámetros, el titular de
    // cuenta y una cantidad de dinero a depositar. El método debe obtener a la
    // cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo
    // en pesos. Luego, deberá dar un aviso por la consola con el mensaje “Depósito
    // realizado, su nuevo saldo es: xxx”.
    deposito: function (titular, dineroADepos) {

        let cliente = this.consultarCliente(titular);
        let depositar = cliente.saldoEnPesos += dineroADepos;
        return("Deposito de $"+dineroADepos+" realizado en la cuenta del cliente: "+titular+". Su nuevo saldo es: $"+depositar+ " pesos.");   
    },
    // 5. Crear un último método llamado extracción, que recibirá también dos
    // parámetros: el titular de cuenta y el monto a extraer. El método debe obtener
    // la cuenta correspondiente y restar el monto al saldo actual. En caso de que el
    // resultado sea menor a 0, deberá imprimir un mensaje por la consola de
    // “Fondos insuficientes”, de lo contrario deberá imprimir “Extracción realizada
    // correctamente, su nuevo saldo es: xxx”.
    // Si llegaste hasta acá, felicidades, el equipo de desarrollo y el tech leader están
    // impresionados con tu trabajo.
    extraccion: function (titular, montoAExtraer) {

        let cliente = this.consultarCliente(titular);
        let mensaje;

        if (cliente.saldoEnPesos < montoAExtraer) {
            mensaje = "Fondos insuficientes.";
        } 
        else {
            cliente.saldoEnPesos = cliente.saldoEnPesos - montoAExtraer;
            mensaje = "Extracción realizada correctamente, su nuevo saldo es: "+cliente.saldoEnPesos+".";
        }
        return mensaje;
    }

}
let clienteEncontrado = banco.consultarCliente("Ramon Connell");
let depositar = banco.deposito("Ramon Connell",2000)
let extraer = banco.extraccion("Ramon Connell", 1000);
// console.log(clienteEncontrado);
// console.log(extraer);
// console.log(depositar);


// Bonus extra--------------------------------------------------------------------------

// Propiedad única
// Crear una función llamada propiedadUnica, que reciba un arreglo de objetos como
// parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo
// como parámetro la propiedad que fue pasada como string.
// Ejemplo:
// let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
// propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
// propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]

let array = [{ nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49}];

function propiedadUnica(arrayObj, string) {
  
  let resultado;
  let nuevoArray = [];
  for (let i = 0; i < arrayObj.length; i++) {
    const prop = arrayObj[i];
      if (string == "nombre") {
        nuevoArray.push(prop.nombre); 
      }
      else if (string == "edad") {  
        nuevoArray.push(prop.edad);
      }
      else {
        resultado = "El string envíado no es una propiedad perteneciente al array de objetos";
      }
    }
     return resultado? resultado: nuevoArray;
}

// console.log(propiedadUnica(array, "nombre"));
// console.log(propiedadUnica(array, "perro"));
// console.log(propiedadUnica(array, "edad"));

// Calculador de notas
// Crear el objeto “alumno”, el cual va a consistir en las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en
// una nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que
// pienses todos los métodos y propiedades que puedan hacer falta para que el
// programa funcione correctamente de la manera solicitada.
let alumno = {
  nombre:"Manolo",
  numeroDeLegajo: "1234",
  listaDeNotas: [7,8,6,9],
  calcularPromedio: function (notaAprob) {

    let promedio;
    let estaAprobado;
    let calificaciónTotal = 0;

    for (let i = 0; i < this.listaDeNotas.length; i++) {
      const nota = this.listaDeNotas[i];
      calificaciónTotal += nota;
    }
    promedio = calificaciónTotal / this.listaDeNotas.length;
    if (promedio >= notaAprob) {
      estaAprobado = true;
    } else {
      estaAprobado = false;
    }

    return (`El promedio del alumno ${this.nombre} es: ${promedio} y para aprobar necesita obtener un: ${notaAprob}, por lo que ${estaAprobado ? "aprobó":"desaprobó."}`);
  }

}
// let notaAprobManolo = 8;
// let calcularPromedio = alumno.calcularPromedio(notaAprobManolo);
// console.log(calcularPromedio);