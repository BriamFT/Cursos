'use strict'

// Transformación de textos
var numero = 117;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "excelente curso!!";

var dato = numero.toString();  // Convertir una variable a una variable de tipo string
    dato = texto1.toUpperCase(); // Convertir todas las letras de una cadena de texto a mayusculas
    // dato = texto2.toLowerCase(); // Convertir todas las letras de una cadena de texto a minusculas

console.log(typeof dato + " - " + dato);


// Calcular longitud de una variable de tipo String
var nombre = "Briam Flores Torres";
console.log("Tamaño de la variable nombre: " + nombre.length); 

// Concatenar - unir textos
var superTexto = texto1 + ", " + texto2;
var otroTexto = texto1.concat(", " + texto2);

console.log(superTexto);
console.log(otroTexto); 

// Métodos de busqueda
var busqueda = texto1.indexOf("curso"); // => var busqueda = texto1.search("curso");
console.log(busqueda);

// Ultima conincidencia en caso de que se repita la palabra...
var busqueda2 = otroTexto.lastIndexOf("curso");
console.log(busqueda2);

    // Match - Devuelve un array con propiedades que definen la busqueda.
    var busqueda3 = texto2.match("curso");
    console.log(busqueda3);

    // Para hacer una busqueda de todos los elementos dentro de la cadena de texto...
    var busqueda4 = otroTexto.match(/curso/g);
    console.log(busqueda4);

// Busqueda a partir de la posición del caracter y el número de caracteres
var busqueda5 = texto1.substr(23,10); // JavaScript
console.log(busqueda5);

// Selección de un caracter de un string mediante su indice
var busqueda6 = nombre.charAt(6);
console.log(busqueda6); //Briam Flores => F

// Determinar si una cadena de texto inicia con esos caracteres o no...
var busqueda7 = texto1.startsWith("Bien");
console.log(busqueda7); // Devuelve un valor booleano

// Determinar si una cadena de texto termina con esos caracteres/palabra o no...
var busqueda8 = texto1.endsWith("JavaScript");
console.log(busqueda8); // Devuelve un valor booleano

// Determina si una cadena de texto incluye esos caracteres o no... (Exactamente igual como se le indique)
var busqueda9 = nombre.includes("Flores Torres Briam");
console.log(busqueda9);


// Funciones de REEMPLAZO
var nombreNuevo = nombre.replace("Briam","Byron");
console.log("Nombre inicial: " + nombre + "\nNombre nuevo: " + nombreNuevo);


var apellidos = nombre.slice(6); //Corta la cadena de texto a partir del indice que se le indique.
console.log(apellidos);

// SPLIT Separa el texto en un array, según el separador indicado.
var nombreSeparado = nombre.split(" ");
console.log(nombreSeparado);

// TRIM Elimina todo el espaciado (inicial, final) de una cadena de texto
var textoErroneo = "    briam.flores11@gmail.com    ";
var textoCorrecto = textoErroneo.trim();
console.log("Texto con espaciados: " + textoErroneo + "\nTexto sin espaciados: " + textoCorrecto);

