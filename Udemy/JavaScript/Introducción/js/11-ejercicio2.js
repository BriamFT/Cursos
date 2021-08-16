'use strict'

/*
 EJERCICIO 2
    Utilizando un bucle, mostrar la suma y la media de los números introducidos
    hasta introducir un número negativo y ahí mostrar el resultado
*/
var numero = 0;
var suma = 0; 
var i = 0;

do{
    numero = parseInt(prompt("Ingresa un número: (Hasta que uno sea negativo)", 0));
    if(numero < 0 || isNaN(numero)){
        break;
    }
    i++;
    suma += numero;
    console.log("Suma: " + suma + "\t Iteración: " + i);
} while(numero >= 0)

if(i == 0){
    alert("No se ingresaron datos correctos...");
} else {
    alert("La suma de los números son: " + suma);
    alert("La media de los números es: " + suma/i);
}