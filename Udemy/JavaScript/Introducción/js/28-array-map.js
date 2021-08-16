'use strict'

// Map
// Función que permite transformar los elementos de un arreglo. (Devolviendo la misma longitud del arreglo original)
// Pero con los elementos cambiados dependiendo de la función. 


// Función de suma total (Ejemplo de una mala practica de una función de este tipo)
const suma = (ns) => {
    let acumulado = 0;
    for (let i = 0; i < ns.length; i++) {
        acumulado += ns[i];
    }
    return acumulado;
}

const numeros = [1, 2, 3, 4, 5]
//Multiplicar * 2   
const multiplicados = numeros.map(x => x * 2);
console.log(multiplicados);
// A pares
const parejas = numeros.map(x => [x,x]);
console.log(parejas);

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Chanchito', edad: 3, tipo: 'perro'},
    { nombre: 'Pelusa', edad: 10, tipo: 'gato'},
    { nombre: 'Simbita', edad: 2, tipo: 'gato'},
];
//Edad promedio de las mascotas
const edades = mascotas.map(x => x.edad);
console.log(edades);
const resultado = suma(edades);
console.log(resultado /  edades.length);