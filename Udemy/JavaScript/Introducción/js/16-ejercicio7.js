'use strict'

/*
 EJERCICIO 7
    Programa que muestre la tabla de multiplicar de un número
    introducido por el usuario.
*/
var numero;
do {
    numero = parseInt(prompt("Ingresa un número >= 0"), 0);
} while (isNaN(numero) || numero < 0)

document.write("<h2>Tabla de multiplicar del número (elegido por el usuario): " + numero + "<h2>");

for (var i = 0; i <= 10; i++) {
    document.write("<p>" + numero + " x " + i + " = " + (numero * i) + "</p>");
}


document.write("<h1>Todas las tablas de multiplicar (básicas)<h1>");

for (var j = 0; j <= 10; j++) {
    document.write("<h2>Tabla de multiplicar del número: " + j + "<h2>");
    for (var i = 0; i <= 10; i++) {
        document.write("<p>" + j + " x " + i + " = " + (j * i) + "</p>");
    }
}