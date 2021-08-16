'use strict'

// Arrays Multidimensionales

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['Iron Man 3', 'Star Wars VIII', 'Harry Potter'];

var cine = [categorias, peliculas];

console.log(cine[0][2]);
console.log(cine[1][1]);

// PUSH
var elemento = "";
do {
    elemento = prompt("Introduce una pelicula: \n 'FIN' para terminar... ");
    peliculas.push(elemento); // Introduce un elemento en el array (al final)
}while(elemento != "FIN")

// POP
peliculas.pop(); // Elimina el último elemento del array
console.log(peliculas);

// Eliminar un elemento en especifico en el array
var indice = peliculas.indexOf('Star Wars VIII');
console.log(indice);

if(indice != -1){ // -1 indica que no encontro el elemento en el array
    peliculas.splice(indice, 2); // La función SPLICE permite borrar los elementos definidos a partir de cierto indice.
    console.log(peliculas);
}


// Convertir un array en un String
var peliculas_string = peliculas.join();
console.log(peliculas_string);

// Convertir un string en un array
var cadena = "Texto1, Texto2, Texto3, Texto4, Texto5";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

// Ordenando un array
peliculas.sort();
console.log(peliculas);

// Poner al reves un array
peliculas.reverse();
console.log(peliculas);
