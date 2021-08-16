'use strict'

/*
 EJERCICIO 5
    Programa que muestre todos los números divisores de un número 
    introducido por el usuario.
*/

do {
    var numero = parseInt(prompt("Ingresa un número > 0: ", 0))
}while(isNaN(numero) || numero < 0)

document.write("<h2>Lista de divisores del número: " + numero + "</h2>");
for(var i = numero; i > 0; i--) {
    if(numero % i == 0){
        document.write(i + "<br>");
    }
}