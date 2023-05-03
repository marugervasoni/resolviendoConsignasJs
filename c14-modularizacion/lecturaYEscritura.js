// // 1.En tu archivo de JavaScript requerí el módulo nativo File System para
// // poder trabajar con sus funcionalidades.
const fs = require('fs');

// // 2. Ahora vas a realizar tu primera función, la de lectura de archivos. ¿Qué función del
// // módulo fs podés utilizar para realizar una lectura sincrónica del archivo JSON?
// // Creá una función que reciba como parámetro un string con el nombre del archivo
// // JSON, realice la lectura y haga un parseo de los datos para poder utilizarlos como
// // un array de objetos literales.
// const leerJson = function (nombreArchivo) {

//     return JSON.parse(
//         fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", 'utf-8')
//     )
// }
// //console.log(leerJson('autos'));

// // 3.Creá una función que reciba como parámetros el nombre del archivo y los datos a
// // convertir en JSON. Para poder crear tu base de datos en JSON utilizarás la
// // función de lectura para poder manipular el listado de autos —modificar y agregar
// // autos—, y la función de escritura para sobrescribir nuestro JSON con la nueva lista
// // actualizada cuando sea necesario. 
// const escribirJson = function (nombreArchivo, datos) {

//     return fs.writeFileSync(
//         __dirname + nombreArchivo + "json",JSON.stringify(datos,null,2)
//     );
 
// };
// console.log(escribirJson(autos));

// 4. Una vez creadas nuestras funciones, necesitamos poder exportarlas para utilizar
// en otro u otros archivos que necesitemos. 
const jsonHelper = {
leerJson: function (nombreArchivo) {
    return JSON.parse(
        fs.readFileSync(__dirname + "/" + nombreArchivo + ".json", 'utf-8')
    ); 
    },
escribirJson: function (nombreArchivo, datos) {
    return fs.writeFileSync(
        __dirname + nombreArchivo + "json",JSON.stringify(datos,null,2)
    );
    },
}
module.exports = jsonHelper;
