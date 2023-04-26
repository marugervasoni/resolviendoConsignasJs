// Crear el código JS que exprese los siguientes enunciados:
// 1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
// debe ser mayor a 1,30 m.
let edad = 13;
let altura = 1.31;
let subirMontañaRusa = edad > 12 && altura > 1.30; 
//console.log(subirMontañaRusa);

// 2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
// debe usar el flash.
let suficienteLuz = true;
let movimientoRapido = false;
let camaraUsaFlash = !suficienteLuz || movimientoRapido;
//console.log(camaraUsaFlash); 

// 3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
// parciales, o si obtiene un 4 en el examen final.
let nota = 7;
let parcialesRendidos = 2;
let rindioFinal = false;
let pasarDeNivel = (nota >= 7 && parcialesRendidos === 2) || (nota >= 4 && rindioFinal)
//console.log(pasarDeNivel);

// 4. Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
// prácticas de piano y lo hizo de memoria.
let tareaRealizada = true;
let tocoPracticasPiano = true;
let deMemoria = true;
let permitirTv = tareaRealizada && (tocoPracticasPiano && deMemoria);
//console.log(permitirTv);