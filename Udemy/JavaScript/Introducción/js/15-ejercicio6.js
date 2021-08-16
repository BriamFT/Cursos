'use strict'

/*
 EJERCICIO 6
    Programa que identifique si un número es par o impar:
        1. Ventana prompt
        2. Validación del número
*/

var numero;

do {
    numero = parseInt(prompt("Ingrese un número >= 0"), 0);
} while(isNaN(numero) || numero < 0)

if(numero % 2 == 0) {
    alert("El número: " + numero + " es par");
} else {
    alert("El número: " + numero + " es impar");
}