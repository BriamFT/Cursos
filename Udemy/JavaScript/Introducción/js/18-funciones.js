'use strict'

//Funciones
/* 
Una función es una agrupación reutilizable de un conjunto de instrucciones
que tienen como objetivo cumplir con una tarea especifica.
*/


// Definición de la función
function calculadora(numero1, numero2, mostrar = false) {

    if (!mostrar) {
        impresionConsola(numero1, numero2);
    } else {
        impresionDocumento(numero1, numero2);
    }
    return true;
}


function impresionConsola(numero1, numero2) {
    console.log("************************************")
    console.log("Hola soy la calculadora!!");
    // Conjunto de instrucciones
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
}

function impresionDocumento(numero1, numero2) {
    document.write("************************************ <br>")
    document.write("Hola soy la calculadora!!<br>");
    // Conjunto de instrucciones
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br>");
    document.write("División: " + (numero1 / numero2) + "<br>");
}

// Invocación de la función
calculadora(5, 1, true);
calculadora(2, 8);

/*
for (var i = 0; i <= 10; i++) {
    calculadora(i, 5);
    console.log("Iteración: " + i);
}
*/
