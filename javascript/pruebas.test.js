function expect(actual) {
  return {
    toBe: function (expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error(`✕ ${actual} no es igual a ${expected}`)
      } else {
        console.log(`✓ ${actual} es igual a ${expected}`)
      }
    },
  };
}

/* ======== FUNCIONES ========  */
function sum(a, b) {
}

expect(sum(5, 3)).toBe(8);
expect(sum(5, 5)).toBe(10);

/* ======== STRINGS ========  */
function largoCadena(str) {
}

function convertirMayusculas(str) {
}

function convertirMinusculas(str) {
}

function obtenerPrimerCaracter(str){

}

function obtenerUltimoCaracter(str){

}

function devolverNombreCompleto(nombre, apellido) {

}

expect(largoCadena("hola")).toBe(4);
expect(convertirMayusculas("hola")).toBe("HOLA");
expect(convertirMinusculas("HOLA")).toBe("hola");
expect(obtenerPrimerCaracter("John")).toBe("J");
expect(obtenerUltimoCaracter("John")).toBe("n");
expect(devolverNombreCompleto("John", 'Doe')).toBe("John Doe");

/* ======== NÚMEROS ========  */
function convertirNumero(str) {

}

expect(convertirNumero("564")).toBe(564);

/* ======== OBJETOS y ARRAYS ========  */
function devolverPrimerPosicion(arr) {}
function convertirObjetoAString(obj) {}
function devolverNombreFormateadoObj(obj) {}
function devolverPrimerKeyObj(obj) {}
function sumarEdadesObjs(obj1, obj2) {}
function eliminarTercerElementoArr(arr) {}
function devolverArrayConSumaFinalElemento(arr) {}

expect(devolverPrimerPosicion([1, 2, 3])).toBe(1);
expect(convertirObjetoAString('{"nombre":"Fernando"}')).toBe('{"nombre":"Fernando"}');
expect(devolverNombreFormateadoObj({nombre: "FernAndO", apellido: "BarrioS"})).toBe("Fernando Barrios");
expect(devolverPrimerKeyObj({a: 1, b: 2})).toBe('a');
expect(sumarEdadesObjs({nombre: 'Fer', edad: 30}, {nombre: 'Carmen', edad: 31})).toBe(61);
expect(sumarEdadesObjs({nombre: 'Fer', edad: '30'}, {nombre: 'Carmen', edad: 31})).toBe(61);
expect(eliminarTercerElementoArr([1,2,3,4,5,6])).toBe([1,2,4,5,6]);
expect(devolverArrayConSumaFinalElemento([20, 40])).toBe([20, 40, 60]);


