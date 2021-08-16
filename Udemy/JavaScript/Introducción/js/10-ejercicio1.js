'use strict'

/*
 EJERCICIO 1
    Programa que pida dos números al usuario y 
    que identifique cual es el mayor, cual es menor y
    si estos son iguales.

    Extra: Si los datos no son números, que vuelva a pedir los números.
*/
do {
    var numero1 = parseInt(prompt("Ingresa el número 1: ", 0));
    var numero2 = parseInt(prompt("Ingresa el número 2: ", 0));

    console.log("Número 1: " + numero1 + "\n" + "Número 2: " + numero2);
} while (isNaN(numero1) || isNaN(numero2))

if (numero1 == numero2) {
    alert("Los número son iguales: " + numero1 + " == " + numero2);
} else if (numero1 > numero2) {
    alert("El número mayor es: " + numero1);
    alert("El número menor es: " + numero2);
    console.log(" --> " + numero1 + " > " + numero2);
} else if (numero2 > numero1) {
    alert("El número mayor es: " + numero2);
    alert("El número menor es: " + numero1);
    console.log(" --> " + numero2 + " > " + numero1);
} else {
    alert("Introduzca números correctos, intentelo de nuevo...");
}
