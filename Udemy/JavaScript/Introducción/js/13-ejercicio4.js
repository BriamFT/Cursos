'use strict'

/*
 EJERCICIO 4
    Programa que muestre todos los números IMPARES que se en encuentran 
    entre un intervalo introducido por el usuario.
*/

do {
    var numero1 = parseInt(prompt("Ingresa el limite inferior: ", 0));
    var numero2 = parseInt(prompt("Ingresa el limite superior: ", 0));
}while(isNaN(numero1) || isNaN(numero2))

document.write("<h2>Lista de números IMPARES entre: " + numero1 + " - " + numero2 + "</h2>");

if(numero1 > numero2){
    for(var i =  numero1; i >= numero2; i--){
        if(i % 2 != 0){
        document.write(i + "<br>");
        }
    }
} else {
    for(var i =  numero1; i <= numero2; i++){
        if(i % 2 != 0){
            document.write(i + "<br>");
        }
    }
}
