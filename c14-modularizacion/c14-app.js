// 5. Una vez exportadas las funciones —o el objeto si utilizaste el ejemplo del punto
// anterior—, requerí estas funcionalidades en un nuevo archivo de JavaScript, y
// revisá que todo funcione correctamente.
const { executionAsyncResource } = require("async_hooks");
const helper = require("./lecturaYEscritura");

// 6. En el archivo de JavaScript en el que tenemos requeridas nuestras funciones de
// lectura/escritura de archivos, creá el objeto literal concesionaria. Luego agregá
// la propiedad autos, la cual deberá tener la lista de vehículos del archivo JSON
// (previamente parseada). Verificá que puedas visualizar esta propiedad
// correctamente.
const autos = helper.leerJson('autos');
console.log(autos);

const concesionaria = {
    autos: autos,
// 7. En el objeto concesionaria, creá un método llamado agregarAuto, el cual recibe
// como parámetros: una marca, un modelo, el año del vehículo, el precio, y la
// patente. El método deberá agregar el nuevo auto a la propiedad autos, y se debe
// guardar en la base de datos (rescribir el JSON) la lista actualizada.
// PD: todos los vehículos nuevos tienen su propiedad “vendido” como “false” por
// defecto.
    agregarAuto: function (marca, modelo, anio, precio, patente) {
        
        const auto = {
            marca,
            modelo,
            anio,
            precio,
            patente,
            vendido: false
        }
        this.autos.push(auto);
        helper.escribirJson("autos", this.autos);
        console.log("Auto agregado correctamente");
    },

// 8. Por último, creá el método venderAuto el cual deberá recibir una patente por
// parámetro, luego recorrerá la lista de autos de concesionaria y, cuando
// encuentre al auto indicado, deberá modificar su propiedad “vendido” a “true”.
// Luego, se debe actualizar la base de datos con la lista actualizada como en el
// punto anterior.
    venderAuto: function(patente) {

        let seleccionado;
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.patente == patente) {
                seleccionado = auto;
                auto.vendido = true;
                break;
            }
        }
        if (seleccionado) {
            this.autos.push(seleccionado);
            helper.escribirJson("autos", this.autos);                
        }
        return ("El vehículo: "+ seleccionado.marca + " " +
        seleccionado.modelo + " ha sido vendido");
    },
// proponemos algunos métodos extra que podrías crear para abarcar más funcionalidades.
// 1. Crear un método llamado totalDeVentas que recorra la lista de autos y vaya
// sumando todos los precios de vehículos que hayan sido vendidos, y que retorne el
// precio total.
    totalDeVentas: function () {
    
        let total = 0;
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if(auto.vendido){
                total += auto.precio;
            }
        }
        return (`El total de ventas es: $${total}.`)
    },

// 2. Crear un método llamado eliminarAuto el cual deberá recibir una patente por
// parámetro y eliminar el vehículo indicado. Investigá cómo podés hacer para
// eliminar un elemento específico de un array. Luego deberás actualizar la base de
// datos como en puntos anteriores.
    eliminarAuto: function(patente) {
        
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.patente == patente) {
                this.autos.splice(i, 1);
                helper.escribirJson("autos", this.autos);

                return ("El vehículo: "+ auto.marca + " " +
                auto.modelo + " ha sido eliminado");        
            }
        }
        return "No se ha encontrado vehiculo con la patente especificada."
    },
}
// console.log(concesionaria.autos);
// concesionaria.agregarAuto("pruebaNueva", "Altima", 2020, 1000000, "444444Z");
//console.log(concesionaria.venderAuto("MCU947"));
// console.log(concesionaria.totalDeVentas());
// console.log(concesionaria.eliminarAuto("MCU947"));
// console.log(concesionaria.autos);