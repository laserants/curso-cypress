/* ====== FUNCIONES  ======= */
function sum(x, y) {
    return x + y;
}

// Llamada a la función de sum
sum(5, 3);

/*
Todas las funciones tienen un return implícito o explícito
Cualquier código que esté después del return no va a ser ejecutado
*/
function sum(x, y) {
    return x + y;
    console.log(`Voy a sumar ${x} + ${y}`);
}


/* ====== VARIABLES ======= */
var nombre = "Fernando";
function mostrarApellido() {
    let edad = 30;
    const sexo = "masculino";
    console.log(`Mi edad es: ${edad}`);
    console.log(`Mi sexo es: ${sexo}`);
}


/* ====== TIPOS DE OBJETOS Y SUS MÉTODOS MÁS COMUNES ======= */

// STRINGS
var nombre = "John";
var apellido = 'Doe';
var edad = 30;
console.log(`Largo de la cadena de nombre: ${nombre.length}`);
console.log(`Convertir a minúsculas: ${nombre.toLowerCase()}`);
console.log(`Convertir a mayúsculas: ${nombre.toUpperCase()}`);
console.log(`Convertir un objeto a string: ${edad.toString()}`);
console.log(`Acceder a un caracter: ${nombre[2]}`)
console.log(`Concatenar ${nombre + apellido}`)
console.log(`Substring`, nombre.substring(0, 2))


// NÚMEROS
var edad = 30;
const pi = 3.14;
var negativo = -30;

console.log(`Convertir un string a número`, Number("30"));
console.log(`Convertir un string a número`, parseFloat("30"));
console.log(`Convertir un string a número`, parseInt("30"));

// OBJETOS
var carro = {
    llantas: 4,
    owner: "Fernando Barrios",
    marchaAdelante: function() {
        console.log('voy marcha hacia adelante');
    },
    'key extranio': -3.1416
}

console.log(`Cantidad de llantas ${carro.llantas}`)
carro.marchaAdelante();
console.log('imprimir: ' + carro['key extranio'])
console.log(`Convertir objeto a string:`, JSON.stringify(carro))
const objetoStr = '{"llantas":2,"owner":"Carlos"}';
console.log('Convertir string a objeto', JSON.parse(objetoStr))
console.log(`Listar todos los keys de un objeto ${Object.keys(carro)}`)

// ARRAYS
var listadoCarros = [
    {
        llantas: 2,
        owner: "fernando"
    },
    {
        llantas: 4,
        owner: "Carlos"
    }
]

var listadoEdades = [30, 40, 50, 60];
var listadoNombres = ['John', 'Carlos', "Karina", "Carmela"];
console.log(`Nombre en la primer posición ${listadoNombres[0]}`)
console.log(`Cantidad de Llantas del segundo carro ${listadoCarros[1].llantas}`)
// añadir una nueva entrada a un array
listadoEdades.push(20)
console.log(listadoEdades);
// Eliminar un elemento en un array
listadoEdades.splice(0, 1);
console.log(listadoEdades);