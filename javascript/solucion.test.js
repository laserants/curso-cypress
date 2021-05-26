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
  return a + b;
}

expect(sum(5, 3)).toBe(8);
expect(sum(5, 5)).toBe(10);

/* ======== STRINGS ========  */
function largoCadena(str) {
  return str.length;
}

function convertirMayusculas(str) {
  return str.toUpperCase();
}

function convertirMinusculas(str) {
  return str.toLowerCase();
}

function obtenerPrimerCaracter(str){
  return str[0];
}

function obtenerUltimoCaracter(str){
  return str[str.length - 1];

}

function devolverNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`
}

expect(largoCadena("hola")).toBe(4);
expect(convertirMayusculas("hola")).toBe("HOLA");
expect(convertirMinusculas("HOLA")).toBe("hola");
expect(obtenerPrimerCaracter("John")).toBe("J");
expect(obtenerUltimoCaracter("John")).toBe("n");
expect(devolverNombreCompleto("John", 'Doe')).toBe("John Doe");

/* ======== NÚMEROS ========  */
function convertirNumero(str) {
  return Number(str);
}

expect(convertirNumero("564")).toBe(564);

/* ======== OBJETOS y ARRAYS ========  */
function devolverPrimerPosicion(arr) {
  return arr[0];
}
function convertirObjetoAString(obj) {
  return JSON.stringify(obj);
}
function devolverNombreFormateadoObj(obj) {
  const nombre = obj.nombre;
  const apellido = obj.apellido;
  const nombreF = nombre[0].toUpperCase() + nombre.substring(1, nombre.length).toLowerCase();
  const apellidoF = apellido[0].toUpperCase() + apellido.substring(1, apellido.length).toLowerCase();
  return `${nombreF} ${apellidoF}`;
}

function devolverPrimerKeyObj(obj) {
  return Object.keys(obj)[0];
}
function sumarEdadesObjs(obj1, obj2) {
  return Number(obj1.edad) + Number(obj2.edad);
}


function eliminarTercerElementoArr(arr) {
  arr.splice(2, 1);
  return arr;
}


function devolverArrayConSumaFinalElemento(arr) {
  arr.push(Number(arr[0]) + Number(arr[1]))
  return arr;
}

expect(devolverPrimerPosicion([1, 2, 3])).toBe(1);
expect(convertirObjetoAString({"nombre":"Fernando"})).toBe('{"nombre":"Fernando"}');
expect(devolverNombreFormateadoObj({nombre: "FernAndO", apellido: "BarrioS"})).toBe("Fernando Barrios");
expect(devolverPrimerKeyObj({a: 1, b: 2})).toBe('a');
expect(sumarEdadesObjs({nombre: 'Fer', edad: 30}, {nombre: 'Carmen', edad: 31})).toBe(61);
expect(sumarEdadesObjs({nombre: 'Fer', edad: '30'}, {nombre: 'Carmen', edad: 31})).toBe(61);
expect(eliminarTercerElementoArr([1,2,3,4,5,6])).toBe([1,2,4,5,6]);
expect(devolverArrayConSumaFinalElemento([20, 40])).toBe([20, 40, 60]);

