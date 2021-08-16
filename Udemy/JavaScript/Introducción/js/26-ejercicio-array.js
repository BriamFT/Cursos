'use strict'

/*
 EJERCICIO ARRAYS
    1. Pida 6 números y los guarde en un array
    2. Mostrar el array completo, en el curpo de la pagina y la consola
    3. Ordenarlo y mostrarlo
    4. Invertir su orden y mostrarlo
    5. Mostrar cuantos elementos tiene el array
    6. Busqueda de un valor introducido por el usuario, decir si se encuentra en el array y su indice
*/

// var numeros = new Array(6);
var numeros = [];

for(let i = 0; i < 6; i++){
   // numeros[i] = parseInt(prompt(`Ingresa el número ${i}`));
    // Haciendolo con push
    numeros.push(parseInt(prompt(`Ingresa el número ${i}`)));
}

// Arreglo en bruto
mostrarArray(numeros, "Arreglo completo");

// Arreglo ordenado
numeros.sort((a,b) => a - b);
mostrarArray(numeros, "Arreglo ordenado");


// Arreglo al reves
numeros.reverse();
mostrarArray(numeros, "Arreglo al reves:");

// Tamaño arreglo
document.write(`<h2> Tamaño del arreglo: ${numeros.length} </h2>`)

// Busqueda de número
var numero;
do {
    numero = parseInt(prompt("Ingresa un número a buscar: ",0));
} while (isNaN(numero));

var busqueda = numeros.some(numerito => numerito == numero)
console.log(busqueda);
if(busqueda){
    console.log(numeros.findIndex(numerito => numerito == numero));
}



function mostrarArray(elementos, titulo = ""){
    document.write(`<h1> ${titulo} </h1>`);
    console.log(`${titulo}:`);
    elementos.forEach((elemento, index) => {
        document.write(`<h3>Número ${index}: ${elemento}</h3>`);
    });
    console.log(numeros);
}