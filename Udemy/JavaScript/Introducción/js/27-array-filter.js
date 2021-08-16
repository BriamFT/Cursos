'use strict'

// Filter
// Función para filtrar elementos de un arreglo

// Es una función inmutable (Devuelve un array completamente nuevo, de la misma cantidad o menos de array original)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mascotas = [
    { nombre: 'Puchini', edad: 12, raza: 'perro'},
    { nombre: 'Chanchito', edad: 3, raza: 'perro'},
    { nombre: 'Pelusa', edad: 10, raza: 'gato'},
    { nombre: 'Simbita', edad: 2, raza: 'gato'},
];

console.log("Arreglos iniciales:");
console.log("Mascotas: ",mascotas,"Números: ",numeros);

const numerosFiltrados = numeros.filter(x => x <= 5);
console.log("(Array) Números filtrados: ",numerosFiltrados);

const perros = mascotas.filter(x => x.raza == 'perro');
console.log("Array de perros: ",perros);

const gatos = mascotas.filter(x => x.raza == 'gato');
console.log("Array de gatos: ",gatos);