'use strict'

/*
 EJERCICIO 3
    Programa que muestre todos los números que se en encuentran 
    entre un intervalo introducido por el usuario.
*/
do {
    var numero1 = parseInt(prompt("Ingresa el limite inferior del intervalo: ", 0));
    var numero2 = parseInt(prompt("Ingresa el limite superior del intervalo: ", 0));
} while (isNaN(numero1) || isNaN(numero2))

document.write("<h2>Lista de números entre: " + numero1 + " - " + numero2 + "</h2>");

if (numero1 < numero2)
    for (var i = numero1; i <= numero2; i++) {
        document.write(i + "<br>")
    }
else {
    for (var i = numero1; i >= numero2; i--) {
        document.write(i + "<br>")
    }
}
