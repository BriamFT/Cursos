'use strict'

/*
 EJERCICIO 8
    Programa que simule una calculador básica
        Pida dos números al usuario
        Valide los números
        Mostrar en el cuerpo de la página y por la consola el resultado de:
            Sumar
            Restar
            Multiplicar
            Dividir
*/

do {
    var numero1 = parseInt(prompt("Ingresa el número 1 >= 0: ", 0));
    var numero2 = parseInt(prompt("Ingresa el número 2 >= 0: ", 0));
} while (isNaN(numero1) || numero1 < 0 || isNaN(numero2) || numero2 < 0)

document.write("<h2> Resultados de las operaciones entre: " + numero1 + " - " + numero2 + "</h2>");

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var resultado =
    "Suma: " + numero1 + " + " + numero2 + " = " + suma + "<br/>" +
    "Resta: " + numero1 + " - " + numero2 + " = " + resta + "<br/>" +
    "Multiplicación: " + numero1 + " * " + numero2 + " = " + multiplicacion + "<br/>" +
    "División: " + numero1 + " / " + numero2 + " = " + division + "<br/>";

var resultadoCMD =
    "Suma: " + numero1 + " + " + numero2 + " = " + suma + "\n" +
    "Resta: " + numero1 + " - " + numero2 + " = " + resta + "\n" +
    "Multiplicación: " + numero1 + " * " + numero2 + " = " + multiplicacion + "\n" +
    "División: " + numero1 + " / " + numero2 + " = " + division + "\n";

document.write(resultado);
console.log(resultadoCMD);
alert(resultadoCMD);